"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	Home,
	Lightbulb,
	TreeDeciduous,
	Shield,
	Heart,
	Sparkles,
	ArrowRight,
} from "lucide-react";

import ServiceCard from "@/app/components/ServiceCard";
import TestimonialCard from "@/app/components/TestimonialCard";
import SectionHeader from "@/app/components/SectionHeader";

export default function HomePage() {
	const services = [
		{
			icon: Wrench,
			title: "Home Repair Services",
			description:
				"Professional home repairs in Vancouver, WA including drywall, trim fixes, hardware replacement, and general maintenance.",
		},
		{
			icon: Hammer,
			title: "Finish Carpentry & Trim Work",
			description:
				"Baseboards, crown molding, door casing, and detailed woodwork installed with precision and care.",
		},
		{
			icon: Paintbrush,
			title: "Bathroom & Kitchen Refreshes",
			description:
				"Thoughtful bathroom and kitchen upgrades without the disruption of a full remodel.",
		},
		{
			icon: Home,
			title: "Door & Window Repair",
			description:
				"Door and window repairs, adjustments, and installations to improve comfort, security, and efficiency.",
		},
		{
			icon: Lightbulb,
			title: "Light & Fixture Installation",
			description:
				"Lighting, ceiling fans, hardware, and fixtures installed cleanly and correctly.",
		},
		{
			icon: TreeDeciduous,
			title: "Deck & Exterior Repairs",
			description:
				"Deck repairs and exterior maintenance designed for the Pacific Northwest climate.",
		},
	];

	const testimonials = [
		{
			name: "Daniel R.",
			location: "Vancouver, WA",
			rating: 5,
			text: "Structa Homes handled several repairs and finish details in our Vancouver home. Everything was done with care and professionalism.",
		},
		{
			name: "Melissa K.",
			location: "Brush Prairie, WA",
			rating: 5,
			text: "Great communication and excellent craftsmanship. The trim work turned out better than we expected.",
		},
		{
			name: "Aaron L.",
			location: "Five Corners, WA",
			rating: 5,
			text: "Clean work, honest pricing, and quality results. Highly recommend for home repairs in the area.",
		},
		{
			name: "Rebecca S.",
			location: "Hazel Dell, WA",
			rating: 5,
			text: "Reliable, detail-driven, and respectful of our home. We’ll absolutely use Structa Homes again.",
		},
	];

	const whyChoose = [
		{
			icon: Shield,
			title: "Detail-Driven Craftsmanship",
			description:
				"We focus on the small details that make a big difference in the final result.",
		},
		{
			icon: Heart,
			title: "Honest, Transparent Pricing",
			description:
				"Clear estimates, straightforward communication, and no surprise charges.",
		},
		{
			icon: Sparkles,
			title: "Clean & Respectful Job Sites",
			description:
				"Your home is treated with care — clean work areas and minimal disruption.",
		},
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative min-h-screen flex items-center">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1604159848821-104723525eb4?q=80&w=1288&auto=format&fit=crop"
						alt="Home repair and finish carpentry in Vancouver WA"
						fill
						priority
						className="object-cover contrast-110 saturate-105"
					/>

					<div className="absolute inset-0 bg-linear-to-br from-[#1F2E2B]/70 via-[#243A35]/55 to-[#2D5A3D]/45" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-3xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="inline-block mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm border border-white/10"
						>
							Vancouver, WA Home Services
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
						>
							Complete Home Services for Vancouver, WA Homeowners
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-white/80 mb-10 max-w-2xl"
						>
							Thoughtful craftsmanship, clear communication, and respect for
							your home. Proudly serving Vancouver, Five Corners, Brush Prairie,
							Hazel Dell, and Salmon Creek.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl"
							>
								Request a Free Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl border border-white/20 hover:bg-white/20 transition"
							>
								View Services
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Services"
						title="Skilled Home Services for Vancouver Homeowners"
						description="Professional home repair, finish carpentry, and small remodel services across Clark County."
					/>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, i) => (
							<ServiceCard key={service.title} {...service} index={i} />
						))}
					</div>
				</div>
			</section>

			{/* WHY CHOOSE */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<SectionHeader
							eyebrow="Why Norbilt"
							title="A Better Standard for Home Repairs"
							description="Local, reliable, and detail-focused work you can trust."
							centered={false}
						/>

						<div className="space-y-8">
							{whyChoose.map((item, i) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="flex gap-5"
								>
									<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
										<item.icon className="w-6 h-6 text-[#2D5A3D]" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-[#2C3E3A] mb-1">
											{item.title}
										</h3>
										<p className="text-[#2C3E3A]/70">{item.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className="relative aspect-4/5 rounded-2xl overflow-hidden">
						<Image
							src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
							alt="Finish carpentry and interior home upgrades in Vancouver WA"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-24 bg-[#2C3E3A]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Client Reviews"
						title="What Vancouver Homeowners Are Saying"
						description="Trusted across Vancouver, Five Corners, and Brush Prairie."
						light
					/>

					<div className="grid md:grid-cols-2 gap-6">
						{testimonials.map((t, i) => (
							<TestimonialCard key={t.name} {...t} index={i} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
