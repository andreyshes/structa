import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Ridgefield WA | Costs & Contractors (2026) | NORBILT",
	description:
		"Planning a home remodel in Ridgefield WA? See real 2026 costs for bathroom remodels, kitchen updates, and finish carpentry in Union Ridge, Bellwood, and Hillhurst. Licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-ridgefield-wa",
	},
	openGraph: {
		title: "Home Remodeling Ridgefield WA | 2026 Cost Guide | NORBILT",
		description:
			"Real 2026 costs for home remodeling in Ridgefield WA — bathrooms, kitchens, finish carpentry, and flooring from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-ridgefield-wa",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTable = [
	{ project: "Bathroom Cosmetic Refresh", low: 800, high: 2500, timeline: "2–4 days" },
	{ project: "Full Bathroom Remodel", low: 8000, high: 20000, timeline: "1–3 weeks" },
	{ project: "Tub-to-Shower Conversion", low: 3500, high: 8000, timeline: "3–7 days" },
	{ project: "Kitchen Cosmetic Refresh", low: 500, high: 2000, timeline: "1–3 days" },
	{ project: "Full Kitchen Remodel", low: 12000, high: 30000, timeline: "2–5 weeks" },
	{ project: "Finish Carpentry (whole home)", low: 2500, high: 7000, timeline: "3–7 days" },
	{ project: "Flooring (1,000 sq ft)", low: 3500, high: 8000, timeline: "2–4 days" },
];

const faqs = [
	{
		q: "How much does a home remodel cost in Ridgefield WA?",
		a: "Costs in Ridgefield are consistent with Clark County pricing. A cosmetic bathroom refresh runs $800–$2,500. A full bathroom remodel costs $8,000–$20,000. A full kitchen remodel ranges from $12,000 to $30,000. Finish carpentry for a whole home runs $2,500–$7,000. Get a written on-site estimate for your specific scope.",
	},
	{
		q: "Do I need a permit for a remodel in Ridgefield WA?",
		a: "Permits in Ridgefield depend on location. Homes within city limits go through the City of Ridgefield Community Development office. Homes in unincorporated areas surrounding Ridgefield — which includes parts of Bellwood and Union Ridge — go through Clark County Community Development. Cosmetic work like flooring, paint, and fixture swaps typically doesn't require permits. Structural changes, full bathroom gut remodels, and plumbing moves generally do. NORBILT handles permit coordination when required.",
	},
	{
		q: "What projects are most common in Ridgefield's newer subdivisions?",
		a: "In neighborhoods like Union Ridge and Bellwood — built mostly 2010 to present — the most common projects are finish carpentry upgrades (builder-grade trim gets replaced with thicker profiles, crown molding added), master shower tile upgrades, and carpet replacement with LVP or hardwood. These are homes built well but finished to a builder standard, and owners are putting money into finishes that should have been there from the start.",
	},
	{
		q: "How do I find a licensed remodeling contractor in Ridgefield?",
		a: "Verify any contractor's Washington license number at the WA Department of Labor & Industries website before signing anything. NORBILT holds WA General Contractor License #NORBI**741CS, is bonded and insured, and serves Ridgefield and all of Clark County. Call Andrey directly at (360) 216-9920 to schedule a free on-site estimate.",
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
								headline: "Home Remodeling Ridgefield WA: Costs, Contractors & What to Expect (2026)",
								description:
									"Real 2026 costs for home remodeling in Ridgefield WA — bathroom remodels, kitchen updates, finish carpentry upgrades, and flooring from a licensed Clark County contractor.",
								url: "https://www.norbilt.com/blog/home-remodeling-ridgefield-wa",
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
									{ "@type": "ListItem", position: 3, name: "Home Remodeling Ridgefield WA", item: "https://www.norbilt.com/blog/home-remodeling-ridgefield-wa" },
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
							<span className="text-white/50 text-xs font-medium">Ridgefield WA</span>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							Home Remodeling in Ridgefield WA:<br />
							<span className="text-[#FFB800]">Costs, Contractors & What to Expect</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Ridgefield has two distinct housing markets sitting side by side: newer subdivisions built to
							builder spec in the last 15 years, and an older townsite and Hillhurst corridor with homes
							going back to the 1940s. Both have active remodeling markets — for different reasons.
						</p>
					</div>
				</section>

				<article className="max-w-3xl mx-auto px-6 py-16 space-y-14">

					{/* Why Ridgefield is remodeling */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Ridgefield Homeowners Are Remodeling Now
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Ridgefield has been one of the fastest-growing cities in Clark County over the past decade.
							Neighborhoods like Union Ridge and Bellwood saw heavy construction from roughly 2010 through
							the mid-2020s — tract homes and townhomes built quickly, with builder-grade finishes throughout.
							Those finishes hold up functionally but not aesthetically: hollow-core doors, thin base molding,
							laminate countertops, and carpet from the floor to the ceiling.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Owners who've been in these homes for 5–10 years are hitting the point where the gap between
							what they paid for the house and what the finishes look like has grown wide enough to be
							frustrating. A full finish carpentry package — replacing all the builder-grade trim, adding crown
							molding, upgrading to solid-core interior doors — can be done for $2,500–$7,000 and changes
							the feel of a house more than most other single investments.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							On the older end of town — the Ridgefield Townsite, Hillhurst, and South Ridgefield — the homes
							are 1940s through 1970s construction. These are smaller, well-built houses that need more
							traditional repair and renovation work: updated bathrooms with original tile, kitchens with
							their original layout and fixtures, and the usual deferred maintenance of a 50–80 year old house.
							The projects there are more involved and the budgets tend to run higher.
						</p>
					</section>

					{/* Cost table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							2026 Home Remodeling Costs in Ridgefield WA
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These ranges reflect what projects actually cost in Clark County in 2026. Pricing in Ridgefield
							is consistent with the broader Clark County market — there's no meaningful premium or discount
							for the Ridgefield zip code itself.
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
							and conditions found during demo can push toward the high end. Get a written estimate for your specific project.
						</p>
					</section>

					{/* Newer homes section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Most Common Projects in Union Ridge and Bellwood
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							The newer subdivisions in north Ridgefield share a common profile: solid construction, builder-grade
							finishes, and owners who've been there long enough to want something better. The projects we see
							most often in these neighborhoods:
						</p>
						<ul className="space-y-3 pl-4">
							{[
								{
									title: "Finish carpentry upgrades",
									detail: "Replacing thin 2¼\" base molding with a 3½\" or 4\" colonial profile, adding crown molding to main living areas, upgrading door casing. A whole-home trim package typically runs $2,500–$5,000 for a 1,500–2,000 sq ft house.",
								},
								{
									title: "Master shower tile",
									detail: "Builder tub surrounds get replaced with custom tile shower conversions. A tub-to-shower conversion with tiled surround and frameless glass door runs $4,500–$8,000. It's one of the highest-impact changes per dollar spent.",
								},
								{
									title: "Carpet to LVP or hardwood",
									detail: "Carpet from 2012 is due for replacement. Most owners in these neighborhoods are going to luxury vinyl plank (LVP) for main areas — it's durable, warm-looking, and handles the PNW humidity better than solid hardwood. Flooring replacement runs $3,500–$8,000 for 1,000 sq ft depending on material and subfloor prep needed.",
								},
								{
									title: "Drywall settlement cracks",
									detail: "Newer construction settles. Hairline cracks at corners and ceiling seams are common in Ridgefield homes built in the mid-2010s. We repair, texture-match, and paint. Small crack repairs are a half-day job.",
								},
							].map((item) => (
								<li key={item.title} className="bg-white border border-[#2C3E3A]/8 rounded-xl p-5">
									<p className="font-black text-[#1F2E2B] text-sm mb-1">{item.title}</p>
									<p className="text-sm text-[#2C3E3A]/80 leading-relaxed">{item.detail}</p>
								</li>
							))}
						</ul>
					</section>

					{/* Older homes section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Older Ridgefield Homes: Townsite, Hillhurst & South Ridgefield
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							The original Ridgefield Townsite and the Hillhurst area have a different character entirely.
							Many of these homes were built between 1940 and 1975 — smaller footprints, plaster or older
							drywall, original bathroom tile that's now 50+ years old, and kitchens that predate modern
							layouts. They're often owned by long-term residents or buyers who purchased specifically for
							the lot size and location.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Remodeling here means working with what the house is, not fighting it. Original cast-iron tubs
							can be reglazed or removed depending on preference. Original hardwood floors under carpet are
							a frequent find — refinishing rather than replacing is often the right call. Kitchen layouts
							in these homes are small and constrained, so the question is often whether to open the layout
							(which may involve structural work and a beam) or work within it.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Budget expectations should be set accordingly. A full bathroom gut in an older home where the
							subfloor needs reinforcing, the plumbing needs updating, and the tile is original to 1965
							will run at the higher end of the $8,000–$20,000 range. These projects take longer and involve
							more unknowns than a straightforward remodel in newer construction.
						</p>
					</section>

					{/* Contractor section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Remodeling Contractor in Ridgefield
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Washington State requires a general contractor license for remodeling work above $500. That
							license is verifiable at the WA Department of Labor and Industries website — look up any
							contractor before signing a contract. An unlicensed contractor has no bond and carries no
							required insurance. If work fails or the contractor disappears, you have no recourse.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Permit jurisdiction in Ridgefield matters. If your home is inside city limits, permits go
							through the City of Ridgefield Community Development office. If you're in the unincorporated
							areas around the city — which includes portions of Bellwood and some properties off Hillhurst
							Road — permits go through Clark County Community Development. We handle the determination and
							coordination as part of the job.
						</p>
						<ul className="space-y-2 pl-4">
							{[
								"Verify WA license number at the L&I contractor lookup before hiring",
								"Get a written estimate — not a verbal quote — before signing",
								"Confirm who handles permit coordination (contractor or homeowner)",
								"Ask specifically about experience with Ridgefield permit jurisdictions",
								"Check Google reviews from actual homeowners in Clark County",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 text-[#2C3E3A] text-sm leading-relaxed">
									<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2 shrink-0" />
									{item}
								</li>
							))}
						</ul>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT holds WA General Contractor License <strong>#NORBI**741CS</strong>, is bonded and insured,
							and provides written flat-rate pricing before any project starts. Andrey can be reached at{" "}
							<a href="tel:+13602169920" className="text-[#2D5A3D] font-bold hover:underline">(360) 216-9920</a>.
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
							Ready to Remodel in Ridgefield?
						</h2>
						<p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
							Get a free on-site estimate this week. We walk your home, assess the scope, and give you
							written pricing before anything starts.
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
								(360) 216-9920
							</a>
						</div>
					</section>

					{/* Related reading */}
					<section>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ href: "/blog/bathroom-remodel-cost-ridgefield-wa", label: "Bathroom Remodel Cost in Ridgefield WA" },
								{ href: "/blog/kitchen-remodel-cost-ridgefield-wa", label: "Kitchen Remodel Cost in Ridgefield WA" },
								{ href: "/locations/ridgefield", label: "NORBILT Services in Ridgefield WA" },
								{ href: "/blog/home-remodeling-battle-ground-wa", label: "Home Remodeling in Battle Ground WA" },
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
