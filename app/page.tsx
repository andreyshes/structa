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
	CheckCircle2,
	ArrowRight,
	Shield,
	Heart,
	Sparkles,
} from "lucide-react";
import ServiceCard from "@/app/components/ServiceCard";
import TestimonialCard from "@/app/components/TestimonialCard";
import SectionHeader from "@/app/components/SectionHeader";
export default function HomePage() {
	const services = [
		{
			icon: Wrench,
			title: "Home Repairs",
			description:
				"From fixing leaky faucets to patching drywall, we handle repairs with precision and care.",
		},
		{
			icon: Hammer,
			title: "Finish Carpentry",
			description:
				"Trim, baseboards, crown molding, and custom details that elevate your space.",
		},
		{
			icon: Paintbrush,
			title: "Small Remodels",
			description:
				"Thoughtful bathroom refreshes and kitchen updates without the full renovation hassle.",
		},
		{
			icon: Home,
			title: "Door & Window",
			description:
				"Repairs, adjustments, and installations to keep your home secure and efficient.",
		},
		{
			icon: Lightbulb,
			title: "Fixture Installation",
			description:
				"Lights, ceiling fans, hardware, and fixtures installed with attention to detail.",
		},
		{
			icon: TreeDeciduous,
			title: "Deck & Exterior",
			description: "Deck repairs, exterior maintenance, and preservation work.",
		},
	];
	const testimonials = [
		{
			name: "Sarah Mitchell",
			location: "Portland, OR",
			rating: 5,
			text: "Structa Homes transformed our bathroom with incredible attention to detail. Clean, professional, and trustworthy.",
		},
		{
			name: "James Thompson",
			location: "Seattle, WA",
			rating: 5,
			text: "Quality craftsmanship and honest communication. Rare to find these days.",
		},
		{
			name: "Emily Chen",
			location: "Bend, OR",
			rating: 5,
			text: "They respected our home and executed everything beautifully.",
		},
		{
			name: "Michael Foster",
			location: "Tacoma, WA",
			rating: 5,
			text: "Fair pricing and excellent results. We’ll be using them again.",
		},
	];
	const whyChoose = [
		{
			icon: Shield,
			title: "Detail-Driven Work",
			description:
				"Quality lives in the details — we never rush or cut corners.",
		},
		{
			icon: Heart,
			title: "Honest Pricing",
			description: "Clear, transparent estimates with no surprises.",
		},
		{
			icon: Sparkles,
			title: "Clean Job Sites",
			description:
				"We respect your space and leave it better than we found it.",
		},
	];
	return (
		<div className="overflow-hidden">
			{" "}
			{/* HERO */}{" "}
			<section className="relative min-h-screen flex items-center">
				{" "}
				<div className="absolute inset-0">
					{" "}
					<Image
						src="https://images.unsplash.com/photo-1604159848821-104723525eb4?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
						alt="Craftsman working with wood details"
						fill
						priority
						className="object-cover"
					/>{" "}
					{/* Gradient overlay */}{" "}
					<div className="absolute inset-0 bg-linear-to-br from-[#1F2E2B]/90 via-[#243A35]/80 to-[#2D5A3D]/70" />{" "}
				</div>{" "}
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					{" "}
					<div className="max-w-3xl">
						{" "}
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="inline-block mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm border border-white/10"
						>
							{" "}
							Pacific Northwest Home Services{" "}
						</motion.span>{" "}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
						>
							{" "}
							Expert Hands.{" "}
							<span className="text-[#4A7C59]">Exceptional Results.</span>{" "}
						</motion.h1>{" "}
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-white/80 mb-10 max-w-2xl"
						>
							{" "}
							Thoughtful craftsmanship, clear communication, and respect for
							your home — every project, every time.{" "}
						</motion.p>{" "}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							{" "}
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl"
							>
								{" "}
								Request a Quote <ArrowRight className="w-4 h-4" />{" "}
							</Link>{" "}
							<Link
								href="/services"
								className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl border border-white/20 hover:bg-white/20 transition"
							>
								{" "}
								View Services{" "}
							</Link>{" "}
						</motion.div>{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			{/* SERVICES */}{" "}
			<section className="py-24 bg-[#E8E4DE]">
				{" "}
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					{" "}
					<SectionHeader
						eyebrow="Our Services"
						title="What We Do Best"
						description="Skilled craftsmanship for repairs, improvements, and thoughtful upgrades."
					/>{" "}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{" "}
						{services.map((service, i) => (
							<ServiceCard key={service.title} {...service} index={i} />
						))}{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			{/* WHY CHOOSE */}{" "}
			<section className="py-24 bg-[#F8F6F3]">
				{" "}
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
					{" "}
					<div>
						{" "}
						<SectionHeader
							eyebrow="Why Structa"
							title="Craftsmanship You Can Trust"
							description="We approach every project with pride, precision, and respect."
							centered={false}
						/>{" "}
						<div className="space-y-8">
							{" "}
							{whyChoose.map((item, i) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="flex gap-5"
								>
									{" "}
									<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
										{" "}
										<item.icon className="w-6 h-6 text-[#2D5A3D]" />{" "}
									</div>{" "}
									<div>
										{" "}
										<h3 className="text-lg font-semibold text-[#2C3E3A] mb-1">
											{" "}
											{item.title}{" "}
										</h3>{" "}
										<p className="text-[#2C3E3A]/70">{item.description}</p>{" "}
									</div>{" "}
								</motion.div>
							))}{" "}
						</div>{" "}
					</div>{" "}
					<div className="relative aspect-4/5 rounded-2xl overflow-hidden">
						{" "}
						<Image
							src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
							alt="Refined interior craftsmanship"
							fill
							className="object-cover"
						/>{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
			{/* TESTIMONIALS */}{" "}
			<section className="py-24 bg-[#2C3E3A]">
				{" "}
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					{" "}
					<SectionHeader
						eyebrow="Client Reviews"
						title="What Homeowners Say"
						description="Trusted across the Pacific Northwest."
						light
					/>{" "}
					<div className="grid md:grid-cols-2 gap-6">
						{" "}
						{testimonials.map((t, i) => (
							<TestimonialCard key={t.name} {...t} index={i} />
						))}{" "}
					</div>{" "}
				</div>{" "}
			</section>{" "}
		</div>
	);
}
