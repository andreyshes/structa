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
	title: "Flooring & Subfloor Repair Brush Prairie WA (98606) | Norbilt",
	description:
		"Professional flooring repair in Brush Prairie, WA 98606. Fix squeaky floors, uneven subfloors, hardwood issues, and moisture damage in custom and acreage homes. Licensed & insured.",
	alternates: {
		canonical: "https://norbilt.com/locations/brush-prairie/flooring",
	},
	openGraph: {
		title: "Brush Prairie Flooring Repair | Subfloor & Leveling 98606",
		description:
			"Expert floor leveling, squeak repair, and structural corrections for Brush Prairie homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1581850518616-cee8107f7fd2?w=1400",
			},
		],
	},
};

export default function BrushPrairieFlooringPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t4.ftcdn.net/jpg/04/18/07/53/240_F_418075320_8FUWc7GsdHY5pBK0EreMjciDRWfvYROW.jpg"
					alt="Hardwood and subfloor repair in Brush Prairie Washington 98606"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Brush Prairie • Washington • 98606
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Flooring & Subfloor
						<span className="block text-[#A5D6A7]">
							Repair in Brush Prairie
						</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Restore structural integrity, eliminate squeaks, and correct
						subfloor issues in acreage and custom homes.
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

			{/* STRUCTURAL AUTHORITY */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Structural Flooring Corrections for 98606 Homes
					</h2>

					<p className="text-lg text-[#2C3E3A]/80 max-w-3xl mx-auto">
						Larger properties and rural lots in Brush Prairie can experience
						seasonal expansion and crawlspace moisture. We address subfloor
						movement and leveling issues before they compromise your finished
						flooring.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Subfloor Reinforcement & Fastening",
							"Crawlspace & Moisture-Related Repairs",
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
						Brush Prairie Flooring Repair Services
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Squeaky Floor Repair",
								icon: VolumeX,
								desc: "Secure joists and subfloor to eliminate noise permanently.",
							},
							{
								title: "Moisture & Warping Repair",
								icon: Waves,
								desc: "Correct swelling and buckling caused by humidity.",
							},
							{
								title: "Hardwood & LVP Transitions",
								icon: Layers,
								desc: "Seamless transitions between flooring types.",
							},
							{
								title: "Subfloor Leveling",
								icon: Construction,
								desc: "Correct dips before refinishing or new installs.",
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
						Proudly Serving Brush Prairie & 98606
					</h3>

					<p className="text-[#2C3E3A]/70 mb-10">
						We provide flooring repair throughout Brush Prairie, Hockinson, and
						surrounding Clark County communities.
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
		</div>
	);
}
