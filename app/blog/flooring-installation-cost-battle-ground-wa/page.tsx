import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost Battle Ground WA: 2026 Guide | NORBILT",
	description:
		"How much does flooring installation cost in Battle Ground WA? Real 2026 price ranges for LVP, hardwood, tile & carpet from a licensed Clark County contractor. Free estimate. (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/flooring-installation-cost-battle-ground-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Battle Ground WA | NORBILT",
		description:
			"LVP, hardwood, tile, and carpet flooring costs in Battle Ground WA. Real 2026 numbers from a local licensed contractor.",
		url: "https://www.norbilt.com/blog/flooring-installation-cost-battle-ground-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{ material: "Carpet", install: "$1.50 – $3.50/sq ft", material_cost: "$1.00 – $4.00/sq ft", total_1000sqft: "$2,500 – $7,500", notes: "Bedrooms, stairs. Budget-friendly, shorter lifespan in PNW moisture." },
	{ material: "Luxury Vinyl Plank (LVP)", install: "$2.00 – $4.00/sq ft", material_cost: "$2.00 – $6.00/sq ft", total_1000sqft: "$4,000 – $10,000", notes: "Most popular in north Clark County. 100% waterproof, click-lock, works over concrete slabs." },
	{ material: "Laminate", install: "$1.75 – $3.50/sq ft", material_cost: "$1.50 – $4.50/sq ft", total_1000sqft: "$3,250 – $8,000", notes: "Wood look at lower cost. Not waterproof — avoid in bathrooms or humid basements." },
	{ material: "Engineered Hardwood", install: "$3.00 – $5.00/sq ft", material_cost: "$4.00 – $10.00/sq ft", total_1000sqft: "$7,000 – $15,000", notes: "Authentic wood look, can be refinished 1–2 times. Better moisture tolerance than solid." },
	{ material: "Solid Hardwood", install: "$4.00 – $7.00/sq ft", material_cost: "$5.00 – $14.00/sq ft", total_1000sqft: "$9,000 – $21,000", notes: "Premium option for acreage homes. Cannot install below grade. Multiple refinish cycles." },
	{ material: "Porcelain / Ceramic Tile", install: "$5.00 – $9.00/sq ft", material_cost: "$2.00 – $8.00/sq ft", total_1000sqft: "$7,000 – $17,000", notes: "Best for bathrooms, mudrooms, entries. Labor-intensive; grout requires sealing." },
	{ material: "Sheet Vinyl", install: "$1.00 – $2.50/sq ft", material_cost: "$0.75 – $3.00/sq ft", total_1000sqft: "$1,750 – $5,500", notes: "Budget utility rooms and rentals. Limited design options, shows age quickly." },
];

const addOnCosts = [
	{ item: "Old flooring removal & disposal (per sq ft)", range: "$0.50 – $2.00" },
	{ item: "Subfloor repair / leveling (per sq ft)", range: "$2.00 – $6.00" },
	{ item: "Stair nose installation (per tread)", range: "$30 – $80" },
	{ item: "Transition strips (per doorway)", range: "$25 – $60" },
	{ item: "Asbestos testing (older homes pre-1985)", range: "$150 – $400" },
	{ item: "Radiant heat underlayment add-on", range: "$1.50 – $3.00/sq ft" },
	{ item: "Furniture moving (per room)", range: "$50 – $150" },
];

const materialComparison = [
	{ feature: "Waterproof", carpet: "No", lvp: "Yes", laminate: "No", engineered: "Partial", hardwood: "No", tile: "Yes" },
	{ feature: "Works over concrete", carpet: "Yes", lvp: "Yes", laminate: "Limited", engineered: "Yes", hardwood: "No", tile: "Yes" },
	{ feature: "Can be refinished", carpet: "No", lvp: "No", laminate: "No", engineered: "1–2x", hardwood: "Multiple", tile: "No" },
	{ feature: "PNW moisture tolerance", carpet: "Poor", lvp: "Excellent", laminate: "Fair", engineered: "Good", hardwood: "Poor", tile: "Excellent" },
	{ feature: "Warmth underfoot", carpet: "Excellent", lvp: "Good", laminate: "Good", engineered: "Good", hardwood: "Good", tile: "Poor" },
	{ feature: "Relative cost", carpet: "Low", lvp: "Low–Mid", laminate: "Low–Mid", engineered: "Mid–High", hardwood: "High", tile: "Mid–High" },
];

const neighborhoods = [
	{ area: "Daybreak", note: "2000s–2010s subdivision. Builder-grade carpet is nearing the end of its lifespan in many homes here. LVP replacement throughout the main level is the #1 project we see — open layouts average 800–1,400 sq ft of main-floor flooring." },
	{ area: "Cherry Grove", note: "1970s–1990s ranch homes with a mix of old carpet, vinyl, and occasionally original hardwood under carpet. Subfloor repairs are more common here — budget an extra $500–$1,500 for leveling." },
	{ area: "Lewisville / Rural Battle Ground", note: "Larger homes on acreage. Engineered hardwood and solid hardwood installs are more common — homeowners here invest in the $10,000–$25,000+ range for whole-home flooring." },
	{ area: "South Battle Ground (119th St corridor)", note: "Entry-level and move-up homes. LVP for main living areas and carpet for bedrooms is the most common combination — projects typically run $5,000–$9,000 total." },
];

const drivers = [
	{ title: "PNW Moisture Makes LVP the Default", body: "Battle Ground gets significant rainfall and many homes have concrete slabs in the lower level. LVP is 100% waterproof, dimensionally stable, and installs directly over concrete — which is why it has become the dominant choice in north Clark County for main living areas and below-grade spaces." },
	{ title: "1980s–2000s Homes Need Subfloor Work", body: "Many Cherry Grove and Daybreak-era homes have subfloor seams that have shifted over decades, especially near load-bearing walls and transitions. On any project, we assess the subfloor condition before quoting — a flat, solid subfloor is what separates a flooring job that lasts 20 years from one that creaks in 3." },
	{ title: "Open Floor Plans = Larger Projects", body: "Ranch and split-level homes in Battle Ground often have 800–1,500 sq ft of continuous open living space. That's actually a pricing advantage — fewer transitions, less waste, and less labor per square foot than a room-by-room install." },
	{ title: "Fewer Licensed Contractors Serve North Clark County", body: "Most flooring contractors are based in Vancouver or Camas. NORBILT is one of the most active licensed contractors specifically in the Battle Ground area, which means faster scheduling, no outsourcing, and someone who actually knows the north county housing stock." },
	{ title: "Asbestos Is Still a Factor in Pre-1985 Homes", body: "Some original sheet vinyl and floor adhesive in homes built before 1985 contains asbestos. Disturbing it without testing is illegal in Washington. We recommend testing on any Cherry Grove home built before 1985 before any flooring removal begins ($150–$400 for certified testing)." },
];

const faqs = [
	{
		q: "How much does flooring installation cost in Battle Ground WA?",
		a: "In Battle Ground WA, flooring installation costs range from $1,750 for basic sheet vinyl up to $21,000+ for solid hardwood in a larger home. The most popular choice — LVP (luxury vinyl plank) — runs $4,000–$10,000 for a 1,000 sq ft main level, including materials and labor. Prices reflect 2026 Clark County rates.",
	},
	{
		q: "What type of flooring is best for Battle Ground WA homes?",
		a: "LVP (luxury vinyl plank) is the best all-around choice for most Battle Ground homes. It's 100% waterproof, installs over concrete slabs, handles the PNW moisture climate well, and costs 30–50% less than hardwood. For acreage homes or upscale builds, engineered hardwood offers authentic wood character with better moisture tolerance than solid hardwood.",
	},
	{
		q: "How much does it cost to replace carpet with LVP in Battle Ground?",
		a: "Replacing carpet with LVP in Battle Ground typically costs $5,000–$9,000 for a 1,000–1,500 sq ft main level. That includes old carpet removal, light subfloor prep, LVP material (mid-range), and labor. Subfloor repairs are extra — budget $500–$1,500 more if the existing floor has soft spots or significant seams.",
	},
	{
		q: "Do I need a permit for flooring installation in Battle Ground?",
		a: "Standard flooring replacement (carpet, LVP, hardwood) does not require a permit in Battle Ground. Structural subfloor work, adding radiant heat, or modifications that affect the home's systems may require a permit. NORBILT (WA Lic. NORBI**741CS) handles all permitting if needed.",
	},
	{
		q: "How long does flooring installation take in Battle Ground?",
		a: "A single room takes 1 day. A full main level (800–1,500 sq ft) takes 2–4 days. Whole-home projects with multiple flooring types take 5–10 days depending on subfloor conditions. We confirm timelines during the free estimate walkthrough.",
	},
];

export default function FlooringCostBattleGround() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Flooring Installation Cost in Battle Ground WA: 2026 Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-09-18",
						dateModified: "2026-09-18",
						description:
							"Real 2026 flooring installation costs for LVP, hardwood, tile, carpet and laminate in Battle Ground WA and north Clark County.",
						mainEntityOfPage:
							"https://www.norbilt.com/blog/flooring-installation-cost-battle-ground-wa",
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
							{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
							{
								"@type": "ListItem",
								position: 3,
								name: "Flooring Installation Cost in Battle Ground WA",
								item: "https://www.norbilt.com/blog/flooring-installation-cost-battle-ground-wa",
							},
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqs.map(({ q, a }) => ({
							"@type": "Question",
							name: q,
							acceptedAnswer: { "@type": "Answer", text: a },
						})),
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								<MapPin className="w-3 h-3" /> Battle Ground WA
							</span>
							<span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Flooring Guide · 2026</span>
						</div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
							Flooring Installation Cost in Battle Ground WA
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							Real 2026 price ranges for LVP, hardwood, tile, carpet, and laminate — from a licensed contractor
							who works in north Clark County every week.
						</p>
						<div className="flex flex-wrap gap-4 pt-2">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
							>
								Get Free Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<a
								href="tel:3602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-colors"
							>
								<Phone className="w-4 h-4" /> (360) 216-9920
							</a>
						</div>
					</div>
				</section>

				{/* QUICK ANSWER */}
				<section className="py-12 bg-[#FFB800]/5 border-b border-[#FFB800]/20">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#FFB800] mb-3">Quick Answer</p>
						<p className="text-xl font-black text-[#1F2E2B] mb-2">
							Flooring in Battle Ground WA costs $1,750 – $21,000+ depending on material and square footage.
						</p>
						<p className="text-gray-600">
							LVP (luxury vinyl plank) — the most popular choice in north Clark County — runs{" "}
							<strong>$4,000–$10,000 for a 1,000 sq ft main level</strong> including removal, materials, and installation.
							Tile runs higher at $7,000–$17,000 for the same area. Carpet is the most budget-friendly at $2,500–$7,500.
						</p>
					</div>
				</section>

				{/* MAIN COST TABLE */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">
							2026 Flooring Cost by Material — Battle Ground WA
						</h2>
						<p className="text-gray-600 mb-8">
							All estimates include professional installation. Material costs assume mid-range products. Prices reflect
							current Clark County labor rates.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Material</th>
										<th className="text-left px-4 py-3 font-bold">Install (per sq ft)</th>
										<th className="text-left px-4 py-3 font-bold">Material (per sq ft)</th>
										<th className="text-left px-4 py-3 font-bold">Total (1,000 sq ft)</th>
										<th className="text-left px-4 py-3 font-bold hidden lg:table-cell">Notes</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 font-bold text-[#1F2E2B]">{row.material}</td>
											<td className="px-4 py-3 text-gray-700">{row.install}</td>
											<td className="px-4 py-3 text-gray-700">{row.material_cost}</td>
											<td className="px-4 py-3 font-semibold text-[#2D5A3D]">{row.total_1000sqft}</td>
											<td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{row.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-xs text-gray-400 mt-3">
							* Estimates are for planning purposes. Final price depends on subfloor condition, room configuration,
							and material selection. Request a free on-site estimate for an exact quote.
						</p>
					</div>
				</section>

				{/* ADD-ON COSTS */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Add-On Costs to Budget For</h2>
						<p className="text-gray-600 mb-8">
							These line items aren&apos;t always in the headline price — know them before you start.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-4 py-3 font-bold">Add-On</th>
										<th className="text-left px-4 py-3 font-bold">Typical Cost</th>
									</tr>
								</thead>
								<tbody>
									{addOnCosts.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-4 py-3 text-[#1F2E2B]">{row.item}</td>
											<td className="px-4 py-3 font-semibold text-[#2D5A3D]">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* WHY LVP IS DOMINANT */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-4">
							Why LVP Has Become the Default in Battle Ground
						</h2>
						<p className="text-gray-600 mb-8 leading-relaxed">
							Walk into a newly renovated home in Daybreak or Cherry Grove and you&apos;ll almost certainly find luxury
							vinyl plank underfoot. Here&apos;s why it&apos;s replaced carpet and laminate as the go-to for north Clark County
							homeowners:
						</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{[
								{ title: "100% Waterproof", body: "Battle Ground gets 45+ inches of rain per year. LVP doesn't swell, warp, or delaminate with moisture exposure — which eliminates the core failure mode of laminate and real wood on the PNW wet side." },
								{ title: "Installs Over Concrete", body: "Many Battle Ground homes have slab foundations or below-grade bonus rooms. LVP floats over concrete without requiring the moisture barrier and acclimation period that hardwood demands." },
								{ title: "Open-Plan Friendly", body: "Ranch and open-floor-plan homes in Battle Ground have large, continuous living areas. LVP's click-lock system installs quickly across big open spaces with minimal waste — keeping labor costs reasonable." },
								{ title: "Looks Like Real Wood", body: "Modern LVP has deeply embossed grain texture and realistic color variation. At 6–10 feet away, most people genuinely can't tell the difference from engineered hardwood at half the cost." },
								{ title: "Low Maintenance", body: "No refinishing, no sealing, no special cleaners. Sweep, damp-mop, done. For families with dogs, kids, or heavy foot traffic, it's the most forgiving floor on the market." },
								{ title: "Strong Resale Signal", body: "Battle Ground buyers have come to expect updated flooring. Homes with fresh LVP throughout the main level move faster and appraise better than homes with worn carpet — especially in the $350,000–$550,000 price range." },
							].map((item, i) => (
								<div key={i} className="flex gap-3">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] flex-shrink-0 mt-0.5" />
									<div>
										<p className="font-bold text-[#1F2E2B] mb-1">{item.title}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* MATERIAL COMPARISON TABLE */}
				<section className="py-16 lg:py-20 bg-gray-50">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">Material Comparison</h2>
						<p className="text-gray-600 mb-8">
							Side-by-side on the factors that matter most for Battle Ground homes.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-gray-200">
							<table className="w-full text-xs sm:text-sm">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="text-left px-3 py-3 font-bold">Feature</th>
										<th className="text-center px-3 py-3 font-bold">Carpet</th>
										<th className="text-center px-3 py-3 font-bold">LVP</th>
										<th className="text-center px-3 py-3 font-bold">Laminate</th>
										<th className="text-center px-3 py-3 font-bold">Eng. Hardwood</th>
										<th className="text-center px-3 py-3 font-bold">Solid HW</th>
										<th className="text-center px-3 py-3 font-bold">Tile</th>
									</tr>
								</thead>
								<tbody>
									{materialComparison.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-3 py-2.5 font-semibold text-[#1F2E2B]">{row.feature}</td>
											<td className="px-3 py-2.5 text-center text-gray-600">{row.carpet}</td>
											<td className="px-3 py-2.5 text-center text-gray-600 font-semibold text-[#2D5A3D]">{row.lvp}</td>
											<td className="px-3 py-2.5 text-center text-gray-600">{row.laminate}</td>
											<td className="px-3 py-2.5 text-center text-gray-600">{row.engineered}</td>
											<td className="px-3 py-2.5 text-center text-gray-600">{row.hardwood}</td>
											<td className="px-3 py-2.5 text-center text-gray-600">{row.tile}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* COST DRIVERS */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">
							What Drives Flooring Cost in Battle Ground
						</h2>
						<div className="space-y-6">
							{drivers.map((d, i) => (
								<div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
									<h3 className="font-black text-[#1F2E2B] mb-2">{d.title}</h3>
									<p className="text-gray-600 leading-relaxed">{d.body}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* BY NEIGHBORHOOD */}
				<section className="py-16 lg:py-20 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-white mb-2">By Battle Ground Neighborhood</h2>
						<p className="text-gray-400 mb-8">What we typically see in each area.</p>
						<div className="grid sm:grid-cols-2 gap-6">
							{neighborhoods.map((n, i) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
									<p className="font-black text-[#FFB800] mb-2">{n.area}</p>
									<p className="text-gray-300 text-sm leading-relaxed">{n.note}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* INTERNAL LINK — related posts */}
				<section className="py-12 bg-gray-50 border-b border-gray-200">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<p className="text-sm font-bold uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: "Kitchen Remodel Cost — Battle Ground", href: "/blog/kitchen-remodel-cost-battle-ground-wa" },
								{ label: "Bathroom Remodel Cost — Battle Ground", href: "/blog/bathroom-remodel-cost-battle-ground-wa" },
								{ label: "Flooring Cost — Clark County", href: "/blog/flooring-installation-cost-clark-county-wa" },
								{ label: "Flooring Cost — Vancouver WA", href: "/blog/flooring-installation-cost-vancouver-wa" },
							].map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5A3D] bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-[#2D5A3D]/40 transition-colors"
								>
									{link.label} <ArrowRight className="w-3 h-3" />
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="py-16 lg:py-24">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-2xl font-black text-[#1F2E2B] mb-8">
							Flooring Cost FAQ — Battle Ground WA
						</h2>
						<div className="space-y-4">
							{faqs.map((faq, i) => (
								<div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
									<div className="bg-gray-50 px-6 py-4">
										<h3 className="font-bold text-[#1F2E2B]">{faq.q}</h3>
									</div>
									<div className="px-6 py-4">
										<p className="text-gray-600 leading-relaxed">{faq.a}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-16 lg:py-24 bg-[#1F2E2B]">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
						<p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm">
							Licensed in Battle Ground — WA Lic. NORBI**741CS
						</p>
						<h2 className="text-3xl font-black text-white">
							Get a Free Flooring Estimate in Battle Ground
						</h2>
						<p className="text-gray-300 leading-relaxed">
							We measure, assess your subfloor, and give you a written estimate — no pressure, no upselling.
							Most estimates take 30–45 minutes. Same-week availability for Battle Ground homeowners.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-2">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-[#1F2E2B] font-black px-8 py-4 rounded-xl hover:bg-yellow-400 transition-colors text-lg"
							>
								Request Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:3602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg"
							>
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
