import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Waves,
	VolumeX,
	Layers,
	Construction,
	ShieldCheck,
	MapPin,
} from "lucide-react";

export const metadata = {
	title: "Flooring Repair Salmon Creek WA | Fix Squeaks & Subfloors | 98686",
	description:
		"Expert flooring repairs in Salmon Creek, WA. We fix subfloor squeaks, LVP transitions, and moisture damage in homes near Hwy 99 and 134th St. Free estimates.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-flooring-repair",
	},
};

export default function SalmonCreekFlooringPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Location & Problem Focused */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1581850518616-cee8107f7fd2?w=1200&auto=format&fit=crop&q=80"
					alt="Professional hardwood and subfloor repair service in Salmon Creek Washington"
					fill
					priority
					className="object-cover opacity-30"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white">
					<span className="inline-block px-4 py-1 rounded-full bg-[#2D5A3D] text-xs font-bold uppercase tracking-widest mb-4">
						Clark County's Flooring Specialists
					</span>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight leading-tight">
						Salmon Creek <br />{" "}
						<span className="text-[#A5D6A7]">Flooring Repair</span>
					</h1>
					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Eliminating frustrating squeaks and restoring damaged finishes for
						homes near **Klineline Pond, Hwy 99, and the 134th St corridor.**
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="px-8 py-4 bg-[#2D5A3D] hover:bg-[#3d7a52] transition-colors rounded-xl font-bold flex items-center gap-2 shadow-lg"
						>
							Fix My Floors Today <ArrowRight className="w-5 h-5" />
						</Link>
						<div className="flex items-center gap-2 text-sm text-white/80">
							<MapPin className="w-4 h-4 text-[#A5D6A7]" /> Serving 98686 &
							98685
						</div>
					</div>
				</div>
			</section>

			{/* Structured Services Grid - Optimized for Semantic Search */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-12 text-center md:text-left">
						<h2 className="text-3xl font-bold text-[#2C3E3A] mb-2">
							Targeted Floor Restoration
						</h2>
						<p className="text-[#2C3E3A]/70">
							Professional solutions for common Pacific Northwest flooring
							issues.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								title: "Squeak Removal",
								icon: VolumeX,
								desc: "We silence noisy subfloors and loose floorboards in older Salmon Creek homes.",
							},
							{
								title: "PNW Moisture Fix",
								icon: Waves,
								desc: "Specialized repair for cupping, buckling, and moisture-related expansion.",
							},
							{
								title: "Seamless Transitions",
								icon: Layers,
								desc: "Expert threshold repairs between LVP, tile, and hardwood areas.",
							},
							{
								title: "Subfloor Leveling",
								icon: Construction,
								desc: "Correcting dips and uneven spots to prepare for your new flooring install.",
							},
						].map((s, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#2D5A3D] transition-all group"
							>
								<s.icon className="w-12 h-12 text-[#2D5A3D] mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="font-bold text-xl text-[#2C3E3A] mb-3">
									{s.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{s.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Local Authority Section */}
			<section className="py-16 max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-2xl font-bold text-[#2C3E3A] mb-6 italic underline decoration-[#2D5A3D]">
					Why Norbilt for Salmon Creek Floors?
				</h2>
				<p className="text-lg text-gray-700 leading-relaxed mb-8">
					In the 98686 area, humidity fluctuations can cause significant
					movement in wood and laminate floors. As a local builder, we
					understand the local climate's impact on your home's foundation and
					finish work. Whether you're in a classic home near **Salmon Creek
					Park** or a modern build near **Legacy Salmon Creek Medical Center**,
					we provide durable, permanent repairs.
				</p>
				<div className="flex justify-center gap-8 text-[#2D5A3D] font-bold">
					<span className="flex items-center gap-1">
						<ShieldCheck /> Licensed
					</span>
					<span className="flex items-center gap-1">
						<ShieldCheck /> Bonded
					</span>
					<span className="flex items-center gap-1">
						<ShieldCheck /> Insured
					</span>
				</div>
			</section>
		</div>
	);
}
