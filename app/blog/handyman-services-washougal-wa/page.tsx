import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services in Washougal WA: 2026 Costs & What to Expect | NORBILT",
	description:
		"Honest 2026 pricing for licensed handyman work in Washougal WA. Hourly rates, flat-rate job costs, what Washougal's housing stock means for your project, and how to hire right.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/handyman-services-washougal-wa",
	},
	openGraph: {
		title: "Handyman Services in Washougal WA: 2026 Costs & What to Expect | NORBILT",
		description:
			"2026 handyman pricing for Washougal WA homeowners — hourly rates, job-by-job cost table, and what to know before hiring a contractor in eastern Clark County.",
		url: "https://www.norbilt.com/blog/handyman-services-washougal-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const jobCosts = [
	{ task: "TV Mounting (existing wiring)", low: 150, high: 300 },
	{ task: "Shelf / Floating Shelf Install", low: 100, high: 250 },
	{ task: "Furniture Assembly (flat-pack)", low: 75, high: 200 },
	{ task: "Ceiling Fan Install (existing wiring)", low: 150, high: 300 },
	{ task: "Light Fixture Swap", low: 150, high: 350 },
	{ task: "Smart Lock / Deadbolt Install", low: 150, high: 300 },
	{ task: "Door Realignment / Rehang", low: 150, high: 300 },
	{ task: "Weatherstripping Replacement", low: 100, high: 250 },
	{ task: "Caulking (tub, shower, sink)", low: 150, high: 350 },
	{ task: "Drywall Patch — Small (under 6\")", low: 150, high: 300 },
	{ task: "Drywall Patch — Medium (6–12\")", low: 250, high: 500 },
	{ task: "Grout Repair / Re-grout", low: 200, high: 450 },
	{ task: "Toilet Replacement (fixture + install)", low: 350, high: 700 },
	{ task: "Faucet Replacement (fixture + install)", low: 200, high: 450 },
	{ task: "Safety Grab Bar Install", low: 200, high: 400 },
	{ task: "Window Screen Repair / Replace", low: 75, high: 200 },
	{ task: "Half-Day Punch List (4 hrs)", low: 350, high: 600 },
	{ task: "Full-Day Punch List (8 hrs)", low: 600, high: 950 },
];

const faqs = [
	{
		q: "How much does a handyman cost in Washougal WA in 2026?",
		a: "A licensed handyman or general contractor in Washougal WA charges $65–$95 per hour in 2026. Most common single-item jobs run $150–$500. Unlicensed handymen on apps charge less ($35–$55/hr) but cannot pull permits, may not carry proper insurance, and Washington State law limits them to jobs under $500.",
	},
	{
		q: "Do handymen in Washougal charge a trip fee?",
		a: "Most licensed contractors serving Washougal charge a minimum of $150–$200 per visit to cover drive time and mobilization — even for a 30-minute job. This is standard for insured professionals working out of the Vancouver/Camas corridor. Batching multiple small tasks into one visit is almost always more cost-effective.",
	},
	{
		q: "What kinds of handyman work are most common in Washougal homes?",
		a: "Washougal has a mix of housing stock from the 1950s–70s along the Columbia riverfront and newer construction in areas like Canyon Creek and Hathaway. Common jobs include door and window repairs on older frames, drywall patching, moisture-related fixes from the river climate, fixture swaps, and pre-sale punch lists. Older homes often need weatherstripping and door alignment work.",
	},
	{
		q: "Do I need a permit for handyman work in Washougal?",
		a: "Cosmetic work — painting, patching, hardware swaps, fixture replacements at existing boxes — generally requires no permit. Electrical changes (new circuits, panel work), plumbing modifications, and structural changes require a City of Washougal or Clark County permit and must be done by a licensed contractor. Permits run $150–$400 for electrical or plumbing.",
	},
	{
		q: "Is NORBILT licensed to do handyman work in Washougal WA?",
		a: "Yes. NORBILT holds WA General Contractor License NORBI**741CS, is bonded, and carries $1M liability insurance. We serve Washougal and all of Clark County. We schedule Washougal estimates the same week and don't charge extra for the drive.",
	},
	{
		q: "How do I get a handyman estimate in Washougal?",
		a: "Call or text (360) 216-9920 or use our online estimate form. Andrey schedules Washougal walkthroughs same-week and provides a written estimate before any work starts. For a quick ballpark, try the instant estimator on our website.",
	},
];

export default function HandymanWashougalPage() {
	return (
		<div className="bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Handyman Services in Washougal WA: 2026 Costs & What to Expect",
						description:
							"Honest 2026 pricing for licensed handyman work in Washougal WA. Hourly rates, flat-rate job costs, what Washougal's housing stock means for your project, and how to hire right.",
						datePublished: "2026-08-05",
						dateModified: "2026-08-05",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: {
							"@type": "Organization",
							name: "NORBILT",
							url: "https://www.norbilt.com",
						},
						mainEntityOfPage: "https://www.norbilt.com/blog/handyman-services-washougal-wa",
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
							{ "@type": "ListItem", position: 3, name: "Handyman Services in Washougal WA", item: "https://www.norbilt.com/blog/handyman-services-washougal-wa" },
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
						mainEntity: faqs.map((f) => ({
							"@type": "Question",
							name: f.q,
							acceptedAnswer: { "@type": "Answer", text: f.a },
						})),
					}),
				}}
			/>

			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Pricing Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Washougal WA
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Handyman Services in Washougal WA: 2026 Costs & What to Expect
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8">
						Real pricing for licensed handyman work in Washougal — hourly rates, common job costs, and what Washougal's mix of older and newer homes means for your project budget.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated August 2026</span>
						<span>·</span>
						<span>Washougal, WA</span>
						<span>·</span>
						<Link href="/about" className="text-[#FFB800] hover:text-white transition-colors font-bold">By Andrey</Link>
						<span>· WA Licensed General Contractor</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#1F2E2B] font-medium">
						A licensed handyman in Washougal WA charges <strong>$65–$95/hour</strong> in 2026.
						Most single-item jobs run <strong>$150–$500</strong>. A half-day punch list runs <strong>$350–$600</strong>.
						Washougal's older riverfront homes often add scope to jobs that look simple from the outside — budget accordingly.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Washougal doesn't have as many licensed contractors actively marketing there as Vancouver or Camas — which means when homeowners need work done, they often end up calling whoever shows up on Google, whoever a neighbor recommends, or whoever will answer the phone. That's a reasonable starting point, but it helps to know what you should actually be paying and what questions to ask.
					</p>
					<p>
						This guide covers 2026 handyman costs in Washougal WA, what's typical for the area's housing stock, and the difference between licensed and unlicensed work that matters more in Washington State than most people realize.
					</p>
				</section>

				{/* HOURLY RATES */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
						Handyman Hourly Rates in Washougal WA (2026)
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
						Rates reflect 2026 Clark County market pricing. Labor costs are up ~5% year-over-year. Washougal does not carry a meaningful travel surcharge from the Vancouver/Camas corridor.
					</p>
				</section>

				{/* JOB COST TABLE */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-3">
						Common Handyman Job Costs — Washougal WA
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Flat-rate pricing for common tasks including labor and standard materials. Washougal homes built before the 1980s may run toward the high end due to non-standard construction, older plumbing fittings, or moisture damage from the river climate.
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
						All prices reflect 2026 licensed contractor rates in Washougal / Clark County WA. Fixture costs included unless noted.
					</p>
				</section>

				{/* WASHOUGAL HOUSING CONTEXT */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Washougal's Housing Stock Means for Your Project
					</h2>
					<p className="text-gray-700 font-medium text-lg leading-relaxed">
						Washougal has two distinct housing eras that affect what handyman work actually costs in practice.
					</p>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Older Riverfront Homes (Pre-1980s)",
								body: "Homes near the Columbia riverfront and downtown Washougal often date from the 1940s–70s. These properties commonly have galvanized plumbing that corrodes at fittings, older electrical panels that don't support modern loads, and wood framing that's seen decades of Pacific Northwest moisture. Jobs that look simple — a faucet swap, a door rehang — sometimes reveal underlying issues. Budget a 10–15% contingency on any project that involves opening walls or cabinets.",
							},
							{
								title: "Newer Construction (Canyon Creek, Hathaway)",
								body: "Areas like Canyon Creek and Hathaway saw significant development from the 1990s through 2010s. These homes are generally well-built but are now entering the age where fixtures, weatherstripping, and finish materials need updating. Jobs here tend to run predictably — the framing and rough mechanicals are sound, and there are fewer surprises behind the walls.",
							},
							{
								title: "River Climate and Moisture",
								body: "Washougal's location along the Columbia Gorge means higher ambient humidity than inland Clark County. Caulking around tubs, sinks, and windows degrades faster than in drier climates. Exterior wood trim, decking, and door frames are particularly susceptible to moisture infiltration. Annual caulking and weatherstripping inspection is worth it here — a $200 caulk job prevents a $2,000 water damage repair.",
							},
							{
								title: "Permits in Washougal",
								body: "Cosmetic work — fixture swaps, patching, hardware, painting — generally requires no permit. Plumbing relocation, electrical panel changes, and structural work require permits through the City of Washougal or Clark County, depending on scope. A licensed contractor handles permit applications as part of the job. Unpermitted work creates disclosure problems when you sell and can affect insurance claims.",
							},
						].map((item) => (
							<div key={item.title} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* WHAT AFFECTS PRICE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Drives Handyman Costs Higher in Washougal
					</h2>
					<div className="space-y-4">
						{[
							{
								label: "Scope Discovered On-Site",
								detail: "A sticking door may need more than realignment — it can indicate a settling foundation or swollen frame from moisture. A tile grout repair can reveal water damage behind the wall. Good contractors flag these upfront. Bad ones either ignore them or charge surprise rates to fix them later.",
							},
							{
								label: "Material Cost Increases in 2026",
								detail: "Lumber is up 12–18% vs. 2024 due to Canadian softwood tariffs. Steel hardware, PVC fittings, and vinyl products are up 6–12%. These increases hit material-inclusive quotes more than labor-only jobs. Ask your contractor whether their quote includes materials or is labor-only.",
							},
							{
								label: "Access and Ceiling Height",
								detail: "Vaulted ceilings, second-story work, or difficult crawl space access all add to labor time. High-ceiling fixture swaps or exterior work above the first floor typically add 20–40% to the base estimate. This is particularly relevant in some of Washougal's older two-story homes.",
							},
							{
								label: "Punch List Efficiency",
								detail: "The most cost-effective way to use a licensed handyman is batching: 6–8 small tasks in a single visit costs less than 3 separate single-task trips. You pay one mobilization fee, and the contractor stays in a productive workflow. For Washougal homeowners with a running list of small repairs, scheduling a half-day punch list visit is almost always the better option.",
							},
						].map((item) => (
							<div key={item.label} className="flex gap-4 bg-white rounded-2xl p-6 border border-[#E8E4DE]">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
								<div>
									<p className="font-black text-[#1F2E2B] text-sm uppercase tracking-wide mb-1">{item.label}</p>
									<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* LICENSED VS UNLICENSED */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						Licensed vs. Unlicensed in Washington State — What the Gap Covers
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						Washington has real contractor licensing requirements, and the $30–$40/hr gap between a licensed and unlicensed handyman reflects specific protections — not just a credential on paper.
					</p>
					<div className="space-y-4">
						{[
							{
								label: "Liability Insurance",
								detail: "If an unlicensed handyman damages your home or gets injured on the job, your homeowner's policy may be on the hook. Licensed contractors carry their own liability coverage — your insurance isn't the backstop.",
							},
							{
								label: "Surety Bond",
								detail: "Washington requires licensed contractors to carry a surety bond. If work is abandoned or defective, the bond provides a financial remedy. Unlicensed work has no bond protection.",
							},
							{
								label: "Legal Scope Limit",
								detail: "Washington State law restricts unlicensed handymen to jobs priced under $500. Above that threshold, a licensed contractor is required by law. Hiring unlicensed for larger work can void your homeowner's insurance and creates disclosure problems at resale.",
							},
							{
								label: "Permit Authority",
								detail: "Only licensed contractors can pull permits. If your Washougal project requires a permit — any electrical, plumbing, or structural work — an unlicensed handyman cannot legally do it, regardless of skill level.",
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

				{/* MID-ARTICLE CTA */}
				<section className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
					<div>
						<p className="font-black text-[#1F2E2B] uppercase tracking-widest text-xs mb-1">Free Estimate</p>
						<p className="font-black text-[#1F2E2B] text-xl">Get a written quote for your Washougal project — same week.</p>
					</div>
					<Link
						href="/estimate"
						className="shrink-0 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg text-sm whitespace-nowrap"
					>
						Get Instant Estimate
					</Link>
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
							{ title: "Handyman Cost in Vancouver WA — 2026 Rates", href: "/blog/handyman-cost-vancouver-wa" },
							{ title: "Handyman Services in Camas WA", href: "/blog/handyman-services-camas-wa" },
							{ title: "Battle Ground Handyman Cost Guide", href: "/blog/battle-ground-handyman-cost" },
							{ title: "Licensed Contractor vs. Handyman in Washington State", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
							{ title: "Home Repairs Before Selling in Clark County WA", href: "/blog/home-repairs-before-selling-clark-county-wa" },
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
						Licensed Handyman in Washougal WA — Free Estimate
					</h2>
					<p className="text-[#A7C4B5] font-medium mb-8 max-w-lg mx-auto">
						NORBILT is a licensed WA general contractor (NORBI**741CS) serving Washougal, Camas, Vancouver, and all of Clark County. Free written estimates. Same-week scheduling. No extra charge for the drive.
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
