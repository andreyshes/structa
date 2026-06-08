import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "How Much Does a Handyman Cost in Vancouver WA? (2026 Rates) | Norbilt",
	description:
		"Real 2026 handyman costs in Vancouver WA & Clark County. Hourly rates, per-job pricing for 20+ common tasks, and what separates a licensed contractor from an unlicensed handyman.",
	alternates: {
		canonical: "https://norbilt.com/blog/handyman-cost-vancouver-wa",
	},
	openGraph: {
		title: "How Much Does a Handyman Cost in Vancouver WA? (2026 Rates) | Norbilt",
		description:
			"Real 2026 handyman pricing in Vancouver WA and Clark County. Hourly rates, job-by-job cost table, and what to watch for when hiring.",
		url: "https://norbilt.com/blog/handyman-cost-vancouver-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const jobCosts = [
	{ task: "TV Mounting (existing wiring)", low: 150, high: 300 },
	{ task: "Shelf / Floating Shelf Install", low: 100, high: 250 },
	{ task: "Furniture Assembly (flat-pack)", low: 75, high: 200 },
	{ task: "Picture / Mirror Hanging", low: 75, high: 150 },
	{ task: "Ceiling Fan Install (existing wiring)", low: 150, high: 300 },
	{ task: "Light Fixture Swap", low: 150, high: 350 },
	{ task: "Smart Lock / Deadbolt Install", low: 150, high: 300 },
	{ task: "Door Realignment / Rehang", low: 150, high: 300 },
	{ task: "Weatherstripping Replacement", low: 100, high: 250 },
	{ task: "Window Screen Repair / Replace", low: 75, high: 200 },
	{ task: "Caulking (tub, shower, sink)", low: 150, high: 350 },
	{ task: "Drywall Patch — Small (under 6\")", low: 150, high: 300 },
	{ task: "Drywall Patch — Medium (6–12\")", low: 250, high: 500 },
	{ task: "Grout Repair / Re-grout", low: 200, high: 450 },
	{ task: "Toilet Replacement (fixture + install)", low: 350, high: 700 },
	{ task: "Faucet Replacement (fixture + install)", low: 200, high: 450 },
	{ task: "Cabinet Hardware Swap (per door)", low: 75, high: 150 },
	{ task: "Safety Grab Bar Install", low: 200, high: 400 },
	{ task: "Smoke / CO Detector Install", low: 75, high: 150 },
	{ task: "Half-Day Punch List (4 hrs)", low: 350, high: 600 },
	{ task: "Full-Day Punch List (8 hrs)", low: 600, high: 950 },
];

const faqs = [
	{
		q: "How much does a handyman cost per hour in Vancouver WA?",
		a: "A licensed handyman or general contractor in Vancouver WA charges $65–$95 per hour in 2026. Unlicensed handymen on apps typically run $35–$55/hr but cannot pull permits, may not carry proper insurance, and their work may not meet Washington State code. Most licensed handymen have a 1-hour minimum charge.",
	},
	{
		q: "What is the minimum charge for a handyman in Clark County?",
		a: "Most licensed handymen and contractors in Clark County have a minimum charge of $150–$200 to cover mobilization, drive time, and setup — even for a job that takes 30 minutes. This is standard practice for insured professionals. Budget handymen may have lower minimums but often lack proper licensing.",
	},
	{
		q: "Is it worth hiring a licensed contractor vs. an unlicensed handyman in Vancouver WA?",
		a: "For jobs above $500 or any work involving permits, Washington State requires a licensed contractor. Beyond legal compliance, licensed contractors carry liability insurance and a surety bond — meaning if something goes wrong, you're protected. Unlicensed work can void your homeowner's insurance and create disclosure problems when you sell.",
	},
	{
		q: "How much does a punch list cost in Vancouver WA?",
		a: "A half-day punch list (around 4 hours of work covering multiple small tasks) typically runs $350–$600 with a licensed contractor in Vancouver WA. A full-day punch list runs $600–$950. This is often the most cost-effective way to knock out several small jobs at once since you only pay one mobilization fee.",
	},
	{
		q: "What handyman jobs require a permit in Clark County?",
		a: "Cosmetic work (painting, patching, hardware swaps, mounting) generally requires no permit. However, any electrical changes (new circuits, panel work), plumbing modifications, or structural work requires a Clark County permit — and that work must be done by a licensed contractor. Permits run $150–$400 for electrical or plumbing and $300–$800 for structural work.",
	},
	{
		q: "How do I get a handyman estimate in Vancouver WA?",
		a: "Norbilt offers free on-site estimates for handyman and home repair projects throughout Clark County. You can call (360) 216-9920, use our online contact form, or try our instant estimator for a ballpark range before booking. We typically schedule estimates within the same week.",
	},
];

export default function HandymanCostPage() {
	return (
		<div className="bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						"headline": "How Much Does a Handyman Cost in Vancouver WA? (2026 Rates)",
						"description": "Real 2026 handyman costs in Vancouver WA & Clark County. Hourly rates, per-job pricing for 20+ common tasks, and what separates a licensed contractor from an unlicensed handyman.",
						"datePublished": "2026-05-17",
						"dateModified": "2026-05-17",
						"author": { "@type": "Organization", "name": "Norbilt" },
						"publisher": {
							"@type": "Organization",
							"name": "Norbilt",
							"url": "https://norbilt.com",
						},
						"mainEntityOfPage": "https://norbilt.com/blog/handyman-cost-vancouver-wa",
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: "https://norbilt.com" },
						{ "@type": "ListItem", position: 2, name: "Blog", item: "https://norbilt.com/blog" },
						{ "@type": "ListItem", position: 3, name: "How Much Does a Handyman Cost in Vancouver WA?", item: "https://norbilt.com/blog/handyman-cost-vancouver-wa" },
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
							Vancouver WA
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						How Much Does a Handyman Cost in Vancouver WA?
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8">
						Real 2026 rates for licensed handyman work in Clark County — hourly pricing, job-by-job cost table, and what to know before you hire.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Clark County, WA</span>
						<span>·</span>
						<span>By Norbilt</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#1F2E2B] font-medium">
						A licensed handyman in Vancouver WA charges <strong>$65–$95/hour</strong> in 2026.
						Most common jobs run <strong>$150–$500</strong>. A half-day punch list (4 hrs, multiple tasks) runs <strong>$350–$600</strong>.
						Unlicensed handymen charge less ($35–$55/hr) but cannot pull permits and may not carry proper insurance.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Hiring a handyman in Vancouver WA feels straightforward — until you start getting wildly different quotes. One person says $45/hour. Another says $85. Someone else wants a flat $300 just to show up.
					</p>
					<p>
						The gap comes down to one thing: licensing. Washington State has real requirements around contractor registration, and what you pay reflects whether the person you're hiring meets them. This guide breaks down exactly what handyman services cost in Vancouver WA in 2026 — hourly rates, job-by-job pricing, and what you're actually buying when you hire a licensed contractor instead of an unlicensed one.
					</p>
				</section>

				{/* HOURLY RATES */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
						Handyman Hourly Rates in Vancouver WA (2026)
					</h2>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Contractor Type</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Hourly Rate</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Licensed in WA?</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Can Pull Permits?</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{[
									{ type: "Licensed General Contractor", rate: "$65–$95/hr", licensed: "Yes", permits: "Yes" },
									{ type: "Registered Specialty Contractor", rate: "$55–$80/hr", licensed: "Yes (limited scope)", permits: "Limited" },
									{ type: "Unlicensed Handyman", rate: "$35–$55/hr", licensed: "No", permits: "No" },
									{ type: "Electrician (subcontracted)", rate: "$85–$120/hr", licensed: "Yes", permits: "Yes" },
									{ type: "Plumber (subcontracted)", rate: "$90–$130/hr", licensed: "Yes", permits: "Yes" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-4 font-semibold text-[#1F2E2B]">{row.type}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D]">{row.rate}</td>
										<td className="px-6 py-4 text-gray-600">{row.licensed}</td>
										<td className="px-6 py-4 text-gray-600">{row.permits}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-500 mt-3 font-medium">
						Source: 2026 Clark County contractor market rates. Labor costs are up ~5% year-over-year as demand in the Vancouver metro remains high.
					</p>
				</section>

				{/* JOB COST TABLE */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-3">
						Handyman Cost by Job — Vancouver WA
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Flat-rate pricing for common handyman tasks in Clark County, including labor and basic materials. Jobs with unusual wall construction, older homes (pre-1995), or difficult access may run higher.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Task</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Low</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">High</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{jobCosts.map((job, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-3 font-semibold text-[#1F2E2B]">{job.task}</td>
										<td className="px-6 py-3 text-[#2D5A3D] font-black">${job.low.toLocaleString()}</td>
										<td className="px-6 py-3 text-[#2D5A3D] font-black">${job.high.toLocaleString()}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-500 mt-3 font-medium">
						All prices reflect licensed contractor rates in Vancouver WA / Clark County as of 2026. Fixture costs (ceiling fans, toilets, faucets) are included unless noted.
					</p>
				</section>

				{/* WHAT AFFECTS PRICE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Affects Handyman Pricing in Clark County
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Age of Your Home",
								body: "Homes built before 1995 often have surprises — galvanized plumbing, knob-and-tube wiring, asbestos texture, or non-standard wall construction. Budget 10–20% contingency on older homes for any repair that involves opening walls or ceilings.",
							},
							{
								title: "Scope Creep on Small Jobs",
								body: "A 'quick' door fix sometimes reveals a damaged frame or hinge plate. A tile patch may uncover water damage behind the wall. Good contractors flag these upfront rather than ignoring them — but it can add to the final cost.",
							},
							{
								title: "Material Costs in 2026",
								body: "Lumber is up 12–18% vs. 2024 due to Canadian softwood tariffs. PVC products (plumbing, window trim) are up 6–10%. Steel and hardware are up 8–12%. These affect material-inclusive quotes more than labor-only jobs.",
							},
							{
								title: "Access Difficulty",
								body: "Jobs requiring ladder work, crawl space access, or work in tight utility closets take longer. High ceilings, vaulted rooms, and second-story exterior work typically add 20–40% to the base labor estimate.",
							},
							{
								title: "Permit Requirements",
								body: "Any electrical, plumbing, or structural work in Clark County may require a permit ($150–$800 depending on scope). Permit work adds processing time (1–3 weeks typical) and a required inspection — but protects you legally and at resale.",
							},
							{
								title: "Number of Tasks",
								body: "Booking multiple small tasks in a single visit is almost always more cost-effective than separate trips. You pay one mobilization and the contractor stays in flow. A punch list of 6–8 small tasks in one day typically costs less than 3 separate single-task visits.",
							},
						].map((item) => (
							<div key={item.title} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* LICENSED VS UNLICENSED */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						Licensed vs. Unlicensed Handyman — What You're Actually Paying For
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						The $30–$40/hr gap between a licensed contractor and an unlicensed handyman isn't just about credentials. Here's what that gap actually covers:
					</p>
					<div className="space-y-4">
						{[
							{
								label: "Liability Insurance",
								detail: "If an unlicensed handyman damages your home or gets injured on your property, you may be liable. Licensed contractors carry their own liability insurance — your homeowner's policy doesn't have to cover it.",
							},
							{
								label: "Surety Bond",
								detail: "Washington requires licensed contractors to carry a surety bond. If work is abandoned or defective, the bond provides a financial remedy. Unlicensed handymen have no bond.",
							},
							{
								label: "Code-Compliant Work",
								detail: "Washington State requires a licensed contractor for repair work above a set dollar threshold. Unlicensed work above that threshold is illegal — and can cause problems with your homeowner's insurance and at resale when a home inspector flags unpermitted work.",
							},
							{
								label: "Permit Authority",
								detail: "Only licensed contractors can pull permits in Clark County. If your job requires a permit (electrical, plumbing, structural), an unlicensed handyman simply cannot legally do the work.",
							},
						].map((item) => (
							<div key={item.label} className="flex gap-4">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
								<div>
									<p className="font-black text-white text-sm uppercase tracking-wide">{item.label}</p>
									<p className="text-[#A7C4B5] text-sm font-medium leading-relaxed mt-1">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* CITY BREAKDOWN */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Handyman Pricing by City — Clark County WA
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Rates are fairly consistent across Clark County, but drive time and local demand create small variations. Rural areas (Yacolt, Amboy) may carry a small travel surcharge.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE]">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">City</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Hourly Range</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Notes</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-[#E8E4DE]">
								{[
									{ city: "Vancouver", range: "$65–$95/hr", note: "Core market, highest contractor density" },
									{ city: "Camas", range: "$65–$95/hr", note: "High demand; newer construction common" },
									{ city: "Washougal", range: "$65–$95/hr", note: "Similar to Camas; some rural properties" },
									{ city: "Ridgefield", range: "$65–$95/hr", note: "Fast-growing; many new builds + older homes" },
									{ city: "Battle Ground", range: "$70–$95/hr", note: "Slightly higher due to drive time" },
									{ city: "Salmon Creek / Hazel Dell", range: "$65–$90/hr", note: "Close to Vancouver core" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}>
										<td className="px-6 py-3 font-semibold text-[#1F2E2B]">{row.city}</td>
										<td className="px-6 py-3 font-black text-[#2D5A3D]">{row.range}</td>
										<td className="px-6 py-3 text-gray-500">{row.note}</td>
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
							{ title: "Licensed Contractor vs. Handyman in Washington State", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
							{ title: "Home Repairs Before Selling in Clark County WA", href: "/blog/home-repairs-before-selling-clark-county-wa" },
							{ title: "Clark County Home Repair Checklist", href: "/blog/clark-county-home-repair-checklist" },
							{ title: "Drywall Repair Cost in Vancouver WA", href: "/blog/drywall-repair-cost-vancouver-wa" },
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
						Get a Free Handyman Estimate in Vancouver WA
					</h2>
					<p className="text-[#A7C4B5] font-medium mb-8 max-w-lg mx-auto">
						Norbilt is a licensed WA General Contractor serving Vancouver, Camas, Ridgefield, Battle Ground, and all of Clark County. Free written estimates. Same-week availability.
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
