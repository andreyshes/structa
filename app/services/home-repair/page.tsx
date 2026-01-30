"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Clock,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HomeRepairPage() {
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
							<Wrench className="w-4 h-4" />
							Home Repair Services
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Home Repair Services in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80"
						>
							Professional, detail-driven home repairs for homeowners in
							Vancouver, Five Corners, Brush Prairie, Hazel Dell, and
							surrounding Clark County communities.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							Reliable Home Repairs Done the Right Way
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes provides dependable home repair services in
								Vancouver, WA for homeowners who want issues handled correctly —
								not rushed or patched temporarily.
							</p>

							<p>
								From everyday wear-and-tear to unexpected fixes, we help keep
								your home safe, functional, and looking its best. Every repair
								is approached with care, clear communication, and respect for
								your space.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES LIST */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Handle"
						title="Common Home Repair Services"
						description="A wide range of residential repairs completed with precision and care."
					/>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{[
							"General home repairs & maintenance",
							"Drywall damage & minor patching",
							"Door, trim, and hardware repairs",
							"Plumbing fixture repairs",
							"Minor electrical fixes",
							"Appliance installation & adjustments",
							"Caulking & weatherproofing",
							"Furniture assembly & mounting",
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
						eyebrow="Why Choose Structa Homes"
						title="A Better Experience for Homeowners"
						description="Professional repairs backed by craftsmanship and accountability."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Quality-Focused Repairs",
								text: "We fix issues properly — not temporarily — using sound methods and materials.",
							},
							{
								icon: Clock,
								title: "Clear Scheduling & Communication",
								text: "You’ll know when we’re coming, what we’re doing, and what to expect.",
							},
							{
								icon: Home,
								title: "Respect for Your Home",
								text: "Clean work areas, careful protection, and minimal disruption.",
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
						Home Repair Services Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed">
						We proudly provide home repair services throughout Vancouver, WA and
						nearby areas including Five Corners, Brush Prairie, Hazel Dell, and
						Salmon Creek. If you’re searching for reliable home repair near you,
						we’re here to help.
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
						Need Home Repairs in Vancouver, WA?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Get a free estimate and let’s take care of your repair the right
						way.
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
