"use client";

import Link from "next/link";
import Image from "next/image";
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
	Shield,
	Phone,
	type LucideIcon,
	Star,
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
			id: "finish-carpentry",
			icon: Hammer,
			title: "Custom Trim & Finish Carpentry",
			href: "/services/finish-carpentry",
			description:
				"Precision millwork and trim installation that adds immediate character and property value to your interior.",
			items: [
				"Baseboards & crown molding",
				"Wainscoting & accent walls",
				"Window & door casing",
				"Built-in shelving",
				"Fireplace mantels",
				"Custom millwork",
			],
		},
		{
			id: "kitchen-bath",
			icon: Paintbrush,
			title: "Kitchen & Bathroom Refreshes",
			href: "/services/kitchen-bath",
			description:
				"Modernize your most important spaces with high-impact upgrades without the full renovation price tag.",
			items: [
				"Tile backsplashes",
				"Cabinet hardware updates",
				"Fixture & faucet installs",
				"Vanity mounting",
				"Luxury accessory setup",
				"Toilet replacement",
			],
		},
		{
			id: "drywall",
			icon: Layers,
			title: "Drywall Repair & Texture Matching",
			href: "/services/drywall-repair",
			description:
				"Seamless repairs and expert texture matching that restores your walls to a flawless, like-new condition.",
			items: [
				"Hole patching",
				"Water damage repair",
				"Texture matching",
				"Popcorn removal",
				"Stress crack repair",
				"Sheetrock finishing",
			],
		},
		{
			id: "handyman",
			icon: Wrench,
			title: "Professional Handyman Services",
			href: "/services/handyman",
			description:
				"Reliable, licensed professional repairs for structural maintenance and those nagging household tasks.",
			items: [
				"General home repairs",
				"Plumbing fixtures",
				"Minor electrical",
				"Appliance install",
				"Furniture assembly",
				"Weatherproofing",
			],
		},
		{
			id: "doors-windows",
			icon: DoorOpen,
			title: "Interior Doors & Windows",
			href: "/services/door-window",
			description:
				"Installation and repair services to improve aesthetics, security, and energy efficiency in your home.",
			items: [
				"Pre-hung door install",
				"Hardware replacement",
				"Weatherstripping",
				"Window trim repair",
				"Sliding door tuning",
				"Smart lock setup",
			],
		},
		{
			id: "lighting",
			icon: Lightbulb,
			title: "Electrical Fixtures & Lighting",
			href: "/services/lighting",
			description:
				"Clean, code-compliant installation of designer lighting, ceiling fans, and smart home technology.",
			items: [
				"Designer lighting",
				"Ceiling fan mounting",
				"Dimmer switches",
				"Bath exhaust fans",
				"Smart doorbells",
				"TV wall mounting",
			],
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - AD STYLE */}
			<section className="relative min-h-[65vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://t4.ftcdn.net/jpg/01/92/64/69/240_F_192646911_TeOJ5hmbwtSDko3LyvH2zpvL6kQKwRtF.jpg"
						alt="Interior remodeling and home improvement services in Vancouver WA"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Licensed Specialist
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Interior <br />
							<span className="text-[#FFB800]">Remodeling</span> & <br />
							Home Improvements
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Precision carpentry, flawless repairs, and expert upgrades for
							homeowners in Vancouver, Camas, and throughout Clark County.
						</p>
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<Shield className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Fully Licensed & Bonded
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Star className="text-[#FFB800] w-5 h-5 fill-[#FFB800]" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							5-Star Local Craftsmanship
						</span>
					</div>
					<div className="flex items-center gap-3">
						<MapPin className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Serving All Clark County
						</span>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Expertise"
						title="Professional Home Solutions"
						description="High-quality interior services tailored to your vision and budget."
					/>

					<div className="grid gap-12 mt-20">
						{serviceCategories.map((service, index) => (
							<Link
								key={service.id}
								href={service.href}
								className="group block"
							>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									className="bg-white rounded-[2rem] p-8 lg:p-14 border-b-8 border-transparent hover:border-[#FFB800] shadow-[0_10px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-500"
								>
									<div className="grid lg:grid-cols-12 gap-12 items-center">
										<div className="lg:col-span-5 space-y-6">
											<div className="w-20 h-20 bg-[#F8F6F3] rounded-2xl flex items-center justify-center group-hover:bg-[#1F2E2B] transition-colors duration-300">
												<service.icon className="w-10 h-10 text-[#2D5A3D] group-hover:text-[#FFB800]" />
											</div>
											<h2 className="text-3xl lg:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
												{service.title}
											</h2>
											<p className="text-gray-600 text-lg font-medium leading-relaxed">
												{service.description}
											</p>
											<div className="inline-flex items-center gap-3 text-[#2D5A3D] font-black uppercase tracking-widest text-sm group-hover:gap-5 transition-all">
												View Details{" "}
												<ArrowRight className="w-5 h-5 text-[#FFB800]" />
											</div>
										</div>

										<div className="lg:col-span-7 bg-[#F8F6F3] rounded-[1.5rem] p-8 lg:p-10 grid sm:grid-cols-2 gap-6 border border-gray-100">
											{service.items.map((item) => (
												<div key={item} className="flex items-center gap-3">
													<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
													<span className="text-[#1F2E2B] font-bold text-sm uppercase tracking-tight">
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

			{/* FINAL CTA - Billboard Style */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						{/* Background Texture/Accent */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full -mr-32 -mt-32 blur-3xl" />

						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Start Your Next <br />{" "}
								<span className="text-[#FFB800]">Home Improvement</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Get a transparent, professional estimate from Vancouver’s choice
								for precision interior work.
							</p>
							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> Call Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICE AREA FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em]">
					<span>Vancouver</span>
					<span className="text-[#FFB800]">•</span>
					<span>Camas</span>
					<span className="text-[#FFB800]">•</span>
					<span>Washougal</span>
					<span className="text-[#FFB800]">•</span>
					<span>Battle Ground</span>
					<span className="text-[#FFB800]">•</span>
					<span>Ridgefield</span>
				</div>
			</section>
		</div>
	);
}
