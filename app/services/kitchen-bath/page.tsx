"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Paintbrush,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Sparkles,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function KitchenBathPage() {
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
							<Paintbrush className="w-4 h-4" />
							Kitchen & Bathroom Updates
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Kitchen & Bathroom Updates in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80"
						>
							Smart kitchen and bathroom upgrades that improve function and
							appearance — without the disruption of a full remodel.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							High-Impact Kitchen & Bath Refreshes
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes provides kitchen and bathroom update services in
								Vancouver, WA for homeowners who want meaningful improvements
								without committing to a full renovation.
							</p>

							<p>
								From fixture replacements to cabinet updates and backsplash
								installs, we focus on the details that make your space feel
								cleaner, more modern, and more functional.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES LIST */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Update"
						title="Kitchen & Bathroom Services"
						description="Targeted upgrades that make a noticeable difference."
					/>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{[
							"Cabinet hardware replacement",
							"Faucet & plumbing fixture replacement",
							"Vanity installation",
							"Toilet replacement",
							"Backsplash installation",
							"Accessory & hardware mounting",
							"Minor layout adjustments",
							"Finish upgrades & detailing",
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
						title="Upgrades Without the Headache"
						description="Thoughtful work that respects your time and home."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Sparkles,
								title: "Clean, Finished Results",
								text: "We focus on clean lines, proper fit, and polished details.",
							},
							{
								icon: Shield,
								title: "Honest Scope & Pricing",
								text: "Clear expectations, realistic timelines, and no surprise costs.",
							},
							{
								icon: Home,
								title: "Minimal Disruption",
								text: "Efficient scheduling and clean work areas to keep life moving.",
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
						Kitchen & Bath Updates Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed">
						We provide kitchen and bathroom update services throughout
						Vancouver, WA and nearby areas including Five Corners, Brush
						Prairie, Hazel Dell, and Salmon Creek.
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
						Ready to Update Your Kitchen or Bathroom?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Get a free estimate for kitchen and bathroom updates in Vancouver,
						WA.
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
