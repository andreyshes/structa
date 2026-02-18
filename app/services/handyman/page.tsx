"use client";

import Link from "next/link";
import Image from "next/image";
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
	MapPin,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HandymanPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO WITH BACKGROUND IMAGE */}
			<section className="relative min-h-[80vh] flex items-center">
				{/* Background Image Container */}
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
						alt="Professional handyman service tools in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					{/* SEO/Readability Overlay: Darkens the image so white text pops */}
					<div className="absolute inset-0 bg-[#1F2E2B]/85 lg:bg-linear-to-r lg:from-[#1F2E2B] lg:via-[#1F2E2B]/90 lg:to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-3xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex flex-wrap gap-3 mb-8"
						>
							<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/40 backdrop-blur-md rounded-full text-[#A7C4B5] text-xs font-bold uppercase tracking-widest border border-[#2D5A3D]/50">
								<Shield className="w-4 h-4" />
								Licensed · Bonded · Insured
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
						>
							Professional Handyman <br />
							<span className="text-[#A7C4B5]">& Home Repairs</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xl text-white/80 leading-relaxed max-w-2xl mb-10"
						>
							Expert residential maintenance for Vancouver and Clark County. We
							handle your home "to-do" list with professional precision and
							licensed accountability.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#3a6d4b] transition-all shadow-2xl"
							>
								Request a Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* INTRO SECTION */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-[#1F2E2B] mb-8 leading-tight">
								Reliable Residential Maintenance <br />
								<span className="text-[#2D5A3D]">Serving Clark County, WA</span>
							</h2>
							<div className="space-y-6 text-gray-600 leading-relaxed text-lg">
								<p>
									Finding a **dependable handyman in Vancouver, WA** shouldn’t
									be a gamble. Norbilt provides professional, detail-focused
									service that bridges the gap between casual labor and
									large-scale remodeling.
								</p>
								<p>
									We specialize in the "to-do" lists that protect your home's
									value. Whether it's sealing out the PNW moisture, repairing
									drywall damage, or installing modern fixtures, our work is
									rooted in construction expertise.
								</p>
							</div>
						</div>

						{/* Legitimacy Card */}
						<div className="bg-[#F8F6F3] p-10 rounded-3xl border border-gray-100 shadow-sm">
							<h3 className="text-2xl font-bold text-[#1F2E2B] mb-6">
								The Norbilt Advantage
							</h3>
							<ul className="space-y-6">
								<li className="flex gap-4 items-start">
									<div className="bg-[#2D5A3D] p-1 rounded-full shrink-0">
										<CheckCircle2 className="w-5 h-5 text-white" />
									</div>
									<span>
										<strong className="text-[#1F2E2B]">
											Licensed Accountability:
										</strong>{" "}
										As a registered WA General Contractor, we provide
										professional peace of mind.
									</span>
								</li>
								<li className="flex gap-4 items-start">
									<div className="bg-[#2D5A3D] p-1 rounded-full shrink-0">
										<CheckCircle2 className="w-5 h-5 text-white" />
									</div>
									<span>
										<strong className="text-[#1F2E2B]">Local Expertise:</strong>{" "}
										We understand PNW home challenges, from moisture control to
										structural settling.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#F1F5F2]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Solutions"
						title="Common Home Repair Services"
						description="Professional results for the repairs and upgrades that keep your home running smoothly."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{[
							{
								icon: Hammer,
								title: "Drywall & Wall Repair",
								desc: "Expert patching, stress crack repair, and texture matching to restore seamless wall surfaces.",
							},
							{
								icon: Lightbulb,
								title: "Fixtures & Smart Home",
								desc: "Installation of ceiling fans, designer lighting, smart locks, and Ring doorbells.",
							},
							{
								icon: Paintbrush,
								title: "Caulking & Sealing",
								desc: "Kitchen and bath re-caulking, weather-stripping, and moisture protection for PNW homes.",
							},
							{
								icon: Settings,
								title: "Assembly & Mounting",
								desc: "Professional TV wall mounting, floating shelves, and complex furniture assembly.",
							},
							{
								icon: Home,
								title: "Interior Trim & Doors",
								desc: "Repairing stuck doors, replacing hinges, and fixing damaged baseboards or casings.",
							},
							{
								icon: Shield,
								title: "Punch List Support",
								desc: "Efficient completion of 'honey-do' lists for homeowners and property managers.",
							},
						].map((service) => (
							<div
								key={service.title}
								className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-50"
							>
								<div className="w-12 h-12 bg-[#F8F6F3] rounded-xl flex items-center justify-center mb-6">
									<service.icon className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-bold text-[#1F2E2B] mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{service.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA STRIP */}
			<section className="py-16 bg-white border-y border-gray-100">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<div className="inline-flex items-center gap-2 text-[#2D5A3D] font-bold uppercase tracking-widest text-sm mb-6">
						<MapPin className="w-4 h-4" /> Serving All Clark County
					</div>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 font-medium">
						{[
							"Vancouver",
							"Camas",
							"Ridgefield",
							"Battle Ground",
							"Salmon Creek",
							"Washougal",
						].map((city) => (
							<span key={city}>{city}, WA</span>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-24 bg-[#1F2E2B] relative overflow-hidden">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
						Ready to Clear Your Home <br /> To-Do List?
					</h2>
					<p className="text-[#A7C4B5] text-xl mb-12">
						Get a free, transparent estimate from Vancouver’s trusted local
						handyman.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-2xl"
					>
						Get My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
