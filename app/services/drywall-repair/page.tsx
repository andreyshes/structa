"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Layers,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Clock,
	Droplets,
	Zap,
	Brush,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DrywallRepairPage() {
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
							Expert Drywall Repair & Patching
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Seamless Drywall Repair & Texture Matching in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Don’t settle for visible patches. We specialize in clean, nearly
							invisible drywall repairs, water damage restoration, and precise
							texture matching for homes across Clark County.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
								The Art of Invisible Drywall Repair
							</h2>

							<p>
								Anyone can apply joint compound, but it takes experience and
								precision to make a drywall repair truly disappear. Your walls
								play a major role in how your home looks and feels, and even
								small imperfections can draw the eye.
							</p>

							<p>
								Whether you’re dealing with{" "}
								<strong>
									settlement cracks, doorknob holes, ceiling damage, or the
									aftermath of a plumbing leak
								</strong>
								, we deliver a smooth, level finish that blends seamlessly into
								the surrounding surface and is ready for paint.
							</p>

							<p>
								Serving <strong>Vancouver, WA</strong> and surrounding areas, we
								prioritize cleanliness and dust control. Our process is designed
								to protect your home while delivering professional results.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-4">
							{[
								{
									title: "Stress Cracks",
									desc: "Repairing ceiling and corner cracks caused by settling and seasonal movement.",
								},
								{
									title: "Water Damage",
									desc: "Removal of compromised drywall and replacement with moisture-resistant materials.",
								},
								{
									title: "Texture Matching",
									desc: "Accurate matching of orange peel, knockdown, and smooth wall finishes.",
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-white p-6 rounded-xl border border-[#E8E4DE] shadow-sm"
								>
									<h4 className="font-semibold text-[#2C3E3A] mb-1">
										{item.title}
									</h4>
									<p className="text-sm text-[#2C3E3A]/60">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Capabilities"
						title="Comprehensive Drywall Services"
						description="From small repairs to larger restorations, each project receives the same attention to detail."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
						{[
							{
								icon: Zap,
								title: "Hole & Impact Repair",
								text: "Repairing everything from nail pops to larger accidental damage while restoring wall strength.",
							},
							{
								icon: Droplets,
								title: "Water Damage Repair",
								text: "Careful removal of damaged drywall and treatment of affected areas to help prevent mold.",
							},
							{
								icon: Layers,
								title: "Ceiling Drywall Repair",
								text: "Professional overhead repairs for sagging drywall, cracks, and leak damage.",
							},
							{
								icon: Brush,
								title: "Finish Sanding",
								text: "HEPA-filtered sanding for a smooth, paint-ready surface with minimal dust.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-2xl border border-[#DCD7D0]"
							>
								<item.icon className="w-8 h-8 text-[#4A7C59] mb-4" />
								<h3 className="font-semibold text-[#2C3E3A] mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70">{item.text}</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Many drywall repairs are completed alongside trim work, painting
						preparation, or general handyman services to ensure a complete,
						finished result.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="The Norbilt Difference"
						title="Why Our Drywall Repairs Last"
						description="We focus on proper preparation, quality materials, and proven techniques."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Professional credentials and coverage that protect your home and give you confidence.",
							},
							{
								icon: Clock,
								title: "Efficient Turnaround",
								text: "Strategic use of fast-setting compounds allows most repairs to be completed in fewer visits.",
							},
							{
								icon: Home,
								title: "Dust-Controlled Process",
								text: "Careful containment and vacuum-assisted sanding to maintain clean indoor air quality.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE] hover:border-[#4A7C59] transition-colors"
							>
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
									<item.icon className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{item.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Trusted Drywall Repair in Vancouver, WA
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						Norbilt proudly serves homeowners in{" "}
						<strong>Hazel Dell, Felida, Salmon Creek, and Camas</strong>. If you
						need a drywall repair professional in the 98660, 98661, or 98683 zip
						codes, we’re ready to help.
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
						Ready to Restore Your Walls?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate today. Many minor drywall repairs can be
						quoted from photos.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-semibold"
					>
						Get My Drywall Fixed
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
