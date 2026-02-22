"use client";

import Image from "next/image";
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
	ShieldCheck,
	Phone,
	Droplets,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FlooringPage() {
	const services = [
		{
			title: "Plank & Tile Restoration",
			desc: "Replacing individual damaged LVP, laminate, or hardwood planks and securing loose flooring to restore a seamless surface.",
			icon: Hammer,
		},
		{
			title: "Tile & Grout Specialist",
			desc: "Repairing cracked tiles and refreshing compromised grout lines for a durable, water-tight finish.",
			icon: Zap,
		},
		{
			title: "Transitions & Thresholds",
			desc: "Professional installation of T-mouldings and reducers to ensure safe, polished transitions between rooms.",
			icon: Ruler,
		},
		{
			title: "Subfloor & Squeak Repair",
			desc: "Eliminating floor noise at the source by securing subfloors and addressing joist movement.",
			icon: Home,
		},
		{
			title: "Moisture Mitigation",
			desc: "Identifying and repairing areas affected by minor leaks before they compromise your entire floor system.",
			icon: Droplets,
		},
		{
			title: "Trim & Baseboard Finish",
			desc: "Completing every floor repair with new baseboards or shoe moulding for a cohesive, professional look.",
			icon: Shield,
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1624574470112-46944be68409?w=1600&q=80"
						alt="Professional flooring repair and installation in Vancouver WA"
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
								Flooring Restoration
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Repair Your <br />
							<span className="text-[#FFB800]">Existing Floors</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6"
						>
							Don’t replace an entire floor because of one damaged area. We
							specialize in precise repairs and custom transitions for hardwood,
							LVP, and tile throughout Clark County.
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
								Get A Repair Quote
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
						<Layers className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Laminate • LVP • Hardwood • Tile
						</span>
					</div>
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Precision Seamless Patching
						</span>
					</div>
				</div>
			</section>

			{/* CORE VALUE PROP */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Smart Repairs <br />
								<span className="text-[#2D5A3D]">Save You Thousands</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								Damaged flooring is more than cosmetic—it’s a safety hazard and
								an entry point for moisture. We focus on targeted repairs that
								blend perfectly with your existing floor, solving the issue
								correctly without the high cost of unnecessary replacement.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Gapped Plank Correction",
									"Squeak & Subfloor Repair",
									"Transition Installation",
									"Tile/Grout Refresh",
								].map((item) => (
									<div key={item} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-[10px] uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-[8px] border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">
									Service Focus
								</h3>
								<div className="space-y-8">
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Structural Stability
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											We address subfloor dips and joist movement to ensure your
											finished floor is solid and silent.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Visual Continuity
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											Expert board-matching and trim integration to make your
											repairs virtually invisible.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Capabilities"
						title="Targeted Flooring Solutions"
						description="Detail-oriented work designed to extend the life of your floors."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
						{services.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
							>
								<div className="w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1F2E2B] transition-colors">
									<service.icon className="w-8 h-8 text-[#2D5A3D] group-hover:text-[#FFB800]" />
								</div>
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-4 leading-none">
									{service.title}
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed text-sm">
									{service.desc}
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
								Restore Your <br />{" "}
								<span className="text-[#FFB800]">Existing Floors</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Stop living with loose planks or cracked tiles. Get an honest,
								transparent estimate for the best repair option for your home.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> 916.508.6272
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
					<span>HAZEL DELL</span>
					<span>FELIDA</span>
				</div>
			</section>
		</div>
	);
}
