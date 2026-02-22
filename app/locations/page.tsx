"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	MapPin,
	ArrowRight,
	Phone,
	ShieldCheck,
	CheckCircle2,
} from "lucide-react";

export default function LocationsIndexPage() {
	const locations = [
		{
			name: "Vancouver, WA",
			href: "/locations/vancouver",
			description:
				"Our primary service hub for professional home repair and precision finish carpentry.",
			primary: true,
		},
		{
			name: "Camas, WA",
			href: "/locations/camas",
			description:
				"High-end interior improvements and detail-focused repairs for Camas homeowners.",
		},
		{
			name: "Ridgefield, WA",
			href: "/locations/ridgefield",
			description:
				"Reliable maintenance and licensed carpentry services for the Ridgefield community.",
		},
		{
			name: "Battle Ground, WA",
			href: "/locations/battle-ground",
			description:
				"Professional handyman and renovation services for Battle Ground residents.",
		},
		{
			name: "Washougal, WA",
			href: "/locations/washougal",
			description:
				"Expert home services and skilled craftsmanship serving the Washougal area.",
		},
		{
			name: "Salmon Creek, WA",
			href: "/locations/salmon-creek",
			description:
				"Quality interior repairs and modernization for Salmon Creek neighborhoods.",
		},
		{
			name: "Hazel Dell, WA",
			href: "/locations/hazel-dell",
			description:
				"Trusted local contractor for maintenance and repair services in Hazel Dell.",
		},
		{
			name: "Five Corners, WA",
			href: "/locations/five-corners",
			description:
				"Dependable home improvement and carpentry services for Five Corners.",
		},
		{
			name: "Brush Prairie, WA",
			href: "/locations/brush-prairie",
			description:
				"Professional interior renovations and repairs for Brush Prairie homes.",
		},
		{
			name: "Felida, WA",
			href: "/locations/felida",
			description:
				"Precision craftsmanship and licensed home services for Felida residents.",
		},
		{
			name: "Lake Shore, WA",
			href: "/locations/lake-shore",
			description:
				"Reliable home maintenance and interior upgrades for Lake Shore.",
		},
		{
			name: "Orchards, WA",
			href: "/locations/orchards",
			description:
				"Expert handyman and carpentry services for the Orchards community.",
		},
		{
			name: "Mill Plain, WA",
			href: "/locations/mill-plain",
			description:
				"Professional home repair and remodeling for Mill Plain neighborhoods.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - AD STYLE */}
			<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
				{/* Subtle background graphic or texture could go here */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0" />

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Service Areas
							</span>
							<span className="text-[#A7C4B5] font-bold text-sm uppercase tracking-widest">
								Clark County, WA
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Vancouver & <br />
							<span className="text-[#FFB800]">Clark County</span> <br />
							Service Areas
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt provides licensed interior remodeling and precision home
							repairs to homeowners throughout Vancouver and surrounding
							communities.
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
							WA Licensed #NORBIL*...
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
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{locations.map((location, index) => (
							<motion.div
								key={location.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.05 }}
							>
								<Link
									href={location.href}
									className={`group relative flex flex-col h-full rounded-3xl p-10 transition-all duration-300 border-b-8 shadow-sm ${
										location.primary
											? "bg-[#1F2E2B] border-[#FFB800] text-white"
											: "bg-white border-transparent hover:border-[#FFB800] hover:shadow-2xl text-[#1F2E2B]"
									}`}
								>
									<MapPin
										className={`w-8 h-8 mb-6 ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
									/>

									<h2 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
										{location.name}
									</h2>

									<p
										className={`font-medium leading-relaxed mb-8 ${location.primary ? "text-[#A7C4B5]" : "text-gray-600"}`}
									>
										{location.description}
									</p>

									<div
										className={`mt-auto inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs transition-all group-hover:gap-4 ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
									>
										View Local Services <ArrowRight className="w-4 h-4" />
									</div>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* MAP PLACEHOLDER / CALL TO ACTION */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Don't See Your <br />{" "}
								<span className="text-[#FFB800]">Location?</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								We primarily serve Clark County, WA. Contact us to see if we can
								accommodate your project in the surrounding areas.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Contact Us
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> 916.508.6272
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100 text-center">
				<p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					Licensed • Bonded • Insured • Professional Clark County Contractor
				</p>
			</section>
		</div>
	);
}
