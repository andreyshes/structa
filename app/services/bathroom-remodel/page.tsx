import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	Sparkles,
	MapPin,
	ShieldCheck,
	Phone,
	BadgeCheck,
	CheckCircle,
	XCircle,
	AlertTriangle,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

const costRows = [
	{
		scope: "Cosmetic Refresh",
		description: "New fixtures, hardware, caulk, mirror, light bar",
		range: "$800–$2,500",
	},
	{
		scope: "Mid-Range Update",
		description: "New vanity, tile floor, fixtures, and toilet — same layout",
		range: "$5,000–$12,000",
	},
	{
		scope: "Full Gut Remodel",
		description: "Demo to studs, new tile, plumbing, vanity, exhaust, fixtures",
		range: "$12,000–$25,000",
	},
	{
		scope: "Primary Bath Full Remodel",
		description: "Large bath, double vanity, tile shower, soaking tub or walk-in",
		range: "$20,000–$45,000",
	},
	{
		scope: "Tub-to-Shower (Prefab Insert)",
		description: "Remove tub, install prefab acrylic or fiberglass insert",
		range: "$3,500–$7,000",
	},
	{
		scope: "Tub-to-Shower (Custom Tile)",
		description: "Remove tub, custom tile walls and floor, curb or curbless",
		range: "$6,000–$14,000",
	},
];

const timelineRows = [
	{ scope: "Cosmetic Refresh", timeline: "1–2 days", note: "No permit, no lead time — fastest project we do" },
	{ scope: "Tub-to-Shower (Prefab Insert)", timeline: "2–3 days", note: "Insert availability; common sizes typically in stock" },
	{ scope: "Tub-to-Shower (Custom Tile)", timeline: "4–6 days", note: "Tile cure time: 24–48 hrs before grout, 48 hrs before use" },
	{ scope: "Mid-Range Update", timeline: "1–2 weeks", note: "Vanity/tile lead time; permit required if plumbing moves" },
	{ scope: "Full Gut Remodel", timeline: "2–4 weeks", note: "Permit (1–3 weeks in Clark County), fixture lead time" },
	{ scope: "Primary Bath Full Remodel", timeline: "3–5 weeks", note: "Largest variable: tile and specialty fixture lead time" },
];

const faqs = [
	{
		q: "How much does a bathroom remodel cost in Vancouver WA?",
		a: "In 2026, a cosmetic bathroom refresh in Vancouver WA runs $800–$2,500. A mid-range update (vanity, tile, fixtures, same layout) typically costs $5,000–$12,000. A full gut remodel — demo to studs, new tile, new plumbing fixtures, vanity, and exhaust — runs $12,000–$25,000. A large primary bath with double vanity can reach $20,000–$45,000. These ranges cover labor and materials; actual quotes depend on your tile selection, vanity spec, and whether permits are required.",
	},
	{
		q: "Do I need a permit for a bathroom remodel in Clark County?",
		a: "Cosmetic updates — new fixtures in the same location, caulk, hardware, paint, tile over existing substrate — do not require a permit in Clark County. Permits are required when you move a drain, relocate a toilet, add or move an electrical circuit, or make structural changes. If you're converting a tub to a custom shower with a new drain location, a permit is typically required. NORBILT pulls all required permits before work begins and knows what Clark County Building Dept requires.",
	},
	{
		q: "How long does a bathroom remodel take?",
		a: "A cosmetic refresh takes 1–2 days. A tub-to-shower conversion with a prefab insert takes 2–3 days. A custom tile shower conversion takes 4–6 days including cure time. A mid-range update (vanity, tile, fixtures) takes 1–2 weeks. A full gut remodel takes 2–4 weeks, with permitting being the most common schedule driver. We confirm the exact timeline during your free estimate.",
	},
	{
		q: "Can you match my existing tile?",
		a: "We color-match grout before starting any tile repair or regrout project. For tile, an exact match depends on whether the same tile is still manufactured and available. We bring samples to the initial walkthrough so you can confirm the match before we order. If an exact match isn't possible, we'll show you the closest available options and discuss a full section replacement if needed.",
	},
	{
		q: "What is a tub-to-shower conversion?",
		a: "A tub-to-shower conversion removes your existing bathtub and installs a walk-in shower in that footprint. The prefab option uses an acrylic or fiberglass surround — faster and lower cost ($3,500–$7,000). The custom tile option uses cement board, waterproofing membrane, and tile — more durable and fully customizable ($6,000–$14,000). Most Clark County homeowners choose this when the tub is unused and they want to maximize a smaller bathroom.",
	},
	{
		q: "Is your bathroom work warrantied?",
		a: "Yes. All NORBILT bathroom remodeling is backed by a 1-year workmanship warranty. If caulk fails, tile lifts, grout cracks, or any installed component has a workmanship issue, we return and fix it at no charge within the warranty period. Manufacturer warranties on fixtures (faucets, toilets, exhaust fans) are separate and transfer directly to you.",
	},
];

const cities = [
	{ slug: "vancouver", name: "Vancouver" },
	{ slug: "camas", name: "Camas" },
	{ slug: "ridgefield", name: "Ridgefield" },
	{ slug: "battle-ground", name: "Battle Ground" },
	{ slug: "washougal", name: "Washougal" },
	{ slug: "brush-prairie", name: "Brush Prairie" },
	{ slug: "felida", name: "Felida" },
	{ slug: "hazel-dell", name: "Hazel Dell" },
	{ slug: "salmon-creek", name: "Salmon Creek" },
	{ slug: "five-corners", name: "Five Corners" },
	{ slug: "orchards", name: "Orchards" },
	{ slug: "mill-plain", name: "Mill Plain" },
	{ slug: "lake-shore", name: "Lake Shore" },
];

const schema = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "BreadcrumbList",
			itemListElement: [
				{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
				{ "@type": "ListItem", position: 2, name: "Services", item: "https://www.norbilt.com/services" },
				{
					"@type": "ListItem",
					position: 3,
					name: "Bathroom Remodel Contractor Vancouver WA",
					item: "https://www.norbilt.com/services/bathroom-remodel",
				},
			],
		},
		{
			"@type": "Service",
			name: "Bathroom Remodel Contractor Vancouver WA",
			provider: { "@id": "https://www.norbilt.com/#business" },
			areaServed: "Clark County, WA",
			description:
				"Licensed bathroom remodeling contractor serving Vancouver WA and Clark County. Tub-to-shower conversions, full gut remodels, vanity installs, tile work, and cosmetic refreshes. 1-year workmanship warranty.",
			serviceType: "Bathroom Remodeling",
			url: "https://www.norbilt.com/services/bathroom-remodel",
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
};

export const metadata = {
	title: "Bathroom Remodel Contractor Vancouver WA | NORBILT",
	description:
		"Licensed bathroom remodel contractor in Vancouver WA and Clark County. Tub-to-shower conversions, full gut remodels, tile, vanity installs & more. Free written estimates. WA Lic #NORBI741CS.",
};

export default function BathroomRemodelPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative min-h-[80vh] flex items-center overflow-hidden">
					<div className="absolute inset-0 z-0">
						<Image
							src="/remodel-images/IMG_7646.jpg"
							alt="Bathroom remodel contractor Vancouver WA — NORBILT"
							fill
							priority
							sizes="100vw"
							className="object-cover object-center"
						/>
						<div className="absolute inset-0 bg-linear-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
					</div>

					<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
						<div className="max-w-4xl space-y-6">
							<div className="flex items-center gap-3">
								<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
									Licensed Contractor · Clark County
								</span>
							</div>

							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								Bathroom Remodeling <br />
								<span className="text-[#FFB800]">in Vancouver, WA</span>
							</h1>

							<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								Tub-to-shower conversions, full gut remodels, vanity installs, tile work, and cosmetic refreshes — NORBILT handles every level of bathroom remodeling in Clark County. Licensed WA contractor. 1-year workmanship warranty.
							</p>

							<div className="pt-4">
								<Link
									href="/contact"
									className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
								>
									Get a Free Estimate
									<ArrowRight className="w-5 h-5" />
								</Link>
							</div>
							<p className="text-white/60 text-sm font-bold mt-3">
								Ready to start?{" "}
								<a href="tel:+13602169920" className="text-[#FFB800] font-bold hover:underline">
									(360) 216-9920
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* BREADCRUMB */}
				<div className="bg-[#FDFCFB] border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
						<Link
							href="/services"
							className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2D5A3D] hover:text-[#FFB800] transition-colors"
						>
							← All Services
						</Link>
					</div>
				</div>

				{/* AUTHOR & DATE BAR */}
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<a href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">
							By Andrey
						</a>
						<span>· WA Licensed General Contractor · NORBILT · Updated August 2026</span>
					</div>
				</div>

				{/* TRUST STRIP */}
				<section className="py-8 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
						<div className="flex items-center gap-3">
							<ShieldCheck className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								Licensed WA Contractor · #NORBI741CS
							</span>
						</div>
						<div className="flex items-center gap-3">
							<BadgeCheck className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								1-Year Workmanship Warranty
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Sparkles className="text-[#FFB800] w-5 h-5" />
							<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								Free Written Estimates
							</span>
						</div>
					</div>
				</section>

				{/* COST TABLE */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								2026 Cost Ranges
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How Much Does a Bathroom Remodel Cost in Vancouver WA?
							</h2>
							<p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
								Prices below reflect installed cost — labor and materials — for Clark County projects in 2026. Your actual quote depends on tile selection, vanity spec, and whether the layout changes. We provide written estimates before any work starts.
							</p>
						</div>

						<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Project Scope</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">
											What's Covered
										</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider whitespace-nowrap">
											2026 Range
										</th>
									</tr>
								</thead>
								<tbody>
									{costRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.scope}</td>
											<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.description}</td>
											<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-sm text-gray-400 italic mt-4">
							Ranges cover labor and standard materials in Clark County, WA. Premium tile, specialty fixtures, and structural changes add cost. Permits ($150–$600 depending on scope) are additional when required.
						</p>
					</div>
				</section>

				{/* WHAT'S INCLUDED */}
				<section className="py-24 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
							What's Included in a NORBILT Bathroom Remodel
						</h2>
						<p className="text-white/60 font-medium mb-12 max-w-2xl">
							Scope varies by project, but here's what a full gut bathroom remodel typically covers — and what falls outside our remodeling scope.
						</p>

						<div className="grid md:grid-cols-2 gap-10">
							{/* Included */}
							<div>
								<h3 className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-6">
									Included in a Full Gut Remodel
								</h3>
								<ul className="space-y-4">
									{[
										"Demo — strip to studs, haul debris",
										"Waterproofing membrane behind tile areas",
										"Cement board substrate on walls and floor",
										"Floor tile — set, grouted, and sealed",
										"Wall tile or tub surround — set and grouted",
										"Vanity and mirror installation",
										"Toilet removal and new toilet set",
										"All plumbing fixtures (faucet, showerhead, valve)",
										"Exhaust fan replacement",
										"Paint — walls and ceiling",
										"Final caulk and cleanup",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-white/80 font-medium">
											<CheckCircle className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>

							{/* Not included */}
							<div>
								<h3 className="text-red-400 font-black uppercase tracking-widest text-sm mb-6">
									Not Included in Our Remodeling Scope
								</h3>
								<ul className="space-y-4">
									{[
										"Moving the main supply or drain stack (separate plumbing scope)",
										"HVAC work — heating, radiant floor heat (subcontracted if needed)",
										"Window replacement",
										"Door replacement (we install, but door is owner-supplied)",
										"Appliances — towel warmers, heated mirrors",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-white/60 font-medium">
											<XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
											{item}
										</li>
									))}
								</ul>

								<div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
									<p className="text-white/70 text-sm font-medium leading-relaxed">
										<strong className="text-white">Moving plumbing?</strong> If your remodel involves relocating a drain or toilet, we coordinate licensed plumbing subcontractors and pull the required permit. This adds cost and time but is handled end-to-end.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SCOPE EXPLANATIONS */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<SectionHeader
							eyebrow="Understanding Scope"
							title="Cosmetic Refresh vs. Full Gut: What's Right for Your Bathroom?"
							description="The scope you choose has a bigger impact on cost and timeline than any other single decision. Here's how to think through it."
						/>

						<div className="mt-16 space-y-12">
							{/* Cosmetic Refresh */}
							<div className="border-l-4 border-[#FFB800] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Cosmetic Refresh — $800–$2,500
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									A cosmetic refresh updates everything visible without touching the tile or plumbing. New faucet, new light fixture, new mirror, new hardware, fresh caulk around the tub. Most are done in a single day. No permit required. This is the right scope when the bones are solid — when tile is in good shape, the layout works, and you just want the space to look less dated.
								</p>
								<p className="text-gray-500 text-sm font-medium">
									Good fit: fixtures more than 10 years old, builder-grade hardware, dated light bar, peeling caulk. Not a fit: cracked tile, mold behind the surround, soft floor, or a tub you never use.
								</p>
							</div>

							{/* Mid-Range Update */}
							<div className="border-l-4 border-[#2D5A3D] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Mid-Range Update — $5,000–$12,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									This scope replaces major surfaces and fixtures while keeping the existing layout. New floor tile, new vanity and mirror, new toilet, updated light fixture and exhaust fan. The plumbing stays in place — we work around the existing drain and supply locations. One to two weeks of work. A permit is not required unless something moves.
								</p>
								<p className="text-gray-500 text-sm font-medium">
									Good fit: functional layout, dated finishes across every surface, aging vanity or toilet, floor tile that's cracked or discolored. Not a fit: water damage, soft subfloor, or a layout change.
								</p>
							</div>

							{/* Full Gut */}
							<div className="border-l-4 border-[#1F2E2B] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Full Gut Remodel — $12,000–$25,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									Demo to the studs, then rebuild from scratch. This is the right move when there's damage behind the tile, the subfloor is soft or rotted, or you want a completely different look. It allows for proper waterproofing, a new layout if needed, and a result that will last 20+ years. Permit required in Clark County when plumbing fixtures are relocated.
								</p>
								<div className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-xl">
									<div className="flex items-start gap-3">
										<AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
										<p className="text-amber-800 text-sm font-medium leading-relaxed">
											<strong>Signs you need a full gut:</strong> Tile that moves or sounds hollow, soft spots in the floor when you step on it, visible mold on grout that keeps coming back, a shower pan that&apos;s cracked or discolored past what cleaning fixes, or a tub surround that&apos;s peeling. These indicate water has gotten past the surface — a cosmetic fix won&apos;t solve it.
										</p>
									</div>
								</div>
							</div>

							{/* Tub-to-Shower */}
							<div className="border-l-4 border-[#FFB800] pl-8">
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-3">
									Tub-to-Shower Conversion — $3,500–$14,000
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed mb-4">
									One of the most requested projects from Clark County homeowners. The tub comes out and a walk-in shower goes in its place. The prefab insert option ($3,500–$7,000) uses an acrylic or fiberglass surround — fast, clean, and easier to maintain. The custom tile option ($6,000–$14,000) uses cement board and tile throughout — more durable, fully customizable, and holds value better.
								</p>
								<p className="text-gray-500 text-sm font-medium">
									If the drain location stays the same, no permit is required in most cases. If the drain moves, Clark County requires a permit.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* TIMELINE TABLE */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Project Timelines
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								How Long Does a Bathroom Remodel Take?
							</h2>
							<p className="mt-4 text-gray-600 max-w-xl mx-auto font-medium">
								Timelines depend on scope, permit requirements, and tile cure time. Here&apos;s what to plan for in Clark County.
							</p>
						</div>

						<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Scope</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider">Timeline</th>
										<th className="text-left px-6 py-4 font-black uppercase tracking-wider hidden md:table-cell">
											Biggest Variable
										</th>
									</tr>
								</thead>
								<tbody>
									{timelineRows.map((row, i) => (
										<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-6 py-4 font-black text-[#1F2E2B]">{row.scope}</td>
											<td className="px-6 py-4 font-black text-[#2D5A3D] whitespace-nowrap">{row.timeline}</td>
											<td className="px-6 py-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-sm text-gray-400 italic mt-4">
							Timelines run from project kickoff, not from initial contact. Tile cure time is the most common day-by-day constraint — grouting can&apos;t happen until the tile mortar cures, and the shower can&apos;t be used until the grout seals.
						</p>
					</div>
				</section>

				{/* PERMIT SECTION */}
				<section className="py-24 bg-white">
					<div className="max-w-5xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-12">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Clark County Permits
							</span>
							<h2 className="mt-3 text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								When Do You Need a Permit for a Bathroom Remodel?
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-[#F8F6F3] rounded-2xl p-8">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-base mb-6 flex items-center gap-2">
									<CheckCircle className="w-5 h-5 text-[#2D5A3D]" />
									No Permit Required
								</h3>
								<ul className="space-y-3">
									{[
										"Like-for-like fixture replacement (same location)",
										"Vanity swap — same plumbing location",
										"Toilet swap — same drain location",
										"New tile over existing substrate (cosmetic)",
										"Light fixture swap on existing circuit",
										"Exhaust fan swap — same location, same circuit",
										"Caulk, grout, hardware, paint",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
											<div className="w-1.5 h-1.5 bg-[#2D5A3D] rounded-full mt-2 shrink-0" />
											{item}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-[#1F2E2B] rounded-2xl p-8 text-white">
								<h3 className="font-black text-[#FFB800] uppercase tracking-tight text-base mb-6 flex items-center gap-2">
									<AlertTriangle className="w-5 h-5 text-[#FFB800]" />
									Permit Required
								</h3>
								<ul className="space-y-3">
									{[
										"Moving a drain or relocating a toilet",
										"Adding a new electrical circuit or outlet",
										"Moving supply lines to a new location",
										"Adding a GFCI circuit where none existed",
										"Converting tub to shower with drain relocation",
										"Any structural wall changes",
									].map((item) => (
										<li key={item} className="flex items-start gap-3 text-sm text-white/70 font-medium">
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full mt-2 shrink-0" />
											{item}
										</li>
									))}
								</ul>
								<p className="mt-8 text-white/50 text-xs font-medium">
									NORBILT pulls all required Clark County permits before work begins. We know what triggers a permit inspection and schedule accordingly — no surprises.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* FAQ SECTION */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-4xl mx-auto px-6">
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-gray-500 font-medium mb-12">
							Bathroom remodeling in Vancouver WA and Clark County.
						</p>
						<div className="space-y-4">
							{faqs.map((item, i) => (
								<details
									key={i}
									className="group border-2 border-gray-100 rounded-2xl overflow-hidden bg-white open:border-[#FFB800]/40 open:bg-white transition-all"
								>
									<summary className="flex items-start justify-between px-8 py-6 cursor-pointer list-none gap-4">
										<div className="flex gap-4 items-start">
											<span className="text-[#FFB800] font-black text-xl shrink-0">
												0{i + 1}
											</span>
											<h3 className="text-lg font-black text-[#1F2E2B] tracking-tight">{item.q}</h3>
										</div>
										<span className="text-[#FFB800] text-2xl font-black shrink-0 group-open:hidden">+</span>
										<span className="text-[#FFB800] text-2xl font-black shrink-0 hidden group-open:block">−</span>
									</summary>
									<div className="px-8 pb-6 pl-20 text-gray-600 font-medium text-base leading-relaxed border-t border-gray-100 pt-4">
										{item.a}
									</div>
								</details>
							))}
						</div>
					</div>
				</section>

				{/* CITY LINKS */}
				<section className="py-16 bg-white border-t border-gray-100">
					<div className="max-w-7xl mx-auto px-6">
						<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-6">
							Bathroom Remodeling by City — Clark County WA
						</p>
						<div className="flex flex-wrap gap-3">
							{cities.map((city) => (
								<Link
									key={city.slug}
									href={`/locations/${city.slug}/bathroom-remodel`}
									className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors shadow-sm"
								>
									<MapPin className="w-3 h-3" />
									{city.name}, WA
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* RELATED GUIDES */}
				<section className="py-10 bg-[#F8F6F3] border-t border-gray-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">
							Related Cost Guides
						</p>
						<div className="flex flex-wrap gap-x-8 gap-y-3">
							<Link
								href="/blog/bathroom-remodel-cost-clark-county-wa"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Bathroom Remodel Cost in Clark County WA: 2026 Guide{" "}
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/blog/bathtub-to-shower-conversion-cost-clark-county-wa"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Bathtub to Shower Conversion Cost in Clark County WA{" "}
								<span aria-hidden>→</span>
							</Link>
							<Link
								href="/services/kitchen-bath"
								className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1"
							>
								Kitchen &amp; Bath Remodeling — Full Service Overview{" "}
								<span aria-hidden>→</span>
							</Link>
						</div>
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="py-24 lg:py-40">
					<div className="max-w-7xl mx-auto px-6">
						<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
							<div className="relative z-10 max-w-3xl mx-auto space-y-8">
								<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
									Your Bathroom, <br />
									<span className="text-[#FFB800]">Done Right</span>
								</h2>
								<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
									Free written estimate, honest pricing, and a 1-year warranty on every bathroom project in Clark County.
								</p>
								<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
									<Link
										href="/contact"
										className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
									>
										Get Your Estimate
									</Link>
									<Link
										href="tel:+13602169920"
										className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
									>
										<Phone className="w-5 h-5" /> 360.216.9920
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
