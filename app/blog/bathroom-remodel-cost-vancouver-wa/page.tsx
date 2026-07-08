import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Vancouver WA: 2026 Pricing Guide | NORBILT",
	description:
		"How much does a bathroom remodel cost in Vancouver WA? Real 2026 price ranges for every scope — from a $920 cosmetic refresh to a $35,000 primary suite gut — from a licensed Vancouver contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-vancouver-wa",
	},
	openGraph: {
		title: "Bathroom Remodel Cost in Vancouver WA: 2026 Pricing Guide | NORBILT",
		description:
			"Complete 2026 cost guide for bathroom remodels in Vancouver WA. Real price ranges, component-level costs, neighborhood breakdowns, and what drives the price up.",
		url: "https://www.norbilt.com/blog/bathroom-remodel-cost-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "New fixtures, faucet, toilet seat, recaulk, paint. Nothing structural — same tile, same layout.",
		range: "$920 – $2,500",
		timeline: "1–2 days",
		best: "Cosmetic wear, prepping to sell, tight budget",
	},
	{
		scope: "Mid-Range Update",
		desc: "New vanity, tile backsplash, mirror, lighting upgrade, all fixtures replaced. No demo.",
		range: "$3,450 – $7,500",
		timeline: "3–5 days",
		best: "Dated finishes, worn vanity, fixtures 15+ years old",
	},
	{
		scope: "Full Remodel",
		desc: "Demo, new tile floor and shower surround, new vanity, all fixtures, drywall as needed.",
		range: "$9,200 – $18,000",
		timeline: "1–2 weeks",
		best: "Water damage, gut renovation, keeping the same layout",
	},
	{
		scope: "High-End / Primary Suite",
		desc: "Custom tile, freestanding tub, heated floors, full layout reconfiguration, premium fixtures.",
		range: "$20,750 – $35,000+",
		timeline: "2–4 weeks",
		best: "Primary suite upgrade, maximum ROI before sale, luxury finish",
	},
];

const costByComponent = [
	{ item: "Toilet replacement", range: "$345 – $800" },
	{ item: "Faucet & showerhead replacement", range: "$230 – $600" },
	{ item: "Vanity (supply + install)", range: "$690 – $2,500" },
	{ item: "Recaulk tub / shower base", range: "$115 – $250" },
	{ item: "Regrout shower or tub surround", range: "$345 – $800" },
	{ item: "Tile floor (per sq ft, installed)", range: "$9.25 – $18" },
	{ item: "Shower tile surround (installed)", range: "$1,400 – $4,000" },
	{ item: "Subfloor repair", range: "$575 – $1,800" },
	{ item: "Exhaust fan replacement", range: "$175 – $400" },
	{ item: "Mirror & lighting update", range: "$345 – $900" },
	{ item: "Heated floor (tile, per sq ft)", range: "$14 – $25" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,750 – $4,000" },
];

const costDrivers = [
	{
		title: "Vancouver's Older Housing Stock",
		body: "A significant portion of Vancouver homes — particularly in Hazel Dell, Orchards, and Felida — were built in the 1970s through 1990s. These homes commonly hide soft subfloors from decades-old slow leaks, original galvanized pipe, and non-standard framing around tubs. We always walk the bathroom before quoting — hidden conditions are where budget surprises live.",
	},
	{
		title: "Tile Selection",
		body: "Basic ceramic tile runs $2–5 per sq ft. Large-format porcelain, natural stone, or custom mosaic patterns can reach $15–30 per sq ft and take significantly longer to install. Tile choice alone can swing a project by $2,000–$8,000 in either direction.",
	},
	{
		title: "Plumbing Moves",
		body: "Keeping all fixtures in the same location is the single most effective way to control cost. Moving a toilet, shower drain, or sink requires a licensed plumber and adds $1,750–4,000 per fixture moved. The vast majority of Vancouver bathroom remodels keep the plumbing in place.",
	},
	{
		title: "Permit Requirements in Vancouver",
		body: "The City of Vancouver requires permits for structural changes, plumbing relocation, and electrical work. Cosmetic remodels — vanity swaps, tile resurfacing, fixture replacements — typically don't require a permit. NORBILT pulls permits when required. Unpermitted work creates problems at resale and can void homeowner's insurance claims.",
	},
	{
		title: "Labor Rates in Vancouver WA",
		body: "Licensed contractor labor in Vancouver runs $65–$95/hour as of 2026 — roughly 10–20% below Portland metro for comparable work. Full bathroom remodels are typically quoted as flat project prices, not hourly. Be wary of hourly-only quotes on full remodels — scope creep is hard to control.",
	},
];

const neighborhoodNotes = [
	{
		area: "Hazel Dell / Orchards",
		note: "High concentration of 1970s–1990s builds. Subfloor rot and original cast-iron drains are common. Budget for an inspection before finalizing your scope.",
	},
	{
		area: "Felida / Salmon Creek",
		note: "Mix of 1980s–90s ranches and newer builds. Older homes often have original fixtures that are long overdue — full replacement typically pencils out better than patching.",
	},
	{
		area: "East Vancouver (near Camas)",
		note: "Newer construction (2000s+) means fewer surprises. Subfloors are generally solid, and layouts are more consistent. Budgets here tend to run closer to the low end of each tier.",
	},
	{
		area: "Central / Downtown Vancouver",
		note: "Older stock mixed with renovated homes. Bungalows and older homes often have small bathrooms with non-standard dimensions — custom vanity sizing and specialty tile cuts add cost.",
	},
	{
		area: "Fisher's Landing / Mill Plain",
		note: "1990s–2000s builds in good structural condition. Common remodel trigger: outdated finishes (brass hardware, pink tile, original 90s vanities) ready for a modern update.",
	},
];

const faqs = [
	{
		q: "How much does a bathroom remodel cost in Vancouver WA?",
		a: "In Vancouver WA, a bathroom remodel costs between $920 and $35,000+ depending on scope. A cosmetic refresh (new fixtures, recaulk, paint) runs $920–$2,500. A mid-range update with new vanity and tile runs $3,450–$7,500. A full gut remodel with new tile, vanity, and all fixtures runs $9,200–$18,000. High-end primary suite remodels reach $35,000+.",
	},
	{
		q: "What is the cheapest way to update a bathroom in Vancouver WA?",
		a: "The highest-ROI low-cost updates are recaulking ($115–$250), replacing faucets and showerheads ($230–$600), and swapping out a dated vanity light and mirror ($345–$900). These three changes together run $700–$1,750 and dramatically change how a bathroom feels without any tile work or demo.",
	},
	{
		q: "Do I need a permit for a bathroom remodel in Vancouver WA?",
		a: "The City of Vancouver requires permits for structural work, plumbing relocation, and electrical panel changes. Cosmetic remodels — replacing fixtures, vanity, tile, and paint within the existing layout — typically don't require a permit. NORBILT is a licensed WA general contractor (Lic. NORBI**741CS) and pulls permits when required.",
	},
	{
		q: "How long does a bathroom remodel take in Vancouver WA?",
		a: "A cosmetic refresh takes 1–2 days. A mid-range update (new vanity, tile, fixtures) takes 3–5 days. A full gut remodel takes 1–2 weeks. High-end remodels with custom tile and layout changes take 2–4 weeks. Timeline depends heavily on material lead times and whether surprises are uncovered during demo — older Vancouver homes often have both.",
	},
	{
		q: "What adds the most value to a bathroom remodel before selling in Vancouver?",
		a: "In Vancouver's real estate market, updated tile, a new vanity, and modern fixtures have the highest visible ROI. Fixing water damage and replacing failing caulk and grout is non-negotiable — buyers' agents flag these immediately. A mid-range update ($3,450–$7,500) typically recovers 60–80% of its cost at sale in the Vancouver WA market.",
	},
	{
		q: "Why are older homes in Hazel Dell and Orchards more expensive to remodel?",
		a: "Homes in Hazel Dell, Orchards, and similar areas built in the 1970s–1990s frequently have soft subfloors from slow leaks that were never fully addressed, original galvanized pipe that should be replaced during any plumbing work, and tile surrounds installed directly over drywall rather than cement board — a code violation that has to be corrected. These conditions don't show up until demo, which is why we always walk the space before quoting.",
	},
];

export default function BathroomRemodelCostVancouverWA() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Bathroom Remodel Cost in Vancouver WA: 2026 Pricing Guide",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-06-08",
						dateModified: "2026-06-08",
						description:
							"Complete 2026 cost guide for bathroom remodels in Vancouver WA — real price ranges by scope, component-level costs, neighborhood breakdowns, and what drives the price up or down.",
						mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-vancouver-wa",
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
						{ "@type": "ListItem", position: 3, name: "Bathroom Remodel Cost in Vancouver WA: 2026 Pricing Guide", item: "https://www.norbilt.com/blog/bathroom-remodel-cost-vancouver-wa" },
					],
				}) }}
			/>


			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link
								href="/blog"
								className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors"
							>
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
							<span className="text-white/50 text-xs font-medium">Updated June 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Bathroom Remodel Cost in{" "}
							<span className="text-[#FFB800]">Vancouver WA</span>
						</h1>
				<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
					<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
					<p className="text-gray-700 leading-relaxed text-sm">A bathroom remodel in Vancouver WA costs between $920 for a cosmetic refresh and $35,000+ for a full primary suite gut. A cosmetic refresh — new toilet, faucet, mirror, recaulk, and paint — runs $920–$2,500 and takes 1–2 days. A mid-range remodel with new vanity, tile floor, shower surround, and all fixtures costs $3,450–$7,500 over 3–5 days. A full gut remodel — everything to studs — runs $9,200–$18,000 in 1–2 weeks. Vancouver neighborhood matters: Hazel Dell and Orchards homes (1960s–1980s builds) frequently have water damage and outdated plumbing that adds $460–$1,380 to the budget. West Vancouver new construction and Fisher's Landing have cleaner subfloors and fewer surprises. All prices are 2026 rates from NORBILT, a licensed Clark County general contractor (WA Lic. NORBI**741CS).</p>
				</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for every scope — from a quick cosmetic
							refresh to a full primary suite gut — from a licensed contractor
							working in Vancouver every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Vancouver, WA · Hazel Dell · Orchards · Felida · Salmon Creek · Fisher's Landing
						</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* INTRO */}
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>
								A bathroom remodel in Vancouver WA costs anywhere from{" "}
								<strong>$920 for a cosmetic refresh</strong> to{" "}
								<strong>$35,000+ for a high-end primary suite gut</strong>. The
								range is wide because &ldquo;bathroom remodel&rdquo; means
								something different to every homeowner — a new faucet and recaulk
								is a remodel, and so is moving the plumbing and installing heated
								floors.
							</p>
							<p>
								This guide breaks down real 2026 prices for every scope of
								bathroom work in Vancouver, including what each tier actually
								includes, component-level costs, what hidden conditions in older
								Vancouver homes add to the budget, and neighborhood-by-neighborhood
								notes from jobs we do every week.
							</p>
							<p>
								NORBILT is a licensed general contractor (WA Lic.{" "}
								<strong>NORBI**741CS</strong>) serving Vancouver and all of Clark
								County. We carry $1,000,000 liability insurance and back all
								bathroom work with a 1-year workmanship warranty.
							</p>
						</section>

						{/* COST TIERS TABLE */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Bathroom Remodel Cost by Scope
							</h2>
							<p className="text-gray-600">
								Every bathroom remodel falls into one of four tiers. Here&apos;s
								what each includes, what it costs in Vancouver WA, and when each
								scope makes sense.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left p-4 font-black uppercase tracking-wider">Scope</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">What's Included</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">Cost Range</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">Timeline</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">Best For</th>
										</tr>
									</thead>
									<tbody>
										{costTiers.map((row, i) => (
											<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
												<td className="p-4 font-black text-[#1F2E2B]">{row.scope}</td>
												<td className="p-4 text-gray-600">{row.desc}</td>
												<td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
												<td className="p-4 text-gray-500 whitespace-nowrap">{row.timeline}</td>
												<td className="p-4 text-gray-600">{row.best}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<p className="text-xs text-gray-400">
								2026 installed prices for Vancouver WA. Ranges reflect variation
								in materials, site conditions, and scope. Older homes (pre-1995)
								may require additional subfloor or plumbing work not included
								above.
							</p>
						</section>

						{/* COMPONENT COSTS */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Bathroom Remodel Cost by Component
							</h2>
							<p className="text-gray-600">
								Not every bathroom remodel is a full gut job. Here&apos;s what
								individual components cost installed in Vancouver WA in 2026 —
								useful for scoping a partial update or pricing out individual
								repairs.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left p-4 font-black uppercase tracking-wider">Component</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">Installed Cost (Vancouver WA, 2026)</th>
										</tr>
									</thead>
									<tbody>
										{costByComponent.map((row, i) => (
											<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
												<td className="p-4 text-gray-700 font-medium">{row.item}</td>
												<td className="p-4 font-bold text-[#2D5A3D]">{row.range}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>

						{/* COST DRIVERS */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Drives Bathroom Remodel Costs in Vancouver WA
							</h2>
							<div className="space-y-5">
								{costDrivers.map((d, i) => (
									<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
										<h3 className="text-lg font-black text-[#1F2E2B] mb-3">{d.title}</h3>
										<p className="text-gray-600 leading-relaxed">{d.body}</p>
									</div>
								))}
							</div>
						</section>

						{/* NEIGHBORHOOD NOTES */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Vancouver Neighborhood Breakdown
							</h2>
							<p className="text-gray-600">
								Where you live in Vancouver affects your remodel budget — not just
								because of real estate values, but because of the age and
								construction quality of your home.
							</p>
							<div className="space-y-4">
								{neighborhoodNotes.map((n, i) => (
									<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] mt-1 shrink-0" />
										<div>
											<p className="font-black text-[#1F2E2B] mb-1">{n.area}</p>
											<p className="text-gray-600 text-sm leading-relaxed">{n.note}</p>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* WHAT A LICENSED CONTRACTOR DOES DIFFERENTLY */}
						<section className="bg-[#1F2E2B] rounded-3xl p-10 space-y-5">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Licensed Contractor vs. Unlicensed Handyman: What It Means for Your Bathroom
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								In Washington State, bathroom remodel work above $500 requires a
								licensed general contractor. Hiring an unlicensed handyman for
								tile, plumbing connections, or electrical puts your homeowner&apos;s
								insurance at risk and creates disclosure issues when you sell.
							</p>
							<ul className="space-y-3">
								{[
									"NORBILT holds WA General Contractor License NORBI**741CS",
									"$1,000,000 liability insurance on every job",
									"Bonded — protects you if work is incomplete or defective",
									"We pull permits when required — no shortcuts that hurt resale",
									"1-year workmanship warranty on all bathroom work",
								].map((item, i) => (
									<li key={i} className="flex items-start gap-3 text-white/80 text-sm">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
										{item}
									</li>
								))}
							</ul>
							<div className="pt-2">
								<Link
									href="/blog/licensed-contractor-vs-handyman-washington-state"
									className="text-[#FFB800] font-bold text-sm hover:underline flex items-center gap-2"
								>
									Read: Licensed Contractor vs. Handyman in Washington State <ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</section>

						{/* RELATED INTERNAL LINKS */}
						<section className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Related Guides
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								{[
									{ title: "Bathroom Remodel Cost in Clark County WA", href: "/blog/bathroom-remodel-cost-clark-county-wa" },
									{ title: "Bathtub to Shower Conversion Cost Clark County", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa" },
									{ title: "7 Signs You Need a Bathroom Remodel in Vancouver", href: "/blog/signs-you-need-bathroom-remodel-vancouver-wa" },
									{ title: "Kitchen & Bath Services in Vancouver WA", href: "/locations/vancouver/kitchen-bath" },
								].map((link, i) => (
									<Link
										key={i}
										href={link.href}
										className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"
									>
										<ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" />
										<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.title}</span>
									</Link>
								))}
							</div>
						</section>

						{/* FAQ */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-5">
								{faqs.map((faq, i) => (
									<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
										<h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3>
										<p className="text-gray-600 leading-relaxed">{faq.a}</p>
									</div>
								))}
							</div>
						</section>

					</div>
				</article>

				{/* CTA */}
				<section className="py-20 bg-[#F8F6F3]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Get a Free Estimate for Your Vancouver Bathroom
						</h2>
						<p className="text-gray-600 text-lg">
							Licensed, bonded & insured. Same-week estimates. 1-year warranty on all work.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"
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
