import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Drywall Repair Cost Hazel Dell WA | NORBILT",
	description:
		"How much does drywall repair cost in Hazel Dell, WA? Real 2026 prices for hole patching, texture matching & water damage repair. Licensed Clark County contractor.",
	alternates: { canonical: "https://www.norbilt.com/blog/drywall-repair-cost-hazel-dell-wa" },
	openGraph: {
		title: "Drywall Repair Cost Hazel Dell WA | NORBILT",
		description:
			"2026 drywall repair pricing in Hazel Dell WA — small patches to full water damage repair. Texture matching for orange peel and smooth finishes. Licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/drywall-repair-cost-hazel-dell-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{ scope: "Small Hole / Nail Patch", desc: "Up to 1\" diameter. Spackle, sand, prime, spot paint.", price: "$75 – $200" },
	{ scope: "Medium Hole (Fist-Sized)", desc: "2\"–6\" hole. California patch or mesh + joint compound, texture, prime.", price: "$200 – $500" },
	{ scope: "Large Section Repair", desc: "6\"–24\" section. New drywall piece, tape, mud, feather, texture match.", price: "$400 – $1,000" },
	{ scope: "Water Damage (No Mold)", desc: "Remove damaged board, dry substrate, new drywall, tape, texture match.", price: "$500 – $1,500" },
	{ scope: "Water Damage + Mold Remediation", desc: "Containment, mold treatment, board removal and replacement, texture.", price: "$800 – $2,500+" },
	{ scope: "Full Room Skim Coat / Retexture", desc: "Skim entire room to smooth, or retexture to match existing. Per room.", price: "$600 – $2,000" },
	{ scope: "Popcorn Ceiling Patch", desc: "Match existing popcorn texture on patched section. Includes test for asbestos if pre-1980 home.", price: "$150 – $500" },
];

const priceFactors = [
	{
		title: "Texture Type: Smooth, Orange Peel, or Knockdown",
		body: "Hazel Dell homes built in the 1960s and early 1970s often have smooth or skip-trowel finishes that require hand-applied technique and significant feathering skill to match. Homes from the late 1970s and 1980s typically have orange peel applied by spray — easier to replicate but still visible under raking light when mismatched. Getting texture wrong means the repair is obvious from across the room. We never rush the texture step.",
	},
	{
		title: "Number of Repairs: Batch Pricing Saves Money",
		body: "Mobilization — travel, setup, cleanup — is a fixed cost whether we patch one hole or six. Batching all your drywall repairs into a single visit cuts your effective per-hole cost significantly. A homeowner with five small holes spread across three rooms who schedules one visit will pay $300–$500 total. Three separate visits for the same work would run $600–$900.",
	},
	{
		title: "Water Source Must Be Fixed First",
		body: "We will not repair drywall damaged by an active leak. The source — whether a roof, a plumbing supply line, or a drain — has to be resolved before we replace board and texture. If you call us about water damage, we assess the source during the estimate and can recommend a plumber or roofer if needed. Repairing over an active leak is a guarantee the repair fails.",
	},
	{
		title: "Ceiling vs. Wall Location",
		body: "Ceiling drywall work costs 20–30% more than the same wall repair. Overhead application is slower, physically harder, and requires additional setup time. Texture application on ceilings is also more difficult — gravity works against both the compound and the spray. Popcorn ceiling patching is among the most labor-intensive small drywall repairs we do.",
	},
	{
		title: "Home Age and Lead Paint Testing",
		body: "Hazel Dell homes built before 1978 may have lead-based paint on existing drywall surfaces. Before any sanding or significant repair work in a pre-1978 home, EPA guidelines recommend a lead paint test ($25–$75 for a professional swab test). NORBILT follows Washington State lead-safe work practice rules. We note the home age during the estimate and factor this into the scope.",
	},
];

const faqs = [
	{
		q: "Is my Hazel Dell home old enough to have plaster instead of drywall?",
		a: "Possibly. Hazel Dell homes built before the mid-1950s may have original plaster walls — lime or gypsum plaster applied over wood lath. Homes from the late 1950s onward were typically built with drywall (gypsum board). If you tap on your wall and hear a solid, dense thud — rather than the hollow sound of drywall — you may have plaster. Plaster repair requires different technique than drywall patching and costs 30–50% more for the same size repair. We diagnose this during the on-site estimate at no charge.",
	},
	{
		q: "Do I need to test for lead paint before drywall repair in an older Hazel Dell home?",
		a: "If your Hazel Dell home was built before 1978, EPA Renovation, Repair, and Painting (RRP) rules apply to any work that disturbs painted surfaces. Drywall sanding disturbs paint. NORBILT follows Washington State lead-safe work practices, which include either testing the paint or treating the work area as lead-positive. A swab test runs $25–$75 and takes minutes. We recommend this step for all pre-1978 Hazel Dell homes — it protects your family and ensures the work is done correctly.",
	},
	{
		q: "Why does texture matching cost extra?",
		a: "Texture matching is not automatic — it requires a contractor who has worked with enough Hazel Dell homes to know how to replicate both smooth-finish hand work and orange peel spray patterns. For smooth finishes, matching requires skim-coat technique that hides the repair edge under any lighting angle. For orange peel, the spray pressure, distance, and aggregate size all have to be dialed in to a specific wall. Getting this wrong means a visible repair even after painting. We don't charge extra for texture matching — it's included in the quoted price — but it does mean the labor time is higher than a simple hole patch.",
	},
	{
		q: "Can you patch multiple rooms in one visit to save money?",
		a: "Yes, and we strongly encourage this. Make a list of every drywall repair in your home before scheduling — holes, cracks, water stains, popcorn patches, nail pops — and we address all of them in one mobilization. This is the most cost-effective way to handle drywall maintenance. A full punch list visit in a Hazel Dell home typically runs $400–$900 and covers a half-dozen repairs across multiple rooms.",
	},
	{
		q: "How long does drywall repair take?",
		a: "A small hole patch takes under an hour. A medium hole with texture matching takes 2–3 hours including drying time. Water damage repair requiring new board, tape, mud, and texture typically takes 4–6 hours plus a return visit for the final coat and texture if the mud needs overnight drying. Full room skim coats take 1–2 days. We give you a realistic timeline in writing before work starts — there are no surprises.",
	},
];

const nearbyCities = [
	{ label: "Vancouver", href: "/locations/vancouver" },
	{ label: "Salmon Creek", href: "/locations/salmon-creek" },
	{ label: "Camas", href: "/locations/camas" },
	{ label: "Battle Ground", href: "/locations/battle-ground" },
	{ label: "Ridgefield", href: "/locations/ridgefield" },
	{ label: "Washougal", href: "/locations/washougal" },
];

export default function DrywallRepairCostHazelDellWA() {
	return (
		<>
			{/* JSON-LD: BlogPosting */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Drywall Repair Cost Hazel Dell WA: 2026 Price Guide",
						description:
							"How much does drywall repair cost in Hazel Dell, WA? Real 2026 prices for hole patching, texture matching, and water damage repair from a licensed Clark County contractor.",
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						author: { "@type": "Person", name: "Andrey", url: "https://www.norbilt.com/about" },
						publisher: {
							"@type": "Organization",
							name: "NORBILT",
							url: "https://www.norbilt.com",
							logo: { "@type": "ImageObject", url: "https://www.norbilt.com/og-image.jpg" },
						},
						mainEntityOfPage: "https://www.norbilt.com/blog/drywall-repair-cost-hazel-dell-wa",
					}),
				}}
			/>

			{/* JSON-LD: FAQPage */}
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

			{/* JSON-LD: BreadcrumbList */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
							{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
							{
								"@type": "ListItem",
								position: 3,
								name: "Drywall Repair Cost Hazel Dell WA",
								item: "https://www.norbilt.com/blog/drywall-repair-cost-hazel-dell-wa",
							},
						],
					}),
				}}
			/>

			<div className="min-h-screen bg-[#FDFCFB]">
				{/* HERO */}
				<section className="bg-[#14201D] pt-32 pb-16 px-6">
					<div className="max-w-3xl mx-auto space-y-6">
						{/* Breadcrumb + pills */}
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
							<span className="text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full">
								August 17, 2026
							</span>
						</div>

						{/* H1 */}
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
							How Much Does Drywall Repair Cost in{" "}
							<span className="text-[#FFB800]">Hazel Dell, WA?</span>
						</h1>

						{/* Quick Answer callout */}
						<div className="bg-[#2D5A3D]/20 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#A7C4B5] mb-2">Quick Answer</p>
							<p className="text-white/90 text-sm leading-relaxed">
								Drywall repair in Hazel Dell WA costs <strong className="text-white">$75–$200</strong> for a small hole,{" "}
								<strong className="text-white">$200–$500</strong> for a medium section, and{" "}
								<strong className="text-white">$600–$2,000+</strong> for water damage requiring board replacement. Hazel Dell&apos;s
								1960s–80s housing stock has two common texture types: smooth finish (older homes) and orange peel (1970s–80s builds).
								Orange peel matching requires experience — mismatched texture is visible under any light source. All prices are 2026
								Clark County rates.
							</p>
						</div>

						{/* Subheading */}
						<p className="text-lg text-white/70 leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Accurate 2026 drywall repair pricing for Hazel Dell homeowners — from a quick hole patch to full water damage repair
							and texture matching, from a licensed contractor active in north Vancouver.
						</p>

						{/* Location */}
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4 shrink-0" />
							Hazel Dell, WA · North Vancouver · Clark County
						</div>
					</div>
				</section>

				{/* AUTHOR BAR */}
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">
							By Andrey
						</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>

				{/* ARTICLE BODY */}
				<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

					{/* 1. Yellow citation capsule */}
					<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
						<p className="text-xs font-black uppercase tracking-widest text-[#1F2E2B] mb-2">2026 Clark County Pricing</p>
						<p className="text-[#1F2E2B] font-medium leading-relaxed text-sm">
							All prices in this guide reflect 2026 market rates for licensed contractor work in Clark County, WA. Hazel Dell
							sits within the city of Vancouver&apos;s jurisdiction for most areas, with some sections unincorporated. Pricing is
							consistent across both — no location premium. Lead paint awareness applies to any pre-1978 home. Written estimates
							are always free with no obligation.
						</p>
					</div>

					{/* 2. Two intro paragraphs */}
					<section className="space-y-5 text-gray-700 text-lg leading-relaxed">
						<p>
							Hazel Dell is one of north Vancouver&apos;s older, denser neighborhoods — ranches and split-levels from the
							1950s through 1980s, many still owner-occupied by families who have been there for decades. The housing stock
							is honest: built to a working standard, maintained over the years, and now showing the normal wear of a 40–60
							year old home. Settlement cracks along seams and corners are nearly universal. Nail pops resurface every
							few winters. Water damage from aging roofs and supply lines is common. And the original texture — smooth
							finish in older homes, orange peel in the 1970s–80s builds — makes every repair a texture-matching job.
						</p>
						<p>
							NORBILT is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) with a significant volume of
							active work in Hazel Dell and the adjacent Orchards neighborhood. We give free written estimates, carry
							$1,000,000 liability insurance, and back all drywall work with a 1-year labor warranty. If you have a list
							of repairs — holes, cracks, water stains, popcorn patches — we do them all in one visit and price them
							accordingly.
						</p>
					</section>

					{/* 3. Cost table */}
					<section className="space-y-5">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Drywall Repair Cost by Job Type — Hazel Dell WA
						</h2>
						<div className="bg-[#F8F6F3] rounded-3xl overflow-hidden border border-[#E8E4DE]">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Repair Type</th>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">What&apos;s Included</th>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs whitespace-nowrap">Price Range</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-[#E8E4DE]">
										{costRows.map((row, i) => (
											<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
												<td className="px-6 py-4 font-black text-[#1F2E2B] text-xs uppercase tracking-wide">{row.scope}</td>
												<td className="px-6 py-4 text-gray-600">{row.desc}</td>
												<td className="px-6 py-4 font-bold text-[#2D5A3D] whitespace-nowrap">{row.price}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<p className="px-6 py-4 text-xs text-gray-500">
								2026 Clark County rates. Texture matching included. Lead paint testing extra if required for pre-1978 homes. Water source must be repaired before board replacement.
							</p>
						</div>
					</section>

					{/* 4. What Affects the Price */}
					<section className="space-y-6">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Affects the Price
						</h2>
						<div className="space-y-4">
							{priceFactors.map((factor, i) => (
								<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-[#E8E4DE] shadow-sm">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
									<div>
										<p className="font-black text-[#1F2E2B] text-sm uppercase tracking-wide mb-2">{factor.title}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{factor.body}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* 5. Dark insight section */}
					<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
						<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
							Hazel Dell&apos;s Housing Stock and Why Texture Matching Is Harder Here
						</h2>
						<p className="text-[#A7C4B5] leading-relaxed">
							Hazel Dell homes built in the 1960s and early 1970s often have smooth or skip-trowel finishes that are much
							harder to match than the orange peel common in newer construction. The smooth finish requires a hand-applied
							skim coat technique — not a spray — and the edge where old meets new has to be feathered out over a wide area
							to disappear under any lighting angle. Get it wrong by even a small margin and the repair is visible every
							time the afternoon sun rakes across the wall.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							Some of the oldest Hazel Dell homes — those from the late 1940s and early 1950s — have original plaster rather
							than drywall. Plaster repair requires different materials and technique: it bonds differently, sets differently,
							and the substrate is rigid in ways that modern joint compound doesn&apos;t match without prep. We encounter
							this regularly in the older sections of Hazel Dell closest to NE Hazel Dell Avenue and do not charge a
							discovery fee when we find it during the estimate — we just adjust the scope accordingly.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							The dense housing and aging plumbing also means water damage is more common in Hazel Dell than in newer Clark
							County neighborhoods like Ridgefield or parts of Salmon Creek. Supply lines from the 1960s–70s corrode at
							fittings. Roofs that haven&apos;t been updated in 20 years allow moisture intrusion. We do a significant volume of
							water damage assessment and repair in Hazel Dell and adjacent Orchards — enough to know the common failure
							points and how to address them properly.
						</p>
						<div className="flex gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
							<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
							<p className="text-white text-sm leading-relaxed font-medium">
								<strong>For Hazel Dell homeowners:</strong> if you&apos;re unsure whether you have drywall or plaster, tap the
								wall firmly. Drywall sounds hollow. Plaster sounds dense and solid. Either way, we assess it during the free
								estimate and give you accurate pricing for what&apos;s actually there.
							</p>
						</div>
					</section>

					{/* 6. FAQ accordion */}
					<section className="space-y-5">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Frequently Asked Questions
						</h2>
						<div className="space-y-3">
							{faqs.map((faq, i) => (
								<details
									key={i}
									className="group bg-white border border-[#E8E4DE] rounded-2xl overflow-hidden"
								>
									<summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none font-black text-[#1F2E2B] text-sm md:text-base hover:text-[#2D5A3D] transition-colors">
										{faq.q}
										<span className="ml-4 shrink-0 text-[#FFB800] text-xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
									</summary>
									<div className="px-7 pb-6">
										<p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
									</div>
								</details>
							))}
						</div>
					</section>

					{/* 7. Sources block */}
					<section className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE] space-y-4">
						<h3 className="text-xs font-black uppercase tracking-widest text-[#1F2E2B]">Sources & References</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>EPA Renovation, Repair, and Painting (RRP) Rule — Lead paint requirements for pre-1978 homes: <span className="font-medium text-[#2D5A3D]">epa.gov/lead/renovation-repair-and-painting-program</span></li>
							<li>Washington State Dept. of Labor &amp; Industries — Lead-safe work practices: <span className="font-medium text-[#2D5A3D]">lni.wa.gov/safety-health/safety-topics/topics/lead</span></li>
							<li>Clark County Community Development — Permit jurisdiction and fees: <span className="font-medium text-[#2D5A3D]">clark.wa.gov/community-development</span></li>
							<li>Angi / HomeAdvisor 2026 Drywall Repair Cost Report — National benchmarks adjusted for Pacific Northwest labor market</li>
							<li>NORBILT project records — 2024–2026 drywall repair and texture-match invoices in Hazel Dell and north Vancouver, WA</li>
						</ul>
					</section>

					{/* 8. Nearby cities pills */}
					<section className="space-y-4">
						<h3 className="text-xs font-black uppercase tracking-widest text-[#1F2E2B]">We Also Serve</h3>
						<div className="flex flex-wrap gap-3">
							{nearbyCities.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className="px-4 py-2 bg-[#F8F6F3] border border-[#E8E4DE] rounded-full text-sm font-bold text-[#1F2E2B] hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
								>
									{label}
								</Link>
							))}
						</div>
					</section>
				</article>

				{/* YELLOW CTA SECTION */}
				<section className="bg-[#FFB800] py-20 px-6">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
							Free Drywall Repair Estimate in Hazel Dell
						</h2>
						<p className="text-black/70 text-lg font-medium max-w-xl mx-auto">
							Bring your whole list. Licensed, bonded &amp; insured. Written quote before work starts. Same-week scheduling.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"
							>
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
						<p className="text-black/50 text-xs font-medium uppercase tracking-widest">
							WA License NORBI**741CS · Serving All of Clark County
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
