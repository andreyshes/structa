"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Hammer,
	CheckCircle2,
	ArrowRight,
	Shield,
	Ruler,
	Home,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FinishCarpentryPage() {
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
							<Hammer className="w-4 h-4" />
							Finish Carpentry
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Trim and Finish Carpentry in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80"
						>
							Precision trim work and interior carpentry that elevates your
							home’s look and feel. Serving Vancouver and surrounding Clark
							County communities.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							Detail-Driven Finish Carpentry
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes provides professional finish carpentry services in
								Vancouver, WA for homeowners who care about clean lines, tight
								reveals, and lasting results.
							</p>

							<p>
								Whether you’re upgrading trim, completing a remodel, or adding
								architectural detail to your space, our approach is careful,
								precise, and never rushed.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES LIST */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Offer"
						title="Finish Carpentry Services"
						description="Interior carpentry work completed with accuracy and attention to detail."
					/>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{[
							"Baseboard installation & replacement",
							"Crown molding installation",
							"Door & window casing",
							"Wainscoting & wall paneling",
							"Custom built-ins & shelving",
							"Mantel installation",
							"Trim repair & upgrades",
							"Interior wood detailing",
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
						title="Carpentry That Shows in the Details"
						description="Clean execution makes all the difference."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Ruler,
								title: "Precision Work",
								text: "Accurate measurements, clean cuts, and tight joints throughout.",
							},
							{
								icon: Shield,
								title: "Built to Last",
								text: "Proper installation methods that hold up over time.",
							},
							{
								icon: Home,
								title: "Respect for Your Space",
								text: "Careful work, protected surfaces, and a clean job site.",
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
						Finish Carpentry Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed">
						We provide finish carpentry services throughout Vancouver, WA and
						nearby areas including Five Corners, Brush Prairie, Hazel Dell, and
						Salmon Creek. If you’re looking for professional finish carpentry
						near you, we’re ready to help.
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
						Upgrade Your Home With Finish Carpentry
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Get a free estimate for finish carpentry in Vancouver, WA.
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
