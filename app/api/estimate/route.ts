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

## 2026 Clark County / Vancouver WA Market Rate Reference

Use these verified local rates when building your estimate:

**Labor**
- Licensed contractor labor: $65–$95/hr (Norbilt rate; unlicensed handymen run $35–$55/hr but can't pull permits)
- Tile setter: $8–$18/sq ft labor only
- Flooring installer: $3–$6/sq ft labor (LVP/hardwood); $6–$12/sq ft (tile)
- Electrician (subcontracted): $85–$120/hr
- Plumber (subcontracted): $90–$130/hr

**Bathroom Remodel**
- Cosmetic refresh (paint, hardware, light fixtures, mirror): $800–$2,500
- Mid-range update (vanity, toilet, tub surround, flooring): $5,000–$12,000
- Full gut remodel (everything new, layout unchanged): $15,000–$28,000
- Custom / layout change / high-end finishes: $28,000–$50,000+
- Tub-to-shower conversion: $1,500–$25,000 depending on scope (prefab insert vs. custom tile walk-in)
- Walk-in shower tile (labor + materials): $4,500–$12,000

**Kitchen Remodel**
- Cosmetic (paint, hardware, backsplash): $1,500–$4,000
- Mid-range (cabinets, countertops, sink, appliances): $15,000–$35,000
- Full custom remodel: $40,000–$80,000+
- Cabinet refacing only: $3,000–$8,000
- Countertop replacement (laminate): $1,200–$2,500; (quartz/granite): $3,500–$7,000

**Drywall**
- Small hole repair (under 6 in): $150–$300
- Medium patch (6–12 in): $250–$500
- Large section (per 4×8 sheet area): $400–$800
- Full room drywall + texture: $1.50–$3.50/sq ft labor+materials
- Texture matching (knockdown/orange peel): add $0.50–$1.00/sq ft

**Flooring**
- LVP (luxury vinyl plank) installed: $4–$8/sq ft total
- Engineered hardwood installed: $7–$14/sq ft total
- Tile installed: $10–$22/sq ft total
- Subfloor repair/leveling: $3–$8/sq ft additional
- Demo/removal of existing flooring: $1–$2/sq ft

**Doors & Windows**
- Interior door (prehung, install): $300–$600 per door
- Exterior door (install only): $500–$1,000
- Window replacement (standard double-hung): $400–$900 per window installed
- Sliding glass door: $1,500–$3,500 installed

**Other Services**
- Lighting fixture swap (per fixture): $150–$350
- Recessed light install (new, per can): $250–$450
- Deck repair: $30–$60/sq ft
- Fence repair: $25–$50/lin ft
- Clark County building permit: $150–$800 depending on scope (required for structural, electrical, plumbing)

**Key Cost Drivers for Clark County**
- Pre-1995 homes often have asbestos texture (adds $500–$2,000 for abatement if disturbed)
- Lead paint common in pre-1978 homes
- Vancouver's wet climate means moisture damage is common behind tile; budget 10–20% contingency
- Material costs up ~8% since 2024 due to tariffs on imported goods

---

A homeowner in ${city || "Clark County, WA"} needs an estimate:

SERVICE: ${service}
PROJECT DETAILS: ${JSON.stringify(details, null, 2)}
DESIRED TIMELINE: ${timeline || "Flexible"}
ADDITIONAL NOTES: ${notes || "None"}

Provide a realistic, professional estimate based on the 2026 contractor labor rates and material costs above for Vancouver, WA / Clark County. Norbilt is a quality (not budget, not luxury) contractor — account for skilled labor, proper materials, and professional finish. Use the rate sheet above as your primary reference; adjust for project-specific scope.

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
			model: "claude-sonnet-4-6",
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
