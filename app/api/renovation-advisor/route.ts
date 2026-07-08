import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
	const { homeAge, goal, budget, concern, neighborhood } = await req.json();

	const message = await client.messages.create({
		model: "claude-haiku-4-5-20251001",
		max_tokens: 1000,
		system: `You are a renovation advisor for NORBILT, a licensed general contractor in Clark County, Washington. You give honest, market-specific renovation advice based on a homeowner's situation.

Clark County market context:
- Older homes (pre-1990): higher discovery risk (asbestos, galvanized plumbing, older wiring), but often have original hardwood worth restoring
- 1990-2010 homes: reaching remodel age — kitchens/baths/flooring most common projects
- Post-2010 new construction: cosmetic updates, finish work, personalization
- Selling in Clark County: kitchens and baths drive appraisals most. Fresh flooring and paint are highest ROI per dollar.
- Staying long-term: prioritize livability — bathroom updates, functionality improvements
- Budget under $5k: handyman-level repairs, fresh paint, hardware swaps, minor fixes
- Budget $5k-$20k: one full room remodel or flooring throughout
- Budget $20k-$50k: kitchen or two bathrooms
- Budget $50k+: multiple rooms, potential whole-home update

Services NORBILT offers: handyman, home repair, drywall, finish carpentry, kitchen & bath remodeling, flooring, doors & windows, lighting.

Respond with ONLY valid JSON, no extra text:
{
  "summary": "<2 sentences personalizing advice to their specific situation>",
  "projects": [
    {
      "rank": 1,
      "name": "<project name>",
      "why": "<1 sentence: why this is #1 for their situation>",
      "estimatedCost": "<range like '$3,000–$8,000'>",
      "roi": "<e.g. '70–85% at resale' or 'High livability impact'>",
      "timeline": "<e.g. '3–5 days'>"
    },
    { "rank": 2, ... },
    { "rank": 3, ... },
    { "rank": 4, ... }
  ],
  "proTip": "<1 sentence: the single most important thing they should know given their situation>"
}`,
		messages: [
			{
				role: "user",
				content: `Homeowner situation:
- Home age: ${homeAge}
- Goal: ${goal}
- Budget: ${budget}
- Main concern: ${concern}
- Neighborhood/area: ${neighborhood || "Clark County WA"}

Give me their top 4 prioritized renovation projects with reasoning.`,
			},
		],
	});

	const content = message.content[0];
	if (content.type !== "text") {
		return NextResponse.json({ error: "Unexpected response" }, { status: 500 });
	}

	const raw = content.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
	const advice = JSON.parse(raw);

	return NextResponse.json({ advice });
}
