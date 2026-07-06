import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling in Vancouver WA: 2026 Cost Guide & What to Expect | NORBILT",
	description:
		"Planning a home remodel in Vancouver WA? Real 2026 costs for kitchen, bathroom, flooring, finish carpentry, and whole-home updates. What Vancouver homeowners actually spend.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-vancouver-wa",
	},
	openGraph: {
		title: "Home Remodeling in Vancouver WA: 2026 Cost Guide & What to Expect | NORBILT",
		description:
			"Real 2026 costs for home remodeling in Vancouver WA. Kitchen, bathroom, flooring, finish carpentry, and whole-home project pricing from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const projectCosts = [
	{
		project: "Kitchen Remodel",
		scope: "Cosmetic refresh to full custom build",
		range: "$1,500 – $75,000+",
		notes: "Most Vancouver mid-range projects: $14,000–$35,000",
	},
	{
		project: "Bathroom Remodel",
		scope: "Cosmetic refresh to full custom build",
		range: "$800 – $45,000+",
		notes: "Most Vancouver mid-range projects: $6,000–$22,000",
	},
	{
		project: "Flooring (installed)",
		scope: "LVP, hardwood, or tile — per sq ft",
		range: "$3 – $20/sq ft",
		notes: "LVP $4–$7, hardwood $8–$13, tile $9–$20",
	},
	{
		project: "Finish Carpentry",
		scope: "Base + door casing or crown molding",
		range: "$2 – $9/lin ft",
		notes: "Wainscoting, built-ins, and coffered ceilings priced separately",
	},
	{
		project: "Drywall Repair / Refresh",
		scope: "Small patch to full room refresh",
		range: "$150 – $3,500",
		notes: "Texture matching on 1960s–1980s Vancouver homes adds cost",
	},
	{
		project: "Whole-Room Paint",
		scope: "Walls, ceiling, trim — one room",
		range: "$700 – $1,600",
		notes: "Whole-home interior paint: $3,200–$8,500+",
	},
	{
		project: "Tub-to-Shower Conversion",
		scope: "Remove tub, install walk-in shower",
		range: "$1,500 – $22,000",
		notes: "Mid-range tiled shower: $3,500–$10,000",
	},
];

const popularRemodels = [
	{
		title: "Kitchen Refreshes",
		desc: "New countertops, cabinet painting or refacing, updated hardware, and a backsplash tile are the most requested kitchen updates in Vancouver. Full gut remodels with new cabinets run more, but cosmetic refreshes in the $5,000–$15,000 range deliver big visual impact without the full project timeline.",
	},
	{
		title: "Bathroom Tile & Vanity",
		desc: "Dated tile, worn vanities, and original fixtures are common in Vancouver's older neighborhoods. A tile-and-vanity update typically runs $4,000–$10,000 and is the highest-ROI bathroom improvement you can make before a sale or for daily livability.",
	},
	{
		title: "New Flooring Throughout",
		desc: "LVP replacement — especially ripping out original carpet from the 1970s–1990s — is one of NORBILT's highest-volume Vancouver projects. Doing all hard surfaces in a single visit keeps transitions consistent and reduces disruption. A full main-floor LVP install typically runs $4,000–$9,000.",
	},
	{
		title: "Finish Carpentry Upgrades",
		desc: "Crown molding, wainscoting, and updated door casings are popular in Vancouver's established neighborhoods like Arnada and Carter Park. These upgrades add perceived age and character to homes that were built with minimal millwork, and they're among the highest ROI per dollar spent on interior work.",
	},
	{
		title: "Tub-to-Shower Conversions",
		desc: "Vancouver's primary baths — especially in 1980s and 1990s homes — frequently have oversized garden tubs that go unused. Converting to a walk-in tile shower is NORBILT's most-requested bathroom project in Vancouver. Mid-range versions with a full tile surround run $3,500–$10,000.",
	},
	{
		title: "Whole-Home Interior Paint",
		desc: "A single-day whole-home paint refresh is the fastest way to modernize a Vancouver home's feel before a sale. Vancouver buyers notice dated colors immediately. A whole-home interior paint project (walls, ceiling, trim) typically runs $3,200–$8,500 depending on size and number of rooms.",
	},
];

const roiData = [
	{
		project: "Minor Kitchen Remodel",
		roi: "60–80%",
		notes: "New countertops, hardware, paint, and appliances consistently recover well at resale across all Vancouver neighborhoods",
	},
	{
		project: "Bathroom Update",
		roi: "55–75%",
		notes: "Tile, vanity, and fixture updates are among the most noticed improvements by buyers in Clark County's market",
	},
	{
		project: "Flooring (LVP or hardwood)",
		roi: "70–90%",
		notes: "Fresh flooring is one of the highest ROI per dollar spent — especially replacing carpet that's 15+ years old",
	},
	{
		project: "Whole-Home Interior Paint",
		roi: "80–100%",
		notes: "The single cheapest way to increase buyer appeal — fresh neutral paint is cited by agents as the top pre-sale improvement",
	},
	{
		project: "Finish Carpentry (crown, wainscoting)",
		roi: "50–70%",
		notes: "Adds perceived quality and age to Vancouver homes that were built with minimal millwork",
	},
	{
		project: "Tub-to-Shower Conversion",
		roi: "50–65%",
		notes: "Functional upgrade that appeals to the broad Vancouver buyer demographic and improves daily use",
	},
];

const faqs = [
	{
		q: "How much does home remodeling cost in Vancouver WA?",
		a: "It depends on scope. Small cosmetic updates — paint, hardware, fixture swaps — run $1,500–$5,000. A single-room remodel (kitchen or bathroom) runs $6,000–$35,000 for mid-range work. Multi-room updates run $18,000–$55,000. Whole-home interior updates can run $35,000–$110,000+. Vancouver is more varied than Camas — older neighborhoods like Arnada and Fruit Valley have different project profiles than newer construction in Salmon Creek or Felida.",
	},
	{
		q: "Do I need a permit to remodel my home in Vancouver WA?",
		a: "Cosmetic work — paint, flooring, hardware, fixture swaps — generally does not require a permit. Permits are required when work involves electrical (new circuits, panel changes), plumbing (relocating fixtures, adding lines), or structural changes (wall removal, beam work). Permits are issued by the City of Vancouver (incorporated areas) or Clark County (unincorporated areas like Orchards or Five Corners). Permit costs typically run $150–$800 depending on scope. NORBILT pulls all required permits as part of every project.",
	},
	{
		q: "What remodels add the most value in Vancouver WA?",
		a: "Kitchen and bath updates return 55–80% of cost at resale in Clark County. Flooring replacement — especially swapping old carpet for LVP or hardwood — is one of the highest ROI improvements per dollar. Interior paint is the cheapest way to increase buyer appeal. Finish carpentry (crown molding, wainscoting) adds perceived quality to Vancouver homes that were built with minimal millwork in the 1970s–1990s.",
	},
	{
		q: "How long does a home remodel take in Vancouver?",
		a: "A single-room cosmetic update takes 1–5 days. A full room remodel (kitchen or bathroom) takes 2–5 weeks depending on material lead times. Multi-room projects run 4–10 weeks. Whole-home updates can run 3–5 months. The biggest schedule driver is usually cabinet or tile lead time — we plan around that at the estimate stage.",
	},
	{
		q: "Are you a licensed contractor for home remodeling in Vancouver WA?",
		a: "Yes. NORBILT is a licensed Washington State General Contractor, fully insured and bonded. We serve Vancouver and all of Clark County. All work comes with a 1-year workmanship warranty. We pull all required permits, coordinate inspections, and handle the full scope — you don't manage subcontractors.",
	},
	{
		q: "My Vancouver home was built in the 1970s — what should I watch out for during a remodel?",
		a: "Homes built before 1978 may contain lead paint (on trim, walls, and cabinets) and asbestos (in drywall texture, floor tiles, and insulation). We test when there's any indication of these materials and follow proper remediation protocols. Older electrical panels (Federal Pacific, Zinsco) may need upgrading when doing permit-required electrical work. Galvanized water lines and original cast iron drain lines are also common — these may surface during plumbing-adjacent work.",
	},
];

const schema = {
	"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: "Home Remodeling in Vancouver WA: 2026 Cost Guide & What to Expect",
		description:
			"Real 2026 costs for home remodeling in Vancouver WA. Kitchen, bathroom, flooring, finish carpentry, and whole-home project pricing from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-vancouver-wa",
		datePublished: "2026-07-06",
		dateModified: "2026-07-06",
		author: { "@id": "https://www.norbilt.com/#founder" },
		publisher: { "@id": "https://www.norbilt.com/#organization" },
		mainEntityOfPage: "https://www.norbilt.com/blog/home-remodeling-vancouver-wa",
};

export default function HomeRemodelingVancouverPage() {
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
				{ "@type": "ListItem", position: 3, name: "Home Remodeling in Vancouver WA: 2026 Cost Guide & What to Expect", item: "https://www.norbilt.com/blog/home-remodeling-vancouver-wa" },
			],
				}) }}
			/>

			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Cost Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Vancouver, WA
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Home Remodeling
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Home Remodeling in Vancouver WA:{" "}
						<span className="text-[#FFB800]">What It Costs in 2026</span>
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8 border-l-4 border-[#FFB800] pl-6">
						Real costs for kitchen, bathroom, flooring, finish carpentry, and whole-home updates in
						Vancouver WA — from a $1,500 quick refresh to a $110,000+ whole-home interior project.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated July 2026</span>
						<span>·</span>
						<span>Vancouver, WA · Clark County</span>
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
						Home remodeling in Vancouver WA costs <strong>$1,500–$75,000+</strong> depending on scope in 2026.
						Small updates (paint, hardware, fixtures) run <strong>$1,500–$5,000</strong>. Room-level
						remodels run <strong>$6,000–$35,000</strong>. Whole-home interior updates run{" "}
						<strong>$35,000–$110,000+</strong>. Costs vary by neighborhood — older areas like Arnada and Fruit
						Valley often carry discovery costs; newer builds in Salmon Creek and Felida tend to run cleaner.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Vancouver is Clark County's largest city — and its most varied. The housing stock ranges from
						1920s craftsman bungalows in Arnada to 2010s new construction in Salmon Creek, with a thick band
						of 1970s–1990s ranch and split-level homes in between. That variation matters for remodeling:
						the project profile in a 1975 Orchards ranch is completely different from a 2005 Felida build,
						even when the scope on paper looks the same.
					</p>
					<p>
						Whether you're updating to sell, improving to stay, or finishing out a home you've owned for
						years, the projects that move the needle in Vancouver are the same ones that matter everywhere in
						Clark County: kitchens, bathrooms, flooring, and finish carpentry. This guide covers what
						remodeling actually costs in Vancouver in 2026 — real numbers, project by project, with the
						specifics that actually affect what you'll pay here.
					</p>
					<p>
						The short answer: a small update runs <strong>$1,500–$5,000</strong>. A single-room remodel runs
						<strong> $6,000–$35,000</strong>. A whole-home interior update can run{" "}
						<strong>$35,000–$110,000+</strong>. Where you land depends on what you're replacing, the finish
						level you choose, and what your home's walls are hiding.
					</p>
				</section>

				{/* COST BY PROJECT TYPE TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Home Remodeling Cost by Project Type — Vancouver WA 2026
					</h2>
					<p className="text-gray-600 font-medium">
						Every project is different, but these ranges give you a solid starting point for budgeting before
						your estimate. All costs reflect licensed contractor rates in Clark County.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Project</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Scope</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Cost Range</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Vancouver Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{projectCosts.map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-5 font-black text-[#1F2E2B] whitespace-nowrap">{row.project}</td>
										<td className="px-6 py-5 text-gray-500 text-xs font-medium">{row.scope}</td>
										<td className="px-6 py-5 font-black text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
										<td className="px-6 py-5 text-gray-500 text-xs hidden md:table-cell">{row.notes}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						Based on 2026 Clark County contractor rates. Prices include licensed labor and standard materials.
						Final cost depends on site conditions, finish level, and project scope.
					</p>
				</section>

				{/* NEIGHBORHOODS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How Vancouver's Neighborhoods Affect Remodeling Cost
					</h2>
					<p className="text-gray-600 font-medium">
						Vancouver isn't one market — it's several. The neighborhood your home is in shapes what the
						remodel will actually cost, what buyers expect, and what discovery you'll hit when walls open.
					</p>
					<div className="space-y-5">
						{[
							{
								title: "Arnada, Carter Park, Fruit Valley — Pre-1960 Homes",
								body: "These established neighborhoods have Vancouver's oldest housing stock. Craftsman and mid-century homes here have character — original millwork, hardwood subfloors, solid construction — but they also carry the highest discovery risk. Knob-and-tube wiring, galvanized plumbing, and asbestos texture are common. Budget a 15–20% contingency on any project that opens walls or floors.",
							},
							{
								title: "Hazel Dell, Orchards, Mill Plain — 1970s–1990s Ranches",
								body: "Vancouver's largest single age band. These homes are well built but are now 30–50 years old and showing their age in kitchens, bathrooms, and flooring. Federal Pacific or Zinsco panels, galvanized lines, and original 1980s tile are all common. Projects here tend to be full-gut rather than cosmetic because the underlying systems need addressing alongside the finish work.",
							},
							{
								title: "Salmon Creek, Felida, Five Corners — 1990s–2010s Builds",
								body: "Newer construction with updated electrical, PEX or copper plumbing, and modern HVAC. Discovery risk is lower. Projects here are typically cleaner — cosmetic kitchen refreshes, LVP installs, and bathroom tile updates without the underlying system surprises. Buyers in these neighborhoods expect updated finishes, so there's a clear return on kitchen and bath investment.",
							},
							{
								title: "Lake Shore, Walnut Grove — Mixed Age, Higher Price Points",
								body: "These areas command Vancouver's higher price points and buyer expectations lean toward Camas-level finishes. Quartz counters, hardwood flooring, and full tile showers are expected rather than optional. Project budgets skew toward the upper end of Clark County ranges.",
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

				{/* MOST POPULAR REMODELS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Most Popular Remodels in Vancouver — What NORBILT Sees
					</h2>
					<p className="text-gray-600 font-medium">
						Based on projects completed throughout Vancouver and Clark County, here are the remodels
						Vancouver homeowners request most often in 2026.
					</p>
					<div className="grid md:grid-cols-2 gap-5">
						{popularRemodels.map((item, i) => (
							<div key={i} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<div className="flex items-start gap-3 mb-3">
									<span className="w-7 h-7 rounded-full bg-[#FFB800] text-black text-xs font-black flex items-center justify-center shrink-0">
										{i + 1}
									</span>
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm">{item.title}</h3>
								</div>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* HIRE CTA */}
				<div className="bg-[#FFB800] rounded-3xl p-8">
					<p className="text-xs font-black uppercase tracking-widest text-black/60 mb-2">
						Know Your Scope?
					</p>
					<p className="font-black text-2xl uppercase tracking-tighter text-black mb-4">
						Get a Free Estimate for Your Vancouver Remodel
					</p>
					<p className="text-black/70 font-medium mb-6">
						Licensed, insured, and based in Clark County. We scope, price, and complete the work — no managing multiple contractors.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="/estimate"
							className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
						>
							Get Instant Estimate <ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="/services/kitchen-bath"
							className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/5 transition-all text-sm"
						>
							See Our Services <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>

				{/* ROI SECTION */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Which Remodels Add the Most Value in Vancouver WA
					</h2>
					<p className="text-gray-600 font-medium">
						ROI estimates below are based on national remodeling cost-vs-value data adjusted for Clark
						County's market. Vancouver is a competitive market with strong buyer demand — finish level and
						project quality affect resale return as much as scope.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Project</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Est. ROI at Resale</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{roiData.map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.project}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.roi}</td>
										<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.notes}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						ROI estimates are approximations based on Clark County market data and national remodeling
						industry benchmarks. Individual results vary based on home price, neighborhood, and finish level.
					</p>
				</section>

				{/* WHAT DRIVES COSTS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Drives Remodeling Costs in Vancouver WA
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Home Age — Discovery Risk in Older Stock",
								body: "Vancouver's large inventory of 1960s–1990s homes is the biggest wildcard in project budgeting. When you open a wall in a 1978 Hazel Dell ranch, you may find original wiring that doesn't meet code, galvanized lines, or asbestos-containing texture. These aren't optional fixes — they need addressing before finish work can proceed. Budget a 10–15% contingency on any project in a home built before 1990.",
							},
							{
								title: "Permit Requirements",
								body: "Any project involving electrical, plumbing, or structural work requires a permit. In Vancouver, permits are issued by the City of Vancouver for incorporated areas, and by Clark County for unincorporated areas (Orchards, Five Corners, Hazel Dell). Permit costs typically run $150–$800. NORBILT handles all permit applications and inspections — you don't manage the process.",
							},
							{
								title: "2026 Material Cost Environment",
								body: "Material costs are elevated across the board in 2026. Appliances are up 5–8%. Tile and stone are up 10–15%. Lumber is up 12–18% vs. 2024 driven by tariffs and supply constraints. These increases affect every project — we walk through current material pricing at the estimate stage so there are no budget surprises mid-project.",
							},
							{
								title: "Finish Level — Vancouver Has Range",
								body: "Unlike Camas, which trends uniformly toward premium finishes, Vancouver has real budget range. Salmon Creek buyers expect quartz and hardwood; Orchards buyers may prioritize durability and cost over finish level. We match material recommendations to the neighborhood and your goals — there's no point specifying Camas-level finishes in a market where buyers won't pay for them.",
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

				{/* TIPS */}
				<section className="bg-[#F8F6F3] rounded-3xl p-10 space-y-6">
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How to Get the Most From Your Vancouver Remodel Budget
					</h2>
					<div className="space-y-4">
						{[
							"Start with kitchens and bathrooms. These two rooms drive buyer perception and resale value more than any other space — and they're where Vancouver buyers do the most comparing during walkthroughs.",
							"Don't do cosmetic work over problems. If there's water damage behind the tile, a subfloor soft spot under the kitchen, or a failing cabinet box, address it during the remodel — not after. Opening the wall once is always cheaper than twice.",
							"Know your permit jurisdiction. Vancouver incorporated areas permit through the City. Unincorporated areas (Hazel Dell, Orchards, Five Corners, Salmon Creek) permit through Clark County. Requirements are similar but the offices differ. We handle this for you.",
							"Use a licensed contractor for permit-required work. Washington State requires a licensed contractor for work above the $500 threshold. Unlicensed work can void homeowner's insurance and create disclosure issues at resale — and in Vancouver's market, buyers are increasingly asking for permit history.",
							"Budget a 10–15% contingency on pre-1990 homes. Vancouver's older stock is well built but surprises are common when walls open — older wiring, galvanized lines, asbestos texture, and soft subfloor are all things we find regularly. The contingency exists so they don't stop the project.",
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
							NORBILT handles home remodeling throughout Vancouver WA and all of Clark County — free estimate, 1-year warranty.
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
							href="/blog/kitchen-remodel-cost-vancouver-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Kitchen Remodel Cost — Vancouver WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/bathroom-remodel-cost-vancouver-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Bathroom Remodel Cost — Vancouver WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/flooring-installation-cost-vancouver-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Flooring Cost — Vancouver WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/home-remodeling-clark-county-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Home Remodeling — Clark County WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/locations/vancouver"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							NORBILT in Vancouver, WA <ArrowRight className="w-3 h-3" />
						</Link>
					</div>
				</section>

			</article>
		</div>
	);
}
