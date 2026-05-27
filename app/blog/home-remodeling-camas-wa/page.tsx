import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling in Camas WA: 2026 Cost Guide & What to Expect | Norbilt",
	description:
		"Planning a home remodel in Camas WA? Real 2026 costs for kitchen, bathroom, flooring, finish carpentry, and whole-home updates. What Camas homeowners actually spend.",
	alternates: {
		canonical: "https://norbilt.com/blog/home-remodeling-camas-wa",
	},
	openGraph: {
		title: "Home Remodeling in Camas WA: 2026 Cost Guide & What to Expect | Norbilt",
		description:
			"Real 2026 costs for home remodeling in Camas WA. Kitchen, bathroom, flooring, finish carpentry, and whole-home project pricing from a licensed Clark County contractor.",
		url: "https://norbilt.com/blog/home-remodeling-camas-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const projectCosts = [
	{
		project: "Kitchen Remodel",
		scope: "Cosmetic refresh to full custom build",
		range: "$1,500 – $80,000+",
		notes: "Most Camas mid-range projects: $18,000–$40,000",
	},
	{
		project: "Bathroom Remodel",
		scope: "Cosmetic refresh to full custom build",
		range: "$800 – $50,000+",
		notes: "Most Camas mid-range projects: $8,000–$25,000",
	},
	{
		project: "Flooring (installed)",
		scope: "LVP, hardwood, or tile — per sq ft",
		range: "$3 – $22/sq ft",
		notes: "LVP $4–$8, hardwood $8–$14, tile $10–$22",
	},
	{
		project: "Finish Carpentry",
		scope: "Base + door casing or crown molding",
		range: "$2 – $10/lin ft",
		notes: "Wainscoting and built-ins priced separately",
	},
	{
		project: "Drywall Repair / Refresh",
		scope: "Small patch to full room refresh",
		range: "$150 – $4,000",
		notes: "Texture matching adds cost on older homes",
	},
	{
		project: "Whole-Room Paint",
		scope: "Walls, ceiling, trim — one room",
		range: "$800 – $1,800",
		notes: "Whole-home interior paint: $3,500–$9,000+",
	},
	{
		project: "Tub-to-Shower Conversion",
		scope: "Remove tub, install walk-in shower",
		range: "$1,500 – $25,000",
		notes: "Mid-range tiled shower: $4,000–$12,000",
	},
];

const popularRemodels = [
	{
		title: "Kitchen Updates",
		desc: "New countertops, cabinet refacing or replacement, backsplash tile, and updated lighting are the most requested items. Camas homeowners frequently upgrade to quartz counters and full-overlay cabinets.",
	},
	{
		title: "Bathroom Tile & Vanity",
		desc: "Dated tile, old vanities, and worn-out fixtures are common targets. A bathroom tile and vanity update in Camas typically runs $3,000–$10,000 and dramatically changes the feel of the space.",
	},
	{
		title: "New Flooring Throughout",
		desc: "LVP throughout a main floor or whole home is one of Norbilt's highest-volume Camas projects. Homeowners often do all hard surfaces in a single visit to reduce disruption and keep transitions consistent.",
	},
	{
		title: "Finish Carpentry Additions",
		desc: "Wainscoting, crown molding, and built-in shelving are popular in Camas dining rooms and entryways. These additions significantly elevate a home's character and resale perception.",
	},
	{
		title: "Tub-to-Shower Conversions",
		desc: "Primary baths with oversized tubs that go unused are being converted to walk-in tile showers throughout Camas. A mid-range conversion with full tile surround runs $4,000–$12,000.",
	},
];

const roiData = [
	{
		project: "Minor Kitchen Remodel",
		roi: "60–80%",
		notes: "New countertops, hardware, paint, and appliances consistently recover well at resale in Clark County",
	},
	{
		project: "Bathroom Update",
		roi: "55–75%",
		notes: "Tile, vanity, and fixture updates are among the most noticed improvements by buyers",
	},
	{
		project: "Flooring (LVP or hardwood)",
		roi: "70–90%",
		notes: "Fresh flooring is one of the highest ROI per dollar spent — especially replacing old carpet",
	},
	{
		project: "Whole-Home Interior Paint",
		roi: "80–100%",
		notes: "Fresh neutral paint is often cited as the single highest ROI improvement per dollar at resale",
	},
	{
		project: "Finish Carpentry (crown, wainscoting)",
		roi: "50–70%",
		notes: "Adds perceived value above cost; particularly strong in Camas where buyers expect quality finishes",
	},
	{
		project: "Tub-to-Shower Conversion",
		roi: "50–65%",
		notes: "Functional upgrade that appeals to the 35–55 buyer demographic common in Camas",
	},
];

const faqs = [
	{
		q: "How much does home remodeling cost in Camas WA?",
		a: "It depends heavily on scope. Small cosmetic updates (paint, hardware, fixture swaps) run $1,500–$5,000. A single-room remodel — kitchen or bathroom — runs $8,000–$35,000 for mid-range work. Multi-room updates run $20,000–$60,000. Whole-home interior updates can run $40,000–$120,000+. Camas homes typically target higher finishes, so budget toward the upper end of any range.",
	},
	{
		q: "Do I need a permit to remodel my home in Camas WA?",
		a: "Cosmetic work — paint, flooring, hardware, fixture swaps — generally does not require a permit. Permits are required when work involves electrical (new circuits, panel changes), plumbing (relocating fixtures, adding lines), or structural changes (wall removal, beam work). Clark County permits typically run $150–$800 depending on scope. Norbilt pulls all required permits as part of every project.",
	},
	{
		q: "What remodels add the most value in Camas WA?",
		a: "Kitchen and bath updates return 55–80% of cost at resale in Clark County's market. Flooring replacement — especially replacing carpet with LVP or hardwood — is one of the highest ROI improvements per dollar spent. Interior paint is the single cheapest way to increase buyer appeal. Finish carpentry (crown molding, wainscoting) adds perceived value above actual cost in Camas's market.",
	},
	{
		q: "How long does a home remodel take in Camas?",
		a: "A single-room cosmetic update takes 1–5 days. A full room remodel (kitchen or bathroom) takes 2–6 weeks depending on material lead times. Multi-room projects run 4–12 weeks. Whole-home updates can run 3–6 months. The biggest schedule driver is usually cabinet or tile lead time — we help you plan around that at the estimate stage.",
	},
	{
		q: "Are you a licensed contractor for home remodeling in Camas WA?",
		a: "Yes. Norbilt is a licensed Washington State General Contractor, fully insured and bonded. We serve Camas and all of Clark County. All work comes with a 1-year workmanship warranty. We pull all required permits, coordinate inspections, and handle the full scope — you don't manage subcontractors.",
	},
	{
		q: "What's the most popular remodel in Camas WA right now?",
		a: "Bathroom updates and kitchen refreshes are our most-requested projects in Camas in 2026. Tub-to-shower conversions in primary baths are particularly in demand — many Camas homeowners have large tubs that go unused and want to convert to a walk-in tile shower. Backsplash and countertop swaps in kitchens (without full cabinet replacement) are the most popular entry-level kitchen update.",
	},
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Article",
			headline: "Home Remodeling in Camas WA: 2026 Cost Guide & What to Expect",
			description:
				"Real 2026 costs for home remodeling in Camas WA. Kitchen, bathroom, flooring, finish carpentry, and whole-home project pricing from a licensed Clark County contractor.",
			url: "https://norbilt.com/blog/home-remodeling-camas-wa",
			datePublished: "2026-05-26",
			dateModified: "2026-05-26",
			author: { "@type": "Organization", name: "Norbilt" },
			publisher: {
				"@type": "Organization",
				name: "Norbilt",
				url: "https://norbilt.com",
			},
			mainEntityOfPage: "https://norbilt.com/blog/home-remodeling-camas-wa",
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

export default function HomeRemodelingCamasPage() {
	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-20 px-6">
				<div className="max-w-3xl mx-auto">
					<div className="flex flex-wrap gap-3 mb-6">
						<span className="px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							2026 Cost Guide
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Camas, WA
						</span>
						<span className="px-3 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest rounded">
							Home Remodeling
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
						Home Remodeling in Camas WA:{" "}
						<span className="text-[#FFB800]">What It Costs in 2026</span>
					</h1>
					<p className="text-[#A7C4B5] text-xl font-medium leading-relaxed mb-8 border-l-4 border-[#FFB800] pl-6">
						Real costs for kitchen, bathroom, flooring, finish carpentry, and whole-home updates in
						Camas WA — from a $1,500 quick refresh to a $120,000+ whole-home interior project.
					</p>
					<div className="flex flex-wrap gap-6 text-sm text-[#A7C4B5] font-medium">
						<span>Updated May 2026</span>
						<span>·</span>
						<span>Camas, WA · Clark County</span>
						<span>·</span>
						<span>By Norbilt</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="bg-[#FFB800]/10 border-y border-[#FFB800]/30 py-6 px-6">
				<div className="max-w-3xl mx-auto">
					<p className="text-sm font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Quick Answer</p>
					<p className="text-[#2C3E3A] font-medium leading-relaxed">
						Home remodeling in Camas WA costs <strong>$1,500–$80,000+</strong> depending on scope in 2026.
						Small updates (paint, hardware, fixtures) run <strong>$1,500–$5,000</strong>. Room-level
						remodels run <strong>$8,000–$35,000</strong>. Whole-home interior updates run{" "}
						<strong>$40,000–$120,000+</strong>. Camas homes typically target higher finishes than the Clark
						County average.
					</p>
				</div>
			</section>

			{/* ARTICLE BODY */}
			<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

				{/* INTRO */}
				<section className="space-y-5 text-gray-700 text-lg leading-relaxed font-medium">
					<p>
						Camas is one of Clark County's most desirable zip codes — and homeowners here tend to invest
						accordingly. The city consistently ranks among the most sought-after markets in the Vancouver
						metro, driven by top-rated schools, access to the Columbia River Gorge, and a tightly-held
						housing inventory that rewards well-maintained, well-finished homes.
					</p>
					<p>
						Whether you're updating to sell, improving to stay, or finishing a new build, the projects that
						matter in Camas are the same ones that move the needle at resale: kitchens, bathrooms, flooring,
						and finish carpentry. This guide covers what remodeling actually costs in Camas in 2026 — real
						numbers, project by project, with the specifics that actually affect what you'll pay here.
					</p>
					<p>
						The short answer: a small update runs <strong>$1,500–$5,000</strong>. A single-room remodel runs
						<strong> $8,000–$35,000</strong>. A whole-home interior update can run{" "}
						<strong>$40,000–$120,000+</strong>. Where you land depends on what you're replacing, the finish
						level you choose, and your home's existing conditions.
					</p>
				</section>

				{/* COST BY PROJECT TYPE TABLE */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Home Remodeling Cost by Project Type — Camas WA 2026
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
									<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs hidden md:table-cell">Camas Notes</th>
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

				{/* WHAT DRIVES COSTS */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Drives Remodeling Costs in Camas
					</h2>
					<div className="space-y-5">
						{[
							{
								title: "Finish Level Expectations",
								body: "Camas is a premium Clark County market. Homeowners here typically choose quartz over laminate, hardwood over LVP, and tile over peel-and-stick. These selections are the right call for the market — but each upgrade moves the budget up. A 'standard' Camas kitchen remodel often looks like a high-end remodel in other markets.",
							},
							{
								title: "Permit Requirements",
								body: "Any project involving electrical, plumbing, or structural work requires a Clark County permit — $150–$800 depending on scope. Camas remodels tend to trigger permits more often because they're doing substantive work (layout changes, full gut remodels) rather than cosmetic updates. Norbilt handles all permit applications and inspections.",
							},
							{
								title: "2026 Tariff Impacts",
								body: "Material costs are up across the board in 2026. Appliances are up 5–8%. Tile and stone are up 10–15%. Lumber (for framing and finish carpentry) is up 12–18% vs. 2024. These increases hit harder in Camas because the baseline material choices are already premium.",
							},
							{
								title: "Home Age — Many 1990s–2000s Builds Due for Updates",
								body: "Camas has a large stock of well-built homes from the 1990s and early 2000s that are now 25–35 years old. These homes were built well but are reaching the point where kitchens, bathrooms, and flooring need substantive updating. Older electrical and plumbing that doesn't meet current code can add cost during gut remodels.",
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
						Most Popular Remodels in Camas — What Norbilt Sees
					</h2>
					<p className="text-gray-600 font-medium">
						Based on projects completed in Camas and the surrounding Camas/Washougal corridor, here are the
						remodels Camas homeowners request most often in 2026.
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

				{/* ROI SECTION */}
				<section className="space-y-6">
					<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Which Remodels Add the Most Value in Camas
					</h2>
					<p className="text-gray-600 font-medium">
						ROI estimates below are based on national remodeling cost-vs-value data adjusted for Clark
						County's market. Camas's premium buyer demographic means perceived quality matters — finish
						level affects resale return as much as scope.
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

				{/* TIPS */}
				<section className="bg-[#F8F6F3] rounded-3xl p-10 space-y-6">
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						How to Get the Most From Your Camas Remodel Budget
					</h2>
					<div className="space-y-4">
						{[
							"Start with kitchens and bathrooms. These two rooms drive buyer perception and resale value more than any other part of the house — and they're where Camas buyers expect the most.",
							"Don't do cosmetic work over problems. If there's water damage behind the tile, a cabinet box that's failing, or subfloor rot under the kitchen, address it during the remodel — not after.",
							"Phase large projects intentionally. A licensed contractor can plan your rough-in for future additions (under-cabinet lighting, island plumbing) without rework. Plan the full project even if you execute it in phases.",
							"Use a licensed contractor for permit-required work. Washington State requires a licensed contractor for work above the $500 threshold. Unlicensed work can void your homeowner's insurance and create disclosure issues at resale.",
							"Budget a 10–15% contingency on older homes. Camas's 1990s–2000s homes are well built, but surprises — older GFCI wiring, galvanized lines, asbestos texture — happen when walls open.",
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
							Norbilt handles home remodeling throughout Camas and Clark County — free estimate, 1-year warranty.
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
							href="/blog/kitchen-remodel-cost-camas-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Kitchen Remodel Cost — Camas WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/kitchen-remodel-cost-clark-county-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Kitchen Remodel Cost — Clark County WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/blog/bathroom-remodel-cost-clark-county-wa"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Bathroom Remodel Cost — Clark County WA <ArrowRight className="w-3 h-3" />
						</Link>
						<Link
							href="/locations/camas"
							className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-200 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors shadow-sm"
						>
							Norbilt in Camas, WA <ArrowRight className="w-3 h-3" />
						</Link>
					</div>
				</section>

			</article>
		</div>
	);
}
