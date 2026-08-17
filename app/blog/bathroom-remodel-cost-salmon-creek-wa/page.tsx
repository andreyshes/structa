import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost Salmon Creek WA | NORBILT",
	description:
		"How much does a bathroom remodel cost in Salmon Creek, WA? Real 2026 price ranges for cosmetic updates through full gut remodels from a licensed Clark County contractor.",
	alternates: { canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-salmon-creek-wa" },
	openGraph: {
		title: "Bathroom Remodel Cost Salmon Creek WA | NORBILT",
		description:
			"Real 2026 price ranges for bathroom remodels in Salmon Creek WA — from an $800 cosmetic refresh to a $45,000 gut with layout change. Licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/bathroom-remodel-cost-salmon-creek-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{ scope: "Cosmetic Refresh", desc: "Paint, hardware, mirror, light fixture. Tile stays.", price: "$800 – $2,500" },
	{ scope: "Vanity & Toilet Replacement", desc: "New vanity cabinet + top, new toilet, new faucet. No tile work.", price: "$1,800 – $4,500" },
	{ scope: "Tub Surround Tile", desc: "Demo existing surround, cement board, new tile (labor + materials).", price: "$2,500 – $6,000" },
	{ scope: "Mid-Range Update", desc: "Vanity, toilet, tub surround tile, LVP flooring, fixtures. Layout unchanged.", price: "$5,000 – $12,000" },
	{ scope: "Walk-In Shower Conversion", desc: "Remove tub, custom tile shower, frameless glass door.", price: "$6,000 – $18,000" },
	{ scope: "Full Gut Remodel", desc: "Everything to studs — cement board, tile, plumbing fixtures, vanity, exhaust. Same layout.", price: "$15,000 – $28,000" },
	{ scope: "Full Gut with Layout Change", desc: "Plumbing relocation, structural modifications, permit. Full finish.", price: "$22,000 – $45,000" },
];

const priceFactors = [
	{
		title: "Tile Selection and Installation Complexity",
		body: "Subway tile in a running bond is the most economical option. Large-format porcelain (12×24 or bigger), natural stone, or mosaic accent work adds $3–$8 per square foot to the labor alone. Salmon Creek homeowners wanting a significant upgrade from the standard 4×4 ceramic common in 1980s builds should budget toward the middle or upper ranges.",
	},
	{
		title: "Layout Changes Require a Plumbing Permit",
		body: "Moving a toilet, relocating the shower drain, or shifting a vanity to a new wall requires a plumbing permit through Clark County Community Development. That adds $150–$400 to the permit cost and typically 1–2 weeks for inspection scheduling. Keeping the layout unchanged significantly controls cost and timeline.",
	},
	{
		title: "Age of Plumbing in Salmon Creek Homes",
		body: "Homes built in Salmon Creek during the 1980s and early 1990s typically have PVC supply lines and ABS drain lines that are functional but aging. During demo we sometimes find slow-leak damage around tub drain flanges and supply shutoffs — issues that have to be addressed before new finishes go in. Budget a 10% contingency for pre-2000 homes.",
	},
	{
		title: "Vanity Size, Style, and Configuration",
		body: "A 30\" single-sink vanity with a prefabricated top runs $400–$900 supplied. A 60\" double-sink vanity in a wood finish with a quartz top runs $1,200–$3,000 supplied. Custom built-in vanities start at $2,500. Salmon Creek's typical 5×8 bathrooms accommodate 30\"–42\" vanities — measure before shopping.",
	},
	{
		title: "Tub-to-Shower vs. Tub Retention",
		body: "Tub-to-shower conversions require a permit in Clark County if they change the floor drain location. Prefab insert conversions run $2,500–$5,000. Custom tile conversions run $6,000–$18,000. Retaining the tub and adding a tile surround instead is the most economical update — usually $2,500–$6,000 for the surround work alone.",
	},
];

const faqs = [
	{
		q: "Do I need a permit for a bathroom remodel in Salmon Creek / unincorporated Clark County?",
		a: "Cosmetic remodels — replacing a vanity, retiling a shower surround, swapping fixtures and lighting — typically do not require a permit in unincorporated Clark County. Permits are required for plumbing relocation (moving a toilet, shower drain, or supply lines), structural changes, and electrical panel work. Salmon Creek is unincorporated Clark County, so all permits go through Clark County Community Development at 564-397-2375. NORBILT handles all permit applications as part of the project.",
	},
	{
		q: "Refresh vs. gut remodel — how do I decide for a Salmon Creek bathroom?",
		a: "The decision hinges on substrate condition and your goals. If the tile is sound and the subfloor is dry, a mid-range update (new vanity, surround, flooring, fixtures) achieves 80% of the visual impact of a full gut at 40–50% of the cost. If the tub surround tile was installed over drywall (common in 1980s builds), if the subfloor has soft spots from old slow leaks, or if the layout needs to change, a full gut is the right call. We assess this during the free on-site estimate — there's no charge and no obligation.",
	},
	{
		q: "How long does a mid-range bathroom remodel take in Salmon Creek?",
		a: "A mid-range update — new vanity, toilet, tub surround tile, and LVP flooring — typically takes 4–7 working days in a Salmon Creek 5×8 or 5×10 bathroom. Full gut remodels take 1–2 weeks. Tub-to-shower conversions with custom tile take 5–10 days depending on tile complexity. We confirm timelines in writing before work begins.",
	},
	{
		q: "Can you match existing tile if I only want to repair one section of my bathroom?",
		a: "Tile matching is possible only if the tile is still in production or if we can source a close match. Most 1980s–1990s Salmon Creek bathroom tile is discontinued — 4×4 almond, 4×4 off-white, and cultured marble surrounds are common and almost impossible to match exactly. If a full surround replacement isn't in the budget, we can discuss options like accent tile or a contrasting repair that reads as intentional rather than patched.",
	},
	{
		q: "What's included in a free NORBILT estimate for a Salmon Creek bathroom?",
		a: "The free estimate includes an on-site walkthrough, scope documentation, a written itemized quote, and a timeline. Andrey personally does all estimates — not a salesperson. We assess tile condition, subfloor condition, plumbing age, and layout constraints, and give you a clear scope-of-work document before any commitment. Call or text (360) 216-9920 to schedule.",
	},
];

const nearbyCities = [
	{ label: "Vancouver", href: "/locations/vancouver" },
	{ label: "Camas", href: "/locations/camas" },
	{ label: "Ridgefield", href: "/locations/ridgefield" },
	{ label: "Battle Ground", href: "/locations/battle-ground" },
	{ label: "Hazel Dell", href: "/locations/vancouver" },
];

export default function BathroomRemodelCostSalmonCreekWA() {
	return (
		<>
			{/* JSON-LD: BlogPosting */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Bathroom Remodel Cost Salmon Creek WA: 2026 Price Guide",
						description:
							"How much does a bathroom remodel cost in Salmon Creek, WA? Real 2026 price ranges for cosmetic updates through full gut remodels from a licensed Clark County contractor.",
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						author: { "@type": "Person", name: "Andrey", url: "https://www.norbilt.com/about" },
						publisher: {
							"@type": "Organization",
							name: "NORBILT",
							url: "https://www.norbilt.com",
							logo: { "@type": "ImageObject", url: "https://www.norbilt.com/og-image.jpg" },
						},
						mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-salmon-creek-wa",
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
								name: "Bathroom Remodel Cost Salmon Creek WA",
								item: "https://www.norbilt.com/blog/bathroom-remodel-cost-salmon-creek-wa",
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
							How Much Does a Bathroom Remodel Cost in{" "}
							<span className="text-[#FFB800]">Salmon Creek, WA?</span>
						</h1>

						{/* Quick Answer callout */}
						<div className="bg-[#2D5A3D]/20 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#A7C4B5] mb-2">Quick Answer</p>
							<p className="text-white/90 text-sm leading-relaxed">
								Bathroom remodel costs in Salmon Creek WA run <strong className="text-white">$800–$2,500</strong> for a cosmetic refresh
								(paint, fixtures, hardware, mirror), <strong className="text-white">$5,000–$12,000</strong> for a mid-range update (vanity,
								toilet, tub surround, flooring), and <strong className="text-white">$15,000–$28,000</strong> for a full gut remodel. Most
								Salmon Creek homes from the 1980s–90s have 5×8 or 5×10 bathrooms with original tile that is dated but structurally
								sound — the question is usually whether to refresh or gut. All prices are 2026 Clark County rates.
							</p>
						</div>

						{/* Subheading */}
						<p className="text-lg text-white/70 leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for every scope — from a cosmetic refresh to a full gut remodel — from a licensed contractor
							serving Salmon Creek and north Clark County.
						</p>

						{/* Location */}
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4 shrink-0" />
							Salmon Creek, WA · Unincorporated Clark County · North Vancouver Area
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
							All prices in this guide reflect 2026 market rates for licensed contractor work in Clark County, WA. Material costs
							are up 8–14% vs. 2024. Salmon Creek pricing is consistent with broader Clark County rates — no location premium
							applies. Written estimates are free with no obligation.
						</p>
					</div>

					{/* 2. Two intro paragraphs */}
					<section className="space-y-5 text-gray-700 text-lg leading-relaxed">
						<p>
							Salmon Creek developed heavily through the 1980s and 1990s — a steady wave of two-story colonials and ranch-style
							homes that filled in the unincorporated land north of Vancouver. Most of those original bathrooms are still
							in place: 4×4 ceramic tile in almond or off-white, cultured marble vanity tops, chrome fixtures, and the
							kind of globe-bulb light bar that dates the room the moment you walk in. The tile is often structurally sound.
							The grout is not. The caulk has failed. And the vanity hasn&apos;t been touched since the Clinton administration.
						</p>
						<p>
							NORBILT is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) with active work in Salmon Creek
							and the surrounding north Clark County area. We give free written estimates, carry $1,000,000 liability insurance,
							and back all bathroom work with a 1-year labor warranty. This guide covers real 2026 pricing — not national
							averages that don&apos;t reflect what things actually cost in Clark County.
						</p>
					</section>

					{/* 3. Cost table */}
					<section className="space-y-5">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Bathroom Remodel Cost by Scope — Salmon Creek WA
						</h2>
						<div className="bg-[#F8F6F3] rounded-3xl overflow-hidden border border-[#E8E4DE]">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Scope</th>
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
								2026 Clark County rates. Mid-grade materials assumed. Layout-unchanged pricing unless noted. Permits extra where required.
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
							Salmon Creek&apos;s 1980s Bathrooms: What We Find and What It Costs
						</h2>
						<p className="text-[#A7C4B5] leading-relaxed">
							Original 1980s Salmon Creek bathrooms typically have 4×4 ceramic tile in off-white or almond, cultured marble
							one-piece vanity tops, and builder-grade chrome fixtures. The tile itself is often sound — ceramic from that
							era was installed thick and has held up — but the grout is cracked and discolored, the caulk has failed around
							the tub, and the vanity lighting is a four-globe bar fixture that was dated by 2005, let alone 2026.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							Many homeowners think they need a full gut remodel when a mid-range update achieves the transformation they
							want at half the cost. We do a significant volume of work in Salmon Creek where we replace the vanity, install
							a new tub surround, put down LVP flooring, and update the mirror and lighting. It reads as a full remodel
							but costs $6,000–$10,000 instead of $20,000+.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							Where a full gut is warranted: when the tub surround tile was originally installed over drywall (not cement
							board) — common in early 1980s Salmon Creek homes — moisture has likely worked behind the tile over the past
							four decades. When we pull that surround, we often find soft drywall that needs to come out regardless.
							That&apos;s a gut, not a resurface. We diagnose this during the free estimate walkthrough.
						</p>
						<div className="flex gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
							<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
							<p className="text-white text-sm leading-relaxed font-medium">
								<strong>Bottom line for Salmon Creek homeowners:</strong> if the tile is sound and the subfloor is dry,
								a mid-range update ($5,000–$12,000) is almost always the right call. If the subfloor has soft spots or
								the surround was installed over drywall, plan for a full gut ($15,000–$28,000). We can tell you which
								situation you&apos;re in during the free walkthrough.
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
							<li>Clark County Community Development — Permit fees and requirements: <span className="font-medium text-[#2D5A3D]">clark.wa.gov/community-development</span></li>
							<li>Washington State Dept. of Labor &amp; Industries — Contractor licensing: <span className="font-medium text-[#2D5A3D]">lni.wa.gov/licensing-permits/contractors</span></li>
							<li>Angi / HomeAdvisor 2026 Bathroom Remodel Cost Report — National benchmarks adjusted for Pacific Northwest labor market</li>
							<li>NORBILT project records — 2024–2026 bathroom remodel invoices in Clark County, WA</li>
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
							Free Estimate for Your Salmon Creek Bathroom
						</h2>
						<p className="text-black/70 text-lg font-medium max-w-xl mx-auto">
							Licensed, bonded &amp; insured. Written quote before work starts. 1-year labor warranty. Same-week scheduling.
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
