import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Waves,
	VolumeX,
	Layers,
	Construction,
	MapPin,
	CheckCircle,
	ShieldCheck,
} from "lucide-react";

export const metadata = {
	title: "Flooring & Subfloor Repair Five Corners WA (98662) | Norbilt Homes",
	description:
		"Professional flooring repair in Five Corners, Vancouver WA 98662. Fix squeaky floors, moisture damage, LVP transitions, and uneven subfloors. Licensed & insured. Free estimates.",
	alternates: {
		canonical: "https://norbilt.com/locations/five-corners/flooring",
	},
	openGraph: {
		title: "Five Corners Flooring Repair | Vancouver WA 98662",
		description:
			"Expert squeak repair, floor leveling, and subfloor restoration for Five Corners homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1581850518616-cee8107f7fd2?w=1400",
			},
		],
	},
};

export default function FiveCornersFlooringPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t3.ftcdn.net/jpg/02/27/80/80/240_F_227808021_AMBbuFB1yD2esTHqMPDmev3C9Kj3ghah.jpg"
					alt="Subfloor and hardwood floor repair in Five Corners Vancouver WA 98662"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Five Corners • Vancouver WA • 98662
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Flooring & Subfloor
						<span className="block text-[#A5D6A7]">Repair in Five Corners</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Eliminate squeaks, correct uneven floors, and repair moisture
						damage. Professional flooring restoration for 98662 homes.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Flooring Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Structural Floor Restoration Specialists
					</h2>

					<p className="text-lg text-[#2C3E3A]/80 max-w-3xl mx-auto">
						Homes in Five Corners often experience subfloor movement, settling,
						and moisture-related issues due to Pacific Northwest seasonal
						shifts. We address the structural cause — not just surface symptoms.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Subfloor Reinforcement & Fastening",
							"Moisture Damage Mitigation",
							"Precision Floor Leveling",
						].map((item) => (
							<div
								key={item}
								className="flex items-center justify-center gap-3 p-6 bg-[#F8F6F3] rounded-2xl shadow-sm"
							>
								<CheckCircle className="text-[#2D5A3D]" />
								<span className="font-semibold">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Five Corners Flooring Repair Services
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Squeaky Floor Repair",
								icon: VolumeX,
								desc: "Secure subfloor and joists to permanently reduce noise.",
							},
							{
								title: "Moisture & Buckling Repair",
								icon: Waves,
								desc: "Correct swelling, warping, and soft spots.",
							},
							{
								title: "LVP & Hardwood Transitions",
								icon: Layers,
								desc: "Seamless transitions between rooms and flooring types.",
							},
							{
								title: "Subfloor Leveling",
								icon: Construction,
								desc: "Correct dips and uneven surfaces before new installs.",
							},
						].map((s, i) => (
							<div
								key={i}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition group"
							>
								<s.icon className="w-10 h-10 text-[#2D5A3D] mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="font-bold text-lg mb-2">{s.title}</h3>
								<p className="text-sm text-[#2C3E3A]/70">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* LOCAL FOOTPRINT */}
			<section className="py-20 text-center bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<h3 className="text-3xl font-bold mb-6">
						Serving Five Corners & East Vancouver
					</h3>

					<p className="text-[#2C3E3A]/70 mb-10">
						We provide flooring repair services throughout Five Corners (98662),
						Orchards, Brush Prairie, and surrounding Vancouver WA neighborhoods.
					</p>

					<div className="flex justify-center gap-8 text-[#2D5A3D] font-bold">
						<span className="flex items-center gap-2 text-sm">
							<ShieldCheck className="w-4 h-4" /> Licensed
						</span>
						<span className="flex items-center gap-2 text-sm">
							<ShieldCheck className="w-4 h-4" /> Bonded
						</span>
						<span className="flex items-center gap-2 text-sm">
							<ShieldCheck className="w-4 h-4" /> Insured
						</span>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Five Corners Flooring FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Why do floors squeak in older Five Corners homes?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Seasonal expansion and subfloor movement can loosen fasteners
								over time. We properly secure and reinforce the structure to
								reduce noise long-term.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you level floors before new flooring installation?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. Proper subfloor leveling prevents future flooring failure
								and ensures long-term durability.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
