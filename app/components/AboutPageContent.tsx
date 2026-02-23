"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Heart,
	Shield,
	Hammer,
	Sparkles,
	MapPin,
	CheckCircle2,
	ShieldCheck,
} from "lucide-react";

export default function AboutPageContent() {
	const values = [
		{
			icon: Hammer,
			title: "Quality Finish",
			description:
				"We handle every repair with expert care. From mitered corners to drywall patches, we treat your home like our own.",
		},
		{
			icon: Shield,
			title: "Licensed Contractor",
			description:
				"Norbilt is a registered Washington contractor. We provide insurance and professional management for every project.",
		},
		{
			icon: Sparkles,
			title: "Clean Job Sites",
			description:
				"We respect your space. Our team cleans up daily to ensure your home stays livable during your remodel.",
		},
		{
			icon: Heart,
			title: "Local Vancouver Focus",
			description:
				"Norbilt is a local family business. We are dedicated to improving homes across Vancouver and Clark County.",
		},
	];

	const stats = [
		{ value: "5+", label: "Years Experience" },
		{ value: "250+", label: "Projects Done" },
		{ value: "5.0", label: "Customer Rating" },
		{ value: "100%", label: "Licensed & Bonded" },
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1682888813913-e13f18692019?w=900&auto=format&fit=crop&q=60"
						alt="General contractor in Vancouver WA doing home repairs"
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
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								About Norbilt
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
							Norbilt offers professional remodeling and home repair. We are the
							trusted choice for quality work in Vancouver, WA. Our team focuses
							on honest service and great results.
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

			{/* BRAND STORY */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative order-2 lg:order-1">
						<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-[#F8F6F3]">
							<Image
								src="https://plus.unsplash.com/premium_photo-1733514433307-f337be80b0f4?w=900&auto=format&fit=crop"
								alt="Interior remodeling in Vancouver"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -top-6 -right-6 bg-[#FFB800] p-8 rounded-2xl shadow-xl border-b-4 border-[#CC9900] hidden md:block">
							<p className="text-black font-black text-center text-xl leading-tight">
								VOTED #1 <br /> LOCAL PRO
							</p>
						</div>
					</div>

					<div className="order-1 lg:order-2 space-y-8">
						<div className="space-y-4">
							<span className="text-[#2D5A3D] font-black uppercase tracking-[0.3em] text-sm">
								Our Story
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] leading-tight uppercase tracking-tighter">
								The Preferred General <br /> Contractor for <br /> Clark County
							</h2>
						</div>

						<div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
							<p>
								Norbilt was started in <strong>Vancouver, WA</strong> to help
								homeowners. We knew people needed a{" "}
								<strong>general contractor</strong> who was honest and skilled.
								We handle <strong>interior remodeling</strong> and{" "}
								<strong>home repairs</strong>. Our team makes sure every project
								is built to last.
							</p>
							<p>
								We focus on the final details of your home. Many companies rush,
								but we take our time with <strong>trim and cabinets</strong>.
								Whether you need a <strong>kitchen update</strong> or{" "}
								<strong>drywall repair</strong>, we deliver a perfect finish
								every time.
							</p>
							<p>
								Your home is a big investment. That is why Norbilt is a{" "}
								<strong>licensed and insured contractor</strong>. We offer clear
								pricing and professional care for every local client.
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
									Bonded & Insured
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
							Standards
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

			{/* GEOGRAPHIC AREA */}
			<section className="py-24 bg-[#14201D] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="flex items-center gap-2 mb-6 text-[#FFB800]">
								<MapPin className="w-6 h-6" />
								<h3 className="text-xl font-black uppercase tracking-widest">
									Service Area
								</h3>
							</div>
							<h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
								Serving Southwest Washington
							</h2>
							<p className="text-[#A7C4B5] text-lg leading-relaxed mb-8">
								We provide <strong>interior remodeling</strong> and{" "}
								<strong>handyman repairs</strong> in Clark County. Whether you
								are in Vancouver or Camas, our team understands local home
								styles.
							</p>
							<div className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-[#FFB800]">
								<span>• Cascade Park</span>
								<span>• Felida</span>
								<span>• Salmon Creek</span>
								<span>• Fisher's Landing</span>
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
									className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center font-black uppercase text-xs tracking-tighter"
								>
									{city}, WA
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 lg:py-40 bg-white text-center relative overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-[#F8F6F3] -rotate-3 z-0" />
				<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
					<h2 className="text-4xl md:text-6xl font-black text-[#1F2E2B] mb-8 uppercase tracking-tighter">
						Hire a Professional <br />
						<span className="text-[#2D5A3D]">Vancouver Contractor</span>
					</h2>
					<p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
						Ready to start your <strong>home repair</strong> or{" "}
						<strong>interior remodel</strong>? Contact Norbilt today for an
						estimate. We are your local <strong>general contractor</strong>.
					</p>
					<Link
						href="/contact"
						className="inline-block px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-2xl hover:scale-105 transition-all"
					>
						Get Free Estimate
					</Link>
				</div>
			</section>
		</div>
	);
}
