import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Felida WA | Costs & Contractors (2026) | NORBILT",
	description:
		"Home remodeling in Felida WA — 2026 costs for bathroom remodels, kitchen upgrades, finish carpentry, and flooring in Felida Overlook, Lakeshore Park, and Erickson Farms. Licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-felida-wa",
	},
	openGraph: {
		title: "Home Remodeling Felida WA | 2026 Cost Guide | NORBILT",
		description:
			"2026 remodeling costs in Felida WA — bathrooms, kitchens, finish carpentry, and flooring from a licensed Clark County contractor serving northwest Vancouver.",
		url: "https://www.norbilt.com/blog/home-remodeling-felida-wa",
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
		q: "How much does a home remodel cost in Felida WA?",
		a: "Felida is priced at Clark County market rates. A bathroom cosmetic refresh runs $800–$2,500. A full bathroom remodel runs $8,000–$20,000. A full kitchen remodel runs $12,000–$30,000. Finish carpentry for a whole home runs $2,500–$7,000. Felida homeowners tend to invest in quality materials, so projects often land toward the middle or upper end of these ranges.",
	},
	{
		q: "Do I need a permit for remodeling in Felida?",
		a: "Felida is unincorporated Clark County, so all permits go through Clark County Community Development (564-397-2375). Cosmetic work — paint, flooring, fixture replacements — typically doesn't require a permit. Full bathroom gut remodels, plumbing moves, and structural changes do. NORBILT coordinates permits as part of the project.",
	},
	{
		q: "My Felida home was built in the 1980s or 1990s — what should I remodel first?",
		a: "At 30–40 years old, the first priorities are usually the bathrooms (original tile and fixtures, failing caulk) and the finish carpentry (thin builder-grade trim that's ready for replacement). Flooring is a close third — carpet from that era is past its service life. These three areas address the biggest visual impact per dollar. A full kitchen gut is typically a separate, larger project that comes later.",
	},
	{
		q: "How do I find a licensed remodeling contractor in Felida?",
		a: "Verify any contractor's WA license at the Department of Labor & Industries website. NORBILT holds WA General Contractor License #NORBI**741CS and serves Felida and all of northwest Clark County. Call Andrey at (360) 216-9920 for a free on-site estimate.",
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
								headline: "Home Remodeling Felida WA: Costs, Contractors & What to Expect (2026)",
								description:
									"Real 2026 costs for home remodeling in Felida WA — bathroom remodels, kitchen upgrades, finish carpentry, and flooring from a licensed Clark County contractor.",
								url: "https://www.norbilt.com/blog/home-remodeling-felida-wa",
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
									{ "@type": "ListItem", position: 3, name: "Home Remodeling Felida WA", item: "https://www.norbilt.com/blog/home-remodeling-felida-wa" },
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
							<span className="text-white/50 text-xs font-medium">Felida WA</span>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							Home Remodeling in Felida WA:<br />
							<span className="text-[#FFB800]">Costs, Contractors & What to Expect</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Felida is one of the more established residential communities in Clark County — large lots,
							mature landscaping, owner-occupied homes that have been well maintained. Most of the housing
							stock is from 1980 to 2000. That age window matters: these homes are hitting the point where
							the original bathrooms, kitchens, and trim work are ready for replacement, not just repair.
						</p>
					</div>
				</section>

				<article className="max-w-3xl mx-auto px-6 py-16 space-y-14">

					{/* Why remodeling now */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Felida Homeowners Are Remodeling Now
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							At 30–40 years old, a house has reached a particular threshold. Interior systems that were
							functional when installed are now at the end of their intended lifespan. Caulk in a 1985
							bathroom has been replaced once or twice, but the tile grout is original and cracking.
							The cultured marble surround is stained in ways that won't clean up. The vanity light bar
							with four globe bulbs is as dated as it gets. The kitchen countertops are a pattern from
							the mid-1990s that nobody would choose today.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							None of these things are structurally significant. The plumbing still works. The cabinets
							still function. But the gap between what these homes look like and what owners want them
							to look like has widened to the point where remodeling is the obvious choice.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The homeowner profile in Felida is specific: established families who have been in their
							homes for decades, or empty nesters who bought specifically for the neighborhood character
							and the lot sizes along Peters Road and beyond Lakeshore Park. These owners invest in
							quality and expect work to last another 20–30 years. They're not looking for the cheapest
							option — they're looking for the contractor who'll do it right.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT serves Felida as part of our northwest Clark County service area. The neighborhoods
							we work in regularly include Felida Overlook, Lakeshore Park, Erickson Farms, Felida Park,
							and Ridgecrest.
						</p>
					</section>

					{/* Cost table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							2026 Home Remodeling Costs in Felida WA
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These are Clark County market rates for 2026. Felida pricing is consistent with the broader
							county — the location doesn't create a premium. What does move costs within these ranges
							is material selection, and Felida homeowners often choose materials toward the upper half
							of what's available.
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
							Mid-grade material pricing. Large-format tile, custom cabinet lines, natural stone countertops,
							and engineered hardwood push toward the upper end. Get a written estimate for exact pricing
							based on your material selections.
						</p>
					</section>

					{/* Common projects */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Most Common Projects in Felida
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Given the 1980–2000 construction window and the ownership profile, the projects we see
							most often in Felida break down like this:
						</p>
						<ul className="space-y-3 pl-4">
							{[
								{
									title: "Full bathroom remodels",
									detail: "Original 1985–1995 bathrooms in Felida typically have 4\" ceramic floor tile, ceramic wall tile in the tub area, a cultured marble vanity top, and a light bar fixture. All of it is ready for replacement. A full gut — new tile floor and walls, new vanity and top, new shower or tub surround, updated fixtures and lighting — runs $8,000–$20,000 and takes 1–3 weeks. Primary baths in larger Felida homes can run to $25,000+ with premium tile and a frameless glass enclosure.",
								},
								{
									title: "Kitchen cabinet and countertop upgrades",
									detail: "Many Felida kitchens from this era have structurally sound cabinet boxes with dated doors and drawer fronts. A cabinet reface — keeping the boxes, replacing the doors, adding new hardware — runs $4,000–$8,000 and changes the look entirely without the cost of a full gut. If owners want a full replacement, that runs $12,000–$30,000 and includes new layout if desired. Countertop-only replacement — laminate to quartz or granite — is a $2,500–$5,000 project with a 1–2 week lead time for fabrication.",
								},
								{
									title: "Finish carpentry trim package upgrades",
									detail: "This is one of the most requested projects in Felida — and one of the most underappreciated. The builder-grade trim in a 1990 Felida home is typically ⅜\" thick with a basic colonial profile. Replacing it with a 3½\" or 4\" solid base and upgrading to a more substantial door casing, then adding crown molding in the main living areas, changes the feel of the house permanently. A whole-home trim package typically runs $3,500–$6,000 in a 2,000–2,500 sq ft Felida home.",
								},
								{
									title: "LVP flooring to replace carpet",
									detail: "Carpet installed in the 1990s or early 2000s has run its service life. Felida owners are replacing it with luxury vinyl plank (LVP) or engineered hardwood. LVP is more common for practical reasons — it handles PNW humidity better, installs faster, and runs $3,500–$6,000 for 1,000 sq ft with standard mid-grade planks. Engineered hardwood over existing subfloor runs $5,000–$8,000 for the same area.",
								},
							].map((item) => (
								<li key={item.title} className="bg-white border border-[#2C3E3A]/8 rounded-xl p-5">
									<p className="font-black text-[#1F2E2B] text-sm mb-1">{item.title}</p>
									<p className="text-sm text-[#2C3E3A]/80 leading-relaxed">{item.detail}</p>
								</li>
							))}
						</ul>
					</section>

					{/* Housing type detail */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Working in Felida's Housing Stock
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Felida homes built in the 1980s and 1990s are generally well-constructed — larger footprints,
							better lot coverage, and more original character than the tract developments that came later
							in Clark County. The framing is solid, the subfloors are typically in good shape, and the
							original plumbing and electrical — while dated — is usually functional.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							What changes with 1980s construction is the age of certain mechanical systems. Galvanized
							supply pipes were phased out through the 1980s, but a home built in 1982 may still have
							galvanized runs in certain areas. We check during the on-site estimate and call it out if
							there's something that warrants attention. A bathroom remodel is a reasonable opportunity
							to update supply lines if needed — it's far more expensive to do it later as a standalone
							project than when the walls are already open.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Caulking has also completed its lifespan in any Felida home from the 1980s or 1990s,
							regardless of how well-maintained the house appears. Anywhere water contacts a fixed
							surface — showers, tubs, countertop backsplashes, exterior window frames — needs to be
							re-evaluated as part of any remodel. We do this as a standard step, not an add-on.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The owner profile in Felida also affects how we approach projects. These homeowners know
							their houses well, have opinions about what they want, and aren't interested in being
							sold on options they didn't ask about. We scope what was requested, note anything we
							see that's worth addressing, and let the homeowner decide.
						</p>
					</section>

					{/* Contractor section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Remodeling Contractor in Felida
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Felida is unincorporated Clark County — all permits go through Clark County Community
							Development at 564-397-2375. Confirm that any contractor you're considering has experience
							pulling Clark County permits, not just city of Vancouver permits. The process is the same
							county-wide, but the office and fee schedule differ.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Washington requires a general contractor license for remodeling work above $500. Verify
							at the WA L&I website. Beyond licensing, the things that matter most for a 30-year-old
							Felida home are experience with this era of construction, a clear process for handling
							unexpected findings during demo, and written pricing before work starts.
						</p>
						<ul className="space-y-2 pl-4">
							{[
								"Verify WA contractor license at L&I before signing",
								"Get written pricing — not a verbal estimate",
								"Ask about experience with 1980s–1990s Clark County construction",
								"Confirm who pulls permits and coordinates Clark County inspection",
								"Get a clear explanation of how change orders work if something unexpected is found",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 text-[#2C3E3A] text-sm leading-relaxed">
									<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2 shrink-0" />
									{item}
								</li>
							))}
						</ul>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT holds WA General Contractor License <strong>#NORBI**741CS</strong>, is bonded and insured,
							and serves Felida and all of northwest Clark County. Andrey can be reached directly at{" "}
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
							Ready to Remodel in Felida?
						</h2>
						<p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
							Get a free on-site estimate this week. We walk your home, assess the scope, and give you
							written pricing before anything starts. No pressure, no obligation.
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
								{ href: "/blog/bathroom-remodel-cost-clark-county-wa", label: "Bathroom Remodel Cost in Clark County WA" },
								{ href: "/blog/finish-carpentry-cost-vancouver-wa", label: "Finish Carpentry Cost in Vancouver WA" },
								{ href: "/locations/felida", label: "NORBILT Services in Felida WA" },
								{ href: "/blog/home-remodeling-salmon-creek-wa", label: "Home Remodeling in Salmon Creek WA" },
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
