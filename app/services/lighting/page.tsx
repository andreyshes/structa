"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Lightbulb,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Clock,
	Zap,
	Fan,
	MapPin,
	Sparkles,
	ShieldCheck,
	Phone,
	Layout,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function LightingFixturesPage() {
	const commonRequests = [
		"Designer Chandeliers",
		"Kitchen Pendant Lights",
		"Ceiling Fan Mounting",
		"Bath Exhaust Fans",
		"Smart Dimmer Switches",
		"TV Wall Mounting",
		"Recessed LED Retrofits",
		"Vanity Lighting",
	];

	const mainServices = [
		{
			icon: Lightbulb,
			title: "Interior Lighting",
			text: "Clean installation of pendants, sconces, and chandeliers with precise, level alignment and zero-mess finish.",
		},
		{
			icon: Fan,
			title: "Ceiling Fans",
			text: "Structural mounting and balancing to ensure wobble-free, quiet operation for year-round comfort.",
		},
		{
			icon: Zap,
			title: "Smart Controls",
			text: "Installation of smart dimmers and Wi-Fi enabled switches for modern, automated home control.",
		},
		{
			icon: Layout,
			title: "Wall Mounting",
			text: "Secure mounting for heavy TVs, mirrors, and galleries into wood or metal studs with hidden wiring options.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - AMBIANCE FOCUS */}
			<section className="relative min-h-[80vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1584521104351-cfad34547581?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBmaXh0dXJlfGVufDB8fDB8fHww"
						alt="Modern designer lighting installation in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Master Fixture Installation
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Lighting & <br />
							<span className="text-[#FFB800]">Fixtures</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6"
						>
							Transform your atmosphere with safe, professional fixture
							installation. From designer chandeliers to high-performance fans,
							we ensure every mount is level, secure, and clean.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="pt-4"
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Get A Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20 text-white">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Licensed General Contractor
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Zap className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Secure Structural Mounting
						</span>
					</div>
				</div>
			</section>

			{/* CORE CAPABILITIES */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Modern Lighting <br />
								<span className="text-[#2D5A3D]">Done The Right Way</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								Updating your lighting is the single most effective way to
								modernize your interior. Norbilt provides professional
								installation throughout Clark County, ensuring your designer
								pieces are installed with structural integrity and electrical
								precision.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Level Alignment",
									"Heavy Load Mounting",
									"Smart Dimmer Setup",
									"Wobble-Free Fans",
								].map((item) => (
									<div key={item} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-[10px] uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-[8px] border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic text-center sm:text-left">
									Common Requests
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
									{commonRequests.map((item) => (
										<div
											key={item}
											className="flex items-center gap-3 border-l border-[#FFB800]/30 pl-4"
										>
											<span className="text-[#A7C4B5] text-xs font-bold uppercase tracking-wider">
												{item}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Solutions"
						title="Professional Mounting"
						description="Installations focused on enhancing the style and utility of every room."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
						{mainServices.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
							>
								<div className="w-14 h-14 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1F2E2B] transition-colors">
									<service.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#FFB800]" />
								</div>
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight mb-4 leading-none text-lg">
									{service.title}
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed text-sm">
									{service.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA - BILLBOARD STYLE */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Ready for a <br />{" "}
								<span className="text-[#FFB800]">Brighter Home?</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Get your new fixtures installed safely and professionally.
								Request a free estimate and let's get your project on the
								calendar.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> 916.508.6272
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEO FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>HAZEL DELL</span>
					<span>FELIDA</span>
				</div>
			</section>
		</div>
	);
}
