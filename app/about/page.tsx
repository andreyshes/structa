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
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function AboutPage() {
	const values = [
		{
			icon: Heart,
			title: "Pride in the Details",
			description:
				"Every repair, upgrade, and finish detail is handled with care. If it’s not something we’d be proud to stand behind, it doesn’t leave the job site.",
		},
		{
			icon: Compass,
			title: "Clear Communication",
			description:
				"We believe homeowners deserve clarity. You’ll always know what’s happening, why it matters, and what to expect next.",
		},
		{
			icon: Award,
			title: "Built to Last",
			description:
				"We focus on long-term solutions — not shortcuts. Our work is designed to hold up structurally, visually, and functionally.",
		},
		{
			icon: Users,
			title: "Respect for Your Home",
			description:
				"We work cleanly, protect your space, and treat every home with respect — because it’s lived in.",
		},
	];

	const stats = [
		{ value: "5+", label: "Years of Experience" },
		{ value: "250+", label: "Projects Completed" },
		{ value: "100%", label: "Detail-Driven" },
		{ value: "Vancouver, WA", label: "Locally Based" },
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2000&q=80"
						alt="Craftsmanship-focused home services in Vancouver WA"
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
							About Structa Homes
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] leading-tight mb-6"
						>
							A Local Home Services Company
							<br className="hidden sm:block" />
							Built on Craftsmanship
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed"
						>
							Based in Vancouver, WA, Structa Homes provides reliable home
							repair, improvement, and finish services with a focus on quality,
							honesty, and respect for your home.
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
							Trusted Home Services in Vancouver, WA
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes was founded to provide homeowners in Vancouver, WA
								and surrounding Clark County communities with dependable home
								services done the right way.
							</p>

							<p>
								We specialize in a wide range of work — from small repairs and
								finish carpentry to thoughtful home improvements — all delivered
								with careful planning and clear communication.
							</p>

							<p>
								Rather than rushing through jobs, we focus on doing fewer
								projects better. That means cleaner work, better results, and a
								smoother experience for homeowners.
							</p>

							<p className="font-medium text-[#2C3E3A]">
								Our goal isn’t just to complete projects — it’s to become the
								home services company you trust and recommend.
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
								alt="Finish carpentry and interior home upgrades in Vancouver WA"
								className="w-full h-full object-cover"
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
									<p className="text-sm text-[#2C3E3A]/60">Locally Based</p>
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
						description="The principles behind every Structa Homes project."
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
						Let’s Improve Your Home
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10 max-w-2xl mx-auto">
						If you’re looking for a reliable home services company in Vancouver,
						WA, we’d love to hear about your project.
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
