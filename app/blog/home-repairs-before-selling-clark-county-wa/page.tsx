import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, XCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repairs Before Selling in Clark County WA | Norbilt",
	description:
		"Planning to sell your home in Vancouver, Camas, or Clark County WA? Here are the repairs that actually increase your sale price and the ones you can skip.",
	alternates: {
		canonical: "https://norbilt.com/blog/home-repairs-before-selling-clark-county-wa",
	},
	openGraph: {
		title: "Home Repairs Before Selling in Clark County WA | Norbilt",
		description:
			"Which repairs add value before a home sale in Clark County? A licensed contractor breaks down what to fix and what to skip.",
		url: "https://norbilt.com/blog/home-repairs-before-selling-clark-county-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function RepairsBeforeSelling() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "Home Repairs Before Selling in Clark County, WA: What's Worth It",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2026-04-06",
						dateModified: "2026-04-06",
						description:
							"Which repairs add value before selling a home in Clark County WA — and which ones to skip.",
						mainEntityOfPage: "https://norbilt.com/blog/home-repairs-before-selling-clark-county-wa",
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
								Selling Guide
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Home Repairs Before Selling in{" "}
							<span className="text-[#FFB800]">Clark County, WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Not every repair is worth doing before a sale. Here's what
							actually moves the needle in the Vancouver and Clark County
							market — from a contractor who does pre-sale work regularly.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Clark County, WA
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* CITATION CAPSULE */}
						<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `In the Clark County WA real estate market, <strong>targeted pre-sale repairs return $1.50–$3.00 for every $1.00 spent</strong>. Fresh paint, updated fixtures, and repaired drywall are consistently the highest-ROI fixes before listing.` }} />
						</div>

												{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								We work with Vancouver and Clark County homeowners every year
								who are preparing to list their homes. The question we get most
								often is: &ldquo;What should I fix before I list?&rdquo; The
								honest answer is that it depends on your home — but there are
								patterns we see consistently in this market.
							</p>
							<p>
								The Clark County real estate market is competitive. Buyers in
								Vancouver, Camas, Battle Ground, and Ridgefield are savvy —
								they look for deferred maintenance and use it to negotiate your
								price down. Here's how to stay ahead of that.
							</p>
						</div>

						{/* DO FIX */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Repairs That Are Worth Doing Before You List
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Drywall Damage & Wall Scuffs",
										body: "Buyers notice holes, stains, and scuffs immediately. These are cheap to fix and create a strong first impression. A clean wall says the home has been cared for. A patched-but-visible repair says the opposite — texture matching matters here.",
										cost: "$75 – $500 per repair",
									},
									{
										title: "Flooring That's Worn or Damaged",
										body: "In the Clark County market, worn carpet is a significant negotiation point. LVP replacement has become the preferred update — it's durable, moisture-resistant, and photographs well. Even replacing just the main living areas can meaningfully increase perceived value.",
										cost: "$4 – $8 / sq ft installed",
									},
									{
										title: "Bathroom Caulking & Grout",
										body: "Buyers and inspectors look directly at bathrooms. Cracked or black caulk and deteriorating grout read as water damage risk. Recaulking a tub surround is a half-day job that removes a significant concern from the inspection report.",
										cost: "$100 – $300",
									},
									{
										title: "Door & Hardware Issues",
										body: "Sticking doors, broken hinges, misaligned latches — these are the things buyers test during showings. A door that doesn't close properly is a red flag. These are easy, fast fixes that make a real impression.",
										cost: "$50 – $300 per door",
									},
									{
										title: "Exterior Paint Touch-Ups & Trim",
										body: "Curb appeal drives the first impression before anyone even walks inside. Peeling paint, rotting trim, or a weathered front door lower perceived value before you've had a chance to show the interior.",
										cost: "$300 – $1,500",
									},
									{
										title: "Lighting Upgrades",
										body: "Old fixtures, burned-out bulbs, and dark rooms photograph poorly and feel dated during showings. Replacing fixtures in the kitchen, bathrooms, and entryway is one of the fastest ways to modernize a home's feel on a budget.",
										cost: "$150 – $600",
									},
								].map((item) => (
									<div key={item.title} className="border border-gray-100 rounded-2xl p-6 bg-white">
										<div className="flex items-start justify-between gap-4 mb-3">
											<h3 className="font-black text-[#1F2E2B] text-lg flex items-center gap-2">
												<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
												{item.title}
											</h3>
											<span className="text-[#2D5A3D] font-black text-sm whitespace-nowrap">
												{item.cost}
											</span>
										</div>
										<p className="text-gray-600 leading-relaxed pl-7">{item.body}</p>
									</div>
								))}
							</div>
						</div>

						{/* DON'T BOTHER */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								What You Can Usually Skip
							</h2>
							<div className="space-y-4">
								{[
									{
										item: "Full kitchen remodel",
										reason: "Rarely recoups full cost in Clark County — buyers often prefer to choose their own finishes",
									},
									{
										item: "New roof (if it has 5+ years left)",
										reason: "Disclose the age and get a recent inspection instead — buyers can negotiate credits",
									},
									{
										item: "HVAC replacement",
										reason: "Unless it's failing — document recent maintenance and let buyers factor in age",
									},
									{
										item: "Custom or highly personal upgrades",
										reason: "Unique wallpaper, bold paint colors, or niche fixtures rarely translate to higher offers",
									},
								].map((row) => (
									<div key={row.item} className="flex gap-3 items-start py-3 border-b border-gray-200 last:border-0">
										<XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
										<div>
											<p className="font-black text-[#1F2E2B]">{row.item}</p>
											<p className="text-sm text-gray-500">{row.reason}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* PRE-SALE STRATEGY */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								The Pre-Sale Repair Strategy That Works
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								The goal isn't to renovate your home — it's to remove the
								objections buyers use to negotiate your price down. Every
								visible defect is leverage for a lower offer. Fix the things
								buyers see, test, and photograph. Leave the rest to disclose
								honestly.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								We work with Vancouver and Clark County homeowners on pre-sale
								punch lists regularly. We can walk your home, identify the
								repairs with the best ROI for your specific listing, and get
								them done efficiently — often within a week or two before
								your listing date.
							</p>
						</div>

						{/* SERVICE LINK */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Ready to prep your home for sale?</p>
								<p className="text-gray-600 text-sm">We prioritize the fixes that move the needle and give you a written estimate before starting.</p>
							</div>
							<Link
								href="/services/home-repair"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								View Service <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

												{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								Pre-Sale Repairs In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Washougal", slug: "washougal" },
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
							Get a Pre-Sale Repair Estimate
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We walk your home, prioritize the fixes that matter most for
							your listing, and get them done on time. Serving all of Clark
							County WA.
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
