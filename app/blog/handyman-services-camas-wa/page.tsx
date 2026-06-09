import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services in Camas WA: 2026 Pricing & What to Expect | NORBILT",
	description:
		"Looking for a handyman in Camas WA? Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists. Licensed, 5-star rated, free same-week estimates.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/handyman-services-camas-wa",
	},
	openGraph: {
		title: "Handyman Services in Camas WA: 2026 Pricing & What to Expect | NORBILT",
		description:
			"Real 2026 handyman pricing in Camas WA. Licensed contractor for drywall, fixtures, doors, mounting, punch lists & more. Free same-week estimates.",
		url: "https://www.norbilt.com/blog/handyman-services-camas-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const jobCosts = [
	{ task: "TV Mounting (existing wiring)", low: 150, high: 300 },
	{ task: "Floating Shelf Install", low: 100, high: 250 },
	{ task: "Furniture Assembly", low: 75, high: 200 },
	{ task: "Ceiling Fan Install (existing wiring)", low: 150, high: 300 },
	{ task: "Light Fixture Swap", low: 150, high: 350 },
	{ task: "Smart Lock / Deadbolt Install", low: 150, high: 300 },
	{ task: "Door Realignment / Rehang", low: 150, high: 300 },
	{ task: "Weatherstripping Replacement", low: 100, high: 250 },
	{ task: "Caulking (tub, shower, sink)", low: 150, high: 350 },
	{ task: "Drywall Patch — Small (under 6\")", low: 150, high: 300 },
	{ task: "Drywall Patch — Medium (6–12\")", low: 250, high: 500 },
	{ task: "Toilet Replacement (fixture + install)", low: 350, high: 700 },
	{ task: "Faucet Replacement (fixture + install)", low: 200, high: 450 },
	{ task: "Safety Grab Bar Install", low: 200, high: 400 },
	{ task: "Half-Day Punch List (4 hrs)", low: 350, high: 600 },
	{ task: "Full-Day Punch List (8 hrs)", low: 600, high: 950 },
];

const faqs = [
	{
		q: "How much does a handyman cost in Camas WA?",
		a: "A licensed handyman in Camas WA charges $65–$95 per hour in 2026. Most individual jobs run $150–$500. A half-day punch list covering multiple tasks runs $350–$600. Camas rates are consistent with the rest of Clark County — no travel surcharge from NORBILT.",
	},
	{
		q: "Do you serve Camas WA for handyman work?",
		a: "Yes. NORBILT serves Camas regularly — including Prune Hill, Deer Creek, Grass Valley, and Fern Prairie. We offer same-week estimates and charge the same rates as Vancouver with no extra travel fees.",
	},
	{
		q: "What handyman services do you offer in Camas?",
		a: "We handle drywall patching, fixture and ceiling fan installation, door adjustments, smart lock installs, TV mounting, shelf hanging, furniture assembly, caulking, weatherstripping, toilet and faucet replacement, and full home punch lists. Most jobs are completed in a single visit.",
	},
	{
		q: "Do Camas homes have any common handyman issues?",
		a: "Many Camas homes were built in the 1990s and early 2000s — which means original fixtures, caulking, and hardware are often due for replacement. Prune Hill homes frequently need door adjustments from settling, and older builds near downtown Camas sometimes have weatherstripping and window seal issues from Clark County's wet climate.",
	},
	{
		q: "Do you need a licensed handyman in Camas WA?",
		a: "Washington State requires a licensed contractor for repair work above a set dollar threshold. Hiring an unlicensed handyman above that limit can void your homeowner's insurance and create problems at resale. NORBILT is a fully licensed WA General Contractor — every job is code-compliant and insured.",
	},
	{
		q: "Is your handyman work in Camas guaranteed?",
		a: "Yes. All NORBILT work in Camas is backed by our 1-year workmanship warranty. If anything we repaired fails due to workmanship within a year, we return and fix it at no charge.",
	},
];

export default function CamasHandymanPost() {
	return (
		<div className="bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						"headline": "Handyman Services in Camas WA: 2026 Pricing & What to Expect",
						"datePublished": "2026-05-26",
						"dateModified": "2026-05-26",
						"author": { "@type": "Person", "name": "Andrey" },
						"publisher": { "@type": "Organization", "name": "NORBILT", "url": "https://www.norbilt.com" },
						"mainEntityOfPage": "https://www.norbilt.com/blog/handyman-services-camas-wa",
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
						{ "@type": "ListItem", position: 3, name: "Handyman Services in Camas WA: 2026 Costs", item: "https://www.norbilt.com/blog/handyman-services-camas-wa" },
					],
				}) }}
			/>


			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Local Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Camas, WA
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Handyman Services in Camas WA
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8">
						Real 2026 pricing for home repairs, drywall, fixtures, doors, and punch lists in Camas and east Clark County.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Camas, WA</span>
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
						A licensed handyman in Camas WA charges <strong>$65–$95/hour</strong> in 2026.
						Most individual jobs run <strong>$150–$500</strong>. A half-day punch list (4 hours, multiple tasks) runs <strong>$350–$600</strong>.
						NORBILT serves Camas with no travel surcharge and same-week availability.
					</p>
				</div>
			</section>

			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Camas homeowners expect a higher standard — and finding a handyman who actually shows up, does clean work, and stands behind it can be harder than it sounds. Whether you have a growing punch list, a fixture that's finally given out, or a wall that needs a proper patch, this guide covers what handyman work actually costs in Camas in 2026 and what to look for when hiring.
					</p>
					<p>
						NORBILT is a licensed WA General Contractor serving Camas, Prune Hill, Grass Valley, Deer Creek, and all of east Clark County. We don't charge extra for Camas jobs and offer the same same-week scheduling as our Vancouver clients.
					</p>
				</section>

				{/* JOB COST TABLE */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Handyman Cost by Job — Camas WA (2026)
					</h2>
					<p className="text-gray-600 font-medium mb-6">
						Flat-rate pricing for common handyman tasks in Camas, including labor and standard materials.
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
					<p className="text-sm text-gray-400 mt-3 font-medium">
						2026 Clark County rates. All prices include licensed labor and basic materials.
					</p>
				</section>

				{/* CAMAS-SPECIFIC */}
				<section>
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
						Common Handyman Issues in Camas Homes
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "1990s–2000s Fixture Age",
								body: "A large portion of Camas homes were built between 1990 and 2010. Original light fixtures, faucets, cabinet hardware, and door hardware in these homes are now 15–30 years old and due for replacement. NORBILT handles full hardware refresh days — swap everything in one visit.",
							},
							{
								title: "Prune Hill Settling",
								body: "Prune Hill homes built on slope lots frequently develop sticking doors and gaps in trim and casing as the ground settles over time. Door realignment and trim gap repairs are among our most common Camas jobs.",
							},
							{
								title: "Caulk & Moisture Issues",
								body: "Clark County's wet climate accelerates caulk failure around tubs, showers, sinks, and windows. Older Camas homes often have multiple years of deferred caulking that needs full removal and replacement — not just a top coat.",
							},
							{
								title: "Punch List Backlogs",
								body: "Busy Camas homeowners often accumulate months of small tasks — a cracked outlet cover, a loose towel bar, a TV to mount, a shelf to hang. We clear full punch lists in a single day, which is more cost-effective than booking separate visits for each task.",
							},
						].map((item) => (
							<div key={item.title} className="bg-[#F8F6F3] rounded-2xl p-6 border border-[#E8E4DE]">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-wide text-sm mb-2">{item.title}</h3>
								<p className="text-gray-600 font-medium text-sm leading-relaxed">{item.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* WHY LICENSED */}
				<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-5">
					<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
						Why Hire a Licensed Handyman in Camas WA
					</h2>
					<p className="text-[#A7C4B5] font-medium leading-relaxed">
						Washington State requires a licensed contractor for repair work above a set dollar threshold. Beyond the legal requirement, here's what you actually get with a licensed contractor:
					</p>
					<div className="space-y-4">
						{[
							{ label: "Liability Insurance", detail: "If an unlicensed handyman damages your home or is injured on your property, you may be liable. Licensed contractors carry their own policy." },
							{ label: "Surety Bond", detail: "Washington requires licensed contractors to carry a surety bond. If work is defective or abandoned, the bond provides a financial remedy. Unlicensed handymen have no bond." },
							{ label: "1-Year Workmanship Warranty", detail: "NORBILT backs every job with a 1-year warranty. If anything we repaired fails due to workmanship, we return and fix it at no charge." },
							{ label: "Permit Authority", detail: "Only licensed contractors can pull permits in Clark County. Electrical, plumbing, and structural work requires permits — an unlicensed handyman cannot legally do this work." },
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
							{ title: "Kitchen Remodel Cost in Camas WA (2026)", href: "/blog/kitchen-remodel-cost-camas-wa" },
							{ title: "Licensed Contractor vs. Handyman in Washington State", href: "/blog/licensed-contractor-vs-handyman-washington-state" },
							{ title: "Flooring Installation Cost in Camas WA", href: "/blog/flooring-installation-cost-camas-wa" },
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
						Book a Handyman in Camas WA
					</h2>
					<p className="text-[#A7C4B5] font-medium mb-8 max-w-lg mx-auto">
						NORBILT is a licensed WA General Contractor serving Camas and all of Clark County. 5-star rated, fully insured, 1-year workmanship warranty. Free same-week estimates.
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
