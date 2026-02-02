"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Paintbrush,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Sparkles,
	Droplets,
	Hammer,
	Layout,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function KitchenBathPage() {
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
							<Sparkles className="w-4 h-4" />
							Kitchen & Bathroom Refresh Services
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Kitchen & Bathroom Refreshes in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							High-impact updates that modernize your kitchen or bathroom
							without the disruption of a full remodel. Thoughtful improvements,
							professionally installed.
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
								Smart Updates That Make a Real Difference
							</h2>

							<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
								<p>
									You don’t always need a full renovation to improve how your
									home looks and functions. Structa Homes provides{" "}
									<strong>
										kitchen and bathroom refresh services in Vancouver, WA
									</strong>{" "}
									focused on the updates that deliver the most impact.
								</p>

								<p>
									From installing a new tile backsplash to upgrading fixtures,
									vanities, and hardware, we help homeowners achieve a modern,
									finished look without extended downtime or unnecessary
									demolition.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="bg-[#E8E4DE] p-6 rounded-2xl border border-[#DCD7D0]">
								<h4 className="font-semibold text-[#2C3E3A] mb-2">
									Kitchen Updates
								</h4>
								<ul className="text-sm space-y-2 text-[#2C3E3A]/70">
									<li>• Tile backsplashes</li>
									<li>• Cabinet hardware</li>
									<li>• Sink & faucet upgrades</li>
									<li>• Lighting improvements</li>
								</ul>
							</div>

							<div className="bg-[#2C3E3A] p-6 rounded-2xl text-[#F8F6F3]">
								<h4 className="font-semibold mb-2">Bathroom Updates</h4>
								<ul className="text-sm space-y-2 opacity-80">
									<li>• Vanity replacements</li>
									<li>• Toilet installation</li>
									<li>• Mirror & accessory mounting</li>
									<li>• Caulking & grout repair</li>
								</ul>
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
						title="Targeted Kitchen & Bathroom Improvements"
						description="Professional refresh work designed for busy households."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
						{[
							{
								icon: Droplets,
								title: "Fixture Upgrades",
								text: "Installation of modern faucets, shower fixtures, and high-efficiency toilets.",
							},
							{
								icon: Layout,
								title: "Tile & Backsplashes",
								text: "Custom tile installation with proper waterproofing and clean edge detailing.",
							},
							{
								icon: Hammer,
								title: "Vanities & Cabinet Details",
								text: "Vanity replacements and cabinet hardware upgrades for a clean, updated look.",
							},
							{
								icon: Paintbrush,
								title: "Finishing & Sealing",
								text: "Caulking, grout repair, and trim work to protect against moisture and wear.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-2xl border border-[#DCD7D0] shadow-sm"
							>
								<item.icon className="w-8 h-8 text-[#4A7C59] mb-4" />
								<h3 className="font-semibold text-[#2C3E3A] mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{item.text}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Kitchen and bathroom refresh projects are often completed alongside
						drywall repair, trim work, or flooring updates to ensure a cohesive
						finished space.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Why Structa Homes"
						title="Professional Results Without the Remodel Chaos"
						description="Thoughtful work, clean execution, and clear communication."
					/>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Sparkles,
								title: "Detail-Driven Work",
								text: "We focus on the finishing details that make a refresh feel like a complete transformation.",
							},
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Proper credentials and coverage for peace of mind throughout your project.",
							},
							{
								icon: Home,
								title: "Live-In Friendly",
								text: "Contained work areas and efficient scheduling so your home remains usable.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="bg-white rounded-2xl p-8 border border-[#E8E4DE] hover:border-[#4A7C59] transition-colors"
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
						Kitchen & Bathroom Updates in Vancouver, WA
					</h2>

					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						We serve homeowners throughout Vancouver, Camas, and Salmon Creek,
						delivering high-quality refresh services tailored to homes across
						Clark County.
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
						Ready to Refresh Your Space?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate and explore the best update options for your
						kitchen or bathroom.
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
