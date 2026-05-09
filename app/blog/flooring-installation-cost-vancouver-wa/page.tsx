import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost in Vancouver WA & Clark County: 2026 Guide | Norbilt",
	description:
		"How much does flooring installation cost in Vancouver WA? Real 2026 price ranges for LVP, hardwood, and tile across Clark County — plus what drives the cost and what older homes hide.",
	alternates: {
		canonical: "https://norbilt.com/blog/flooring-installation-cost-vancouver-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Vancouver WA & Clark County: 2026 Guide | Norbilt",
		description:
			"Real 2026 cost breakdown for flooring installation in Vancouver WA and Clark County. LVP, hardwood, tile pricing, subfloor costs, and city breakdowns.",
		url: "https://norbilt.com/blog/flooring-installation-cost-vancouver-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const flooringTypes = [
	{
		type: "Luxury Vinyl Plank (LVP)",
		installed: "$4 – $8 / sq ft",
		materialOnly: "$1.50 – $4 / sq ft",
		timeline: "1–2 days (avg room)",
		pros: "Waterproof, durable, easy underfoot, installs over most subfloors",
		cons: "Can't be refinished; lower perceived value than hardwood at resale",
		bestFor: "Kitchens, bathrooms, basements, rental properties, high-traffic areas",
	},
	{
		type: "Engineered Hardwood",
		installed: "$7 – $14 / sq ft",
		materialOnly: "$3 – $8 / sq ft",
		timeline: "1–3 days",
		pros: "Real wood look and feel, can be refinished once or twice, strong resale appeal",
		cons: "Not fully waterproof; avoid in bathrooms or below-grade spaces",
		bestFor: "Living rooms, dining rooms, bedrooms, primary suites",
	},
	{
		type: "Solid Hardwood",
		installed: "$10 – $20 / sq ft",
		materialOnly: "$5 – $12 / sq ft",
		timeline: "2–4 days + acclimation",
		pros: "Can be refinished multiple times, highest resale value, classic look",
		cons: "Sensitive to moisture and humidity — not ideal in Clark County's wet climate without proper subfloor prep",
		bestFor: "Formal living rooms, studies, upscale remodels where budget allows",
	},
	{
		type: "Porcelain / Ceramic Tile",
		installed: "$10 – $22 / sq ft",
		materialOnly: "$2 – $10 / sq ft",
		timeline: "2–5 days incl. cure time",
		pros: "Fully waterproof, extremely durable, huge design range",
		cons: "Hard underfoot, grout requires maintenance, cold in winter",
		bestFor: "Bathrooms, mudrooms, laundry rooms, kitchen floors",
	},
	{
		type: "Laminate",
		installed: "$3 – $6 / sq ft",
		materialOnly: "$1 – $3 / sq ft",
		timeline: "1–2 days",
		pros: "Most budget-friendly option, wide style selection",
		cons: "Cannot be refinished, less durable than LVP, not waterproof",
		bestFor: "Bedrooms, low-traffic rooms, rental properties on tight budgets",
	},
];

const additionalCosts = [
	{ item: "Subfloor repair / leveling", cost: "$3 – $8 / sq ft", note: "Common in Clark County homes pre-2000" },
	{ item: "Demo & removal of old flooring", cost: "$1 – $2 / sq ft", note: "Tile demo runs higher due to weight and adhesive" },
	{ item: "Moisture barrier / underlayment", cost: "$0.25 – $1 / sq ft", note: "Required under most floating floors" },
	{ item: "Stair nosing (per step)", cost: "$30 – $80", note: "Needed when flooring transitions to stairs" },
	{ item: "Transition strips (per piece)", cost: "$20 – $60 installed", note: "Between rooms or at doorways" },
	{ item: "Baseboard removal & reinstall", cost: "$1 – $2 / lin ft", note: "Or new baseboard install at $3–$6 / lin ft" },
	{ item: "Furniture moving", cost: "$0 – $200", note: "Norbilt moves standard furniture; appliances extra" },
];

const cityPricing = [
	{
		city: "Vancouver",
		slug: "vancouver",
		midLvp: "$4.50 – $8",
		notes: "Largest range due to age variation. Hazel Dell, Orchards, and Five Corners homes often need subfloor work. Newer Cascade Park and Mill Plain builds are typically cleaner installs.",
	},
	{
		city: "Camas",
		slug: "camas",
		midLvp: "$5 – $8",
		notes: "Well-maintained homes — subfloor issues are less common. Owners tend to choose engineered hardwood or premium LVP. Expect top-of-range material costs.",
	},
	{
		city: "Ridgefield",
		slug: "ridgefield",
		midLvp: "$4.50 – $7.50",
		notes: "Mix of new construction and older townsite homes. New builds are straightforward. Pre-1990s properties may have original subfloor or older adhesive that adds demo cost.",
	},
	{
		city: "Battle Ground",
		slug: "battle-ground",
		midLvp: "$4 – $7",
		notes: "North Clark County pricing is slightly lower on labor. Larger square footage on many acreage homes increases material cost even on budget-friendly LVP.",
	},
	{
		city: "Salmon Creek",
		slug: "salmon-creek",
		midLvp: "$4.50 – $7.50",
		notes: "1990s developments with consistent subfloor conditions. LVP installs cleanly in most homes. Engineered hardwood is popular in the living room areas.",
	},
	{
		city: "Washougal",
		slug: "washougal",
		midLvp: "$4.50 – $8",
		notes: "Older river-area homes often have OSB subfloors that need leveling. Newer Lookout Ridge builds are straightforward. Budget for a subfloor inspection on homes built before 1990.",
	},
];

const faqs = [
	{
		q: "How much does flooring installation cost in Vancouver WA?",
		a: "In 2026, LVP (luxury vinyl plank) installed in Vancouver WA runs $4–$8 per sq ft. Engineered hardwood is $7–$14 per sq ft. Tile is $10–$22 per sq ft. Laminate is $3–$6 per sq ft. A 400 sq ft living room in LVP typically costs $1,600–$3,200 installed, before any subfloor work.",
	},
	{
		q: "What is the most popular flooring choice in Clark County?",
		a: "LVP (luxury vinyl plank) is currently the most installed flooring type in Clark County homes. It's waterproof, durable, comfortable underfoot, and installs over most existing subfloors without leveling. Engineered hardwood is the top choice for living rooms and primary suites where resale value matters most.",
	},
	{
		q: "Do I need to replace my subfloor before installing new flooring?",
		a: "Not always. The subfloor needs to be flat (within 3/16 inch over 10 feet), dry, and structurally sound. Soft spots, rot, squeaks, or uneven areas should be repaired before any new flooring goes down. In Clark County homes built before 2000, subfloor issues are common — budget $3–$8 per sq ft if repairs are needed.",
	},
	{
		q: "How long does flooring installation take?",
		a: "A typical 400–600 sq ft room takes 1–2 days for LVP or laminate, 1–3 days for engineered hardwood, and 2–5 days for tile (including cure time). Whole-home installations take 3–7 days depending on square footage and floor type.",
	},
	{
		q: "Is LVP better than hardwood for Clark County homes?",
		a: "For most Clark County homeowners, LVP is the better practical choice — especially in kitchens, bathrooms, and below-grade spaces where moisture is a concern. Clark County's wet climate makes moisture management important. Engineered hardwood is great in dry above-grade rooms like living areas and bedrooms where you want the real wood look and feel.",
	},
	{
		q: "Is flooring installation covered by a warranty?",
		a: "Yes. All Norbilt flooring installation work is backed by a 1-year workmanship warranty. If a plank lifts, a transition strip comes loose, or a grout line cracks within the first year due to installation, we come back and fix it at no charge. Material warranties are separate and provided by the manufacturer.",
	},
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Article",
			headline: "Flooring Installation Cost in Vancouver WA & Clark County: 2026 Guide",
			description:
				"Real 2026 price ranges for flooring installation in Vancouver WA and Clark County — LVP, engineered hardwood, tile, and laminate. Subfloor costs, city breakdowns, and what to watch out for.",
			url: "https://norbilt.com/blog/flooring-installation-cost-vancouver-wa",
			datePublished: "2026-05-09",
			dateModified: "2026-05-09",
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

export default function FlooringCostPage() {
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
							Cost Guide · Vancouver WA · Clark County · 2026
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
						Flooring Installation Cost<br />
						<span className="text-[#FFB800]">in Vancouver WA</span>
					</h1>
					<p className="text-white/70 text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
						Real 2026 price ranges for LVP, engineered hardwood, tile, and
						laminate across Vancouver and Clark County. What each floor type
						actually costs installed, what the subfloor adds, and how to avoid
						the most common mistakes.
					</p>
				</div>
			</section>

			<article className="max-w-4xl mx-auto px-6 py-16 space-y-16">

				{/* CITATION CAPSULE */}
				<div className="bg-[#FFFBEA] border-l-4 border-[#FFB800] p-6 rounded-r-2xl">
					<p className="text-base font-bold text-[#1F2E2B] leading-relaxed">
						<span className="text-[#FFB800] font-black">Clark County 2026:</span>{" "}
						Flooring installation in Vancouver WA costs{" "}
						<strong>$4–$8 per sq ft for LVP</strong>,{" "}
						<strong>$7–$14 per sq ft for engineered hardwood</strong>, and{" "}
						<strong>$10–$22 per sq ft for tile</strong> — all installed including
						labor. Subfloor repair adds <strong>$3–$8 per sq ft</strong> and is
						common in Clark County homes built before 2000. Licensed contractor
						labor runs $65–$95/hr.
					</p>
				</div>

				{/* INTRO */}
				<section className="space-y-4 text-gray-700 text-lg leading-relaxed">
					<p>
						New flooring is one of the highest-impact updates a Clark County
						homeowner can make — it changes how a home looks, feels, and shows to
						buyers. It's also one of the most misquoted jobs in home improvement,
						largely because subfloor conditions and material selection vary so
						widely.
					</p>
					<p>
						This guide covers real 2026 installed pricing for every major floor
						type in Vancouver WA and surrounding Clark County cities — with
						component breakdowns, city-by-city notes, and the honest answer to
						the question most contractors dodge: what does the subfloor actually
						add?
					</p>
				</section>

				{/* FLOORING TYPES */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Flooring Cost by Type: Installed Prices for Clark County
					</h2>
					<p className="text-gray-600 font-medium">
						All prices below include licensed labor and standard installation.
						They do not include subfloor repairs, demo of existing flooring, or
						material upgrades beyond the listed range.
					</p>
					<div className="space-y-5">
						{flooringTypes.map((f, i) => (
							<div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
									<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight">
										{f.type}
									</h3>
									<div className="flex flex-col items-start md:items-end gap-1 shrink-0">
										<span className="text-[#2D5A3D] font-black text-lg">{f.installed}</span>
										<span className="text-gray-400 text-xs font-medium">installed (incl. labor)</span>
									</div>
								</div>
								<div className="grid md:grid-cols-3 gap-4 text-sm">
									<div>
										<p className="font-black text-[#1F2E2B] uppercase tracking-wide text-xs mb-1">Material only</p>
										<p className="text-gray-600">{f.materialOnly}</p>
									</div>
									<div>
										<p className="font-black text-[#1F2E2B] uppercase tracking-wide text-xs mb-1">Timeline</p>
										<p className="text-gray-600">{f.timeline}</p>
									</div>
									<div>
										<p className="font-black text-[#1F2E2B] uppercase tracking-wide text-xs mb-1">Best for</p>
										<p className="text-gray-600">{f.bestFor}</p>
									</div>
								</div>
								<div className="grid md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100 text-sm">
									<p className="text-gray-500"><span className="font-bold text-[#2D5A3D]">✓ Pros:</span> {f.pros}</p>
									<p className="text-gray-500"><span className="font-bold text-red-400">✗ Cons:</span> {f.cons}</p>
								</div>
							</div>
						))}
					</div>
					<p className="text-sm text-gray-400 italic">
						Based on 2026 Clark County labor rates. Material grade affects final
						cost significantly — budget-tier LVP starts at $1.50/sq ft; premium
						wide-plank runs $5+/sq ft before installation.
					</p>
				</section>

				{/* ADDITIONAL COSTS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Additional Costs Most Quotes Leave Out
					</h2>
					<p className="text-gray-600 font-medium">
						The flooring itself is only part of the job. These line items are
						frequently missing from initial bids — especially from unlicensed
						contractors — and they add up fast.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Item</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Cost</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">Note</th>
								</tr>
							</thead>
							<tbody>
								{additionalCosts.map((c, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
										<td className="px-6 py-4 font-medium text-[#1F2E2B]">{c.item}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{c.cost}</td>
										<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{c.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* SUBFLOOR SECTION */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						The Subfloor Problem: What Clark County Homes Actually Have
					</h2>
					<p className="text-gray-600 font-medium leading-relaxed">
						The subfloor is the most common unexpected cost in Clark County
						flooring jobs. Here's what we find most often and what it costs to
						fix before any new flooring goes down.
					</p>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Soft Spots & Rot",
								detail: "Common in bathrooms and kitchens of homes built before 1990. A slow toilet seal leak or dishwasher drip over years creates soft OSB that crumbles underfoot. Repair costs $3–$8/sq ft for the affected section.",
							},
							{
								title: "Uneven Subfloor",
								detail: "Floating floors (LVP, laminate, engineered hardwood) require a flat surface within 3/16 inch over 10 feet. Settlement in older Clark County homes often creates waves and dips. Self-leveling compound costs $2–$4/sq ft.",
							},
							{
								title: "Old Adhesive or Glue-Down Tile",
								detail: "Removing glue-down vinyl or tile leaves adhesive residue that must be ground down or skim-coated before new flooring installs cleanly. Add $1–$3/sq ft for this prep.",
							},
							{
								title: "Squeaky Floors",
								detail: "Squeaks come from the subfloor not being properly fastened to the joists. We renail or screw the subfloor down before installing any new material — prevents the squeak from transferring through the new floor.",
							},
						].map((item, i) => (
							<div key={i} className="bg-[#F8F6F3] p-6 rounded-2xl border-l-4 border-[#FFB800]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight mb-2">{item.title}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
							</div>
						))}
					</div>
					<div className="bg-[#1F2E2B] text-white rounded-2xl p-6">
						<p className="font-black uppercase tracking-tight text-[#FFB800] text-sm mb-2">Norbilt's Approach</p>
						<p className="text-white/80 leading-relaxed">
							We inspect the subfloor before finalizing any flooring quote. If we
							find issues, we tell you before we start — with a written cost to
							repair. No surprises mid-job. Budget 10–15% contingency on Clark
							County homes built before 1995.
						</p>
					</div>
				</section>

				{/* COST BY CITY */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Flooring Installation Cost by City
					</h2>
					<p className="text-gray-600 font-medium">
						Labor rates are consistent across Clark County. City-to-city variation
						comes from home age and the subfloor conditions they typically produce.
					</p>
					<div className="grid md:grid-cols-2 gap-6">
						{cityPricing.map((c, i) => (
							<div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
								<div className="flex items-start justify-between mb-3">
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-lg">
										{c.city}, WA
									</h3>
									<span className="text-[#2D5A3D] font-black text-sm whitespace-nowrap ml-4">
										LVP: {c.midLvp}/sq ft
									</span>
								</div>
								<p className="text-gray-500 text-sm leading-relaxed">{c.notes}</p>
								<Link
									href={`/locations/${c.slug}/flooring`}
									className="inline-flex items-center gap-2 mt-4 text-xs font-black text-[#2D5A3D] uppercase tracking-widest hover:gap-3 transition-all"
								>
									Flooring in {c.city} <ArrowRight className="w-3 h-3" />
								</Link>
							</div>
						))}
					</div>
				</section>

				{/* HOW TO CHOOSE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						LVP vs. Hardwood vs. Tile: Which Is Right for Your Home?
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Choose LVP if",
								points: [
									"You have pets, kids, or high-traffic areas",
									"You're flooring a bathroom, laundry room, or kitchen",
									"Your subfloor has minor moisture concerns",
									"You want the fastest install and lowest total cost",
									"It's a rental property or investment flip",
								],
							},
							{
								title: "Choose Engineered Hardwood if",
								points: [
									"You want real wood feel and resale appeal",
									"You're flooring a living room, dining room, or bedroom",
									"Your budget allows $7–$14/sq ft installed",
									"The space is above grade and moisture-controlled",
									"You may want to refinish the floor in 10–15 years",
								],
							},
							{
								title: "Choose Tile if",
								points: [
									"You're flooring a bathroom, mudroom, or laundry room",
									"You want the most durable, longest-lasting option",
									"You're doing a full bathroom remodel at the same time",
									"Design matters — tile offers the most visual variety",
									"You're willing to wait for the tile cure time",
								],
							},
						].map((section, i) => (
							<div key={i} className="bg-[#F8F6F3] rounded-2xl p-8">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-lg mb-4">
									{section.title}
								</h3>
								<div className="space-y-3">
									{section.points.map((p, j) => (
										<div key={j} className="flex gap-3 items-start">
											<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
											<p className="text-gray-700 font-medium">{p}</p>
										</div>
									))}
								</div>
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
							Norbilt installs flooring across Clark County — free estimate, 1-year warranty.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 shrink-0">
						<Link
							href="/locations/vancouver/flooring"
							className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
						>
							Vancouver Flooring <ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm"
						>
							<Phone className="w-4 h-4" /> 360.216.9920
						</Link>
					</div>
				</div>

				{/* NEARBY CITIES */}
				<section>
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-4">
						Flooring Installation by City
					</p>
					<div className="flex flex-wrap gap-3">
						{cityPricing.map((c) => (
							<Link
								key={c.slug}
								href={`/locations/${c.slug}/flooring`}
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
