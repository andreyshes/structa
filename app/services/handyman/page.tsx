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
							Handyman Services
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Professional Handyman Services in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80"
						>
							Skilled, reliable handyman services for homeowners who want work
							done correctly the first time. Serving Vancouver and nearby Clark
							County communities.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-3xl">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-6">
							A Dependable Handyman You Can Trust
						</h2>

						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed">
							<p>
								Structa Homes provides professional handyman services in
								Vancouver, WA for homeowners who need reliable help with
								repairs, installations, and ongoing home maintenance.
							</p>

							<p>
								Instead of juggling multiple contractors or living with an
								unfinished to-do list, you get one skilled professional who
								handles projects efficiently, cleanly, and with attention to
								detail.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES LIST */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Handle"
						title="Handyman Services We Offer"
						description="Everyday home tasks and repairs completed with care."
					/>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{[
							"General home repairs",
							"Fixture & hardware installation",
							"TV mounting & wall hangings",
							"Furniture assembly",
							"Caulking & sealing",
							"Minor drywall repairs",
							"Door & hardware adjustments",
							"Punch list completion",
						].map((item) => (
							<div key={item} className="flex items-center gap-3">
								<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
								<span className="text-[#2C3E3A]/80">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Why Structa Homes"
						title="More Than Just a Handyman"
						description="Professional standards for everyday home work."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Quality-Focused Work",
								text: "We take the same care with small jobs as we do larger projects.",
							},
							{
								icon: Clock,
								title: "Reliable & On Time",
								text: "Clear scheduling and dependable arrival times.",
							},
							{
								icon: Home,
								title: "Respect for Your Home",
								text: "Clean work areas, careful handling, and professional conduct.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE]"
							>
								<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
									<item.icon className="w-6 h-6 text-[#2D5A3D]" />
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
						Handyman Services Near You
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed">
						We provide handyman services throughout Vancouver, WA and nearby
						areas including Five Corners, Brush Prairie, Hazel Dell, and Salmon
						Creek. If you’re searching for a dependable handyman near you, we’re
						ready to help.
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
						Need a Handyman in Vancouver, WA?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Get a free estimate and let’s take care of your to-do list.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
