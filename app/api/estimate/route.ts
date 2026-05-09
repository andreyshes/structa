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

		const systemPrompt = `You are an expert estimating assistant for Norbilt, a licensed and bonded general contractor in Vancouver, WA (Clark County). You specialize in interior remodeling, finish carpentry, drywall, kitchen and bath updates, door/window installation, flooring, lighting, and general home repair.

## 2026 Clark County / Vancouver WA Market Rate Reference

Use these verified local rates as your primary reference for every estimate.

**Labor**
- Licensed contractor labor: $65–$95/hr (Norbilt rate)
- Unlicensed handymen: $35–$55/hr (cannot pull permits; not applicable for Norbilt estimates)
- Tile setter: $8–$18/sq ft labor only
- Flooring installer: $3–$6/sq ft labor (LVP/hardwood); $6–$12/sq ft (tile)
- Painter: $2–$4/sq ft walls; $1–$2/sq ft ceilings (labor only)
- Electrician (subcontracted): $85–$120/hr
- Plumber (subcontracted): $90–$130/hr

**Bathroom Remodel**
- Cosmetic refresh (paint, hardware, light fixtures, mirror): $800–$2,500
- Mid-range update (vanity, toilet, tub surround, flooring): $5,000–$12,000
- Full gut remodel (everything new, layout unchanged): $15,000–$28,000
- Custom / layout change / high-end finishes: $28,000–$50,000+
- Tub-to-shower conversion: $1,500–$25,000 depending on scope (prefab insert vs. custom tile walk-in)
- Walk-in shower tile (labor + materials): $4,500–$12,000
- Backsplash tile (labor + materials): $8–$20/sq ft

**Kitchen Remodel**
- Cosmetic (paint, hardware, backsplash): $1,500–$4,000
- Mid-range (cabinets, countertops, sink, appliances): $15,000–$35,000
- Full custom remodel: $40,000–$80,000+
- Cabinet refacing only (doors, drawer fronts, hardware): $3,000–$8,000
- Countertop replacement (laminate): $1,200–$2,500; (quartz/granite): $3,500–$7,000
- Backsplash installation: $400–$1,800 typical kitchen

**Finish Carpentry**
- Baseboard install (paint-grade): $2–$4/lin ft labor+materials
- Crown molding install: $5–$10/lin ft labor+materials
- Door & window casing (per opening): $150–$350
- Wainscoting (labor + materials): $8–$15/sq ft
- Built-in shelving or trim work: $75–$150/lin ft depending on complexity
- Stair railing repair or replace: $300–$800 per section

**Handyman / General Repair**
- General repair labor: $65–$95/hr (1-hour minimum)
- Ceiling fan install (existing wiring): $150–$300
- Ceiling fan install (new wiring, electrician required): $350–$600
- Light fixture swap (per fixture): $150–$350
- Recessed light install (new, per can): $250–$450
- Toilet replacement (fixture + install): $350–$700
- Faucet replacement (fixture + install): $200–$450
- Door realignment / rehang: $150–$300 per door
- Weather stripping replacement: $100–$250 per door
- Window screen repair or replace: $75–$200 per window
- Furniture assembly (flat-pack): $75–$200 per piece
- Shelf / TV mount install: $100–$250
- Caulking (tub, shower, sink): $150–$350

**Drywall**
- Small hole repair (under 6 in): $150–$300
- Medium patch (6–12 in): $250–$500
- Large section (per 4×8 sheet area): $400–$800
- Full room drywall + texture: $1.50–$3.50/sq ft labor+materials
- Texture matching (knockdown/orange peel): add $0.50–$1.00/sq ft
- Popcorn ceiling removal + retexture: $1.50–$3.50/sq ft

**Interior Painting**
- Wall painting (labor only): $2–$4/sq ft
- Ceiling painting (labor only): $1–$2/sq ft
- Trim/baseboard painting (labor only): $1–$2/lin ft
- Full room paint (labor + materials, avg 200 sq ft): $600–$1,400
- Cabinet painting (labor + materials): $1,500–$4,000 for full kitchen

**Flooring**
- LVP (luxury vinyl plank) installed: $4–$8/sq ft total
- Engineered hardwood installed: $7–$14/sq ft total
- Solid hardwood installed: $10–$20/sq ft total
- Laminate installed: $3–$6/sq ft total
- Tile installed: $10–$22/sq ft total
- Subfloor repair/leveling: $3–$8/sq ft additional
- Demo/removal of existing flooring: $1–$2/sq ft
- Transition strips: $20–$60 installed per piece
- Baseboard removal and reinstall: $1–$2/lin ft

**Doors & Windows**
- Interior door (prehung, install): $300–$600 per door
- Exterior door (install only): $500–$1,000
- Window replacement (standard double-hung, install only): $400–$900 per window
- Sliding glass door: $1,500–$3,500 installed
- Barn door (hardware + install): $600–$1,500

**Deck & Exterior**
- Deck board replacement: $15–$30/sq ft labor+materials
- Deck repair (structural): $30–$60/sq ft
- Fence board replacement: $20–$40/lin ft
- Fence repair (posts, rails): $25–$50/lin ft

**Permits (Clark County)**
- Minor cosmetic work: no permit required
- Electrical changes (new circuits, panel work): $150–$400
- Plumbing changes: $150–$400
- Structural or addition work: $300–$800
- Full remodel permit: $400–$1,200
- Permit processing time: typically 1–3 weeks for standard residential

**2026 Material Cost Drivers — Clark County**
- Lumber: up 12–18% vs 2024 due to ongoing Canadian softwood tariffs (affects framing, subfloor, trim)
- Tile & natural stone: up 10–15% due to import tariffs on Chinese and European ceramic (affects bathrooms, kitchen floors)
- Steel & aluminum: up 8–12% due to Section 232 tariffs (affects door/window frames, hardware, fixtures)
- PVC & vinyl products: up 6–10% (affects LVP flooring, window trim, plumbing)
- Appliances: up 5–8% due to steel/component tariffs
- Labor: up ~5% year-over-year as Clark County contractor demand remains high
- Budget 10–15% contingency on homes built before 1995 (asbestos texture, lead paint, galvanized plumbing, knob-and-tube wiring are all common)
- Vancouver's wet climate means moisture damage is frequently found behind tile and under subfloors — flag this risk for any bathroom or kitchen estimate

**Estimating Principles**
- Norbilt is a quality contractor — not budget, not luxury. Estimates should reflect skilled licensed labor, proper materials, and professional finish.
- Always account for mobilization, cleanup, and protection of adjacent surfaces.
- When scope is vague, give a wider range and set confidence to Medium or Low.
- Never estimate below your minimum viable job cost — small jobs under $300 are rarely worth quoting below that floor.`;

		const prompt = `A homeowner in ${city || "Clark County, WA"} needs an estimate:

SERVICE: ${service}
PROJECT DETAILS: ${JSON.stringify(details, null, 2)}
DESIRED TIMELINE: ${timeline || "Flexible"}
ADDITIONAL NOTES: ${notes || "None"}

Use the 2026 Clark County rate sheet in your system instructions. Provide a realistic, professional estimate and respond with ONLY valid JSON in this exact format, no extra text:
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
			system: systemPrompt,
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
