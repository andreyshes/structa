"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FiveCornersLocationPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO SECTION */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8 font-medium tracking-wide"
					>
						<MapPin className="w-4 h-4 text-[#4A7C59]" />
						Top-Rated Handyman & Home Repair in Five Corners, WA
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F8F6F3] mb-6 tracking-tight"
					>
						Five Corners Home Repair <br className="hidden md:block" /> &
						Improvement
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto leading-relaxed"
					>
						Your trusted local partner for quality home maintenance and expert
						craftsmanship in Five Corners and the greater Vancouver area.
					</motion.p>
				</div>
			</section>

			{/* INTRO / VALUE PROP */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 text-center space-y-10">
					<div className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
							Quality Craftsmanship for Five Corners Homeowners
						</h2>
						<p className="text-lg leading-relaxed text-[#2C3E3A]/80">
							Maintaining a home in the Pacific Northwest requires attention to
							detail and a proactive approach. At <strong>Norbilt Homes</strong>
							, we specialize in high-quality interior repairs and home
							improvements that protect your investment and enhance your living
							space.
						</p>
						<p className="text-lg leading-relaxed text-[#2C3E3A]/80">
							Whether you are looking to fix settling drywall, upgrade your
							finish carpentry, or refresh your kitchen and bath, our team
							delivers professional results with the reliability of a local
							Clark County neighbor.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-8 pt-6">
						{[
							"Licensed & Insured",
							"Local Vancouver Team",
							"Free Detailed Estimates",
						].map((item) => (
							<div
								key={item}
								className="flex items-center gap-2 text-[#2D5A3D] font-medium"
							>
								<CheckCircle2 className="w-5 h-5" />
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-white border-y border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-4">
							Expert Home Services We Offer
						</h2>
						<p className="text-[#2C3E3A]/70 max-w-2xl mx-auto">
							From minor repairs to significant interior updates, we provide a
							full suite of home improvement services tailored to the needs of
							Five Corners residents.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "Handyman & Home Repairs",
								desc: "Efficient solutions for your home maintenance to-do list.",
								href: "/locations/five-corners/handyman",
							},
							{
								name: "Drywall Repair & Texture",
								desc: "Seamless wall and ceiling repairs for a flawless finish.",
								href: "/locations/five-corners/drywall-repair",
							},
							{
								name: "Custom Finish Carpentry",
								desc: "Expert trim, crown molding, and decorative wood accents.",
								href: "/locations/five-corners/finish-carpentry",
							},
							{
								name: "Door & Window Solutions",
								desc: "Improve energy efficiency and security with expert repairs.",
								href: "/locations/five-corners/door-window",
							},
							{
								name: "Kitchen & Bath Updates",
								desc: "Modernizing your most-used spaces without the full remodel cost.",
								href: "/locations/five-corners/kitchen-bath",
							},
							{
								name: "Flooring Repair & Install",
								desc: "Durable flooring repairs that stand up to PNW life.",
								href: "/locations/five-corners/flooring",
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
								<p className="text-[#2C3E3A]/70 text-sm mb-4 leading-relaxed">
									{service.desc}
								</p>
								<span className="inline-flex items-center text-[#2D5A3D] text-sm font-semibold gap-1">
									Learn More{" "}
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-28 bg-[#2C3E3A] text-center relative overflow-hidden">
				{/* Subtle decorative background element */}
				<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
					<div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#4A7C59]" />
				</div>

				<div className="relative z-10 px-6">
					<h2 className="text-3xl md:text-5xl font-semibold text-[#F8F6F3] mb-6">
						Ready to start your Five Corners project?
					</h2>
					<p className="text-xl text-[#F8F6F3]/80 mb-12 max-w-2xl mx-auto">
						Contact Norbilt Homes today for a transparent, no-obligation
						estimate on your next home repair or improvement.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white text-lg font-semibold rounded-xl hover:bg-[#4A7C59] transition shadow-2xl hover:scale-105 transform duration-200"
					>
						Get Your Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>

					<p className="mt-8 text-[#F8F6F3]/50 text-sm">
						Proudly serving Five Corners, Orchards, and the Greater Vancouver
						area.
					</p>
				</div>
			</section>
		</div>
	);
}
