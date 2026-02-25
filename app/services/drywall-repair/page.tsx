"use client";

import Link from "next/link";
import Image from "next/image";
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
	ShieldCheck,
	Phone,
	Sparkles,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DrywallRepairPage() {
	const capabilities = [
		{
			icon: Zap,
			title: "Impact & Hole Repair",
			text: "Structural backing and seamless taping for doorknob holes, furniture scuffs, and accidental wall damage.",
		},
		{
			icon: Droplets,
			title: "Water Damage Restoration",
			text: "Surgical removal of compromised sheetrock and professional treatment for mold prevention and structural drying.",
		},
		{
			icon: Layers,
			title: "Ceiling Restoration",
			text: "Specialized overhead repairs for sagging drywall, skylight leaks, and textured ceiling blending.",
		},
		{
			icon: Sparkles,
			title: "Clean-Finish Sanding",
			text: "Vacuum-assisted sanding technology to ensure a paint-ready surface with virtually zero dust left in your home.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1628901551715-7234d14fb7a0?w=900&auto=format&fit=crop&q=60"
						alt="Professional drywall finishing and texture matching in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Precision Finishing
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Seamless <br />
							<span className="text-[#FFB800]">Drywall Repair</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6"
						>
							Expert wall restoration for Vancouver homeowners. We specialize in
							"invisible" patches and precise texture blending that restores
							your walls to a flawless, paint-ready finish.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="pt-4"
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Request A Patch Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20 text-white">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<Sparkles className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Dust-Free Sanding Technology
						</span>
					</div>
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Expert Texture Matching
						</span>
					</div>
				</div>
			</section>

			{/* AUTHORITY CONTENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Wall Restoration <br />
								<span className="text-[#2D5A3D]">Done The Right Way</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								It takes professional precision to make a drywall repair truly
								disappear. Whether you’re dealing with settlement cracks,
								doorknob holes, or the aftermath of a plumbing leak, we deliver
								a Level 4 finish that blends seamlessly with your existing
								walls.
							</p>

							<div className="space-y-4">
								{[
									"HEPA-Vacuum Dust Containment",
									"Precise Orange Peel & Knockdown Matching",
									"Moisture-Resistant Bathroom Materials",
									"Same-Day Patching Available",
								].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-xs uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6">
							{[
								{
									t: "Stress Cracks",
									d: "Fixing structural and corner cracks caused by PNW seasonal soil movement.",
								},
								{
									t: "Water Restoration",
									d: "Removal of compromised sheetrock and replacement with anti-mold backing.",
								},
								{
									t: "Texture Matching",
									d: "Expert blending of Orange Peel, Knockdown, and Smooth-wall finishes.",
								},
							].map((item, i) => (
								<div
									key={i}
									className="bg-[#F8F6F3] p-8 rounded-[2rem] border-l-8 border-[#FFB800] shadow-sm"
								>
									<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-xl mb-2">
										{item.t}
									</h3>
									<p className="text-gray-600 text-sm font-medium">{item.d}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CAPABILITIES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Expertise"
						title="Complete Sheetrock Services"
						description="From minor impacts to full ceiling restorations."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
						{capabilities.map((item, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-[#FFB800]/20"
							>
								<div className="w-14 h-14 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1F2E2B] transition-colors">
									<item.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#FFB800]" />
								</div>
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight mb-4 leading-none">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 font-medium leading-relaxed">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA - BILLBOARD STYLE */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Flawless Walls <br />{" "}
								<span className="text-[#FFB800]">Start Here</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Stop looking at that hole in the wall. Send a photo and get an
								estimate for a seamless, invisible repair today.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Get A Quote
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> Call Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEO FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>SALMON CREEK</span>
					<span>HAZEL DELL</span>
				</div>
			</section>
		</div>
	);
}
