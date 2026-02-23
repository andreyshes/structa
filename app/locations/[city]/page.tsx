"use client";

import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { locationsData, servicesData } from "../data";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";

const iconMap: Record<string, any> = {
	"handyman-services": HardHat,
	"drywall-repair": Wrench,
	"finish-carpentry": Hammer,
	"door-window-repair": DoorOpen,
	"flooring-repair-interior-updates": Paintbrush,
	"kitchen-bathroom-updates": Lightbulb,
};

export default function CityLandingPage() {
	const params = useParams();
	const citySlug = params.city as string;
	const city = locationsData[citySlug];
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	if (!city) return notFound();

	const cityNameShort = city.name.split(",")[0];

	// Localized FAQ Content
	const faqs = [
		{
			q: `Do you provide emergency repairs in ${cityNameShort}?`,
			a: `While we primarily schedule remodeling and repair projects, we do our best to prioritize urgent home maintenance needs for our neighbors in ${cityNameShort}.`,
		},
		{
			q: `Are you a licensed contractor for ${cityNameShort} homeowners?`,
			a: `Yes. Norbilt is a fully licensed, bonded, and insured general contractor in Washington State, serving the entire ${cityNameShort} area with professional integrity.`,
		},
		{
			q: `Which neighborhoods in ${cityNameShort} do you visit?`,
			a: `We serve the entire region, including ${city.neighborhoods.slice(0, 3).join(", ")}, and surrounding Clark County communities.`,
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LocalBusiness",
				name: `Norbilt ${cityNameShort}`,
				telephone: "+19165086272",
				url: `https://norbilt.com/locations/${citySlug}`,
				address: {
					"@type": "PostalAddress",
					addressLocality: cityNameShort,
					addressRegion: "WA",
					addressCountry: "US",
				},
				areaServed: city.neighborhoods.map((n) => ({
					"@type": "Place",
					name: n,
				})),
			},
			{
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a,
					},
				})),
			},
		],
	};

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{/* HERO SECTION */}
			<section className="pt-32 pb-24 bg-[#14201D] text-white relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB800]/5 -skew-x-12 translate-x-1/2" />
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<div className="flex items-center gap-3 text-[#FFB800] mb-6">
							<MapPin className="w-5 h-5" />
							<span className="font-black uppercase tracking-widest text-xs">
								Primary Service Area: {cityNameShort}
							</span>
						</div>
						<h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.85]">
							Home Repair <br />
							<span className="text-[#FFB800]">in {cityNameShort}</span>
						</h1>
						<p className="text-xl text-white/70 max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 leading-relaxed mb-10">
							{city.description} Professional, licensed contracting and handyman
							services for homeowners throughout the {cityNameShort} community.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/contact"
								className="bg-[#FFB800] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors"
							>
								Book {cityNameShort} Estimate
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
							Craftsmanship You Can Trust
						</h2>
						<p className="text-gray-500 font-medium leading-relaxed">
							Select a specialized service below to learn how we help homeowners
							in {cityNameShort} maintain and upgrade their properties.
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
										Reliable, precision-focused {service.title.toLowerCase()}{" "}
										tailored for residential homes in {cityNameShort}.
									</p>
									<div className="inline-flex items-center gap-2 bg-[#1F2E2B] text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest group-hover:bg-[#FFB800] group-hover:text-black transition-colors">
										Explore Service <ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</section>

			{/* DYNAMIC FAQ SECTION (SEO POWER) */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6">
					<div className="text-center mb-16">
						<p className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
							Homeowner Guide
						</p>
						<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Common Questions in {cityNameShort}
						</h2>
					</div>
					<div className="space-y-4">
						{faqs.map((item, i) => (
							<div
								key={i}
								className="border-2 border-white rounded-2xl overflow-hidden bg-white/50 hover:bg-white transition-all"
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
									<div className="px-8 pb-6 pl-20 text-gray-600 font-medium text-lg leading-relaxed">
										<div className="pt-4 border-t border-gray-100">
											{item.a}
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* NEIGHBORHOOD SECTION */}
			<section className="py-24 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">
							Serving the Entire <br />
							<span className="text-[#FFB800] not-italic">
								{cityNameShort} Region
							</span>
						</h2>
						<p className="text-[#A7C4B5] mb-10 font-medium text-lg leading-relaxed">
							We bring our mobile workshop directly to your door, serving all
							major neighborhoods including:
						</p>
						<div className="grid grid-cols-2 gap-y-4">
							{city.neighborhoods.map((n) => (
								<div key={n} className="flex items-center gap-3">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
									<span className="font-bold uppercase tracking-tight text-sm">
										{n}
									</span>
								</div>
							))}
						</div>
					</div>
					<div className="bg-[#14201D] p-12 rounded-[3rem] text-center border border-white/5 shadow-2xl">
						<Star className="w-12 h-12 text-[#FFB800] mx-auto mb-6 fill-[#FFB800]" />
						<h3 className="text-2xl font-black uppercase mb-4">
							Local Reviews
						</h3>
						<p className="text-[#A7C4B5] italic mb-8">
							"Best contractor I've worked with in {cityNameShort}. Clean,
							professional, and the finish work is flawless."
						</p>
						<div className="h-px w-20 bg-[#FFB800] mx-auto mb-4" />
						<p className="font-black uppercase tracking-widest text-xs italic opacity-60">
							Verified {cityNameShort} Customer
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
