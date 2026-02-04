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
	Settings,
	Paintbrush,
	Lightbulb,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HandymanPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<Wrench className="w-4 h-4" />
							Licensed, Bonded & Insured Handyman
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Professional Handyman & Home Repair Services in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed"
						>
							Dependable handyman services for homeowners who want quality work
							done right the first time. Proudly serving Vancouver, WA and
							surrounding Clark County communities.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
								Reliable Home Repairs and Maintenance You Can Count On
							</h2>

							<div className="space-y-6 text-[#2C3E3A]/80 leading-relaxed text-lg">
								<p>
									Finding a dependable handyman in Vancouver, WA shouldn’t feel
									like a gamble. Norbilt Homes bridges the gap between casual
									handyman work and large general contractors by providing
									professional, detail-focused service for everyday home needs.
								</p>

								<p>
									From repairing damaged drywall to upgrading fixtures and
									hardware, we focus on doing the work correctly and
									communicating clearly throughout the process. Our approach
									helps protect your home’s value while saving you time and
									frustration.
								</p>

								<p>
									Many homeowners reach out when small issues start piling up.
									Our goal is to take those tasks off your list and keep your
									home functioning the way it should.
								</p>
							</div>
						</div>

						<div className="bg-[#E8E4DE] p-8 rounded-2xl border border-[#DCD7D0]">
							<h3 className="text-xl font-semibold text-[#2C3E3A] mb-4">
								Peace of Mind for Vancouver Homeowners
							</h3>

							<ul className="space-y-4">
								<li className="flex gap-3 items-start text-[#2C3E3A]/70">
									<CheckCircle2 className="w-6 h-6 text-[#4A7C59] shrink-0" />
									<span>
										<strong>Thoughtful problem-solving:</strong> We look beyond
										surface fixes to address the underlying issue whenever
										possible.
									</span>
								</li>
								<li className="flex gap-3 items-start text-[#2C3E3A]/70">
									<CheckCircle2 className="w-6 h-6 text-[#4A7C59] shrink-0" />
									<span>
										<strong>Respect for your home:</strong> Clean work areas,
										careful handling, and professional conduct at every visit.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Services"
						title="Handyman Solutions for Everyday Home Needs"
						description="Practical repairs and improvements completed with care and attention to detail."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{[
							{
								icon: Hammer,
								title: "General Home Repairs",
								desc: "Drywall patching, minor structural fixes, and repairs that help keep your home in good working order.",
							},
							{
								icon: Lightbulb,
								title: "Fixtures & Hardware",
								desc: "Installation and replacement of light fixtures, ceiling fans, door hardware, and smart home accessories.",
							},
							{
								icon: Paintbrush,
								title: "Sealing & Touch-Ups",
								desc: "Caulking and weather-sealing to improve durability, comfort, and moisture protection.",
							},
							{
								icon: Settings,
								title: "Assembly & Mounting",
								desc: "TV mounting, furniture assembly, shelving installation, and secure wall hangings.",
							},
							{
								icon: Home,
								title: "Exterior Maintenance",
								desc: "Minor deck repairs, fence fixes, and exterior adjustments to maintain curb appeal.",
							},
							{
								icon: Shield,
								title: "Punch List Completion",
								desc: "Finishing small tasks after a move, renovation, or before listing a home for sale.",
							},
						].map((service) => (
							<div
								key={service.title}
								className="bg-[#F8F6F3] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-4" />
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{service.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed">
									{service.desc}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Many homeowners who contact us for handyman services also ask about
						drywall repair, trim and finish carpentry, and bathroom refresh
						projects.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-4">
							Why Homeowners Choose Norbilt Homes
						</h2>
						<p className="text-[#2C3E3A]/70">
							Professional standards applied to everyday home work.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Proper credentials and coverage to protect your home and give you peace of mind.",
							},
							{
								icon: Clock,
								title: "Reliable Scheduling",
								text: "Clear timelines, dependable arrival times, and straightforward communication.",
							},
							{
								icon: Home,
								title: "Construction Experience",
								text: "A solid understanding of residential systems for safer, longer-lasting repairs.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE] text-center"
							>
								<div className="w-14 h-14 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
									<item.icon className="w-7 h-7 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{item.title}
								</h3>
								<p className="text-[#2C3E3A]/70">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Serving Vancouver, WA and Surrounding Areas
					</h2>

					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg mb-6">
						Norbilt Homes provides handyman services throughout Vancouver, WA
						and nearby Clark County communities including Salmon Creek, Felida,
						Cascade Park, Camas, Ridgefield, and Brush Prairie.
					</p>

					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						From older homes to newer builds, we understand the maintenance
						challenges common in the Pacific Northwest and tailor our work
						accordingly.
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
						Ready to Take Care of Your Home To-Do List?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate and get reliable handyman service you can
						trust.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-medium"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
