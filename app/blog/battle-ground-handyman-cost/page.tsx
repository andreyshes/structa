import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services in Battle Ground WA: 2026 Costs & What to Expect | NORBILT",
	description:
		"Looking for a handyman in Battle Ground WA? Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists in Battle Ground and north Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/battle-ground-handyman-cost",
	},
	openGraph: {
		title: "Handyman Services in Battle Ground WA: 2026 Costs & What to Expect | NORBILT",
		description:
			"Real 2026 handyman costs in Battle Ground WA. Hourly rates, job-by-job pricing for common repairs, and what to know before hiring in north Clark County.",
		url: "https://www.norbilt.com/blog/battle-ground-handyman-cost",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
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
	{ task: "Half-Day Punch List (4 hrs)", low: 350, high: 600 },
	{ task: "Full-Day Punch List (8 hrs)", low: 600, high: 950 },
];

const faqs = [
	{
		q: "How much does a handyman cost in Battle Ground WA?",
		a: "A licensed handyman or general contractor in Battle Ground WA charges $65–$95/hour in 2026. Most common small jobs (TV mounting, fixture swap, drywall patch, caulking) run $150–$300 flat rate including labor and basic materials. A half-day punch list runs $350–$600. Full-day punch list runs $600–$950. Unlicensed handymen charge less but cannot pull permits and may not carry proper insurance.",
	},
	{
		q: "Do you serve Battle Ground WA?",
		a: "Yes. NORBILT serves Battle Ground and north Clark County regularly — no travel surcharge, no minimum order above our standard rate. We schedule Battle Ground estimates and jobs at the same rates as Vancouver and the rest of Clark County. Most estimates are scheduled within the same week.",
	},
	{
		q: "What handyman services do you offer in Battle Ground?",
		a: "NORBILT handles the full range of handyman and home repair work in Battle Ground: drywall patching and repair, fixture swaps (ceiling fans, light fixtures, faucets, toilets), door realignment and weatherstripping, TV and shelf mounting, cabinet hardware, caulking, grout repair, safety grab bars, smart lock installation, window screen repair, furniture assembly, and multi-task punch lists. For larger remodels (kitchen, bathroom, flooring), we handle those as well.",
	},
	{
		q: "How quickly can you schedule in Battle Ground WA?",
		a: "We typically schedule estimates for Battle Ground within the same week of contact. For smaller jobs, many are completed within the week of the estimate. Larger projects — multi-room remodels, full kitchens — are scheduled based on material lead times and project complexity. Call (360) 216-9920 or use our online estimator to get started.",
	},
	{
		q: "Do you need a licensed handyman in Washington State?",
		a: "Washington State requires a licensed contractor for repair and remodeling work above $500. Unlicensed handymen working above this threshold are operating illegally — and their work creates real risks for homeowners. If something goes wrong, your homeowner's insurance may deny the claim. Unpermitted or unlicensed work can also surface as a disclosure issue when you sell. A licensed contractor carries liability insurance, a surety bond, and can pull permits.",
	},
	{
		q: "Is your Battle Ground handyman work guaranteed?",
		a: "Yes. All NORBILT handyman and repair work in Battle Ground and Clark County is backed by a 1-year workmanship warranty. If anything we installed or repaired develops a defect within the first year, we fix it at no charge. We're a licensed Washington State General Contractor — fully insured, bonded, and local to Clark County.",
	},
];

const schema = {
	"@context": "https://schema.org",
		"@type": "Article",
		headline: "Handyman Services in Battle Ground WA: 2026 Costs & What to Expect",
		description:
			"Real 2026 pricing for handyman services in Battle Ground WA. Hourly rates, job-by-job cost table, and what to know before hiring in north Clark County.",
		url: "https://www.norbilt.com/blog/battle-ground-handyman-cost",
		datePublished: "2026-05-26",
		dateModified: "2026-05-26",
		author: { "@type": "Organization", name: "NORBILT" },
		publisher: {
			"@type": "Organization",
			name: "NORBILT",
			url: "https://www.norbilt.com",
		},
		mainEntityOfPage: "https://www.norbilt.com/blog/battle-ground-handyman-cost",
};

export default function BattleGroundHandymanPage() {
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
				{ "@type": "ListItem", position: 3, name: "Handyman Services in Battle Ground WA: 2026 Costs & What to Expect", item: "https://www.norbilt.com/blog/battle-ground-handyman-cost" },
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
							Battle Ground, WA
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Handyman
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Handyman Services in Battle Ground WA:{" "}
						<span className="text-[#FFB800]">Costs & What to Expect (2026)</span>
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8 border-l-4 border-[#FFB800] pl-6">
						Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists in Battle Ground
						and north Clark County — from a licensed general contractor.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Battle Ground, WA · North Clark County</span>
						<span>·</span>
						<span>By NORBILT</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#2C3E3A] font-medium leading-relaxed">
						A licensed handyman in Battle Ground WA charges <strong>$65–$95/hour</strong> in 2026. Most
						common jobs run <strong>$150–$500</strong>. A half-day punch list runs{" "}
						<strong>$350–$600</strong>. Battle Ground is in north Clark County — some contractors add a small
						travel surcharge, but NORBILT serves Battle Ground regularly with <strong>no extra fees</strong>.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Battle Ground is one of Clark County's fastest-growing areas — and the home types here are
						diverse. Acreage properties in Daybreak and Cherry Grove have different repair and maintenance
						needs than the newer subdivision builds closer to downtown Battle Ground. Either way, finding a
						licensed handyman who serves north Clark County without a travel premium can be a challenge.
					</p>
					<p>
						This guide covers what handyman services actually cost in Battle Ground in 2026 — hourly rates,
						flat-rate pricing for 20+ common jobs, what's different about north Clark County properties, and
						what you're actually buying when you hire a licensed contractor instead of an unlicensed
						handyman.
					</p>
					<p>
						The short answer: <strong>$65–$95/hour</strong> for licensed work, or flat rates starting at{" "}
						<strong>$150</strong> for most common single jobs. NORBILT serves Battle Ground at the same rates
						as Vancouver — no travel fees, same-week estimates.
					</p>
				</section>

				{/* HOURLY RATES */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Handyman Hourly Rates in Battle Ground WA (2026)
					</h2>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
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
					<p className="text-sm text-gray-500 font-medium">
						Source: 2026 Clark County contractor market rates. Licensed rates in Battle Ground match
						Vancouver rates — NORBILT does not add a north county travel surcharge.
					</p>
				</section>

				{/* JOB COST TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Handyman Cost by Job — Battle Ground WA
					</h2>
					<p className="text-gray-600 font-medium">
						Flat-rate pricing for common handyman tasks in Battle Ground, including labor and basic
						materials. Older homes, high ceilings, crawl-space access, or unusual wall construction may
						push toward the high end.
					</p>
					<div className="overflow-x-auto rounded-2xl border border-[#E8E4DE] shadow-sm">
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
					<p className="text-sm text-gray-500 font-medium">
						All prices reflect licensed contractor rates in Battle Ground / Clark County as of 2026. Fixture
						costs (ceiling fans, toilets, faucets) are included unless noted.
					</p>
				</section>

				{/* BATTLE GROUND SPECIFIC */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Battle Ground Home Types & What That Means for Repair Costs
					</h2>
					<p className="text-gray-600 font-medium">
						Not all handyman work is the same — and Battle Ground's mix of property types means repair scope
						varies more than in denser Clark County markets.
					</p>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Acreage Properties (Daybreak, Cherry Grove)",
								body: "Homes on larger lots often have more deferred maintenance than subdivision homes — larger footprints, detached structures, and sometimes aging fixtures that haven't been updated. Punch lists on acreage properties tend to be longer. Older trim, hardware, and weather sealing are common targets.",
							},
							{
								title: "Newer Subdivision Builds",
								body: "Newer Battle Ground subdivision homes — especially in the Daybreak corridor — often need finish work that wasn't completed by the builder. Items like missing caulk, hardware swaps, door adjustments, and shelving installs are common in homes under 5 years old.",
							},
							{
								title: "Drive Time from Vancouver",
								body: "Battle Ground is 15–20 minutes north of Vancouver via I-5 or SR-503. Some contractors charge a travel surcharge for north Clark County jobs. NORBILT does not — we serve Battle Ground at the same rates as Vancouver and schedule it regularly as part of our weekly service area.",
							},
							{
								title: "Older Homes Near Downtown Battle Ground",
								body: "The original Battle Ground townsite has homes from the 1960s–1980s with older construction — expect non-standard wall materials, older hardware, and plumbing/electrical that may not match modern fixtures. Budget toward the high end of any range for these properties.",
							},
						].map((item, i) => (
							<div key={i} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* LICENSED VS UNLICENSED */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						Licensed vs. Unlicensed Handyman in Battle Ground — What You're Paying For
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						The $30–$40/hr gap between a licensed contractor and an unlicensed handyman in Battle Ground
						isn't just about credentials. Here's what that gap actually covers:
					</p>
					<div className="space-y-5">
						{[
							{
								label: "Liability Insurance",
								detail: "If an unlicensed handyman damages your property or gets injured on-site, your homeowner's insurance may be on the hook. Licensed contractors carry their own liability coverage — your policy stays out of it.",
							},
							{
								label: "Surety Bond",
								detail: "Washington requires licensed contractors to carry a surety bond. If work is abandoned, defective, or causes damage, the bond provides a financial remedy. Unlicensed handymen have no bond — you have no recourse beyond small claims court.",
							},
							{
								label: "Permit Authority",
								detail: "Only licensed contractors can pull permits in Clark County. If your job requires a permit — any electrical work, plumbing modification, or structural change — an unlicensed handyman legally cannot do it. Unpermitted work can void your homeowner's insurance and surface as a problem when you sell.",
							},
							{
								label: "Legal Compliance",
								detail: "Washington State requires a licensed contractor for repair work above $500. An unlicensed handyman working above that threshold is operating illegally. If they don't carry workers' comp and get injured on your property, you could be liable.",
							},
						].map((item, i) => (
							<div key={i} className="flex gap-5 items-start">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
								<div>
									<p className="text-white font-black uppercase tracking-wide text-sm mb-1">{item.label}</p>
									<p className="text-[#A7C4B5] font-medium text-sm leading-relaxed">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* WHAT TO EXPECT */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What to Expect When Booking NORBILT in Battle Ground
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Same-Week Estimates",
								body: "We typically schedule Battle Ground estimates within the same week of contact. For smaller jobs, we often provide an instant ballpark via our online estimator — so you know what to expect before we show up.",
							},
							{
								title: "Flat-Rate Pricing",
								body: "For most common handyman tasks, we quote flat rates — not open-ended hourly. You know the price before we start. If conditions change (hidden damage, unusual construction), we flag it before proceeding.",
							},
							{
								title: "Clean Jobsite",
								body: "We clean up after every job. Drywall dust is vacuumed, packaging is removed, and the work area is left in better condition than we found it. For Battle Ground punch lists, we consolidate all debris in one spot for easy disposal.",
							},
							{
								title: "1-Year Workmanship Warranty",
								body: "Everything NORBILT installs, repairs, or builds in Battle Ground is backed by a 1-year workmanship warranty. If something we did develops a defect within the first year, we fix it at no charge.",
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

				{/* WHAT AFFECTS PRICE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Affects Handyman Pricing in Battle Ground
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Age of Your Home",
								body: "Older homes in Battle Ground (pre-1995) often have non-standard wall construction, galvanized plumbing, or older electrical that complicates simple repairs. Budget 10–20% contingency on older homes for any job that opens walls.",
							},
							{
								title: "Access Difficulty",
								body: "Acreage homes sometimes have vaulted ceilings, steep rooflines, or crawl-space access issues. High ceilings and tight crawl spaces add labor time — and therefore cost — to what seems like a simple task.",
							},
							{
								title: "Material Costs in 2026",
								body: "Lumber is up 12–18% vs. 2024. PVC and plumbing supplies are up 6–10%. Hardware and steel are up 8–12%. These increases affect material-inclusive quotes more than labor-only jobs.",
							},
							{
								title: "Number of Tasks in One Visit",
								body: "Booking a punch list of 5–8 small tasks in a single visit is almost always more cost-effective than 5 separate trips. You pay one mobilization cost and the contractor stays in flow. Punch lists are consistently the most cost-efficient way to knock out a backlog.",
							},
							{
								title: "Permit Requirements",
								body: "Electrical, plumbing, and structural work in Clark County requires permits — $150–$800 depending on scope. Permit work adds processing time (1–3 weeks typical) and inspections, but protects you legally and at resale.",
							},
							{
								title: "Scope Creep on Small Jobs",
								body: "A quick door fix sometimes reveals a damaged frame. A drywall patch may uncover moisture behind the wall. Good contractors flag these before proceeding — but it can change the final total. We flag everything before touching it.",
							},
						].map((item, i) => (
							<div key={i} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
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
							Serving Battle Ground WA
						</p>
						<p className="font-black text-xl uppercase tracking-tight">
							NORBILT handles handyman work throughout Battle Ground and Clark County — same-week estimates, no travel fees, 1-year warranty.
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
							href="/blog/handyman-cost-vancouver-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Handyman Cost — Vancouver WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/licensed-contractor-vs-handyman-washington-state"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Licensed Contractor vs. Handyman in WA State <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/clark-county-home-repair-checklist"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Clark County Home Repair Checklist <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/locations/battle-ground/handyman"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Handyman Services — Battle Ground <ArrowRight className="w-3 h-3" />
						</Link>
					</div>
				</section>

			</article>
		</div>
	);
}
