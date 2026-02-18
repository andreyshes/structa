"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Paintbrush,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Sparkles,
	Droplets,
	Hammer,
	Layout,
	MapPin,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function KitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - MODERN REFRESH VISUALS */}
			<section className="relative min-h-[85vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
						alt="Modern kitchen and bathroom refresh services in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Balanced overlay for visibility and legibility */}
					<div className="absolute inset-0 bg-[#1F2E2B]/45 lg:bg-linear-to-r lg:from-[#1F2E2B]/85 lg:via-[#1F2E2B]/40 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_30%)]">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-8 shadow-xl"
						>
							<Sparkles className="w-4 h-4" />
							High-Impact Interior Refreshes
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Kitchen & Bathroom <br />
							<span className="text-[#A7C4B5]">Refreshes Vancouver, WA</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white font-medium leading-relaxed max-w-2xl mb-10"
						>
							Modernize your most important spaces without the disruption of a
							full remodel. We deliver professional tile, fixture, and vanity
							upgrades that transform your home in days, not months.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
							>
								Request My Refresh Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* INTRO - IMPACT OVER DEMOLITION */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Smart Updates That <br />
								<span className="text-[#2D5A3D]">Drive Home Value</span>
							</h2>

							<p>
								You don’t always need a full renovation to change the feel of
								your home. At Norbilt, we specialize in **targeted updates**
								that modernize your kitchen or bathroom while keeping your daily
								life intact.
							</p>

							<p>
								From installing sophisticated **tile backsplashes** to swapping
								dated vanities and high-traffic fixtures, we focus on the
								details that potential buyers—and your family—will notice most.
							</p>

							<div className="flex items-center gap-4 p-4 bg-[#F1F5F2] rounded-xl border-l-4 border-[#2D5A3D]">
								<Shield className="w-6 h-6 text-[#2D5A3D]" />
								<p className="text-sm font-semibold text-[#1F2E2B]">
									Licensed WA Contractor: Professional installation, every time.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="bg-[#F8F6F3] p-8 rounded-2xl border border-gray-100 shadow-sm">
								<h4 className="font-bold text-[#1F2E2B] mb-4 flex items-center gap-2">
									<Layout className="w-5 h-5 text-[#2D5A3D]" /> Kitchen
								</h4>
								<ul className="text-sm space-y-3 text-gray-600">
									<li className="flex gap-2">
										<span>•</span> Custom Backsplashes
									</li>
									<li className="flex gap-2">
										<span>•</span> Hardware Re-facing
									</li>
									<li className="flex gap-2">
										<span>•</span> Under-mount Sink Swaps
									</li>
									<li className="flex gap-2">
										<span>•</span> Recessed Lighting
									</li>
								</ul>
							</div>

							<div className="bg-[#1F2E2B] p-8 rounded-2xl text-white shadow-lg">
								<h4 className="font-bold mb-4 flex items-center gap-2">
									<Droplets className="w-5 h-5 text-[#A7C4B5]" /> Bathroom
								</h4>
								<ul className="text-sm space-y-3 text-white/80">
									<li className="flex gap-2">
										<span>•</span> Vanity & Mirror Sets
									</li>
									<li className="flex gap-2">
										<span>•</span> Luxury Shower Heads
									</li>
									<li className="flex gap-2">
										<span>•</span> High-Efficiency Toilets
									</li>
									<li className="flex gap-2">
										<span>•</span> Grout & Seal Restoration
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES - SEMANTIC CAPABILITIES */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Process"
						title="Clean, Efficient Upgrades"
						description="Our refresh work is designed for busy households in Clark County who value precision and speed."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
						{[
							{
								icon: Droplets,
								title: "Plumbing Fixtures",
								text: "Installation of modern faucets and shower systems with zero-leak guarantees.",
							},
							{
								icon: Layout,
								title: "Tile & Backsplashes",
								text: "Precision-cut tile with proper waterproofing for bathrooms and kitchens.",
							},
							{
								icon: Hammer,
								title: "Vanity Installs",
								text: "Removal of old units and seamless installation of new vanities and hardware.",
							},
							{
								icon: Paintbrush,
								title: "Moisture Protection",
								text: "Professional caulking and grout sealing to prevent mold and water damage.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-all"
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

			{/* SERVICE AREA */}
			<section className="py-24 bg-white border-y border-gray-100">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<div className="inline-flex items-center gap-2 text-[#2D5A3D] font-bold uppercase tracking-widest text-sm mb-6">
						<MapPin className="w-4 h-4" /> Locally Owned
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8">
						Kitchen & Bath Pros in Vancouver, WA
					</h2>
					<p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto mb-10">
						Based in **Clark County**, we provide reliable interior updates for
						homeowners in **Vancouver, Camas, Ridgefield, and Battle Ground**.
						We respect your time and your home's cleanliness.
					</p>
					<div className="flex flex-wrap justify-center gap-8 font-bold text-[#1F2E2B]">
						<span>Vancouver</span>
						<span>Camas</span>
						<span>Salmon Creek</span>
						<span>Felida</span>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-[#1F2E2B] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
					>
						Ready to Refresh Your Space?
					</motion.h2>

					<p className="text-[#A7C4B5] text-xl mb-12 max-w-2xl mx-auto">
						Get the modern look you want without the remodel chaos. Request a
						free estimate today and see how high-impact updates can change your
						home.
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
	