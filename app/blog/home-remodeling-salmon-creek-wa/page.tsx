import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Salmon Creek WA | Costs & Contractors (2026) | NORBILT",
	description:
		"Home remodeling in Salmon Creek WA — real 2026 costs for bathroom remodels, kitchen updates, and finish carpentry in Mount Vista, Salmon Creek Estates, and Felida Ridge. Licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/home-remodeling-salmon-creek-wa",
	},
	openGraph: {
		title: "Home Remodeling Salmon Creek WA | 2026 Cost Guide | NORBILT",
		description:
			"2026 remodeling costs in Salmon Creek WA — bathroom and kitchen updates, LVP flooring, and finish carpentry upgrades from a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/home-remodeling-salmon-creek-wa",
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
		q: "How much does a home remodel cost in Salmon Creek WA?",
		a: "Salmon Creek is priced at standard Clark County rates for 2026. A cosmetic bathroom refresh runs $800–$2,500. A full bathroom remodel runs $8,000–$20,000. A full kitchen remodel runs $12,000–$30,000. Flooring replacement for 1,000 sq ft runs $3,500–$8,000. These are mid-grade material costs — finish selection affects where within the range you land.",
	},
	{
		q: "Do I need a permit for remodeling in Salmon Creek?",
		a: "Salmon Creek is unincorporated Clark County, so all permits go through Clark County Community Development at 564-397-2375 — not a city office. Cosmetic work (paint, flooring, fixture swaps) typically doesn't require a permit. Structural changes, full bathroom gut remodels with plumbing work, and kitchen layout changes generally do. NORBILT handles permit coordination.",
	},
	{
		q: "What's the most cost-effective remodel for a 1990s Salmon Creek home?",
		a: "For a house built in the 1990s or early 2000s, the highest return-per-dollar projects are usually a bathroom cosmetic refresh or tub-to-shower conversion ($800–$8,000), LVP flooring to replace worn carpet ($3,500–$8,000 for 1,000 sq ft), and a finish carpentry upgrade — new base molding, door casing, and crown molding in the main living area ($2,500–$5,000). These three address the most visually dated elements without the cost of a full gut remodel.",
	},
	{
		q: "How do I find a licensed remodeling contractor in Salmon Creek WA?",
		a: "Verify any contractor at the WA Department of Labor & Industries website before signing. NORBILT holds WA General Contractor License #NORBI**741CS and is bonded and insured. Salmon Creek is part of our core Clark County service area. Call Andrey at (360) 216-9920 for a free on-site estimate.",
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
								headline: "Home Remodeling Salmon Creek WA: Costs, Contractors & What to Expect (2026)",
								description:
									"Real 2026 costs for home remodeling in Salmon Creek WA — bathroom and kitchen updates, LVP flooring, and finish carpentry upgrades from a licensed Clark County contractor.",
								url: "https://www.norbilt.com/blog/home-remodeling-salmon-creek-wa",
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
									{ "@type": "ListItem", position: 3, name: "Home Remodeling Salmon Creek WA", item: "https://www.norbilt.com/blog/home-remodeling-salmon-creek-wa" },
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
							<span className="text-white/50 text-xs font-medium">Salmon Creek WA</span>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							Home Remodeling in Salmon Creek WA:<br />
							<span className="text-[#FFB800]">Costs, Contractors & What to Expect</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Salmon Creek's suburban corridor — running north from Vancouver along I-5 — is predominantly
							1990s and early 2000s construction. These homes are entering their third decade, and the gap
							between how they were finished and how owners want them to look has grown wide enough that
							remodeling makes obvious financial sense.
						</p>
					</div>
				</section>

				<article className="max-w-3xl mx-auto px-6 py-16 space-y-14">

					{/* Why remodeling now */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Salmon Creek Homeowners Are Remodeling Now
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Most of the residential stock in Salmon Creek — covering neighborhoods like Mount Vista,
							Salmon Creek Estates, and Queensborough — was built between 1990 and 2005. That puts these
							homes at 20–35 years old. That's a specific age: old enough that the original finishes have
							run their useful life, but not so old that the structure is in question. The bones are solid;
							the surfaces are the problem.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The 1990s builder standard in Clark County meant: 2¼" base molding, hollow-core doors,
							cultured marble tub surrounds, laminate countertops, and oak cabinetry with beveled raised
							panels. It also meant carpet in every room except the kitchen and bathrooms. None of that
							holds up aesthetically over 20–30 years, and most of it has worn functionally as well.
							Carpet that was installed in 1998 has had its service life. Cultured marble surrounds crack
							and stain. Laminate countertops swell at the seams.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The equity picture in Salmon Creek also supports remodeling investment. Home values in the
							north Vancouver corridor have risen significantly. Owners who purchased in the late 1990s
							or 2000s have substantial equity to work with, and a targeted $10,000–$25,000 remodel on
							a house worth $550,000–$650,000 is a different calculation than the same spend on a house
							worth $200,000.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The older Clineline area and parts of Felida Ridge include some 1980s construction — similar
							profile but with a few more years on it. Those homes are hitting the age where things like
							original bathroom tile and grout genuinely need replacement, not just re-caulking.
						</p>
					</section>

					{/* Cost table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							2026 Home Remodeling Costs in Salmon Creek WA
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These are current Clark County market rates for 2026. Salmon Creek pricing tracks with the
							broader county — location within Clark County doesn't meaningfully affect labor rates or
							material costs.
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
							Mid-grade material pricing. Premium tile, custom cabinet lines, or stone countertops push
							toward the high end. Basic cosmetic work with standard materials lands at the low end.
						</p>
					</section>

					{/* What's most common */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Most Common Projects in Salmon Creek
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Given the housing stock, the projects we handle most often in this area follow a predictable pattern.
							These are all targeted cosmetic investments — not whole-house gut jobs:
						</p>
						<ul className="space-y-3 pl-4">
							{[
								{
									title: "Bathroom cosmetic refreshes and full remodels",
									detail: "The bathroom is the most requested project across Salmon Creek. Many owners start with a cosmetic refresh: swap the vanity, replace the toilet, recaulk, update fixtures. $800–$2,500 and 2–4 days. When the surround is cracked or the tile is too far gone to clean up, the conversation shifts to a full gut — $8,000–$20,000 and 1–3 weeks. We do both.",
								},
								{
									title: "Kitchen countertop and backsplash updates",
									detail: "Full kitchen gut remodels happen, but they're not the most common call in Salmon Creek. More often, owners want to replace laminate countertops with quartz, add a tile backsplash, and update the faucet. That scope runs $3,000–$7,000 and takes 1–2 weeks (countertop fabrication takes 5–10 days after template). It changes the look of the kitchen without touching the cabinets.",
								},
								{
									title: "Finish carpentry upgrades",
									detail: "Builder-grade base molding in a 1995 house is typically 2¼\" colonial or a flat ranch profile at ⅜\" thick. Upgrading to a 3½\" or 4\" base with a proper profile, new door casing, and crown molding in the main areas changes the feel of the house significantly. Whole-home trim packages run $2,500–$5,000 for a typical 1,800–2,200 sq ft Salmon Creek two-story.",
								},
								{
									title: "LVP flooring to replace carpet",
									detail: "This is the single most common standalone project we see in Salmon Creek. Carpet from the late 1990s or early 2000s is done — even if it looks okay, it's holding odors and wear that no cleaning will fix. LVP (luxury vinyl plank) is the most common replacement: it handles PNW moisture better than solid hardwood, installs over existing subfloor in most cases, and looks clean in any finish level. $3,500–$8,000 for 1,000 sq ft.",
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
							What These Homes Are Like to Work In
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							One of the advantages of working in Salmon Creek's 1990s–2000s housing stock is that these
							homes were built with modern structural standards, modern rough-in locations, and modern
							electrical. We're not fighting galvanized plumbing or undersized electrical panels — those
							are more common in the older Vancouver neighborhoods. Permit work is straightforward.
							The subfloors are mostly in good shape. The framing is clean.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							The issues we find more often are cosmetic degradation and some deferred maintenance.
							Caulk around tubs and windows that should have been replaced 5 years ago. Bathroom exhaust
							fans that were undersized from installation and never moved enough air. Subfloor squeaks
							from deck screws that were never driven in the right pattern. None of these are expensive
							to fix — but they need to be addressed as part of a remodel rather than tiled over.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							In Mount Vista and Salmon Creek Estates specifically, the houses tend to be larger two-story
							plans — 1,800 to 2,400 sq ft — with a primary bath upstairs and a guest bath on the main
							floor. We often see owners do both baths in one project to reduce the scheduling disruption
							and get a consistent look throughout.
						</p>
					</section>

					{/* Contractor section */}
					<section className="space-y-4">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							How to Choose a Contractor in Salmon Creek
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Salmon Creek is unincorporated Clark County — permits go through Clark County Community
							Development at 564-397-2375, not through the City of Vancouver or any municipality.
							Make sure your contractor knows that and has experience pulling Clark County permits.
						</p>
						<p className="text-[#2C3E3A] leading-relaxed">
							Beyond jurisdiction: verify the WA contractor license at L&I before signing. Get a written
							estimate, not a verbal quote. Confirm the payment schedule in writing — a contractor asking
							for more than 50% upfront before work begins is a red flag. And ask specifically what
							happens if something unexpected is found during demo — a legitimate contractor will have
							a clear change-order process.
						</p>
						<ul className="space-y-2 pl-4">
							{[
								"Verify WA license at the L&I contractor lookup",
								"Get written pricing before any work begins",
								"Confirm payment schedule — 30/40/30 is standard",
								"Ask about permit coordination for Clark County",
								"Check Google reviews from Clark County homeowners",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 text-[#2C3E3A] text-sm leading-relaxed">
									<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2 shrink-0" />
									{item}
								</li>
							))}
						</ul>
						<p className="text-[#2C3E3A] leading-relaxed">
							NORBILT holds WA General Contractor License <strong>#NORBI**741CS</strong>, is bonded and insured,
							and serves Salmon Creek as part of our north Clark County service area. Andrey can be reached
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
							Ready to Remodel in Salmon Creek?
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
								{ href: "/blog/bathroom-remodel-cost-clark-county-wa", label: "Bathroom Remodel Cost in Clark County WA" },
								{ href: "/blog/kitchen-remodel-cost-clark-county-wa", label: "Kitchen Remodel Cost in Clark County WA" },
								{ href: "/locations/salmon-creek", label: "NORBILT Services in Salmon Creek WA" },
								{ href: "/blog/home-remodeling-felida-wa", label: "Home Remodeling in Felida WA" },
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
