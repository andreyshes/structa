"use client";

import Link from "next/link";
import Image from "next/image"; // Added for optimized images
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	DoorOpen,
	Lightbulb,
	Layers,
	ArrowRight,
	CheckCircle2,
	ShieldCheck,
	MapPin,
	type LucideIcon,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

type ServiceCategory = {
	id: string;
	icon: LucideIcon;
	title: string;
	description: string;
	items: string[];
	href: string;
};

export default function ServicesPage() {
	const serviceCategories: ServiceCategory[] = [
		{
			id: "handyman",
			icon: Wrench,
			title: "Handyman & General Home Repairs",
			href: "/services/handyman",
			description:
				"Licensed professional home repair services in Vancouver, WA for structural maintenance and daily household issues.",
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
			id: "drywall",
			icon: Layers,
			title: "Drywall Repair & Texture Matching",
			href: "/services/drywall-repair",
			description:
				"Seamless drywall repairs and expert texture matching that restores your Vancouver home's walls to like-new condition.",
			items: [
				"Hole patching & drywall repair",
				"Water damage restoration",
				"Popcorn ceiling removal",
				"Stress crack repair",
				"Drywall installation",
				"Sheetrock finishing & sanding",
			],
		},
		{
			id: "finish-carpentry",
			icon: Hammer,
			title: "Custom Trim & Finish Carpentry",
			href: "/services/finish-carpentry",
			description:
				"High-end millwork and trim installation that elevates your interior and adds significant property value.",
			items: [
				"Baseboards & crown molding",
				"Window & door casing",
				"Wainscoting & accent walls",
				"Built-in shelving units",
				"Fireplace mantel installation",
				"Custom interior millwork",
			],
		},
		{
			id: "doors-windows",
			icon: DoorOpen,
			title: "Interior Door & Window Services",
			href: "/services/door-window",
			description:
				"Repair and installation services to improve home security, energy efficiency, and ease of use in Clark County.",
			items: [
				"Pre-hung door installation",
				"Hardware & hinge replacement",
				"Weatherstripping upgrades",
				"Window sash & trim repair",
				"Sliding door adjustments",
				"Smart lock installation",
			],
		},
		{
			id: "kitchen-bath",
			icon: Paintbrush,
			title: "Kitchen & Bathroom Refreshes",
			href: "/services/kitchen-bath",
			description:
				"Modernize your high-traffic spaces with smart upgrades without the cost of a full-scale renovation.",
			items: [
				"Cabinet hardware refreshes",
				"Faucet & luxury fixture installs",
				"Tile backsplash installation",
				"Vanity & mirror mounting",
				"Toilet replacement & repair",
				"Custom bathroom accessories",
			],
		},
		{
			id: "lighting",
			icon: Lightbulb,
			title: "Electrical Fixtures & Lighting",
			href: "/services/lighting",
			description:
				"Clean, code-compliant installation of lighting, ceiling fans, and modern smart home fixtures.",
			items: [
				"Designer light fixture install",
				"Ceiling fan mounting",
				"Dimmer switch installation",
				"Bath exhaust fan replacement",
				"Smart doorbell & camera setup",
				"Professional TV wall mounting",
			],
		},
	];

	return (
		<div className="overflow-hidden">
			{/* HERO SECTION WITH IMAGE BACKGROUND */}
			<section className="relative min-h-[60vh] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
				{/* Background Image Container */}
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t4.ftcdn.net/jpg/01/92/64/69/240_F_192646911_TeOJ5hmbwtSDko3LyvH2zpvL6kQKwRtF.jpg"
						alt="Beautifully renovated home interior in Vancouver, WA"
						fill
						priority
						className="object-cover"
					/>
					{/* Multi-layered overlay for better text contrast */}
					<div className="absolute inset-0 bg-[#1F2E2B]/80 mix-blend-multiply" />
					<div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2B] via-transparent to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex flex-col items-center gap-4 mb-8"
					>
						<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/60 backdrop-blur-md rounded-full text-[#A7C4B5] text-sm font-bold uppercase tracking-widest border border-white/10">
							<ShieldCheck className="w-4 h-4" />
							Licensed · Bonded · Insured
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#F8F6F3] mb-6 tracking-tight drop-shadow-sm"
					>
						Interior Remodeling <br className="hidden md:block" />&{" "}
						<span className="text-[#A7C4B5]">Home Improvements</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-xl text-[#F8F6F3]/90 max-w-3xl mx-auto leading-relaxed font-medium"
					>
						Professional repairs, high-end carpentry, and detail-driven upgrades
						for homeowners throughout{" "}
						<span className="text-white font-bold border-b-2 border-[#2D5A3D]">
							Vancouver, Camas, and Clark County.
						</span>
					</motion.p>
				</div>
			</section>

			{/* ... rest of the component (Services Grid, Footer Strip, CTA) remains the same */}

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="mb-20">
						<SectionHeader
							eyebrow="Expertise"
							title="Home Improvement Solutions"
							description="Tailored interior services designed to increase home value and daily livability."
						/>
					</div>

					<div className="grid gap-10">
						{serviceCategories.map((service, index) => (
							<Link
								key={service.id}
								href={service.href}
								className="block group"
							>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:border-[#A7C4B5]/30 transition-all duration-500"
								>
									<div className="grid lg:grid-cols-12 gap-12 items-start">
										<div className="lg:col-span-5">
											<div className="w-16 h-16 bg-[#F1F5F2] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2D5A3D] group-hover:text-white transition-colors duration-300">
												<service.icon className="w-8 h-8 text-[#2D5A3D] group-hover:text-white" />
											</div>
											<h2 className="text-3xl font-bold text-[#1F2E2B] mb-4">
												{service.title}
											</h2>
											<p className="text-gray-600 text-lg leading-relaxed mb-6">
												{service.description}
											</p>
											<div className="inline-flex items-center text-[#2D5A3D] font-bold gap-2 group-hover:translate-x-2 transition-transform">
												Learn More <ArrowRight className="w-4 h-4" />
											</div>
										</div>

										<div className="lg:col-span-7 bg-[#F8F6F3]/50 rounded-2xl p-8 grid sm:grid-cols-2 gap-4 border border-gray-50">
											{service.items.map((item) => (
												<div key={item} className="flex items-center gap-3">
													<CheckCircle2 className="w-5 h-5 text-[#2D5A3D]" />
													<span className="text-[#1F2E2B] font-medium">
														{item}
													</span>
												</div>
											))}
										</div>
									</div>
								</motion.div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="py-12 bg-white border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
					<span className="flex items-center gap-2">
						<MapPin className="w-4 h-4" /> Vancouver, WA
					</span>
					<span className="flex items-center gap-2">
						<MapPin className="w-4 h-4" /> Camas, WA
					</span>
					<span className="flex items-center gap-2">
						<MapPin className="w-4 h-4" /> Ridgefield, WA
					</span>
					<span className="flex items-center gap-2">
						<MapPin className="w-4 h-4" /> Battle Ground, WA
					</span>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center bg-[#1F2E2B] py-20 rounded-[3rem] shadow-2xl">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
						Start Your Home <br /> Upgrade Today
					</h2>
					<p className="text-[#A7C4B5] text-xl mb-12 max-w-xl mx-auto">
						Contact Vancouver’s detail-oriented contractor for a free,
						no-obligation estimate.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-12 py-6 bg-[#2D5A3D] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
					>
						Get My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
