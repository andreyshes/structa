"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Shield,
	Hammer,
	MapPin,
	CheckCircle2,
	ShieldCheck,
	Clock,
	Star,
	Wrench,
} from "lucide-react";

export default function AboutPageContent() {
	const credentials = [
		{
			icon: ShieldCheck,
			label: "WA Licensed General Contractor",
			sub: "License #NORBIR**741CS — verify at L&I",
		},
		{
			icon: Shield,
			label: "Bonded & Insured",
			sub: "General liability on every job",
		},
		{
			icon: Clock,
			label: "5+ Years in the Trade",
			sub: "250+ completed Clark County projects",
		},
		{
			icon: Star,
			label: "5-Star Rated",
			sub: "13 Google reviews, all five stars",
		},
	];

	const values = [
		{
			icon: Hammer,
			title: "Flat-Rate Pricing",
			description:
				"You get a written price before we touch anything. No hourly billing, no open invoices, no surprises at the end of the job.",
		},
		{
			icon: Shield,
			title: "Licensed for Every Job",
			description:
				"Washington State requires a contractor's license for repair work above $500. NORBILT is licensed, bonded, and insured — protecting you legally and keeping your homeowner's insurance intact.",
		},
		{
			icon: Wrench,
			title: "Trade-Quality Finish",
			description:
				"From drywall texture matching to trim corners, the final 10% is what separates a good job from a great one. We don't cut it short.",
		},
		{
			icon: MapPin,
			title: "Clark County Only",
			description:
				"We don't chase volume across the metro. Staying in Clark County means faster scheduling, local material sourcing, and a crew that knows your neighborhood's construction.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO */}
			<section className="relative min-h-[70vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="/remodel-images/IMG_6433.jpg"
						alt="Home remodel project by NORBILT general contractor Vancouver WA"
						fill
						priority
						sizes="100vw"
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
								About NORBILT
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Licensed. Local. <br />
							<span className="text-[#FFB800]">Done Right.</span>
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							NORBILT is a licensed general contractor based in Vancouver, WA —
							serving Clark County homeowners with flat-rate pricing, licensed
							work, and a trade-quality finish on every job.
						</p>
					</div>
				</div>
			</section>

			{/* STATS STRIP */}
			<section className="py-10 bg-[#FFB800]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
						{[
							{ value: "5+", label: "Years in the Trade" },
							{ value: "250+", label: "Clark County Projects" },
							{ value: "5.0 ★", label: "Google Rating" },
							{ value: "$0", label: "Cost for Your Estimate" },
						].map((stat) => (
							<div key={stat.label}>
								<p className="text-3xl font-black text-black">{stat.value}</p>
								<p className="text-black/70 text-xs font-black uppercase tracking-widest mt-1">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FOUNDER BIO */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					{/* Headshot — replace /headshot-placeholder.jpg with your real photo */}
					<div className="relative order-2 lg:order-1">
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-[#F8F6F3] bg-[#1F2E2B]">
							<Image
								src="/remodel-images/IMG_7646.jpg"
								alt="Andrey, founder of NORBILT general contractor Vancouver WA"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-[#FFB800] px-8 py-6 rounded-2xl shadow-xl border-b-4 border-[#CC9900] hidden md:block">
							<p className="text-black font-black text-center text-sm leading-tight uppercase tracking-wide">
								WA License <br />
								<span className="text-lg">#NORBIR**741CS</span>
							</p>
						</div>
					</div>

					<div className="order-1 lg:order-2 space-y-8">
						<div className="space-y-3">
							<span className="text-[#2D5A3D] font-black uppercase tracking-[0.3em] text-sm">
								The Person Behind the Work
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] leading-tight uppercase tracking-tighter">
								Hi, I'm Andrey — <br />
								<span className="text-[#2D5A3D]">Founder of NORBILT</span>
							</h2>
						</div>

						<div className="space-y-5 text-gray-600 leading-relaxed text-lg">
							<p>
								I started NORBILT in <strong>Vancouver, WA</strong> because I saw a gap:
								homeowners were either hiring unlicensed handymen who couldn't
								legally do the work, or paying general contractor markups for
								simple jobs that didn't need that overhead. NORBILT sits in
								between — licensed, insured, and priced fairly.
							</p>
							<p>
								I've spent <strong>5+ years doing this work</strong> in Clark County,
								across every type of home — 1950s ranches in Hazel Dell, new builds
								in Ridgefield, older colonials in Camas, and everything in between.
								That repetition means I know what's likely behind your walls before
								we open them, and I know how to price a job honestly the first time.
							</p>
							<p>
								Every estimate I give is based on what I've actually seen on
								similar jobs in this area — not a national pricing guide. When I
								quote you a number, I stand behind it. <strong>Flat rate, written,
								before we start.</strong>
							</p>
						</div>

						<div className="flex flex-wrap gap-3 pt-2">
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
								<span className="font-bold text-[#1F2E2B] text-sm uppercase">
									WA GC License #NORBIR**741CS
								</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-[#F8F6F3] rounded-lg border border-gray-100">
								<ShieldCheck className="w-5 h-5 text-[#FFB800] shrink-0" />
								<span className="font-bold text-[#1F2E2B] text-sm uppercase">
									Bonded & Insured
								</span>
							</div>
							<a
								href="https://secure.lni.wa.gov/verify/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/5 rounded-lg border border-[#2D5A3D]/20 hover:bg-[#2D5A3D]/10 transition-colors"
							>
								<span className="font-bold text-[#2D5A3D] text-sm">
									Verify license at WA L&I →
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* CREDENTIALS */}
			<section className="py-16 bg-[#1F2E2B]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{credentials.map((c) => {
							const Icon = c.icon;
							return (
								<div key={c.label} className="flex items-start gap-4">
									<div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center shrink-0">
										<Icon className="w-6 h-6 text-black" />
									</div>
									<div>
										<p className="font-black text-white text-sm uppercase tracking-tight leading-snug">
											{c.label}
										</p>
										<p className="text-[#A7C4B5] text-xs mt-1">{c.sub}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* HOW WE WORK */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16 space-y-4">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
							How We Work
						</span>
						<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Sets NORBILT Apart
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
								<h3 className="text-xl font-black text-[#1F2E2B] mb-3 uppercase tracking-tight">
									{value.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{value.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#14201D] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<div className="flex items-center gap-2 mb-6 text-[#FFB800]">
								<MapPin className="w-6 h-6" />
								<span className="text-xl font-black uppercase tracking-widest">
									Service Area
								</span>
							</div>
							<h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">
								All of Clark County, WA
							</h2>
							<p className="text-[#A7C4B5] text-lg leading-relaxed mb-6">
								NORBILT serves every corner of Clark County — from the older
								neighborhoods in north Vancouver to the newer builds in Ridgefield
								and Camas. If you're in Clark County, we come to you. Free
								on-site estimates for all areas.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								We know the permit process at Clark County Community Development,
								the common construction styles across each city, and the local
								material suppliers — which keeps lead times short and pricing
								accurate.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3">
							{[
								"Vancouver",
								"Camas",
								"Ridgefield",
								"Battle Ground",
								"Washougal",
								"Brush Prairie",
								"Hazel Dell",
								"Salmon Creek",
								"Felida",
								"Five Corners",
								"Orchards",
								"Mill Plain",
								"Lake Shore",
							].map((city) => (
								<div
									key={city}
									className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center font-bold text-sm text-white/80"
								>
									{city}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-white text-center">
				<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
					<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Get a Free Estimate
					</h2>
					<p className="text-gray-600 text-lg leading-relaxed">
						I'll walk your home, assess the scope, and give you a written price —
						no charge, no obligation. Most estimates are same-week.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
						<Link
							href="/contact"
							className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
						>
							Request Free Estimate
						</Link>
						<Link
							href="/services"
							className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-gray-200 text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-gray-50 transition-all"
						>
							Browse Services
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
