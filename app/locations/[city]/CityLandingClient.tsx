"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "../data";
import Link from "next/link";
import {
	MapPin,
	ArrowRight,
	Hammer,
	Wrench,
	Paintbrush,
	DoorOpen,
	Lightbulb,
	HardHat,
	ShieldCheck,
	Star,
	CheckCircle2,
	ChevronDown,
	Phone,
} from "lucide-react";

const iconMap: Record<string, any> = {
	"handyman-services": HardHat,
	"drywall-repair": Wrench,
	"finish-carpentry": Hammer,
	"door-window-repair": DoorOpen,
	"flooring-repair-interior-updates": Paintbrush,
	"kitchen-bathroom-updates": Lightbulb,
};

export default function CityLandingClient({ city, citySlug }: any) {
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const cityNameShort = city.name.split(",")[0];

	const faqs = [
		{
			q: `Do you provide home repairs in ${cityNameShort}?`,
			a: `Yes. Norbilt serves all ${cityNameShort} homeowners. We handle everything from small handyman tasks to full interior remodeling projects.`,
		},
		{
			q: `Are you a licensed general contractor in ${cityNameShort}, WA?`,
			a: `Yes. Norbilt is a fully licensed, bonded, and insured general contractor. We provide professional repair services with total integrity.`,
		},
		{
			q: `Which neighborhoods in ${cityNameShort} do you visit?`,
			a: `We serve the entire region. This includes ${city.neighborhoods.slice(0, 3).join(", ")} and nearby Clark County communities.`,
		},
	];

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			{/* FAQ & LocalBusiness Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "LocalBusiness",
								name: `Norbilt ${cityNameShort}`,
								telephone: "+19165086272",
								areaServed: city.neighborhoods.map((n: string) => ({
									"@type": "Place",
									name: n,
								})),
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

			{/* HERO SECTION - Includes Internal Linking "Spiderweb" */}
			<section className="pt-32 pb-24 bg-[#14201D] text-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB800]/5 -skew-x-12 translate-x-1/2" />
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="flex items-center gap-3 text-[#FFB800] mb-6">
							<MapPin className="w-5 h-5" />
							<span className="font-black uppercase tracking-widest text-[10px]">
								Licensed General Contractor in {cityNameShort}
							</span>
						</div>
						<h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85]">
							Home Repair <br />
							<span className="text-[#FFB800]">in {cityNameShort}, WA</span>
						</h1>
						<p className="text-xl text-white/70 max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 leading-relaxed mb-10">
							{city.description} As a leading{" "}
							<Link
								href={`/locations/${citySlug}`}
								className="text-[#FFB800] hover:underline underline-offset-8"
							>
								General Contractor in {cityNameShort}
							</Link>
							, we specialize in everything from{" "}
							<Link
								href={`/locations/${citySlug}/drywall-repair`}
								className="hover:text-white transition-colors underline decoration-[#FFB800]/30"
							>
								Drywall Repair
							</Link>{" "}
							to{" "}
							<Link
								href={`/locations/${citySlug}/finish-carpentry`}
								className="hover:text-white transition-colors underline decoration-[#FFB800]/30"
							>
								Finish Carpentry
							</Link>
							.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/contact"
								className="bg-[#FFB800] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
							>
								Get Free Estimate
							</Link>
							<Link
								href="tel:+19165086272"
								className="border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
							>
								Call Now
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* BREADCRUMBS */}
			<div className="bg-white border-b border-gray-100 py-4">
				<div className="max-w-7xl mx-auto px-6">
					<nav className="flex text-[10px] font-black uppercase tracking-widest text-gray-400 gap-2">
						<Link href="/" className="hover:text-[#2D5A3D]">
							Home
						</Link>
						<span>/</span>
						<Link href="/locations" className="hover:text-[#2D5A3D]">
							Locations
						</Link>
						<span>/</span>
						<span className="text-[#FFB800]">{cityNameShort}</span>
					</nav>
				</div>
			</div>

			{/* SERVICE GRID */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div className="max-w-xl">
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
							Local Craftsmanship
						</h2>
						<p className="text-gray-500 font-medium leading-relaxed">
							Explore our specialized services for {cityNameShort} homeowners.
							We handle everything from minor repairs to interior updates.
						</p>
					</div>
					<div className="flex items-center gap-2 bg-[#F8F6F3] px-6 py-3 rounded-2xl border border-gray-100 font-black uppercase tracking-widest text-[10px] text-[#1F2E2B]">
						<ShieldCheck className="text-[#2D5A3D] w-5 h-5" /> Licensed & Bonded
						WA #NORBI**
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{Object.entries(servicesData).map(([slug, service]) => {
						const Icon = iconMap[slug] || Wrench;
						return (
							<Link
								key={slug}
								href={`/locations/${citySlug}/${slug}`}
								className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
							>
								<div className="absolute top-0 right-0 w-24 h-24 bg-[#F8F6F3] rounded-bl-[3rem] -mr-8 -mt-8 group-hover:bg-[#FFB800] transition-colors" />
								<div className="relative z-10">
									<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
										<Icon className="w-7 h-7 text-[#2D5A3D]" />
									</div>
									<h3 className="text-2xl font-black text-[#1F2E2B] uppercase mb-4 leading-none tracking-tighter">
										{service.title} <br />
										<span className="text-gray-300 text-lg group-hover:text-[#2D5A3D] transition-colors">
											in {cityNameShort}
										</span>
									</h3>
									<p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
										Professional {service.title.toLowerCase()} results for your
										residential property.
									</p>
									<div className="inline-flex items-center gap-2 bg-[#1F2E2B] text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-[#FFB800] group-hover:text-black transition-colors">
										View Service <ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</section>

			{/* NEIGHBORHOOD SECTION */}
			<section className="py-24 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">
							Serving Your <br />
							<span className="text-[#FFB800] not-italic">
								{cityNameShort} Neighborhood
							</span>
						</h2>
						<p className="text-[#A7C4B5] mb-10 font-medium text-lg leading-relaxed">
							We bring our mobile workshop to your door. Our team serves the
							entire region, including:
						</p>
						<div className="grid grid-cols-2 gap-y-4">
							{city.neighborhoods.map((n: string) => (
								<div key={n} className="flex items-center gap-3">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
									<span className="font-bold uppercase tracking-tight text-sm">
										{n}
									</span>
								</div>
							))}
						</div>
					</div>
					<div className="bg-[#14201D] p-12 rounded-[3rem] text-center border border-white/5 shadow-2xl relative">
						<Star className="w-12 h-12 text-[#FFB800] mx-auto mb-6 fill-[#FFB800]" />
						<h3 className="text-2xl font-black uppercase mb-4 tracking-tighter text-white">
							Local Trust
						</h3>
						<p className="text-[#A7C4B5] italic mb-8">
							"Norbilt provides the best contracting service in {cityNameShort}.
							They are professional, clean, and fast."
						</p>
						<div className="h-px w-20 bg-[#FFB800] mx-auto mb-4" />
						<p className="font-black uppercase tracking-widest text-xs italic opacity-60">
							Verified {cityNameShort} Homeowner
						</p>
					</div>
				</div>
			</section>

			{/* LOCAL PROOF & MAP SECTION - New Change #2 */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
							Service Area & <br />{" "}
							<span className="text-[#2D5A3D]">Local Presence</span>
						</h2>
						<div className="space-y-6">
							<div className="bg-[#F8F6F3] p-8 rounded-3xl border border-gray-100">
								<p className="font-black uppercase text-[#2D5A3D] text-xs mb-2 tracking-widest">
									Business Information
								</p>
								<p className="text-2xl font-black text-[#1F2E2B] mb-1">
									Norbilt Home Repairs
								</p>
								<p className="text-gray-600 font-medium mb-4">
									Licensed • Bonded • Insured
								</p>
								<div className="flex flex-col gap-3 font-bold text-[#1F2E2B]">
									<a
										href="tel:+19165086272"
										className="flex items-center gap-3 hover:text-[#2D5A3D] transition-colors"
									>
										<Phone className="w-5 h-5 text-[#FFB800]" /> (916) 508-6272
									</a>
									<div className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-[#FFB800]" />{" "}
										{cityNameShort}, WA
									</div>
								</div>
							</div>
							<p className="text-gray-500 italic text-sm leading-relaxed">
								Norbilt is a mobile-first service provider. We bring high-end
								craftsmanship directly to your home in {cityNameShort}. Our
								estimates are transparent and our work is guaranteed.
							</p>
						</div>
					</div>

					<div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group relative">
						<iframe
							title={`Norbilt Service Area in ${cityNameShort}`}
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30137.21939619426!2d-122.59410019641753!3d45.70856868339603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1771813681184!5m2!1sen!2sus"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="grayscale group-hover:grayscale-0 transition-all duration-700"
						></iframe>

						<div className="absolute inset-0 pointer-events-none border-[1px] border-black/5 rounded-[3rem]"></div>
					</div>
				</div>
			</section>

			{/* DYNAMIC FAQ SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6">
					<div className="text-center mb-16">
						<p className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-[10px] mb-4 text-center mx-auto">
							Expert Advice
						</p>
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Frequently Asked Questions
						</h2>
					</div>
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
										<h4 className="text-xl font-black text-[#1F2E2B] tracking-tight">
											{item.q}
										</h4>
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
		</div>
	);
}
