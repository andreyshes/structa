"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	DoorOpen,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Wind,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DoorWindowPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<DoorOpen className="w-4 h-4" />
							Door & Window Repair
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Door & Window Repair in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80"
						>
							Repairs and adjustments that restore proper function, security,
							and energy efficiency for doors and windows throughout your home.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							Doors & Windows That Work Like They Should
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes provides professional door and window repair
								services in Vancouver, WA for homeowners dealing with sticking
								doors, drafts, broken hardware, or poor alignment.
							</p>

							<p>
								Instead of immediately replacing doors or windows, we focus on
								proper repairs and adjustments that extend their life and
								restore smooth operation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES LIST */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Repair"
						title="Door & Window Services"
						description="Targeted repairs that improve comfort and security."
					/>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{[
							"Door alignment & adjustment",
							"Sticking or sagging doors",
							"Door hardware replacement",
							"Weatherstripping replacement",
							"Draft reduction & air sealing",
							"Window repair & adjustment",
							"Screen repair & replacement",
							"Lock & latch installation",
						].map((item) => (
							<div key={item} className="flex items-center gap-3">
								<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
								<span className="text-[#2C3E3A]/80">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Why Structa Homes"
						title="Repairs That Improve Daily Comfort"
						description="Small fixes that make a noticeable difference."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Security & Safety Focused",
								text: "Proper alignment and secure hardware for peace of mind.",
							},
							{
								icon: Wind,
								title: "Energy Efficiency",
								text: "Reduce drafts and heat loss with correct sealing and fit.",
							},
							{
								icon: Home,
								title: "Respect for Your Home",
								text: "Clean work, careful adjustments, and no unnecessary damage.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE]"
							>
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
									<item.icon className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{item.title}
								</h3>
								<p className="text-[#2C3E3A]/70">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Door & Window Repair Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed">
						We provide door and window repair services throughout Vancouver, WA
						and nearby areas including Five Corners, Brush Prairie, Hazel Dell,
						and Salmon Creek.
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F8F6F3] mb-6"
					>
						Need Door or Window Repairs?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Get a free estimate for door and window repair in Vancouver, WA.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
