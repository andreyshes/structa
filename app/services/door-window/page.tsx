"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	DoorOpen,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Wind,
	Lock,
	Maximize,
	AlertTriangle,
	MapPin,
	ShieldCheck,
	Phone,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DoorWindowPage() {
	const services = [
		{
			title: "Precision Door Alignment",
			desc: "Correcting rubbing, sticking, or latching issues caused by home settling or worn-out hinge sets.",
			icon: Maximize,
		},
		{
			title: "Security Hardware",
			desc: "Installation of high-security deadbolts, smart locks, and reinforced strike plates for total peace of mind.",
			icon: Lock,
		},
		{
			title: "Draft & Weather Sealing",
			desc: "High-performance sweeps and perimeter seals designed to withstand the Pacific Northwest's driving rain.",
			icon: Wind,
		},
		{
			title: "Sliding Door Restoration",
			desc: "Professional track cleaning and roller replacement to restore effortless, one-finger operation.",
			icon: Home,
		},
		{
			title: "Screen & Mesh Repair",
			desc: "Custom rescreening for window and door units to allow ventilation while keeping pests out.",
			icon: Shield,
		},
		{
			title: "Sill & Trim Restoration",
			desc: "Structural repair of exterior casing and sills to stop wood rot before it enters your wall framing.",
			icon: AlertTriangle,
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t3.ftcdn.net/jpg/17/23/25/44/240_F_1723254432_wPlLS36tIF1dChcencQBJmN7dN177aXG.jpg"
						alt="Professional door and window repair services in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/80 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Licensed Specialist
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Door & Window <br />
							<span className="text-[#FFB800]">Restoration</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6"
						>
							Stop the drafts and fix the stick. We restore security and energy
							efficiency to your Vancouver home through professional hardware
							adjustments and high-performance weather sealing.
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
								Get a Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Hardware & Lock Specialist
						</span>
					</div>
					<div className="flex items-center gap-3 text-white">
						<MapPin className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Serving All Clark County
						</span>
					</div>
				</div>
			</section>

			{/* VALUE PROP - REPAIR VS REPLACEMENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Don't Replace— <br />
								<span className="text-[#2D5A3D]">Let Us Restore It</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								In the Pacific Northwest, seasonal moisture and natural home
								settling lead to doors that stick and windows that leak heat.
								Norbilt provides professional restoration to correct these
								issues without the high cost of full replacements.
							</p>

							<div className="grid sm:grid-cols-2 gap-4 pt-4">
								{[
									"90% Cost Savings",
									"1-Day Turnaround",
									"Enhanced Security",
									"Energy Efficiency",
								].map((tag) => (
									<div key={tag} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-xs uppercase tracking-widest text-[#1F2E2B]">
											{tag}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-[8px] border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">
									Performance Checklist
								</h3>
								<div className="space-y-8">
									{[
										{
											t: "Mechanical Alignment",
											d: "Squaring frames and tightening hinges for smooth operation.",
										},
										{
											t: "Thermal Protection",
											d: "Replacing brittle seals with high-density weatherstripping.",
										},
										{
											t: "Structural Integrity",
											d: "Inspecting and repairing sills to prevent moisture intrusion.",
										},
									].map((item, i) => (
										<div
											key={i}
											className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6"
										>
											<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
												{item.t}
											</span>
											<p className="text-[#A7C4B5] text-sm font-medium">
												{item.d}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Capabilities"
						title="Complete Repair Solutions"
						description="Expert technical service for every opening in your home."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
						{services.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all border-b-4 border-transparent hover:border-[#FFB800] group"
							>
								<div className="w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1F2E2B] transition-colors">
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
								Fix Your Doors <br />{" "}
								<span className="text-[#FFB800]">Before Winter</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Stop fighting with sticking doors and losing heat. Most minor
								repairs can be quoted with a simple photo.
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

			{/* SERVICE AREA FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>BATTLE GROUND</span>
					<span>WASHOUGAL</span>
				</div>
			</section>
		</div>
	);
}
