"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Hammer,
	CheckCircle2,
	Shield,
	Phone,
	ArrowRight,
	Wrench,
	HardHat,
	Home,
	Paintbrush,
	DoorOpen,
	Lightbulb,
	MapPin,
	Clock,
	ChevronDown,
	BadgeCheck,
	DollarSign,
	Zap,
} from "lucide-react";
import Link from "next/link";
import { locationsData } from "../../data";

const iconMap: Record<string, any> = {
	"handyman": HardHat,
	"drywall-repair": Wrench,
	"finish-carpentry": Hammer,
	"door-window": DoorOpen,
	"flooring": Paintbrush,
	"kitchen-bath": Lightbulb,
	"home-repair": Home,
};

function getHeroIntro(city: any, cityNameShort: string, serviceSlug: string, serviceTitle: string): string {
	const neighborhoods = city.neighborhoods?.slice(0, 2).join(" and ") || cityNameShort;
	const housingNote = city.housingNotes?.split(".")[0] || "";
	const matchedProject = city.commonProjects?.find((p: any) =>
		p.name.toLowerCase().includes(serviceSlug.replace("-", " ")) ||
		serviceSlug.includes(p.name.toLowerCase().split(" ")[0])
	);

	if (matchedProject) {
		return matchedProject.desc + ` NORBILT handles ${serviceTitle.toLowerCase()} in ${cityNameShort} with the same licensed crew and written estimate on every job.`;
	}
	if (housingNote) {
		return `${housingNote}. We tailor every ${serviceTitle.toLowerCase()} job to the specific conditions we find — from the neighborhoods of ${neighborhoods} to the rest of ${cityNameShort}. Licensed, bonded, free written estimate before any work starts.`;
	}
	return `NORBILT handles ${serviceTitle.toLowerCase()} for homeowners in ${cityNameShort} — ${neighborhoods} and beyond. Licensed general contractor, written estimate, 1-year workmanship warranty on every job.`;
}

function getTimelineFaq(serviceSlug: string, cityNameShort: string): string {
	const timelines: Record<string, string> = {
		"handyman": `Handyman jobs in ${cityNameShort} typically run a few hours to a full day depending on the punch list. We batch small repairs efficiently so you're not paying a trip charge for each item.`,
		"drywall-repair": `Most drywall patches in ${cityNameShort} take one day — a morning to patch and prime, return visit once dry to texture-match and paint. Larger sections may need two days.`,
		"finish-carpentry": `Trim and carpentry work in ${cityNameShort} typically runs 1–3 days depending on linear footage and complexity. Crown molding in a single room usually wraps in a day.`,
		"kitchen-bath": `A cosmetic kitchen or bath update in ${cityNameShort} runs 2–5 days. Full gut remodels are typically 2–4 weeks. We give you a timeline in writing before work starts.`,
		"flooring": `Flooring installation in ${cityNameShort} averages 1–2 days for a typical room. Larger floor plans or tile work may run 3–4 days including curing time.`,
		"door-window": `Door and window installs in ${cityNameShort} usually take a few hours per unit. A full door replacement including trim typically wraps in half a day.`,
		"home-repair": `Home repair timelines in ${cityNameShort} vary by scope. Most single-item repairs finish in a few hours; multi-item punch lists are typically done in one visit.`,
		"lighting": `Lighting and fixture swaps in ${cityNameShort} usually run 1–3 hours per fixture. Recessed lighting installations take a half-day to full day depending on the number of cans.`,
	};
	return timelines[serviceSlug] || `Most projects in ${cityNameShort} finish in 1–2 days. We give you a written timeline before any work begins.`;
}

export default function ServicePageClient({
	city,
	service,
	citySlug,
	serviceSlug,
}: any) {
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const Icon = iconMap[serviceSlug] || Hammer;
	const cityNameShort = city.name.split(",")[0];
	const heroIntro = getHeroIntro(city, cityNameShort, serviceSlug, service.title);

	const genericFaqs = [
		{
			q: `How long does ${service.title} take in ${cityNameShort}?`,
			a: getTimelineFaq(serviceSlug, cityNameShort),
		},
		{
			q: `Is NORBILT licensed to work in ${cityNameShort}, WA?`,
			a: `Yes — NORBILT holds WA General Contractor License NORBI**741CS, is bonded, and carries $1M liability insurance. We pull all required permits for ${cityNameShort} projects and are familiar with Clark County inspection requirements.`,
		},
		{
			q: `How do I get a ${service.title.toLowerCase()} estimate in ${cityNameShort}?`,
			a: `Call or text (360) 216-9920, or submit the online form. Andrey schedules ${cityNameShort} walkthroughs the same week and provides a written estimate before any work starts — no obligation.`,
		},
	];
	const faqs = service.faqs ? [...service.faqs, ...genericFaqs] : genericFaqs;

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "BreadcrumbList",
								itemListElement: [
									{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
									{ "@type": "ListItem", position: 2, name: "Locations", item: "https://www.norbilt.com/locations" },
									{ "@type": "ListItem", position: 3, name: city.name, item: `https://www.norbilt.com/locations/${citySlug}` },
									{ "@type": "ListItem", position: 4, name: service.title, item: `https://www.norbilt.com/locations/${citySlug}/${serviceSlug}` },
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
							{
								"@type": "LocalBusiness",
								name: "NORBILT",
								url: `https://www.norbilt.com/locations/${citySlug}/${serviceSlug}`,
								telephone: "+1-3602169920",
								aggregateRating: {
									"@type": "AggregateRating",
									ratingValue: "5.0",
									reviewCount: "13",
									bestRating: "5",
									worstRating: "1",
								},
							},
							{
								"@type": "ItemList",
								name: `${service.title} Services`,
								numberOfItems: service.features.length,
								itemListElement: service.features.map((feature: string, index: number) => ({
									"@type": "ListItem",
									position: index + 1,
									name: feature,
								})),
							},
						],
				}),
				}}
			/>

			{/* HERO SECTION - Keyword Optimized */}
			<section className="pt-32 pb-24 bg-[#14201D] text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFB800_1px,transparent_1px)] bg-size-[40px_40px]" />
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="flex items-center gap-3 text-[#FFB800] mb-6">
							<Icon className="w-6 h-6" />
							<span className="font-black uppercase tracking-widest text-xs">
								Expert {cityNameShort} General Contractor
							</span>
						</div>

						<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
							{service.title} <br />
							<span className="text-[#FFB800]">in {cityNameShort}, WA</span>
						</h1>

						<p className="max-w-2xl text-xl text-white/70 border-l-4 border-[#FFB800] pl-6 mb-10 font-medium leading-relaxed">
							{heroIntro}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 pt-2">
							<Link
								href="/estimate"
								className="inline-flex items-center justify-center gap-3 bg-[#FFB800] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
							>
								<Zap className="w-5 h-5" /> Get Instant Estimate
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all"
							>
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* TRUST STATS */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div>
						<p className="text-3xl font-black">5.0</p>
						<p className="text-[10px] uppercase font-black text-gray-400">
							Google Rating
						</p>
					</div>
					<div>
						<p className="text-3xl font-black">100%</p>
						<p className="text-[10px] uppercase font-black text-gray-400">
							Licensed & Bonded
						</p>
					</div>
					<div>
						<p className="text-3xl font-black">1-YR</p>
						<p className="text-[10px] uppercase font-black text-gray-400">
							Workmanship Warranty
						</p>
					</div>
					<div>
						<p className="text-3xl font-black">LOCAL</p>
						<p className="text-[10px] uppercase font-black text-gray-400">
							Family Owned
						</p>
					</div>
				</div>
			</section>

			{/* CONTENT & SIDEBAR */}
			<section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
				<div className="space-y-8">
					<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tight">
						Professional {service.title} <br />
						<span className="text-[#2D5A3D]">
							for {cityNameShort} Properties
						</span>
					</h2>

					<p className="text-gray-600 font-medium text-lg leading-relaxed">
						{service.description}
					</p>

					<p className="text-gray-500 text-base leading-relaxed">
						{service.process}
					</p>

					<div className="grid gap-4">
						{service.features.map((feature: string) => (
							<div
								key={feature}
								className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-[#FFB800] transition-colors"
							>
								<CheckCircle2 className="w-6 h-6 text-[#2D5A3D]" />
								<span className="font-bold text-[#1F2E2B] uppercase text-sm tracking-widest">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-8">
					<div className="bg-[#1F2E2B] p-12 rounded-[3rem] border-b-8 border-[#FFB800] text-white">
						<Shield className="w-12 h-12 text-[#FFB800] mb-6" />
						<h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">
							The NORBILT Promise
						</h3>
						<p className="text-[#A7C4B5] mb-8 font-medium italic">
							"We provide craftsmanship you can trust for a home you can be
							proud of in {cityNameShort}."
						</p>
						<div className="space-y-4 mb-10 text-sm font-bold uppercase">
							<div className="flex items-center gap-3">
								<Clock className="w-4 h-4 text-[#FFB800]" /> Reliable Scheduling
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="w-4 h-4 text-[#FFB800]" /> {cityNameShort},
								WA
							</div>
							<div className="flex items-center gap-3">
								<BadgeCheck className="w-4 h-4 text-[#FFB800]" /> 1-Year Workmanship Warranty
							</div>
						</div>
						<Link
							href="tel:+13602169920"
							className="flex items-center gap-4 text-2xl font-black text-[#FFB800] border-t border-white/10 pt-6"
						>
							<Phone className="w-6 h-6" /> (360) 216-9920
						</Link>
					</div>
				</div>
			</section>


			{/* TYPES OF SERVICE */}
			{service.types && service.types.length > 0 && (
				<section className="py-24 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6">
						<h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
							Types of {service.title}
						</h2>
						<p className="text-white/60 font-medium mb-12 max-w-2xl">
							Every {service.title.toLowerCase()} project is different. Here's how we scope and price the most common types we handle in {cityNameShort}.
						</p>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{service.types.map((type: any, i: number) => (
								<div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFB800] transition-colors group">
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-lg font-black uppercase tracking-tight group-hover:text-[#FFB800] transition-colors">
											{type.name}
										</h3>
										<span className="flex items-center gap-1 text-[#FFB800] font-black text-sm whitespace-nowrap">
											<DollarSign className="w-3 h-3" />{type.priceRange}
										</span>
									</div>
									<p className="text-white/60 text-sm leading-relaxed">{type.description}</p>
								</div>
							))}
						</div>
						<p className="mt-10 text-white/40 text-sm">
							All prices are estimates for {cityNameShort}, WA based on 2026 Clark County market rates. Final pricing depends on site conditions and material selections. Free written estimate before any work begins.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row gap-4">
							<Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg text-sm">
								Get Instant Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<Link href="tel:+13602169920" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm">
								<Phone className="w-4 h-4" /> 360.216.9920
							</Link>
						</div>
					</div>
				</section>
			)}

			{/* CITY CONTEXT + NEARBY AREAS */}
		<section className="py-16 bg-white border-t border-gray-100">
			<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
				<div>
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						{service.title} in {cityNameShort}: What to Expect
					</h2>
					<p className="text-gray-600 leading-relaxed mb-4">{city.description}</p>
					<p className="text-gray-600 leading-relaxed">
						We serve all neighborhoods in {cityNameShort}, including{" "}
						{city.neighborhoods.slice(0, 3).join(", ")}. Free estimates for all {cityNameShort} homeowners — no obligation.
					</p>
				</div>
				<div>
					<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-4">
						Also Serving Nearby Areas
					</p>
					<div className="flex flex-wrap gap-2">
						{Object.entries(locationsData)
							.filter(([slug]) => slug !== citySlug)
							.slice(0, 6)
							.map(([slug, data]) => (
								<Link
									key={slug}
									href={`/locations/${slug}/${serviceSlug}`}
									className="flex items-center gap-1 px-4 py-2 bg-[#F8F6F3] rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
								>
									<MapPin className="w-3 h-3" />
									{data.name.split(",")[0]}, WA
								</Link>
							))}
					</div>
				</div>
			</div>
		</section>

		{/* FAQ SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-4xl font-black text-center text-[#1F2E2B] uppercase mb-16">
						Homeowner FAQ
					</h2>
					<div className="space-y-4">
						{faqs.map((item, i) => (
							<div
								key={i}
								className="border-2 border-white rounded-2xl overflow-hidden bg-white/50 hover:bg-white transition-all shadow-sm"
							>
								<button
									onClick={() => setOpenFaq(openFaq === i ? null : i)}
									className="w-full px-8 py-6 flex items-start justify-between text-left group"
								>
									<div className="flex gap-4 items-start">
										<span className="text-[#FFB800] font-black text-xl">
											0{i + 1}
										</span>
										<h3 className="text-xl font-black text-[#1F2E2B] tracking-tight">
											{item.q}
										</h3>
									</div>
									<ChevronDown
										className={`w-6 h-6 text-[#FFB800] transition-transform ${openFaq === i ? "rotate-180" : ""}`}
									/>
								</button>
								{openFaq === i && (
									<div className="px-8 pb-6 pl-20 text-gray-600 font-medium text-lg leading-relaxed border-t border-gray-50 pt-4">
										{item.a}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* BOTTOM CTA */}
			<section className="py-16 bg-[#1F2E2B] text-white">
				<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
					<div>
						<p className="text-[#FFB800] font-black uppercase tracking-widest text-xs mb-2">Ready to Get Started?</p>
						<h2 className="text-2xl font-black uppercase tracking-tight">
							{service.title} in {cityNameShort} — Free Estimate, 1-Year Warranty.
						</h2>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 shrink-0">
						<Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm">
							Free Estimate <ArrowRight className="w-4 h-4" />
						</Link>
						<Link href="tel:+13602169920" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm">
							<Phone className="w-4 h-4" /> 360.216.9920
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
