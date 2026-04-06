import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "7 Signs You Need a Bathroom Remodel | Vancouver WA | Norbilt",
	description:
		"Is your bathroom due for an update? Here are 7 signs Vancouver WA homeowners shouldn't ignore — from mold and water damage to outdated fixtures that hurt home value.",
	alternates: {
		canonical: "https://norbilt.com/blog/signs-you-need-bathroom-remodel-vancouver-wa",
	},
	openGraph: {
		title: "7 Signs You Need a Bathroom Remodel in Vancouver WA | Norbilt",
		description:
			"Don't ignore these warning signs. A Clark County contractor explains when it's time to remodel your bathroom.",
		url: "https://norbilt.com/blog/signs-you-need-bathroom-remodel-vancouver-wa",
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
						headline: "7 Signs You Need a Bathroom Remodel in Vancouver, WA",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2026-04-06",
						dateModified: "2026-04-06",
						description:
							"Seven signs Vancouver WA homeowners should watch for that signal it's time for a bathroom remodel.",
						mainEntityOfPage: "https://norbilt.com/blog/signs-you-need-bathroom-remodel-vancouver-wa",
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
								Home Tips
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							7 Signs You Need a Bathroom Remodel in{" "}
							<span className="text-[#FFB800]">Vancouver, WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Some of these are obvious. Others are easy to overlook until
							they become expensive. A licensed Clark County contractor walks
							you through what to watch for.
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
								Vancouver homeowners often put off bathroom updates because they
								don't think the problem is &ldquo;bad enough yet.&rdquo; But
								bathrooms are the room where small problems compound fastest —
								moisture, daily use, and aging materials create issues that get
								significantly more expensive if ignored.
							</p>
							<p>
								Here are seven signs we see regularly when we walk bathrooms in
								Clark County homes. If you recognize more than a few, it's
								worth getting an estimate.
							</p>
						</div>

						{/* SIGNS */}
						<div className="space-y-8">
							{[
								{
									number: "01",
									title: "Grout Is Cracked, Stained, or Missing",
									body: "Grout is your first line of defense against water getting behind your tile. Once it cracks or separates, water gets into the wall. In Vancouver's wet climate, this can lead to mold and structural damage faster than you'd expect. Regrouting is a relatively low-cost fix — but ignoring it leads to tile replacement and drywall repair.",
								},
								{
									number: "02",
									title: "You Smell Musty Even After Cleaning",
									body: "A persistent musty smell in a clean bathroom almost always means mold is growing somewhere you can't see — behind the shower surround, under the subfloor, or inside the wall cavity. This is one of the most common things we find in Clark County homes built in the 1980s–2000s with original tile work.",
								},
								{
									number: "03",
									title: "Your Flooring Is Soft or Bouncy",
									body: "A soft spot near the toilet or tub base is a sign of subfloor damage from a slow water leak. This doesn't fix itself. By the time you feel it underfoot, the damage has usually spread beyond the spot you notice. We see this regularly in Felida, Orchards, and Mill Plain homes with original flooring.",
								},
								{
									number: "04",
									title: "The Caulk Is Pulling Away or Discolored",
									body: "Caulk around the tub, shower base, and toilet should be clean and fully sealed. Gaps, black discoloration, or pulling caulk mean water is getting underneath. This is a cheap repair now and an expensive one later.",
								},
								{
									number: "05",
									title: "Your Fixtures Are 15+ Years Old",
									body: "Older faucets, showerheads, and toilets use significantly more water than modern fixtures. Replacing them is often a one-day job that pays for itself in reduced water bills and prevents leaks from aging seals and valves. It also dramatically changes the feel of the room.",
								},
								{
									number: "06",
									title: "Your Vanity or Countertop Is Swelling or Peeling",
									body: "Laminate vanity tops and cabinet doors absorb moisture over time and begin to swell, peel, or delaminate. Once this starts, it accelerates. A new vanity is one of the highest-ROI bathroom updates you can make in terms of visual impact per dollar.",
								},
								{
									number: "07",
									title: "You're Planning to Sell Within 3 Years",
									body: "In the Clark County real estate market, updated bathrooms are one of the top things buyers notice. Outdated tile, a worn vanity, or obvious water damage can reduce your offer price by far more than the cost of fixing it. We regularly work with Vancouver homeowners preparing for a listing.",
								},
							].map((sign) => (
								<div key={sign.number} className="flex gap-6">
									<div className="shrink-0 w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center">
										<span className="text-black font-black text-sm">{sign.number}</span>
									</div>
									<div>
										<h3 className="text-xl font-black text-[#1F2E2B] mb-2 uppercase tracking-tight">
											{sign.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">{sign.body}</p>
									</div>
								</div>
							))}
						</div>

						{/* COST SUMMARY */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								What It Costs to Fix These Issues in Vancouver
							</h2>
							<div className="space-y-4">
								{[
									{ item: "Regrout shower or tub surround", range: "$300 – $800" },
									{ item: "Recaulk tub / shower base", range: "$100 – $250" },
									{ item: "Subfloor repair", range: "$500 – $1,800" },
									{ item: "Vanity replacement", range: "$600 – $2,000" },
									{ item: "Fixture replacement (faucet, toilet, shower)", range: "$400 – $1,200" },
									{ item: "Full bathroom refresh (all of the above)", range: "$3,000 – $7,000" },
								].map((row) => (
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

						{/* WHAT TO DO */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What to Do Next
							</h2>
							<ul className="space-y-3">
								{[
									"Don't wait for one problem to become three — small bathroom issues compound quickly",
									"Schedule a walkthrough — a contractor can assess everything in 20 minutes",
									"Prioritize water-related issues (soft floors, missing grout, bad caulk) over cosmetic ones",
									"Get a written estimate that breaks down labor and materials separately",
									"Ask about batching repairs — fixing multiple issues in one visit saves significantly on labor",
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
								Bathroom Remodeling In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Felida", slug: "felida" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
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
							Get a Free Bathroom Assessment
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We walk your bathroom, identify every issue, and give you a
							clear written estimate. No pressure, no surprises.
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
