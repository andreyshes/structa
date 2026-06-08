import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost in Vancouver WA: 2026 Pricing Guide | Norbilt",
	description:
		"How much does a kitchen remodel cost in Vancouver WA? Real 2026 price ranges — from a $1,725 cosmetic refresh to an $80,000 custom build — from a licensed Vancouver contractor.",
	alternates: {
		canonical: "https://norbilt.com/blog/kitchen-remodel-cost-vancouver-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Cost in Vancouver WA: 2026 Pricing Guide | Norbilt",
		description:
			"Complete 2026 cost guide for kitchen remodels in Vancouver WA. Real price ranges by scope, component costs, neighborhood breakdowns, and what drives the price up.",
		url: "https://norbilt.com/blog/kitchen-remodel-cost-vancouver-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "New cabinet hardware, faucet, lighting, backsplash, and paint. Same cabinets and layout — dramatically updated look.",
		range: "$1,725 – $5,000",
		timeline: "2–4 days",
		best: "Good cabinet bones, tight budget, prepping to sell",
	},
	{
		scope: "Mid-Range Remodel",
		desc: "New countertops, backsplash, sink, faucet, and appliances. Cabinet fronts replaced or refaced. Layout stays the same.",
		range: "$17,250 – $35,000",
		timeline: "1–3 weeks",
		best: "Dated finishes, worn counters, outdated appliances",
	},
	{
		scope: "Full Remodel",
		desc: "All cabinets and counters replaced, new tile, new appliances, updated plumbing and lighting. Layout stays the same.",
		range: "$34,500 – $60,000",
		timeline: "3–6 weeks",
		best: "Major overhaul, maximizing home value, aging kitchen",
	},
	{
		scope: "Custom / Luxury Build",
		desc: "Custom cabinetry, high-end stone counters, premium appliances, layout reconfiguration, island addition.",
		range: "$57,500 – $100,000+",
		timeline: "6–12 weeks",
		best: "High-end primary home, full layout change, luxury finish",
	},
];

const componentCosts = [
	{ item: "Cabinet hardware replacement (full kitchen)", range: "$230 – $600" },
	{ item: "Backsplash installation (tile, installed)", range: "$460 – $1,800" },
	{ item: "Countertop replacement (laminate)", range: "$1,150 – $3,000" },
	{ item: "Countertop replacement (quartz)", range: "$2,875 – $7,500" },
	{ item: "Countertop replacement (natural stone)", range: "$4,025 – $10,000" },
	{ item: "Kitchen sink + faucet (supply & install)", range: "$575 – $1,800" },
	{ item: "Cabinet refacing (per linear ft)", range: "$115 – $230" },
	{ item: "New semi-custom cabinets (per linear ft)", range: "$345 – $920" },
	{ item: "New custom cabinets (per linear ft)", range: "$920 – $2,300" },
	{ item: "Under-cabinet lighting", range: "$230 – $575" },
	{ item: "Kitchen island (supply & install)", range: "$2,300 – $8,000" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,750 – $4,000" },
];

const costDrivers = [
	{
		title: "Cabinets: The Biggest Line Item",
		body: "Cabinets and their installation typically represent 30–40% of a kitchen remodel budget. Stock cabinets from big-box stores run $115–$230 per linear foot installed. Semi-custom cabinets run $345–$920. Full custom cabinetry starts at $920 per linear foot and goes up significantly. The difference in quality and fit is substantial — we'll show you options at your estimate.",
	},
	{
		title: "Countertops Drive the Look",
		body: "Laminate counters run $1,150–$3,000 for a typical Vancouver kitchen. Quartz — the most popular choice in Clark County right now — runs $2,875–$7,500. Natural stone (granite, marble) runs $4,025–$10,000. Waterfall edges, complex cutouts, and thick profiles add cost. Material choice swings the project by $3,000–$8,000.",
	},
	{
		title: "Layout Changes Are Expensive",
		body: "Keeping the sink, dishwasher, and stove in their current locations is the single most effective way to control budget. Moving the sink requires a licensed plumber ($1,750–$4,000). Moving a gas line requires a licensed plumber and gas fitting permit. Most Vancouver homeowners keep the layout and invest the savings in materials.",
	},
	{
		title: "Vancouver's Older Home Stock",
		body: "Kitchens in Hazel Dell, Orchards, and older parts of central Vancouver often have surprises: out-of-level floors, non-standard cabinet dimensions, galvanized pipe, and outdated electrical at the range hood or island. We do a thorough walkthrough before quoting — this is where budget surprises live.",
	},
	{
		title: "Permits in the City of Vancouver",
		body: "The City of Vancouver requires permits for structural changes, plumbing relocation, electrical panel work, and gas line modifications. Cosmetic work — new counters, backsplash, cabinet refacing, hardware, and lighting swaps at existing boxes — typically doesn't require a permit. Norbilt is a licensed WA general contractor (Lic. NORBI**741CS) and pulls permits when required.",
	},
];

const neighborhoodNotes = [
	{
		area: "Hazel Dell / Orchards",
		note: "Heavy 1970s–1990s construction. Original kitchens with laminate counters, builder-grade cabinets, and galvanized pipe under the sink are common. Full remodels here have strong ROI — these kitchens are overdue.",
	},
	{
		area: "Felida / Salmon Creek",
		note: "1980s–90s ranches mixed with newer builds. The older homes have dated oak cabinetry and Formica that can be cost-effectively refaced or replaced. Newer builds often just need counters and appliances.",
	},
	{
		area: "Fisher's Landing / Mill Plain",
		note: "1990s–2000s builds in solid condition. The kitchens are functional but dated — this is prime territory for a mid-range remodel ($17,250–$35,000) that returns strong value before a sale.",
	},
	{
		area: "Central / Downtown Vancouver",
		note: "Older bungalows and craftsman homes with small, galley-style kitchens. Non-standard dimensions make stock cabinets difficult — semi-custom is often the right call. Budget for out-of-level floors and aging electrical.",
	},
	{
		area: "East Vancouver (near Camas)",
		note: "Newer construction (2000s+) with better bones. Fewer hidden surprises. Cosmetic and mid-range remodels dominate here — homeowners are updating aesthetics, not correcting deferred maintenance.",
	},
];

const faqs = [
	{
		q: "How much does a kitchen remodel cost in Vancouver WA?",
		a: "In Vancouver WA, a kitchen remodel costs between $1,725 for a cosmetic refresh and $100,000+ for a full custom build. A mid-range remodel (new counters, backsplash, cabinet refacing, appliances) runs $17,250–$35,000. A full remodel with all-new cabinets runs $34,500–$60,000. Prices reflect 2026 Clark County labor and material rates.",
	},
	{
		q: "What is the cheapest way to update a kitchen in Vancouver WA?",
		a: "The highest-ROI low-cost kitchen updates are: replacing cabinet hardware ($230–$600), installing a new backsplash ($460–$1,800), and swapping the faucet ($230–$575). These three changes together run $900–$3,000 and transform how a kitchen looks without touching the cabinets or counters.",
	},
	{
		q: "Do I need a permit for a kitchen remodel in Vancouver WA?",
		a: "The City of Vancouver requires permits for plumbing relocation, electrical panel changes, structural modifications, and gas line work. Cosmetic remodels — new counters, backsplash, hardware, cabinet refacing — typically don't require a permit. Norbilt holds WA General Contractor License NORBI**741CS and pulls all required permits.",
	},
	{
		q: "How long does a kitchen remodel take in Vancouver WA?",
		a: "A cosmetic refresh takes 2–4 days. A mid-range remodel (counters, backsplash, sink, appliances) takes 1–3 weeks. A full cabinet replacement and remodel takes 3–6 weeks. Custom builds take 6–12 weeks. Timeline depends heavily on cabinet lead times — custom cabinetry typically has a 4–8 week lead time.",
	},
	{
		q: "What adds the most value to a kitchen before selling in Vancouver?",
		a: "In Vancouver's real estate market, new countertops (especially quartz), updated cabinet fronts or hardware, a modern backsplash, and stainless appliances have the highest visible ROI. Buyers notice the counters first. A targeted mid-range update ($17,250–$35,000) typically recovers 70–80% of its cost at sale in this market.",
	},
	{
		q: "Should I reface or replace my kitchen cabinets in Vancouver WA?",
		a: "Refacing makes sense when the cabinet boxes are solid, square, and in good condition — typically cabinets less than 20 years old. It costs $115–$230 per linear foot vs. $345–$920 for new semi-custom. If the boxes are out of level, have water damage, or are more than 25 years old, full replacement usually pencils out better long-term. We assess this during the free estimate.",
	},
];

export default function KitchenRemodelCostVancouverWA() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "Article",
								headline: "Kitchen Remodel Cost in Vancouver WA: 2026 Pricing Guide",
								author: { "@type": "Person", name: "Andrey Norbilt" },
								publisher: {
									"@type": "Organization",
									name: "Norbilt",
									logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
								},
								datePublished: "2026-06-08",
								dateModified: "2026-06-08",
								description:
									"Complete 2026 cost guide for kitchen remodels in Vancouver WA — real price ranges by scope, component-level costs, neighborhood breakdowns, and what drives the price up.",
								mainEntityOfPage: "https://norbilt.com/blog/kitchen-remodel-cost-vancouver-wa",
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
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Kitchen Remodel Cost in{" "}
							<span className="text-[#FFB800]">Vancouver WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for every scope — from a quick cosmetic refresh to a full custom build — from a licensed contractor remodeling kitchens in Vancouver every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Vancouver, WA · Hazel Dell · Orchards · Felida · Salmon Creek · Fisher&apos;s Landing
						</div>
					</div>
				</section>

				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* INTRO */}
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>
								A kitchen remodel in Vancouver WA costs anywhere from{" "}
								<strong>$1,725 for a cosmetic refresh</strong> to{" "}
								<strong>$100,000+ for a fully custom build</strong>. The range is wide because the scope varies enormously — new cabinet hardware and a backsplash is a kitchen remodel, and so is tearing everything out and rebuilding with custom cabinetry and quartz.
							</p>
							<p>
								This guide breaks down real 2026 prices for every scope of kitchen remodeling in Vancouver, including component-level costs, what hidden conditions in older Vancouver homes add to the budget, and neighborhood-by-neighborhood notes from jobs we do every week.
							</p>
							<p>
								Norbilt is a licensed general contractor (WA Lic.{" "}
								<strong>NORBI**741CS</strong>) serving Vancouver and all of Clark County. We carry $1,000,000 liability insurance and back all kitchen work with a 1-year workmanship warranty.
							</p>
						</section>

						{/* COST TIERS TABLE */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Kitchen Remodel Cost by Scope
							</h2>
							<p className="text-gray-600">
								Every kitchen remodel falls into one of four tiers. Here&apos;s what each includes, what it costs in Vancouver WA, and when each scope makes sense.
							</p>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left p-4 font-black uppercase tracking-wider">Scope</th>
											<th className="text-left p-4 font-black uppercase tracking-wider">What&apos;s Included</th>
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
								2026 installed prices for Vancouver WA. Ranges reflect variation in materials, cabinet selection, and site conditions. Older homes may require additional electrical or plumbing work not included above.
							</p>
						</section>

						{/* COMPONENT COSTS */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Kitchen Remodel Cost by Component
							</h2>
							<p className="text-gray-600">
								Useful for scoping a partial update or pricing individual pieces before committing to a full remodel.
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
										{componentCosts.map((row, i) => (
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
								What Drives Kitchen Remodel Costs in Vancouver WA
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

						{/* LICENSED CONTRACTOR BOX */}
						<section className="bg-[#1F2E2B] rounded-3xl p-10 space-y-5">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Why You Need a Licensed Contractor for a Kitchen Remodel
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								In Washington State, kitchen remodel work above $500 requires a licensed general contractor. Plumbing and electrical work requires separate licensing. Hiring an unlicensed crew puts your homeowner&apos;s insurance at risk and creates disclosure problems at resale.
							</p>
							<ul className="space-y-3">
								{[
									"WA General Contractor License NORBI**741CS",
									"$1,000,000 liability insurance on every job",
									"Bonded — protects you if work is incomplete",
									"We pull all required permits — no shortcuts",
									"1-year workmanship warranty on all kitchen work",
								].map((item, i) => (
									<li key={i} className="flex items-start gap-3 text-white/80 text-sm">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</section>

						{/* RELATED LINKS */}
						<section className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Related Guides
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								{[
									{ title: "Kitchen Remodel Cost in Clark County WA", href: "/blog/kitchen-remodel-cost-clark-county-wa" },
									{ title: "Kitchen Remodel Cost in Camas WA", href: "/blog/kitchen-remodel-cost-camas-wa" },
									{ title: "Bathroom Remodel Cost in Vancouver WA", href: "/blog/bathroom-remodel-cost-vancouver-wa" },
									{ title: "Kitchen & Bath Remodeling in Vancouver", href: "/locations/vancouver/kitchen-bath" },
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
							Get a Free Estimate for Your Vancouver Kitchen
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
