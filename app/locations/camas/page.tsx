"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2, Award, Hammer } from "lucide-react";

export default function CamasLocationPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO SECTION */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8 font-medium tracking-wide"
					>
						<MapPin className="w-4 h-4 text-[#4A7C59]" />
						Premium Home Repair & Finish Carpentry in Camas, WA
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F8F6F3] mb-6 tracking-tight"
					>
						Camas Handyman & Home Repair | Interior Experts
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto leading-relaxed"
					>
						Norbilt Homes delivers high-end interior solutions, custom trim, and
						meticulous home maintenance for homeowners across Camas and the
						Prune Hill area.
					</motion.p>
				</div>
			</section>

			{/* VALUE PROPOSITION SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
								Elevating the Standard of Camas Home Maintenance
							</h2>
							<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
								Camas is defined by its beautiful landscapes and high-quality
								residential architecture. Whether you own a historic home near{" "}
								<strong>Downtown Camas</strong> or a modern estate on{" "}
								<strong>Prune Hill</strong>, maintaining that standard requires
								a contractor who values precision over speed.
							</p>
							<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
								At <strong>Norbilt Homes</strong>, we specialize in the details
								that keep Camas homes pristine. From{" "}
								<strong>seamless drywall finishing</strong> to{" "}
								<strong>custom interior carpentry</strong>, our work is designed
								to blend perfectly with your home's original aesthetic while
								providing the durability needed for Pacific Northwest living.
							</p>

							<div className="flex flex-wrap gap-4 pt-4">
								{[
									"98607 Zip Code",
									"Licensed Contractor",
									"Custom Finishes",
								].map((tag) => (
									<span
										key={tag}
										className="px-4 py-2 bg-white border border-[#E8E4DE] rounded-lg text-sm font-bold text-[#2D5A3D]"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E4DE]">
								<Award className="w-10 h-10 text-[#4A7C59] mb-4" />
								<h3 className="font-bold text-[#2C3E3A] mb-2">Quality First</h3>
								<p className="text-sm text-[#2C3E3A]/70 text-pretty">
									We use premium materials and proven techniques for lasting
									results.
								</p>
							</div>
							<div className="bg-[#2D5A3D] p-8 rounded-2xl shadow-lg text-white">
								<Hammer className="w-10 h-10 text-[#F8F6F3] mb-4" />
								<h3 className="font-bold mb-2 text-[#F8F6F3]">Expert Hands</h3>
								<p className="text-sm text-[#F8F6F3]/80 text-pretty">
									Specialized in interior carpentry and professional drywall
									patching.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-white border-y border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-4">
							Camas Home Improvement Services
						</h2>
						<p className="text-[#2C3E3A]/70 max-w-2xl mx-auto">
							Our service offerings are tailored to meet the needs of discerning
							homeowners who demand quality and reliability.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "Professional Handyman",
								desc: "Expert solutions for high-end home maintenance and specialized repair tasks.",
								href: "/locations/camas/handyman",
							},
							{
								name: "Drywall & Texture Matching",
								desc: "Flawless repairs for water damage, cracks, or layout changes with perfect matching.",
								href: "/locations/camas/drywall-repair",
							},
							{
								name: "Finish Carpentry & Trim",
								desc: "Installation of custom crown molding, baseboards, and decorative wall treatments.",
								href: "/locations/camas/finish-carpentry",
							},
							{
								name: "Window & Door Repair",
								desc: "Ensuring energy efficiency and smooth operation for all interior and exterior doors.",
								href: "/locations/camas/door-window",
							},
							{
								name: "Kitchen & Bath Updates",
								desc: "Modernizing fixtures, hardware, and surfaces for a refreshed aesthetic.",
								href: "/locations/camas/kitchen-bath",
							},
							{
								name: "Flooring Repairs",
								desc: "Specialized repairs for hardwoods, luxury vinyl, and high-traffic flooring areas.",
								href: "/locations/camas/flooring",
							},
						].map((service) => (
							<Link
								key={service.name}
								href={service.href}
								className="group p-8 rounded-2xl border border-[#E8E4DE] bg-white hover:border-[#4A7C59] hover:shadow-xl transition-all duration-300"
							>
								<h3 className="text-xl font-bold text-[#2C3E3A] group-hover:text-[#2D5A3D] mb-3 transition">
									{service.name}
								</h3>
								<p className="text-[#2C3E3A]/70 text-sm mb-6 leading-relaxed italic">
									{service.desc}
								</p>
								<span className="inline-flex items-center text-[#2D5A3D] text-sm font-semibold gap-1">
									View Details{" "}
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-28 bg-[#2C3E3A] text-center relative overflow-hidden">
				<div className="relative z-10 px-6">
					<h2 className="text-3xl md:text-5xl font-semibold text-[#F8F6F3] mb-6">
						Ready to Start Your Camas Project?
					</h2>
					<p className="text-xl text-[#F8F6F3]/80 mb-12 max-w-2xl mx-auto">
						Experience the difference that professional craftsmanship makes.
						Contact Norbilt Homes for your free, no-obligation estimate today.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white text-lg font-semibold rounded-xl hover:bg-[#4A7C59] transition shadow-2xl hover:scale-105 transform duration-200"
					>
						Get a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>

					<div className="mt-12 flex justify-center flex-wrap gap-6 text-[#F8F6F3]/40 text-sm font-medium">
						<span>Downtown Camas</span>
						<span>Prune Hill</span>
						<span>Deer Creek</span>
						<span>Lacamas Lake</span>
						<span>Washougal</span>
					</div>
				</div>
			</section>
		</div>
	);
}
