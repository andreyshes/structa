import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathtub to Shower Conversion Cost in Clark County WA | Norbilt",
	description:
		"How much does a bathtub to shower conversion cost in Clark County WA? Real 2026 price ranges for tub-to-shower conversions in Vancouver, Camas, Ridgefield, and surrounding areas.",
	alternates: {
		canonical: "https://norbilt.com/blog/bathtub-to-shower-conversion-cost-clark-county-wa",
	},
	openGraph: {
		title: "Bathtub to Shower Conversion Cost in Clark County WA | Norbilt",
		description:
			"Real 2026 cost breakdown for tub-to-shower conversions in Clark County WA. Scope tiers, what drives the price, and what to watch out for.",
		url: "https://norbilt.com/blog/bathtub-to-shower-conversion-cost-clark-county-wa",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{
		scope: "Prefab / Alcove Insert",
		desc: "Remove tub, install prefab acrylic or fiberglass shower insert. Minimal tile work.",
		range: "$1,500 – $4,000",
		timeline: "1–2 days",
		best: "Budget-conscious, rental properties, straightforward alcove spaces",
	},
	{
		scope: "Tile Shower (Standard)",
		desc: "Remove tub, new cement board, tile walls and floor, niche, glass door or curtain.",
		range: "$4,000 – $9,000",
		timeline: "3–5 days",
		best: "Most Clark County homeowners — good quality, durable, resale-friendly",
	},
	{
		scope: "Tile Shower + Plumbing Upgrade",
		desc: "All of above plus new valve, showerhead, hand wand, or barrier-free layout.",
		range: "$6,000 – $14,000",
		timeline: "4–7 days",
		best: "Aging-in-place, walk-in shower, rain head, or moving drain location",
	},
	{
		scope: "Custom Walk-In / Wet Room",
		desc: "Full wet room or large-format tile, frameless glass, linear drain, heated floor.",
		range: "$12,000 – $25,000+",
		timeline: "1–2 weeks",
		best: "Primary suite upgrade, high-end finish, maximum resale value",
	},
];

const costByComponent = [
	{ item: "Demo and tub removal", range: "$200 – $600" },
	{ item: "Cement board / waterproofing", range: "$300 – $800" },
	{ item: "Prefab shower insert (supply + install)", range: "$800 – $2,500" },
	{ item: "Tile (walls, per sq ft installed)", range: "$8 – $20" },
	{ item: "Tile floor / pan (installed)", range: "$600 – $2,500" },
	{ item: "Shower niche (recessed shelf)", range: "$200 – $600" },
	{ item: "Glass door or frameless enclosure", range: "$600 – $3,500" },
	{ item: "Shower valve + trim", range: "$300 – $1,200" },
	{ item: "New drain / plumbing rough-in", range: "$500 – $2,000" },
	{ item: "Linear drain (walk-in / barrier-free)", range: "$800 – $2,500" },
	{ item: "Heated floor", range: "$800 – $2,000" },
	{ item: "Drywall repair around opening", range: "$200 – $600" },
];

const costDrivers = [
	{
		title: "Tile vs. Prefab",
		body: "This is the biggest cost fork. A prefab acrylic insert is fast, affordable, and fine for a guest bath or rental. Tile is more durable, looks better, and holds up over the long term — but it costs 2–3x more in labor. For a primary bathroom in a Clark County home you plan to sell, tile almost always pencils out.",
	},
	{
		title: "Drain Relocation",
		body: "Most tubs drain at the end. Most showers drain in the center or toward the back. If your conversion requires moving the drain — which it often does — add $500–2,000 for a licensed plumber. We always assess this during the walkthrough so there are no mid-project surprises.",
	},
	{
		title: "Existing Waterproofing Condition",
		body: "When we demo the tub surround, we find out what's behind it. Clark County homes with original 1970s–90s tile often have failing organic mastic, damaged cement board, or mold behind the walls. Remediation adds $800–3,000 depending on how far it's spread. This is not optional — new tile installed over wet, moldy substrate fails within 2–3 years.",
	},
	{
		title: "Walk-In / Barrier-Free Layout",
		body: "Aging-in-place conversions — no threshold, grab bars, fold-down bench, hand-held shower — require careful planning and sometimes a wider opening. These add $2,000–6,000 over a standard conversion but qualify for insurance or HSA reimbursement in some cases.",
	},
	{
		title: "Glass Enclosure Choice",
		body: "A shower curtain adds $30. A framed glass door adds $600–1,200. A frameless glass enclosure adds $1,500–3,500. Frameless looks the best and is easiest to clean — but it's a significant line item. Most mid-range Clark County conversions go with a semi-frameless door.",
	},
];

const faqs = [
	{
		q: "How much does a bathtub to shower conversion cost in Clark County WA?",
		a: "In Clark County WA, a bathtub to shower conversion costs $1,500–$4,000 for a prefab insert and $4,000–$9,000 for a standard tile shower. Conversions with plumbing upgrades or barrier-free layouts run $6,000–$14,000. Custom walk-in or wet room builds reach $12,000–$25,000+.",
	},
	{
		q: "Is it worth converting a bathtub to a shower?",
		a: "In most Clark County homes, yes — especially if you have another bathtub in the house. Real estate agents in Vancouver and Camas note that modern walk-in showers are a selling point in homes where at least one tub remains. Converting your only tub can reduce resale appeal, so confirm you have a second tub before proceeding.",
	},
	{
		q: "Do I need a permit for a tub-to-shower conversion in Clark County?",
		a: "Minor conversions using a prefab insert with no plumbing relocation typically don't require a permit in Clark County. If you're moving the drain, changing the valve location, or doing structural work, a permit is required. As a licensed general contractor, Norbilt handles permit applications when needed.",
	},
	{
		q: "How long does a tub-to-shower conversion take?",
		a: "A prefab insert conversion takes 1–2 days. A standard tile shower takes 3–5 days including drying time between coats and grout cure. A custom walk-in or wet room takes 1–2 weeks. Plumbing work adds 1–2 days to any scope.",
	},
	{
		q: "What should I know before converting a tub to a shower in an older home?",
		a: "Homes built before 1990 in Clark County commonly have issues behind tub surrounds: failing waterproofing, organic mastic adhesive, mold, or non-standard plumbing. A proper walkthrough and inspection before demo is essential to avoid mid-project budget surprises. We always assess this before quoting.",
	},
	{
		q: "Can I keep the same footprint or do I need a larger space?",
		a: "A standard 60\" tub alcove converts to a 36\"×60\" shower — which meets code minimum for Clark County. That footprint works for most conversions. Walk-in showers typically need at least 36\"×36\", and barrier-free wet rooms need more space and a linear drain. We'll confirm your footprint works during the estimate walkthrough.",
	},
];

export default function TubToShowerConversion() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "Article",
								headline: "Bathtub to Shower Conversion Cost in Clark County WA (2026 Guide)",
								author: { "@type": "Person", name: "Andrey Norbilt" },
								publisher: {
									"@type": "Organization",
									name: "Norbilt",
									logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
								},
								datePublished: "2026-04-20",
								dateModified: "2026-04-20",
								description:
									"Real 2026 cost breakdown for bathtub to shower conversions in Clark County WA — scope tiers, component pricing, what drives costs up, and what to watch for in older homes.",
								mainEntityOfPage: "https://norbilt.com/blog/bathtub-to-shower-conversion-cost-clark-county-wa",
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
							Bathtub to Shower Conversion Cost in{" "}
							<span className="text-[#FFB800]">Clark County, WA</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real 2026 price ranges for tub-to-shower conversions in
							Vancouver, Camas, Ridgefield, and surrounding areas — from a
							licensed contractor who does this work every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Clark County, WA · Vancouver · Camas · Ridgefield · Battle Ground
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* CITATION CAPSULE */}
						<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed">
								In Clark County WA, a bathtub to shower conversion costs <strong>$1,500–$4,000 for a prefab insert</strong> and <strong>$4,000–$9,000 for a standard tile shower</strong>. Most homeowners land in the $4,000–$9,000 range — tile walls, tiled floor, niche, and a glass door.
							</p>
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Converting a bathtub to a shower is one of the most-requested
								bathroom projects we get in Clark County — and one of the most
								variable in price. A straightforward prefab insert in a guest
								bath and a custom walk-in tile shower in a primary suite are
								both "tub-to-shower conversions," but they cost $1,500 and
								$20,000 respectively.
							</p>
							<p>
								This guide breaks down exactly what drives that range, what
								each scope actually includes, and what to watch for in Clark
								County homes — particularly those built before 1995, where
								surprises behind the tile surround are common.
							</p>
						</div>

						{/* COST BY SCOPE */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Tub-to-Shower Conversion Cost by Scope
							</h2>
							<div className="space-y-4">
								{costTiers.map((tier) => (
									<div
										key={tier.scope}
										className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100"
									>
										<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
											<div>
												<p className="font-black text-[#1F2E2B] text-lg">{tier.scope}</p>
												<p className="text-sm text-gray-500 mt-1">{tier.desc}</p>
											</div>
											<div className="text-right shrink-0">
												<p className="text-[#2D5A3D] font-black text-xl">{tier.range}</p>
												<p className="text-xs text-gray-400 mt-1">{tier.timeline}</p>
											</div>
										</div>
										<p className="text-xs font-bold text-[#2D5A3D] uppercase tracking-widest">
											Best for: {tier.best}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* COST BY COMPONENT */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
								Cost by Component (Clark County, 2026)
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								If you want to understand exactly where the money goes, here's
								a line-item breakdown. Prices include materials and licensed
								contractor labor.
							</p>
							<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
								<div className="space-y-3">
									{costByComponent.map((row) => (
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
						</div>

						{/* WHAT DRIVES COST */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								What Drives the Price Up (or Down)
							</h2>
							<div className="space-y-6">
								{costDrivers.map((item) => (
									<div key={item.title} className="flex gap-4">
										<CheckCircle2 className="w-6 h-6 text-[#FFB800] shrink-0 mt-1" />
										<div>
											<h3 className="font-black text-[#1F2E2B] mb-1">{item.title}</h3>
											<p className="text-gray-600 leading-relaxed">{item.body}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* OLDER HOMES WARNING */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-5">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								What We Find in Pre-1995 Clark County Homes
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								A large portion of homes in Hazel Dell, Orchards, Felida, and
								older parts of Vancouver were built between 1970 and 1995. When
								we demo the tub surround, here's what we commonly find — and
								what it adds to the project:
							</p>
							<div className="space-y-4">
								{[
									{
										issue: "Organic mastic adhesive (pre-thinset era)",
										detail: "Common in homes built before 1990. Organic mastic fails when wet and harbors mold. Full demo and substrate replacement required. Add $500–1,200.",
									},
									{
										issue: "Mold behind the surround",
										detail: "A slow drip or failed caulk over years causes mold to spread into the wall cavity. Remediation plus drywall replacement adds $800–3,000 depending on spread.",
									},
									{
										issue: "Galvanized supply pipes",
										detail: "Pre-1985 Clark County homes often have galvanized pipe to the shower valve. Corroded galvanized reduces pressure and fails. Replacement while the wall is open adds $500–1,500.",
									},
									{
										issue: "Non-standard tub dimensions",
										detail: "Some older tubs are 54\" or 66\" rather than the standard 60\". This means custom-cut cement board, non-standard tile runs, and more labor. Discovered at demo, not before.",
									},
								].map((item) => (
									<div key={item.issue} className="border border-white/10 rounded-xl p-5">
										<p className="font-black text-white mb-1">{item.issue}</p>
										<p className="text-[#A7C4B5] text-sm leading-relaxed">{item.detail}</p>
									</div>
								))}
							</div>
							<p className="text-[#A7C4B5] text-sm leading-relaxed">
								None of these are reasons to avoid the project — they're things
								a good contractor flags during the estimate, not mid-demo. We
								always do a walkthrough before quoting so there are no surprises.
							</p>
						</div>

						{/* PREFAB VS TILE */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Prefab Insert vs. Tile: Which Is Right for You?
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								<div className="bg-[#F8F6F3] rounded-2xl p-6 space-y-4">
									<p className="font-black text-[#1F2E2B] uppercase tracking-widest text-sm">Prefab Insert</p>
									{[
										"Lower cost ($1,500–$4,000)",
										"1–2 day install",
										"Good for rentals and guest baths",
										"Limited size and style options",
										"Seams can collect mold over time",
										"Lower resale value impact",
									].map((item) => (
										<div key={item} className="flex items-start gap-2 text-sm text-gray-600">
											<CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
											{item}
										</div>
									))}
								</div>
								<div className="bg-[#1F2E2B] rounded-2xl p-6 space-y-4">
									<p className="font-black text-[#FFB800] uppercase tracking-widest text-sm">Tile Shower</p>
									{[
										"Higher cost ($4,000–$14,000+)",
										"3–7 day install",
										"Best for primary baths",
										"Unlimited design options",
										"Easier to clean, no seams",
										"Strongest resale value",
									].map((item) => (
										<div key={item} className="flex items-start gap-2 text-sm text-[#A7C4B5]">
											<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
											{item}
										</div>
									))}
								</div>
							</div>
						</div>

						{/* FAQ */}
						<div>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Frequently Asked Questions
							</h2>
							<div className="space-y-4">
								{faqs.map((faq) => (
									<div key={faq.q} className="bg-[#F8F6F3] rounded-2xl p-6">
										<h3 className="font-black text-[#1F2E2B] mb-3">{faq.q}</h3>
										<p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
									</div>
								))}
							</div>
						</div>

						{/* SERVICE LINK */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Ready to convert your tub?</p>
								<p className="text-gray-600 text-sm">Licensed kitchen & bathroom updates in Clark County WA — free written estimates before any work begins.</p>
							</div>
							<Link
								href="/locations/vancouver/kitchen-bath"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								View Service <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								Tub-to-Shower Conversions In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Felida", slug: "felida" },
									{ name: "Hazel Dell", slug: "hazel-dell" },
								].map((city) => (
									<Link
										key={city.slug}
										href={`/locations/${city.slug}/kitchen-bath`}
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
							Get a Free Tub-to-Shower Estimate
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We walk your bathroom, assess the existing conditions, and give
							you a clear written number — before anything gets torn out.
							Serving all of Clark County.
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
