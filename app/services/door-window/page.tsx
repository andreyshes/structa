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
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DoorWindowPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - HIGH VISIBILITY IMAGE */}
			<section className="relative min-h-[80vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t3.ftcdn.net/jpg/17/23/25/44/240_F_1723254432_wPlLS36tIF1dChcencQBJmN7dN177aXG.jpg"
						alt="Professional door and window repair services in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Overlay adjusted to 40% for better image visibility while protecting text legibility */}
					<div className="absolute inset-0 bg-[#1F2E2B]/40 lg:bg-linear-to-r lg:from-[#1F2E2B]/80 lg:via-[#1F2E2B]/40 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_30%)]">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-8 shadow-xl"
						>
							<DoorOpen className="w-4 h-4" />
							Vancouver's Repair Specialists
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Door & Window Repair <br />
							<span className="text-[#A7C4B5]">Expert Vancouver, WA</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white font-medium leading-relaxed max-w-2xl mb-10"
						>
							Stop the drafts and fix the stick. We restore security and energy
							efficiency to your home through professional hardware adjustments
							and weather sealing across Clark County.
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
								Get a Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* INTRO - REPAIR VS REPLACEMENT FOCUS */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Practical Repairs That <br />
								<span className="text-[#2D5A3D]">Save You Money</span>
							</h2>

							<p>
								In the Pacific Northwest, seasonal moisture and natural home
								settling lead to doors that stick and windows that leak heat.
								Norbilt provides **professional door and window repair** to
								correct these issues without the high cost of full replacements.
							</p>

							<p>
								We focus on **precise hardware adjustments, weatherstripping
								upgrades, and structural sills**. Our goal is to make your
								existing fixtures function like new—smoothly, securely, and
								efficiently.
							</p>
						</div>

						<div className="bg-[#F8F6F3] p-10 rounded-3xl border border-gray-100 shadow-sm">
							<h3 className="text-2xl font-bold text-[#1F2E2B] mb-6">
								Performance Evaluation
							</h3>
							<ul className="space-y-6">
								{[
									{
										title: "Energy Efficiency",
										desc: "Replacing failed weatherstripping and sealing to noticeably reduce drafts.",
									},
									{
										title: "Home Security",
										desc: "Reinforcing strike plates and lock hardware for peace of mind.",
									},
									{
										title: "Ease of Use",
										desc: "Correcting sagging hinges and misaligned frames for effortless operation.",
									},
								].map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="bg-[#2D5A3D] p-1 rounded-full shrink-0">
											<CheckCircle2 className="w-5 h-5 text-white" />
										</div>
										<div>
											<span className="block font-bold text-[#1F2E2B]">
												{item.title}
											</span>
											<span className="text-sm text-gray-600">{item.desc}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Capabilities"
						title="Comprehensive Repair Solutions"
						description="Focused on extending the life and performance of your home's exterior and interior openings."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{[
							{
								title: "Door Alignment",
								desc: "Correcting rubbing, sticking, or latching issues caused by home settling or worn hinges.",
								icon: Maximize,
							},
							{
								title: "Hardware Upgrades",
								desc: "Expert installation of deadbolts, smart locks, handlesets, and high-performance hinges.",
								icon: Lock,
							},
							{
								title: "Draft & Weather Sealing",
								desc: "Installing high-quality sweeps and seals to protect against Vancouver's wind and moisture.",
								icon: Wind,
							},
							{
								title: "Sliding Door Restoration",
								desc: "Cleaning tracks and replacing rollers to restore smooth, one-finger operation.",
								icon: Home,
							},
							{
								title: "Screen Services",
								desc: "Professional rescreening for window and door units to allow airflow without the pests.",
								icon: Shield,
							},
							{
								title: "Sill & Trim Repair",
								desc: "Addressing early wood rot in exterior casing and sills before structural damage occurs.",
								icon: AlertTriangle,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
							>
								<service.icon className="w-12 h-12 text-[#2D5A3D] mb-6 group-hover:scale-110 transition-transform" />
								<h3 className="text-xl font-bold text-[#1F2E2B] mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed text-sm">
									{service.desc}
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
						<MapPin className="w-4 h-4" /> Serving Clark County
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8">
						Vancouver's Trusted Door & Window Pros
					</h2>
					<p className="text-gray-600 leading-relaxed text-lg mb-10">
						From the historic homes in **Hough and Arnada** to new builds in
						**Ridgefield**, we understand how local weather impacts your home's
						openings. We proudly serve Vancouver, Camas, Washougal, and Battle
						Ground, and surronding areas.
					</p>
					<div className="flex flex-wrap justify-center gap-6 font-bold text-[#1F2E2B]">
						{["98660", "98661", "98683", "98604", "98607"].map((zip) => (
							<span
								key={zip}
								className="px-4 py-2 bg-[#F1F5F2] rounded-lg text-sm"
							>
								{zip}
							</span>
						))}
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
						Ready to Fix Your Doors or Windows?
					</motion.h2>

					<p className="text-[#A7C4B5] text-xl mb-12 max-w-2xl mx-auto">
						Stop struggling with sticking doors. Request a free estimate
						today—most minor repairs can be quoted with a simple photo.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white font-bold rounded-2xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
					>
						Request My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
