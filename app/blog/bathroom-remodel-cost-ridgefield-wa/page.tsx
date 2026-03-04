import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Ridgefield WA | 2025 Price Guide | Norbilt",
	description:
		"How much does a bathroom remodel cost in Ridgefield, WA? Real price ranges for tile, vanity, fixtures & more from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://norbilt.com/blog/bathroom-remodel-cost-ridgefield-wa",
	},
	openGraph: {
		title: "Bathroom Remodel Cost in Ridgefield WA | Norbilt",
		description:
			"Real price ranges for bathroom remodels in Ridgefield and Clark County WA. From a licensed local contractor.",
		url: "https://norbilt.com/blog/bathroom-remodel-cost-ridgefield-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function BathroomRemodel() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "How Much Does a Bathroom Remodel Cost in Ridgefield, WA?",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2025-03-01",
						dateModified: "2026-03-04",
						description:
							"A real cost breakdown for bathroom remodels in Ridgefield and Clark County WA.",
						mainEntityOfPage: "https://norbilt.com/blog/bathroom-remodel-cost-ridgefield-wa",
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
							How Much Does a Bathroom Remodel Cost in{" "}
							<span className="text-[#FFB800]">Ridgefield, WA?</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							A realistic price breakdown from a licensed Clark County
							contractor — not a national average that doesn't apply to your
							neighborhood.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Ridgefield, WA · Clark County
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								If you're a homeowner in Ridgefield, WA searching for bathroom
								remodel costs, you've probably run into generic estimates that
								say "$5,000 to $30,000." That range is so wide it's almost
								useless. Here's a realistic breakdown based on what we actually
								see doing this work in Clark County.
							</p>
							<p>
								Ridgefield has a mix of newer construction in developments like
								Union Ridge and older homes near downtown. The age and layout of
								your home plays a big role in what your remodel will actually
								cost.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Typical Bathroom Remodel Costs in Ridgefield, WA
							</h2>
							<div className="space-y-4">
								{[
									{
										scope: "Cosmetic Refresh",
										desc: "New fixtures, faucet, toilet, caulking, paint touch-up",
										range: "$800 – $2,500",
									},
									{
										scope: "Mid-Range Update",
										desc: "New vanity, tile, backsplash, mirror, lighting, fixtures",
										range: "$3,000 – $7,000",
									},
									{
										scope: "Full Remodel",
										desc: "Demo, new tile floor & shower surround, vanity, all fixtures, drywall",
										range: "$8,000 – $18,000",
									},
									{
										scope: "High-End Remodel",
										desc: "Custom tile work, freestanding tub, heated floors, full layout change",
										range: "$18,000 – $35,000+",
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
								What Affects the Price in Clark County
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Tile Selection",
										body: "Basic tile runs $2–5 per sq ft. Premium large-format tile or custom patterns can hit $15–25 per sq ft. Labor to install small mosaic or herringbone patterns also costs more due to cut complexity.",
									},
									{
										title: "Plumbing Changes",
										body: "Moving a toilet, shower drain, or sink location requires a licensed plumber and can add $1,500–4,000 to your budget. If everything stays in place, costs stay lower.",
									},
									{
										title: "Existing Conditions",
										body: "Older Ridgefield homes sometimes have water damage, old galvanized pipe, or non-standard framing. We always inspect before quoting so there are no surprise charges mid-project.",
									},
									{
										title: "Scope Creep",
										body: "Most budget overruns happen because homeowners start with a vanity swap and discover the subfloor is soft, or the tile behind the old surround is moldy. We flag these during the estimate walkthrough.",
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

						{/* DIY vs CONTRACTOR */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								DIY vs. Hiring a Licensed Contractor
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Washington State requires a licensed contractor for bathroom
								remodel work above a certain dollar threshold. Beyond the legal
								requirement, tile work done incorrectly leads to cracking and
								water intrusion within 1–3 years. We regularly re-do DIY tile
								jobs for homeowners who are now dealing with moisture damage
								behind their walls.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								For a bathroom remodel in Ridgefield — especially if you're
								planning to sell — hiring a licensed contractor protects your
								home's value and ensures the work passes inspection.
							</p>
						</div>

						{/* HOW TO SAVE */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How to Save Money Without Cutting Corners
							</h2>
							<ul className="space-y-3">
								{[
									"Keep plumbing in the same location — moving it is the biggest cost driver",
									"Choose in-stock tile from a local supplier vs. special-order materials",
									"Update fixtures and vanity only if the tile is still in good condition",
									"Get the estimate before buying materials — contractors can sometimes source at contractor pricing",
									"Do one room at a time rather than multiple rooms simultaneously",
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
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Brush Prairie", slug: "brush-prairie" },
									{ name: "Camas", slug: "camas" },
									{ name: "Felida", slug: "felida" },
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
							Get a Real Quote for Your Ridgefield Bathroom
						</h2>
						<p className="text-black/70 text-lg font-medium">
							No national averages. No surprise charges. We walk your home,
							assess your specific situation, and give you a clear number.
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
