"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2, Star, Shield } from "lucide-react";

export default function SalmonCreekLocationPage() {
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
						Expert Home Repairs & Improvements in Salmon Creek, WA
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F8F6F3] mb-6 tracking-tight"
					>
						Salmon Creek Handyman <br className="hidden md:block" /> & Home
						Repair Services
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto leading-relaxed"
					>
						Reliable, high-quality home maintenance and interior carpentry
						tailored for Salmon Creek’s premier residences and neighborhoods.
					</motion.p>
				</div>
			</section>

			{/* LOCALIZED INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-5xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
								Protecting Your Salmon Creek Investment
							</h2>
							<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
								Salmon Creek is known for its beautiful homes and quiet
								neighborhoods. Maintaining that beauty requires a contractor who
								understands the value of{" "}
								<strong>precision craftsmanship</strong> and{" "}
								<strong>premium materials</strong>.
							</p>
							<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
								Whether you're located near <strong>WSU Vancouver</strong> or in
								the heart of the <strong>98686</strong> area, Norbilt Homes
								provides the professional interior repairs and updates your home
								deserves. From expert drywall texture matching to custom finish
								carpentry, we treat every home with the utmost respect.
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E4DE] space-y-4">
							<div className="flex items-center gap-3 text-[#2C3E3A]">
								<Star className="text-[#4A7C59] fill-[#4A7C59]" />
								<span className="font-bold">
									Salmon Creek’s Choice for Quality
								</span>
							</div>
							<ul className="space-y-4 pt-2">
								{[
									"Detailed project estimates",
									"Clean-site guarantee",
									"Expert interior specialists",
									"Fully Licensed, Bonded, & Insured",
								].map((point) => (
									<li
										key={point}
										className="flex items-start gap-3 text-sm text-[#2C3E3A]/70 font-medium"
									>
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0" />
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-white border-y border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] text-center mb-16">
						Our Specialty Services
					</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "Handyman & Maintenance",
								desc: "Solving complex home issues and routine maintenance for busy Salmon Creek families.",
								href: "/services/handyman",
							},
							{
								name: "Seamless Drywall Repair",
								desc: "Professional patching and ceiling repairs with perfect texture matching.",
								href: "/services/drywall-repair",
							},
							{
								name: "Custom Finish Carpentry",
								desc: "High-end crown molding, wainscoting, and decorative trim installations.",
								href: "/services/finish-carpentry",
							},
							{
								name: "Door & Window Service",
								desc: "Precision alignment and weatherproofing for security and energy efficiency.",
								href: "/services/door-window",
							},
							{
								name: "Modern Kitchen & Bath",
								desc: "Value-boosting updates including backsplash, vanities, and hardware.",
								href: "/services/kitchen-bath",
							},
							{
								name: "Flooring Excellence",
								desc: "Repairing high-traffic flooring and installing premium LVP and hardwoods.",
								href: "/services/flooring",
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
								<p className="text-[#2C3E3A]/70 text-sm mb-6 leading-relaxed">
									{service.desc}
								</p>
								<span className="inline-flex items-center text-[#2D5A3D] text-sm font-semibold gap-1">
									View Service Details{" "}
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-28 bg-[#2C3E3A] text-center relative overflow-hidden">
				<div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
					<Shield className="w-64 h-64 text-white" />
				</div>

				<div className="relative z-10 px-6">
					<h2 className="text-3xl md:text-5xl font-semibold text-[#F8F6F3] mb-6">
						Looking for a Reliable Salmon Creek Contractor?
					</h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
						From minor repairs to significant interior updates,{" "}
						<strong>Norbilt Homes</strong> delivers results that last. Schedule
						your free estimate today.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white text-lg font-semibold rounded-xl hover:bg-[#4A7C59] transition shadow-2xl hover:scale-105 transform duration-200"
					>
						Get a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>

					<div className="mt-12 text-[#F8F6F3]/40 text-sm font-medium uppercase tracking-widest">
						Serving 98686 • 98685 • Vancouver, WA
					</div>
				</div>
			</section>
		</div>
	);
}
