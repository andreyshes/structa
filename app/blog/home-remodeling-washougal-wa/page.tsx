import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Washougal WA | Costs & Contractors (2026) | NORBILT",
	description:
		"Home remodeling in Washougal WA — real 2026 costs for bathroom updates, moisture and water damage repair, and finish work in the Columbia River Gorge corridor. Licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-washougal-wa",
	},
	openGraph: {
		title: "Home Remodeling Washougal WA | 2026 Cost Guide | NORBILT",
		description:
			"2026 home remodeling costs in Washougal WA — bathrooms, moisture damage repair, and finish carpentry from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-washougal-wa",
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
		q: "Why do Washougal homes have more moisture problems than other parts of Clark County?",
		a: "Washougal sits at the western entrance to the Columbia River Gorge, which creates a specific microclimate: more wind-driven rain, higher ambient humidity, and more sustained wet conditions during the fall and winter than you'd see in Battle Ground or Salmon Creek. Caulk around windows, doors, and shower surrounds fails faster in these conditions. Slow leaks behind tile or around window frames that would take years to cause damage elsewhere can cause mold within months in a Gorge-adjacent home.",
	},
	{
		q: "How much does a bathroom remodel cost in Washougal?",
		a: "A cosmetic bathroom refresh — new fixtures, recaulk, vanity swap — runs $800–$2,500 and takes 2–4 days. A full bathroom gut remodel with new tile, vanity, shower conversion, and updated fixtures runs $8,000–$20,000 and takes 1–3 weeks. If moisture damage is found during demo (common in older Washougal homes), that adds remediation cost before the remodel work can begin.",
	},
	{
		q: "Do I need a permit for remodeling in Washougal WA?",
		a: "Permit jurisdiction depends on your address. Homes within Washougal city limits use the City of Washougal Community Development office (360-835-8501). Homes in unincorporated areas east of the city use Clark County Community Development. Cosmetic work generally doesn't require permits. Full bathroom remodels, kitchen layout changes, and anything involving structural or plumbing work typically does. NORBILT handles permit coordination as part of the project.",
	},
	{
		q: "How do I find a licensed contractor in Washougal?",
		a: "Verify any contractor's WA license at the Department of Labor & Industries website before signing. NORBILT holds WA General Contractor License #NORBI**741CS and serves Washougal and all of east Clark County. Call Andrey at (360) 216-9920 for a free on-site estimate.",
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
								headline: "Home Remodeling Washougal WA: Costs, Contractors & What to Expect (2026)",
								description:
									"Real 2026 costs for home remodeling in Washougal WA — bathroom updates, moisture damage repair, and finish carpentry from a licensed Clark County contractor.",
								url: "https://www.norbilt.com/blog/home-remodeling-washougal-wa",
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
									{ "@type": "ListItem", position: 3, name: "Home Remodeling Washougal WA", item: "https://www.norbilt.com/blog/home-remodeling-washougal-wa" },
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
							<span className="text-white/50 text-xs font-medium">Washougal WA</span>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							Home Remodeling in Washougal WA:<br />
							<span className="text-[#FFB800]">Costs, Contractors & What to Expect</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Washougal sits at the western edge of the Columbia River Gorge — a location that creates
							specific challenges for home maintenance and remodeling. Higher humidity, more wind-driven
							rain, and an older downtown housing stock make moisture management a central concern for
							many homeowners here.
						</p>
					</div>
				</section>

				<article className="max-w-3xl mx-auto px-6 py-16 space-y-14">

					{/* Why Washougal is remodeling */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Washougal Homeowners Are Remodeling Now
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Washougal has two housing populations with different remodeling drivers. Downtown Washougal
							and the River's Edge neighborhood include homes built between the 1940s and 1970s — some
							with original plumbing rough-ins, plaster walls, and bathroom fixtures that haven't been
							touched since installation. These homes are structurally sound but in need of the kind of
							interior updating that was deferred for decades.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Further east, in Lookout Ridge and Canyon Creek, the housing is from the 1990s through the
							early 2010s. These are larger homes with mountain and river views, and owners who've had
							them for 15–25 years and are ready to update kitchens and bathrooms that were installed
							during the builder-standard era of laminate countertops and cultured marble surrounds.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							What makes Washougal different from the rest of Clark County is the moisture environment.
							The Gorge creates a specific microclimate — more sustained wet conditions, higher humidity
							during fall and winter, and wind-driven rain that gets into places it wouldn't in Battle
							Ground or Ridgefield. Caulk around windows and shower surrounds fails faster here.
							Slow leaks that would take years to cause visible damage in a drier location can produce
							mold within a season. This isn't a reason to avoid remodeling — it's a reason to do it right.
						</p>
					</section>

					{/* Cost table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							2026 Home Remodeling Costs in Washougal WA
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These are Clark County market rates for 2026. Washougal doesn't carry a location premium
							or discount relative to the rest of the county. What does affect cost here is the higher
							likelihood of finding moisture damage during demo — that adds remediation expense before
							the actual remodel work can begin.
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
							Ranges reflect contractor labor plus standard mid-grade materials. In Washougal, budget for
							the possibility of moisture-related findings during demo — this is more common here than in
							inland Clark County areas.
						</p>
					</section>

					{/* Moisture section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Moisture & Water Damage: The Gorge Factor
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							This is the issue that comes up more in Washougal than anywhere else in our service area.
							The combination of older housing stock downtown and the Gorge's humidity creates conditions
							where water infiltration is more common and more consequential.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The most common scenario: a homeowner notices the grout is cracking or the caulk around the
							tub is pulling away. They want a cosmetic bathroom refresh. We open the wall and find mold
							behind the surround — sometimes minor surface mold, sometimes full framing involvement.
							At that point, the project changes. Remediation has to happen before we can tile over anything.
						</p>
						<div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-5 space-y-2">
							<p className="font-black text-[#1F2E2B] text-sm">What to watch for in a Washougal home:</p>
							<ul className="space-y-1">
								{[
									"Caulk that cracks or pulls away within 1–2 years of application",
									"Soft spots in drywall adjacent to windows or plumbing walls",
									"Visible staining along window sills or at the base of exterior walls",
									"Musty smell in bathrooms or below-grade spaces after wet weather",
									"Tile grout that's discoloring or cracking without obvious impact damage",
								].map((item) => (
									<li key={item} className="flex items-start gap-2 text-sm text-[#2C3E3A]/80 leading-relaxed">
										<span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-2 shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<p className="text-[#2C3E3A] leading-relaxed">
							These aren't signs of a badly built house — they're signs of a PNW house in a higher-humidity
							corridor that needs maintenance attention. We assess all of this during the on-site estimate.
							If there's a moisture issue that needs to be addressed as part of a remodel, we scope it
							separately so you know exactly what you're paying for remediation versus renovation.
						</p>
					</section>

					{/* Common projects */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Common Remodeling Projects in Washougal
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							The projects we handle most often in Washougal:
						</p>
						<ul className="space-y-3 pl-4">
							{[
								{
									title: "Bathroom updates in older downtown homes",
									detail: "Original 1950s–70s bathrooms with ceramic tile and cast iron tubs. Some owners want to preserve the period feel; others want a full conversion to a modern shower. Both are legitimate approaches. A tub-to-shower conversion runs $3,500–$8,000. A full gut remodel with all new tile, vanity, and fixtures runs $8,000–$20,000.",
								},
								{
									title: "Moisture and water damage repair",
									detail: "Behind-shower mold, window-adjacent drywall damage, and subfloor damage from slow leaks. We handle the remediation and the rebuild — you don't need a separate mold company and a separate contractor. Remediation scope depends on extent; we assess and price before any work starts.",
								},
								{
									title: "Window and door weatherization",
									detail: "For the Gorge environment specifically, window and door weatherstripping, flashing, and caulk maintenance matters more than in other parts of Clark County. We handle this as a standalone service or as part of a larger project.",
								},
								{
									title: "Finish carpentry on newer Lookout Ridge and Canyon Creek homes",
									detail: "Builder-grade trim in 1990s–2000s construction is ready to be upgraded. A whole-home trim package — new base molding, door casing, and crown molding in main areas — typically runs $2,500–$5,000.",
								},
							].map((item) => (
								<li key={item.title} className="bg-white border border-[#2C3E3A]/8 rounded-xl p-5">
									<p className="font-black text-[#1F2E2B] text-sm mb-1">{item.title}</p>
									<p className="text-sm text-[#2C3E3A]/80 leading-relaxed">{item.detail}</p>
								</li>
							))}
						</ul>
					</section>

					{/* Contractor section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Remodeling Contractor in Washougal
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Washington requires a general contractor license for work above $500. Verify at WA L&I before
							signing anything. In Washougal, there's an additional consideration: permit jurisdiction.
							Homes within city limits use the City of Washougal Community Development office at 360-835-8501.
							Homes in unincorporated Clark County east of Washougal use Clark County Community Development.
							Getting that wrong adds project delay.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							For moisture-related work specifically, ask contractors directly about their approach to
							mold discovery during demo. A contractor who says they'll just tile over it or frame around
							it is telling you something important. Remediation means removing the mold source and
							addressing the moisture pathway — not covering it up.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT holds WA General Contractor License <strong>#NORBI**741CS</strong>, is bonded and insured,
							and serves Washougal and all of east Clark County. Andrey can be reached at{" "}
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
							Ready to Remodel in Washougal?
						</h2>
						<p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
							Get a free on-site estimate this week. We walk your home, assess the scope — including
							any moisture concerns — and give you written pricing before anything starts.
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
								{ href: "/blog/handyman-services-washougal-wa", label: "Handyman Services in Washougal WA" },
								{ href: "/locations/washougal", label: "NORBILT Services in Washougal WA" },
								{ href: "/blog/home-remodeling-battle-ground-wa", label: "Home Remodeling in Battle Ground WA" },
								{ href: "/blog/bathroom-remodel-cost-clark-county-wa", label: "Bathroom Remodel Cost in Clark County WA" },
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
