import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Waves,
	VolumeX,
	Layers,
	Construction,
	MapPin,
} from "lucide-react";

export const metadata = {
	title:
		"Professional Flooring Repair Vancouver WA | Subfloor & Trim | Norbilt Homes",
	description:
		"Expert flooring repairs in Vancouver, WA. We fix subfloor squeaks, moisture damage, transition issues, and trim adjustments across Clark County and Hazel Dell.",
};

const flooringServices = [
	{
		title: "Subfloor Squeak Correction",
		desc: "Eliminate annoying pops and creaks caused by seasonal shifting or poor original fastening.",
		icon: VolumeX,
	},
	{
		title: "Moisture & Buckling",
		desc: "Repairing separation and swelling caused by Vancouver's high humidity and seasonal changes.",
		icon: Waves,
	},
	{
		title: "Transitions & Trim",
		desc: "Fixing loose threshold strips and matching baseboards for a seamless look between rooms.",
		icon: Layers,
	},
	{
		title: "Subfloor Leveling",
		desc: "Correcting minor dips and high spots before you install new luxury vinyl or laminate.",
		icon: Construction,
	},
];

export default function VancouverFlooringPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* --- HERO SECTION --- */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1581850518616-cee8107f7fd2?w=1200&auto=format&fit=crop&q=80"
					alt="Modern hardwood flooring installation and repair in Vancouver"
					fill
					priority
					className="object-cover opacity-30"
				/>
				<div className="relative z-10 max-w-4xl px-6">
					<span className="text-[#4A7C59] font-bold tracking-widest uppercase text-sm mb-4 block">
						Vancouver, WA Flooring Specialists
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Quiet, Level, and{" "}
						<span className="text-[#4A7C59]">Perfectly Finished</span> Floors.
					</h1>
					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
						From subfloor squeak removal to precision trim adjustments, we
						restore the integrity of your home's foundation.
					</p>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-lg"
					>
						Get a Flooring Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* --- PROBLEM/SOLUTION SECTION --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="https://t4.ftcdn.net/jpg/00/67/82/47/240_F_67824766_OARyBAhL2BOeJbBdn6iTbYw6NGZKu7J9.jpg"
							alt="Handyman checking floor level and subfloor quality"
							fill
							className="object-cover"
						/>
					</div>
					<div className="space-y-8">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A]">
							Does Your Floor Feel{" "}
							<span className="italic text-[#2D5A3D]">Tired?</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							In the Pacific Northwest, moisture and seasonal humidity cycles
							take a toll on your home. Over time, subfloors expand and
							contract, leading to **persistent squeaks**, **gapping
							transitions**, and **loose trim**.
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Norbilt Homes specializes in the technical "fixes" that general
							flooring companies often overlook. We don't just hide problems; we
							address the subfloor movement and structural details that keep
							your floors quiet and stable for years.
						</p>

						<div className="pt-4 flex flex-wrap gap-4 text-sm font-semibold">
							<span className="px-4 py-2 bg-white rounded-full border border-[#E8E4DE] shadow-sm italic">
								"No more squeaks."
							</span>
							<span className="px-4 py-2 bg-white rounded-full border border-[#E8E4DE] shadow-sm italic">
								"Perfect transitions."
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* --- SERVICES GRID --- */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-4">
							Common Flooring Fixes
						</h2>
						<p className="text-[#2C3E3A]/60 max-w-xl mx-auto">
							Expert repairs for Hazel Dell, Salmon Creek, and the greater
							Vancouver area.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{flooringServices.map((service, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-6" />
								<h3 className="text-lg font-bold mb-3 text-[#2C3E3A]">
									{service.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- SERVICE AREAS --- */}
			<section className="py-20 bg-white border-y border-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
						<MapPin className="text-[#2D5A3D]" /> Serving Clark County
					</h2>
					<div className="flex flex-wrap justify-center gap-6 text-[#2C3E3A]/70">
						{[
							"Orchards",
							"Salmon Creek",
							"Hazel Dell",
							"Five Corners",
							"Felida",
							"Fisher's Landing",
						].map((area) => (
							<span
								key={area}
								className="hover:text-[#2D5A3D] cursor-default transition-colors"
							>
								{area}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* --- FINAL CTA --- */}
			<section className="py-28 bg-[#2C3E3A] text-center text-white relative overflow-hidden">
				<div className="relative z-10 max-w-3xl mx-auto px-6">
					<h2 className="text-3xl md:text-5xl font-bold mb-8">
						Ready to fix those floor squeaks?
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Contact Norbilt Homes today for a professional assessment and a
						clear estimate.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-2xl font-bold"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
