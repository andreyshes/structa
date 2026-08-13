import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	Sparkles,
	MapPin,
	ShieldCheck,
	Phone,
	BadgeCheck,
	AlertTriangle,
	CheckCircle,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

const costRows = [
	{
		scope: "Hardware & Fixture Swap",
		description: "Pulls, knobs, faucet, light fixture — same holes, updated look",
		range: "$400–$1,500",
	},
	{
		scope: "Backsplash Installation",
		description: "Tile, subway, or natural stone behind range and sink",
		range: "$800–$3,000",
	},
	{
		scope: "Countertop Replacement",
		description: "Remove existing countertops, template, fabricate, and install",
		range: "$2,000–$8,000",
	},
	{
		scope: "Cabinet Reface",
		description: "New doors and drawer fronts on existing cabinet boxes",
		range: "$3,000–$8,000",
	},
	{
		scope: "Mid-Range Kitchen Remodel",
		description: "New cabinets, countertops, backsplash, fixtures — same layout",
		range: "$12,000–$28,000",
	},
	{
		scope: "Full Gut Kitchen Remodel",
		description: "Demo to studs, new layout possible, everything rebuilt",
		range: "$25,000–$55,000",
	},
	{
		scope: "High-End Custom Kitchen",
		description: "Custom cabinetry, stone countertops, full electrical and plumbing reconfiguration",
		range: "$55,000–$100,000+",
	},
];

const timelineRows = [
	{
		scope: "Hardware / Fixture Swap",
		timeline: "1 day",
		note: "No lead time, no permit — can schedule within days of estimate",
	},
	{
		scope: "Backsplash Installation",
		timeline: "1–2 days",
		note: "Tile availability; most standard tile in stock locally",
	},
	{
		scope: "Countertop Replacement",
		timeline: "2–4 days on-site",
		note: "Template must happen before fabrication — allow 5–10 days for fab after measure",
	},
	{
		scope: "Mid-Range Kitchen Remodel",
		timeline: "2–4 weeks",
		note: "Cabinet lead time (2–6 weeks from order) is the critical path",
	},
	{
		scope: "Full Gut Kitchen Remodel",
		timeline: "4–8 weeks",
		note: "Cabinet lead time + permit (1–3 weeks in Clark County) if plumbing or electrical moves",
	},
];

const faqs = [
	{
		q: "How much does a kitchen remodel cost in Vancouver WA?",
		a: "In 2026, a kitchen hardware and fixture swap costs $400–$1,500. A backsplash installation runs $800–$3,000. A countertop replacement is $2,000–$8,000. A cabinet reface is $3,000–$8,000. A mid-range kitchen remodel (new cabinets, countertops, backsplash, fixtures — same layout) typically runs $12,000–$28,000. A full gut remodel is $25,000–$55,000, and a high-end custom kitchen can exceed $100,000. The biggest variable in any kitchen remodel is cabinets — they represent 30–40% of a typical remodel budget.",
	},
	{
		q: "How long does a kitchen remodel take?",
		a: "A hardware or fixture swap takes one day. A backsplash takes 1–2 days. Countertop replacement takes 2–4 days on-site, plus 5–10 days for templating and fabrication before we can install. A mid-range kitchen remodel runs 2–4 weeks. A full gut remodel takes 4–8 weeks, with cabinet lead time being the critical path — most cabinet manufacturers are 3–6 weeks out from order. We confirm exact timelines during your free estimate and order materials as soon as scope is confirmed.",
	},
	{
		q: "Do I need a permit for a kitchen remodel in Clark County?",
		a: "Minor kitchen updates — hardware, backsplash, countertop replacement, fixture swaps in the same location — do not require a permit. Permits are required when you move plumbing (sink relocation, dishwasher drain to a new location), add or move electrical circuits (adding a dedicated circuit for a new appliance or island outlet), or make structural changes (removing a wall). NORBILT pulls all required Clark County permits and schedules inspections — it's handled for you.",
	},
	{
		q: "Should I replace or reface my cabinets?",
		a: "Reface if the cabinet boxes are structurally solid — square, no warping, no water damage, no mold — and you're happy with the existing layout. Reface gives you new doors, drawer fronts, and hardware at roughly 40–60% of the cost of replacement. Replace if the boxes are damaged, warped, or soft; if you want to change the layout or add an island; or if the existing cabinets are low-quality particleboard that won't hold new hinges and hardware long-term. We assess this during the walkthrough and give you an honest recommendation based on what we find.",
	},
	{
		q: "Does the estimate include appliances?",
		a: "No. Our cost ranges and estimates cover labor and materials for cabinetry, countertops, backsplash, tile, fixtures, and installation. Appliances — refrigerator, range, dishwasher, microwave — are owner-supplied or purchased separately. If you're buying new appliances, coordinate the delivery timing with your remodel schedule so we can install them as part of the project.",
	},
	{
		q: "Is your kitchen work warrantied?",
		a: "Yes. All NORBILT kitchen remodeling is backed by a 1-year workmanship warranty. If tile lifts, grout cracks, a cabinet door goes out of alignment due to installation, or any installed component has a workmanship issue, we return and fix it at no charge within the warranty period. Manufacturer warranties on fixtures and appliances are separate and transfer directly to you.",
	},
];

const cities = [
	{ slug: "vancouver", name: "Vancouver" },
	{ slug: "camas", name: "Camas" },
	{ slug: "ridgefield", name: "Ridgefield" },
	{ slug: "battle-ground", name: "Battle Ground" },
	{ slug: "washougal", name: "Washougal" },
	{ slug: "brush-prairie", name: "Brush Prairie" },
	{ slug: "felida", name: "Felida" },
	{ slug: "hazel-dell", name: "Hazel Dell" },
	{ slug: "salmon-creek", name: "Salmon Creek" },
	{ slug: "five-corners", name: "Five Corners" },
	{ slug: "orchards", name: "Orchards" },
	{ slug: "mill-plain", name: "Mill Plain" },
	{ slug: "lake-shore", name: "Lake Shore" },
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
				{ "@type": "ListItem", position: 2, name: "Services", item: "https://www.norbilt.com/services" },
				{
					"@type": "ListItem",
					position: 3,
					name: "Kitchen Remodel Contractor Vancouver WA",
					item: "https://www.norbilt.com/services/kitchen-remodel",
				},
			],
		},
		{
			"@type": "Service",
			name: "Kitchen Remodel Contractor Vancouver WA",
			provider: { "@id": "https://www.norbilt.com/#business" },
			areaServed: "Clark County, WA",
			description:
				"Licensed kitchen remodeling contractor serving Vancouver WA and Clark County. Full gut remodels, cabinet replacement and reface, countertop installation, backsplash, and fixture upgrades. 1-year workmanship warranty.",
			serviceType: "Kitchen Remodeling",
			url: "https://www.norbilt.com/services/kitchen-remodel",
		},
		{
			"@type": "FAQPage",
			mainEntity: faqs.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: { "@type": "Answer", text: f.a },
			})),
		},
	],
};

export const metadata = {
	title: "Kitchen Remodel Contractor Vancouver WA | NORBILT",
	description:
		"Licensed kitchen remodel contractor in Vancouver WA and Clark County. Full gut remodels, cabinets, countertops, backsplash & more. Free written estimates. WA Lic #NORBI741CS.",
};

export default function KitchenRemodelPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative min-h-[80vh] flex items-center overflow-hidden">
					<div className="absolute inset-0 z-0">
						<Image
							src="/remodel-images/IMG_7646.jpg"
							alt="Kitchen remodel contractor Vancouver WA — NORBILT"
							fill
							priority
							sizes="100vw"
							className="object-cover object-center"
						/>
						<div className="absolute inset-0 bg-linear-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
					</div>

					<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
						<div className="max-w-4xl space-y-6">
							<div className="flex items-center gap-3">
								<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
									Licensed Contractor · Clark County
								</span>
							</div>

							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								Kitchen Remodeling <br />
								<span className="text-[#FFB800]">in Vancouver, WA</span>
							</h1>

							<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								From a single-day hardware swap to a full gut remodel — NORBILT handles every level of kitchen remodeling in Clark County. Cabinets, countertops, backsplash, fixtures, and full layout changes. Licensed WA contractor. 1-year workmanship warranty.
							</p>

							<div className="pt-4">
								<Link
									href="/contact"
									className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
								>
									Get a Free Estimate
									<ArrowRight className="w-5 h-5" />
								</Link>
							</div>
							<p className="text-white/60 text-sm font-bold mt-3">
								Ready to start?{" "}
								<a href="tel:+13602169920" className="text-[#FFB800] font-bold hover:underline">
									(360) 216-9920
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* BREADCRUMB */}
				<div className="bg-[#FDFCFB] border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
						<Link
							href="/services"
							className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2D5A3D] hover:text-[#FFB800] transition-colors"
						>
							← All Services
						</Link>
					</div>
				</div>

				{/* AUTHOR & DATE BAR */}
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<a href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">
							By Andrey
						</a>
						<span>· WA Licensed General Contractor · NORBILT · Updated August 2026</span>
					</div>
				</div>

				{/* TRUST STRIP */}
				<section className="py-8 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
						<div className="flex items-center gap-3">
							<ShieldCheck className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								Licensed WA Contractor · #NORBI741CS
							</span>
						</div>
						<div className="flex items-center gap-3">
							<BadgeCheck className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								1-Year Workmanship Warranty
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Sparkles className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								Free Written Estimates
							</span>
						</div>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								2026 Cost Ranges
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How Much Does a Kitchen Remodel Cost in Vancouver WA?
							</h2>
							<p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
								Prices below reflect installed cost — labor and materials — for Clark County projects in 2026. Appliances are not included in any range. Your actual quote depends on cabinet spec, countertop material, and whether the layout changes.
							</p>
						</div>

						<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Project Scope</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">
											What's Covered
										</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider whitespace-nowrap">
											2026 Range
										</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.scope}</td>
											<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.description}</td>
											<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-sm text-gray-400 italic mt-4">
							Ranges cover labor and standard materials. Appliances are owner-supplied. Premium countertops (quartzite, marble), custom cabinetry, and layout changes increase cost. Permits ($150–$600) are additional when required.
						</p>
					</div>
				</section>

				{/* REAL COST DRIVERS */}
				<section className="py-24 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
							What Actually Determines Kitchen Remodel Cost
						</h2>
						<p className="text-white/60 font-medium mb-12 max-w-2xl">
							Two kitchens with the same square footage can be $15,000 apart in cost. Here&apos;s what drives the difference.
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									title: "Cabinets — 30–40% of Budget",
									body: "Cabinets are the single biggest line item in most kitchen remodels. Stock cabinets from a big-box supplier run $100–$300 per linear foot installed. Semi-custom cabinets (more size options, better wood) run $300–$600. Full custom cabinetry starts at $600 per linear foot and has no ceiling. The cabinet decision alone can swing your total budget by $10,000–$30,000.",
								},
								{
									title: "Countertops",
									body: "Laminate countertops cost $20–$50 per square foot installed — the lowest-cost option and far more durable than people expect. Quartz (engineered stone) runs $80–$150 per square foot installed and is the most popular mid-range choice. Natural stone — granite, marble, quartzite — starts at $100 and runs well past $200 per square foot depending on the slab. A standard kitchen has 50–80 square feet of counter.",
								},
								{
									title: "Layout Changes",
									body: "Keeping the existing layout — sink stays where it is, range stays on the same wall — is the biggest cost-saver in a kitchen remodel. Moving the sink means moving the drain and supply lines: add $1,500–$4,000. Moving the range to an island means gas or electrical work plus a new hood run: add $2,000–$6,000. Removing a wall to open the layout means structural engineering and permits: add $3,000–$8,000.",
								},
								{
									title: "Appliances (Not In Our Ranges)",
									body: "Appliances are the one item we don't include in our estimates — they're owner-purchased and vary too much. A basic appliance package (fridge, range, dishwasher, microwave) runs $3,000–$6,000 at retail. Professional-grade appliances (Sub-Zero, Wolf, Thermador) can add $15,000–$40,000 on their own. We coordinate installation to align with your remodel schedule.",
								},
								{
									title: "Square Footage",
									body: "Larger kitchens cost more — more tile, more cabinets, more countertop, more labor. But price-per-square-foot is a misleading metric for kitchens because the expensive parts (sink, range, hood, electrical panel work) are fixed costs that don't scale linearly with size. A 100-square-foot kitchen isn't necessarily twice the cost of a 50-square-foot kitchen at the same spec level.",
								},
								{
									title: "Electrical and Lighting",
									body: "Adding under-cabinet lighting, upgrading to a dedicated circuit for a new appliance, or running a new outlet to an island are common additions in a mid-range or full remodel. Each runs $300–$800 depending on the panel's remaining capacity. If the panel needs upgrading, that's a separate licensed electrical scope we can coordinate.",
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFB800] transition-colors group"
								>
									<h3 className="text-base font-black uppercase tracking-tight text-[#FFB800] mb-4">
										{item.title}
									</h3>
									<p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* SCOPE EXPLANATIONS */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<SectionHeader
							eyebrow="Understanding Scope"
							title="Cosmetic Update vs. Full Gut: What Does Your Kitchen Actually Need?"
							description="Most homeowners start with a number in mind, then figure out what it buys. Here's how to work the other direction."
						/>

						<div className="mt-16 space-y-12">
							{/* Cosmetic */}
							<div className="border-l-4 border-[#FFB800] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Cosmetic Update — $400–$8,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									Hardware swaps, a new faucet, a backsplash behind the range, or a countertop replacement — these are surface-level updates that dramatically change the room&apos;s feel without touching the cabinets or layout. The kitchen stays usable throughout. This is the right scope when the cabinets are solid and the layout works, but the finishes are dated.
								</p>
								<p className="text-gray-500 text-sm font-medium">
									Good fit: functional layout, solid cabinet boxes, outdated hardware and fixtures. Not a fit: cabinet doors that don&apos;t close properly, warped boxes, damaged subfloor, or a layout that genuinely doesn&apos;t work for how you cook.
								</p>
							</div>

							{/* Mid-Range */}
							<div className="border-l-4 border-[#2D5A3D] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Mid-Range Kitchen Remodel — $12,000–$28,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									New semi-custom cabinets, quartz or solid-surface countertops, tile backsplash, new sink and faucet, updated lighting — all within the existing layout. The kitchen is out of commission for 2–4 weeks. This is the most common scope for Clark County homeowners who want a near-new kitchen without a full gut.
								</p>
								<p className="text-gray-500 text-sm font-medium">
									Cabinet lead time — typically 3–6 weeks from order to delivery — drives the schedule. We order as soon as scope is confirmed.
								</p>
							</div>

							{/* Full Gut */}
							<div className="border-l-4 border-[#1F2E2B] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Full Gut Remodel — $25,000–$55,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									Everything comes out. New framing if needed, new electrical runs, new plumbing if the layout changes, new cabinets, new countertops, new flooring, new lighting. The result is a kitchen built exactly to spec with zero compromise on layout. Plan for 4–8 weeks out of the kitchen.
								</p>
								<div className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-xl">
									<div className="flex items-start gap-3">
										<AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
										<p className="text-amber-800 text-sm font-medium leading-relaxed">
											<strong>When a gut makes financial sense:</strong> If you&apos;re planning to stay in the home 7+ years, a full gut remodel amortizes well. If you&apos;re selling in 2–3 years, a mid-range update or targeted cosmetic work typically delivers better return per dollar. We&apos;ll tell you which scope makes sense for your situation.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CABINET DECISION GUIDE */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								The Biggest Decision in Any Kitchen Remodel
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Replace, Reface, or Repaint Cabinets?
							</h2>
							<p className="mt-4 text-gray-600 max-w-xl mx-auto font-medium">
								Cabinets are where most kitchen remodel budgets go. Here&apos;s how to think through the decision.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6">
							{[
								{
									option: "Repaint",
									cost: "$800–$3,000",
									fit: "Cabinet boxes are solid, doors are flat (no raised panel routing), and the layout works",
									notFit: "Heavily routed doors (paint collects in grooves), laminate surfaces (paint adhesion is poor), or structural damage",
									verdict: "Fastest, cheapest — but only works when everything else is already right",
									color: "border-[#2D5A3D]",
									badge: "bg-[#2D5A3D]",
								},
								{
									option: "Reface",
									cost: "$3,000–$8,000",
									fit: "Boxes are square and structurally solid, you want new door style, layout stays the same",
									notFit: "Water-damaged boxes, warped frames, or you want to add or remove cabinets",
									verdict: "Best value when the boxes are good — new look at 40–60% of replacement cost",
									color: "border-[#FFB800]",
									badge: "bg-[#FFB800]",
								},
								{
									option: "Replace",
									cost: "$12,000–$28,000",
									fit: "Boxes are damaged, warped, or soft; layout change needed; you want to add storage; current cabinets are low-quality particleboard",
									notFit: "Boxes in good shape and layout works — replacement is over-scoping it",
									verdict: "The right call when boxes can't be saved or the layout needs to change",
									color: "border-[#1F2E2B]",
									badge: "bg-[#1F2E2B]",
								},
							].map((item, i) => (
								<div
									key={i}
									className={`bg-white rounded-2xl p-8 border-t-4 ${item.color} shadow-sm`}
								>
									<div className="flex items-center justify-between mb-4">
										<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-lg">
											{item.option}
										</h3>
										<span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full text-white ${item.badge}`}>
											{item.cost}
										</span>
									</div>

									<div className="space-y-4 mt-6">
										<div>
											<p className="text-[#2D5A3D] text-xs font-black uppercase tracking-widest mb-1">
												Good fit when
											</p>
											<p className="text-gray-600 text-sm font-medium leading-relaxed">{item.fit}</p>
										</div>
										<div>
											<p className="text-red-500 text-xs font-black uppercase tracking-widest mb-1">
												Not a fit when
											</p>
											<p className="text-gray-600 text-sm font-medium leading-relaxed">{item.notFit}</p>
										</div>
										<div className="pt-2 border-t border-gray-100">
											<p className="text-gray-400 text-xs font-bold italic">{item.verdict}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="mt-10 p-6 bg-white border border-gray-200 rounded-2xl border-l-8 border-l-[#FFB800]">
							<p className="text-gray-700 font-medium text-sm leading-relaxed">
								<strong className="text-[#1F2E2B]">How we assess this on-site:</strong> We check the box joints, look for soft spots at the base of lower cabinets (water damage from past leaks), open every drawer to check the slides, and assess whether the doors are hanging square. We&apos;ll tell you what we find and what makes sense — no pressure either way.
							</p>
						</div>
					</div>
				</section>

				{/* TIMELINE TABLE */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Project Timelines
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How Long Does a Kitchen Remodel Take?
							</h2>
							<p className="mt-4 text-gray-600 max-w-xl mx-auto font-medium">
								Kitchen timeline is almost always driven by cabinet lead time and countertop fabrication — not by the on-site work itself.
							</p>
						</div>

						<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Scope</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Timeline</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">
											Critical Path
										</th>
									</tr>
								</thead>
								<tbody>
									{timelineRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.scope}</td>
											<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.timeline}</td>
											<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-sm text-gray-400 italic mt-4">
							Cabinet lead time is the most common schedule driver in a kitchen remodel. NORBILT places cabinet orders as soon as scope is finalized — don&apos;t wait to start the clock. Countertop templates happen after cabinets are installed, adding 5–10 days for fabrication before countertops go in.
						</p>
					</div>
				</section>

				{/* PERMIT SECTION */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Clark County Permits
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								When Do You Need a Permit for a Kitchen Remodel?
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-white rounded-2xl p-8">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-base mb-6 flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-[#2D5A3D]" />
									No Permit Required
								</h3>
								<ul className="space-y-3">
									{[
										"Hardware replacement — same holes",
										"Faucet or sink swap — same drain location",
										"Backsplash tile installation",
										"Countertop replacement",
										"Cabinet reface or repaint",
										"New cabinet installation — same layout",
										"Light fixture swap on existing circuit",
										"Flooring replacement",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
											<div className="w-1.5 h-1.5 bg-[#2D5A3D] rounded-full mt-2 shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-[#1F2E2B] rounded-2xl p-8 text-white">
								<h3 className="font-black text-[#FFB800] uppercase tracking-tight text-base mb-6 flex items-center gap-2">
									<AlertTriangle className="w-5 h-5 text-[#FFB800]" />
									Permit Required
								</h3>
								<ul className="space-y-3">
									{[
										"Moving the sink to a new location",
										"Relocating the dishwasher drain",
										"Adding a new electrical circuit",
										"Moving the range or adding a dedicated circuit",
										"Removing or modifying a structural wall",
										"Adding a kitchen island with plumbing or electrical",
										"Relocating the range hood exhaust path",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-white/70 font-medium">
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full mt-2 shrink-0" />
											{item}
										</li>
									))}
								</ul>
								<p className="mt-8 text-white/50 text-xs font-medium">
									NORBILT pulls all required Clark County permits before work begins. Permit timeline in Clark County is typically 1–3 weeks for a kitchen remodel — we account for this in your project schedule.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ SECTION */}
				<section className="py-24 bg-white">
					<div className="max-w-4xl mx-auto px-6">
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-gray-500 font-medium mb-12">
							Kitchen remodeling in Vancouver WA and Clark County.
						</p>
						<div className="space-y-4">
							{faqs.map((item, i) => (
								<details
									key={i}
									className="group border-2 border-gray-100 rounded-2xl overflow-hidden bg-[#FDFCFB] open:border-[#FFB800]/40 open:bg-white transition-all"
								>
									<summary className="flex items-start justify-between px-8 py-6 cursor-pointer list-none gap-4">
										<div className="flex gap-4 items-start">
											<span className="text-[#FFB800] font-black text-xl shrink-0">
												0{i + 1}
											</span>
											<h3 className="text-lg font-black text-[#1F2E2B] tracking-tight">{item.q}</h3>
										</div>
										<span className="text-[#FFB800] text-2xl font-black shrink-0 group-open:hidden">+</span>
										<span className="text-[#FFB800] text-2xl font-black shrink-0 hidden group-open:block">−</span>
									</summary>
									<div className="px-8 pb-6 pl-20 text-gray-600 font-medium text-base leading-relaxed border-t border-gray-100 pt-4">
										{item.a}
									</div>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* CITY LINKS */}
				<section className="py-16 bg-[#F8F6F3] border-t border-gray-100">
					<div className="max-w-7xl mx-auto px-6">
						<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-6">
							Kitchen Remodeling by City — Clark County WA
						</p>
						<div className="flex flex-wrap gap-3">
							{cities.map((city) => (
								<Link
									key={city.slug}
									href={`/locations/${city.slug}/kitchen-remodel`}
									className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors shadow-sm"
								>
									<MapPin className="w-3 h-3" />
									{city.name}, WA
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* RELATED GUIDES */}
				<section className="py-10 bg-[#F8F6F3] border-t border-gray-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">
							Related Cost Guides
						</p>
						<div className="flex flex-wrap gap-x-8 gap-y-3">
							<Link
								href="/blog/kitchen-remodel-cost-clark-county-wa"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Kitchen Remodel Cost in Clark County WA: 2026 Guide{" "}
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/blog/bathroom-remodel-cost-clark-county-wa"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Bathroom Remodel Cost in Clark County WA: 2026 Guide{" "}
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/services/kitchen-bath"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Kitchen &amp; Bath Remodeling — Full Service Overview{" "}
								<span aria-hidden>→</span>
							</Link>
						</div>
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="py-24 lg:py-40">
					<div className="max-w-7xl mx-auto px-6">
						<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
							<div className="relative z-10 max-w-3xl mx-auto space-y-8">
								<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
									Your Kitchen, <br />
									<span className="text-[#FFB800]">Built Right</span>
								</h2>
								<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
									Free written estimate, honest pricing, and a 1-year warranty on every kitchen project in Clark County.
								</p>
								<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
									<Link
										href="/contact"
										className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
									>
										Get Your Estimate
									</Link>
									<Link
										href="tel:+13602169920"
										className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
									>
										<Phone className="w-5 h-5" /> 360.216.9920
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
