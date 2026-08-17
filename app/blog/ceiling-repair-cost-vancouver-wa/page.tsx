import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ceiling Repair Cost Vancouver WA | NORBILT",
	description:
		"How much does ceiling repair cost in Vancouver, WA? Real price ranges for water damage, cracks, sagging drywall & popcorn ceiling removal from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/ceiling-repair-cost-vancouver-wa",
	},
	openGraph: {
		title: "Ceiling Repair Cost in Vancouver WA | NORBILT",
		description:
			"Real price ranges for ceiling repair in Vancouver and Clark County WA — water damage, cracks, sagging drywall & popcorn removal. From a licensed local contractor.",
		url: "https://www.norbilt.com/blog/ceiling-repair-cost-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function CeilingRepairCostVancouver() {
	const costRows = [
		{
			scope: "Hairline Crack Repair",
			desc: "Tape, compound, sand, texture blend — typical in settlement or older plaster ceilings",
			range: "$150 – $400",
		},
		{
			scope: "Small Hole or Patch (under 6\")",
			desc: "Backer, patch, mud, multiple coats, texture match",
			range: "$200 – $500",
		},
		{
			scope: "Water Stain (source fixed, no replacement)",
			desc: "Stain-blocking primer, skim coat, retexture, paint-ready finish",
			range: "$250 – $600",
		},
		{
			scope: "Water Damage with Drywall Replacement",
			desc: "Remove wet board, mold inspection, new drywall, tape, mud, texture",
			range: "$600 – $2,200+",
		},
		{
			scope: "Sagging Drywall Section",
			desc: "Remove failing section, re-hang, tape, texture — often caused by moisture or age",
			range: "$500 – $1,500",
		},
		{
			scope: "Full Ceiling Retexture (one room)",
			desc: "Smooth existing, apply new texture coat (knockdown, orange peel, or smooth)",
			range: "$600 – $2,000",
		},
		{
			scope: "Popcorn Ceiling Removal + Retexture",
			desc: "Scrape, skim, retexture — test for asbestos first in pre-1980 homes",
			range: "$900 – $4,000",
		},
	];

	const priceFactors = [
		{
			title: "Water Damage vs. Cosmetic Damage",
			body: "A water stain with no active leak is mostly cosmetic — the repair is straightforward. But if drywall was saturated, it needs to come out entirely. Wet board loses structural integrity, traps moisture, and eventually grows mold. The ceiling area visible to you is often smaller than the full affected section.",
		},
		{
			title: "Texture Matching",
			body: "Vancouver ceilings built after 1980 are usually orange peel or knockdown. Pre-1980 homes often have smooth or skip-trowel finishes — and some have popcorn. Matching the existing texture is harder than the drywall work itself, and a bad texture match shows up clearly under any overhead light.",
		},
		{
			title: "Ceiling vs. Wall Repairs",
			body: "Overhead work is slower and more physically demanding. Expect ceiling repair to run 20–35% higher than an equivalent wall repair. The setup, scaffolding, and drying time all take longer working overhead.",
		},
		{
			title: "Age of the Home",
			body: "Homes built before 1978 may have asbestos-containing popcorn texture or lead paint in the ceiling. Testing is required before any scraping or sanding. NORBILT can recommend a certified tester — we won't disturb suspect material without a clearance.",
		},
		{
			title: "Access and Room Size",
			body: "High ceilings (9 ft+), vaulted ceilings, or stairwells require extra setup time. Larger rooms need more compound and more drying time between coats — all of which adds to the total.",
		},
	];

	const warningSignals = [
		"A crack that has widened or returned after a previous repair",
		"Ceiling drywall that feels soft or spongy when pressed",
		"Brown water stains that are still wet or growing",
		"A sagging section more than ½\" below the surrounding surface",
		"Multiple cracks radiating from a single point (star-cracking)",
		"Crackling or popping sounds when walking on the floor above",
	];

	const faqs = [
		{
			q: "Does ceiling repair require a permit in Vancouver WA?",
			a: "Patching, retexturing, and cosmetic ceiling work does not require a permit in Clark County or the City of Vancouver. If the repair involves opening up the ceiling to access structural framing, electrical, or plumbing — that work is subject to permits. NORBILT handles permit applications as part of any permitted scope.",
		},
		{
			q: "How do I know if my ceiling has asbestos?",
			a: "If your home was built before 1980 and has a textured ceiling — especially popcorn — it may contain asbestos. The only way to know is testing. We recommend a certified industrial hygienist or asbestos inspector before any scraping or sanding. Testing typically costs $200–$400 and takes 3–5 business days.",
		},
		{
			q: "Can you repair just a section of a popcorn ceiling without doing the whole room?",
			a: "Technically yes — but the patch will likely be visible because matching the sheen and density of aged popcorn texture is very difficult. In most cases, homeowners choose to remove and retexture the entire ceiling for a consistent result. We'll give you an honest assessment on-site.",
		},
		{
			q: "My ceiling has a water stain but the roof leak is fixed. Do I still need to wait?",
			a: "We recommend waiting until the ceiling is fully dry — typically 2–4 weeks after the leak source is repaired — before applying stain-blocking primer and retexturing. Painting over a damp ceiling causes the stain to bleed through even with primer. If you're unsure, we can check moisture levels with a meter during the estimate.",
		},
		{
			q: "What's the difference between orange peel and knockdown texture?",
			a: "Orange peel has a fine, bumpy surface — it looks like the skin of an orange. It's the most common ceiling texture in Clark County homes built between 1985 and 2010. Knockdown is a heavier, more angular texture applied with a trowel and knocked flat before it fully dries — it creates a random, stone-like pattern. Both require different tools and techniques to match correctly.",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "How Much Does Ceiling Repair Cost in Vancouver, WA?",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						description:
							"Real price ranges for ceiling repair in Vancouver and Clark County WA — water damage, cracks, sagging drywall, and popcorn ceiling removal.",
						mainEntityOfPage: "https://www.norbilt.com/blog/ceiling-repair-cost-vancouver-wa",
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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
							{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
							{ "@type": "ListItem", position: 3, name: "Ceiling Repair Cost in Vancouver WA", item: "https://www.norbilt.com/blog/ceiling-repair-cost-vancouver-wa" },
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
							<span className="text-white/50 text-xs font-medium">Updated August 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							How Much Does Ceiling Repair Cost in{" "}
							<span className="text-[#FFB800]">Vancouver, WA?</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								Ceiling repair in Vancouver WA costs $150–$500 for a crack or small patch, $600–$2,200+ for water damage requiring drywall replacement, and $900–$4,000 for popcorn ceiling removal and retexture (per room). The biggest variable is whether the ceiling drywall needs to come out — saturated board cannot be dried out and reused. Texture matching is the hardest part of any ceiling repair: Vancouver homes built after 1980 typically have orange peel or knockdown, while older homes may have smooth, skip-trowel, or popcorn. A mismatched texture is visible under every light. All prices are 2026 Clark County rates.
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real pricing for cracks, water damage, sagging drywall, and popcorn removal — from a licensed Clark County contractor.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Vancouver, WA · Clark County
						</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* CITATION CAPSULE */}
						<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed">
								Ceiling repair in Vancouver WA runs <strong>$150–$500 for a crack or patch</strong> and <strong>$600–$2,200+ for water damage</strong>. Popcorn removal and retexture for a standard room costs <strong>$900–$4,000</strong>. The source of the leak must be fixed before any ceiling repair — otherwise the new drywall will fail within months.
							</p>
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Ceiling repairs are one of the most frequently delayed home repairs in Clark County — homeowners notice a crack or stain, assume it will hold, and come back six months later with a bigger problem. We see this pattern across Vancouver, Hazel Dell, Salmon Creek, and Orchards every week.
							</p>
							<p>
								The cost of ceiling repair varies more than most repairs because the same visual symptom — a stain, a bulge, a crack — can have very different causes. A hairline crack from normal house settlement is a half-day job. A stain from a slow roof leak that soaked the insulation and subfloor above it is a different project entirely. This guide breaks down what each scenario actually costs.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Ceiling Repair Costs in Vancouver, WA (2026)
							</h2>
							<div className="space-y-4">
								{costRows.map((row) => (
									<div
										key={row.scope}
										className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4 border-b border-gray-200 last:border-0"
									>
										<div>
											<p className="font-black text-[#1F2E2B]">{row.scope}</p>
											<p className="text-sm text-gray-500">{row.desc}</p>
										</div>
										<span className="text-[#2D5A3D] font-black text-lg whitespace-nowrap">
											{row.range}
										</span>
									</div>
								))}
							</div>
							<p className="text-xs text-gray-400 mt-4">Ranges reflect Clark County labor and material costs as of 2026. Final pricing depends on site conditions, ceiling height, and texture complexity.</p>
						</div>

						{/* WHAT DRIVES COST */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Affects the Price
							</h2>
							<div className="space-y-5">
								{priceFactors.map((item) => (
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

						{/* POPCORN SECTION */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Popcorn Ceilings in Vancouver WA: What You Need to Know
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Popcorn ceiling texture (also called acoustic texture or cottage cheese) was standard in residential construction from roughly 1950 through the mid-1980s. A large share of Vancouver&apos;s housing stock — particularly in Hazel Dell, Orchards, and north Vancouver — was built during this period. If your home was built before 1980 and still has the original ceiling texture, there is a realistic chance it contains chrysotile asbestos.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								Asbestos-containing popcorn is not dangerous if left undisturbed. The risk comes from scraping, sanding, or otherwise disturbing the material — which releases fibers into the air. Washington State requires testing before any disturbance. We will not scrape or sand suspect texture without a clearance from a certified tester. Testing typically costs $200–$400 and takes 3–5 business days.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								If the ceiling tests clear or was built after 1980, popcorn removal is a straightforward job: wet the texture, scrape, skim-coat the bare drywall, and apply your choice of new finish. Most homeowners in Vancouver choose smooth or orange peel — both of which are dramatically easier to maintain and repaint than popcorn.
							</p>
						</div>

						{/* WARNING SIGNS */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
								<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
									Warning Signs That Need Immediate Attention
								</h2>
							</div>
							<p className="text-gray-600">These go beyond cosmetic — call a contractor before the problem gets worse:</p>
							<ul className="space-y-3">
								{warningSignals.map((signal) => (
									<li key={signal} className="flex gap-3 text-gray-700">
										<AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
										{signal}
									</li>
								))}
							</ul>
						</div>

						{/* HOW WE FIX IT */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How We Approach Ceiling Repairs
							</h2>
							<div className="space-y-5 text-gray-700 text-lg leading-relaxed">
								<p>
									Every ceiling job starts with a moisture check. Even if the visible stain looks dry, we test the surrounding drywall with a moisture meter before pricing the repair. Painting over wet drywall is the single biggest mistake homeowners and inexperienced contractors make — the stain bleeds back through primer within weeks and the board continues to degrade underneath.
								</p>
								<p>
									Once we confirm the source is fixed and the material is dry, we remove only what needs to come out. We don&apos;t tear out more than necessary, but we don&apos;t leave questionable material either. Drywall that shows soft spots or registers above 15% moisture comes out.
								</p>
								<p>
									New board goes up with proper fastener spacing and blocking where needed. We tape, coat, sand, and coat again — typically three passes minimum for a ceiling that will hold up without seam cracking. Then we texture to match your existing ceiling finish. If we can&apos;t match it accurately, we tell you before we start.
								</p>
							</div>
						</div>

						{/* REMODELING CALLOUT */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Planning a larger remodel in Vancouver?</p>
								<p className="text-gray-600 text-sm">Ceiling repairs are often part of a broader bathroom or kitchen remodel — we handle the full scope so you&apos;re not coordinating multiple contractors.</p>
							</div>
							<Link
								href="/remodeling"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								Home Remodeling <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* FAQ */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-3">
								{faqs.map((faq, i) => (
									<details
										key={i}
										className="group border border-gray-200 rounded-2xl overflow-hidden bg-white"
									>
										<summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-black text-[#1F2E2B] list-none">
											<span>{String(i + 1).padStart(2, "0")}. {faq.q}</span>
											<span className="text-[#2D5A3D] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
										</summary>
										<div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
											{faq.a}
										</div>
									</details>
								))}
							</div>
						</div>

						{/* SOURCES */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6 space-y-2">
							<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sources & References</p>
							<ul className="space-y-1 text-xs text-gray-400">
								<li>Clark County Community Development — residential permit requirements (2026)</li>
								<li>WA State Dept. of Labor & Industries — contractor licensing and asbestos regulations</li>
								<li>NORBILT internal job data — ceiling repair pricing, Clark County WA (2025–2026)</li>
								<li>EPA — asbestos in the home: popcorn ceilings</li>
							</ul>
						</div>

						{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								We Also Serve
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Camas", slug: "camas" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Washougal", slug: "washougal" },
									{ name: "Salmon Creek", slug: "salmon-creek" },
									{ name: "Hazel Dell", slug: "vancouver" },
								].map((city) => (
									<Link
										key={city.slug}
										href={`/locations/${city.slug}`}
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
							Get a Free Ceiling Repair Estimate
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Licensed drywall and ceiling repair in Vancouver and all of Clark County. We assess moisture, match your texture, and leave your ceiling looking like nothing happened.
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
