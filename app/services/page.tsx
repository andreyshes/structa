"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	DoorOpen,
	Layers,
	ArrowRight,
	CheckCircle2,
	MapPin,
	Shield,
	Phone,
	type LucideIcon,
	Star,
	Square,
	ChevronRight,
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
	image: string;
};

export default function ServicesPage() {
	const serviceCategories: ServiceCategory[] = [
		{
			id: "finish-carpentry",
			icon: Hammer,
			title: "Wood Trim & Carpentry",
			href: "/services/finish-carpentry",
			image:
				"https://plus.unsplash.com/premium_photo-1683131426576-af8167f436f6?w=900&auto=format&fit=crop",
			description:
				"Clean wood trim and work that adds value to your local home.",
			longDesc:
				"Our wood work focuses on the small details that make a home look great. We install crown molding, baseboards, and wall trim. Furthermore, for Vancouver owners, new wood trim is a top way to add value to your house. We make sure every corner is clean and tight.",
			items: [
				"Baseboards & Trim",
				"Accent Walls",
				"Door & Window Trim",
				"Built-in Shelves",
				"Fireplace Mantels",
				"Small Wood Repairs",
			],
		},
		{
			id: "kitchen-bath",
			icon: Paintbrush,
			title: "Kitchen & Bath Updates",
			href: "/services/kitchen-bath",
			image:
				"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000",
			description: "Fast home updates and new fixture setup.",
			longDesc:
				"As a local contractor, we handle the tech side of kitchen and bath fixes. We bring the skill of a big firm with the speed of a local pro. In addition, we make sure the rooms you use most are both useful and look great.",
			items: [
				"Kitchen Backsplash",
				"New Cabinet Handles",
				"Sink Installation",
				"Light & Bath Fixtures",
				"Shower Hardware",
				"Toilet & Faucet Setup",
			],
		},
		{
			id: "drywall",
			icon: Layers,
			title: "Drywall Repair & Fixes",
			href: "/services/drywall-repair",
			image:
				"https://plus.unsplash.com/premium_photo-1661322610748-32b33eada183?w=900&auto=format&fit=crop",
			description:
				"Clean wall repairs and texture matching for a smooth finish.",
			longDesc:
				"Wall damage can hurt the value of your home. Our drywall work goes past simple patches. Because of this, we match your wall texture so the fix looks like it was never there. We handle everything from small holes to water damage.",
			items: [
				"Wall Hole Patching",
				"Water Damage Fixes",
				"Texture Matching",
				"Popcorn Ceiling Work",
				"Stress Crack Repair",
				"Sheetrock Finish",
			],
		},
		{
			id: "flooring",
			icon: Square,
			title: "LVP & Tile Floor Repairs",
			href: "/services/flooring",
			image:
				"https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2000",
			description: "Local floor setup and plank repair jobs.",
			longDesc:
				"Floor damage does not always mean you need a new floor. We offer fast floor repair for LVP, tile, and wood. Therefore, we help Vancouver owners keep their floors longer by fixing individual bad planks and stopping squeaks.",
			items: [
				"Plank Replacement",
				"Floor Squeak Repair",
				"Threshold Install",
				"Grout & Caulk Repair",
				"LVP Floor Setup",
				"New Baseboard Trim",
			],
		},
		{
			id: "doors-windows",
			icon: DoorOpen,
			title: "Door & Window Services",
			href: "/services/door-window",
			image:
				"https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=900&auto=format&fit=crop",
			description: "Setup and repair for home doors and windows.",
			longDesc:
				"Good doors and windows are key for a quiet, warm home. We set up new interior doors and fix old ones. Additionally, our window work focuses on the trim and seals to keep your home looking and feeling its best.",
			items: [
				"Interior Door Setup",
				"New Door Locks",
				"Door Seals",
				"Window Trim Fixes",
				"Sliding Door Work",
				"Smart Lock Setup",
			],
		},
		{
			id: "handyman",
			icon: Wrench,
			title: "Home Help & Maintenance",
			href: "/services/handyman",
			image:
				"https://plus.unsplash.com/premium_photo-1664298827256-04eb817aa0ba?w=900&auto=format&fit=crop",
			description: "Licensed contractor help for home care and repairs.",
			longDesc:
				"Caring for a home in the Northwest takes work. Our pro handyman help covers wood-rot repair and home care. As a result of being a licensed Washington contractor, we stand behind our work and show up on time.",
			items: [
				"General Home Repair",
				"Siding Fixes",
				"Wood Rot Work",
				"Art & TV Mounting",
				"Home Weatherproofing",
				"Safety Bar Install",
			],
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative min-h-[70vh] flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="https://plus.unsplash.com/premium_photo-1664303816628-2c3f28be369d?w=900&auto=format&fit=crop"
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
								Licensed Contractor • Vancouver, WA
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Interior <br />
							<span className="text-[#FFB800]">Work</span> & <br />
							Home Repairs
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt provides the quality home repair jobs Vancouver owners
							need. Licensed, bonded, and local.
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
							Licensed & Bonded
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Star className="text-[#FFB800] w-5 h-5 fill-[#FFB800]" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							5-Star Local Work
						</span>
					</div>
					<div className="flex items-center gap-3">
						<MapPin className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Serving Clark County
						</span>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#E8E4DE]/30">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Core Jobs"
						title="Local Contractor Help"
						description="Quality interior work and home repair jobs for your house."
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
											<Link
												href={service.href}
												className="hover:text-[#FFB800] transition-colors"
											>
												<h2 className="text-3xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter">
													{service.title}
												</h2>
											</Link>
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

									<div className="lg:col-span-5 flex flex-col justify-center">
										<Link
											href={service.href}
											className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl block"
										>
											<Image
												src={service.image}
												alt={`${service.title} repair and setup in Vancouver WA`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover group-hover:scale-110 transition-transform duration-700"
											/>
										</Link>

										<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
											<Link
												href={service.href}
												className="inline-flex items-center justify-center gap-2 py-6 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-2xl hover:bg-[#F8F6F3] transition-all"
											>
												Learn More <ChevronRight className="w-4 h-4" />
											</Link>
											<Link
												href="/contact"
												className="inline-flex items-center justify-center gap-4 py-6 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-[#FFB800] hover:text-black transition-all"
											>
												Get Quote <ArrowRight className="w-5 h-5" />
											</Link>
										</div>
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
								Start Your <span className="text-[#FFB800]">Home Update</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Talk with Vancouver's local contractor for a fair, clear
								estimate on your next project.
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
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em]">
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
				</div>
			</section>
		</div>
	);
}
