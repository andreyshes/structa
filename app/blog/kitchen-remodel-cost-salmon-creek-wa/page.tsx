import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost Salmon Creek WA | NORBILT",
	description:
		"How much does a kitchen remodel cost in Salmon Creek, WA? Real 2026 price ranges for cabinet refreshes through full gut remodels from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/kitchen-remodel-cost-salmon-creek-wa",
	},
	openGraph: {
		title: "Kitchen Remodel Cost in Salmon Creek WA | NORBILT",
		description:
			"Real 2026 price ranges for kitchen remodels in Salmon Creek WA — cosmetic refresh through full gut. From a licensed local contractor.",
		url: "https://www.norbilt.com/blog/kitchen-remodel-cost-salmon-creek-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function KitchenRemodelCostSalmonCreek() {
	const costRows = [
		{
			scope: "Hardware & Paint Refresh",
			desc: "New cabinet hardware, repaint cabinets, updated light fixture — same layout",
			range: "$1,500 – $4,000",
		},
		{
			scope: "Countertop Replacement",
			desc: "Laminate removal, new quartz or granite with undermount sink",
			range: "$3,000 – $7,500",
		},
		{
			scope: "Backsplash Installation",
			desc: "Tile backsplash, labor and materials, standard kitchen run",
			range: "$600 – $2,000",
		},
		{
			scope: "Cabinet Refacing",
			desc: "New doors, drawer fronts, hardware — existing cabinet boxes stay",
			range: "$4,000 – $9,000",
		},
		{
			scope: "Mid-Range Kitchen Update",
			desc: "New cabinets, countertops, backsplash, sink and faucet — layout unchanged",
			range: "$18,000 – $35,000",
		},
		{
			scope: "Full Gut Remodel (layout unchanged)",
			desc: "Everything new, same footprint — cabinets, counters, flooring, appliances rough-in",
			range: "$30,000 – $55,000",
		},
		{
			scope: "Full Gut with Layout Change",
			desc: "Wall removal, new plumbing/electrical rough-in, island addition",
			range: "$45,000 – $80,000+",
		},
	];

	const priceFactors = [
		{
			title: "Cabinet Choice: Reface vs. Replace",
			body: "This is the single biggest cost decision in any Salmon Creek kitchen. Salmon Creek homes from the 1990s and early 2000s often have structurally solid cabinet boxes with dated doors and hardware. Refacing keeps the boxes and replaces only the faces — it costs $4,000–$9,000 and looks like a new kitchen. Full replacement runs $12,000–$25,000 for cabinets alone but allows a layout change and more storage options. If the existing layout works and the boxes are in good shape, refacing is usually the better value.",
		},
		{
			title: "Countertop Material",
			body: "Laminate counters (common in Salmon Creek's 90s builds) can be replaced with quartz for $3,000–$7,500 for a typical kitchen. Quartz is the most popular mid-range choice in Clark County — it's durable, low-maintenance, and holds up in wet PNW conditions. Granite costs similarly. Butcher block is lower cost but requires sealing and is moisture-sensitive near the sink.",
		},
		{
			title: "Layout Changes and Permits",
			body: "Moving a sink, adding an island, or removing a wall all require permits and trigger electrical and plumbing sub-trades. In Clark County, a kitchen permit runs $400–$1,200 and takes 1–3 weeks. Layout changes add $5,000–$20,000 to any remodel depending on scope. If the current layout works, staying with it is the fastest and most cost-effective path.",
		},
		{
			title: "Appliances",
			body: "NORBILT handles installation but homeowners typically source appliances directly. A mid-range appliance package (range, refrigerator, dishwasher, microwave) runs $3,000–$8,000 at retail. High-end brands (Wolf, Sub-Zero, Bosch) can push $15,000–$30,000+. We coordinate installation timing with delivery so your kitchen isn't down longer than necessary.",
		},
		{
			title: "Flooring",
			body: "Kitchen flooring in Salmon Creek homes is often original vinyl or tile that gets replaced as part of a remodel. LVP runs $4–$8/sq ft installed and is the most practical choice — waterproof, durable, and wide plank styles look current. Large-format porcelain tile runs $10–$18/sq ft installed and is the premium option. If replacing just the kitchen floor, expect $1,500–$4,000 for a typical Salmon Creek kitchen footprint.",
		},
	];

	const cabinetComparison = [
		{ option: "Repaint existing", cost: "$1,500–$4,000", best: "Cabinets are solid, just dated color", downside: "Surface only — hinges and hardware still show age" },
		{ option: "Reface (new doors/fronts)", cost: "$4,000–$9,000", best: "Layout works, box structure is solid", downside: "Can't change layout or add storage" },
		{ option: "Full replacement", cost: "$12,000–$25,000", best: "Layout change needed or boxes are failing", downside: "Longest timeline, most disruption" },
	];

	const faqs = [
		{
			q: "Do I need a permit for a kitchen remodel in Salmon Creek / unincorporated Clark County?",
			a: "Cosmetic work — painting cabinets, replacing countertops, updating hardware or light fixtures — does not require a permit. Any work involving new electrical circuits, moving outlets, changing plumbing rough-ins, or removing walls does require a permit through Clark County Community Development. NORBILT handles permit applications as part of any permitted scope. Permit fees run $400–$1,200 depending on scope, plus 1–3 weeks processing time.",
		},
		{
			q: "How long does a kitchen remodel take in Salmon Creek?",
			a: "A cosmetic refresh (hardware, countertops, backsplash) takes 5–10 working days. A mid-range update with new cabinets, countertops, and backsplash typically runs 3–5 weeks — cabinets are ordered and take 2–4 weeks to arrive, then installation takes 1–2 weeks. A full gut remodel with layout changes runs 6–12 weeks depending on permit timing and sub-trade scheduling. We give you a realistic timeline at the estimate — not a best-case scenario.",
		},
		{
			q: "Should I reface or replace my Salmon Creek cabinets?",
			a: "Refacing is the right call when the existing cabinet boxes are solid (no water damage, doors open and close square, adequate storage) and the layout works for how you use the kitchen. If the boxes have soft spots from moisture, if you want to move the sink or add an island, or if the interior dimensions feel wrong, replacement is the better investment. We assess this during the estimate and give you an honest recommendation — not the upsell.",
		},
		{
			q: "What's the most common kitchen remodel mistake Salmon Creek homeowners make?",
			a: "Underestimating what's behind the walls. Salmon Creek homes built in the late 1980s and early 1990s sometimes have original galvanized supply lines that should be replaced while the kitchen is open, or outdated wiring that can't support modern appliances without an upgrade. These aren't surprises we manufacture — they're real conditions we find and document during demo. A transparent contractor shows you what was found before proceeding. A good contract includes a clear change order process so nothing gets added to the bill without your sign-off.",
		},
		{
			q: "What does a NORBILT kitchen remodel include?",
			a: "Our scope is typically demo and disposal, cabinet installation, countertop templating and installation, backsplash tile, flooring, fixture installation, and final paint. We coordinate electrical and plumbing sub-trades when needed. We don't source appliances but we handle all rough-in prep and final installation connections. Every project starts with a written quote — line-itemed scope, not a ballpark — before any work begins.",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "How Much Does a Kitchen Remodel Cost in Salmon Creek, WA?",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						description:
							"Real 2026 price ranges for kitchen remodels in Salmon Creek WA — hardware refresh through full gut remodel.",
						mainEntityOfPage: "https://www.norbilt.com/blog/kitchen-remodel-cost-salmon-creek-wa",
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
							{ "@type": "ListItem", position: 3, name: "Kitchen Remodel Cost Salmon Creek WA", item: "https://www.norbilt.com/blog/kitchen-remodel-cost-salmon-creek-wa" },
						],
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Cost Guide
							</span>
							<span className="text-white/50 text-xs font-medium">Updated August 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							How Much Does a Kitchen Remodel Cost in{" "}
							<span className="text-[#FFB800]">Salmon Creek, WA?</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								Kitchen remodels in Salmon Creek WA cost $1,500–$4,000 for a cosmetic refresh, $18,000–$35,000 for a mid-range update with new cabinets and countertops, and $30,000–$55,000 for a full gut remodel with the same layout. Most Salmon Creek homes from the late 1980s and 1990s have functional kitchens with dated finishes — original laminate counters, builder-grade oak cabinets, and tile or vinyl flooring that is ready to be replaced. The cabinet decision (reface vs. replace) is typically the biggest cost variable. All prices are 2026 Clark County rates.
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real pricing for Salmon Creek kitchens — from cabinet refreshes to full gut remodels — from a licensed Clark County contractor.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Salmon Creek, WA · North Vancouver · Clark County
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
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed">
								A Salmon Creek kitchen remodel runs <strong>$18,000–$35,000 for mid-range</strong> and <strong>$30,000–$55,000 for a full gut</strong>. The biggest decision is cabinets — refacing saves $8,000–$16,000 over replacement if the existing boxes are solid. Layout changes add cost and time but can transform how a kitchen functions.
							</p>
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Salmon Creek was built up fast in the late 1980s and through the 1990s — it was the affordable, family-friendly alternative to Vancouver proper, with newer schools, bigger lots, and fresh construction. The houses were well-built for their time. The kitchens, however, were not designed for 2026. Oak cabinets, laminate counters, drop-in sinks, and fluorescent lighting are standard across most of that era&apos;s housing stock. The bones are fine. The finishes are not.
							</p>
							<p>
								Most Salmon Creek homeowners we work with are not looking for a luxury kitchen — they want a clean, functional, updated space that reflects what the home is worth today. That usually means new countertops, updated cabinets (refaced or replaced), LVP or tile flooring, a backsplash, and better lighting. Here is what that actually costs in 2026.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Kitchen Remodel Costs in Salmon Creek, WA (2026)
							</h2>
							<div className="space-y-4">
								{costRows.map((row) => (
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
							<p className="text-xs text-gray-400 mt-4">Ranges reflect Clark County labor and material costs as of 2026. Appliances not included unless noted.</p>
						</div>

						{/* WHAT DRIVES COST */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Affects the Price
							</h2>
							<div className="space-y-5">
								{priceFactors.map((item) => (
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

						{/* CABINET COMPARISON */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Cabinet Decision Guide for Salmon Creek Homeowners
							</h2>
							<p className="text-gray-600">The three paths — which is right depends on your cabinet boxes and your goals:</p>
							<div className="overflow-x-auto">
								<table className="w-full text-sm border-collapse">
									<thead>
										<tr className="bg-[#1F2E2B] text-white">
											<th className="text-left p-3 font-black rounded-tl-xl">Option</th>
											<th className="text-left p-3 font-black">Cost Range</th>
											<th className="text-left p-3 font-black">Best When</th>
											<th className="text-left p-3 font-black rounded-tr-xl">Limitation</th>
										</tr>
									</thead>
									<tbody>
										{cabinetComparison.map((row, i) => (
											<tr key={row.option} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
												<td className="p-3 font-bold text-[#1F2E2B]">{row.option}</td>
												<td className="p-3 text-[#2D5A3D] font-bold">{row.cost}</td>
												<td className="p-3 text-gray-600">{row.best}</td>
												<td className="p-3 text-gray-500">{row.downside}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						{/* DARK INSIGHT */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								Salmon Creek Kitchens: What We See Every Week
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								The most common Salmon Creek kitchen we walk into: oak cabinets in decent condition, laminate countertops with worn edges at the sink, a drop-in white sink, 4x4 ceramic tile backsplash or no backsplash at all, and original vinyl flooring. The kitchen works — burners light, doors close, storage is adequate. It just looks like it was installed in 1994. Because it was.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								The good news: this kitchen is a strong candidate for a mid-range update rather than a full gut. The cabinet boxes are typically solid — oak construction from that era is durable. We reface the doors and drawer fronts, add new hardware, replace the countertops with quartz, install a tile backsplash, drop in a new undermount sink and faucet, replace the flooring, and update the lighting. The kitchen reads as completely new. Total cost: $12,000–$22,000. That is the sweet spot for most Salmon Creek homeowners.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								Where full replacement makes sense: if the homeowner wants to move the sink, add an island, or take out a wall to open the kitchen to the living room — those changes require new cabinets because the existing layout has to be reconfigured. We see this most often in Salmon Creek homes where the original galley layout feels cramped for modern life.
							</p>
						</div>

						{/* REMODELING CALLOUT */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Also remodeling your bathroom?</p>
								<p className="text-gray-600 text-sm">We just published a full cost guide for Salmon Creek bathroom remodels — including when to refresh vs. gut.</p>
							</div>
							<Link
								href="/blog/bathroom-remodel-cost-salmon-creek-wa"
								className="inline-flex items-center gap-2 bg-[#2D5A3D] text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest whitespace-nowrap hover:bg-[#1F2E2B] transition-colors"
							>
								Bathroom Guide <ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* FAQ */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-3">
								{faqs.map((faq, i) => (
									<details
										key={i}
										className="group border border-gray-200 rounded-2xl overflow-hidden bg-white"
									>
										<summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-black text-[#1F2E2B] list-none">
											<span>{String(i + 1).padStart(2, "0")}. {faq.q}</span>
											<span className="text-[#2D5A3D] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
										</summary>
										<div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
											{faq.a}
										</div>
									</details>
								))}
							</div>
						</div>

						{/* SOURCES */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6 space-y-2">
							<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sources & References</p>
							<ul className="space-y-1 text-xs text-gray-400">
								<li>Clark County Community Development — residential permit fees and requirements (2026)</li>
								<li>WA State Dept. of Labor & Industries — contractor licensing requirements</li>
								<li>NORBILT internal job data — kitchen remodel pricing, Clark County WA (2025–2026)</li>
								<li>National Kitchen & Bath Association — project cost and planning benchmarks</li>
							</ul>
						</div>

						{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">We Also Serve</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Washougal", slug: "washougal" },
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
							Get a Free Kitchen Remodel Estimate in Salmon Creek
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Licensed kitchen remodeling contractor serving Salmon Creek, north Vancouver, and all of Clark County. Written quote before any work begins — no surprises.
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
