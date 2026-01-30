"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function LocationsIndexPage() {
	const locations = [
		{
			name: "Vancouver, WA",
			href: "/locations/vancouver",
			description:
				"Our primary service area, providing professional home repair and handyman services throughout Vancouver.",
			primary: true,
		},
		{
			name: "Five Corners, WA",
			href: "/locations/five-corners",
			description:
				"Reliable home repair and improvement services for homeowners in Five Corners.",
		},
		{
			name: "Brush Prairie, WA",
			href: "/locations/brush-prairie",
			description:
				"Quality workmanship and dependable home services for Brush Prairie residents.",
		},
		{
			name: "Hazel Dell, WA",
			href: "/locations/hazel-dell",
			description:
				"Trusted home repair and maintenance services for Hazel Dell and nearby neighborhoods.",
		},
		{
			name: "Salmon Creek, WA",
			href: "/locations/salmon-creek",
			description:
				"Professional home services for Salmon Creek homeowners and surrounding areas.",
		},
		{
			name: "Camas, WA",
			href: "/locations/camas",
			description:
				"Detail-focused home repair and improvement services for homes in Camas.",
		},
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8"
					>
						<MapPin className="w-4 h-4" />
						Service Areas
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						Home Services Across Vancouver & Clark County, WA
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						Structa Homes provides professional home repair, handyman, and
						improvement services throughout Vancouver, Washington and
						surrounding Clark County communities.
					</motion.p>
				</div>
			</section>

			{/* LOCATIONS GRID */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{locations.map((location, index) => (
							<motion.div
								key={location.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.05 }}
							>
								<Link
									href={location.href}
									className={`group block h-full rounded-2xl p-8 border transition-all ${
										location.primary
											? "bg-[#F8F6F3] border-[#2D5A3D]/30 shadow-md"
											: "bg-white border-[#E8E4DE] hover:shadow-xl hover:shadow-[#2D5A3D]/5"
									}`}
								>
									<h2 className="text-2xl font-semibold text-[#2C3E3A] mb-3 group-hover:text-[#2D5A3D] transition">
										{location.name}
									</h2>
									<p className="text-[#2C3E3A]/70 mb-6">
										{location.description}
									</p>
									<span className="inline-flex items-center gap-2 text-[#2D5A3D] font-medium">
										View Home Services
										<ArrowRight className="w-4 h-4" />
									</span>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-28 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#F8F6F3] mb-6">
						Not Sure If You’re in Our Service Area?
					</h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-12">
						Contact us and we’ll confirm availability for your location.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-lg"
					>
						Contact Us
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
