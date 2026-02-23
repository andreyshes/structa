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
	Paintbrush,
	DoorOpen,
	Lightbulb,
	Star,
	MapPin,
	Clock,
	ChevronDown,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
	"handyman-services": HardHat,
	"drywall-repair": Wrench,
	"finish-carpentry": Hammer,
	"door-window-repair": DoorOpen,
	"flooring-repair-interior-updates": Paintbrush,
	"kitchen-bathroom-updates": Lightbulb,
};

export default function ServicePageClient({
	city,
	service,
	citySlug,
	serviceSlug,
}: any) {
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const Icon = iconMap[serviceSlug] || Hammer;
	const cityNameShort = city.name.split(",")[0];

	// Audit Fix: Simplified FAQ answers for better "Readability" scores
	const faqs = [
		{
			q: `How long does ${service.title} take in ${cityNameShort}?`,
			a: `Most ${cityNameShort} projects finish in 1-2 days. We keep our workspace clean and work fast to minimize home disruption.`,
		},
		{
			q: `Are you a licensed general contractor in ${cityNameShort}?`,
			a: `Yes. Norbilt is a fully licensed, bonded, and insured general contractor. We serve homeowners throughout ${cityNameShort} and Clark County.`,
		},
		{
			q: `Do you provide free estimates for ${service.title}?`,
			a: `We do. Contact us to schedule a walkthrough. We provide clear, transparent pricing for all ${cityNameShort} residents.`,
		},
	];

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
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

			{/* HERO SECTION - Optimized for Heading Hierarchy */}
			<section className="pt-32 pb-24 bg-[#14201D] text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFB800_1px,transparent_1px)] bg-[size:40px_40px]" />
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="flex items-center gap-3 text-[#FFB800] mb-6">
							<Icon className="w-6 h-6" />
							<span className="font-black uppercase tracking-widest text-xs">
								Top-Rated ${cityNameShort} General Contractor
							</span>
						</div>
						{/* Audit Fix: H1 now contains the absolute primary keyword + location */}
						<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
							{service.title} <br />
							<span className="text-[#FFB800]">in {cityNameShort}, WA</span>
						</h1>
						<p className="max-w-2xl text-xl text-white/70 border-l-4 border-[#FFB800] pl-6 mb-10 font-medium">
							Norbilt delivers professional ${service.title.toLowerCase()} for
							homeowners. Our team ensures high-quality results and precision on
							every project.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-4 bg-[#FFB800] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
						>
							Get Free Estimate <ArrowRight className="w-5 h-5" />
						</Link>
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
							Licensed/Bonded
						</p>
					</div>
					<div>
						<p className="text-3xl font-black">CLEAN</p>
						<p className="text-[10px] uppercase font-black text-gray-400">
							Project Sites
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

			{/* CONTENT & SIDEBAR - Simplified Readability */}
			<section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
				<div className="space-y-8">
					<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tight">
						Local ${service.title} <br />
						<span className="text-[#2D5A3D]">Experts in {cityNameShort}</span>
					</h2>
					<p className="text-gray-600 font-medium text-lg leading-relaxed">
						Norbilt sets professional standards for every home project. We
						understand local home styles. Our team provides efficient, clean
						results that last for years.
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
							The Norbilt Promise
						</h3>
						<p className="text-[#A7C4B5] mb-8 font-medium italic">
							"We provide craftsmanship you can trust for a home you can be
							proud of in {cityNameShort}."
						</p>
						<div className="space-y-4 mb-10 text-sm font-bold uppercase">
							<div className="flex items-center gap-3">
								<Clock className="w-4 h-4 text-[#FFB800]" /> Prompt Service
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="w-4 h-4 text-[#FFB800]" /> {cityNameShort} &
								Clark County
							</div>
						</div>
						<Link
							href="tel:+19165086272"
							className="flex items-center gap-4 text-2xl font-black text-[#FFB800] border-t border-white/10 pt-6"
						>
							<Phone className="w-6 h-6" /> (916) 508-6272
						</Link>
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
