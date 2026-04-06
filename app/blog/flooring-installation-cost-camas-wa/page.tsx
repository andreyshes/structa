import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Installation Cost Camas WA | LVP, Tile & Hardwood | Norbilt",
	description:
		"How much does flooring installation cost in Camas, WA? Real price ranges for LVP, hardwood, and tile from a licensed Clark County contractor. Free estimates.",
	alternates: {
		canonical: "https://norbilt.com/blog/flooring-installation-cost-camas-wa",
	},
	openGraph: {
		title: "Flooring Installation Cost in Camas WA | Norbilt",
		description:
			"LVP, hardwood, and tile flooring costs in Camas and Clark County WA. Real numbers from a local licensed contractor.",
		url: "https://norbilt.com/blog/flooring-installation-cost-camas-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function FlooringCost() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "How Much Does Flooring Installation Cost in Camas, WA?",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2026-04-06",
						dateModified: "2026-04-06",
						description:
							"Real flooring installation costs for LVP, hardwood, and tile in Camas and Clark County WA.",
						mainEntityOfPage: "https://norbilt.com/blog/flooring-installation-cost-camas-wa",
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
							Flooring Installation Cost in{" "}
							<span className="text-[#FFB800]">Camas, WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							LVP, hardwood, and tile — real price ranges for Camas
							homeowners, plus what drives the cost up or down in Clark County.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Camas, WA · Clark County
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Flooring is one of the highest-impact updates you can make to a
								home in Camas. New floors change the entire feel of a space —
								and they hold up well in the Pacific Northwest's damp climate
								when installed correctly. But pricing varies significantly
								depending on material, square footage, and what's underneath.
							</p>
							<p>
								Here's a realistic breakdown of what flooring installation
								costs in Camas and the surrounding Clark County area, based on
								jobs we complete regularly in this market.
							</p>
						</div>

						{/* COST TABLE BY MATERIAL */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Flooring Cost by Material (Installed)
							</h2>
							<div className="space-y-4">
								{[
									{
										scope: "LVP (Luxury Vinyl Plank)",
										desc: "Most popular in Camas homes — waterproof, durable, and easy to clean",
										range: "$4 – $8 / sq ft",
									},
									{
										scope: "Engineered Hardwood",
										desc: "Real wood look with better moisture resistance than solid hardwood",
										range: "$7 – $14 / sq ft",
									},
									{
										scope: "Solid Hardwood",
										desc: "Premium look, not recommended for bathrooms or basements",
										range: "$10 – $20 / sq ft",
									},
									{
										scope: "Porcelain / Ceramic Tile",
										desc: "Best for bathrooms, kitchens, and entryways — more labor intensive",
										range: "$8 – $18 / sq ft",
									},
									{
										scope: "Subfloor Repair (if needed)",
										desc: "Soft spots, rot, or leveling issues — common in older Camas homes",
										range: "$300 – $1,500",
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
							<p className="text-xs text-gray-400 mt-4">
								* Prices include materials and labor. Ranges reflect basic to premium material grades.
							</p>
						</div>

						{/* LVP SECTION */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Why LVP Dominates in Clark County
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Luxury vinyl plank has become the go-to flooring for Camas and
								Vancouver homeowners for good reason. It handles the Pacific
								Northwest's humidity better than hardwood, it's significantly
								cheaper than tile, and modern LVP looks convincingly like
								real wood. For whole-home installs or rental properties, it's
								hard to beat.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								We install LVP throughout Clark County and can source material
								at contractor pricing, which often comes out cheaper than buying
								retail yourself.
							</p>
						</div>

						{/* WHAT AFFECTS COST */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Affects Your Total Cost
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Subfloor Condition",
										body: "This is the most common hidden cost. If your subfloor has soft spots, water damage, or is out of level, it needs to be addressed before new flooring goes down. Skipping this causes new floors to fail early — we always inspect before quoting.",
									},
									{
										title: "Room Shape & Complexity",
										body: "Open floor plans are faster and cheaper to install. Rooms with lots of angles, transitions, or intricate tile patterns take more time and generate more material waste.",
									},
									{
										title: "Removal of Existing Flooring",
										body: "Demo and disposal of old carpet, tile, or hardwood adds to the total. Tile removal in particular is labor-intensive — factor in $1–3 per sq ft for removal.",
									},
									{
										title: "Transitions & Trim",
										body: "Thresholds, t-moldings, and new baseboard installation add to the project cost but are necessary for a finished look. We always include these in our quotes so there are no surprises.",
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

						{/* TIPS */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Tips for Getting the Best Value
							</h2>
							<ul className="space-y-3">
								{[
									"Get multiple rooms quoted at once — contractors offer better per-sq-ft pricing at volume",
									"Ask if the contractor can source material — contractor pricing is often lower than retail",
									"Choose a floating floor (LVP or engineered hardwood) over glue-down for easier future replacement",
									"Don't rush material selection — wrong width or finish makes a room feel off",
									"Ask specifically what's included: demo, subfloor prep, transitions, trim, and disposal",
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
								Flooring Installation In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Washougal", slug: "washougal" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
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
							Get a Flooring Quote for Your Camas Home
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We measure, quote, and install — with written pricing before any
							work begins. Serving Camas and all of Clark County.
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
