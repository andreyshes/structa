import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Clark County WA | 2026 Guide | Norbilt",
	description:
		"How much does a bathroom remodel cost in Clark County WA? Real 2026 price ranges for every scope — from a $800 refresh to a $35,000 full gut — from a licensed Vancouver contractor.",
	alternates: {
		canonical: "https://norbilt.com/blog/bathroom-remodel-cost-clark-county-wa",
	},
	openGraph: {
		title: "Bathroom Remodel Cost in Clark County WA | 2026 Guide | Norbilt",
		description:
			"Complete 2026 cost guide for bathroom remodels in Clark County WA. Real price ranges, cost-by-scope tables, and what drives the price up or down.",
		url: "https://norbilt.com/blog/bathroom-remodel-cost-clark-county-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Cosmetic Refresh",
		desc: "New fixtures, faucet, toilet seat, recaulk, paint. Nothing structural.",
		range: "$800 – $2,500",
		timeline: "1–2 days",
		best: "Cosmetic wear, preparing to sell, tight budget",
	},
	{
		scope: "Mid-Range Update",
		desc: "New vanity, tile backsplash, mirror, lighting, all fixtures replaced.",
		range: "$3,000 – $7,000",
		timeline: "3–5 days",
		best: "Dated finishes, worn vanity, fixtures 15+ years old",
	},
	{
		scope: "Full Remodel",
		desc: "Demo, new tile floor & shower surround, vanity, all fixtures, drywall as needed.",
		range: "$8,000 – $18,000",
		timeline: "1–2 weeks",
		best: "Water damage, gut renovation, layout staying the same",
	},
	{
		scope: "High-End Remodel",
		desc: "Custom tile, freestanding tub, heated floors, full layout reconfiguration.",
		range: "$18,000 – $35,000+",
		timeline: "2–4 weeks",
		best: "Primary suite upgrade, maximum ROI before sale, luxury finish",
	},
];

const costByComponent = [
	{ item: "Toilet replacement", range: "$300 – $800" },
	{ item: "Faucet & showerhead replacement", range: "$200 – $600" },
	{ item: "Vanity (supply + install)", range: "$600 – $2,500" },
	{ item: "Recaulk tub / shower base", range: "$100 – $250" },
	{ item: "Regrout shower or tub surround", range: "$300 – $800" },
	{ item: "Tile floor (per sq ft, installed)", range: "$8 – $18" },
	{ item: "Shower tile surround (installed)", range: "$1,200 – $4,000" },
	{ item: "Subfloor repair", range: "$500 – $1,800" },
	{ item: "Exhaust fan replacement", range: "$150 – $400" },
	{ item: "Mirror & lighting update", range: "$300 – $900" },
	{ item: "Heated floor (tile, per sq ft)", range: "$12 – $25" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,500 – $4,000" },
];

const costDrivers = [
	{
		title: "Tile Selection",
		body: "Basic ceramic tile runs $2–5 per sq ft. Large-format porcelain, natural stone, or custom mosaic patterns can reach $15–30 per sq ft — and take longer to install. The tile budget alone can swing your project by $2,000–8,000.",
	},
	{
		title: "Plumbing Moves",
		body: "Keeping all fixtures in the same location is the single biggest way to control cost. Moving a toilet, shower drain, or sink requires a licensed plumber and adds $1,500–4,000 per fixture moved. Most Clark County remodels keep the plumbing in place.",
	},
	{
		title: "Existing Conditions",
		body: "Clark County homes built in the 1970s–1990s often hide surprises: soft subfloors from old leaks, mold behind original tile surrounds, galvanized pipe, or non-standard framing. We always do a walkthrough before quoting — this is where the surprises live.",
	},
	{
		title: "Labor Rates in Clark County",
		body: "Labor in the Vancouver/Clark County market runs 10–20% lower than Portland metro but is rising. As of 2026, expect licensed contractor labor at $65–95/hour. Full bathroom remodels are typically quoted as a flat project price, not hourly.",
	},
	{
		title: "Permit Requirements",
		body: "Clark County requires permits for structural work, plumbing relocation, and electrical panel changes. Cosmetic remodels (vanity swaps, tile resurfacing, fixture replacements) typically don't require a permit. We pull permits when required — unlicensed work without permits creates problems at resale.",
	},
];

const cityRanges = [
	{ city: "Vancouver, WA", note: "Full range applies. Older stock in Hazel Dell/Orchards often has subfloor surprises.", low: "$800", high: "$35,000+" },
	{ city: "Camas, WA", note: "Higher-end finishes common in Prune Hill and Deer Creek homes push mid-range up.", low: "$1,500", high: "$35,000+" },
	{ city: "Ridgefield, WA", note: "Mix of newer builds (lower surprise risk) and older downtown homes.", low: "$800", high: "$30,000+" },
	{ city: "Battle Ground, WA", note: "Acreage properties and older homes — budget for subfloor inspection.", low: "$800", high: "$28,000+" },
	{ city: "Washougal, WA", note: "River-area older homes often need more prep work before tile.", low: "$800", high: "$28,000+" },
	{ city: "Felida, WA", note: "1980s–90s stock: fixtures and vanities are often due for full replacement.", low: "$1,000", high: "$30,000+" },
];

const faqs = [
	{
		q: "How much does a bathroom remodel cost in Clark County WA?",
		a: "In Clark County WA, a bathroom remodel costs between $800 and $35,000+ depending on scope. A cosmetic refresh (new fixtures, recaulk, paint) runs $800–2,500. A full gut remodel with new tile, vanity, and all fixtures runs $8,000–18,000. High-end remodels with custom tile and layout changes reach $35,000+.",
	},
	{
		q: "What is the most expensive part of a bathroom remodel?",
		a: "Tile work and plumbing are the two biggest cost drivers. Custom or large-format tile can add $2,000–8,000 to a project. Moving plumbing fixtures adds $1,500–4,000 per fixture. Keeping existing plumbing locations and choosing in-stock tile are the two most effective ways to reduce cost.",
	},
	{
		q: "Do I need a permit for a bathroom remodel in Clark County?",
		a: "Cosmetic work — replacing fixtures, vanity, tile, and paint — typically does not require a permit in Clark County. Structural changes, plumbing relocation, and electrical panel work do require permits. As a licensed general contractor, Norbilt pulls permits when required.",
	},
	{
		q: "How long does a bathroom remodel take in Vancouver WA?",
		a: "A cosmetic refresh takes 1–2 days. A mid-range update (new vanity, tile, fixtures) takes 3–5 days. A full gut remodel takes 1–2 weeks. High-end remodels with custom tile and layout changes take 2–4 weeks. Timeline depends heavily on material lead times and whether surprises are found during demo.",
	},
	{
		q: "What adds the most value to a bathroom remodel before selling?",
		a: "In the Clark County real estate market, updated tile, a new vanity, and modern fixtures have the highest visible ROI before a sale. Fixing water damage and replacing failing caulk/grout is non-negotiable — buyers' agents flag these immediately. A mid-range update ($3,000–7,000) typically recovers 60–80% of its cost at sale in this market.",
	},
	{
		q: "Can I do a bathroom remodel in phases?",
		a: "Yes — and it often makes sense. Many Clark County homeowners start with a cosmetic refresh (fixtures, caulk, paint) and do the full tile/vanity replacement in a later phase. Phasing works best when there's no water damage driving urgency. We can quote each phase separately so you have a complete picture.",
	},
];

export default function BathroomRemodeCostClarkCounty() {
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
								headline: "How Much Does a Bathroom Remodel Cost in Clark County WA? (2026 Guide)",
								author: { "@type": "Person", name: "Andrey Norbilt" },
								publisher: {
									"@type": "Organization",
									name: "Norbilt",
									logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
								},
								datePublished: "2026-04-15",
								dateModified: "2026-04-15",
								description:
									"Complete 2026 cost guide for bathroom remodels in Clark County WA — real price ranges by scope, component-level costs, and what drives the price up or down.",
								mainEntityOfPage: "https://norbilt.com/blog/bathroom-remodel-cost-clark-county-wa",
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
							<Link
								href="/blog"
								className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors"
							>
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Bathroom Remodel Cost in{" "}
							<span className="text-[#FFB800]">Clark County WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for every scope — from a quick cosmetic
							refresh to a full gut remodel — from a licensed contractor who
							does this work every week in Vancouver, Camas, Ridgefield, and
							surrounding areas.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Clark County, WA · Vancouver · Camas · Ridgefield · Battle Ground
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* CITATION CAPSULE */}
						<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
							<p className="font-black text-[#1F2E2B] text-lg">
								In Clark County WA, bathroom remodels range from <strong>$800 for a cosmetic refresh</strong> to <strong>$35,000+ for a high-end gut remodel</strong>. The average mid-range update — new vanity, tile, and fixtures — runs <strong>$3,000–$7,000</strong> as of 2026.
							</p>
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								If you've searched for bathroom remodel costs online, you've seen
								the national average: "$10,000 to $15,000." That number is nearly
								useless for Clark County homeowners because it blends tract homes
								in Ohio with luxury condos in San Francisco. This guide is
								different — it's built from jobs we actually complete in
								Vancouver, Camas, Ridgefield, Battle Ground, and surrounding
								Clark County communities.
							</p>
							<p>
								The biggest variable isn't the size of your bathroom. It's the
								scope of work. A 60 sq ft bathroom can be refreshed for under
								$2,500 or gutted and rebuilt for $25,000+. What you spend
								depends on how much you change, what you find during demo, and
								what finishes you choose. Here's how to think about it.
							</p>
						</div>

						{/* COST BY SCOPE TABLE */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Bathroom Remodel Cost by Scope
							</h2>
							<div className="space-y-4">
								{costTiers.map((tier) => (
									<div
										key={tier.scope}
										className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100"
									>
										<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
											<div>
												<p className="font-black text-[#1F2E2B] text-lg">{tier.scope}</p>
												<p className="text-sm text-gray-500 mt-1">{tier.desc}</p>
											</div>
											<div className="text-right shrink-0">
												<p className="text-[#2D5A3D] font-black text-xl">{tier.range}</p>
												<p className="text-xs text-gray-400 mt-1">{tier.timeline}</p>
											</div>
										</div>
										<p className="text-xs font-bold text-[#2D5A3D] uppercase tracking-widest">
											Best for: {tier.best}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* COST BY COMPONENT */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Cost by Component (Clark County, 2026)
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								If you're doing a partial update rather than a full remodel, here's
								what individual components cost in the Clark County market. Prices
								include materials and licensed contractor labor.
							</p>
							<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
								<div className="space-y-3">
									{costByComponent.map((row) => (
										<div
											key={row.item}
											className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-3 border-b border-gray-200 last:border-0"
										>
											<p className="font-medium text-[#1F2E2B]">{row.item}</p>
											<span className="text-[#2D5A3D] font-black whitespace-nowrap">
												{row.range}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* WHAT DRIVES COST */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								What Drives the Price Up (or Down)
							</h2>
							<div className="space-y-6">
								{costDrivers.map((item) => (
									<div key={item.title} className="flex gap-4">
										<CheckCircle2 className="w-6 h-6 text-[#FFB800] shrink-0 mt-1" />
										<div>
											<h3 className="font-black text-[#1F2E2B] mb-1">{item.title}</h3>
											<p className="text-gray-600 leading-relaxed">{item.body}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* COST BY CITY */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Bathroom Remodel Cost by City in Clark County
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								Labor rates are consistent across Clark County. Cost differences by
								city are mostly driven by home age and what turns up during demo.
							</p>
							<div className="space-y-3">
								{cityRanges.map((row) => (
									<div
										key={row.city}
										className="bg-[#F8F6F3] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-3"
									>
										<div className="flex-1">
											<p className="font-black text-[#1F2E2B]">{row.city}</p>
											<p className="text-sm text-gray-500">{row.note}</p>
										</div>
										<div className="text-right shrink-0">
											<p className="text-[#2D5A3D] font-black">
												{row.low} – {row.high}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* MONEY SAVING TIPS */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-6">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								How to Save Money Without Cutting Corners
							</h2>
							<ul className="space-y-4">
								{[
									{ tip: "Keep plumbing in place", detail: "Moving a single fixture adds $1,500–4,000. Design your remodel around existing drain and water supply locations whenever possible." },
									{ tip: "Choose in-stock tile", detail: "Special-order tile has 4–8 week lead times and often costs 2–3x more than in-stock options at local suppliers. Modern in-stock tile looks excellent." },
									{ tip: "Batch repairs with updates", detail: "If you need subfloor repair anyway, do the full tile replacement at the same time — the labor overlap saves significantly." },
									{ tip: "Get contractor pricing on materials", detail: "We source materials at contractor pricing, which is often lower than what you'd pay buying retail and hauling it yourself." },
									{ tip: "Phase the project", detail: "A cosmetic refresh now + a full tile/vanity replacement in 12–18 months is a legitimate strategy. Quote both phases upfront so you know the full picture." },
								].map((item) => (
									<li key={item.tip} className="flex gap-4">
										<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
										<div>
											<p className="font-black text-white text-sm uppercase tracking-widest mb-1">{item.tip}</p>
											<p className="text-[#A7C4B5] text-sm leading-relaxed">{item.detail}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* RED FLAGS */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Red Flags That Will Increase Your Budget
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								These aren't reasons to avoid the project — they're things to budget
								for before demo starts. A contractor who doesn't mention these during
								a walkthrough is one who will surprise you mid-project.
							</p>
							<div className="space-y-4">
								{[
									{
										flag: "Soft or bouncy floor near the tub or toilet",
										impact: "Subfloor damage from a slow leak. Add $500–1,800 for repair before new tile can go down.",
									},
									{
										flag: "Musty smell or visible mold behind old tile",
										impact: "Mold remediation + drywall replacement. Add $800–3,000 depending on spread.",
									},
									{
										flag: "Galvanized supply pipes (pre-1980s homes)",
										impact: "Corroded galvanized pipe reduces water pressure and can fail. Replacement adds $1,500–3,500.",
									},
									{
										flag: "Tile set with organic mastic (vs. thinset)",
										impact: "Older installs used organic mastic which fails with moisture. Full demo required. Add $500–1,200 for removal.",
									},
									{
										flag: "Original 1970s–80s wiring near fixtures",
										impact: "Code requires updated electrical near water sources. Add $400–1,200 for electrical updates.",
									},
								].map((item) => (
									<div key={item.flag} className="border border-amber-200 bg-amber-50 rounded-xl p-5">
										<p className="font-black text-[#1F2E2B] mb-1">{item.flag}</p>
										<p className="text-sm text-gray-600">{item.impact}</p>
									</div>
								))}
							</div>
						</div>

						{/* FAQ */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Frequently Asked Questions
							</h2>
							<div className="space-y-4">
								{faqs.map((faq) => (
									<div key={faq.q} className="bg-[#F8F6F3] rounded-2xl p-6">
										<h3 className="font-black text-[#1F2E2B] mb-3">{faq.q}</h3>
										<p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
									</div>
								))}
							</div>
						</div>

						{/* CALCULATOR LINK */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-200">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Want a number for your specific project?</p>
								<p className="text-gray-600 text-sm">Use our free instant calculator — no email required. Adjust for scope, size, and add-ons to get a custom range.</p>
							</div>
							<Link
								href="/calculator"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:scale-105 transition-all"
							>
								Open Calculator <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* SERVICE LINK */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Ready to get a real Clark County quote?</p>
								<p className="text-gray-600 text-sm">We walk your bathroom, assess every issue, and give you a clear written estimate. No national averages. Free for Vancouver homeowners.</p>
							</div>
							<Link
								href="/locations/vancouver/kitchen-bath"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								View Service <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								Bathroom Remodeling In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Washougal", slug: "washougal" },
									{ name: "Felida", slug: "felida" },
								].map((city) => (
									<Link
										key={city.slug}
										href={`/locations/${city.slug}/kitchen-bath`}
										className="flex items-center gap-1 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
									>
										<MapPin className="w-3 h-3" />
										{city.name}, WA
									</Link>
								))}
							</div>
						</div>
					</div>
				</article>

				{/* CTA */}
				<section className="py-16 bg-[#FFB800]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
							Get a Real Bathroom Remodel Quote
						</h2>
						<p className="text-black/70 text-lg font-medium">
							No national averages. No surprise charges. We walk your home,
							assess your specific situation, and give you a clear written number.
							Free for all Clark County homeowners.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
							<Link
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(360) 216-9920
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
