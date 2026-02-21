import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Award,
	CheckCircle,
	MapPin,
	Ruler,
	Hammer,
	ShieldCheck,
} from "lucide-react";

export const metadata = {
	title:
		"Finish Carpentry Brush Prairie WA (98606) | Custom Trim & Millwork | Norbilt",
	description:
		"Custom finish carpentry in Brush Prairie, WA 98606. Crown molding, wainscoting, board & batten, baseboards, and precision millwork for acreage and estate homes.",
	alternates: {
		canonical: "https://norbilt.com/locations/brush-prairie/finish-carpentry",
	},
	openGraph: {
		title: "Brush Prairie Finish Carpentry | Custom Trim & Millwork 98606",
		description:
			"Architectural trim and high-end millwork for Brush Prairie homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1595841055318-47db69634f41?w=1400",
			},
		],
	},
};

export default function BrushPrairieFinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t3.ftcdn.net/jpg/16/59/14/24/240_F_1659142470_2U6EhovOIPvOWSd1I1NaIxHR1bxf2L0U.jpg"
					alt="Custom crown molding and trim installation in Brush Prairie WA 98606"
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
						Custom Finish Carpentry
						<span className="block text-[#A5D6A7]">in Brush Prairie</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Refined architectural trim and millwork designed for acreage
						properties and custom homes.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Carpentry Consultation
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Architectural Trim for 98606 Homes
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						Brush Prairie homes often feature spacious layouts and custom design
						elements. Our finish carpentry adds dimension, character, and
						long-term value with precision craftsmanship.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Precision Miters & Seamless Joints",
							"Clean, Protected Installations",
							"Licensed & Insured Washington Contractor",
						].map((item) => (
							<div
								key={item}
								className="flex items-center justify-center gap-3 p-6 bg-[#F8F6F3] rounded-2xl shadow-sm"
							>
								<Award className="text-[#2D5A3D]" />
								<span className="font-semibold">{item}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div>
							<h2 className="text-4xl font-bold mb-4">
								Finish Carpentry Services in Brush Prairie
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							We transform plain interiors into polished, architectural spaces
							with high-end trim packages.
						</p>

						<ul className="grid grid-cols-1 gap-4 pt-4">
							{[
								"Custom Crown Molding Installation",
								"Wainscoting & Panel Molding",
								"Board & Batten Accent Walls",
								"Tall Baseboard Upgrades",
								"Modern Craftsman Casing",
								"Decorative Feature Walls",
							].map((item) => (
								<li
									key={item}
									className="flex items-center gap-3 font-semibold"
								>
									<CheckCircle className="text-[#2D5A3D] w-5 h-5" />
									{item}
								</li>
							))}
						</ul>
					</div>

					<div className="relative group">
						<div className="absolute -inset-4 bg-[#A5D6A7]/20 rounded-[2rem] blur-2xl group-hover:bg-[#A5D6A7]/30 transition" />
						<div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
							<Image
								src="https://images.unsplash.com/photo-1503387762-592dea58ef23?w=1000&auto=format&fit=crop&q=60"
								alt="High-end trim and wainscoting in Brush Prairie home"
								fill
								className="object-cover transition duration-700 group-hover:scale-105"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* LOCAL FOOTPRINT */}
			<section className="bg-[#1F2E2B] text-white py-20 text-center">
				<div className="max-w-4xl mx-auto px-6">
					<h3 className="text-3xl font-bold mb-6">
						Proudly Serving Brush Prairie & 98606
					</h3>
					<p className="text-white/80 leading-relaxed">
						We provide finish carpentry services throughout Brush Prairie,
						Hockinson, and surrounding Clark County communities.
					</p>

					<div className="mt-10">
						<Link
							href="/contact"
							className="inline-block px-10 py-4 bg-[#A5D6A7] text-[#1F2E2B] font-semibold rounded-xl hover:scale-105 transition"
						>
							Schedule Your Carpentry Project
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
