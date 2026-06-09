import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "Home Remodeling in Clark County WA: Complete 2026 Cost Guide | NORBILT",
	description:
		"Complete 2026 cost guide for home remodeling in Clark County WA. Real price ranges for kitchen remodels, bathroom remodels, flooring, carpentry, and drywall across Vancouver, Camas, Battle Ground, and Ridgefield.",
	alternates: { canonical: "https://www.norbilt.com/blog/home-remodeling-clark-county-wa" },
	openGraph: {
		title: "Home Remodeling in Clark County WA: Complete 2026 Cost Guide",
		description:
			"Real 2026 cost ranges for every home remodeling project in Clark County WA — kitchen, bathroom, flooring, carpentry, drywall, and more.",
		url: "https://www.norbilt.com/blog/home-remodeling-clark-county-wa",
		siteName: "NORBILT",
		locale: "en_US",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: "Home Remodeling in Clark County WA: Complete 2026 Cost Guide",
	description: "Complete 2026 cost guide for home remodeling in Clark County WA covering kitchen, bathroom, flooring, carpentry, and drywall projects.",
	datePublished: "2026-06-08",
	dateModified: "2026-06-08",
	author: { "@id": "https://www.norbilt.com/#founder" },
	publisher: { "@id": "https://www.norbilt.com/#organization" },
	mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.norbilt.com/blog/home-remodeling-clark-county-wa" },
};

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
		{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
		{ "@type": "ListItem", position: 3, name: "Home Remodeling in Clark County WA", item: "https://www.norbilt.com/blog/home-remodeling-clark-county-wa" },
	],
};

const services = [
	{ name: "Kitchen Remodel", range: "$1,725–$100,000+", typical: "$17,250–$35,000", href: "/blog/kitchen-remodel-cost-clark-county-wa", note: "Cosmetic refresh to full custom build" },
	{ name: "Bathroom Remodel", range: "$920–$35,000+", typical: "$3,450–$9,200", href: "/blog/bathroom-remodel-cost-clark-county-wa", note: "Cosmetic refresh to full gut remodel" },
	{ name: "Flooring Installation", range: "$2.30–$23.00/sq ft", typical: "$3.45–$8.05/sq ft", href: "/blog/flooring-installation-cost-clark-county-wa", note: "LVP, hardwood, tile, laminate" },
	{ name: "Finish Carpentry", range: "$460–$11,500+", typical: "$1,380–$4,600", href: "/blog/finish-carpentry-cost-vancouver-wa", note: "Baseboards, crown, built-ins" },
	{ name: "Drywall Repair", range: "$115–$2,300+", typical: "$175–$575", href: "/blog/drywall-repair-cost-clark-county-wa", note: "Patches to full water damage repair" },
	{ name: "Tub-to-Shower Conversion", range: "$1,500–$25,000", typical: "$4,000–$10,000", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa", note: "Prefab insert to custom walk-in" },
	{ name: "Handyman Services", range: "$175–$1,800+/visit", typical: "$230–$575", href: "/blog/handyman-cost-vancouver-wa", note: "Small repairs, fixtures, punch lists" },
];

const cityGuides = [
	{ city: "Vancouver", posts: [
		{ title: "Kitchen Remodel Cost", href: "/blog/kitchen-remodel-cost-vancouver-wa" },
		{ title: "Bathroom Remodel Cost", href: "/blog/bathroom-remodel-cost-vancouver-wa" },
		{ title: "Flooring Installation Cost", href: "/blog/flooring-installation-cost-vancouver-wa" },
		{ title: "Finish Carpentry Cost", href: "/blog/finish-carpentry-cost-vancouver-wa" },
		{ title: "Handyman Cost", href: "/blog/handyman-cost-vancouver-wa" },
		{ title: "Drywall Repair Cost", href: "/blog/drywall-repair-cost-vancouver-wa" },
	]},
	{ city: "Camas", posts: [
		{ title: "Kitchen Remodel Cost", href: "/blog/kitchen-remodel-cost-camas-wa" },
		{ title: "Bathroom Remodel Cost", href: "/blog/bathroom-remodel-cost-camas-wa" },
		{ title: "Flooring Installation Cost", href: "/blog/flooring-installation-cost-camas-wa" },
		{ title: "Handyman Services", href: "/blog/handyman-services-camas-wa" },
		{ title: "Home Remodeling Guide", href: "/blog/home-remodeling-camas-wa" },
	]},
	{ city: "Battle Ground", posts: [
		{ title: "Kitchen Remodel Cost", href: "/blog/kitchen-remodel-cost-battle-ground-wa" },
		{ title: "Bathroom Remodel Cost", href: "/blog/bathroom-remodel-cost-battle-ground-wa" },
		{ title: "Handyman Cost", href: "/blog/battle-ground-handyman-cost" },
	]},
	{ city: "Ridgefield", posts: [
		{ title: "Kitchen Remodel Cost", href: "/blog/kitchen-remodel-cost-ridgefield-wa" },
		{ title: "Bathroom Remodel Cost", href: "/blog/bathroom-remodel-cost-ridgefield-wa" },
	]},
];

export default function HomeRemodelingClarkCounty() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 bg-[#14201D] overflow-hidden">
					<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />
					<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap gap-3 items-center">
							<span className="px-3 py-1 bg-[#FFB800] text-black text-[10px] font-black uppercase tracking-widest rounded">
								Pillar Guide
							</span>
							<span className="text-white/50 text-sm">Clark County, WA · Updated June 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter uppercase">
							Home Remodeling in Clark County WA
							<span className="text-[#FFB800]"> — 2026 Complete Guide</span>
						</h1>
						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Real 2026 cost ranges for every remodeling project in Clark County — kitchen, bathroom, flooring, carpentry, drywall, and more — from a licensed contractor working here every week.
						</p>
						<div className="flex flex-wrap gap-4 pt-2">
							<div className="bg-white/10 rounded-xl px-5 py-3 text-center">
								<div className="text-2xl font-black text-[#FFB800]">$920</div>
								<div className="text-white/60 text-xs mt-1">Bathroom refresh starts</div>
							</div>
							<div className="bg-white/10 rounded-xl px-5 py-3 text-center">
								<div className="text-2xl font-black text-[#FFB800]">$17,250</div>
								<div className="text-white/60 text-xs mt-1">Mid-range kitchen remodel</div>
							</div>
							<div className="bg-white/10 rounded-xl px-5 py-3 text-center">
								<div className="text-2xl font-black text-[#FFB800]">$3.45/sq ft</div>
								<div className="text-white/60 text-xs mt-1">LVP flooring installed</div>
							</div>
						</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>

				{/* QUICK ANSWER */}
				<section className="py-12 bg-white">
					<div className="max-w-3xl mx-auto px-6 lg:px-8">
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								Home remodeling in Clark County WA spans a wide range: kitchen remodels run $1,725–$100,000+, bathroom remodels $920–$35,000+, flooring installation $2.30–$23.00 per square foot, finish carpentry $460–$11,500+, and drywall repair $115–$2,300+. Mid-range projects — the most common scope in Vancouver, Camas, Battle Ground, and Ridgefield — typically run $3,450–$35,000 depending on the service. Camas homeowners generally spend more on materials than other Clark County cities due to market expectations. Older Vancouver homes (Hazel Dell, Orchards, pre-1980) frequently have hidden water damage or outdated electrical that adds $460–$2,300 to any remodel scope. Ridgefield and newer Battle Ground subdivisions have cleaner infrastructure and more predictable budgets. Washington State requires a licensed contractor for all work over $500. NORBILT (WA Lic. NORBI**741CS) serves all of Clark County with free same-week estimates.
							</p>
						</div>
					</div>
				</section>

				{/* COST BY SERVICE */}
				<section className="py-16 bg-[#F8F6F3]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-3">
							2026 Remodeling Costs — Clark County WA
						</h2>
						<p className="text-gray-600 mb-8">Every range below is installed cost from a licensed Clark County contractor. Click any row for the full breakdown.</p>
						<div className="overflow-x-auto rounded-2xl shadow-sm">
							<table className="w-full text-sm bg-white">
								<thead>
									<tr className="bg-[#1F2E2B] text-white">
										<th className="px-5 py-4 text-left font-black uppercase tracking-wide">Project</th>
										<th className="px-5 py-4 text-left font-black uppercase tracking-wide">Full Range</th>
										<th className="px-5 py-4 text-left font-black uppercase tracking-wide">Most Common</th>
										<th className="px-5 py-4 text-left font-black uppercase tracking-wide">Notes</th>
									</tr>
								</thead>
								<tbody>
									{services.map((s, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
											<td className="px-5 py-3">
												<Link href={s.href} className="font-bold text-[#2D5A3D] hover:underline">
													{s.name}
												</Link>
											</td>
											<td className="px-5 py-3 font-black text-[#1F2E2B]">{s.range}</td>
											<td className="px-5 py-3 text-gray-700">{s.typical}</td>
											<td className="px-5 py-3 text-gray-500 text-xs">{s.note}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* BY SERVICE DEEP DIVES */}
				<section className="py-16 bg-white">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-14">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Each Project Actually Costs
						</h2>

						<div className="space-y-4">
							<h3 className="text-xl font-black text-[#1F2E2B]">Kitchen Remodeling — $1,725–$100,000+</h3>
							<p className="text-gray-700 leading-relaxed">
								Kitchen remodels in Clark County run a wide range because scope varies so dramatically. A cosmetic refresh — new hardware, paint, faucet, and lighting — costs $1,725–$5,000 and takes 1–3 days. A mid-range remodel with new countertops, cabinet fronts, sink, and appliances runs $17,250–$35,000 over 2–4 weeks. A full gut remodel with new layout, plumbing, electrical, and custom cabinets starts at $34,500 and goes up from there.
							</p>
							<p className="text-gray-700 leading-relaxed">
								The biggest cost driver is whether you're changing the layout. Moving a sink or relocating the range adds $2,300–$6,900 in plumbing and electrical work on top of the remodel cost. Keeping the existing layout is always cheaper.
							</p>
							<div className="flex gap-3 flex-wrap">
								{[
									{ t: "Vancouver Kitchen Costs", h: "/blog/kitchen-remodel-cost-vancouver-wa" },
									{ t: "Camas Kitchen Costs", h: "/blog/kitchen-remodel-cost-camas-wa" },
									{ t: "Battle Ground Kitchen Costs", h: "/blog/kitchen-remodel-cost-battle-ground-wa" },
									{ t: "Ridgefield Kitchen Costs", h: "/blog/kitchen-remodel-cost-ridgefield-wa" },
									{ t: "Clark County Kitchen Guide", h: "/blog/kitchen-remodel-cost-clark-county-wa" },
								].map((l, i) => (
									<Link key={i} href={l.h} className="text-xs font-bold text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1.5 rounded-full hover:bg-[#2D5A3D]/20 transition-colors">
										{l.t} →
									</Link>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-black text-[#1F2E2B]">Bathroom Remodeling — $920–$35,000+</h3>
							<p className="text-gray-700 leading-relaxed">
								Bathroom remodels in Clark County range from a $920 cosmetic refresh (new toilet, faucet, mirror, recaulk, paint) to a $35,000+ primary suite gut with custom tile, heated floors, and layout reconfiguration. The most common mid-range scope — new vanity, tile floor, shower surround, and all fixtures — costs $3,450–$7,500 and takes 3–5 days.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Tub-to-shower conversions deserve their own mention: they're the most-requested project we do in Clark County. A prefab insert runs $1,500–$4,000. A full custom tile walk-in runs $7,500–$15,000+. See the <Link href="/blog/bathtub-to-shower-conversion-cost-clark-county-wa" className="text-[#2D5A3D] font-bold hover:underline">full tub-to-shower guide</Link> for a complete breakdown.
							</p>
							<div className="flex gap-3 flex-wrap">
								{[
									{ t: "Vancouver Bathroom Costs", h: "/blog/bathroom-remodel-cost-vancouver-wa" },
									{ t: "Camas Bathroom Costs", h: "/blog/bathroom-remodel-cost-camas-wa" },
									{ t: "Battle Ground Bathroom Costs", h: "/blog/bathroom-remodel-cost-battle-ground-wa" },
									{ t: "Ridgefield Bathroom Costs", h: "/blog/bathroom-remodel-cost-ridgefield-wa" },
									{ t: "Clark County Bathroom Guide", h: "/blog/bathroom-remodel-cost-clark-county-wa" },
								].map((l, i) => (
									<Link key={i} href={l.h} className="text-xs font-bold text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1.5 rounded-full hover:bg-[#2D5A3D]/20 transition-colors">
										{l.t} →
									</Link>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-black text-[#1F2E2B]">Flooring Installation — $2.30–$23.00/sq ft installed</h3>
							<p className="text-gray-700 leading-relaxed">
								LVP (luxury vinyl plank) is the most popular flooring choice in Clark County right now — waterproof, durable, and installs over most existing subfloors at $3.45–$6.90/sq ft installed. Engineered hardwood adds resale value in higher-end neighborhoods (Camas, West Vancouver, Ridgefield) at $8.05–$17.25/sq ft. Porcelain tile is the right call for bathrooms and kitchens at $11.50–$23.00/sq ft.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Subfloor condition is the biggest budget variable. Pre-1990 homes in East Vancouver, Hazel Dell, and Orchards frequently need leveling ($115–$345) or board replacement ($460–$1,380) before any new floor goes down.
							</p>
							<div className="flex gap-3 flex-wrap">
								{[
									{ t: "Vancouver Flooring Costs", h: "/blog/flooring-installation-cost-vancouver-wa" },
									{ t: "Camas Flooring Costs", h: "/blog/flooring-installation-cost-camas-wa" },
									{ t: "Clark County Flooring Guide", h: "/blog/flooring-installation-cost-clark-county-wa" },
								].map((l, i) => (
									<Link key={i} href={l.h} className="text-xs font-bold text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1.5 rounded-full hover:bg-[#2D5A3D]/20 transition-colors">
										{l.t} →
									</Link>
								))}
							</div>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-black text-[#1F2E2B]">Finish Carpentry — $460–$11,500+</h3>
							<p className="text-gray-700 leading-relaxed">
								Finish carpentry covers baseboards ($6.90–$13.80/linear ft), crown molding ($8.05–$17.25/linear ft), door and window casing ($115–$345/opening), wainscoting ($1,150–$3,450/room), and built-in shelving ($2,300–$11,500+). Installing new baseboards throughout a 1,500 sq ft home runs $1,380–$3,450 for materials and labor.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Older Clark County homes — pre-1990 builds in Hazel Dell, Orchards, and Cascade Park — often have damaged or mismatched trim that costs more to match than to replace entirely. When remodeling a kitchen or bathroom, budgeting for new casing and baseboard in the affected rooms is worth it.
							</p>
							<Link href="/blog/finish-carpentry-cost-vancouver-wa" className="inline-flex items-center gap-2 text-xs font-bold text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1.5 rounded-full hover:bg-[#2D5A3D]/20 transition-colors">
								Vancouver Finish Carpentry Cost Guide →
							</Link>
						</div>

						<div className="space-y-4">
							<h3 className="text-xl font-black text-[#1F2E2B]">Drywall Repair — $115–$2,300+</h3>
							<p className="text-gray-700 leading-relaxed">
								Drywall repairs in Clark County run $115–$175 for small patches, $175–$575 for medium sections, and $460–$2,300+ for water damage. The hidden cost most homeowners don't expect is texture matching — mismatched texture stands out more than the original damage. Orange peel, knock-down, skip-trowel, and popcorn all require different techniques.
							</p>
							<div className="flex gap-3 flex-wrap">
								{[
									{ t: "Vancouver Drywall Costs", h: "/blog/drywall-repair-cost-vancouver-wa" },
									{ t: "Clark County Drywall Guide", h: "/blog/drywall-repair-cost-clark-county-wa" },
								].map((l, i) => (
									<Link key={i} href={l.h} className="text-xs font-bold text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1.5 rounded-full hover:bg-[#2D5A3D]/20 transition-colors">
										{l.t} →
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* CITY BREAKDOWN */}
				<section className="py-16 bg-[#F8F6F3]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-3">
							City-by-City Remodeling Guides
						</h2>
						<p className="text-gray-600 mb-8">Costs vary across Clark County. Click your city for specific price ranges, neighborhood notes, and what to watch out for.</p>
						<div className="grid md:grid-cols-2 gap-6">
							{cityGuides.map(({ city, posts }) => (
								<div key={city} className="bg-white rounded-2xl p-6 space-y-4 shadow-sm">
									<h3 className="font-black text-[#1F2E2B] text-lg">{city}, WA</h3>
									<ul className="space-y-2">
										{posts.map((p, i) => (
											<li key={i}>
												<Link href={p.href} className="flex items-center gap-2 text-sm text-[#2D5A3D] font-bold hover:underline">
													<ArrowRight className="w-3 h-3 shrink-0" />
													{p.title} in {city}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WHAT DRIVES COST */}
				<section className="py-16 bg-white">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-8">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Drives Remodeling Costs in Clark County
						</h2>
						<div className="space-y-5">
							{[
								{
									title: "Home Age",
									body: "Homes built before 1990 — common in East Vancouver, Hazel Dell, Orchards, and parts of Camas near downtown — frequently have water damage behind walls, galvanized pipes, 100-amp electrical panels, and subfloor damage. These hidden conditions add $460–$3,450 to almost any remodel scope. Newer construction (post-2000) in Ridgefield, Battle Ground's Daybreak, and Camas subdivisions rarely has these surprises.",
								},
								{
									title: "Material Selection",
									body: "Materials are typically 40–60% of a remodel's total cost. Going from builder-grade tile ($2–5/sq ft) to large-format porcelain ($15–30/sq ft) can add $3,000–$8,000 to a bathroom alone. Quartz countertops cost $3,500–$7,000 more than laminate for the same kitchen. Material choices, not labor rates, drive most of the difference between a $12,000 and a $35,000 project.",
								},
								{
									title: "Layout Changes",
									body: "Keeping the existing layout is always cheaper. Moving a sink, relocating a toilet, or shifting the range requires plumbing rough-in ($1,725–$4,600) and electrical work ($690–$2,300). If the bones are good, working within the existing footprint saves real money.",
								},
								{
									title: "Permit Requirements",
									body: "Clark County and its cities require permits for plumbing relocation, electrical panel work, structural changes, and some mechanical work. Permits run $150–$800 depending on scope and jurisdiction (Vancouver, Camas, and Ridgefield each have their own permit office). Cosmetic work — paint, hardware, fixtures in existing locations, and most flooring — doesn't require a permit. NORBILT (WA Lic. NORBI**741CS) pulls all required permits.",
								},
								{
									title: "Market & Timing",
									body: "Clark County has seen steady remodeling cost increases of 6–12% per year since 2020, driven by material costs and contractor demand. Spring and summer are the busiest seasons — if you can schedule fall or winter work, some contractors offer slightly better availability. Costs here are generally 5–10% below Portland metro rates due to lower overhead costs.",
								},
							].map(({ title, body }, i) => (
								<div key={i} className="flex gap-4 bg-[#F8F6F3] rounded-2xl p-6">
									<CheckCircle className="w-5 h-5 text-[#2D5A3D] mt-1 shrink-0" />
									<div>
										<p className="font-black text-[#1F2E2B] mb-2">{title}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{body}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* HOW TO CHOOSE A CONTRACTOR */}
				<section className="py-16 bg-[#F8F6F3]">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Remodeling Contractor in Clark County
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Washington State requires a licensed contractor for any project priced at $500 or more. Hiring unlicensed voids your homeowner's insurance coverage for that work and creates disclosure issues at resale. Here's what to verify before signing anything:
						</p>
						<div className="space-y-3">
							{[
								"Verify WA contractor license at contractors.lni.wa.gov — takes 30 seconds",
								"Ask for proof of liability insurance ($500,000 minimum; $1M for larger projects)",
								"Confirm they're bonded — protects you if work is left incomplete",
								"Get a written estimate with scope, materials, timeline, and payment schedule",
								"Ask who pulls permits — a licensed contractor handles this, an unlicensed one can't",
								"Check Google and Yelp reviews, not just the contractor's own testimonials",
								"Be wary of quotes dramatically below market rate — materials cost what they cost",
							].map((item, i) => (
								<div key={i} className="flex gap-3 items-start">
									<CheckCircle className="w-4 h-4 text-[#2D5A3D] mt-1 shrink-0" />
									<p className="text-gray-700 text-sm leading-relaxed">{item}</p>
								</div>
							))}
						</div>
						<div className="bg-[#1F2E2B] rounded-2xl p-6 mt-4">
							<p className="text-white/70 text-sm leading-relaxed">
								NORBILT carries <strong className="text-white">WA General Contractor License NORBI**741CS</strong>, $1,000,000 liability insurance, and a surety bond. We pull all required permits and back every project with a 1-year workmanship warranty. <Link href="/contact" className="text-[#FFB800] font-bold hover:underline">Get a free estimate →</Link>
							</p>
						</div>
					</div>
				</section>

				{/* SOURCES */}
			<div className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100">
				<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sources &amp; Official Resources</p>
				<ul className="space-y-2 text-sm text-gray-600">
					<li>
						<a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">WA Dept. of Labor &amp; Industries — Contractor Verification</a>
						{" — verify any contractor's license, bond, and insurance before hiring."}
					</li>
					<li>
						<a href="https://www.clark.wa.gov/community-development/permits" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">Clark County Community Development — Building Permits</a>
						{" — permit requirements and fee schedules for Clark County WA."}
					</li>
					<li>
						<a href="https://www.remodeling.hw.net/cost-vs-value/2024/" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">Remodeling Magazine — Cost vs. Value Report</a>
						{" — national data on remodeling project ROI, used as a benchmark for return-on-investment estimates."}
					</li>
				</ul>
			</div>

			{/* RELATED GUIDES */}
				<section className="py-16 bg-white">
					<div className="max-w-4xl mx-auto px-6 lg:px-8">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
							More Clark County Remodeling Guides
						</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{[
								{ title: "Clark County Home Repair Checklist", href: "/blog/clark-county-home-repair-checklist" },
								{ title: "Home Repairs Before Selling in Clark County", href: "/blog/home-repairs-before-selling-clark-county-wa" },
								{ title: "Licensed Contractor vs. Handyman in WA", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
								{ title: "Signs You Need a Bathroom Remodel", href: "/blog/signs-you-need-bathroom-remodel-vancouver-wa" },
								{ title: "Tub-to-Shower Conversion Cost", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa" },
								{ title: "Handyman Services in Camas WA", href: "/blog/handyman-services-camas-wa" },
							].map((l, i) => (
								<Link key={i} href={l.href} className="flex items-center gap-3 bg-[#F8F6F3] rounded-xl p-4 hover:bg-[#2D5A3D]/10 transition-colors group">
									<ArrowRight className="w-4 h-4 text-[#2D5A3D] shrink-0" />
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{l.title}</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-24 bg-[#14201D] text-center">
					<div className="max-w-3xl mx-auto px-6 space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
							Ready to Start Your Remodel?
						</h2>
						<p className="text-white/70 text-lg">
							NORBILT is a licensed, bonded, and insured general contractor serving all of Clark County. Free same-week estimates on kitchen remodels, bathroom remodels, flooring, and more.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">
								Get Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
							<Link href="/calculator" className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all">
								Use Cost Estimator
							</Link>
						</div>
						<p className="text-white/40 text-sm">WA Lic. NORBI**741CS · $1M Liability Insurance · Bonded · 1-Year Warranty</p>
					</div>
				</section>
			</div>
		</>
	);
}
