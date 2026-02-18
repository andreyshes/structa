"use client";

import Link from "next/link";
import Image from "next/image"; // Added for optimized image handling
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
	MapPin,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DrywallRepairPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO WITH BACKGROUND IMAGE */}
			<section className="relative min-h-[80vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1628901551715-7234d14fb7a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJ5d2FsbHxlbnwwfHwwfHx8MA%3D%3D"
						alt="Professional drywall finishing and texture matching in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Overlay for readability and professional aesthetics */}
					<div className="absolute inset-0 bg-[#1F2E2B]/85 lg:bg-linear-to-r lg:from-[#1F2E2B] lg:via-[#1F2E2B]/40 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/40 backdrop-blur-md rounded-full text-[#A7C4B5] text-xs font-bold uppercase tracking-widest border border-[#2D5A3D]/50 mb-8"
						>
							<Shield className="w-4 h-4" />
							Licensed · Bonded · Insured · WA Contractor
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Seamless Drywall Repair <br />
							<span className="text-[#A7C4B5]">& Texture Matching</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/80 leading-relaxed max-w-2xl mb-10"
						>
							Expert drywall restoration for Vancouver homeowners. We specialize
							in "invisible" patches, water damage repair, and precise texture
							blending that restores your walls to a flawless, paint-ready
							finish.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#3a6d4b] transition-all shadow-2xl"
							>
								Request a Patch Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* INTRO - Authority & Detail focus */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Flawless Wall Restoration <br />
								<span className="text-[#2D5A3D]">Done the Right Way</span>
							</h2>

							<p>
								Anyone can apply joint compound, but it takes professional
								precision to make a drywall repair truly disappear. Your walls
								provide the backdrop for your home's aesthetic—even small
								imperfections can ruin a room's appeal.
							</p>

							<p>
								Whether you’re dealing with **settlement cracks, doorknob holes,
								ceiling damage, or the aftermath of a plumbing leak**, we
								deliver a smooth, Level 4 finish that blends seamlessly.
							</p>

							<p className="font-semibold text-[#1F2E2B]">
								Serving Vancouver, Camas, and Ridgefield, we prioritize dust
								containment and site protection so your home stays as clean as
								your new walls.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-4">
							{[
								{
									title: "Stress & Settlement Cracks",
									desc: "Addressing structural ceiling and corner cracks caused by the PNW's seasonal soil movement.",
								},
								{
									title: "Water Damage Restoration",
									desc: "Removal of compromised sheetrock and replacement with moisture-resistant materials.",
								},
								{
									title: "Precision Texture Matching",
									desc: "Accurate matching of Orange Peel, Knockdown, and Smooth wall finishes.",
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-[#F8F6F3] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
								>
									<h4 className="font-bold text-[#1F2E2B] mb-2 text-xl">
										{item.title}
									</h4>
									<p className="text-gray-600">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES - Semantic Grid */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Capabilities"
						title="Professional Sheetrock Services"
						description="From small impact repairs to ceiling restorations, we treat every wall like a blank canvas."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
						{[
							{
								icon: Zap,
								title: "Impact Repair",
								text: "Restoring wall strength after accidental damage with structural backing and seamless taping.",
							},
							{
								icon: Droplets,
								title: "Water Damage",
								text: "Careful removal of mold-prone drywall and professional treatment of affected areas.",
							},
							{
								icon: Layers,
								title: "Ceiling Repair",
								text: "Specialized overhead repairs for sagging drywall, skylight leaks, and attic access points.",
							},
							{
								icon: Brush,
								title: "Dust-Free Finish",
								text: "HEPA-vacuum-assisted sanding to ensure a paint-ready surface with zero mess.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-all duration-300"
							>
								<div className="w-12 h-12 bg-[#F8F6F3] rounded-xl flex items-center justify-center mb-6">
									<item.icon className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="font-bold text-[#1F2E2B] mb-3">{item.title}</h3>
								<p className="text-sm text-gray-600 leading-relaxed">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA - Strategic Local Search */}
			<section className="py-24 bg-white border-y border-gray-100">
				<div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
					<div className="inline-flex items-center gap-2 text-[#2D5A3D] font-bold uppercase tracking-widest text-sm mb-4">
						<MapPin className="w-4 h-4" /> Service Area
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8">
						Expert Drywall Repair in Vancouver & Clark County
					</h2>
					<p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
						Norbilt provides professional wall restoration throughout **Hazel
						Dell, Felida, Salmon Creek, and Camas**. We are the preferred choice
						for homeowners in the **98660, 98661, and 98683** zip codes.
					</p>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#1F2E2B] font-semibold italic">
						<span>Vancouver, WA</span>
						<span>Camas, WA</span>
						<span>Ridgefield, WA</span>
						<span>Battle Ground, WA</span>
					</div>
				</div>
			</section>

			{/* CTA - Conversion Focus */}
			<section className="py-24 bg-[#1F2E2B] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
					>
						Ready for Flawless Walls?
					</motion.h2>

					<p className="text-[#A7C4B5] text-xl mb-12 max-w-2xl mx-auto">
						Get your walls back to perfect condition. Many minor drywall repairs
						can be estimated instantly from a few clear photos.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white font-bold rounded-2xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
					>
						Get My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
