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
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function AboutPageContent() {
	const values = [
		{
			icon: Hammer,
			title: "Precision & Detailed Finish",
			description:
				"Every repair and installation is handled with master-level care. From perfect mitered corners to seamless drywall patches, we treat your home like our own.",
		},
		{
			icon: Shield,
			title: "Licensed General Contractor",
			description:
				"As a registered Washington state contractor, we provide full accountability, comprehensive insurance, and professional site management on every project.",
		},
		{
			icon: Sparkles,
			title: "Clean & Tidy Job Sites",
			description:
				"We respect your living space. Our team utilizes strict dust control and daily cleanup routines to ensure your home remains livable during the remodeling process.",
		},
		{
			icon: Heart,
			title: "Vancouver WA Community Focus",
			description:
				"Norbilt is a locally owned business, not a franchise. We are dedicated to improving homes across Vancouver and Clark County with dependable service.",
		},
	];

	const stats = [
		{ value: "5+", label: "Years in Construction" },
		{ value: "250+", label: "Remodels Completed" },
		{ value: "5.0", label: "Customer Rating" },
		{ value: "100%", label: "Licensed & Bonded" },
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1682888813913-e13f18692019?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVybiUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D"
						alt="Licensed general contractor in Vancouver WA performing home repairs"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
					<div className="max-w-3xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								About Norbilt Renovations
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Vancouver's Expert <br />
							<span className="text-[#FFB800]">Home Contractor</span>
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt provides professional interior remodeling, precision
							finish carpentry, and reliable home repair services. We are the
							trusted choice for homeowners seeking quality construction in
							Vancouver, WA.
						</p>
					</div>
				</div>
			</section>

			{/* STATS STRIP */}
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

			{/* DETAILED BRAND STORY - HIGH SEO VALUE */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative order-2 lg:order-1">
						<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-[#F8F6F3]">
							<Image
								src="https://plus.unsplash.com/premium_photo-1733514433307-f337be80b0f4?w=900&auto=format&fit=crop"
								alt="Expert interior construction and remodeling in Vancouver"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -top-6 -right-6 bg-[#FFB800] p-8 rounded-2xl shadow-xl rotate-3 hidden md:block border-b-4 border-[#CC9900]">
							<p className="text-black font-black text-center text-xl leading-tight">
								VOTED #1 <br /> LOCAL PRO
							</p>
						</div>
					</div>

					<div className="order-1 lg:order-2 space-y-8">
						<div className="space-y-4">
							<span className="text-[#2D5A3D] font-black uppercase tracking-[0.3em] text-sm">
								Dedicated Craftsmanship
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] leading-tight uppercase tracking-tighter">
								The Preferred General <br /> Contractor for <br /> Clark County
								Homes
							</h2>
						</div>

						<div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
							<p>
								Founded and operated in <strong>Vancouver, WA</strong>, Norbilt
								was established to solve a common problem: homeowners struggling
								to find a <strong>general contractor</strong>
								who combines master-level craftsmanship with professional
								reliability. We specialize in
								<strong>residential interior remodeling</strong> and{" "}
								<strong>structural home repairs</strong>, ensuring that every
								renovation is built to last in the Pacific Northwest climate.
							</p>
							<p>
								Our philosophy is simple: we focus on the "finish." While many{" "}
								<strong>construction companies</strong>
								rush through the final details, we take pride in the meticulous{" "}
								<strong>installation</strong>
								of trim, cabinetry, and fixtures. Whether it is a{" "}
								<strong>kitchen refresh</strong> or a complex{" "}
								<strong>drywall repair</strong>, our goal is a flawless result
								that exceeds expectations.
							</p>
							<p>
								We understand that your home is your most significant
								investment. That is why Norbilt operates as a fully{" "}
								<strong>
									licensed, bonded, and insured Washington contractor
								</strong>
								. From the initial estimate to the final walkthrough, we provide
								the transparency and accountability you deserve from a local
								service provider.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 pt-4">
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
								<span className="font-bold text-[#1F2E2B] text-sm uppercase">
									WA LIC #NORBIL**741CS
								</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<ShieldCheck className="w-5 h-5 text-[#FFB800]" />
								<span className="font-bold text-[#1F2E2B] text-sm uppercase">
									Fully Bonded & Insured
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CORE VALUES */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-20 space-y-4">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
							Our Professional Standards
						</span>
						<h2 className="text-4xl md:text-6xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							A Higher Level of Service
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
								<div className="w-16 h-16 bg-[#1F2E2B] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFB800] transition-colors">
									<value.icon className="w-8 h-8 text-[#FFB800] group-hover:text-black transition-colors" />
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

			{/* GEOGRAPHIC AUTHORITY BLOCK */}
			<section className="py-24 bg-[#14201D] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-2 mb-6 text-[#FFB800]">
								<MapPin className="w-6 h-6" />
								<h3 className="text-xl font-black uppercase tracking-[0.3em]">
									Local Service Area
								</h3>
							</div>
							<h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
								Serving the Heart of <br /> Southwest Washington
							</h2>
							<p className="text-[#A7C4B5] text-lg leading-relaxed mb-8">
								Based in <strong>Vancouver</strong>, we provide{" "}
								<strong>interior remodeling</strong> and
								<strong>handyman repair services</strong> throughout the greater
								Clark County region. Whether you own a historic home in the
								Heights or a modern residence in Camas, our team is familiar
								with local building codes and regional styles.
							</p>
							<div className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest">
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
									Cascade Park
								</div>
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
									Felida
								</div>
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
									Salmon Creek
								</div>
								<div className="flex items-center gap-2">
									<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
									Fisher's Landing
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							{[
								"Vancouver",
								"Camas",
								"Washougal",
								"Ridgefield",
								"Battle Ground",
								"Brush Prairie",
								"Hockinson",
								"La Center",
							].map((city) => (
								<div
									key={city}
									className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-center font-black uppercase text-xs tracking-tighter hover:bg-[#FFB800] hover:text-black transition-all cursor-default"
								>
									{city}, WA
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CALL TO ACTION */}
			<section className="py-24 lg:py-40 bg-white relative overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-[#F8F6F3] -rotate-3 z-0" />

				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<h2 className="text-4xl md:text-6xl font-black text-[#1F2E2B] mb-8 uppercase tracking-tighter">
						Hire a Professional <br />
						<span className="text-[#2D5A3D]">Vancouver Contractor</span>
					</h2>
					<p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
						Ready to start your <strong>home repair</strong> or{" "}
						<strong>interior remodel</strong>? Contact Norbilt today for a
						detailed estimate. We look forward to being your go-to{" "}
						<strong>general contractor</strong>.
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<Link
							href="/contact"
							className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-[0_20px_40px_rgba(255,184,0,0.3)] hover:scale-105 transition-all border-b-4 border-[#CC9900]"
						>
							Get My Free Estimate
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
