import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Finish Carpentry Cost in Vancouver WA: 2026 Pricing Guide | NORBILT",
	description:
		"How much does finish carpentry cost in Vancouver WA? Real 2026 price ranges for baseboards, crown molding, wainscoting, door casing, and built-ins across Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/finish-carpentry-cost-vancouver-wa",
	},
	openGraph: {
		title: "Finish Carpentry Cost in Vancouver WA: 2026 Pricing Guide | NORBILT",
		description:
			"Real 2026 cost breakdown for finish carpentry in Vancouver WA and Clark County. Baseboard, crown molding, wainscoting, built-ins, and what drives the price.",
		url: "https://www.norbilt.com/blog/finish-carpentry-cost-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const trimCosts = [
	{
		type: "Baseboard — Paint-Grade MDF",
		laborMaterial: "$2–$4 / lin ft",
		typical: "$400–$900",
		note: "Average room (~150 lin ft)",
	},
	{
		type: "Baseboard — Solid Wood / Stain-Grade",
		laborMaterial: "$4–$7 / lin ft",
		typical: "$600–$1,200",
		note: "Higher material cost",
	},
	{
		type: "Crown Molding — Standard Profile",
		laborMaterial: "$5–$8 / lin ft",
		typical: "$600–$1,200",
		note: "One room (~150 lin ft)",
	},
	{
		type: "Crown Molding — Complex / Compound",
		laborMaterial: "$8–$14 / lin ft",
		typical: "$1,000–$2,500",
		note: "Vaulted or angled ceilings",
	},
	{
		type: "Door & Window Casing",
		laborMaterial: "$150–$350 / opening",
		typical: "$600–$1,500",
		note: "4–6 openings typical home",
	},
	{
		type: "Wainscoting — MDF Panel",
		laborMaterial: "$6–$10 / sq ft",
		typical: "$900–$1,800",
		note: "One room (~150 sq ft)",
	},
	{
		type: "Wainscoting — Tile",
		laborMaterial: "$10–$18 / sq ft",
		typical: "$1,500–$2,800",
		note: "Bathroom / laundry room",
	},
	{
		type: "Board & Batten Accent Wall",
		laborMaterial: "$8–$14 / sq ft",
		typical: "$800–$2,000",
		note: "One feature wall",
	},
	{
		type: "Built-In Shelving / Trim",
		laborMaterial: "$75–$150 / lin ft",
		typical: "$1,500–$4,000",
		note: "Custom alcove or closet",
	},
	{
		type: "Stair Railing Repair / Replace",
		laborMaterial: "$300–$800 / section",
		typical: "$600–$2,000",
		note: "Includes balusters + rail",
	},
	{
		type: "Fireplace Mantel Install",
		laborMaterial: "$400–$1,200",
		typical: "$400–$1,200",
		note: "Pre-made surround installed",
	},
	{
		type: "Full Room Trim Package",
		laborMaterial: "See breakdown",
		typical: "$1,800–$4,500",
		note: "Base + crown + casing",
	},
];

const faqs = [
	{
		q: "How much does baseboard installation cost in Vancouver WA?",
		a: "Paint-grade MDF baseboard installed in Vancouver WA runs $2–$4 per linear foot in 2026, labor and materials included. An average room with roughly 150 linear feet of baseboard costs $400–$900 installed. Solid wood or stain-grade baseboard runs $4–$7 per linear foot due to higher material cost.",
	},
	{
		q: "How much does crown molding cost to install in Clark County?",
		a: "Standard crown molding installs for $5–$8 per linear foot in Clark County in 2026, covering labor and materials. A single room with 150 linear feet runs $600–$1,200. Compound crown on vaulted or cathedral ceilings costs more — $8–$14 per linear foot — because cuts are more complex and take longer.",
	},
	{
		q: "What is wainscoting and what does it cost in Vancouver WA?",
		a: "Wainscoting is decorative paneling installed on the lower portion of a wall — typically 36–42 inches high. MDF panel wainscoting costs $6–$10 per square foot installed in Vancouver WA. Tile wainscoting (common in bathrooms) runs $10–$18 per square foot. A dining room or hallway with 150 square feet of wainscoting typically runs $900–$1,500 for MDF.",
	},
	{
		q: "Why does finish carpentry cost more in older homes?",
		a: "Older Clark County homes often have walls that are out of plumb, irregular corners, and settled framing — all of which add time to trim installation. A baseboard that installs quickly in a newer home may take twice as long in a 1970s or 1980s build that has shifted over time. Budget 15–25% more on homes built before 1990.",
	},
	{
		q: "Can I save money by supplying my own trim materials?",
		a: "Yes. Most finish carpenters in Vancouver WA will install customer-supplied materials. Labor-only rates run roughly $1.50–$3 per linear foot for baseboard and $3–$6 for crown molding. The risk is that if materials are damaged during install or there's not enough for waste, you'll need to source more. We recommend buying 10–15% extra.",
	},
	{
		q: "How long does a full trim package take in Vancouver WA?",
		a: "A full room trim package — baseboard, crown molding, and door casing — typically takes one to two days for an average-sized room. A full home (6–8 rooms plus hallways) typically runs three to five days. We give a firm timeline during your free estimate based on the specific scope.",
	},
];

export default function FinishCarpentryBlogPost() {
	return (
		<div className="bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						"headline": "Finish Carpentry Cost in Vancouver WA: 2026 Pricing Guide",
						"description": "Real 2026 price ranges for finish carpentry in Vancouver WA and Clark County — baseboards, crown molding, wainscoting, door casing, and built-ins.",
						"datePublished": "2026-05-26",
						"dateModified": "2026-05-26",
						"author": { "@type": "Person", "name": "Andrey" },
						"publisher": {
							"@type": "Organization",
							"name": "NORBILT",
							"url": "https://www.norbilt.com",
						},
						"mainEntityOfPage": "https://www.norbilt.com/blog/finish-carpentry-cost-vancouver-wa",
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
						{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
						{ "@type": "ListItem", position: 3, name: "Finish Carpentry Cost in Vancouver WA: 2026 Guide", item: "https://www.norbilt.com/blog/finish-carpentry-cost-vancouver-wa" },
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
							Clark County, WA
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Finish Carpentry Cost in Vancouver WA
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8">
						Real 2026 pricing for baseboards, crown molding, wainscoting, door casing, and built-ins — plus what drives the cost up in Clark County homes.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Clark County, WA</span>
						<span>·</span>
						<Link href="/about" className="text-[#FFB800] hover:text-white transition-colors font-bold">By Andrey</Link><span>· WA Licensed General Contractor</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#1F2E2B] font-medium">
						Finish carpentry in Vancouver WA costs <strong>$2–$4 per linear foot</strong> for baseboard,{" "}
						<strong>$5–$8 per linear foot</strong> for crown molding, and{" "}
						<strong>$6–$10 per square foot</strong> for wainscoting in 2026 — labor and materials included.
						A full room trim package (base + crown + casing) typically runs <strong>$1,800–$4,500</strong>.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Finish carpentry is the difference between a house that feels complete and one that still feels like a construction site. Baseboards cover the gap between wall and floor. Crown molding ties the ceiling to the room. Door casing frames every opening cleanly. When it's done right, you stop noticing it — it just feels like a finished home.
					</p>
					<p>
						In Vancouver WA and Clark County, finish carpentry costs have shifted in 2026 due to lumber tariffs and increased contractor demand. This guide breaks down the real installed prices for every type of trim work, what drives costs up, and what to watch for in older Clark County homes.
					</p>
				</section>

				{/* COST TABLE */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Finish Carpentry Cost by Type — Vancouver WA (2026)
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						All prices include labor and standard paint-grade materials unless noted. Stain-grade wood, custom profiles, and complex ceiling angles add cost.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Trim Type</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Rate</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Typical Total</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{trimCosts.map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-5 py-3 font-semibold text-[#1F2E2B]">{row.type}</td>
										<td className="px-5 py-3 font-black text-[#2D5A3D] whitespace-nowrap">{row.laborMaterial}</td>
										<td className="px-5 py-3 font-black text-[#2D5A3D] whitespace-nowrap">{row.typical}</td>
										<td className="px-5 py-3 text-gray-400 text-xs hidden md:table-cell">{row.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 mt-3 font-medium">
						Source: 2026 Clark County market rates. Lumber costs are up 12–18% vs. 2024 due to Canadian softwood tariffs — these are already reflected in the ranges above.
					</p>
				</section>

				{/* WHAT DRIVES COST */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Affects Finish Carpentry Pricing in Clark County
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Linear Footage",
								body: "Finish carpentry is priced by the linear or square foot — so the more trim, the more it costs. An open-plan main floor with long uninterrupted runs is actually faster and cheaper per foot than a home with many short runs, inside corners, and transitions.",
							},
							{
								title: "Material Grade",
								body: "Paint-grade MDF is the most common and affordable option — it takes paint cleanly and holds up well in interior environments. Stain-grade solid wood (oak, maple, pine) costs 40–80% more in materials but is required if you want a stained or natural finish. Finger-jointed pine sits in between.",
							},
							{
								title: "Profile Complexity",
								body: "A simple 3.5-inch colonial baseboard installs much faster than a built-up multi-piece base with cap and shoe molding. Crown molding on a cathedral or coffered ceiling requires compound angle cuts that take significantly longer than standard 90-degree rooms.",
							},
							{
								title: "Age of Your Home",
								body: "Clark County homes built before 1990 frequently have walls that are out of plumb, floors that are uneven, and corners that aren't square. A finish carpenter has to scribe, cope, and fit trim to an imperfect surface rather than cutting clean angles. Budget 15–25% more on pre-1990 homes.",
							},
							{
								title: "2026 Lumber Tariffs",
								body: "Canadian softwood tariffs pushed lumber prices up 12–18% year over year. MDF trim has been less affected than solid wood, but all wood-based products have seen cost increases. Pricing from 2024 estimates will likely read low by $0.30–$0.80 per linear foot on materials alone.",
							},
							{
								title: "Scope Bundling",
								body: "Doing all your trim work in one visit — baseboard, crown, and casing together — is almost always cheaper per linear foot than separate trips. One mobilization, one setup, one cleanup. Breaking trim projects into phases adds cost each time.",
							},
						].map((item) => (
							<div key={item.title} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* ROOM BY ROOM */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
						Room-by-Room Finish Carpentry Estimates
					</h2>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Room</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Scope</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Estimate</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{[
									{ room: "Bedroom (12×12)", scope: "Baseboard + door casing", est: "$500–$900" },
									{ room: "Living Room (16×20)", scope: "Baseboard + crown molding + casing", est: "$1,500–$2,800" },
									{ room: "Dining Room", scope: "Wainscoting + crown molding + base", est: "$2,000–$4,000" },
									{ room: "Hallway", scope: "Baseboard + door casing (4 doors)", est: "$800–$1,600" },
									{ room: "Primary Suite", scope: "Baseboard + crown + accent wall", est: "$1,800–$3,500" },
									{ room: "Full Home (3br/2ba)", scope: "Base + crown throughout", est: "$6,000–$14,000" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-5 py-3 font-semibold text-[#1F2E2B]">{row.room}</td>
										<td className="px-5 py-3 text-gray-500">{row.scope}</td>
										<td className="px-5 py-3 font-black text-[#2D5A3D]">{row.est}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* DIY VS PRO */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						DIY vs. Hiring a Finish Carpenter in Vancouver WA
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						Finish carpentry is one of the more approachable DIY projects — if you have the tools, patience, and tolerance for imperfection. Here's the honest breakdown:
					</p>
					<div className="grid md:grid-cols-2 gap-6">
						{[
							{
								label: "DIY — When It Makes Sense",
								points: [
									"Newer home with square walls and true corners",
									"Simple straight runs of baseboard, no inside corners",
									"You own or can rent a miter saw",
									"You're comfortable with caulk and wood filler to cover gaps",
									"The space won't be heavily scrutinized (utility room, basement)",
								],
								color: "border-[#FFB800]/30",
							},
							{
								label: "Hire a Pro — When It Makes Sense",
								points: [
									"Pre-1990 home with out-of-plumb walls or uneven floors",
									"Crown molding on vaulted or non-standard ceilings",
									"Stain-grade trim that can't hide gaps with caulk",
									"Formal spaces where the finish will be closely noticed",
									"You want it done in one day with a clean result",
								],
								color: "border-[#FFB800]",
							},
						].map((col) => (
							<div key={col.label} className={`border-l-2 ${col.color} pl-6`}>
								<p className="font-black text-white uppercase tracking-wide text-sm mb-4">{col.label}</p>
								<ul className="space-y-3">
									{col.points.map((pt) => (
										<li key={pt} className="flex gap-3">
											<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
											<span className="text-[#A7C4B5] text-sm font-medium">{pt}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* CITY BREAKDOWN */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Finish Carpentry Pricing by City — Clark County
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Rates are consistent across Clark County, with slight variation for drive time to outer areas.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">City</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Baseboard Rate</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Crown Rate</th>
									<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{[
									{ city: "Vancouver", base: "$2–$4/lin ft", crown: "$5–$8/lin ft", note: "Core market" },
									{ city: "Camas", base: "$2–$4/lin ft", crown: "$5–$8/lin ft", note: "High-end finishes common" },
									{ city: "Washougal", base: "$2.50–$4/lin ft", crown: "$5–$9/lin ft", note: "Mix of new and older homes" },
									{ city: "Ridgefield", base: "$2–$4/lin ft", crown: "$5–$8/lin ft", note: "Many new builds" },
									{ city: "Battle Ground", base: "$2.50–$4.50/lin ft", crown: "$5.50–$9/lin ft", note: "Drive time factor" },
									{ city: "Salmon Creek / Hazel Dell", base: "$2–$4/lin ft", crown: "$5–$8/lin ft", note: "Close to Vancouver" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-5 py-3 font-semibold text-[#1F2E2B]">{row.city}</td>
										<td className="px-5 py-3 font-black text-[#2D5A3D]">{row.base}</td>
										<td className="px-5 py-3 font-black text-[#2D5A3D]">{row.crown}</td>
										<td className="px-5 py-3 text-gray-400 text-xs hidden md:table-cell">{row.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* FAQ */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-5">
						{faqs.map((faq, i) => (
							<div key={i} className="border border-[#E8E4DE] rounded-2xl p-7 bg-white">
								<h3 className="font-black text-[#1F2E2B] text-lg mb-3">{faq.q}</h3>
								<p className="text-gray-600 font-medium leading-relaxed">{faq.a}</p>
							</div>
						))}
					</div>
				</section>

				{/* INTERNAL LINKS */}
				<section className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE]">
					<h3 className="font-black text-[#1F2E2B] uppercase tracking-widest text-sm mb-5">Related Reading</h3>
					<div className="space-y-3">
						{[
							{ title: "Handyman Cost in Vancouver WA (2026 Rates)", href: "/blog/handyman-cost-vancouver-wa" },
							{ title: "Drywall Repair Cost in Vancouver WA", href: "/blog/drywall-repair-cost-vancouver-wa" },
							{ title: "Home Repairs Before Selling in Clark County WA", href: "/blog/home-repairs-before-selling-clark-county-wa" },
							{ title: "Licensed Contractor vs. Handyman in Washington State", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
						].map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="flex items-center gap-3 text-[#2D5A3D] font-semibold hover:text-[#FFB800] transition-colors group"
							>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								{link.title}
							</Link>
						))}
					</div>
				</section>

				{/* CTA */}
				<section className="bg-[#1F2E2B] rounded-3xl p-10 md:p-14 text-center border-b-8 border-[#FFB800]">
					<h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
						Get a Free Trim Estimate in Vancouver WA
					</h2>
					<p className="text-[#A7C4B5] font-medium mb-8 max-w-lg mx-auto">
						NORBILT installs baseboards, crown molding, wainscoting, and custom trim throughout Clark County. Licensed, 5-star rated, and backed by a 1-year workmanship warranty.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/estimate"
							className="px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
						>
							Get Instant Estimate
						</Link>
						<a
							href="tel:+13602169920"
							className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
						>
							<Phone className="w-5 h-5" /> (360) 216-9920
						</a>
					</div>
				</section>

			</article>
		</div>
	);
}
