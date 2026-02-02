"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Lightbulb,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Clock,
	Zap,
	Fan,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function LightingFixturesPage() {
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
							<Lightbulb className="w-4 h-4" />
							Lighting & Fixture Installation
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Lighting & Fixture Installation in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Safe, clean installation of lighting, ceiling fans, and home
							fixtures. Upgrade your space with professional workmanship you can
							trust.
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
								Brighten Your Home with Professional Installation
							</h2>

							<p>
								Updating lighting and fixtures is one of the most effective ways
								to improve the look and functionality of your home. Structa
								Homes provides{" "}
								<strong>
									professional lighting and fixture installation in Vancouver,
									WA
								</strong>{" "}
								for homeowners who want clean results and safe execution.
							</p>

							<p>
								Whether you’re replacing outdated fixtures, installing ceiling
								fans, or upgrading bathroom ventilation, we ensure every install
								is secure, level, and code-conscious — without the mess or
								guesswork.
							</p>
						</div>

						<div className="bg-[#E8E4DE] p-8 rounded-2xl border border-[#DCD7D0]">
							<h3 className="text-xl font-semibold text-[#2C3E3A] mb-4">
								Common Requests
							</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Light fixture replacement",
									"Ceiling fan installation",
									"Bathroom exhaust fans",
									"Dimmer switch upgrades",
									"TV mounting",
									"Accessory mounting",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-2 text-[#2C3E3A]/80"
									>
										<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
										<span className="text-sm font-medium">{item}</span>
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
						eyebrow="Our Services"
						title="Lighting & Fixture Solutions"
						description="Focused installations that enhance comfort, safety, and style."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
						{[
							{
								icon: Lightbulb,
								title: "Light Fixtures",
								text: "Replacing ceiling lights, pendants, chandeliers, and wall sconces with clean, secure mounting.",
							},
							{
								icon: Fan,
								title: "Ceiling Fans",
								text: "Proper fan installation, balancing, and secure mounting to reduce wobble and noise.",
							},
							{
								icon: Zap,
								title: "Switches & Dimmers",
								text: "Installing dimmer switches and upgrading standard switches for better lighting control.",
							},
							{
								icon: Home,
								title: "Accessory Mounting",
								text: "Mounting towel bars, mirrors, TVs, and other fixtures securely into studs or anchors.",
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
									{service.text}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Lighting and fixture installations are often paired with kitchen and
						bathroom refreshes, drywall repair, or general home maintenance
						services.
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
								text: "Professional installation completed with proper coverage and peace of mind.",
							},
							{
								icon: Clock,
								title: "Efficient Scheduling",
								text: "Most installations are completed quickly with minimal disruption to your home.",
							},
							{
								icon: Home,
								title: "Clean, Careful Work",
								text: "We protect surfaces, handle fixtures carefully, and leave your space clean.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE] shadow-sm"
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
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Lighting Installation in Vancouver, WA
					</h2>

					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						We serve homeowners throughout Vancouver and surrounding Clark
						County communities, including Camas, Hazel Dell, Salmon Creek, and
						Five Corners.
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
						Ready to Upgrade Your Lighting?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate and get your fixtures installed safely and
						professionally.
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
