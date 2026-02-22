"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Heart,
	Compass,
	Award,
	ArrowRight,
	Mountain,
	Users,
	ShieldCheck,
	MapPin,
	CheckCircle2,
	Star,
	Shield,
	Hammer,
	Sparkles,
	Phone,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function AboutPageContent() {
	const values = [
		{
			icon: Hammer,
			title: "Precision & Detail",
			description:
				"Every repair and finish detail is handled with care. If we wouldn't put it in our own home, we won't put it in yours.",
		},
		{
			icon: Shield,
			title: "Full Accountability",
			description:
				"As a licensed WA contractor, we provide transparency, insurance, and professional standards on every single job site.",
		},
		{
			icon: Sparkles,
			title: "Clean Execution",
			description:
				"We respect your living space with strict dust control and tidy practices. We leave your home better than we found it.",
		},
		{
			icon: Heart,
			title: "Local Commitment",
			description:
				"We aren't a national franchise. We are Vancouver locals dedicated to improving our community, one home at a time.",
		},
	];

	const stats = [
		{ value: "5+", label: "Years Experience" },
		{ value: "250+", label: "Projects Finished" },
		{ value: "5.0", label: "Average Rating" },
		{ value: "100%", label: "Licensed & Insured" },
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - Matches Homepage Style */}
			<section className="relative min-h-[70vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200"
						alt="Norbilt interior remodeling craftsmanship"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/80 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
					<div className="max-w-3xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								The Norbilt Standard
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Building Trust Through <br />
							<span className="text-[#FFB800]">Precision</span> Work
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt is a licensed Vancouver contractor specializing in
							high-end interior renovations, finish carpentry, and professional
							home repairs across Clark County.
						</p>
					</div>
				</div>
			</section>

			{/* STATS STRIP - High Contrast */}
			<section className="py-12 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<p className="text-4xl font-black text-[#FFB800] mb-1">
									{stat.value}
								</p>
								<p className="text-[#A7C4B5] text-xs font-bold uppercase tracking-widest">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* STORY SECTION - Authority Building */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative order-2 lg:order-1">
						<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-[#F8F6F3]">
							<Image
								src="https://plus.unsplash.com/premium_photo-1733514433307-f337be80b0f4?w=900&auto=format&fit=crop"
								alt="Quality Vancouver home renovation"
								fill
								className="object-cover"
							/>
						</div>
						{/* Badge */}
						<div className="absolute -top-6 -right-6 bg-[#FFB800] p-8 rounded-2xl shadow-xl rotate-3 hidden md:block">
							<p className="text-black font-black text-center text-xl leading-tight">
								LOCALLY <br /> OWNED
							</p>
						</div>
					</div>

					<div className="order-1 lg:order-2 space-y-8">
						<div className="space-y-4">
							<span className="text-[#2D5A3D] font-black uppercase tracking-[0.3em] text-sm">
								Our Mission
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] leading-tight uppercase tracking-tighter">
								Crafting Better <br /> Spaces for our <br /> Neighbors
							</h2>
						</div>

						<div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
							<p>
								Founded in Vancouver, WA, Norbilt was created to bridge the gap
								between unreliable handymen and overpriced corporate remodeling
								firms. We believe every homeowner deserves a contractor who
								shows up on time, works with precision, and leaves the job site
								cleaner than they found it.
							</p>
							<p>
								We don't just "do houses." We specialize in the interior details
								that make a home feel complete—from the perfect mitered corner
								on a baseboard to a flawless drywall patch that disappears into
								the wall.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 pt-4">
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
								<span className="font-bold text-[#1F2E2B] text-sm">
									WA LIC #NORBIL**741CS
								</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
								<span className="font-bold text-[#1F2E2B] text-sm">
									BONDED & INSURED
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* VALUES - Grid Layout */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-20 space-y-4">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
							The Norbilt Code
						</span>
						<h2 className="text-4xl md:text-6xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Why Work With Us
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{values.map((value, i) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-[#FFB800] group"
							>
								<div className="w-16 h-16 bg-[#1F2E2B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<value.icon className="w-8 h-8 text-[#FFB800]" />
								</div>
								<h3 className="text-2xl font-black text-[#1F2E2B] mb-4 uppercase tracking-tight">
									{value.title}
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA LISTING - Strategic SEO Section */}
			<section className="py-24 bg-[#14201D] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-2 mb-8 text-[#FFB800]">
						<MapPin className="w-6 h-6" />
						<h3 className="text-xl font-black uppercase tracking-[0.3em]">
							Our Service Area
						</h3>
					</div>
					<p className="text-[#A7C4B5] mb-12 max-w-2xl mx-auto font-bold text-lg leading-relaxed">
						Providing professional interior remodeling and home repairs to
						homeowners throughout Clark County:
					</p>
					<div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-white font-black uppercase tracking-widest text-sm italic">
						{[
							"Vancouver",
							"Camas",
							"Washougal",
							"Ridgefield",
							"Battle Ground",
							"Salmon Creek",
							"Hazel Dell",
							"Five Corners",
							"Brush Prairie",
							"Felida",
							"Lake Shore",
							"Orchards",
							"Mill Plain",
						].map((city) => (
							<span
								key={city}
								className="flex items-center gap-2 hover:text-[#FFB800] transition-colors cursor-default"
							>
								<span className="w-2 h-2 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]" />
								{city}, WA
							</span>
						))}
					</div>
				</div>
			</section>

			{/* CALL TO ACTION */}
			<section className="py-24 lg:py-40 bg-white relative overflow-hidden">
				{/* Decorative background element */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-[#F8F6F3] -rotate-3 z-0" />

				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<h2 className="text-4xl md:text-6xl font-black text-[#1F2E2B] mb-8 uppercase tracking-tighter">
						Ready for a Better <br />
						<span className="text-[#2D5A3D]">Remodeling Experience?</span>
					</h2>
					<p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
						Contact your local Vancouver interior specialists today for a
						detailed, transparent estimate on your next home improvement
						project.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<Link
							href="/contact"
							className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-[0_20px_40px_rgba(255,184,0,0.3)] hover:scale-105 transition-all border-b-4 border-[#CC9900]"
						>
							Get My Estimate
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
