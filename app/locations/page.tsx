"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	MapPin,
	ArrowRight,
	Phone,
	ShieldCheck,
	CheckCircle2,
	Navigation,
	Hammer,
	Clock,
} from "lucide-react";

// --- TYPE DEFINITIONS TO FIX TS ERRORS ---
interface LocationCity {
	name: string;
	href: string;
	description: string;
	tags?: string[]; // Optional: prevents 'Property does not exist' error
	primary?: boolean; // Optional: prevents 'Property does not exist' error
}

interface Region {
	title: string;
	cities: LocationCity[];
}

export default function LocationsIndexPage() {
	const regions: Region[] = [
		{
			title: "Primary Service Hub",
			cities: [
				{
					name: "Vancouver, WA",
					href: "/locations/vancouver",
					description:
						"Our central headquarters providing licensed general contractor services, kitchen refreshes, and expert finish carpentry across the metro area.",
					tags: ["Main Hub", "Full Service"],
					primary: true,
				},
			],
		},
		{
			title: "East Clark County",
			cities: [
				{
					name: "Camas, WA",
					href: "/locations/camas",
					description:
						"Specialized interior remodeling and high-end finish carpentry for luxury homes in the Camas and Prune Hill areas.",
					tags: ["Interior Trim", "Remodeling"],
					primary: false,
				},
				{
					name: "Washougal, WA",
					href: "/locations/washougal",
					description:
						"Professional home repairs and structural maintenance for the Washougal community and Columbia River Gorge foothills.",
					tags: ["Home Repair", "Maintenance"],
					primary: false,
				},
			],
		},
		{
			title: "North Clark County",
			cities: [
				{
					name: "Ridgefield, WA",
					href: "/locations/ridgefield",
					description:
						"Precision drywall repair, trim installation, and modernization services for the rapidly growing Ridgefield neighborhoods.",
					tags: ["New Construction", "Drywall"],
					primary: false,
				},
				{
					name: "Battle Ground, WA",
					href: "/locations/battle-ground",
					description:
						"Reliable handyman services and licensed interior renovations for residential properties in the Battle Ground area.",
					tags: ["General Repairs", "Renovations"],
					primary: false,
				},
				{
					name: "Brush Prairie, WA",
					href: "/locations/brush-prairie",
					description:
						"Full-service interior improvements and carpentry for acreage homes and estates in Brush Prairie.",
					tags: ["Carpentry", "Licensed Contractor"],
					primary: false,
				},
			],
		},
		{
			title: "Vancouver Neighborhoods",
			cities: [
				{
					name: "Felida, WA",
					href: "/locations/felida",
					description:
						"Detail-oriented home improvements and fixture installations for Felida residents.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Salmon Creek, WA",
					href: "/locations/salmon-creek",
					description:
						"Quality drywall matching and interior painting prep for Salmon Creek homes.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Hazel Dell, WA",
					href: "/locations/hazel-dell",
					description:
						"Trusted local repairs and bathroom fixture upgrades across Hazel Dell.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Orchards, WA",
					href: "/locations/orchards",
					description:
						"Efficient home maintenance and door/window casing repairs in the Orchards area.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Mill Plain, WA",
					href: "/locations/mill-plain",
					description:
						"Modernizing Mill Plain interiors with custom trim and flooring transitions.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Five Corners, WA",
					href: "/locations/five-corners",
					description:
						"Dependable interior carpentry and handyman solutions for Five Corners.",
					tags: ["Local Service"],
					primary: false,
				},
			],
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Serving SW Washington
							</span>
							<span className="text-[#A7C4B5] font-bold text-sm uppercase tracking-widest">
								Clark County Licensed Contractor
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Where We <br />
							<span className="text-[#FFB800]">Build & Repair</span>
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							From the Columbia River to North Clark County, Norbilt provides
							the <strong>precision interior remodeling</strong> and
							<strong>licensed home repairs</strong> our neighbors deserve. We
							are your local Vancouver-based specialists.
						</p>
					</div>
				</div>
			</section>

			{/* QUICK TRUST BAR */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
					<div className="flex items-center gap-2">
						<ShieldCheck className="w-5 h-5 text-[#FFB800]" />
						<span className="text-white font-black text-xs uppercase tracking-widest">
							WA Licensed & Bonded
						</span>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
						<span className="text-white font-black text-xs uppercase tracking-widest">
							Locally Owned & Operated
						</span>
					</div>
				</div>
			</section>

			{/* LOCATIONS GRID */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="space-y-32">
						{regions.map((region) => (
							<div key={region.title} className="space-y-12">
								<div className="flex items-center gap-6">
									<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter shrink-0">
										{region.title}
									</h2>
									<div className="h-px bg-gray-300 w-full" />
								</div>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{region.cities.map((location, index) => (
										<motion.div
											key={location.name}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.05 }}
										>
											<Link
												href={location.href}
												className={`group relative flex flex-col h-full rounded-3xl p-10 transition-all duration-500 border-b-8 shadow-sm ${
													location.primary
														? "bg-[#1F2E2B] border-[#FFB800] text-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
														: "bg-white border-transparent hover:border-[#FFB800] hover:shadow-2xl text-[#1F2E2B]"
												}`}
											>
												<div className="flex justify-between items-start mb-6">
													<MapPin
														className={`w-8 h-8 ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
													/>
													<div className="flex gap-2">
														{location.tags?.map((tag: string) => (
															<span
																key={tag}
																className="text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-2 py-1 rounded"
															>
																{tag}
															</span>
														))}
													</div>
												</div>

												<h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
													{location.name}
												</h3>

												<p
													className={`font-medium leading-relaxed mb-8 text-sm ${location.primary ? "text-[#A7C4B5]" : "text-gray-600"}`}
												>
													{location.description}
												</p>

												<div
													className={`mt-auto inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] transition-all group-hover:gap-4 ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
												>
													View {location.name.split(",")[0]} Services{" "}
													<ArrowRight className="w-4 h-4" />
												</div>
											</Link>
										</motion.div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* MAP SECTION - FIXED TAILWIND CLASSES */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="bg-[#1F2E2B] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
						<div className="lg:w-1/2 p-12 md:p-20 space-y-8">
							<span className="text-[#FFB800] font-black uppercase tracking-widest text-xs">
								Serving All of Clark County
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
								Professional Repairs <br />{" "}
								<span className="text-[#FFB800]">In Your Neighborhood</span>
							</h2>
							<p className="text-[#A7C4B5] text-lg font-medium">
								Whether you are near the waterfront in Vancouver, the hills of
								Camas, or the suburbs of Ridgefield, Norbilt provides
								consistent, high-quality <strong>interior construction</strong>.
							</p>
						</div>
						{/* min-h-100 is the canonical replacement for [400px] in some configs */}
						<div className="lg:w-1/2 relative min-h-100 bg-[#14201D] flex items-center justify-center p-12">
							{/* bg-size-[] is the correct canonical format for arbitrary background sizes */}
							<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFB800_1px,transparent_1px)] bg-size-[20px_20px]" />
							<div className="relative text-center">
								<MapPin className="w-24 h-24 text-[#FFB800] mx-auto mb-6 animate-bounce" />
								<div className="bg-white p-6 rounded-2xl shadow-2xl">
									<p className="text-black font-black uppercase text-sm tracking-tighter">
										Service Area
									</p>
									<p className="text-gray-500 font-bold text-xs uppercase">
										SW Washington
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#FFB800] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">
								Start Your Local <br />{" "}
								<span className="text-[#1F2E2B]">Project Today</span>
							</h2>
							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Get My Estimate
								</Link>
								<Link
									href="tel:+13600000000"
									className="px-12 py-6 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> Call Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
