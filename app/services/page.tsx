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
	Square,
	Construction,
	TrendingUp,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

type ServiceCategory = {
	id: string;
	icon: LucideIcon;
	title: string;
	description: string;
	items: string[];
	href: string;
	longDesc: string;
	image: string; // The specific image for this service
};

export default function ServicesPage() {
	const serviceCategories: ServiceCategory[] = [
		{
			id: "finish-carpentry",
			icon: Hammer,
			title: "Custom Trim & Finish Carpentry",
			href: "/services/finish-carpentry",
			image:
				"https://plus.unsplash.com/premium_photo-1683131426576-af8167f436f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc2Vib2FyZHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your trim work photo
			description:
				"Precision millwork and trim installation that adds character and property value.",
			longDesc:
				"Our finish carpentry services focus on the architectural details that define a home. From crown molding installation to custom wainscoting and baseboard replacement, we ensure every mitered corner is gap-free. For Vancouver homeowners, high-quality millwork is a top-tier way to increase property value.",
			items: [
				"Baseboards & Crown Molding",
				"Wainscoting & Accent Walls",
				"Window & Door Casing",
				"Custom Built-in Shelving",
				"Fireplace Mantel Install",
				"Precision Millwork Repairs",
			],
		},
		{
			id: "kitchen-bath",
			icon: Paintbrush,
			title: "Kitchen & Bathroom Remodeling",
			href: "/services/kitchen-bath",
			image:
				"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000",
			description:
				"High-impact upgrades and professional fixture installation.",
			longDesc:
				"As a specialized general contractor, we handle the technical aspects of kitchen and bath refreshes. We provide the expertise of a full-scale remodeling firm with the efficiency of a local specialist, ensuring your most used rooms are both functional and beautiful.",
			items: [
				"Kitchen Backsplash Tile",
				"Cabinet Hardware Replacement",
				"Vanity & Sink Installation",
				"Luxury Fixture Upgrades",
				"Shower Hardware Refreshes",
				"Toilet & Faucet Installation",
			],
		},
		{
			id: "drywall",
			icon: Layers,
			title: "Drywall Repair & Texture Matching",
			href: "/services/drywall-repair",
			image:
				"https://plus.unsplash.com/premium_photo-1661322610748-32b33eada183?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ5d2FsbHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your drywall repair photo
			description:
				"Seamless repairs and expert texture matching for a flawless finish.",
			longDesc:
				"Wall damage can detract from your home's value. Our drywall repair services go beyond simple patching. We specialize in seamless texture matching—including orange peel and knockdown—to ensure that repairs are invisible to the naked eye.",
			items: [
				"Large Hole Patching",
				"Water Damage Restoration",
				"Professional Texture Matching",
				"Popcorn Ceiling Removal",
				"Stress Crack Repair",
				"Sheetrock Finishing",
			],
		},
		{
			id: "flooring",
			icon: Square,
			title: "LVP & Tile Flooring Repairs",
			href: "/services/flooring",
			image:
				"https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2000", // Replace with your flooring photo
			description:
				"Specialized flooring installation and structural plank repairs.",
			longDesc:
				"Floor damage doesn't always require a total replacement. We offer targeted flooring repair for Luxury Vinyl Plank (LVP), laminate, and tile. From replacing individual damaged planks to fixing subfloor squeaks, we help Vancouver homeowners extend the life of their floors.",
			items: [
				"Individual Plank Replacement",
				"Subfloor Squeak Repair",
				"Transition & Threshold Install",
				"Grout Repair & Re-caulking",
				"LVP & Laminate Installation",
				"Baseboard & Trim Integration",
			],
		},
		{
			id: "doors-windows",
			icon: DoorOpen,
			title: "Interior Door & Window Services",
			href: "/services/door-window",
			image:
				"https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZG93fGVufDB8fDB8fHww", // Replace with your door/window photo
			description:
				"Installation and repair of interior doors and window casings.",
			longDesc:
				"Properly installed doors and windows are essential for privacy and energy efficiency. We provide professional installation for pre-hung interior doors and sliding door tuning. Our window services focus on casing repair and trim installation for a consistent interior look.",
			items: [
				"Pre-hung Door Installation",
				"Door Hardware & Lock Setup",
				"Weatherstripping & Sealing",
				"Window Trim & Casing Repair",
				"Sliding Door Alignment",
				"Smart Lock Installation",
			],
		},
		{
			id: "handyman",
			icon: Wrench,
			title: "Structural Home Maintenance",
			href: "/services/handyman",
			image:
				"https://plus.unsplash.com/premium_photo-1664298827256-04eb817aa0ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHJlcGFpcnN8ZW58MHx8MHx8fDA%3D",
			description:
				"Licensed general contractor services for reliable home maintenance.",
			longDesc:
				"Maintaining a home in the Pacific Northwest requires a proactive approach. Our professional handyman services cover everything from selective exterior wood-rot repair to interior structural maintenance. As a licensed Washington contractor, we provide total accountability.",
			items: [
				"General Home Repair",
				"Selective Siding Repair",
				"Deck & Wood-Rot Work",
				"Furniture & Art Mounting",
				"Weatherproofing Services",
				"Safety Grab Bar Install",
			],
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative min-h-[70vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://plus.unsplash.com/premium_photo-1664303816628-2c3f28be369d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMHJlbW9kZWx8ZW58MHx8MHx8fDA%3D"
						alt="Interior remodeling and professional contractor services in Vancouver WA"
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
								General Contractor • Vancouver, WA
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Interior <br />
							<span className="text-[#FFB800]">Construction</span> & <br />
							Home Repairs
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt provides the precision remodeling and high-quality home
							repair services Vancouver homeowners trust. Licensed, bonded, and
							local.
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
			<section className="py-24 bg-[#E8E4DE]/30">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Core Services"
						title="Professional Contractor Solutions"
						description="Comprehensive interior construction, remodeling, and repair services for your residential property."
					/>

					<div className="grid gap-16 mt-20">
						{serviceCategories.map((service) => (
							<div
								key={service.id}
								className="group bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-xl border-b-8 border-transparent hover:border-[#FFB800] transition-all duration-500"
							>
								<div className="grid lg:grid-cols-12 gap-12">
									<div className="lg:col-span-7 space-y-8">
										<div className="flex items-center gap-6">
											<div className="w-20 h-20 bg-[#1F2E2B] rounded-2xl flex items-center justify-center">
												<service.icon className="w-10 h-10 text-[#FFB800]" />
											</div>
											<h2 className="text-3xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter">
												{service.title}
											</h2>
										</div>
										<p className="text-gray-700 text-xl font-medium leading-relaxed">
											{service.longDesc}
										</p>
										<div className="grid sm:grid-cols-2 gap-4">
											{service.items.map((item) => (
												<div
													key={item}
													className="flex items-center gap-3 bg-[#F8F6F3] p-4 rounded-xl"
												>
													<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0" />
													<span className="text-[#1F2E2B] font-bold text-sm uppercase">
														{item}
													</span>
												</div>
											))}
										</div>
									</div>

									{/* DYNAMIC IMAGE SECTION */}
									<div className="lg:col-span-5 flex flex-col justify-center">
										<div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
											<Image
												src={service.image}
												alt={`${service.title} specialized repair and installation in Vancouver WA`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover group-hover:scale-110 transition-transform duration-700"
											/>
										</div>
										<Link
											href="/contact"
											className="mt-8 inline-flex items-center justify-center gap-4 py-6 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-[#FFB800] hover:text-black transition-all"
										>
											Request This Service <ArrowRight className="w-5 h-5" />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Start Your <span className="text-[#FFB800]">Home Remodel</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Connect with Vancouver's expert general contractor for a
								transparent, professional estimate on your interior project.
							</p>
							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<Link
									href="tel:+13600000000"
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
