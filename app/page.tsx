"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	Home,
	Lightbulb,
	TreeDeciduous,
	Shield,
	Heart,
	Sparkles,
	ArrowRight,
	CheckCircle2,
	MapPin,
	Star,
} from "lucide-react";

import ServiceCard from "@/app/components/ServiceCard";
import SectionHeader from "@/app/components/SectionHeader";

export default function HomePage() {
	const services = [
		{
			icon: Hammer,
			title: "Finish Carpentry & Mill Work",
			description:
				"Premium installation of baseboards, crown molding, and custom wainscoting throughout Vancouver, WA.",
		},
		{
			icon: Wrench,
			title: "Handyman & Interior Repairs",
			description:
				"Drywall repair, door adjustments, hardware installs, and punch-list completion handled professionally.",
		},
		{
			icon: Paintbrush,
			title: "Kitchen & Bathroom Upgrades",
			description:
				"Backsplashes, cabinet hardware refreshes, and fixture upgrades that add value without full remodels.",
		},
		{
			icon: Home,
			title: "Doors & Windows",
			description:
				"Interior door installation, trim replacement, and weather-sealing for Clark County homes.",
		},
		{
			icon: Lightbulb,
			title: "Fixtures & Lighting",
			description:
				"Ceiling fans, lighting, plumbing fixtures, and smart upgrades installed cleanly and correctly.",
		},
		{
			icon: TreeDeciduous,
			title: "Selective Exterior Repairs",
			description:
				"Exterior repairs such as siding, deck, and wood-rot work related to interior protection and home integrity.",
		},
	];

	const testimonials = [
		{
			name: "Daniel R.",
			location: "Vancouver, WA",
			rating: 5,
			text: "Norbilt handled our trim, drywall, and repairs flawlessly. Clean, professional, and detail-driven.",
		},
		{
			name: "Melissa K.",
			location: "Brush Prairie, WA",
			rating: 5,
			text: "Having one professional handle everything made our kitchen refresh stress-free.",
		},
		{
			name: "Aaron L.",
			location: "Five Corners, WA",
			rating: 5,
			text: "Excellent craftsmanship. The finish work completely elevated our space.",
		},
		{
			name: "Rebecca S.",
			location: "Camas, WA",
			rating: 5,
			text: "Respectful, organized, and highly skilled. Our go-to interior contractor.",
		},
	];

	const whyChoose = [
		{
			icon: Shield,
			title: "Licensed, Bonded & Insured",
			description:
				"We are a fully registered Washington contractor, providing full professional accountability and peace of mind.",
		},
		{
			icon: Heart,
			title: "Local Vancouver Craftsmanship",
			description:
				"Based in Vancouver and serving all of Clark County with transparent pricing and dependable local service.",
		},
		{
			icon: Sparkles,
			title: "Clean & Detail-Oriented",
			description:
				"We respect your living space with strict dust control, tidy job sites, and precision finishes.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative min-h-[95vh] flex items-center">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
						alt="Licensed interior remodeling contractor performing home improvements in Vancouver WA Clark County"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-[#1F2E2B]/90 via-[#1F2E2B]/55 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-3xl space-y-10">
						<div className="flex flex-wrap items-center gap-4">
							<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2D5A3D]/90 backdrop-blur text-white text-xs font-bold uppercase tracking-wider shadow-md">
								Local Interior Specialist
							</span>
							<span className="inline-flex items-center gap-2 text-white/85 text-sm font-medium">
								<MapPin className="w-4 h-4 text-[#A7C4B5]" />
								Vancouver & Clark County, WA
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
							Interior Remodeling &{" "}
							<span className="text-[#A7C4B5]">Home Improvements</span> <br />
							<span>in Vancovuer WA</span>
						</h1>

						<p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
							Norbilt is a licensed interior remodeling and home improvement
							contractor serving Vancouver, WA and Clark County. We specialize
							in finish carpentry, handyman repairs, kitchen upgrades, and
							detailed interior improvements.
						</p>

						<div className="flex flex-col sm:flex-row gap-5 pt-4">
							<Link
								href="/contact"
								className="group inline-flex items-center justify-center gap-2 px-9 py-5 bg-[#2D5A3D] text-white rounded-2xl font-semibold shadow-xl shadow-black/20 hover:bg-[#3a6d4b] transition-all"
							>
								Request a Free Estimate
								<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center justify-center px-9 py-5 rounded-2xl bg-white/10 backdrop-blur border border-white/30 text-white font-medium hover:bg-white/20 transition-all"
							>
								View Services
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES SECTION */}
			<section className="py-28 bg-[#E8E4DE]/50">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Do"
						title="Interior Home Improvement Services"
						description="Professional repairs, upgrades, and finish work designed for Vancouver homeowners."
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{services.map((s, i) => (
							<ServiceCard key={s.title} {...s} index={i} />
						))}
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="py-28 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative">
						<div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
								alt="Precision interior remodeling work"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 bg-[#2D5A3D] p-8 rounded-2xl shadow-xl hidden md:block">
							<p className="text-white font-bold text-2xl">5.0</p>
							<div className="flex gap-1 my-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 fill-[#A7C4B5] text-[#A7C4B5]"
									/>
								))}
							</div>
							<p className="text-white/80 text-xs uppercase tracking-widest font-bold">
								Local Rating
							</p>
						</div>
					</div>

					<div>
						<SectionHeader
							eyebrow="The Norbilt Standard"
							title="A Better Interior Improvement Experience"
							description="We believe home improvements should be seamless. One skilled professional. Clean execution. Reliable results."
							centered={false}
						/>

						<div className="space-y-10 mt-12">
							{whyChoose.map((item, i) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="flex gap-6 group"
								>
									<div className="shrink-0 w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#2D5A3D] group-hover:text-white transition-colors duration-300">
										<item.icon className="w-8 h-8 text-[#2D5A3D] group-hover:text-white" />
									</div>
									<div>
										<h3 className="text-xl font-bold text-[#1F2E2B] mb-2">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* AUTO-MOVING CAROUSEL SECTION */}
			<section className="py-28 bg-[#1F2E2B] overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
					<SectionHeader
						eyebrow="Local Reputation"
						title="Trusted by Clark County Homeowners"
						light
					/>
				</div>

				<div className="relative flex">
					<motion.div
						className="flex gap-6 pr-6"
						animate={{
							x: ["0%", "-50%"],
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 30,
								ease: "linear",
							},
						}}
					>
						{/* Double the testimonials to create a seamless loop */}
						{[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
							<div
								key={i}
								className="min-w-[320px] md:min-w-112.5 bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 flex flex-col justify-between"
							>
								<div>
									<div className="flex gap-1 mb-6">
										{[...Array(t.rating)].map((_, star) => (
											<Star
												key={star}
												className="w-4 h-4 fill-[#A7C4B5] text-[#A7C4B5]"
											/>
										))}
									</div>
									<p className="text-xl text-white/90 italic leading-relaxed mb-8">
										"{t.text}"
									</p>
								</div>

								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-[#2D5A3D] rounded-full flex items-center justify-center text-white font-bold">
										{t.name.charAt(0)}
									</div>
									<div>
										<h4 className="text-white font-bold text-lg">{t.name}</h4>
										<p className="text-[#A7C4B5] text-sm uppercase tracking-wider font-medium">
											{t.location}
										</p>
									</div>
								</div>
							</div>
						))}
					</motion.div>

					{/* Side Fades for the "infinite" look */}
					<div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#1F2E2B] to-transparent z-10" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#1F2E2B] to-transparent z-10" />
				</div>
			</section>

			{/* PROCESS SECTION */}
			<section className="py-28 bg-[#FDFCFB] relative overflow-hidden">
				<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#E8E4DE]/40 rounded-full blur-3xl" />
				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<SectionHeader
						eyebrow="The Norbilt Method"
						title="Our Seamless Interior Process"
						description="We've refined our workflow to ensure your project is stress-free and finished to the highest standard."
					/>
					<div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-20">
						{[
							{
								step: "01",
								title: "Initial Consultation",
								text: "Schedule your free estimate to discuss your vision and take precise measurements.",
								keywords: "Site Visit & Assessment",
							},
							{
								step: "02",
								title: "Detailed Proposal",
								text: "Receive a transparent, fixed-price quote with a clear scope of work and no hidden fees.",
								keywords: "Transparent Pricing",
							},
							{
								step: "03",
								title: "Precision Execution",
								text: "We complete your remodel with meticulous detail and a strict clean-as-we-go philosophy.",
								keywords: "Final Walkthrough",
							},
						].map((item, i) => (
							<motion.div
								key={item.step}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className="relative p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
							>
								<span className="absolute top-4 right-6 text-6xl font-black text-[#E8E4DE]/30 group-hover:text-[#A7C4B5]/20 transition-colors">
									{item.step}
								</span>
								<div className="relative z-10">
									<div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#2D5A3D]/20">
										<span className="text-white font-bold">{item.step}</span>
									</div>
									<h3 className="text-2xl font-bold text-[#1F2E2B] mb-4">
										{item.title}
									</h3>
									<p className="text-gray-600 leading-relaxed mb-6">
										{item.text}
									</p>
									<div className="pt-6 border-t border-gray-50 flex items-center gap-2 text-[#2D5A3D] font-semibold text-sm uppercase tracking-wider">
										<CheckCircle2 className="w-4 h-4" />
										{item.keywords}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<section className="py-28 bg-white">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Homeowner Guide"
						title="Common Questions"
						description="Everything you need to know about remodeling in Vancouver, WA."
					/>
					<div className="mt-16 grid gap-12">
						{[
							{
								q: "Do you handle small interior repairs?",
								a: "Yes. While we specialize in remodeling, we treat small 'punch-list' repairs with the same precision as full-scale renovations.",
							},
							{
								q: "Are you a licensed and insured contractor?",
								a: "Absolutely. Norbilt is a fully licensed, bonded, and insured general contractor in the state of Washington.",
							},
							{
								q: "What areas of Clark County do you serve?",
								a: "We provide interior remodeling and handyman services throughout Vancouver, Camas, Washougal, Ridgefield, and Battle Ground, WA.",
							},
						].map((item, i) => (
							<div key={i} className="border-b border-gray-100 pb-8">
								<h4 className="text-xl font-bold text-[#1F2E2B] mb-4 flex gap-4">
									<span className="text-[#A7C4B5]">0{i + 1}</span> {item.q}
								</h4>
								<p className="text-gray-600 leading-relaxed pl-10">{item.a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FOOTER STRIP */}
			<section className="py-16 bg-[#F8F6F3] text-center text-sm font-semibold text-gray-600 border-t border-gray-100">
				Licensed Washington Contractor • Bonded & Insured • Serving Vancouver &
				Clark County
			</section>
		</div>
	);
}
