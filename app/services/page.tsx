"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	DoorOpen,
	Lightbulb,
	TreeDeciduous,
	Layers,
	Home,
	Ruler,
	ClipboardCheck,
	ArrowRight,
	CheckCircle2,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function ServicesPage() {
	const serviceCategories = [
		{
			icon: Wrench,
			title: "Handyman & Home Repairs",
			description:
				"Reliable repairs for everything around your home. We tackle the to-do list so you don't have to.",
			items: [
				"General home repairs",
				"Plumbing fixture repairs",
				"Minor electrical fixes",
				"Appliance installation",
				"Furniture assembly",
				"Caulking & weatherproofing",
			],
		},
		{
			icon: Layers,
			title: "Drywall & Wall Repairs",
			description:
				"From small holes to larger patches, we restore your walls to like-new condition.",
			items: [
				"Hole patching & repair",
				"Water damage repair",
				"Texture matching",
				"Crack repair",
				"Drywall installation",
				"Finishing & sanding",
			],
		},
		{
			icon: Hammer,
			title: "Trim & Finish Carpentry",
			description:
				"The details that make a house feel like home. Quality trim work and custom details.",
			items: [
				"Baseboards & crown molding",
				"Window & door casing",
				"Wainscoting installation",
				"Built-in shelving",
				"Mantel installation",
				"Custom millwork",
			],
		},
		{
			icon: DoorOpen,
			title: "Door & Window Services",
			description:
				"Keep your home secure and efficient with proper door and window maintenance.",
			items: [
				"Door installation & repair",
				"Hardware replacement",
				"Weatherstripping",
				"Window repair",
				"Screen replacement",
				"Lock installation",
			],
		},
		{
			icon: Paintbrush,
			title: "Kitchen & Bath Updates",
			description:
				"Refresh your kitchen or bathroom without a full renovation. Smart updates that make an impact.",
			items: [
				"Cabinet hardware updates",
				"Faucet & fixture replacement",
				"Backsplash installation",
				"Vanity installation",
				"Toilet replacement",
				"Accessory mounting",
			],
		},
		{
			icon: Lightbulb,
			title: "Fixture Installation",
			description:
				"Professional installation of lights, fans, and hardware throughout your home.",
			items: [
				"Light fixture installation",
				"Ceiling fan installation",
				"Dimmer switches",
				"Bathroom exhaust fans",
				"Towel bars & accessories",
				"TV mounting",
			],
		},
		{
			icon: Home,
			title: "Flooring Services",
			description:
				"Repairs and small installations to keep your floors looking their best.",
			items: [
				"Hardwood repair",
				"Tile repair & replacement",
				"Laminate installation",
				"Threshold installation",
				"Squeaky floor fixes",
				"Baseboard transitions",
			],
		},
		{
			icon: ClipboardCheck,
			title: "Punch Lists & Property Care",
			description:
				"Pre-sale prep, move-in ready services, or ongoing maintenance — we handle it all.",
			items: [
				"Pre-listing repairs",
				"Move-in punch lists",
				"Seasonal maintenance",
				"Property inspections",
				"Rental turnovers",
				"Ongoing care plans",
			],
		},
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F8F6F3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
					>
						<Ruler className="w-4 h-4" />
						What We Do
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						Our Services
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						From essential repairs to thoughtful improvements, we bring skilled
						craftsmanship to every project. Proudly serving Greater Vancouver,
						WA and surrounding areas.
					</motion.p>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-8">
					{serviceCategories.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, delay: index * 0.05 }}
							className="group bg-white rounded-2xl p-8 lg:p-10 border border-[#E8E4DE] hover:shadow-xl hover:shadow-[#2D5A3D]/5 transition-all"
						>
							<div className="grid lg:grid-cols-3 gap-8">
								<div>
									<div className="w-14 h-14 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2D5A3D] transition">
										<service.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#F8F6F3] transition" />
									</div>
									<h3 className="text-2xl font-semibold text-[#2C3E3A] mb-3">
										{service.title}
									</h3>
									<p className="text-[#2C3E3A]/70">{service.description}</p>
								</div>

								<div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
									{service.items.map((item) => (
										<div key={item} className="flex items-center gap-3">
											<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
											<span className="text-[#2C3E3A]/80">{item}</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* PROCESS */}
			<section className="py-24 lg:py-32 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Process"
						title="How We Work"
						description="Simple, transparent, and stress-free. Here's what to expect when you work with us."
					/>

					<div className="grid md:grid-cols-4 gap-8">
						{[
							{
								step: "01",
								title: "Consultation",
								description:
									"We discuss your project, answer questions, and provide a clear, honest estimate.",
							},
							{
								step: "02",
								title: "Scheduling",
								description:
									"Pick a time that works for you. We show up on time, every time.",
							},
							{
								step: "03",
								title: "Quality Work",
								description:
									"Our skilled team completes your project with attention to every detail.",
							},
							{
								step: "04",
								title: "Final Walkthrough",
								description:
									"We review the work together and ensure your complete satisfaction.",
							},
						].map((item, index) => (
							<motion.div
								key={item.step}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="relative"
							>
								{index < 3 && (
									<div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#2D5A3D]/20 -translate-x-1/2" />
								)}
								<div className="bg-[#F8F6F3] rounded-2xl p-8 h-full">
									<span className="text-4xl font-bold text-[#2D5A3D]/20">
										{item.step}
									</span>
									<h3 className="text-xl font-semibold text-[#2C3E3A] mt-4 mb-3">
										{item.title}
									</h3>
									<p className="text-[#2C3E3A]/70">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C3E3A] mb-6"
					>
						Ready to Get Started?
					</motion.h2>

					<p className="text-xl text-[#2C3E3A]/70 mb-10">
						Tell us about your project and let’s talk. Free estimates, no
						pressure.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl"
					>
						Request a Quote
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
