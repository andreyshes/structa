import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Drywall Repair Cost Vancouver WA | Norbilt",
	description:
		"How much does drywall repair cost in Vancouver, WA? Real price ranges for patching, texture matching, and water damage repair from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://norbilt.com/blog/drywall-repair-cost-vancouver-wa",
	},
	openGraph: {
		title: "Drywall Repair Cost in Vancouver WA | Norbilt",
		description:
			"Real price ranges for drywall repair in Vancouver and Clark County WA. From a licensed local contractor.",
		url: "https://norbilt.com/blog/drywall-repair-cost-vancouver-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function DrywallRepairCost() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "How Much Does Drywall Repair Cost in Vancouver, WA?",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2026-04-06",
						dateModified: "2026-04-06",
						description:
							"A real cost breakdown for drywall repair in Vancouver and Clark County WA.",
						mainEntityOfPage: "https://norbilt.com/blog/drywall-repair-cost-vancouver-wa",
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
							How Much Does Drywall Repair Cost in{" "}
							<span className="text-[#FFB800]">Vancouver, WA?</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real pricing for holes, cracks, water damage, and texture
							matching — from a licensed Clark County contractor who does this
							work every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Vancouver, WA · Clark County
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Drywall damage is one of the most common repair requests we get
								from Vancouver homeowners — and one of the most mispriced. Quotes
								can vary wildly depending on who you call. Here's a straight
								breakdown of what drywall repair actually costs in Clark County,
								based on jobs we do regularly across Vancouver, Salmon Creek,
								Hazel Dell, and the surrounding area.
							</p>
							<p>
								The size of the hole, the texture of your wall, and whether
								water damage is involved are the three biggest variables. Let's
								break each down.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Drywall Repair Costs in Vancouver, WA
							</h2>
							<div className="space-y-4">
								{[
									{
										scope: "Small Hole (nail / anchor)",
										desc: "Single patch, light texture blend, paint-ready finish",
										range: "$75 – $200",
									},
									{
										scope: "Medium Hole (fist-sized)",
										desc: "Backer board, patch, mud, sand, texture match",
										range: "$200 – $500",
									},
									{
										scope: "Large Section Repair",
										desc: "Multiple patches or damaged panel replacement, full texture blend",
										range: "$500 – $1,200",
									},
									{
										scope: "Water Damage Repair",
										desc: "Source fix, drywall removal, mold check, new board, texture, prime",
										range: "$800 – $2,500+",
									},
									{
										scope: "Popcorn Ceiling Patch",
										desc: "Matching popcorn texture is its own skill — expect a premium",
										range: "$150 – $600",
									},
								].map((row) => (
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
						</div>

						{/* WHAT DRIVES COST */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Affects the Price
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Texture Matching",
										body: "This is where most DIY repairs fail. Vancouver homes have everything from smooth finish to orange peel to knockdown to popcorn. Matching existing texture requires experience and the right equipment — a bad match is immediately visible once the paint dries.",
									},
									{
										title: "Number of Coats",
										body: "A quality drywall repair requires multiple coats of joint compound with sanding between each coat. Rushing this process leads to visible seams and shrinkage cracks within months.",
									},
									{
										title: "Water Damage",
										body: "If moisture caused the damage, the source needs to be fixed first. We inspect for mold, test the surrounding drywall for soft spots, and replace everything affected — not just the visible damage.",
									},
									{
										title: "Ceiling vs. Wall",
										body: "Ceiling repairs cost more because of the physical overhead work and the greater difficulty of matching ceiling textures consistently.",
									},
								].map((item) => (
									<div key={item.title} className="flex gap-4">
										<CheckCircle2 className="w-6 h-6 text-[#FFB800] shrink-0 mt-1" />
										<div>
											<h3 className="font-black text-[#1F2E2B] mb-1">
												{item.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">{item.body}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* DIY WARNING */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Why DIY Drywall Patches Often Look Wrong
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								The patch itself is usually not the problem — it's the texture.
								Most homeowners sand and paint over the patch without matching
								the wall's existing texture, and the repair is obvious under
								any raking light. We use the same tools and techniques as the
								original drywaller to blend the repair into the surrounding
								surface.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								If you're selling your home in Vancouver, a visible drywall
								repair can raise red flags during inspection. A professional
								finish costs a bit more but holds up to scrutiny.
							</p>
						</div>

						{/* TIPS */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Tips Before You Call a Contractor
							</h2>
							<ul className="space-y-3">
								{[
									"Take photos of all damaged areas — contractors can give more accurate quotes with photos",
									"If damage is from water, locate and stop the source first or mention it clearly",
									"Batch small repairs together — it's more cost-effective than scheduling multiple visits",
									"Ask if the quote includes texture matching and priming — some don't",
									"Don't paint over the repair until the compound is fully cured (usually 24–48 hours)",
								].map((tip) => (
									<li key={tip} className="flex gap-3 text-gray-700">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
										{tip}
									</li>
								))}
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
							Get a Quote for Your Drywall Repair
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We patch holes, match textures, and leave walls looking like
							nothing happened. Free estimates for Vancouver and all of Clark
							County.
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
