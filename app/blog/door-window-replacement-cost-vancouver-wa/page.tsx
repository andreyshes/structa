"use server";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Door & Window Replacement Cost Vancouver WA | NORBILT",
	description:
		"How much does door or window replacement cost in Vancouver, WA? Real 2026 price ranges for interior doors, exterior doors & window installation from a licensed Clark County contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/door-window-replacement-cost-vancouver-wa",
	},
	openGraph: {
		title: "Door & Window Replacement Cost Vancouver WA | NORBILT",
		description:
			"Real 2026 price ranges for interior doors, exterior doors, and window replacement in Vancouver WA. From a licensed Clark County contractor.",
		url: "https://www.norbilt.com/blog/door-window-replacement-cost-vancouver-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const faqs = [
	{
		q: "Do I need a permit to replace a door or window in Vancouver WA?",
		a: "For a like-for-like replacement — same size opening, no structural changes — a permit is generally not required in Vancouver WA or Clark County. You are swapping out the unit, not modifying the framing. However, if you are changing the size of the opening (larger or smaller window, wider door), structural work is involved and a permit is required through Clark County's Community Development department. Any work that involves cutting into load-bearing walls also requires a permit and engineer review. NORBILT holds WA General Contractor License NORBI**741CS and handles permit questions on every estimate call — we will tell you upfront if your project requires one.",
	},
	{
		q: "Can you install a door I already purchased?",
		a: "Yes. NORBILT offers install-only service for customer-supplied doors and windows. Labor-only rates for a standard prehung interior door run approximately $150–$250 per door, and exterior door installation runs $300–$600 depending on frame condition and hardware complexity. The important caveat is that if the existing frame has rot or damage we discover during install, repairs are billed separately — typically $200–$500 depending on extent. We will flag that during the estimate if we can see it in advance, but exterior frame rot is sometimes hidden until the old unit is removed.",
	},
	{
		q: "How do I know if my exterior door frame is rotted?",
		a: "There are a few reliable signs. Press firmly on the door jamb near the bottom corners and threshold — if it gives or feels soft, there is likely rot behind the trim. Look for paint bubbling, discoloration, or staining at the bottom of the door frame and threshold area. If the threshold itself is spongy underfoot or has visible gaps where it meets the floor, moisture has gotten in. From the exterior, look at where the door casing meets the siding — gaps in caulking are entry points for water over time. Any of these signs warrants a closer look before you commit to just swapping the door slab. NORBILT inspects the frame as part of every door replacement estimate.",
	},
	{
		q: "How long does door replacement take?",
		a: "A single interior prehung door swap typically takes two to four hours including trim reattachment. An exterior door replacement — removing the old unit, inspecting and addressing the frame, setting the new prehung unit, shimming, insulating, and reinstalling trim — typically takes four to six hours per door. If frame repairs are needed, add two to four hours depending on extent. A sliding glass patio door replacement is a half-day to full-day project. We give firm time estimates during the walkthrough, and we always complete the installation the same day we start.",
	},
	{
		q: "What's the best exterior door material for Vancouver's wet climate?",
		a: "Fiberglass is the best overall choice for Vancouver WA's climate. It does not absorb moisture, does not swell or warp, holds its finish well in Pacific Northwest weather, and is significantly more durable than wood in wet conditions. Fiberglass doors can be textured to mimic wood grain and are available in a wide range of styles. Steel is the second option — it is strong and secure, but it can dent and the surface coat can degrade faster in Vancouver's wet environment if not maintained. Wood exterior doors look beautiful but require more maintenance — they need to be primed, painted, and sealed properly to resist moisture, and even well-maintained wood doors will absorb some moisture and swell seasonally. For most Vancouver homeowners, fiberglass is the right call: lower maintenance, better moisture resistance, and it holds its shape through wet winters and dry summers without the seasonal swelling that plagues wood.",
	},
];

export default function DoorWindowReplacementCostVancouverPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "How Much Does Door & Window Replacement Cost in Vancouver, WA?",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						description:
							"Real 2026 price ranges for door and window replacement in Vancouver WA — interior doors, exterior doors, windows, and what drives the cost in Clark County homes.",
						mainEntityOfPage: "https://www.norbilt.com/blog/door-window-replacement-cost-vancouver-wa",
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
							{ "@type": "ListItem", position: 3, name: "Door & Window Replacement Cost Vancouver WA", item: "https://www.norbilt.com/blog/door-window-replacement-cost-vancouver-wa" },
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
							How Much Does Door &amp; Window Replacement Cost in{" "}
							<span className="text-[#FFB800]">Vancouver, WA?</span>
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
							<p className="text-gray-700 leading-relaxed text-sm">
								Door and window replacement in Vancouver WA costs $300–$600 per interior door (installed), $800–$2,500 for a standard exterior door, and $600–$1,400 per window (install plus standard double-hung window). Vancouver&apos;s wet climate makes exterior door and window condition a real issue — failed seals, rotting frames, and sticky or drafty operation are all common in homes built before 2000. All prices are 2026 Clark County rates.
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Real pricing for interior doors, exterior doors, and window replacement — from a licensed Clark County contractor who handles this work every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Vancouver, WA · Clark County
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
							<p className="font-black text-[#1F2E2B] text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `Door and window replacement in Vancouver WA costs <strong>$300–$600 per interior door</strong>, <strong>$800–$2,500 for a standard exterior door</strong>, and <strong>$600–$1,400 per window</strong> installed. Vancouver&apos;s wet winters accelerate frame rot and seal failure — which is why this is one of the most common calls we get from pre-2000 homes.` }} />
						</div>

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Door and window replacement calls in Vancouver WA tend to follow a pattern: a door that has been sticking for years finally becomes unusable, a window with a fogged-up center pane that the homeowner has been ignoring, or an exterior door threshold that is visibly rotting. By the time most people call, the problem has been building for a while.
							</p>
							<p>
								This guide covers real 2026 installed costs for every common door and window replacement scenario in Clark County — including what frame condition can add to the project and why Vancouver&apos;s climate makes this category of work more urgent than it might be in a drier region.
							</p>
						</div>

						{/* COST TABLE */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								Door &amp; Window Replacement Costs in Vancouver, WA (2026)
							</h2>
							<div className="space-y-4">
								{[
									{
										scope: "Interior door (prehung, standard 80\")",
										desc: "Hollow-core or solid-core, labor and standard hardware included",
										range: "$300–$600",
									},
									{
										scope: "Interior door (prehung, tall 96\")",
										desc: "8-ft door, requires custom or special-order unit",
										range: "$450–$800",
									},
									{
										scope: "Exterior door — standard fiberglass/steel",
										desc: "Prehung, weather-stripped, lockset included",
										range: "$800–$1,500",
									},
									{
										scope: "Exterior door — entry with sidelights",
										desc: "Full entry system with sidelights, labor and unit included",
										range: "$1,500–$3,500",
									},
									{
										scope: "Sliding glass patio door",
										desc: "Standard 6-ft or 8-ft slider, removal of old unit included",
										range: "$1,500–$3,500",
									},
									{
										scope: "Window replacement (customer-supplied unit)",
										desc: "Install only — customer purchases the window",
										range: "$250–$500/window",
									},
									{
										scope: "Window replacement (NORBILT sources window)",
										desc: "Standard double-hung, labor and material included",
										range: "$600–$1,400/window",
									},
									{
										scope: "Barn door (hardware + installation)",
										desc: "Interior sliding barn door, hardware kit and hang",
										range: "$600–$1,500",
									},
									{
										scope: "Door frame repair (rotted or damaged)",
										desc: "Framing repair before new door installation",
										range: "$300–$700",
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
								What Affects the Price
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Supply vs. Install-Only",
										body: "NORBILT can source the door or window unit, or install a unit the homeowner has already purchased. Install-only is cheaper labor-wise, but sourcing through us means we stand behind the product and can handle any warranty issues directly. For customer-supplied units, we inspect before installation — if a door arrives damaged or undersized for the opening, we'll flag it before starting work.",
									},
									{
										title: "Frame Condition",
										body: "Vancouver's wet winters cause rot in exterior door frames, particularly at the threshold and sill. If the rough opening shows rot when the old door comes out, we repair it before setting the new unit — this is not optional, since hanging a door in a rotted frame defeats the purpose. Frame repair adds $300–$700 to the project depending on how far the damage has spread. We try to identify frame condition during the estimate, but some rot is hidden behind existing trim.",
									},
									{
										title: "Rough Opening Modification",
										body: "A like-for-like swap (same size unit, same opening) requires no structural work. If you want a wider door, a taller window, or a new opening where there was none, the framing needs modification. Opening modifications require permits in Clark County and add $400–$1,200+ to the project depending on scope. Load-bearing wall involvement adds further cost and requires engineering review.",
									},
									{
										title: "Hardware Selection",
										body: "Standard contractor-grade locksets, hinges, and weatherstripping are included in our pricing. Premium hardware — Schlage, Baldwin, Emtek, or other designer brands — is either customer-supplied or can be sourced through us at cost plus markup. Hardware is one area where the cost spread is wide: a basic lockset runs $60–$120, a premium entry hardware set runs $300–$800.",
									},
									{
										title: "Number of Units",
										body: "Mobilization costs — drive time, setup, cleanup — spread across multiple doors or windows make the per-unit cost lower on larger jobs. Replacing three interior doors in one visit is meaningfully cheaper per door than three separate one-door trips. If you have multiple units to replace, batch them into a single project for the best per-unit rate.",
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
								Vancouver WA Homes and Door/Window Problems We See Every Week
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Vancouver&apos;s climate — wet winters, mild summers, high ambient humidity from November through April — creates a specific set of door and window failure modes that we see regularly in homes built before 2000. Failed weatherstripping is the most common: it dries out and cracks, killing the seal against drafts and water infiltration. Condensation between window panes (fogged or cloudy glass) means the insulated glass unit seal has failed — the argon gas has escaped and moisture has entered the sealed cavity. The only fix is replacing the unit.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								Swollen wood door frames are common in older Vancouver homes, particularly on north-facing and west-facing exposures that see more moisture. A door that starts sticking seasonally — usually in late fall and early spring — is absorbing water. If it has been ignored long enough, the frame itself may be compromised. Exterior door threshold rot is the most serious problem: water infiltrates under the threshold and into the subfloor, causing damage that extends well beyond the door itself.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								Energy efficiency is the other driver. A drafty window in a Vancouver winter is not just uncomfortable — it is measurably expensive. Single-pane windows and failed IGU seals push heating bills higher and create cold spots near glass surfaces. Many Vancouver homeowners replace windows primarily for comfort and energy savings rather than cosmetic reasons, and the payback period on double-pane energy upgrades in this climate is among the shortest in Washington State.
							</p>
						</div>

						{/* WARNING LIST */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Signs It&apos;s Time to Replace, Not Repair
							</h2>
							<ul className="space-y-3">
								{[
									"Door slab has visible warping that prevents a full seal even after adjustment — replacement is the only fix",
									"Window glass is foggy or cloudy between panes — the IGU seal has failed and cannot be repaired, only replaced",
									"Exterior door threshold is soft underfoot or spongy at the corners — active rot that needs to be addressed before it spreads to the subfloor",
									"Door frame shows paint bubbling or discoloration at the bottom jambs — classic sign of moisture intrusion behind the casing",
									"Drafts are present even with the door or window fully closed — weatherstripping and adjustment will not fix a warped or out-of-square unit",
									"Condensation is forming on the interior surface of windows in winter — a sign of severely failed insulation that repair cannot address",
								].map((warning) => (
									<li key={warning} className="flex gap-3 text-gray-700">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
										{warning}
									</li>
								))}
							</ul>
						</div>

						{/* SERVICE LINK */}
						<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
							<div>
								<p className="font-black text-[#1F2E2B] mb-1">Need a door or window replaced in Vancouver?</p>
								<p className="text-gray-600 text-sm">Licensed, insured door and window replacement in Vancouver, WA — free written estimates before any work begins.</p>
							</div>
							<Link
								href="/services/door-window"
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
								<li>Door and window unit pricing reflects current distributor costs — material costs are up 6–12% vs. 2024</li>
								<li>Clark County permit requirements: Clark County Community Development, Clark.wa.gov</li>
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
									{ name: "Camas", slug: "camas" },
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
							Get a Quote for Door or Window Replacement
						</h2>
						<p className="text-black/70 text-lg font-medium">
							We replace interior doors, exterior doors, and windows throughout Vancouver and all of Clark County. Free written estimates — same-week scheduling, no surprise charges.
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
