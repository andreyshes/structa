"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	DoorOpen,
	Lightbulb,
	Layers,
	Home,
	Ruler,
	ClipboardCheck,
	ArrowRight,
	CheckCircle2,
	type LucideIcon,
} from "lucide-react";

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
				"Professional home repair services in Vancouver, WA for everyday issues and ongoing maintenance.",
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
			title: "Drywall & Wall Repair Services",
			href: "/services/drywall-repair",
			description:
				"Clean, seamless drywall repairs that restore walls to like-new condition.",
			items: [
				"Hole patching & drywall repair",
				"Water damage repair",
				"Texture matching",
				"Crack repair",
				"Drywall installation",
				"Finishing & sanding",
			],
		},
		{
			id: "finish-carpentry",
			icon: Hammer,
			title: "Trim & Finish Carpentry",
			href: "/services/finish-carpentry",
			description:
				"Detail-focused trim work that elevates interiors and adds long-term value.",
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
			id: "doors-windows",
			icon: DoorOpen,
			title: "Door & Window Repair",
			href: "/services/door-window",
			description:
				"Door and window services that improve security, efficiency, and daily use.",
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
			id: "kitchen-bath",
			icon: Paintbrush,
			title: "Kitchen & Bathroom Updates",
			href: "/services/kitchen-bath",
			description:
				"Smart kitchen and bathroom upgrades without the cost or disruption of a full remodel.",
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
			id: "lighting",
			icon: Lightbulb,
			title: "Lighting & Fixture Installation",
			href: "/services/lighting",
			description:
				"Safe, clean installation of lighting, fans, and home fixtures.",
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
			id: "flooring",
			icon: Home,
			title: "Flooring Repairs & Small Installations",
			href: "/services/flooring",
			description:
				"Repairs and targeted flooring updates to keep your home looking its best.",
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
			id: "property-maintenance",
			icon: ClipboardCheck,
			title: "Punch Lists & Property Maintenance",
			href: "/services/home-repair",
			description:
				"Pre-sale prep, move-in services, and ongoing property care for homeowners and landlords.",
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
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
					>
						<Ruler className="w-4 h-4" />
						Home Services
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						Complete Home Services in Vancouver, WA
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						From everyday repairs to detailed upgrades, Norbilt Homes delivers
						reliable, high-quality service across Vancouver and Clark County.
					</motion.p>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-8">
					{serviceCategories.map((service, index) => (
						<Link key={service.id} href={service.href} className="block">
							<motion.div
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
										<h2 className="text-2xl font-semibold text-[#2C3E3A] mb-3">
											{service.title}
										</h2>
										<p className="text-[#2C3E3A]/70">{service.description}</p>
									</div>

									<div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
										{service.items.map((item) => (
											<div
												key={`${service.id}-${item}`}
												className="flex items-center gap-3"
											>
												<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
												<span className="text-[#2C3E3A]/80">{item}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						</Link>
					))}
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
						Let’s Talk About Your Project
					</motion.h2>

					<p className="text-xl text-[#2C3E3A]/70 mb-10">
						Get a free estimate for home services in Vancouver, WA — no
						pressure.
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
