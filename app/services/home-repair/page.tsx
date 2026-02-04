"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Clock,
	Hammer,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HomeRepairPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<Wrench className="w-4 h-4" />
							Residential Repair & Maintenance
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Professional Home Repair & Maintenance in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Reliable residential repairs completed with construction-grade
							standards. We help homeowners protect their property, safety, and
							long-term value throughout Clark County.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
								Home Repairs Done Correctly the First Time
							</h2>

							<p>
								When something breaks in your home, a temporary fix isn’t
								enough. Norbilt Homes provides{" "}
								<strong>
									professional home repair services in Vancouver, WA
								</strong>{" "}
								focused on durability, safety, and clean execution.
							</p>

							<p>
								From addressing everyday wear and tear to correcting issues
								caused by Pacific Northwest moisture and settling, we bring
								skilled craftsmanship and clear communication to every project —
								no matter the size.
							</p>
						</div>

						<div className="bg-[#E8E4DE] p-8 rounded-2xl border border-[#DCD7D0] shadow-sm">
							<h3 className="text-xl font-semibold text-[#2C3E3A] mb-4">
								Comprehensive Home Care
							</h3>

							<p className="text-sm text-[#2C3E3A]/70 mb-6">
								We go beyond basic handyman work by focusing on long-term
								performance and proper installation.
							</p>

							<div className="grid grid-cols-1 gap-3">
								{[
									"Structural integrity checks",
									"Weatherization & sealing",
									"Safety-related repairs",
									"Preventative maintenance planning",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-3 text-[#2C3E3A]"
									>
										<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
										<span className="font-medium">{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Capabilities"
						title="Residential Repair Services"
						description="Interior and exterior solutions tailored to Clark County homes."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
						{[
							{
								title: "Wall & Trim Repair",
								desc: "Drywall patching, crack repair, and restoration of damaged baseboards or moulding.",
								icon: Hammer,
							},
							{
								title: "Fixture & Hardware Updates",
								desc: "Lighting, ceiling fans, door hardware, and functional upgrades throughout the home.",
								icon: Shield,
							},
							{
								title: "Maintenance & Sealing",
								desc: "Caulking, weather-stripping, and minor exterior sealing to prevent moisture intrusion.",
								icon: Wrench,
							},
							{
								title: "Custom Home Solutions",
								desc: "TV mounting, shelving, furniture assembly, and tailored interior improvements.",
								icon: Home,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-xl border border-[#DCD7D0] hover:border-[#4A7C59] transition-colors"
							>
								<service.icon className="w-8 h-8 text-[#2D5A3D] mb-4" />
								<h3 className="text-lg font-semibold text-[#2C3E3A] mb-2">
									{service.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{service.desc}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Many home repair projects are completed alongside drywall repair,
						finish carpentry, or flooring services to ensure a fully finished
						result.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Professional credentials and coverage that protect your home and investment.",
							},
							{
								icon: Clock,
								title: "Reliable Scheduling",
								text: "Clear communication, realistic timelines, and dependable arrival windows.",
							},
							{
								icon: Home,
								title: "Respect for Your Home",
								text: "Careful protection of floors and furnishings with clean, organized work habits.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE] shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
									<item.icon className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{item.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Home Repair Services in Vancouver, WA
					</h2>

					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						We proudly serve homeowners throughout Vancouver and the surrounding
						Clark County communities, including Hazel Dell, Felida, Salmon
						Creek, and Camas.
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F8F6F3] mb-6"
					>
						Ready to Take Care of Your Home?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate and get professional repairs handled the
						right way.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-semibold"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
