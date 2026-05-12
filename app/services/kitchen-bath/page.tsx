import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	Sparkles,
	Droplets,
	Hammer,
	Layout,
	MapPin,
	ShieldCheck,
	Phone,
	Waves,
	BadgeCheck,
	DollarSign,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

const serviceTypes = [
	{
		name: "Cosmetic Refresh",
		description:
			"New hardware, faucets, light fixtures, mirror, and fresh caulk. Same layout, dramatically updated look. Minimal disruption — most done in a single day.",
		priceRange: "$800–$2,500",
	},
	{
		name: "Mid-Range Update",
		description:
			"New vanity, toilet, tub surround, tile flooring, and fixtures. Keeps the existing layout but replaces all visible surfaces for a near-new result.",
		priceRange: "$5,000–$12,000",
	},
	{
		name: "Full Gut Remodel",
		description:
			"Everything stripped to the studs and rebuilt — new tile, plumbing fixtures, vanity, lighting, exhaust, and flooring. Layout stays the same; everything else is new.",
		priceRange: "$15,000–$28,000",
	},
	{
		name: "Tub-to-Shower Conversion",
		description:
			"Remove the existing tub and install a walk-in shower — prefab insert or custom tile. Popular with Clark County homeowners aging in place or maximizing space.",
		priceRange: "$1,500–$8,000",
	},
	{
		name: "Cabinet & Countertop Update",
		description:
			"New hardware, cabinet doors, or countertops without replacing the whole kitchen. Quartz, laminate, or butcher block — we measure, order, and install.",
		priceRange: "$1,200–$7,000",
	},
	{
		name: "Backsplash Installation",
		description:
			"Tile, subway, peel-and-stick, or natural stone backsplash installed cleanly behind your range or sink. One of the highest visual-impact updates per dollar spent.",
		priceRange: "$400–$1,800",
	},
];

const faqs = [
	{
		q: "Do I need a permit for a kitchen or bathroom update in Clark County?",
		a: "Minor cosmetic updates — hardware, fixtures, caulk, tile — do not require a permit. Permits are required when moving plumbing, electrical, or walls. Norbilt pulls permits when needed and knows Clark County's requirements.",
	},
	{
		q: "What is the difference between a cosmetic update and a full remodel?",
		a: "A cosmetic update refreshes surfaces and fixtures within the existing layout — typically $800–$5,000. A full remodel strips to the studs and rebuilds everything, typically $15,000–$28,000+. We help you identify which scope makes sense for your goals and budget.",
	},
	{
		q: "How long does a bathroom remodel take?",
		a: "A cosmetic refresh takes 1–2 days. A mid-range update takes 3–7 days. A full gut remodel takes 1–3 weeks. We confirm the exact timeline during your free estimate based on scope.",
	},
	{
		q: "Can you match my existing tile or grout?",
		a: "We color-match grout before starting any repair or regrout project. For tile, an exact match depends on whether the same tile is still available. We bring samples to the walkthrough so you can confirm the match before we order.",
	},
	{
		q: "How long does a tub-to-shower conversion take?",
		a: "A prefab insert conversion takes 1–2 days. A custom tile walk-in shower takes 3–5 days including tile cure time. We confirm the timeline during your free estimate based on the specific scope.",
	},
	{
		q: "Can we do the kitchen and bathroom at the same time?",
		a: "Yes, and it often saves money on mobilization costs. We schedule both together when possible. The kitchen typically stays usable throughout — bathroom access is limited only during tile cure days.",
	},
	{
		q: "What does kitchen and bathroom work cost in Vancouver, WA?",
		a: "Based on 2026 Clark County rates: cosmetic refreshes run $800–$2,500, mid-range bathroom updates $5,000–$12,000, full gut remodels $15,000–$28,000+, tub-to-shower conversions $1,500–$8,000, and backsplash installs $400–$1,800. All pricing depends on materials, scope, and site conditions.",
	},
	{
		q: "Is your kitchen and bathroom work covered by a warranty?",
		a: "Yes. All Norbilt kitchen and bathroom work is backed by a 1-year workmanship warranty. If caulk fails, tile lifts, or any installed fixture has a workmanship issue, we return and fix it at no charge within the warranty period.",
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
			"@type": "LocalBusiness",
			name: "Norbilt",
			url: "https://norbilt.com/services/kitchen-bath",
			telephone: "+1-3602169920",
			areaServed: "Clark County, WA",
			description:
				"Licensed kitchen and bathroom update contractor serving Vancouver WA and Clark County. Cabinet hardware, faucets, tile, tub-to-shower conversions, full remodels.",
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "5.0",
				reviewCount: "27",
				bestRating: "5",
				worstRating: "1",
			},
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
	title: "Kitchen & Bathroom Updates | Vancouver WA | Norbilt",
	description:
		"Licensed kitchen and bathroom contractor in Vancouver WA and Clark County. Cosmetic refreshes to full gut remodels. Free estimates. 1-year workmanship warranty.",
};

export default function KitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* HERO */}
			<section className="relative min-h-[80vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/remodel-images/IMG_7646.jpg"
						alt="Modern kitchen and bathroom refresh services in Vancouver WA"
						fill
						priority
						sizes="100vw"
						className="object-cover object-center"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Vancouver WA · Clark County
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
							Kitchen & <br />
							<span className="text-[#FFB800]">Bath Updates</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							From a $900 fixture swap to a $25,000 full remodel — Norbilt handles
							every level of kitchen and bathroom work in Clark County. Licensed,
							insured, and backed by a 1-year workmanship warranty.
						</p>

						<div className="pt-4">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Update Kitchen/Bath
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>
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

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Licensed WA General Contractor
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

			{/* CITATION CAPSULE — AI Overview target */}
			<section className="py-10 bg-[#FFFBEA] border-y-2 border-[#FFB800]/40">
				<div className="max-w-4xl mx-auto px-6">
					<p className="text-base font-bold text-[#1F2E2B] leading-relaxed">
						<span className="text-[#FFB800] font-black">Clark County 2026:</span>{" "}
						Kitchen and bathroom updates in Vancouver WA range from{" "}
						<strong>$800 for a cosmetic refresh</strong> to{" "}
						<strong>$28,000+ for a full gut remodel</strong>. Licensed contractor
						labor runs $65–$95/hr. Tub-to-shower conversions average $1,500–$8,000
						depending on scope. Permits required for plumbing and electrical
						changes — Norbilt pulls all permits included in project cost.
					</p>
				</div>
			</section>

			{/* VALUE PROPOSITION */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Smart Updates <br />
								<span className="text-[#2D5A3D]">Drive Home Value</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								You don't always need a full renovation to change the feel of your
								home. Norbilt specializes in <strong>targeted updates</strong> that
								modernize your kitchen and bathroom while keeping your daily life
								intact. We focus on the details that buyers — and your family —
								notice most.
							</p>

							<p className="text-gray-600 font-medium leading-relaxed">
								As a licensed general contractor in Clark County, we do work that
								unlicensed handymen legally cannot — including permitted plumbing
								and electrical. Every project includes a free written estimate and
								a 1-year workmanship warranty.
							</p>

							<div className="flex items-center gap-4 p-6 bg-[#F8F6F3] rounded-2xl border-l-8 border-[#FFB800]">
								<BadgeCheck className="w-8 h-8 text-[#2D5A3D] shrink-0" />
								<p className="text-sm font-black uppercase tracking-widest text-[#1F2E2B]">
									1-Year Workmanship Warranty on all kitchen & bath work.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="bg-[#F8F6F3] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-xl mb-6 flex items-center gap-2">
									<Layout className="w-5 h-5 text-[#2D5A3D]" /> Kitchen
								</h3>
								<ul className="space-y-4">
									{[
										"Custom Backsplashes",
										"Cabinet Hardware & Doors",
										"Under-Mount Sink Swaps",
										"Countertop Replacement",
										"Designer Lighting",
									].map((li) => (
										<li
											key={li}
											className="flex items-center gap-2 text-sm font-bold text-gray-600"
										>
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />
											{li}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-[#1F2E2B] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
								<Droplets className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
								<h3 className="font-black text-[#FFB800] uppercase tracking-tight text-xl mb-6 flex items-center gap-2">
									<Waves className="w-5 h-5" /> Bathroom
								</h3>
								<ul className="space-y-4">
									{[
										"Vanity & Mirror Sets",
										"Tub-to-Shower Conversion",
										"Tile & Grout Work",
										"High-Efficiency Toilets",
										"Caulk & Waterproofing",
									].map((li) => (
										<li
											key={li}
											className="flex items-center gap-2 text-sm font-bold text-[#A7C4B5]"
										>
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />
											{li}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* TYPES OF SERVICE */}
			<section className="py-24 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
						Types of Kitchen & Bathroom Work
					</h2>
					<p className="text-white/60 font-medium mb-12 max-w-2xl">
						Every project is different. Here's how we scope and price the most
						common types we handle across Clark County — all based on 2026 local
						market rates.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{serviceTypes.map((type, i) => (
							<div
								key={i}
								className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFB800] transition-colors group"
							>
								<div className="flex items-start justify-between mb-4 gap-4">
									<h3 className="text-lg font-black uppercase tracking-tight group-hover:text-[#FFB800] transition-colors">
										{type.name}
									</h3>
									<span className="flex items-center gap-1 text-[#FFB800] font-black text-sm whitespace-nowrap shrink-0">
										<DollarSign className="w-3 h-3" />
										{type.priceRange}
									</span>
								</div>
								<p className="text-white/60 text-sm leading-relaxed">
									{type.description}
								</p>
							</div>
						))}
					</div>
					<p className="mt-10 text-white/40 text-sm">
						All prices are estimates for Clark County, WA based on 2026 market
						rates. Final pricing depends on site conditions and material
						selections. Free written estimate before any work begins.
					</p>
				</div>
			</section>

			{/* CAPABILITIES SECTION */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Our Process"
						title="Clean, Efficient Upgrades"
						description="Designed for busy Clark County households who value precision and speed."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
						{[
							{
								icon: Droplets,
								title: "Plumbing Fixtures",
								text: "Modernize with designer faucets and shower systems — precision installed with zero-leak guarantees.",
							},
							{
								icon: Layout,
								title: "Tile & Backsplashes",
								text: "Precision-cut tile with professional-grade waterproofing for kitchens and master baths.",
							},
							{
								icon: Hammer,
								title: "Vanity & Mirror Sets",
								text: "Removal of dated cabinets and seamless installation of modern vanities, stone tops, and integrated lighting.",
							},
							{
								icon: Waves,
								title: "Moisture Protection",
								text: "Professional re-caulking and grout sealing to prevent mold and structural water damage.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
							>
								<div className="w-14 h-14 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1F2E2B] transition-colors">
									<item.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#FFB800]" />
								</div>
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight mb-4 leading-none">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 font-medium leading-relaxed">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<section className="py-24 bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-gray-500 font-medium mb-12">
						Kitchen & bathroom updates in Vancouver WA and Clark County.
					</p>
					<div className="space-y-4">
						{faqs.map((item, i) => (
							<details
								key={i}
								className="group border-2 border-gray-100 rounded-2xl overflow-hidden bg-[#FDFCFB] open:border-[#FFB800]/40 open:bg-white transition-all"
							>
								<summary className="flex items-start justify-between px-8 py-6 cursor-pointer list-none gap-4">
									<div className="flex gap-4 items-start">
										<span className="text-[#FFB800] font-black text-xl shrink-0">
											0{i + 1}
										</span>
										<h3 className="text-lg font-black text-[#1F2E2B] tracking-tight">
											{item.q}
										</h3>
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
			<section className="py-16 bg-[#F8F6F3] border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6">
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-6">
						Kitchen & Bath Updates by City
					</p>
					<div className="flex flex-wrap gap-3">
						{cities.map((city) => (
							<Link
								key={city.slug}
								href={`/locations/${city.slug}/kitchen-bath`}
								className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors shadow-sm"
							>
								<MapPin className="w-3 h-3" />
								{city.name}, WA
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Refresh Your Space <br />
								<span className="text-[#FFB800]">Without The Chaos</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Free estimate, honest pricing, and a 1-year warranty on every job.
								Contact us to walk through your project.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Update Kitchen/Bath
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
	);
}
