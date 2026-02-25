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
	ShieldCheck,
	Phone,
	Waves,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function KitchenBathPage() {
	const refreshServices = [
		{
			icon: Droplets,
			title: "Plumbing Fixtures",
			text: "Modernize your space with designer faucets and rainfall shower systems—precision installed with zero-leak guarantees.",
		},
		{
			icon: Layout,
			title: "Tile & Backsplashes",
			text: "Precision-cut tile installations with professional-grade waterproofing for kitchens and master baths.",
		},
		{
			icon: Hammer,
			title: "Vanity & Mirror Sets",
			text: "Removal of dated cabinets and seamless installation of modern vanities, stone tops, and integrated lighting.",
		},
		{
			icon: Waves,
			title: "Moisture Protection",
			text: "Professional-grade re-caulking and grout sealing to prevent mold and structural water damage.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[80vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000"
						alt="Modern kitchen and bathroom refresh services in Vancouver WA"
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
								High-Impact Refreshes
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Kitchen & <br />
							<span className="text-[#FFB800]">Bath Refresh</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6"
						>
							Modernize your most important spaces without the disruption of a
							full remodel. Professional tile, fixture, and vanity upgrades that
							transform your home in days, not months.
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
								Request My Refresh Quote
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
							Zero-Chaos Implementation
						</span>
					</div>
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Licensed WA General Contractor
						</span>
					</div>
				</div>
			</section>

			{/* VALUE PROPOSITION GRID */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Smart Updates <br />
								<span className="text-[#2D5A3D]">Drive Home Value</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								You don’t always need a full renovation to change the feel of
								your home. At Norbilt, we specialize in{" "}
								<strong>targeted updates</strong> that modernize your home while
								keeping your daily life intact. We focus on the details that
								potential buyers—and your family—will notice most.
							</p>

							<div className="flex items-center gap-4 p-6 bg-[#F8F6F3] rounded-2xl border-l-8 border-[#FFB800]">
								<ShieldCheck className="w-8 h-8 text-[#2D5A3D]" />
								<p className="text-sm font-black uppercase tracking-widest text-[#1F2E2B]">
									Licensed Contractor: Precision installation guaranteed.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="bg-[#F8F6F3] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
								<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-xl mb-6 flex items-center gap-2">
									<Layout className="w-5 h-5 text-[#2D5A3D]" /> Kitchen
								</h3>
								<ul className="space-y-4">
									{[
										"Custom Backsplashes",
										"Hardware Re-facing",
										"Under-mount Sink Swaps",
										"Designer Lighting",
									].map((li) => (
										<li
											key={li}
											className="flex items-center gap-2 text-sm font-bold text-gray-600"
										>
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
											{li}
										</li>
									))}
								</ul>
							</div>

							<div className="bg-[#1F2E2B] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
								<Droplets className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
								<h3 className="font-black text-[#FFB800] uppercase tracking-tight text-xl mb-6 flex items-center gap-2">
									<Waves className="w-5 h-5" /> Bathroom
								</h3>
								<ul className="space-y-4">
									{[
										"Vanity & Mirror Sets",
										"Luxury Shower Heads",
										"High-Efficiency Toilets",
										"Grout Restoration",
									].map((li) => (
										<li
											key={li}
											className="flex items-center gap-2 text-sm font-bold text-[#A7C4B5]"
										>
											<div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full" />{" "}
											{li}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CAPABILITIES SECTION */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Our Process"
						title="Clean, Efficient Upgrades"
						description="Designed for busy households who value precision and speed."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
						{refreshServices.map((item, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
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
								Refresh Your Space <br />{" "}
								<span className="text-[#FFB800]">Without The Chaos</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Get the modern look you want without the remodel headaches.
								Request a free estimate today and see how high-impact updates
								can change your home.
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
					<span>WASHOUGAL</span>
					<span>FELIDA</span>
				</div>
			</section>
		</div>
	);
}
