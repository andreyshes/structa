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
	Map,
	CheckCircle,
	Clock,
	FileCheck,
	MessageSquare,
	Star,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";
import FaqSection from "@/app/components/FaqSection";

export default function AboutPageContent() {
	const values = [
		{
			icon: Heart,
			title: "Precision & Detail",
			description:
				"Every repair, upgrade, and finish detail is handled with care. If it's not something we'd be proud to stand behind, it doesn't leave the job site.",
		},
		{
			icon: Compass,
			title: "Clear Communication",
			description:
				"We believe homeowners deserve clarity. You'll always know what's happening, why it matters, and what to expect next throughout your remodel.",
		},
		{
			icon: Award,
			title: "Built to Last",
			description:
				"We focus on long-term solutions — not shortcuts. Our work is designed to hold up structurally, visually, and functionally for years to come.",
		},
		{
			icon: Users,
			title: "Respect for Your Home",
			description:
				"We work cleanly, protect your space, and treat every home with respect — using professional dust containment and tidy job site practices.",
		},
	];

	const stats = [
		{ value: "5+", label: "Years of Experience" },
		{ value: "250+", label: "Projects Completed" },
		{ value: "Licensed", label: "WA Contractor" },
		{ value: "Vancouver", label: "Locally Based" },
	];

	const process = [
		{
			number: "01",
			title: "Initial Consultation",
			description:
				"We discuss your project goals, timeline, and budget. No pressure — just honest advice.",
			icon: MessageSquare,
		},
		{
			number: "02",
			title: "Detailed Estimate",
			description:
				"You'll receive a clear, itemized proposal with transparent pricing and scope of work.",
			icon: FileCheck,
		},
		{
			number: "03",
			title: "Professional Execution",
			description:
				"Our team completes the work with attention to detail, clean job sites, and regular updates.",
			icon: CheckCircle,
		},
		{
			number: "04",
			title: "Final Walkthrough",
			description:
				"We ensure you're completely satisfied before considering the job complete.",
			icon: Star,
		},
	];

	const testimonials = [
		{
			name: "Sarah M.",
			location: "Vancouver, WA",
			rating: 5,
			text: "Norbilt did an amazing job on our kitchen remodel. The attention to detail was outstanding, and they kept everything clean throughout the project.",
		},
		{
			name: "Mike T.",
			location: "Camas, WA",
			rating: 5,
			text: "Professional, reliable, and fair pricing. They repaired our drywall damage so well you can't even tell there was an issue. Highly recommend!",
		},
		{
			name: "Jennifer L.",
			location: "Battle Ground, WA",
			rating: 5,
			text: "The finish carpentry work exceeded our expectations. Beautiful crown molding installation and they were a pleasure to work with.",
		},
	];

	return (
		<div className="overflow-hidden">
			{/* HERO - Optimized H1 for Vancouver Search Intent */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
				<div className="absolute inset-0">
					<Image
						src="https://t3.ftcdn.net/jpg/05/34/00/46/240_F_534004600_4P96lwiKXgZCVnMqOpVXUfY9horI4IjP.jpg"
						alt="Interior remodeling and finish carpentry craftsmanship in Vancouver WA"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-br from-[#2C3E3A]/90 via-[#2C3E3A]/85 to-[#2D5A3D]/70" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/25 backdrop-blur-sm rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8 border border-[#F8F6F3]/10"
						>
							<ShieldCheck className="w-4 h-4 text-[#A7C4B5]" />
							Licensed, Bonded & Insured WA Contractor
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] leading-tight mb-6"
						>
							Vancouver's Interior <br />
							<span className="text-[#A7C4B5]">Remodeling Specialists</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed"
						>
							Based in Vancouver, WA, Norbilt provides reliable home repair,
							improvement, and finish carpentry services with a focus on
							quality, honesty, and respect for your living space.
						</motion.p>
					</div>
				</div>
			</section>

			{/* CERTIFICATIONS/BADGES */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
						<div className="text-center">
							<ShieldCheck className="w-12 h-12 text-[#2D5A3D] mx-auto mb-2" />
							<p className="text-sm font-semibold text-[#2C3E3A]">
								Licensed & Insured
							</p>
							<p className="text-xs text-[#2C3E3A]/60">WA State Contractor</p>
						</div>
						<div className="text-center">
							<Award className="w-12 h-12 text-[#2D5A3D] mx-auto mb-2" />
							<p className="text-sm font-semibold text-[#2C3E3A]">
								Quality Guarantee
							</p>
							<p className="text-xs text-[#2C3E3A]/60">Workmanship Warranty</p>
						</div>
						<div className="text-center">
							<Star className="w-12 h-12 text-[#2D5A3D] mx-auto mb-2" />
							<p className="text-sm font-semibold text-[#2C3E3A]">
								5-Star Rated
							</p>
							<p className="text-xs text-[#2C3E3A]/60">Customer Reviewed</p>
						</div>
						<div className="text-center">
							<Clock className="w-12 h-12 text-[#2D5A3D] mx-auto mb-2" />
							<p className="text-sm font-semibold text-[#2C3E3A]">
								5+ Years Experience
							</p>
							<p className="text-xs text-[#2C3E3A]/60">Proven Track Record</p>
						</div>
					</div>
				</div>
			</section>

			{/* STORY - Local Authority Building */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-sm font-medium tracking-wider uppercase text-[#4A7C59] mb-4 block">
							The Norbilt Standard
						</span>

						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							Trusted Home Improvements in Vancouver, WA & Clark County
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Norbilt was founded to provide homeowners in Vancouver, WA and
								surrounding Clark County communities with dependable home
								services done the right way. We fill the gap between large,
								impersonal firms and unreliable handymen.
							</p>

							<p>
								We specialize in a wide range of interior work — from
								professional drywall repairs and finish carpentry to kitchen and
								bathroom upgrades — all delivered with careful planning and
								clear communication.
							</p>

							<p>
								Rather than rushing through jobs, we focus on doing fewer
								projects better. That means cleaner work, better results, and a
								smoother experience for homeowners in the Pacific Northwest.
							</p>

							<p className="font-medium text-[#2C3E3A]">
								Our goal isn't just to complete projects — it's to become the
								licensed contractor you trust and recommend to your neighbors.
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src="https://plus.unsplash.com/premium_photo-1733514433307-f337be80b0f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVtb2RlbGVkJTIwYmF0aHJvb218ZW58MHx8MHx8fDA%3D"
								alt="Professional finish carpentry and interior home upgrades in Clark County WA"
								fill
								className="object-cover"
							/>
						</div>

						<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl shadow-[#2C3E3A]/10">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-lg flex items-center justify-center">
									<Mountain className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<div>
									<p className="text-2xl font-bold text-[#2C3E3A]">
										Vancouver, WA
									</p>
									<p className="text-sm text-[#2C3E3A]/60">
										Serving All Clark County
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* STATS */}
			<section className="py-16 bg-[#2D5A3D]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							className="text-center"
						>
							<p className="text-4xl md:text-5xl font-bold text-[#F8F6F3] mb-2">
								{stat.value}
							</p>
							<p className="text-[#F8F6F3]/70 text-sm uppercase tracking-wider font-semibold">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* HOW WE WORK PROCESS */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Process"
						title="How We Work With You"
						description="A transparent, stress-free approach to home improvement projects in Vancouver."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
						{process.map((step, i) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className="relative"
							>
								<div className="text-6xl font-bold text-[#2D5A3D]/10 mb-4">
									{step.number}
								</div>
								<div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-4 -mt-12">
									<step.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{step.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* VALUES */}
			<section className="py-24 lg:py-32 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Values"
						title="Local Craftsmanship Standards"
						description="The principles behind every Norbilt remodeling and repair project in Vancouver."
					/>

					<div className="grid md:grid-cols-2 gap-8 mt-12">
						{values.map((value, i) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE] shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-14 h-14 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
									<value.icon className="w-7 h-7 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{value.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Customer Reviews"
						title="What Our Clients Say"
						description="Real feedback from homeowners across Clark County."
					/>

					<div className="grid md:grid-cols-3 gap-8 mt-16">
						{testimonials.map((testimonial, i) => (
							<motion.div
								key={testimonial.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE] shadow-sm"
							>
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-[#2D5A3D] text-[#2D5A3D]"
										/>
									))}
								</div>
								<p className="text-[#2C3E3A] leading-relaxed mb-6 italic">
									"{testimonial.text}"
								</p>
								<div>
									<p className="font-semibold text-[#2C3E3A]">
										{testimonial.name}
									</p>
									<p className="text-sm text-[#2C3E3A]/60">
										{testimonial.location}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<FaqSection />

			{/* SERVICE AREA LISTING - Strategic SEO Section */}
			<section className="py-16 bg-white border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-2 mb-6 text-[#2D5A3D]">
						<Map className="w-5 h-5" />
						<h3 className="text-lg font-bold uppercase tracking-widest">
							Our Service Area
						</h3>
					</div>
					<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
						Providing professional interior remodeling and home repairs to
						homeowners throughout Clark County:
					</p>
					<div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-[#2C3E3A] font-medium">
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
							<span key={city} className="flex items-center gap-1">
								<span className="w-1.5 h-1.5 bg-[#A7C4B5] rounded-full" />
								{city}, WA
							</span>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 lg:py-32 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F8F6F3] mb-6"
					>
						Ready to Start Your Next Project?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10 max-w-2xl mx-auto">
						If you're looking for a reliable, licensed home services company in
						Vancouver, WA, we'd love to provide a detailed estimate for your
						project.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-[#F8F6F3] font-medium rounded-xl hover:bg-[#4A7C59] transition-all duration-300 shadow-xl shadow-black/20 text-lg"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
