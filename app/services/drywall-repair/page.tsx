import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	Sparkles,
	Droplets,
	Layers,
	Zap,
	MapPin,
	ShieldCheck,
	Phone,
	BadgeCheck,
	DollarSign,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

const serviceTypes = [
	{
		name: "Small Hole Repair",
		description:
			"Doorknob punch-throughs, anchor holes, and minor wall damage under 6 inches. Patched, textured, and primed in a single visit.",
		priceRange: "$150–$300",
	},
	{
		name: "Medium Patch",
		description:
			"Holes 6–12 inches from plumbing access, fixture removal, or impact damage. Cut back to studs, backed, mudded, and texture-matched.",
		priceRange: "$250–$500",
	},
	{
		name: "Water Damage Repair",
		description:
			"Moisture-damaged or soft drywall from leaks, condensation, or flooding. We remove compromised material, verify the source is resolved, and restore the surface.",
		priceRange: "$400–$1,200",
	},
	{
		name: "Texture Matching",
		description:
			"Orange peel, knockdown, skip trowel, smooth, or popcorn — we match your existing finish so repairs blend invisibly after paint.",
		priceRange: "$200–$600",
	},
	{
		name: "Popcorn Ceiling Removal",
		description:
			"Scrape, skim, and retexture popcorn ceilings to a smooth or light knockdown finish. Dramatically modernizes older Clark County homes.",
		priceRange: "$500–$1,500",
	},
	{
		name: "Full Room Drywall",
		description:
			"New drywall hang, tape, mud, sand, and texture for a complete room. Common after renovations, additions, or major water damage events.",
		priceRange: "$1,500–$4,000",
	},
];

const faqs = [
	{
		q: "Can you match my existing wall texture?",
		a: "Yes. We match orange peel, knockdown, skip trowel, smooth, and most popcorn textures. Before starting we test on a scrap piece to confirm the match before touching your wall.",
	},
	{
		q: "Do I need to repaint the whole wall after a drywall patch?",
		a: "Not always. We prime the repair to minimize flash. Whether a spot touch-up blends depends on your existing paint sheen and age. We will tell you honestly during the walkthrough.",
	},
	{
		q: "Can you repair water-damaged drywall?",
		a: "Yes. We remove the compromised material, confirm the moisture source is resolved, and restore the wall with new drywall and matched texture. We do not patch over wet or soft material.",
	},
	{
		q: "How long does drywall repair take to dry before painting?",
		a: "Joint compound cures in 24–48 hours depending on Clark County humidity. We prime before we leave so the surface is paint-ready the next day in most conditions.",
	},
	{
		q: "Do you remove popcorn ceilings?",
		a: "Yes. We scrape, skim, and retexture to a smooth or light knockdown finish. Pre-1978 Clark County homes may contain asbestos in the texture — we test before scraping and follow safe removal protocols.",
	},
	{
		q: "How long does drywall repair take?",
		a: "Small patches take 2–4 hours. Medium patches take a half day. Water damage repairs and full room work take 1–3 days depending on scope and cure time.",
	},
	{
		q: "What does drywall repair cost in Vancouver WA?",
		a: "Based on 2026 Clark County rates: small holes $150–$300, medium patches $250–$500, water damage repair $400–$1,200, texture matching $200–$600, popcorn ceiling removal $500–$1,500, and full room drywall $1,500–$4,000.",
	},
	{
		q: "Is your drywall work covered by a warranty?",
		a: "Yes. All Norbilt drywall work is covered by a 1-year workmanship warranty. If a patch cracks, lifts, or the texture mismatches after settling, we come back and fix it at no charge within the warranty period.",
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
			url: "https://norbilt.com/services/drywall-repair",
			telephone: "+1-3602169920",
			areaServed: "Clark County, WA",
			description:
				"Licensed drywall repair contractor serving Vancouver WA and Clark County. Hole patching, texture matching, water damage repair, popcorn ceiling removal.",
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
	title: "Drywall Repair | Vancouver WA | Norbilt",
	description:
		"Licensed drywall repair in Vancouver WA and Clark County. Hole patching, texture matching, water damage repair, popcorn ceiling removal. Free estimates. 1-year warranty.",
};

export default function DrywallRepairPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* HERO */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1628901551715-7234d14fb7a0?w=900&auto=format&fit=crop&q=60"
						alt="Professional drywall finishing and texture matching in Vancouver WA"
						fill
						priority
						sizes="100vw"
						className="object-cover"
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
							Seamless <br />
							<span className="text-[#FFB800]">Drywall Repair</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Expert wall restoration for Clark County homeowners. We specialize
							in invisible patches and precise texture blending — from a $150 hole
							fix to a full room rebuild. Backed by a 1-year workmanship warranty.
						</p>

						<div className="pt-4">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Get Free Estimate
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
							Expert Texture Matching
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
							Dust-Free Sanding Technology
						</span>
					</div>
				</div>
			</section>

			{/* CITATION CAPSULE */}
			<section className="py-10 bg-[#FFFBEA] border-y-2 border-[#FFB800]/40">
				<div className="max-w-4xl mx-auto px-6">
					<p className="text-base font-bold text-[#1F2E2B] leading-relaxed">
						<span className="text-[#FFB800] font-black">Clark County 2026:</span>{" "}
						Drywall repair in Vancouver WA costs <strong>$150–$300 for small holes</strong>,{" "}
						<strong>$250–$500 for medium patches</strong>, and{" "}
						<strong>$400–$1,200 for water damage repair</strong>. Popcorn ceiling
						removal runs $500–$1,500. Licensed contractor labor is $65–$95/hr.
						Pre-1978 homes may require asbestos testing before texture removal.
					</p>
				</div>
			</section>

			{/* AUTHORITY CONTENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Wall Restoration <br />
								<span className="text-[#2D5A3D]">Done The Right Way</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								It takes professional precision to make a drywall repair truly
								disappear. Whether you're dealing with settlement cracks, doorknob
								holes, or the aftermath of a plumbing leak, we deliver a Level 4
								finish that blends seamlessly with your existing walls.
							</p>

							<p className="text-gray-600 font-medium leading-relaxed">
								Clark County homes — especially those built before 1995 — often
								have orange peel or knockdown texture that requires an exact match.
								We test before we touch, and we don't leave until the repair is
								invisible. Every job is covered by a 1-year workmanship warranty.
							</p>

							<div className="flex items-center gap-4 p-6 bg-[#F8F6F3] rounded-2xl border-l-8 border-[#FFB800]">
								<BadgeCheck className="w-8 h-8 text-[#2D5A3D] shrink-0" />
								<p className="text-sm font-black uppercase tracking-widest text-[#1F2E2B]">
									1-Year Workmanship Warranty on all drywall repairs.
								</p>
							</div>

							<div className="space-y-4">
								{[
									"HEPA-Vacuum Dust Containment",
									"Precise Orange Peel & Knockdown Matching",
									"Moisture-Resistant Bathroom Materials",
									"Same-Day Patching Available",
								].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<BadgeCheck className="text-[#FFB800] w-5 h-5 shrink-0" />
										<span className="font-black text-xs uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6">
							{[
								{
									t: "Stress Cracks",
									d: "Fixing structural and corner cracks caused by PNW seasonal soil movement. We address the underlying movement, not just the surface.",
								},
								{
									t: "Water Damage Repair",
									d: "Surgical removal of compromised sheetrock and replacement with moisture-resistant backing. We confirm the leak source is resolved before closing the wall.",
								},
								{
									t: "Texture Matching",
									d: "Expert blending of Orange Peel, Knockdown, Skip Trowel, Smooth, and Popcorn finishes. We test on scrap before touching your wall.",
								},
								{
									t: "Popcorn Ceiling Removal",
									d: "Scrape and retexture to a modern smooth or knockdown finish. Pre-1978 homes are tested for asbestos before we start.",
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-[#F8F6F3] p-8 rounded-[2rem] border-l-8 border-[#FFB800] shadow-sm"
								>
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-xl mb-2">
										{item.t}
									</h3>
									<p className="text-gray-600 text-sm font-medium">{item.d}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* TYPES OF SERVICE */}
			<section className="py-24 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
						Types of Drywall Repair
					</h2>
					<p className="text-white/60 font-medium mb-12 max-w-2xl">
						Every drywall job is different. Here's how we scope and price the most
						common types across Clark County — based on 2026 local market rates.
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
						rates. Final pricing depends on site conditions and damage extent. Free
						written estimate before any work begins.
					</p>
				</div>
			</section>

			{/* CAPABILITIES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Expertise"
						title="Complete Sheetrock Services"
						description="From minor impacts to full ceiling restorations across Clark County."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
						{[
							{
								icon: Zap,
								title: "Impact & Hole Repair",
								text: "Structural backing and seamless taping for doorknob holes, furniture scuffs, and accidental wall damage.",
							},
							{
								icon: Droplets,
								title: "Water Damage Restoration",
								text: "Surgical removal of compromised sheetrock and professional treatment for mold prevention and structural drying.",
							},
							{
								icon: Layers,
								title: "Ceiling Restoration",
								text: "Specialized overhead repairs for sagging drywall, skylight leaks, and textured ceiling blending.",
							},
							{
								icon: Sparkles,
								title: "Clean-Finish Sanding",
								text: "Vacuum-assisted sanding to ensure a paint-ready surface with virtually zero dust left in your home.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-[#FFB800]/20"
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
						Drywall repair in Vancouver WA and Clark County.
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
						Drywall Repair by City
					</p>
					<div className="flex flex-wrap gap-3">
						{cities.map((city) => (
							<Link
								key={city.slug}
								href={`/locations/${city.slug}/drywall-repair`}
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
								Flawless Walls <br />
								<span className="text-[#FFB800]">Start Here</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Stop looking at that hole in the wall. Free estimate, honest
								pricing, and a 1-year warranty on every patch.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Get A Quote
								</Link>
								<Link
									href="tel:+13602169920"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> Call Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
