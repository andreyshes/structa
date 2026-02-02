"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Home,
	CheckCircle2,
	ArrowRight,
	Shield,
	Ruler,
	Hammer,
	Layers,
	Zap,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FlooringPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<Layers className="w-4 h-4" />
							Flooring Repair & Detail Work
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Flooring Repair & Minor Installations in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Don’t replace an entire floor because of one damaged area. We
							specialize in precise flooring repairs and small installations for
							hardwood, laminate, tile, and LVP throughout Clark County.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
								Smart Flooring Repairs That Save You Money
							</h2>

							<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
								<p>
									Damaged flooring is more than a cosmetic issue — it can become
									a trip hazard, allow moisture intrusion, or signal problems
									below the surface. Structa Homes provides{" "}
									<strong>professional flooring repair in Vancouver, WA</strong>
									, focused on solving the issue correctly instead of pushing
									unnecessary replacements.
								</p>

								<p>
									From water-damaged laminate and loose planks to squeaky floors
									and cracked tiles, we restore stability, appearance, and
									safety. Our approach prioritizes targeted repairs that blend
									seamlessly with your existing floor.
								</p>
							</div>
						</div>

						<div className="bg-[#E8E4DE] p-8 rounded-2xl border border-[#DCD7D0]">
							<h3 className="text-xl font-semibold text-[#2C3E3A] mb-4">
								Common Flooring Issues We Repair
							</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Gapped or shifting planks",
									"Buckling or swollen flooring",
									"Cracked or loose tiles",
									"Squeaky subfloors",
									"Worn thresholds and transitions",
									"Moisture-related damage",
								].map((item) => (
									<div
										key={item}
										className="flex items-start gap-2 text-[#2C3E3A]/80"
									>
										<CheckCircle2 className="w-5 h-5 text-[#4A7C59] mt-1" />
										<span className="text-sm font-medium">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Services"
						title="Targeted Flooring Repair Solutions"
						description="Detail-oriented work designed to extend the life of your floors."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{[
							{
								title: "Hardwood, Laminate & LVP Repair",
								desc: "Replacing individual damaged planks and securing loose flooring to restore a smooth, uniform surface.",
								icon: Hammer,
							},
							{
								title: "Tile & Grout Repair",
								desc: "Repairing cracked or loose tiles and refreshing damaged grout for a clean, durable finish.",
								icon: Zap,
							},
							{
								title: "Floor Transitions & Thresholds",
								desc: "Installing and replacing T-mouldings and reducers for a polished transition between flooring types.",
								icon: Ruler,
							},
							{
								title: "Squeak & Movement Fixes",
								desc: "Addressing subfloor and joist connections to eliminate floor noise at the source.",
								icon: Home,
							},
							{
								title: "Subfloor Leveling & Spot Repairs",
								desc: "Correcting minor dips or uneven areas that affect the performance of finished flooring.",
								icon: Layers,
							},
							{
								title: "Baseboard & Trim Integration",
								desc: "Finishing repairs cleanly with baseboards and shoe moulding for a cohesive look.",
								icon: Shield,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-xl shadow-sm border border-transparent hover:border-[#4A7C59] transition-all"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-4" />
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{service.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed text-sm">
									{service.desc}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Flooring repairs are often completed alongside drywall patching,
						trim adjustments, or general handyman work to ensure a clean,
						finished result.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="The Structa Standard"
						title="Why Homeowners Trust Our Flooring Repairs"
						description="Focused on longevity, safety, and proper installation."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Ruler,
								title: "Precision Matching",
								text: "We take the time to closely match existing flooring materials for a seamless repair.",
							},
							{
								icon: Hammer,
								title: "Structural Awareness",
								text: "Every repair considers the subfloor and framing to prevent recurring issues.",
							},
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Professional coverage and standards that protect your home and investment.",
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
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Flooring Repair Services Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						Structa Homes provides flooring repair services throughout{" "}
						<strong>Vancouver, WA</strong> and nearby Clark County communities,
						including Five Corners, Brush Prairie, Hazel Dell, and Salmon Creek.
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
						Ready to Repair Your Floors?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate and get honest guidance on the best repair
						option for your home.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-semibold"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
