import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost in Camas WA: 2026 Pricing Guide | NORBILT",
	description:
		"How much does a kitchen remodel cost in Camas WA? Real 2026 price ranges for every scope — from a cosmetic refresh to a full custom build. Camas-specific pricing, cabinet options, and what to expect.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/kitchen-remodel-cost-camas-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Cost in Camas WA: 2026 Pricing Guide | NORBILT",
		description:
			"Real 2026 price ranges for kitchen remodels in Camas WA — from a $1,500 cosmetic refresh to a $80,000+ custom build. Camas-specific pricing, cabinet options, and what to expect.",
		url: "https://www.norbilt.com/blog/kitchen-remodel-cost-camas-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "Paint, new hardware, backsplash tile, faucet swap, updated light fixtures. No cabinet or countertop replacement.",
		range: "$1,500 – $4,000",
		timeline: "1–3 days",
		best: "Dated but structurally sound kitchen — quick value boost before listing or renting",
	},
	{
		scope: "Mid-Range Update",
		desc: "New semi-custom cabinets, quartz or granite countertops, updated sink and faucet, new appliances, backsplash, and lighting. Layout unchanged.",
		range: "$15,000 – $35,000",
		timeline: "2–4 weeks",
		best: "Most Camas homeowners — best balance of quality, durability, and resale ROI",
	},
	{
		scope: "Full Gut Remodel",
		desc: "Complete demo and rebuild. All new cabinets, countertops, flooring, appliances, lighting. Layout unchanged.",
		range: "$25,000 – $55,000",
		timeline: "4–8 weeks",
		best: "Kitchens with outdated layout that functions well, or homes with deferred maintenance",
	},
	{
		scope: "Custom / Layout Change",
		desc: "Custom cabinetry, premium countertops, island addition, relocated plumbing or gas, high-end appliance package, new flooring throughout.",
		range: "$45,000 – $80,000+",
		timeline: "6–12 weeks",
		best: "Luxury primary kitchen, open-plan conversion, or whole-home renovation",
	},
];

const components = [
	{ item: "Cabinet refacing (doors + hardware)", low: 3000, high: 8000 },
	{ item: "Semi-custom cabinet replacement", low: 5000, high: 15000 },
	{ item: "Custom cabinetry", low: 15000, high: 40000 },
	{ item: "Laminate countertop (installed)", low: 1200, high: 2500 },
	{ item: "Quartz or granite countertop (installed)", low: 3500, high: 7000 },
	{ item: "Tile backsplash (installed)", low: 400, high: 1800 },
	{ item: "Sink + faucet (installed)", low: 300, high: 900 },
	{ item: "Recessed lighting (per can, new)", low: 300, high: 800 },
	{ item: "LVP flooring (per sq ft installed)", low: 4, high: 8, perSqFt: true },
	{ item: "Tile flooring (per sq ft installed)", low: 10, high: 22, perSqFt: true },
	{ item: "Appliance package (mid-range)", low: 3000, high: 8000 },
	{ item: "Clark County building permit", low: 150, high: 800 },
];

const cityComparison = [
	{ city: "Vancouver", midRange: "$15,000 – $35,000" },
	{ city: "Camas", midRange: "$18,000 – $40,000" },
	{ city: "Ridgefield", midRange: "$16,000 – $38,000" },
	{ city: "Battle Ground", midRange: "$14,000 – $32,000" },
	{ city: "Washougal", midRange: "$15,000 – $35,000" },
];

const factors = [
	{
		title: "Layout Changes",
		body: "Moving a sink, range, or refrigerator location adds $2,000–$8,000 in rough plumbing and electrical work. Camas open-plan kitchens are popular — but any wall removal or structural change requires permits and engineering review.",
	},
	{
		title: "Cabinet Grade",
		body: "Stock cabinets run $75–$150/linear ft installed. Semi-custom run $150–$400. Full custom can hit $500–$1,000+/linear ft. Camas homeowners frequently choose semi-custom or full-overlay cabinets over stock — expect to spend closer to the mid or high end.",
	},
	{
		title: "Countertop Material",
		body: "Laminate is $1,200–$2,500 installed. Quartz and granite run $3,500–$7,000. Quartzite and natural stone can exceed $10,000. In Camas, quartz is the standard — laminate is rare in mid-range and above remodels here.",
	},
	{
		title: "Permit Requirements",
		body: "Cosmetic work (paint, hardware, backsplash, faucet swaps) needs no permit. Any electrical, plumbing, or structural work requires a Clark County permit — $150–$800 depending on scope. NORBILT pulls all required permits.",
	},
	{
		title: "2026 Material Tariffs",
		body: "Appliance prices are up 5–8% in 2026 due to import tariffs on electronics and components. Tile and stone products are up 10–15%. Budget accordingly — or lock in your materials early when we finalize your scope.",
	},
	{
		title: "Home Age",
		body: "Camas has many well-maintained 1990s–2000s homes. These kitchens often have outdated electrical (older GFCIs, limited outlets) or galvanized plumbing that needs upgrading during a remodel. Budget 10–15% contingency on any home built before 2000.",
	},
];

const faqs = [
	{
		q: "How much does a kitchen remodel cost in Camas WA?",
		a: "In 2026, a cosmetic kitchen refresh in Camas WA runs $1,500–$4,000. A mid-range remodel with new cabinets, countertops, sink, and appliances costs $15,000–$35,000 — often toward the higher end in Camas given finish expectations. A full gut remodel runs $25,000–$55,000, and a custom layout-change project runs $45,000–$80,000+.",
	},
	{
		q: "Do kitchen remodels require a permit in Camas WA?",
		a: "Cosmetic work — hardware, paint, backsplash tile, faucet swaps — does not require a permit. Permits are required when work involves plumbing modifications, electrical (new circuits, relocated outlets), or structural changes. Clark County permits typically cost $150–$800. NORBILT pulls all required permits as part of the project.",
	},
	{
		q: "How long does a kitchen remodel take in Camas?",
		a: "A cosmetic refresh takes 1–3 days. A mid-range remodel with new cabinets and countertops takes 2–4 weeks including cabinet lead time. A full gut remodel takes 4–8 weeks. A full custom remodel with layout changes takes 6–12 weeks. Cabinet lead time — typically 2–6 weeks from order to delivery — is the biggest schedule driver.",
	},
	{
		q: "What adds the most value in a Camas kitchen remodel?",
		a: "New countertops and cabinet fronts have the highest visual impact per dollar. A quartz countertop swap ($3,500–$7,000) combined with updated cabinet hardware and a tile backsplash ($400–$1,800) can dramatically change a kitchen's feel without a full remodel. Updated lighting and a new sink/faucet are also high-return, low-cost additions.",
	},
	{
		q: "Can you do kitchen updates without a full remodel in Camas?",
		a: "Yes. Cabinet refacing (replacing doors and drawer fronts while keeping the boxes) runs $3,000–$8,000 and takes 3–5 days. A countertop swap alone is $1,200–$7,000 depending on material. A backsplash install runs $400–$1,800. These targeted upgrades can significantly refresh a kitchen at a fraction of a full remodel cost.",
	},
	{
		q: "Is your kitchen remodel work covered by a warranty in Camas WA?",
		a: "Yes. All NORBILT kitchen remodel work in Camas and Clark County is backed by a 1-year workmanship warranty. If anything we installed or built has a defect within the first year, we fix it at no charge. We're a licensed Washington State General Contractor — fully insured, bonded, and local to Clark County.",
	},
];

const schema = {
	"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: "Kitchen Remodel Cost in Camas WA: 2026 Pricing Guide",
		description:
			"Real 2026 price ranges for kitchen remodels in Camas WA — from cosmetic refreshes to full custom builds. Camas-specific pricing, component costs, and what drives the price.",
		url: "https://www.norbilt.com/blog/kitchen-remodel-cost-camas-wa",
		datePublished: "2026-05-26",
		dateModified: "2026-05-26",
		author: { "@id": "https://www.norbilt.com/#founder" },
		publisher: { "@id": "https://www.norbilt.com/#organization" },
		mainEntityOfPage: "https://www.norbilt.com/blog/kitchen-remodel-cost-camas-wa",
};

function fmt(n: number) {
	return "$" + n.toLocaleString();
}

export default function KitchenRemodeCostCamasPage() {
	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
				{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
				{ "@type": "ListItem", position: 3, name: "Kitchen Remodel Cost in Camas WA: 2026 Pricing Guide", item: "https://www.norbilt.com/blog/kitchen-remodel-cost-camas-wa" },
			],
				}) }}
			/>

			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Pricing Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Camas, WA
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Kitchen Remodel
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Kitchen Remodel Cost<br />
						<span className="text-[#FFB800]">in Camas WA</span>
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8 border-l-4 border-[#FFB800] pl-6">
						Real 2026 pricing for every scope — from a $1,500 cosmetic refresh to an $80,000+ custom build.
						Camas-specific cost drivers, cabinet options, and what to budget for.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Camas, WA · Clark County</span>
						<span>·</span>
						<Link href="/about" className="text-[#FFB800] hover:text-white transition-colors font-bold">By Andrey</Link><span>· WA Licensed General Contractor</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#2C3E3A] font-medium leading-relaxed">
						Kitchen remodels in Camas WA range from <strong>$1,500</strong> (cosmetic refresh) to{" "}
						<strong>$80,000+</strong> (full custom build) in 2026. Most Camas homeowners doing a mid-range
						update spend <strong>$15,000–$35,000</strong>. Camas homes tend to have higher finish
						expectations than the Clark County average — budget accordingly.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Camas has one of Clark County's highest concentrations of owner-occupied, well-maintained homes.
						Homeowners here take pride in their properties — and kitchen remodels typically target either
						resale value or matching the finish quality of neighboring homes. That means material expectations
						skew higher than the Clark County average.
					</p>
					<p>
						Whether you're refreshing before a sale, finally replacing cabinets that have been on the list for
						a decade, or doing a full open-plan conversion, this guide gives you real 2026 numbers to work
						with. We've broken it down by scope tier, component, and what's unique about remodeling in Camas
						specifically.
					</p>
					<p>
						The short version: cosmetic refresh runs <strong>$1,500–$4,000</strong>, a typical mid-range
						update is <strong>$15,000–$35,000</strong>, and a full custom project is{" "}
						<strong>$45,000–$80,000+</strong>. Camas projects tend to land at the upper half of any range —
						because Camas homeowners choose better materials.
					</p>
				</section>

				{/* COST BY SCOPE TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Kitchen Remodel Cost by Scope
					</h2>
					<p className="text-gray-600 font-medium">
						The biggest cost driver is how much you're replacing. These four tiers cover the full range
						Camas homeowners work within in 2026.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Scope</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Cost Range</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Timeline</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Best For</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{costTiers.map((tier, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
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
						Based on 2026 Clark County contractor rates. Prices include licensed labor and standard materials.
						Site conditions and material upgrades affect final cost.
					</p>
				</section>

				{/* COMPONENT PRICING */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Kitchen Component Costs: Line by Line
					</h2>
					<p className="text-gray-600 font-medium">
						If you're swapping specific components or building a custom scope, here's what each piece of a
						Camas kitchen remodel costs in 2026.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Component</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Low End</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">High End</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{components.map((c, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-4 font-medium text-[#1F2E2B]">{c.item}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D]">
											{c.perSqFt ? `$${c.low}` : fmt(c.low)}
										</td>
										<td className="px-6 py-4 font-black text-gray-700">
											{c.perSqFt ? `$${c.high}` : fmt(c.high)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						Labor included where noted. Flooring marked per sq ft. Appliance pricing includes standard installation.
					</p>
				</section>

				{/* WHY CAMAS COSTS MORE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Why Camas Kitchen Remodels Tend to Cost More
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Higher Finish Expectations",
								body: "Camas homeowners typically choose quartz over laminate, full-overlay cabinets over stock box, and tile over LVP. These upgrades are the right call for the market — but each one bumps the total. A mid-range Camas kitchen often looks like a high-end Vancouver kitchen in terms of materials.",
							},
							{
								title: "Open-Plan Layouts Require More Cabinetry",
								body: "Prune Hill and Grass Valley homes commonly feature open-plan kitchen/living spaces with long runs of cabinetry, islands, and pantry builds. More linear footage of cabinets means higher material and labor costs — even at the same price-per-linear-foot as a smaller kitchen.",
							},
							{
								title: "2026 Tariff Impacts",
								body: "Appliance prices are up 5–8% in 2026 due to tariffs on electronics and components. Tile and stone products — backsplash, flooring, countertops — are up 10–15%. These increases hit harder in Camas because the baseline material choices are already at the higher end.",
							},
							{
								title: "Permit Requirements",
								body: "Any project involving plumbing, electrical, or structural work requires a Clark County permit — $150–$800 depending on scope. Camas kitchens doing full gut remodels or layout changes almost always trigger permits. NORBILT handles all permit filings as part of your project.",
							},
						].map((item, i) => (
							<div key={i} className="flex gap-6 items-start">
								<span className="text-[#FFB800] font-black text-2xl w-8 shrink-0">{i + 1}</span>
								<div>
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-base mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600 leading-relaxed font-medium">{item.body}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* FACTORS GRID */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						6 Factors That Affect Your Camas Kitchen Remodel Cost
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{factors.map((f, i) => (
							<div key={i} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{f.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{f.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* CITY COMPARISON TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Mid-Range Kitchen Remodel Cost by City
					</h2>
					<p className="text-gray-600 font-medium">
						Labor rates are consistent across Clark County. Price variation between cities reflects home age,
						kitchen size, and typical finish choices in each market.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">City</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Mid-Range Cost (2026)</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{[
									{ city: "Vancouver", range: "$15,000 – $35,000", note: "Largest variation due to neighborhood mix" },
									{ city: "Camas", range: "$18,000 – $40,000", note: "Higher finish expectations; open-plan layouts common" },
									{ city: "Ridgefield", range: "$16,000 – $38,000", note: "Mix of new builds and older homes" },
									{ city: "Battle Ground", range: "$14,000 – $32,000", note: "North county; slightly lower labor market" },
									{ city: "Washougal", range: "$15,000 – $35,000", note: "Older river-area homes often need more demo work" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.city}, WA</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
										<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* BUDGET TIPS */}
				<section className="bg-[#F8F6F3] rounded-3xl p-10 space-y-6">
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How to Get More Kitchen for Your Budget in Camas
					</h2>
					<div className="space-y-4">
						{[
							"Keep the layout. Don't move the sink, dishwasher, or range location. This alone saves $2,000–$8,000 in plumbing and electrical rough-in costs.",
							"Reface instead of replace if your cabinet boxes are solid. New doors and hardware at $3,000–$8,000 vs. full replacement at $15,000+.",
							"Choose quartz over natural stone. Quartz performs as well, requires less maintenance, and costs about the same as natural granite — often less.",
							"Phase the work. Do cabinets and countertops now; add the island or appliance upgrade later. A licensed contractor can plan the rough-in for future phases without rework.",
							"Lock in materials early. 2026 tariffs on tile and appliances are ongoing — ordering materials at time of contract sign protects you from mid-project price increases.",
						].map((tip, i) => (
							<div key={i} className="flex gap-4 items-start">
								<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
								<p className="text-gray-700 font-medium leading-relaxed">{tip}</p>
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

				{/* BOTTOM CTA */}
				<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-2">
							Ready to Get Started?
						</p>
						<p className="font-black text-xl uppercase tracking-tight">
							NORBILT handles kitchen remodels throughout Camas and Clark County — free estimate, 1-year warranty.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 shrink-0">
						<Link
							href="/estimate"
							className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
						>
							Get Instant Estimate <ArrowRight className="w-4 h-4" />
						</Link>
						<a
							href="tel:+13602169920"
							className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm"
						>
							<Phone className="w-4 h-4" /> 360.216.9920
						</a>
					</div>
				</div>

				{/* INTERNAL LINKS */}
				<section className="space-y-4">
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest">
						Related Resources
					</p>
					<div className="flex flex-col sm:flex-row flex-wrap gap-3">
						<Link
							href="/blog/kitchen-remodel-cost-clark-county-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Kitchen Remodel Cost — Clark County WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/bathroom-remodel-cost-clark-county-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Bathroom Remodel Cost — Clark County WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/flooring-installation-cost-camas-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Flooring Installation Cost — Camas WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/locations/camas/kitchen-bath"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Kitchen & Bath — Camas <ArrowRight className="w-3 h-3" />
						</Link>
					</div>
				</section>

			</article>
		</div>
	);
}
