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
	Star,
	Maximize,
	PenTool,
	Layers,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FinishCarpentryPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO SECTION */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<Hammer className="w-4 h-4" />
							Custom Trim & Millwork
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Finish Carpentry & Custom Trim in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Transform your interior with precision-crafted millwork. We
							specialize in elevating Clark County homes through expert crown
							moulding, baseboards, and custom architectural details.
						</motion.p>
					</div>
				</div>
			</section>

			{/* CRAFTSMANSHIP INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
								Interior Details That Define Your Home
							</h2>
							<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
								<p>
									Finish carpentry is where construction meets art. At Norbilt
									Homes, we believe the difference between a "house" and a
									"home" is found in the details. We provide{" "}
									<strong>
										professional finish carpentry in Vancouver, WA
									</strong>
									for homeowners who demand tight miters, seamless joints, and
									perfect reveals.
								</p>
								<p>
									From historic home restorations in downtown Vancouver to
									modern upgrades in Camas, we bring an eye for design and a
									steady hand to every piece of wood we touch. We don't just
									"install trim"—we increase your property's value and
									character.
								</p>
							</div>
						</div>
						<div className="bg-[#E8E4DE] p-8 rounded-2xl border border-[#DCD7D0] relative overflow-hidden">
							<Star className="absolute -right-4 -top-4 w-24 h-24 text-[#4A7C59]/10" />
							<h3 className="text-xl font-bold text-[#2C3E3A] mb-4">
								The Norbilt Standard
							</h3>
							<ul className="space-y-4">
								<li className="flex gap-3 items-start text-[#2C3E3A]/70">
									<CheckCircle2 className="w-6 h-6 text-[#4A7C59] shrink-0" />
									<span>
										<strong>Mitered Perfection:</strong> No gaps, no excessive
										wood filler—just clean, professional joints.
									</span>
								</li>
								<li className="flex gap-3 items-start text-[#2C3E3A]/70">
									<CheckCircle2 className="w-6 h-6 text-[#4A7C59] shrink-0" />
									<span>
										<strong>Material Expertise:</strong> Whether it's MDF, solid
										oak, or hemlock, we know how to handle every grain.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* DETAILED SERVICES GRID */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Specialized Services"
						title="Professional Millwork Installation"
						description="Our finish carpentry services are designed to add elegance and sophistication to every room."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{[
							{
								title: "Crown & Baseboards",
								desc: "Upgrade standard builder-grade trim to bold, elegant baseboards and crown moulding that anchors your rooms.",
								icon: Maximize,
							},
							{
								title: "Window & Door Casing",
								desc: "Framing your openings with precision. We handle everything from standard casings to elaborate pediments.",
								icon: PenTool,
							},
							{
								title: "Wainscoting & Paneling",
								desc: "Add depth with board and batten, picture frame moulding, or traditional beadboard installations.",
								icon: Layers,
							},
							{
								title: "Custom Built-ins",
								desc: "Functional beauty including fireplace mantels, custom closet shelving, and integrated bookcases.",
								icon: Home,
							},
							{
								title: "Interior Door Upgrades",
								desc: "Replacing dated hollow-core doors with solid, well-fitted interior doors that improve sound dampening.",
								icon: Shield,
							},
							{
								title: "Trim Repair & Matching",
								desc: "Expertly matching existing profiles in older homes to ensure repairs are historically accurate and seamless.",
								icon: Ruler,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-xl shadow-sm border border-transparent hover:border-[#4A7C59] transition-all group"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{service.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed text-sm">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* LOCALIZED SEO SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-[#2C3E3A]">
							Your Local Finish Carpentry Experts
						</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<p className="text-[#2C3E3A]/70 leading-relaxed">
							We understand the architectural styles prevalent in{" "}
							<strong>Clark County</strong>. From the craftsmen-style homes in
							<strong>Washougal</strong> to the contemporary builds in{" "}
							<strong>Ridgefield</strong>, our carpentry work is tailored to
							match the aesthetic of your specific neighborhood.
						</p>
						<ul className="grid grid-cols-2 gap-2 text-[#4A7C59] font-medium">
							<li>• Vancouver</li>
							<li>• Camas</li>
							<li>• Battle Ground</li>
							<li>• Salmon Creek</li>
							<li>• Hazel Dell</li>
							<li>• Orchard</li>
						</ul>
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-24 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F8F6F3] mb-6"
					>
						Ready to Elevate Your Interior?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Contact Norbilt Homes today for a professional carpentry
						consultation in Vancouver, WA.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-semibold"
					>
						Get Your Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
