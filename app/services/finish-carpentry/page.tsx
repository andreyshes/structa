"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Hammer,
	CheckCircle2,
	ArrowRight,
	Shield,
	Ruler,
	Home,
	Star,
	Maximize,
	PenTool,
	Layers,
	MapPin,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - HIGH VISIBILITY CARPENTRY IMAGE */}
			<section className="relative min-h-[85vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						// High-quality carpentry image focusing on clean trim/interior details
						src="https://t3.ftcdn.net/jpg/18/96/12/42/240_F_1896124211_mGn9bJAb0Yq8aTys7VNbElJ63ouM0cjk.jpg"
						alt="Custom finish carpentry and crown moulding installation in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Lighter overlay to let the woodworking shine through */}
					<div className="absolute inset-0 bg-[#1F2E2B]/50 lg:bg-linear-to-r lg:from-[#1F2E2B]/80 lg:via-[#1F2E2B]/40 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl [text-shadow:0_2px_10px_rgb(0_0_0/30%)]">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D] rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-8 shadow-xl"
						>
							<Hammer className="w-4 h-4" />
							Custom Trim & Millwork Excellence
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Finish Carpentry & <br />
							<span className="text-[#A7C4B5]">Custom Trim Vancouver</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white font-medium leading-relaxed max-w-2xl mb-10"
						>
							Elevate your home’s character with precision-crafted millwork. We
							specialize in architectural details that transform standard rooms
							into custom-designed spaces throughout Clark County.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href=""
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#3a6d4b] transition-all shadow-2xl hover:scale-105"
							>
								Request a Carpentry Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CRAFTSMANSHIP INTRO */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Interior Details That <br />
								<span className="text-[#2D5A3D]">Define Your Home</span>
							</h2>
							<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
								<p>
									Finish carpentry is where construction meets art. At Norbilt,
									we believe the difference between a "house" and a "home" is
									found in the tight miters, seamless joints, and perfect
									reveals of your trim work.
								</p>
								<p>
									From historic home restorations in **Downtown Vancouver** to
									modern custom builds in **Camas**, we bring a
									master-carpenter's eye to every architectural detail. We don't
									just "install trim"—we increase your property's value through
									skilled craftsmanship.
								</p>
							</div>
						</div>

						<div className="bg-[#F8F6F3] p-10 rounded-3xl border border-gray-100 relative overflow-hidden shadow-sm">
							<Star className="absolute -right-4 -top-4 w-24 h-24 text-[#2D5A3D]/10" />
							<h3 className="text-2xl font-bold text-[#1F2E2B] mb-6">
								The Norbilt Standard
							</h3>
							<ul className="space-y-6">
								<li className="flex gap-4 items-start">
									<div className="bg-[#2D5A3D] p-1 rounded-full shrink-0">
										<CheckCircle2 className="w-5 h-5 text-white" />
									</div>
									<span className="text-gray-700">
										<strong className="text-[#1F2E2B]">
											Precision Joinery:
										</strong>{" "}
										No gaps or excessive wood filler—just clean, professional
										miters and cope-and-drag joints.
									</span>
								</li>
								<li className="flex gap-4 items-start">
									<div className="bg-[#2D5A3D] p-1 rounded-full shrink-0">
										<CheckCircle2 className="w-5 h-5 text-white" />
									</div>
									<span className="text-gray-700">
										<strong className="text-[#1F2E2B]">
											Material Versatility:
										</strong>{" "}
										Expert installation of MDF, solid oak, hemlock, and
										paint-grade or stain-grade millwork.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Specializations"
						title="Custom Millwork Services"
						description="Our finish carpentry services are designed to add elegance and structural sophistication to your home's interior."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{[
							{
								title: "Crown & High-Profile Base",
								desc: "Upgrade standard builder-grade trim to bold, elegant baseboards and crown moulding that defines your rooms.",
								icon: Maximize,
							},
							{
								title: "Window & Door Casing",
								desc: "Framing openings with precision. We handle everything from standard casings to elaborate pediments and stools.",
								icon: PenTool,
							},
							{
								title: "Wainscoting & Accent Walls",
								desc: "Add depth with custom board and batten, picture frame moulding, or traditional beadboard installations.",
								icon: Layers,
							},
							{
								title: "Mantels & Fireplace Surrounds",
								desc: "Create a stunning focal point with a custom-built mantel tailored to your home's unique style.",
								icon: Home,
							},
							{
								title: "Interior Door Upgrades",
								desc: "Replacing hollow-core doors with solid-core options and new hardware for better sound dampening and feel.",
								icon: Shield,
							},
							{
								title: "Profile Matching",
								desc: "Expertly matching existing trim profiles in older homes to ensure historically accurate and seamless repairs.",
								icon: Ruler,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-2xl shadow-sm border border-transparent hover:border-[#2D5A3D] transition-all group hover:shadow-xl"
							>
								<service.icon className="w-12 h-12 text-[#2D5A3D] mb-6 group-hover:scale-110 transition-transform" />
								<h3 className="text-xl font-bold text-[#1F2E2B] mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{service.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* LOCAL AREA STRIP */}
			<section className="py-24 bg-white">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<div className="inline-flex items-center gap-2 text-[#2D5A3D] font-bold uppercase tracking-widest text-sm mb-6">
						<MapPin className="w-4 h-4" /> Locally Owned & Operated
					</div>
					<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8">
						Serving All of Clark County, WA
					</h2>
					<p className="text-gray-600 leading-relaxed text-lg mb-10">
						From the historic **Craftsman** styles of Washougal to the
						contemporary **Modern** builds in Ridgefield and Felida, our
						carpentry work is tailored to match the unique aesthetic of your
						neighborhood.
					</p>
					<div className="flex flex-wrap justify-center gap-6 font-bold text-[#1F2E2B]">
						{[
							"Vancouver",
							"Camas",
							"Ridgefield",
							"Battle Ground",
							"Washougal",
							"Salmon Creek",
						].map((city) => (
							<span
								key={city}
								className="px-4 py-2 bg-[#F1F5F2] rounded-lg text-sm"
							>
								{city}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-24 bg-[#1F2E2B] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
					>
						Ready to Elevate Your Interior?
					</motion.h2>

					<p className="text-[#A7C4B5] text-xl mb-12 max-w-2xl mx-auto">
						Contact Norbilt today for a professional carpentry consultation.
						Let's give your home the finish it deserves.
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
