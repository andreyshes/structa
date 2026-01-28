"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	TreePine,
	Heart,
	Compass,
	Award,
	ArrowRight,
	Mountain,
	Users,
	Clock,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: "Pride in the Details",
			description:
				"We take genuine pride in our work — from the smallest repair to the final finish. If it’s not something we’d put our name on, it doesn’t leave the job site.",
		},
		{
			icon: Compass,
			title: "Clear Communication",
			description:
				"No jargon, no surprises. You’ll always know what’s happening, why it matters, and what comes next.",
		},
		{
			icon: Award,
			title: "Built to Last",
			description:
				"We focus on long-term solutions, not quick fixes. Our goal is work that holds up — structurally and visually.",
		},
		{
			icon: Users,
			title: "Respect for Your Home",
			description:
				"We treat every home like it’s lived in — because it is. Clean spaces, careful work, and professionalism throughout.",
		},
	];

	const stats = [
		{ value: "10+", label: "Years of Experience" },
		{ value: "500+", label: "Projects Completed" },
		{ value: "100%", label: "Detail-Driven" },
		{ value: "PNW", label: "Locally Rooted" },
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2000&q=80"
						alt="Architectural wood detail"
						className="w-full h-full object-cover"
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
							<TreePine className="w-4 h-4" />
							Our Story
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] leading-tight mb-6"
						>
							Built on Craftsmanship,
							<br className="hidden sm:block" />
							Rooted in the Northwest
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed"
						>
							Structa Homes is built on a simple idea — do the work right,
							respect the home, and stand behind the result.
						</motion.p>
					</div>
				</div>
			</section>

			{/* STORY */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<span className="text-sm font-medium tracking-wider uppercase text-[#4A7C59] mb-4 block">
							Who We Are
						</span>
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							A Different Kind of Home Services Company
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes was created to offer homeowners something better —
								thoughtful craftsmanship, honest communication, and work that
								doesn’t cut corners.
							</p>
							<p>
								We’re not focused on being the biggest operation in the region.
								We’re focused on being the one clients trust when the work
								matters.
							</p>
							<p>
								From small repairs to larger remodels, every project gets the
								same level of care, planning, and attention to detail.
							</p>
							<p className="font-medium text-[#2C3E3A]">
								Because the goal isn’t just to finish a project — it’s to earn
								your confidence.
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
						<div className="aspect-4/5 rounded-2xl overflow-hidden">
							<img
								src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
								alt="Craft-focused interior detail"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl shadow-[#2C3E3A]/10">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-lg flex items-center justify-center">
									<Mountain className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<div>
									<p className="text-2xl font-bold text-[#2C3E3A]">PNW</p>
									<p className="text-sm text-[#2C3E3A]/60">Born & Based</p>
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
							<p className="text-[#F8F6F3]/70 text-sm">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* VALUES */}
			<section className="py-24 lg:py-32 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Values"
						title="What Guides Our Work"
						description="These principles shape every project we take on."
					/>

					<div className="grid md:grid-cols-2 gap-8">
						{values.map((value, i) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE]"
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
						Let’s Build Something Solid
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10 max-w-2xl mx-auto">
						If you’re looking for thoughtful work and dependable results, we’d
						love to hear about your project.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-[#F8F6F3] font-medium rounded-xl hover:bg-[#4A7C59] transition-all duration-300 shadow-xl shadow-black/20 text-lg"
					>
						Start a Conversation
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
