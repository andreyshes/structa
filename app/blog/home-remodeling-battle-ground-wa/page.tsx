import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Battle Ground WA | Costs, Contractors & What to Expect (2026)",
	description:
		"Planning a home remodel in Battle Ground WA? See real 2026 costs for kitchen remodels, bathroom renovations, and full home projects. Licensed contractor serving Battle Ground and Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-battle-ground-wa",
	},
	openGraph: {
		title: "Home Remodeling Battle Ground WA | 2026 Cost Guide",
		description:
			"Real 2026 costs for home remodeling in Battle Ground WA. Kitchen, bathroom, and full home renovation pricing from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-battle-ground-wa",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTable = [
	{ project: "Bathroom Cosmetic Refresh", low: 800, high: 2500, timeline: "3–5 days" },
	{ project: "Full Bathroom Remodel", low: 8000, high: 18000, timeline: "1–3 weeks" },
	{ project: "Tub-to-Shower Conversion", low: 3500, high: 8000, timeline: "3–7 days" },
	{ project: "Kitchen Cosmetic Refresh", low: 500, high: 2000, timeline: "2–4 days" },
	{ project: "Full Kitchen Remodel", low: 10000, high: 30000, timeline: "2–5 weeks" },
	{ project: "Finish Carpentry (whole home)", low: 2500, high: 7000, timeline: "3–7 days" },
	{ project: "Flooring Installation (1,000 sq ft)", low: 3500, high: 8000, timeline: "2–4 days" },
	{ project: "Multi-Room Renovation", low: 20000, high: 60000, timeline: "4–10 weeks" },
];

const faqs = [
	{
		q: "How much does a home remodel cost in Battle Ground WA?",
		a: "Costs range widely based on scope. A cosmetic bathroom refresh runs $800–$2,500. A full bathroom remodel costs $8,000–$18,000. A full kitchen remodel runs $10,000–$30,000. Whole-home renovations are scoped per project — typically starting at $20,000 for multi-room work.",
	},
	{
		q: "Do I need permits for a home remodel in Battle Ground?",
		a: "Cosmetic work like painting, flooring, and fixture swaps typically don't require permits. Structural changes, kitchen layout changes, or full bathroom gut remodels may require Clark County permits. NORBILT handles permit coordination when required.",
	},
	{
		q: "How do I find a licensed remodeling contractor in Battle Ground WA?",
		a: "Look for a WA-licensed general contractor (verifiable at L&I). NORBILT holds WA license #NORBI**741CS and serves all of Battle Ground and Clark County. Call (360) 216-9920 for a free estimate.",
	},
	{
		q: "How long does a kitchen or bathroom remodel take in Battle Ground?",
		a: "A bathroom remodel typically takes 1–3 weeks. A kitchen remodel runs 2–5 weeks depending on cabinet lead times and scope. We give you a written timeline before work begins.",
	},
];

export default function BlogPost() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "BlogPosting",
								headline: "Home Remodeling Battle Ground WA: Costs, Contractors & What to Expect (2026)",
								description:
									"Real 2026 costs for home remodeling in Battle Ground WA — kitchen remodels, bathroom renovations, and full home projects from a licensed Clark County contractor.",
								url: "https://www.norbilt.com/blog/home-remodeling-battle-ground-wa",
								datePublished: "2026-08-13",
								dateModified: "2026-08-13",
								author: { "@type": "Person", name: "Andrey", url: "https://www.norbilt.com/about" },
								publisher: {
									"@type": "Organization",
									name: "NORBILT",
									url: "https://www.norbilt.com",
									logo: { "@type": "ImageObject", url: "https://www.norbilt.com/og-image.jpg" },
								},
							},
							{
								"@type": "BreadcrumbList",
								itemListElement: [
									{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
									{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
									{ "@type": "ListItem", position: 3, name: "Home Remodeling Battle Ground WA", item: "https://www.norbilt.com/blog/home-remodeling-battle-ground-wa" },
								],
							},
							{
								"@type": "FAQPage",
								mainEntity: faqs.map((f) => ({
									"@type": "Question",
									name: f.q,
									acceptedAnswer: { "@type": "Answer", text: f.a },
								})),
							},
						],
					}),
				}}
			/>

			<div className="min-h-screen bg-[#FDFCFB]">
				{/* HERO */}
				<section className="pt-32 pb-16 bg-[#14201D]">
					<div className="max-w-3xl mx-auto px-6">
						<div className="flex flex-wrap gap-2 mb-6">
							<Link href="/blog" className="text-[#FFB800] text-xs font-black uppercase tracking-widest hover:underline">
								Blog
							</Link>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">Battle Ground WA</span>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							Home Remodeling in Battle Ground WA:<br />
							<span className="text-[#FFB800]">Costs, Contractors & What to Expect</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Battle Ground homeowners are remodeling at a strong pace in 2026 — driven by rising home values,
							aging housing stock, and a desire to stay put and upgrade rather than move. Here's what projects
							actually cost and what to expect from a licensed contractor in Clark County.
						</p>
					</div>
				</section>

				{/* BODY */}
				<article className="max-w-3xl mx-auto px-6 py-16 space-y-14">

					{/* Context */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Battle Ground Homeowners Are Remodeling Now
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Much of Battle Ground's residential stock was built in the 1990s and early 2000s — which means
							kitchens and bathrooms are now 20–30 years old. Builder-grade finishes from that era age poorly:
							cultured marble surrounds crack, laminate countertops swell, and oak cabinetry hasn't held up
							aesthetically the way tile and shaker-style have.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							At the same time, home values in Battle Ground have increased significantly over the past five years.
							That equity gives homeowners leverage — either to refinance and fund a remodel, or to recognize that
							putting $15,000 into a dated bathroom before selling can return $25,000 or more at closing.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT serves Battle Ground as part of our Clark County service area. We've completed kitchen remodels,
							bathroom renovations, and full home projects throughout the city — including neighborhoods near
							Yacolt Road, NW 10th Avenue, and the newer subdivisions off Grace Avenue.
						</p>
					</section>

					{/* Cost Table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							2026 Home Remodeling Costs in Battle Ground WA
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These ranges reflect real project costs in Clark County for 2026. Material prices and labor rates
							have stabilized after several volatile years — what you see below is what clients are actually paying.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-[#2C3E3A]/10">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Project</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Cost Range</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Timeline</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-[#2C3E3A]/8">
									{costTable.map((row, i) => (
										<tr key={row.project} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-5 py-4 font-semibold text-[#1F2E2B]">{row.project}</td>
											<td className="px-5 py-4 text-[#2C3E3A] font-bold">${row.low.toLocaleString()} – ${row.high.toLocaleString()}</td>
											<td className="px-5 py-4 text-[#2C3E3A]/70">{row.timeline}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-xs text-[#2C3E3A]/50 leading-relaxed">
							Ranges reflect contractor labor plus standard mid-grade materials. Premium materials, permit costs,
							and unexpected conditions (subfloor damage, mold, old plumbing) push costs toward the high end.
							Get a free on-site estimate for exact pricing.
						</p>
					</section>

					{/* Kitchen section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Kitchen Remodels in Battle Ground
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Kitchen remodels in Battle Ground range from a targeted cosmetic refresh ($500–$2,000) to a full gut
							remodel with custom cabinets and new layout ($20,000–$35,000+). The most common scope we see is a
							mid-range kitchen update: new countertops, tile backsplash, cabinet reface or replacement, and
							updated fixtures. That typically runs $8,000–$18,000 and takes 2–4 weeks.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Factors that push kitchen costs up include layout changes (moving the sink or island adds plumbing
							cost), appliance upgrades (not included in our ranges), and flooring extension into adjacent rooms.
						</p>
						<Link
							href="/blog/kitchen-remodel-cost-battle-ground-wa"
							className="inline-flex items-center gap-1 text-sm font-black text-[#2D5A3D] hover:underline uppercase tracking-wider"
						>
							See full Battle Ground kitchen remodel cost guide →
						</Link>
					</section>

					{/* Bathroom section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Bathroom Remodels in Battle Ground
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Bathroom remodels are the most requested project we handle in Battle Ground. The most common driver is
							an aging tub surround — either cultured marble that's cracked and stained, or old fiberglass that no
							longer cleans up. A tub-to-shower conversion resolves this at $3,500–$8,000 and modernizes the space entirely.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Full bathroom remodels — which take the room down to studs, replace all tile, install a new vanity,
							and update lighting and fixtures — run $8,000–$18,000 for a standard-size bath. Primary baths over
							100 sq ft or with a double vanity can run $18,000–$30,000+.
						</p>
						<Link
							href="/blog/bathroom-remodel-cost-battle-ground-wa"
							className="inline-flex items-center gap-1 text-sm font-black text-[#2D5A3D] hover:underline uppercase tracking-wider"
						>
							See full Battle Ground bathroom remodel cost guide →
						</Link>
					</section>

					{/* Choosing a contractor */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Remodeling Contractor in Battle Ground
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Washington State requires a general contractor license for remodeling work above $500. Before hiring
							anyone, verify their WA license number at the L&I contractor lookup. An unlicensed contractor leaves
							you without legal recourse if work goes wrong — and can void your homeowner's insurance.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Beyond licensing, look for:
						</p>
						<ul className="space-y-2 pl-4">
							{[
								"Written estimates before any work begins — not verbal quotes",
								"Flat-rate or fixed pricing, not open-ended hourly billing",
								"Google reviews from real local homeowners",
								"Experience with the specific type of work you need",
								"Clear communication about timeline and payment schedule",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 text-[#2C3E3A] text-sm leading-relaxed">
									<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2 shrink-0" />
									{item}
								</li>
							))}
						</ul>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT holds WA General Contractor License <strong>#NORBI**741CS</strong>, is bonded and insured,
							and provides written flat-rate pricing before any project starts. Andrey can be reached directly
							at <a href="tel:+13602169920" className="text-[#2D5A3D] font-bold hover:underline">(360) 216-9920</a>.
						</p>
					</section>

					{/* FAQ */}
					<section className="space-y-6">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Frequently Asked Questions
						</h2>
						<div className="space-y-6">
							{faqs.map((f) => (
								<div key={f.q} className="border-b border-[#2C3E3A]/10 pb-6">
									<h3 className="font-black text-[#1F2E2B] mb-2">{f.q}</h3>
									<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">{f.a}</p>
								</div>
							))}
						</div>
					</section>

					{/* CTA */}
					<section className="bg-[#1F2E2B] rounded-2xl p-8 text-center">
						<h2 className="text-2xl font-black text-white mb-3">
							Ready to Remodel in Battle Ground?
						</h2>
						<p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
							Get a free on-site estimate this week. We walk your home, assess the scope, and give you written pricing before anything starts.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
							>
								Get Instant Estimate
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
							>
								<span>(360) 216-9920</span>
							</a>
						</div>
					</section>

					{/* Related */}
					<section>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ href: "/blog/bathroom-remodel-cost-battle-ground-wa", label: "Bathroom Remodel Cost in Battle Ground WA" },
								{ href: "/blog/kitchen-remodel-cost-battle-ground-wa", label: "Kitchen Remodel Cost in Battle Ground WA" },
								{ href: "/blog/home-remodeling-clark-county-wa", label: "Home Remodeling in Clark County WA" },
								{ href: "/locations/battle-ground", label: "NORBILT Services in Battle Ground WA" },
							].map(({ href, label }) => (
								<Link
									key={href}
									href={href}
									className="group p-4 bg-[#F8F6F3] rounded-xl border border-gray-100 hover:border-[#2D5A3D] transition-colors"
								>
									<p className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{label}</p>
									<p className="text-xs font-black text-[#FFB800] uppercase tracking-widest mt-2">Read →</p>
								</Link>
							))}
						</div>
					</section>
				</article>
			</div>
		</>
	);
}
