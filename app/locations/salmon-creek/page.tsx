"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function SalmonCreekLocationPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8"
					>
						<MapPin className="w-4 h-4" />
						Salmon Creek, WA
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						Home Services in Salmon Creek, WA
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						Quality home repair and improvement services for homeowners in
						Salmon Creek — delivered with care, precision, and dependable
						results.
					</motion.p>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-5xl mx-auto px-6 text-center space-y-8 text-[#2C3E3A]/80">
					<p className="text-lg leading-relaxed">
						Salmon Creek homes benefit from consistent maintenance, thoughtful
						repairs, and skilled workmanship to remain comfortable and
						well-functioning.
					</p>

					<p className="text-lg leading-relaxed">
						Whether you need small repairs, interior upgrades, or ongoing home
						maintenance, Norbilt Homes provides dependable service tailored to
						your home.
					</p>

					<p className="text-lg leading-relaxed">
						We proudly serve Salmon Creek as part of our greater Vancouver
						service area.
					</p>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-12">
						Home Services Available in Salmon Creek
					</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ name: "Handyman & Home Repairs", href: "/services/handyman" },
							{ name: "Drywall Repair", href: "/services/drywall-repair" },
							{ name: "Finish Carpentry", href: "/services/finish-carpentry" },
							{ name: "Door & Window Repair", href: "/services/door-window" },
							{
								name: "Kitchen & Bathroom Updates",
								href: "/services/kitchen-bath",
							},
							{ name: "Flooring Repairs", href: "/services/flooring" },
						].map((service) => (
							<Link
								key={service.name}
								href={service.href}
								className="group rounded-xl border border-[#E8E4DE] bg-white p-6 text-left hover:shadow-md transition"
							>
								<span className="text-lg font-medium text-[#2C3E3A] group-hover:text-[#2D5A3D] transition">
									{service.name}
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-28 bg-[#2C3E3A] text-center">
				<h2 className="text-3xl md:text-4xl font-semibold text-[#F8F6F3] mb-6">
					Looking for Home Services in Salmon Creek?
				</h2>

				<p className="text-xl text-[#F8F6F3]/70 mb-12 max-w-2xl mx-auto">
					Request a free estimate and let’s talk about your project.
				</p>

				<Link
					href="/contact"
					className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-lg"
				>
					Request a Free Estimate
					<ArrowRight className="w-5 h-5" />
				</Link>
			</section>
		</div>
	);
}
