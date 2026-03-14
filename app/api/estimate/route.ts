import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { service, details, name, email, phone, city, timeline, notes } = body;

		if (!service || !details) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
		}

		const prompt = `You are an expert estimating assistant for Norbilt, a licensed and bonded general contractor in Vancouver, WA (Clark County). You specialize in interior remodeling, finish carpentry, drywall, kitchen and bath updates, door/window installation, flooring, lighting, and general home repair.

A homeowner in ${city || "Clark County, WA"} needs an estimate:

SERVICE: ${service}
PROJECT DETAILS: ${JSON.stringify(details, null, 2)}
DESIRED TIMELINE: ${timeline || "Flexible"}
ADDITIONAL NOTES: ${notes || "None"}

Provide a realistic, professional estimate based on 2025 contractor labor rates and material costs in Vancouver, WA / Clark County. Norbilt is a quality (not budget, not luxury) contractor — account for skilled labor, proper materials, and professional finish.

Respond with ONLY valid JSON in this exact format, no extra text:
{
  "priceRange": {
    "low": <integer>,
    "high": <integer>
  },
  "timeline": "<e.g. '4–6 hours', '1–2 days', '3–5 days'>",
  "included": [
    "<specific item included in scope>",
    "<specific item included in scope>",
    "<specific item included in scope>"
  ],
  "factors": [
    "<factor that could push price up or down>",
    "<factor that could push price up or down>",
    "<factor that could push price up or down>"
  ],
  "recommendation": "<1–2 sentence professional tip or insight for this specific project>",
  "confidence": "<'High', 'Medium', or 'Low' based on detail level provided>",
  "disclaimer": "This AI estimate is based on typical project parameters. Final pricing depends on site conditions, material choices, and exact project scope. Norbilt provides free on-site assessments with detailed written quotes."
}`;

		const message = await client.messages.create({
			model: "claude-haiku-4-5-20251001",
			max_tokens: 1024,
			messages: [{ role: "user", content: prompt }],
		});

		const content = message.content[0];
		if (content.type !== "text") {
			return NextResponse.json({ error: "Unexpected AI response" }, { status: 500 });
		}

		const rawText = content.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
		const estimate = JSON.parse(rawText);

		// Send lead notification to Norbilt
		if (name || email) {
			await resend.emails.send({
				from: "NORBILT Estimator <hello@norbilt.com>",
				to: ["hello@norbilt.com"],
				replyTo: email || "no-reply@norbilt.com",
				subject: `New AI Estimate Lead — ${service} — ${city || "Clark County"}`,
				html: `
          <h2 style="color:#1F2E2B">New AI Estimator Lead</h2>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>City:</strong> ${city || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Timeline:</strong> ${timeline || "Flexible"}</p>
          <p><strong>Project Details:</strong><br/>${JSON.stringify(details, null, 2).replace(/\n/g, "<br/>")}</p>
          ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
          <hr/>
          <h3 style="color:#2D5A3D">AI Estimate Generated</h3>
          <p><strong>Price Range:</strong> $${estimate.priceRange.low.toLocaleString()} – $${estimate.priceRange.high.toLocaleString()}</p>
          <p><strong>Timeline:</strong> ${estimate.timeline}</p>
          <p><strong>Confidence:</strong> ${estimate.confidence}</p>
          <p><strong>Included:</strong></p>
          <ul>${estimate.included.map((i: string) => `<li>${i}</li>`).join("")}</ul>
          <p><strong>Factors:</strong></p>
          <ul>${estimate.factors.map((f: string) => `<li>${f}</li>`).join("")}</ul>
          <p><strong>Recommendation:</strong> ${estimate.recommendation}</p>
        `,
			}).catch(() => {
				// Non-blocking — estimate still returns even if email fails
			});
		}

		return NextResponse.json({ estimate });
	} catch (error) {
		console.error("Estimate error:", error);
		return NextResponse.json({ error: "Failed to generate estimate" }, { status: 500 });
	}
}
