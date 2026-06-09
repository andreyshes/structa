import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Improvement Permits in Clark County WA: What You Need (2026) | NORBILT",
	description:
		"Which home improvement projects require a permit in Clark County WA? A licensed contractor explains what needs a permit, what doesn't, and how to avoid costly mistakes.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-improvement-permits-clark-county-wa",
	},
	openGraph: {
		title: "Home Improvement Permits in Clark County WA: What You Need (2026) | NORBILT",
		description:
			"When do you need a permit for home improvement in Clark County WA? Real answers from a licensed contractor — what's required, what's not, and what happens if you skip it.",
		url: "https://www.norbilt.com/blog/home-improvement-permits-clark-county-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const needsPermit = [
	{
		project: "Moving or adding plumbing",
		detail: "New drain lines, water supply lines, or gas lines. Includes dishwasher drain relocation, sink moves, and toilet relocation.",
	},
	{
		project: "Electrical panel work or new circuits",
		detail: "Subpanel additions, new dedicated circuits, GFCI upgrades in wet areas, or any work requiring panel access.",
	},
	{
		project: "Structural changes",
		detail: "Removing or modifying load-bearing walls, adding a beam, or opening a wall between rooms.",
	},
	{
		project: "Room additions",
		detail: "Any increase in conditioned square footage, including garage conversions and ADU additions.",
	},
	{
		project: "Deck or covered patio construction",
		detail: "Any deck over 30 inches off grade or attached to the house. Covered patios and pergolas attached to the structure.",
	},
	{
		project: "HVAC system changes",
		detail: "New furnace, heat pump, or mini-split installation. Ductwork relocation or significant modifications.",
	},
	{
		project: "Water heater replacement",
		detail: "Required in Clark County for all water heater replacements — both tank and tankless.",
	},
	{
		project: "Full bathroom remodel with plumbing changes",
		detail: "Tub-to-shower conversions that require new drain placement, vanity moves, or relocated supply lines.",
	},
];

const noPermit = [
	{ project: "Cosmetic painting (interior or exterior)", detail: "No permit required for paint." },
	{ project: "Flooring replacement", detail: "LVP, hardwood, tile, and carpet — no permit for like-for-like replacements." },
	{ project: "Cabinet and countertop replacement", detail: "Same footprint, same plumbing connections — no permit needed." },
	{ project: "Fixture swaps (faucets, toilets, light fixtures)", detail: "Replacing at existing locations with no electrical or plumbing relocation." },
	{ project: "Drywall repair and patching", detail: "Holes, cracks, and water damage repair — no permit for repair work." },
	{ project: "Trim, crown molding, and finish carpentry", detail: "All finish carpentry installed at existing locations." },
	{ project: "Backsplash tile installation", detail: "Cosmetic tile at existing surfaces." },
	{ project: "Window replacement (same size)", detail: "Same opening, same size — no permit in most Clark County jurisdictions." },
	{ project: "Door replacement (same size)", detail: "Interior and exterior doors in existing openings." },
];

const permitOffices = [
	{
		jurisdiction: "Unincorporated Clark County",
		office: "Clark County Community Development",
		phone: "564-397-2375",
		note: "Covers most rural addresses, Hazel Dell, Orchards, Five Corners, Felida, Salmon Creek, Brush Prairie, and unincorporated areas.",
	},
	{
		jurisdiction: "Vancouver city limits",
		office: "City of Vancouver Permit Center",
		phone: "360-487-7820",
		note: "Covers addresses within Vancouver city limits. Check your address at clark.wa.gov to confirm jurisdiction.",
	},
	{
		jurisdiction: "Camas city limits",
		office: "City of Camas Community Development",
		phone: "360-817-8100",
		note: "Camas has a reputation for thorough review — plan for 2–4 weeks on permit applications.",
	},
	{
		jurisdiction: "Battle Ground city limits",
		office: "City of Battle Ground Building Department",
		phone: "360-342-5076",
		note: "Covers addresses within Battle Ground city limits.",
	},
	{
		jurisdiction: "Washougal city limits",
		office: "City of Washougal Community Development",
		phone: "360-835-8501",
		note: "Covers Washougal city addresses.",
	},
	{
		jurisdiction: "Ridgefield city limits",
		office: "City of Ridgefield Community Development",
		phone: "360-887-3557",
		note: "Covers Ridgefield city addresses. Rural Ridgefield properties may fall under county jurisdiction.",
	},
];

const faqs = [
	{
		q: "What happens if I do work without a permit in Clark County?",
		a: "Unpermitted work can void your homeowner's insurance for claims related to that area. When you sell, the buyer's inspector or appraiser may flag unpermitted work, forcing you to either retroactively permit it, disclose it, or remove it. In some cases, Clark County can require you to open walls to verify code compliance. The permit cost is almost always less than the problem it prevents.",
	},
	{
		q: "How long does a Clark County building permit take?",
		a: "Simple residential permits (water heater, minor plumbing) typically take 1–5 business days over the counter or online. Full remodel permits with plan review take 2–6 weeks depending on scope and jurisdiction. We factor permit timing into your project schedule and apply as early as possible.",
	},
	{
		q: "Can I pull my own permit in Clark County?",
		a: "Yes — homeowners can pull their own permits for work on their primary residence. However, the homeowner then assumes responsibility for ensuring the work meets code and passes inspection. For most projects, having your licensed contractor pull the permit is simpler and keeps liability in the right place.",
	},
	{
		q: "Does NORBILT pull permits on my behalf?",
		a: "Yes. For any project that requires a permit, NORBILT handles the application as part of the job. We know which jurisdiction applies to your address, what documents are required, and how to schedule inspections. Permit fees are passed through at cost — we don't mark them up.",
	},
	{
		q: "Is a permit required for a bathroom remodel in Clark County?",
		a: "It depends on the scope. Cosmetic refreshes — new fixtures, tile, vanity in the same location, recaulk — do not require a permit. If you're moving plumbing (relocated sink, new drain for tub-to-shower conversion, toilet relocation), a permit is required. NORBILT will tell you during the estimate whether your specific scope needs a permit.",
	},
	{
		q: "Do I need a permit to replace a water heater in Clark County?",
		a: "Yes. Clark County requires a permit for all water heater replacements, including tank-to-tankless upgrades. The permit and inspection verify proper venting, pressure relief valve installation, and seismic strapping.",
	},
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "BlogPosting",
			headline: "Home Improvement Permits in Clark County WA: What You Need (2026)",
			description: "Which projects require a permit in Clark County WA, which don't, and what happens if you skip one — from a licensed general contractor.",
			url: "https://www.norbilt.com/blog/home-improvement-permits-clark-county-wa",
			datePublished: "2026-06-09",
			dateModified: "2026-06-09",
			author: { "@id": "https://www.norbilt.com/#founder" },
			publisher: { "@id": "https://www.norbilt.com/#organization" },
		},
		{
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
				{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
				{ "@type": "ListItem", position: 3, name: "Home Improvement Permits in Clark County WA", item: "https://www.norbilt.com/blog/home-improvement-permits-clark-county-wa" },
			],
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

export default function PermitsClarkCountyPage() {
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
							Permits Guide · Clark County, WA · 2026
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
						Home Improvement Permits<br />
						<span className="text-[#FFB800]">in Clark County WA</span>
					</h1>
					<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
						<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
						<p className="text-gray-700 leading-relaxed text-sm">
							Cosmetic work — paint, flooring, fixture swaps, tile, countertops, and trim — does <strong>not</strong> require a permit in Clark County. Permits are required for plumbing relocation, new electrical circuits, structural changes, additions, deck construction, HVAC installation, and water heater replacement. The permit authority depends on your address: unincorporated county addresses use Clark County Community Development (564-397-2375), while addresses inside city limits use that city's permit office. NORBILT pulls all required permits as part of the project.
						</p>
					</div>
					<p className="text-white/70 text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
						What requires a permit, what doesn't, who to call in each Clark County city, and what
						happens if you skip one — answered by a licensed general contractor.
					</p>
				</div>
			</section>

			<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
				<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
					<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
					<span>· WA Licensed General Contractor · NORBILT</span>
				</div>
			</div>

			{/* ARTICLE BODY */}
			<article className="max-w-4xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-4 text-gray-700 text-lg leading-relaxed">
					<p>
						The permit question comes up on nearly every remodel project. The short answer: most cosmetic work doesn't need one, but anything that touches plumbing, electrical, structure, or HVAC almost always does. Getting this wrong has real consequences — unpermitted work can surface during a home sale, void insurance claims, and require costly remediation.
					</p>
					<p>
						This guide covers what Clark County requires in 2026, which office handles your address, and how to avoid the most common permit mistakes homeowners make.
					</p>
				</section>

				{/* NEEDS PERMIT */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Projects That Require a Permit in Clark County
					</h2>
					<p className="text-gray-600 font-medium">
						If your project involves any of the following, a permit is required regardless of scope or cost.
					</p>
					<div className="space-y-3">
						{needsPermit.map((item, i) => (
							<div key={i} className="flex gap-4 items-start bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
								<XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
								<div>
									<p className="font-black text-[#1F2E2B] uppercase tracking-tight text-sm">{item.project}</p>
									<p className="text-gray-500 text-sm leading-relaxed mt-1">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* NO PERMIT */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Projects That Do Not Require a Permit
					</h2>
					<p className="text-gray-600 font-medium">
						Cosmetic and maintenance work at existing locations generally does not require a permit in Clark County.
					</p>
					<div className="space-y-3">
						{noPermit.map((item, i) => (
							<div key={i} className="flex gap-4 items-start bg-[#F8F6F3] rounded-2xl p-5">
								<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
								<div>
									<p className="font-black text-[#1F2E2B] uppercase tracking-tight text-sm">{item.project}</p>
									<p className="text-gray-500 text-sm leading-relaxed mt-1">{item.detail}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* PERMIT OFFICES */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Where to Get a Permit in Clark County
					</h2>
					<p className="text-gray-600 font-medium">
						Clark County uses a split permit system — your address determines which office handles your permit. NORBILT confirms jurisdiction during the estimate.
					</p>
					<div className="grid md:grid-cols-2 gap-5">
						{permitOffices.map((office, i) => (
							<div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
								<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">{office.jurisdiction}</p>
								<p className="font-black text-[#1F2E2B] text-lg uppercase tracking-tight mb-1">{office.office}</p>
								<p className="text-[#FFB800] font-black text-sm mb-3">{office.phone}</p>
								<p className="text-gray-500 text-sm leading-relaxed">{office.note}</p>
							</div>
						))}
					</div>
				</section>

				{/* COST */}
				<section className="space-y-5">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How Much Do Permits Cost in Clark County WA?
					</h2>
					<p className="text-gray-600 leading-relaxed font-medium">
						Permit fees in Clark County are calculated based on project valuation — the estimated cost of the work. As a rough guide:
					</p>
					<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
						<table className="w-full text-sm">
							<thead className="bg-[#1F2E2B] text-white">
								<tr>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Project Type</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Typical Permit Cost</th>
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Notes</th>
								</tr>
							</thead>
							<tbody>
								{[
									{ type: "Water heater replacement", cost: "$75–$150", note: "Over the counter, same day in most cases" },
									{ type: "Minor plumbing (single fixture relocation)", cost: "$150–$300", note: "Simple plan review, 1–3 days" },
									{ type: "Bathroom remodel with plumbing relocation", cost: "$250–$600", note: "Plan review required, 1–3 weeks" },
									{ type: "Kitchen remodel with plumbing or electrical", cost: "$300–$800", note: "Plan review, 2–4 weeks" },
									{ type: "Deck or covered patio", cost: "$200–$600", note: "Structural plan review typically required" },
									{ type: "Room addition or ADU", cost: "$800–$3,000+", note: "Full plan review, 4–8 weeks" },
								].map((row, i) => (
									<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
										<td className="px-6 py-4 font-medium text-[#1F2E2B]">{row.type}</td>
										<td className="px-6 py-4 font-black text-[#2D5A3D]">{row.cost}</td>
										<td className="px-6 py-4 text-gray-500 text-xs">{row.note}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="text-sm text-gray-400 italic">
						Fees are set by each jurisdiction and subject to change. NORBILT confirms current fee schedules during the estimate.
					</p>
				</section>

				{/* CONSEQUENCES */}
				<section className="space-y-5">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Happens If You Skip a Required Permit?
					</h2>
					<div className="grid md:grid-cols-2 gap-5">
						{[
							{
								title: "Insurance claims can be denied",
								body: "If a fire, flood, or structural failure occurs in an area with unpermitted work, your homeowner's insurance carrier may deny the claim on the grounds that the work wasn't permitted or inspected.",
							},
							{
								title: "Home sale complications",
								body: "Buyers' inspectors routinely flag unpermitted work. Lenders may require the work to be retroactively permitted, removed, or disclosed before closing. This can kill deals or force price concessions.",
							},
							{
								title: "Retroactive permit costs",
								body: "Pulling a permit after the fact often requires opening walls to expose the work for inspection. The permit fee stays the same, but the cost of the inspection access adds significantly to the total.",
							},
							{
								title: "Stop-work orders",
								body: "If Clark County discovers permitted-required work in progress without a permit, they can issue a stop-work order, fine the owner, and require full compliance before work resumes.",
							},
						].map((item, i) => (
							<div key={i} className="bg-white border-l-4 border-red-400 p-6 rounded-r-2xl shadow-sm">
								<p className="font-black text-[#1F2E2B] uppercase tracking-tight mb-2">⚠ {item.title}</p>
								<p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
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
										<span className="text-[#FFB800] font-black text-xl shrink-0">0{i + 1}</span>
										<h3 className="text-lg font-black text-[#1F2E2B] tracking-tight">{item.q}</h3>
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

				{/* HIRE CTA */}
				<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-2">
							NORBILT · Licensed General Contractor · Clark County WA
						</p>
						<p className="font-black text-xl uppercase tracking-tight">
							We handle permits so you don't have to.
						</p>
						<p className="text-[#A7C4B5] font-medium mt-2 max-w-sm">
							Every NORBILT project that requires a permit gets one. We apply, schedule inspections, and close out the permit — included in the project price.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-3 shrink-0">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
						>
							Get Free Estimate <ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							href="tel:+13602169920"
							className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm"
						>
							<Phone className="w-4 h-4" /> (360) 216-9920
						</Link>
					</div>
				</div>

				{/* SERVICE AREAS */}
				<section>
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-4">
						Permit-Ready Contractor in Your City
					</p>
					<div className="flex flex-wrap gap-3">
						{[
							{ name: "Vancouver", slug: "vancouver" },
							{ name: "Camas", slug: "camas" },
							{ name: "Ridgefield", slug: "ridgefield" },
							{ name: "Battle Ground", slug: "battle-ground" },
							{ name: "Washougal", slug: "washougal" },
							{ name: "Salmon Creek", slug: "salmon-creek" },
						].map((c) => (
							<Link
								key={c.slug}
								href={`/locations/${c.slug}`}
								className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors shadow-sm"
							>
								<MapPin className="w-3 h-3" />
								{c.name}, WA
							</Link>
						))}
					</div>
				</section>

				{/* SOURCES */}
				<div className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100">
					<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Official Resources</p>
					<ul className="space-y-2 text-sm text-gray-600">
						<li>
							<a href="https://www.clark.wa.gov/community-development/permits" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">
								Clark County Community Development — Building Permits
							</a>
							{" — permit requirements, fee schedules, and applications for unincorporated Clark County."}
						</li>
						<li>
							<a href="https://www.cityofvancouver.us/permits" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">
								City of Vancouver Permit Center
							</a>
							{" — permits for addresses within Vancouver city limits."}
						</li>
						<li>
							<a href="https://secure.lni.wa.gov/verify/" target="_blank" rel="noopener noreferrer" className="text-[#2D5A3D] font-bold hover:underline">
								WA L&I — Contractor License Verification
							</a>
							{" — verify any contractor's license, bond, and insurance before hiring."}
						</li>
					</ul>
				</div>

			</article>
		</div>
	);
}
