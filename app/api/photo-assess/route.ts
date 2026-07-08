import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const file = formData.get("photo") as File | null;

	if (!file) {
		return NextResponse.json({ error: "No photo provided" }, { status: 400 });
	}

	const bytes = await file.arrayBuffer();
	const base64 = Buffer.from(bytes).toString("base64");
	const mediaType = (file.type || "image/jpeg") as
		| "image/jpeg"
		| "image/png"
		| "image/gif"
		| "image/webp";

	const message = await client.messages.create({
		model: "claude-sonnet-4-6",
		max_tokens: 800,
		system: `You are an expert contractor estimator for NORBILT, a licensed general contractor in Clark County, Washington. You analyze photos of home repair and remodeling projects and give honest, practical assessments.

2026 Clark County pricing reference:
- Drywall patch (small): $150–$400 | (large): $400–$1,200
- Full drywall room: $800–$2,500
- Bathroom remodel (cosmetic): $2,000–$8,000 | (mid-range): $8,000–$22,000
- Kitchen remodel (cosmetic): $1,500–$8,000 | (mid-range): $14,000–$35,000
- LVP flooring installed: $4–$7/sq ft
- Tile flooring installed: $9–$20/sq ft
- Hardwood installed: $8–$13/sq ft
- Tub-to-shower conversion: $1,500–$10,000
- Door install: $250–$500 | Window install: $350–$900
- Light fixture swap: $85–$200/fixture
- Paint (whole room): $700–$1,600
- Finish carpentry base/crown: $2–$10/lin ft
- Handyman labor: $85–$125/hr

Respond with ONLY valid JSON, no extra text:
{
  "issue": "<1 sentence: what you see in the photo>",
  "scope": "<1-2 sentences: what work is needed>",
  "urgency": "<'Cosmetic', 'Should address soon', or 'Address promptly — may worsen'>",
  "costRange": { "low": <integer>, "high": <integer> },
  "projectType": "<'Handyman job', 'Contractor job', or 'Could go either way'>",
  "timeline": "<e.g. '2–4 hours', '1 day', '3–5 days'>",
  "included": ["<item 1>", "<item 2>", "<item 3>"],
  "watchFor": "<1 sentence: any hidden issue to watch for or caveat>",
  "confidence": "<'High', 'Medium', or 'Low'>"
}`,
		messages: [
			{
				role: "user",
				content: [
					{
						type: "image",
						source: { type: "base64", media_type: mediaType, data: base64 },
					},
					{
						type: "text",
						text: "Analyze this home repair or remodeling photo. Give me an honest assessment of what I'm looking at, what work is needed, and a realistic cost range for Clark County WA in 2026.",
					},
				],
			},
		],
	});

	const content = message.content[0];
	if (content.type !== "text") {
		return NextResponse.json({ error: "Unexpected response" }, { status: 500 });
	}

	const raw = content.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
	const assessment = JSON.parse(raw);

	return NextResponse.json({ assessment });
}
