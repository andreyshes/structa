import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hiring a Handyman in Battle Ground WA: Costs & What to Expect | Norbilt",
	description:
		"What does handyman service cost in Battle Ground, WA? Learn what's included, what to watch out for, and how to find a licensed contractor in North Clark County.",
	alternates: {
		canonical: "https://norbilt.com/blog/battle-ground-handyman-what-to-expect",
	},
	openGraph: {
		title: "Hiring a Handyman in Battle Ground WA | Norbilt",
		description:
			"Costs and tips for hiring a licensed handyman in Battle Ground and North Clark County WA.",
		url: "https://norbilt.com/blog/battle-ground-handyman-what-to-expect",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function BattleGroundHandyman() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "Hiring a Handyman in Battle Ground, WA: What to Expect & What It Costs",
						author: { "@type": "Organization", name: "Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2025-03-01",
						dateModified: "2026-03-04",
						description:
							"A practical guide to hiring handyman services in Battle Ground and North Clark County, WA.",
						mainEntityOfPage: "https://norbilt.com/blog/battle-ground-handyman-what-to-expect",
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
								Hiring Guide
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Hiring a Handyman in{" "}
							<span className="text-[#FFB800]">Battle Ground, WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							What to expect, what it costs, and what to watch out for when
							hiring handyman services in North Clark County.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Battle Ground, WA · North Clark County
						</div>
					</div>
				</section>

				{/* ARTICLE */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Battle Ground is one of the faster-growing areas in Clark
								County, and with that growth comes a lot of handyman demand —
								and unfortunately, a mix of licensed pros and unlicensed
								operators who can create more problems than they solve. Here's
								what you need to know before you hire anyone.
							</p>
						</div>

						{/* LICENSING */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<div className="flex items-center gap-3">
								<Shield className="w-8 h-8 text-[#FFB800]" />
								<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
									Licensed vs. Unlicensed: Why It Matters in WA
								</h2>
							</div>
							<p className="text-[#A7C4B5] leading-relaxed">
								Washington State requires a contractor's license for repair work
								above $500. An unlicensed handyman doing electrical, plumbing
								adjacent, or structural work puts your home insurance at risk.
								If something goes wrong — a fire, water damage, an accident —
								your insurer can deny your claim if the work was done without a
								license.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								Always ask for a WA contractor license number and verify it at
								<strong className="text-white"> verify.contractors.wa.gov</strong>.
								Norbilt's license is <strong className="text-[#FFB800]">NORBIR**741CS</strong>.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Handyman Costs in Battle Ground & Clark County
							</h2>
							<div className="space-y-4">
								{[
									{
										job: "Drywall Patch (small hole)",
										range: "$150 – $350",
									},
									{
										job: "TV Mounting",
										range: "$100 – $200",
									},
									{
										job: "Door Repair / Rehang",
										range: "$150 – $400",
									},
									{
										job: "Ceiling Fan Install (existing wiring)",
										range: "$150 – $300",
									},
									{
										job: "Caulking (bathroom/kitchen)",
										range: "$100 – $250",
									},
									{
										job: "Half-Day Handyman (4 hrs, multiple tasks)",
										range: "$300 – $600",
									},
									{
										job: "Full-Day Handyman (8 hrs, multiple tasks)",
										range: "$550 – $1,000",
									},
								].map((row) => (
									<div
										key={row.job}
										className="flex items-center justify-between gap-4 py-3 border-b border-gray-200 last:border-0"
									>
										<p className="font-medium text-[#1F2E2B]">{row.job}</p>
										<span className="text-[#2D5A3D] font-black whitespace-nowrap">
											{row.range}
										</span>
									</div>
								))}
							</div>
							<p className="text-xs text-gray-400 mt-4">
								*Prices reflect Clark County market rates. Final cost depends on
								scope and existing conditions.
							</p>
						</div>

						{/* WHAT TO LOOK FOR */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								5 Things to Check Before Hiring a Handyman in Battle Ground
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Verify their WA contractor license",
										body: "Search their name or license number at the L&I website. Takes 30 seconds and tells you if they're current and bonded.",
									},
									{
										title: "Ask for proof of insurance",
										body: "General liability insurance protects you if they damage your home. A legitimate contractor will have it and can provide a certificate.",
									},
									{
										title: "Get the scope in writing",
										body: "A clear written quote protects both parties. Be skeptical of anyone who gives a verbal estimate and then invoices more.",
									},
									{
										title: "Check reviews that mention specific towns",
										body: "A contractor with reviews from Battle Ground, Brush Prairie, or Hockinson understands the North County market and has proven they show up.",
									},
									{
										title: "Don't pay 100% upfront",
										body: "A reasonable deposit (25–50%) is standard. Full payment before work starts is a red flag.",
									},
								].map((item, i) => (
									<div key={item.title} className="flex gap-4">
										<div className="w-8 h-8 rounded-full bg-[#FFB800] text-black font-black text-sm flex items-center justify-center shrink-0">
											{i + 1}
										</div>
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

						{/* COMMON JOBS */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Most Common Handyman Jobs We Do in Battle Ground
							</h2>
							<div className="grid grid-cols-2 gap-3">
								{[
									"Drywall patching & texture matching",
									"Door adjustments & rehang",
									"TV & picture mounting",
									"Ceiling fan installation",
									"Caulking & weatherstripping",
									"Fence board replacement",
									"Deck board repair",
									"Cabinet hardware updates",
									"Furniture assembly",
									"Gutter cleaning & minor repair",
									"Window screen repair",
									"Property punch lists",
								].map((job) => (
									<div key={job} className="flex items-center gap-2 text-sm text-gray-600">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
										{job}
									</div>
								))}
							</div>
						</div>

						{/* NEARBY */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								We Also Serve Nearby Areas
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Brush Prairie", slug: "brush-prairie" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Vancouver", slug: "vancouver" },
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
							Need a Licensed Handyman in Battle Ground?
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Norbilt is a licensed, bonded WA contractor serving Battle Ground,
							Brush Prairie, and all of North Clark County. Free estimates,
							clear pricing, no surprises.
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
								href="tel:+19165086272"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(916) 508-6272
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
