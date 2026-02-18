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
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function LightingFixturesPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - AMBIANCE & VISIBILITY */}
			<section className="relative min-h-[80vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t4.ftcdn.net/jpg/05/97/21/69/240_F_597216964_c5DHjT4wtRbypQBHvv7cmBXhOVsMc0WQ.jpg"
						alt="Modern designer lighting installation in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Overlay adjusted for maximum warmth and legibility */}
					<div className="absolute inset-0 bg-[#1F2E2B]/45 lg:bg-linear-to-r lg:from-[#1F2E2B]/85 lg:via-[#1F2E2B]/40 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_30%)]">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-8 shadow-xl"
						>
							<Lightbulb className="w-4 h-4" />
							Professional Fixture Mounting
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Lighting & Fixture <br />
							<span className="text-[#A7C4B5]">Installation Vancouver</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white font-medium leading-relaxed max-w-2xl mb-10"
						>
							Transform your home's atmosphere with safe, professional fixture
							installation. From designer chandeliers to high-performance
							ceiling fans, we ensure every mount is secure, level, and clean.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
							>
								Get a Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* INTRO - STYLE & SAFETY FOCUS */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Modern Lighting <br />
								<span className="text-[#2D5A3D]">Done the Right Way</span>
							</h2>

							<p>
								Updating your lighting is the single most effective way to
								modernize your interior. Norbilt provides **professional
								lighting installation throughout Clark County**, ensuring your
								designer pieces are installed with structural integrity and
								electrical precision.
							</p>

							<p>
								Whether you’re swapping builder-grade fixtures for modern
								pendants or upgrading bathroom ventilation to protect against
								PNW moisture, we handle the technical details so you can enjoy
								the results.
							</p>
						</div>

						<div className="bg-[#F8F6F3] p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
							<Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-[#2D5A3D]/5" />
							<h3 className="text-2xl font-bold text-[#1F2E2B] mb-6">
								Common Requests
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Designer Chandeliers",
									"Kitchen Pendant Lights",
									"Ceiling Fan Mounting",
									"Bath Exhaust Fans",
									"Smart Dimmer Switches",
									"TV Wall Mounting",
									"Recessed LED Retrofits",
									"Vanity Lighting",
								].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0" />
										<span className="text-sm font-semibold text-gray-700">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Capabilities"
						title="Professional Mounting Solutions"
						description="Focused installations that enhance the comfort, style, and utility of every room."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
						{[
							{
								icon: Lightbulb,
								title: "Interior Lighting",
								text: "Clean installation of pendants, sconces, and chandeliers with precise, level alignment.",
							},
							{
								icon: Fan,
								title: "Ceiling Fans",
								text: "Structural mounting and balancing to ensure wobble-free, quiet operation year-round.",
							},
							{
								icon: Zap,
								title: "Smart Controls",
								text: "Installation of smart dimmers and Wi-Fi enabled switches for modern home automation.",
							},
							{
								icon: Home,
								title: "Wall Mounting",
								text: "Secure mounting for heavy TVs, large mirrors, and artwork into wood or metal studs.",
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#2D5A3D] group"
							>
								<div className="w-12 h-12 bg-[#F8F6F3] rounded-xl flex items-center justify-center mb-6">
									<service.icon className="w-6 h-6 text-[#2D5A3D] group-hover:scale-110 transition-transform" />
								</div>
								<h3 className="text-lg font-bold text-[#1F2E2B] mb-2">
									{service.title}
								</h3>
								<p className="text-sm text-gray-600 leading-relaxed">
									{service.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-white border-y border-gray-100">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<div className="inline-flex items-center gap-2 text-[#2D5A3D] font-bold uppercase tracking-widest text-sm mb-6">
						<MapPin className="w-4 h-4" /> Serving Vancouver & Camas
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8">
						Brighten Your Home Today
					</h2>
					<p className="text-gray-600 leading-relaxed text-lg mb-10">
						We provide reliable fixture updates throughout **Hazel Dell, Salmon
						Creek, Felida, and Battle Ground**. We respect your home's
						cleanliness and your family's schedule.
					</p>
					<div className="flex flex-wrap justify-center gap-6 font-bold text-[#1F2E2B]">
						{["98660", "98683", "98607", "98642", "98685"].map((zip) => (
							<span
								key={zip}
								className="px-4 py-2 bg-[#F1F5F2] rounded-lg text-sm"
							>
								{zip}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-[#1F2E2B] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
					>
						Ready for a Brighter Home?
					</motion.h2>

					<p className="text-[#A7C4B5] text-xl mb-12 max-w-2xl mx-auto">
						Get your new fixtures installed safely and professionally. Request a
						free estimate and let's get your project on the calendar.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white font-bold rounded-2xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
					>
						Get My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
