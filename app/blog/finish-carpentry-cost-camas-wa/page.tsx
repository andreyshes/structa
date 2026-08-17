"use server";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Finish Carpentry Cost Camas WA | Crown Molding, Trim & Wainscoting | NORBILT",
	description:
		"How much does finish carpentry cost in Camas, WA? Real 2026 price ranges for crown molding, baseboards, wainscoting & built-ins from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/finish-carpentry-cost-camas-wa",
	},
	openGraph: {
		title: "Finish Carpentry Cost Camas WA | Crown Molding, Trim & Wainscoting | NORBILT",
		description:
			"Real 2026 price ranges for crown molding, baseboards, wainscoting & built-ins in Camas WA. From a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/finish-carpentry-cost-camas-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const faqs = [
	{
		q: "Do I need permits for trim installation in Camas?",
		a: "No permit is required for cosmetic trim work — baseboard, crown molding, wainscoting, door casing, and chair rail are all cosmetic improvements that do not require a permit in Camas or Clark County. Permits are required for structural changes, electrical work, and plumbing modifications. Pure trim installation falls outside those categories. That said, if your project includes built-in cabinetry with electrical components inside the unit, discuss the scope with your contractor before starting. NORBILT holds WA General Contractor License NORBI**741CS and handles permit questions on every estimate call.",
	},
	{
		q: "How long does crown molding take for a typical Camas home?",
		a: "For a typical Camas home adding crown molding to a master suite and living room — roughly 200 linear feet — expect one to two days for installation. A full-home crown molding project across 6–8 rooms typically runs three to five days. Homes with vaulted ceilings, outside corners, or complex profiles take longer because each corner and crown return requires precise compound angle cuts. We give a firm timeline during your free estimate based on the ceiling height, profile, and number of rooms.",
	},
	{
		q: "Can you match existing trim profiles if I'm adding to rooms that already have some trim?",
		a: "Yes, in most cases. We measure the existing profiles and source matching stock from our suppliers. Paint-grade MDF profiles are widely available and easy to match. The tricky situations are custom-milled or discontinued profiles from homes built in the 1990s–early 2000s — some are no longer in production. When an exact match isn't available, we can have a custom profile milled (adds cost), or in some cases a close-enough standard profile looks right once painted. We show you options during the estimate so you can decide before any material is ordered.",
	},
	{
		q: "What's the difference between MDF and solid wood trim? Which should I use?",
		a: "MDF (medium-density fiberboard) is paint-grade only — it cannot be stained or finished naturally, but it takes paint beautifully, resists warping in climate-controlled interior spaces, and costs significantly less than solid wood. Most Camas homeowners use MDF paint-grade trim throughout because it produces a clean, smooth painted finish and holds up well long-term. Solid wood trim (poplar, pine, oak) is necessary when you want a stained or natural wood finish, or for high-moisture areas. Finger-jointed pine is a mid-range option — solid wood that paints well at lower cost than clear-grain hardwood. We recommend MDF for painted projects and solid poplar or clear pine for stained projects.",
	},
	{
		q: "Do you paint the trim or is that a separate contractor?",
		a: "NORBILT installs and primes trim — we do not provide finish painting as a standard part of the trim package. After installation, trim is caulked and ready for finish coats. We can refer you to a painter we work with regularly in Camas, or you can paint it yourself. Many homeowners paint trim themselves after installation to manage costs. The sequence is: we install and caulk, then you or your painter applies finish coats. If you want us to coordinate the full project including painting, let us know during the estimate and we will include a subcontractor in the scope.",
	},
];

export default function FinishCarpenteryCostCamasPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "How Much Does Finish Carpentry Cost in Camas, WA?",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						description:
							"Real 2026 price ranges for finish carpentry in Camas WA — crown molding, baseboards, wainscoting, built-ins, and what drives the cost in Prune Hill and Lacamas Shores homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/finish-carpentry-cost-camas-wa",
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
							{ "@type": "ListItem", position: 3, name: "Finish Carpentry Cost in Camas WA", item: "https://www.norbilt.com/blog/finish-carpentry-cost-camas-wa" },
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
							How Much Does Finish Carpentry Cost in{" "}
							<span className="text-[#FFB800]">Camas, WA?</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								Finish carpentry in Camas WA costs $2–$4/lin ft for baseboard installation, $5–$10/lin ft for crown molding, and $6–$10/sq ft for wainscoting (MDF/paint-grade). A typical Camas home adding crown molding to a master suite and living room (roughly 200 linear feet total) runs $2,000–$4,500 installed. Prune Hill and Lacamas Shores homes with 9-ft or vaulted ceilings cost more due to the complexity of crown returns, outside corners, and longer runs. Material quality is the biggest variable — paint-grade MDF is at the low end, clear poplar or finger-jointed pine in the mid-range, and solid hardwood or custom-milled profiles at the high end. All prices are 2026 Clark County rates.
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real pricing for crown molding, baseboards, wainscoting, and built-ins — from a licensed Clark County contractor who works in Camas every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Camas, WA · Clark County
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
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `Finish carpentry in Camas WA costs <strong>$2–$4/lin ft for baseboard</strong> and <strong>$5–$10/lin ft for crown molding</strong>. A typical master suite and living room crown project runs <strong>$2,000–$4,500 installed</strong>. Prune Hill homes with high ceilings and complex profiles run toward the top of that range.` }} />
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Camas homeowners ask about finish carpentry more than almost any other interior project — and for good reason. The neighborhood comps support it, the homes are well-built, and the gap between builder-grade trim and custom carpentry is visible the moment you walk through the front door. Here is a straight breakdown of what finish carpentry costs in Camas in 2026, based on actual jobs we complete in Prune Hill, Lacamas Shores, and the surrounding neighborhoods.
							</p>
							<p>
								The three biggest cost variables are ceiling height, profile complexity, and material choice. Each one has a real dollar impact on your project. We will walk through all of them so you can estimate your scope before picking up the phone.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Finish Carpentry Costs in Camas, WA (2026)
							</h2>
							<div className="space-y-4">
								{[
									{
										scope: "Baseboard installation (paint-grade MDF)",
										desc: "Standard 3.5\" profile, all cuts, labor and material included",
										range: "$2–$4/lin ft",
									},
									{
										scope: "Crown molding (standard 3.5\" profile)",
										desc: "Inside corners, outside corners, crown returns at walls",
										range: "$5–$8/lin ft",
									},
									{
										scope: "Crown molding (large profile, 5\"+ or cove)",
										desc: "Vaulted ceilings, compound angle cuts, high-ceiling rooms",
										range: "$8–$14/lin ft",
									},
									{
										scope: "Door & window casing (per opening)",
										desc: "Colonial or craftsman casing, both jamb legs and head",
										range: "$175–$375",
									},
									{
										scope: "Wainscoting — MDF panels",
										desc: "Raised or flat panel, paint-grade, 36–42\" installation height",
										range: "$6–$10/sq ft",
									},
									{
										scope: "Wainscoting — beadboard",
										desc: "Classic V-groove beadboard with cap rail and base molding",
										range: "$5–$8/sq ft",
									},
									{
										scope: "Chair rail",
										desc: "Single-piece chair rail with coped inside corners",
										range: "$3–$6/lin ft",
									},
									{
										scope: "Built-in shelving or entertainment center",
										desc: "Custom-built alcove shelving or media wall, painted MDF or plywood",
										range: "$85–$175/lin ft",
									},
									{
										scope: "Stair railing — newel posts and balusters",
										desc: "Replacement or new installation, per stair section",
										range: "$400–$1,200",
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
								What Affects the Price in Camas
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Ceiling Height",
										body: "Camas homes — especially in Prune Hill and Lacamas Shores — commonly have 9-foot, 10-foot, or vaulted ceilings. Crown molding on a vaulted ceiling requires compound angle cuts that are more difficult than standard 90-degree room cuts. Outside corners and crown returns on tall rooms add setup time and complexity, which is reflected in the rate per linear foot.",
									},
									{
										title: "Profile Complexity",
										body: "A simple 3.5\" colonial crown is fast to cut and install. A built-up crown with multiple pieces — base cap, crown body, and bed molding — is three times the labor. Similarly, a craftsman-style built-up baseboard with a base cap and shoe molding takes significantly longer than a single-piece ranch base. More profiles means more cuts, more coping, and more time on the job.",
									},
									{
										title: "Number of Inside and Outside Corners",
										body: "Each corner requires a precision miter or coped cut. Open-plan Camas homes with long uninterrupted runs and few corners are faster and cheaper per foot. Traditional floor plans with multiple rooms, door openings, and bump-outs have far more corners. Outside corners are particularly labor-intensive — each one requires two miters that must close without a gap.",
									},
									{
										title: "Material Choice",
										body: "Paint-grade MDF is the most affordable option and finishes beautifully when painted. Clear poplar is solid wood that paints cleanly and is more durable in high-traffic areas, at a higher material cost. Solid hardwood (oak, maple) is premium and required for stained finishes. Custom-milled profiles add the most cost but let you match discontinued or unique existing trim exactly.",
									},
									{
										title: "Existing Trim Removal",
										body: "Older Camas homes built in the 1990s–early 2000s often have thin builder-grade trim — 2.5\" finger-jointed baseboard and plain colonial casing — painted over multiple times. Removing it cleanly without damaging the drywall face takes care and time. Demo is usually 1–2 hours per room and is included in the overall project cost.",
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

						{/* DARK INSIGHT SECTION */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Why Camas Homes Are Ideal for Carpentry Upgrades
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Prune Hill and Lacamas Shores homes from the 1990s–2000s era were built with builder-grade trim as the standard package. Crown molding often was not included at all, baseboards are typically thin 2.5" profiles, and door casings are plain colonial — functional but unremarkable. The homes themselves are well-built and well-maintained. The bones are solid.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								What most Camas homeowners want is a trim package that matches the actual quality of the house and the expectations of the neighborhood. Custom carpentry is one of the highest ROI interior upgrades available in Camas because the neighborhood comps support it and buyers expect it. A Prune Hill home with crown molding throughout shows meaningfully differently than one without — and that difference registers with buyers the moment they walk in the front door.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								We regularly complete full-home trim packages in Camas: baseboard replacement throughout, crown molding on the main floor and primary suite, wainscoting in the dining room or entry, and casing upgrades on every door and window. These projects typically run $8,000–$18,000 for a 2,200–2,800 sq ft home, and they consistently generate strong pre-sale ROI in the Camas market where buyers pay attention to interior finish quality.
							</p>
						</div>

						{/* TIPS */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Tips Before You Start a Trim Project in Camas
							</h2>
							<ul className="space-y-3">
								{[
									"Measure your linear footage before calling for a quote — add all wall lengths in each room and subtract door openings (each about 3.5 feet)",
									"Decide on a profile style before your estimate — having a photo or sample shortens the decision process significantly",
									"If your ceilings are vaulted or above 9 feet, mention it upfront — it affects the per-foot rate and install time",
									"Batch rooms together — doing three rooms in one visit costs less per foot than scheduling three separate visits",
									"Ask about paint-grade MDF vs. stain-grade solid wood during your estimate — it is the biggest single material cost variable",
									"If you plan to repaint the walls anyway, prime the walls first before trim goes in — cutting in against fresh trim is cleaner than working around existing paint",
								].map((tip) => (
									<li key={tip} className="flex gap-3 text-gray-700">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
										{tip}
									</li>
								))}
							</ul>
						</div>

						{/* SERVICE LINK */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Ready to upgrade your Camas home&apos;s trim?</p>
								<p className="text-gray-600 text-sm">Licensed, insured finish carpentry in Camas, WA — free written estimates before any work begins.</p>
							</div>
							<Link
								href="/services/finish-carpentry"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								View Service <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* FAQ */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-3">
								{faqs.map((faq, i) => (
									<details key={i} className="group border border-gray-200 rounded-2xl overflow-hidden">
										<summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-black text-[#1F2E2B] bg-white hover:bg-[#F8F6F3] transition-colors list-none">
											{faq.q}
											<ArrowRight className="w-4 h-4 shrink-0 text-[#2D5A3D] rotate-90 group-open:rotate-[270deg] transition-transform" />
										</summary>
										<div className="px-6 pb-6 pt-2 bg-white">
											<p className="text-gray-600 leading-relaxed">{faq.a}</p>
										</div>
									</details>
								))}
							</div>
						</div>

						{/* SOURCES */}
						<div className="border-t border-gray-200 pt-8 space-y-2">
							<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sources &amp; Methodology</p>
							<ul className="space-y-1 text-xs text-gray-400">
								<li>2026 Clark County market rates based on NORBILT project data and supplier pricing, August 2026</li>
								<li>Lumber pricing reflects 2026 Canadian softwood tariff impact — material costs are up 12–18% vs. 2024</li>
								<li>Camas housing data sourced from Clark County Assessor records and current MLS comparables</li>
								<li>WA contractor licensing requirements: Washington State Department of Labor &amp; Industries (L&amp;I.wa.gov)</li>
							</ul>
						</div>

						{/* NEARBY CITIES */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								We Also Serve
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
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
							Get a Trim Estimate for Your Camas Home
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Crown molding, baseboards, wainscoting, and built-ins installed to a standard that fits the Camas market. Free written estimates, same-week scheduling throughout Clark County.
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
