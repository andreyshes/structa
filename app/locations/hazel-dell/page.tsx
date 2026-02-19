"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	MapPin,
	ArrowRight,
	CheckCircle2,
	ShieldCheck,
	Clock,
} from "lucide-react";

export default function HazelDellLocationPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO SECTION */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8 font-medium"
					>
						<MapPin className="w-4 h-4 text-[#4A7C59]" />
						Local Handyman & Contractor Services in Hazel Dell, WA
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F8F6F3] mb-6 tracking-tight"
					>
						Hazel Dell Home Repair <br className="hidden md:block" /> & Interior
						Services
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl leading-relaxed"
					>
						Providing Hazel Dell North and South homeowners with expert handyman
						repairs, professional drywall finishing, and custom carpentry for
						over a decade.
					</motion.p>
				</div>
			</section>

			{/* VALUE PROPOSITION SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2 space-y-6">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
							Your Trusted Home Maintenance Partner in Hazel Dell
						</h2>
						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							Hazel Dell is home to a beautiful mix of established mid-century
							houses and modern developments. Whether you're living near{" "}
							<strong>Highway 99</strong> or tucked away in the{" "}
							<strong>Salmon Creek</strong> border, your home requires
							specialized care to maintain its value.
						</p>
						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							At <strong>Norbilt Homes</strong>, we bridge the gap between small
							handyman tasks and major renovations. We focus on the details that
							matter: seamless <strong>drywall patching</strong>, precision{" "}
							<strong>trim work</strong>, and functional{" "}
							<strong>kitchen and bath updates</strong> that make your house
							feel like home again.
						</p>

						<div className="grid sm:grid-cols-2 gap-4 pt-4">
							{[
								"Licensed, Bonded, & Insured",
								"Locally Owned near Vancouver, WA",
								"Dust-Controlled Work Environments",
								"Transparent, No-Surprise Pricing",
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

					<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E8E4DE] flex flex-col justify-center">
						<h3 className="text-2xl font-bold text-[#2C3E3A] mb-6 text-center">
							Why Choose Norbilt?
						</h3>
						<div className="space-y-6">
							<div className="flex gap-4">
								<ShieldCheck className="w-10 h-10 text-[#4A7C59] shrink-0" />
								<div>
									<p className="font-bold text-[#2C3E3A]">Total Reliability</p>
									<p className="text-sm text-[#2C3E3A]/70">
										We show up on time and finish on schedule.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<Clock className="w-10 h-10 text-[#4A7C59] shrink-0" />
								<div>
									<p className="font-bold text-[#2C3E3A]">
										Expert Craftsmanship
									</p>
									<p className="text-sm text-[#2C3E3A]/70">
										Quality that matches the original home design.
									</p>
								</div>
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
							Professional Services for Hazel Dell Homes
						</h2>
						<p className="text-[#2C3E3A]/70 max-w-2xl mx-auto">
							We specialize in interior repairs and improvements that protect
							your investment and improve your quality of life.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								name: "Expert Handyman Repairs",
								desc: "Solving the 'honey-do' list with professional tools and experience.",
								href: "/services/handyman",
							},
							{
								name: "Drywall & Texture",
								desc: "From ceiling leaks to wall holes, we provide seamless repair and matching.",
								href: "/services/drywall-repair",
							},
							{
								name: "Interior Carpentry",
								desc: "Enhancing rooms with new baseboards, casing, and custom shelving.",
								href: "/services/finish-carpentry",
							},
							{
								name: "Door & Window Service",
								desc: "Fixing alignment, replacing hardware, and sealing drafts.",
								href: "/services/door-window",
							},
							{
								name: "Kitchen & Bath Updates",
								desc: "Refreshing your space with new fixtures, backsplashes, and vanity installs.",
								href: "/services/kitchen-bath",
							},
							{
								name: "Flooring & Trim",
								desc: "Repairing damaged planks and installing beautiful transitions.",
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
				<div className="relative z-10 px-6">
					<h2 className="text-3xl md:text-5xl font-semibold text-[#F8F6F3] mb-6">
						Ready to upgrade your Hazel Dell home?
					</h2>
					<p className="text-xl text-[#F8F6F3]/80 mb-12 max-w-2xl mx-auto">
						Get a professional, free estimate for your home repairs today. We're
						proud to serve the 98665 and 98686 communities.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white text-lg font-semibold rounded-xl hover:bg-[#4A7C59] transition shadow-2xl hover:scale-105 transform duration-200"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>

					<div className="mt-12 flex justify-center gap-8 text-[#F8F6F3]/40 text-sm">
						<span>Hazel Dell North</span>
						<span>Hazel Dell South</span>
						<span>Salmon Creek</span>
						<span>Minnehaha</span>
					</div>
				</div>
			</section>
		</div>
	);
}
