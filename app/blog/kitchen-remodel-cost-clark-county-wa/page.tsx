import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost in Clark County WA: 2026 Guide | Norbilt",
	description:
		"How much does a kitchen remodel cost in Clark County WA? Real 2026 price ranges for Vancouver, Camas, and Ridgefield — from a $1,500 cosmetic refresh to a $80,000 custom build.",
	alternates: {
		canonical: "https://norbilt.com/blog/kitchen-remodel-cost-clark-county-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Cost in Clark County WA: 2026 Guide | Norbilt",
		description:
			"Real 2026 cost breakdown for kitchen remodels in Clark County WA. Scope tiers, component pricing, city breakdowns, and what drives the price up.",
		url: "https://norbilt.com/blog/kitchen-remodel-cost-clark-county-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "New hardware, paint, backsplash, faucet, light fixtures. No cabinet or countertop replacement.",
		range: "$1,500 – $4,000",
		timeline: "2–4 days",
		best: "Dated but structurally sound kitchen — quick value boost before selling or renting",
	},
	{
		scope: "Mid-Range Update",
		desc: "Semi-custom cabinets, quartz or granite countertops, new sink, appliances, backsplash, and lighting. Layout unchanged.",
		range: "$15,000 – $35,000",
		timeline: "2–4 weeks",
		best: "Most Clark County homeowners — best balance of cost, durability, and resale ROI",
	},
	{
		scope: "Full Custom Remodel",
		desc: "Custom cabinetry, premium countertops, appliance package, island, relocated plumbing or electrical, new flooring.",
		range: "$40,000 – $80,000+",
		timeline: "6–12 weeks",
		best: "Luxury primary kitchen, layout change, or whole-home renovation",
	},
	{
		scope: "Cabinet Refacing Only",
		desc: "Replace doors and drawer fronts, add new hardware. Box structure stays. Significant visual upgrade at a fraction of full replacement cost.",
		range: "$3,000 – $8,000",
		timeline: "3–5 days",
		best: "Cabinets in good structural shape — homeowners who want the look without the cost",
	},
];

const components = [
	{ item: "Cabinet refacing (doors + hardware)", low: 3000, high: 8000 },
	{ item: "Semi-custom cabinet replacement", low: 5000, high: 15000 },
	{ item: "Custom cabinetry", low: 15000, high: 40000 },
	{ item: "Laminate countertop", low: 1200, high: 2500 },
	{ item: "Quartz or granite countertop", low: 3500, high: 7000 },
	{ item: "Tile backsplash (installed)", low: 400, high: 1800 },
	{ item: "Under-mount sink + faucet install", low: 450, high: 1200 },
	{ item: "Recessed lighting (per can, new)", low: 250, high: 450 },
	{ item: "LVP flooring (per sq ft installed)", low: 4, high: 8 },
	{ item: "Tile flooring (per sq ft installed)", low: 10, high: 22 },
	{ item: "Appliance package (mid-range)", low: 3000, high: 8000 },
	{ item: "Clark County building permit", low: 150, high: 800 },
];

const cityPricing = [
	{
		city: "Vancouver",
		slug: "vancouver",
		notes:
			"Largest price range due to neighborhood variation. Older Hazel Dell and Orchards homes often need subfloor or electrical upgrades. Newer Cascade Park and Mill Plain builds are typically cleaner scopes.",
		midRange: "$18,000 – $38,000",
	},
	{
		city: "Camas",
		slug: "camas",
		notes:
			"Camas homeowners tend to invest in higher-end finishes. Expect quartz over laminate and semi-custom over stock. Mid-range remodels here often run at the top of the range.",
		midRange: "$22,000 – $40,000",
	},
	{
		city: "Ridgefield",
		slug: "ridgefield",
		notes:
			"Rapid growth means a mix of brand-new builds and 1980s–90s homes. Newer homes are straightforward; older Ridgefield townsite properties may have dated wiring or plumbing that adds cost.",
		midRange: "$16,000 – $35,000",
	},
	{
		city: "Battle Ground",
		slug: "battle-ground",
		notes:
			"North Clark County pricing tends to be slightly lower on labor. Acreage properties often have larger kitchens, which increases material cost even on mid-range scopes.",
		midRange: "$14,000 – $32,000",
	},
	{
		city: "Washougal",
		slug: "washougal",
		notes:
			"River-area homes often have original 1970s–80s kitchens that need full gut work. Newer Lookout Ridge builds are typically cleaner. Budget for subfloor inspection on older properties.",
		midRange: "$15,000 – $34,000",
	},
	{
		city: "Salmon Creek",
		slug: "salmon-creek",
		notes:
			"1990s developments dominate. Many kitchens are at the age where a full cabinet replacement makes more sense than refacing. Good middle-ground market for mid-range work.",
		midRange: "$16,000 – $34,000",
	},
];

const faqs = [
	{
		q: "How much does a kitchen remodel cost in Clark County WA?",
		a: "In 2026, a cosmetic kitchen refresh in Clark County runs $1,500–$4,000. A mid-range remodel with new cabinets, countertops, and appliances costs $15,000–$35,000. A full custom kitchen remodel runs $40,000–$80,000+. Cabinet refacing only is $3,000–$8,000. Final cost depends on kitchen size, material choices, and whether any plumbing or electrical work is needed.",
	},
	{
		q: "Do I need a permit for a kitchen remodel in Clark County?",
		a: "Cosmetic work — hardware, paint, backsplash, faucet swaps — does not require a permit. Permits are required when moving or adding plumbing, electrical, or structural walls. Clark County permits typically cost $150–$800 depending on project scope. Norbilt pulls all required permits as part of the project.",
	},
	{
		q: "How long does a kitchen remodel take?",
		a: "A cosmetic refresh takes 2–4 days. A mid-range remodel with new cabinets and countertops takes 2–4 weeks including cabinet lead time. A full custom remodel with layout changes takes 6–12 weeks. Lead time on cabinets — typically 2–6 weeks from order to delivery — is the biggest schedule driver.",
	},
	{
		q: "What is the best kitchen remodel for resale in Clark County?",
		a: "The mid-range remodel consistently delivers the best ROI for Clark County homes. New semi-custom cabinets, quartz countertops, and updated appliances recover 60–80% of cost at resale according to national data — and in a competitive Vancouver WA market, an updated kitchen shortens days on market significantly.",
	},
	{
		q: "Can I live at home during a kitchen remodel?",
		a: "Yes, for most kitchen remodels. Demolition is the noisiest phase — typically 1–2 days. During cabinet installation you'll lose sink access for a few days. We recommend setting up a temporary prep area and using paper plates during the counter and sink installation phase. For full custom remodels over 6 weeks, some families prefer to minimize overlap.",
	},
	{
		q: "What's the difference between cabinet refacing and cabinet replacement?",
		a: "Cabinet refacing replaces only the doors, drawer fronts, and hardware — the box structure stays. It costs $3,000–$8,000 and takes 3–5 days. Full replacement removes all existing cabinets and installs new ones — better if your boxes are damaged, outdated in layout, or you want to change the configuration. Refacing makes sense when the boxes are solid and you just want a new look.",
	},
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Article",
			headline: "Kitchen Remodel Cost in Clark County WA: 2026 Guide",
			description:
				"Real 2026 price ranges for kitchen remodels in Clark County WA — from cosmetic refreshes to full custom builds. Component pricing, city breakdowns, and cost drivers.",
			url: "https://norbilt.com/blog/kitchen-remodel-cost-clark-county-wa",
			datePublished: "2026-04-28",
			dateModified: "2026-04-28",
			author: { "@type": "Organization", name: "Norbilt" },
			publisher: {
				"@type": "Organization",
				name: "Norbilt",
				url: "https://norbilt.com",
			},
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

function fmt(n: number) {
	return "$" + n.toLocaleString();
}

export default function KitchenRemodeCostPage() {
	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* HERO */}
			<section className="pt-32 pb-20 bg-[#14201D] text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFB800_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="max-w-4xl mx-auto px-6 relative z-10">
					<div className="flex items-center gap-3 text-[#FFB800] mb-6">
						<span className="font-black uppercase tracking-widest text-xs">
							Cost Guide · Clark County, WA · 2026
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
						Kitchen Remodel Cost<br />
						<span className="text-[#FFB800]">in Clark County WA</span>
					</h1>
					<p className="text-white/70 text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
						Real 2026 price ranges for kitchen remodels across Vancouver, Camas,
						Ridgefield, and Clark County — from a $1,500 cosmetic refresh to a
						$80,000+ custom build. What drives the cost, what components actually
						cost, and how to avoid overpaying.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-4xl mx-auto px-6 py-16 space-y-16">

				{/* CITATION CAPSULE */}
				<div className="bg-[#FFFBEA] border-l-4 border-[#FFB800] p-6 rounded-r-2xl">
					<p className="text-base font-bold text-[#1F2E2B] leading-relaxed">
						<span className="text-[#FFB800] font-black">Clark County 2026:</span>{" "}
						A mid-range kitchen remodel in Vancouver WA costs{" "}
						<strong>$15,000–$35,000</strong>. Licensed contractor labor runs{" "}
						<strong>$65–$95/hr</strong>. Quartz countertops installed average{" "}
						<strong>$3,500–$7,000</strong>. Semi-custom cabinets run{" "}
						<strong>$5,000–$15,000 installed</strong>. Clark County permits cost{" "}
						<strong>$150–$800</strong> for projects requiring plumbing or
						electrical work.
					</p>
				</div>

				{/* INTRO */}
				<section className="space-y-4 text-gray-700 text-lg leading-relaxed">
					<p>
						The kitchen is the most expensive room to remodel — and the one most
						likely to recoup its cost at resale. Clark County homeowners ask us
						for kitchen pricing constantly, so we put together this guide using
						real project data from Vancouver, Camas, Ridgefield, and surrounding
						areas.
					</p>
					<p>
						The short answer: expect to spend{" "}
						<strong>$1,500–$4,000 for a cosmetic refresh</strong>,{" "}
						<strong>$15,000–$35,000 for a mid-range update</strong>, and{" "}
						<strong>$40,000–$80,000+ for a full custom remodel</strong>. Where
						you land depends on kitchen size, how much you're keeping, and your
						material selections.
					</p>
					<p>
						This guide breaks it down by scope, by component, and by city so you
						can budget accurately before the first call.
					</p>
				</section>

				{/* COST BY SCOPE TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Kitchen Remodel Cost by Scope
					</h2>
					<p className="text-gray-600 font-medium">
						The biggest driver of kitchen remodel cost is how much you're
						replacing. These four tiers cover the range most Clark County
						homeowners work within.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Scope</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Cost Range</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Timeline</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">Best For</th>
								</tr>
							</thead>
							<tbody>
								{costTiers.map((tier, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
										<td className="px-6 py-5 font-black text-[#1F2E2B]">
											{tier.scope}
											<p className="text-gray-500 font-medium text-xs mt-1 leading-relaxed">{tier.desc}</p>
										</td>
										<td className="px-6 py-5 font-black text-[#2D5A3D] whitespace-nowrap">{tier.range}</td>
										<td className="px-6 py-5 text-gray-600 font-medium whitespace-nowrap">{tier.timeline}</td>
										<td className="px-6 py-5 text-gray-500 text-xs hidden md:table-cell">{tier.best}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						Based on 2026 Clark County contractor rates. Prices include licensed
						labor and standard materials. Site conditions and material upgrades
						affect final cost.
					</p>
				</section>

				{/* COMPONENT PRICING */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Kitchen Component Costs: Line by Line
					</h2>
					<p className="text-gray-600 font-medium">
						If you're building a custom scope or just replacing specific
						components, here's what each piece of a kitchen remodel costs in Clark
						County in 2026.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Component</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Low End</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">High End</th>
								</tr>
							</thead>
							<tbody>
								{components.map((c, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
										<td className="px-6 py-4 font-medium text-[#1F2E2B]">{c.item}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D]">{fmt(c.low)}</td>
										<td className="px-6 py-4 font-black text-gray-700">{fmt(c.high)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						Labor included where noted. Appliance pricing excludes delivery and
						installation unless stated.
					</p>
				</section>

				{/* COST BY CITY */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Kitchen Remodel Cost by City
					</h2>
					<p className="text-gray-600 font-medium">
						Labor rates are consistent across Clark County — the variation between
						cities comes from home age, kitchen size, and what the existing
						conditions look like behind the walls.
					</p>
					<div className="grid md:grid-cols-2 gap-6">
						{cityPricing.map((c, i) => (
							<div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
								<div className="flex items-start justify-between mb-3">
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-lg">
										{c.city}, WA
									</h3>
									<span className="text-[#2D5A3D] font-black text-sm whitespace-nowrap ml-4">
										{c.midRange}
									</span>
								</div>
								<p className="text-gray-500 text-sm leading-relaxed">{c.notes}</p>
								<Link
									href={`/locations/${c.slug}/kitchen-bath`}
									className="inline-flex items-center gap-2 mt-4 text-xs font-black text-[#2D5A3D] uppercase tracking-widest hover:gap-3 transition-all"
								>
									Kitchen & Bath in {c.city} <ArrowRight className="w-3 h-3" />
								</Link>
							</div>
						))}
					</div>
				</section>

				{/* COST DRIVERS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						5 Things That Drive Kitchen Remodel Costs Up
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Moving Plumbing or Electrical",
								body: "Keeping your sink, dishwasher, and range in the same location is the single biggest cost-control lever. Moving a sink across the kitchen can add $2,000–$5,000 in rough plumbing alone. If your layout works, leave it.",
							},
							{
								title: "Cabinet Material Choice",
								body: "Stock cabinets from a big-box store run $75–$150 per linear foot installed. Semi-custom run $150–$400. Full custom cabinetry can hit $500–$1,000+ per linear foot. For most Clark County kitchens, semi-custom hits the sweet spot of quality and value.",
							},
							{
								title: "Countertop Selection",
								body: "Laminate countertops are $1,200–$2,500 installed. Quartz and granite run $3,500–$7,000. Quartzite and natural stone can exceed $10,000 for a typical kitchen. The countertop is the first thing buyers notice — spending here tends to pay back at resale.",
							},
							{
								title: "Hidden Conditions in Older Homes",
								body: "Clark County homes built before 1990 often have surprises behind the walls: outdated electrical panels, galvanized plumbing, undersized ventilation, or subfloor rot around the sink. Budget 10–15% contingency on homes built before 1995.",
							},
							{
								title: "Permit Requirements",
								body: "Cosmetic work needs no permit. But if your project involves any electrical (new circuits, moved outlets, undercabinet lighting), plumbing (new dishwasher line, relocated sink), or structural changes, Clark County requires a permit. Permits cost $150–$800 and add inspection time — but protect you legally and at resale.",
							},
						].map((item, i) => (
							<div key={i} className="flex gap-6 items-start">
								<span className="text-[#FFB800] font-black text-2xl w-8 shrink-0">{i + 1}</span>
								<div>
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-lg mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">{item.body}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* MONEY SAVING TIPS */}
				<section className="bg-[#F8F6F3] rounded-3xl p-10 space-y-6">
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How to Get More Kitchen for Your Budget
					</h2>
					<div className="space-y-4">
						{[
							"Keep the layout. Don't move the sink, range, or refrigerator location. This alone saves $2,000–$8,000.",
							"Reface instead of replace if your cabinet boxes are solid. New doors and hardware at $3,000–$8,000 vs. full replacement at $15,000+.",
							"Choose quartz over natural stone. Quartz is more durable, requires less maintenance, and costs about the same or less than natural granite.",
							"Phase the work. Do cabinets and countertops now; add the island or appliance upgrade next year. A licensed contractor can plan for future phases without rework.",
							"Get three bids — from licensed contractors only. Washington State requires a contractor's license for kitchen work over $500. Unlicensed bids may look cheaper but carry permit, warranty, and insurance risks.",
						].map((tip, i) => (
							<div key={i} className="flex gap-4 items-start">
								<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
								<p className="text-gray-700 font-medium leading-relaxed">{tip}</p>
							</div>
						))}
					</div>
				</section>

				{/* RED FLAGS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Red Flags When Getting Kitchen Remodel Bids
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								flag: "No contractor's license number",
								detail: "Washington State requires a license for any job over $500. Ask for the L&I license number and verify it at verify.lni.wa.gov.",
							},
							{
								flag: "Unusually low bid",
								detail: "A bid that's 30–40% below others usually means unlicensed labor, inferior materials, or a contractor planning to ask for more money mid-project.",
							},
							{
								flag: "No written contract",
								detail: "Washington law requires a written contract for remodeling jobs over $1,000. Any contractor who resists putting the scope in writing is a risk.",
							},
							{
								flag: "No permit pulled",
								detail: "If your project requires a permit and the contractor says 'we don't need one,' that's a serious problem — it can affect your insurance, your resale, and your safety.",
							},
						].map((item, i) => (
							<div key={i} className="bg-white border-l-4 border-red-400 p-6 rounded-r-2xl shadow-sm">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight mb-2">
									⚠ {item.flag}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
							</div>
						))}
					</div>
				</section>

				{/* FAQ */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{faqs.map((item, i) => (
							<details
								key={i}
								className="group border-2 border-gray-100 rounded-2xl overflow-hidden bg-white open:border-[#FFB800]/40 transition-all"
							>
								<summary className="flex items-start justify-between px-8 py-6 cursor-pointer list-none gap-4">
									<div className="flex gap-4 items-start">
										<span className="text-[#FFB800] font-black text-xl shrink-0">
											0{i + 1}
										</span>
										<h3 className="text-lg font-black text-[#1F2E2B] tracking-tight">
											{item.q}
										</h3>
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
				</section>

				{/* SERVICE LINK */}
				<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-2">
							Ready to Get Started?
						</p>
						<p className="font-black text-xl uppercase tracking-tight">
							Norbilt handles kitchen updates across Clark County — free estimate, 1-year warranty.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 shrink-0">
						<Link
							href="/locations/vancouver/kitchen-bath"
							className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
						>
							Vancouver Kitchen & Bath <ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm"
						>
							<Phone className="w-4 h-4" /> 360.216.9920
						</Link>
					</div>
				</div>

				{/* NEARBY AREAS */}
				<section>
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-4">
						Kitchen Remodel Resources by City
					</p>
					<div className="flex flex-wrap gap-3">
						{cityPricing.map((c) => (
							<Link
								key={c.slug}
								href={`/locations/${c.slug}/kitchen-bath`}
								className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors shadow-sm"
							>
								<MapPin className="w-3 h-3" />
								{c.city}, WA
							</Link>
						))}
					</div>
				</section>

			</article>
		</div>
	);
}
