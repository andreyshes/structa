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
	title: "Finish Carpentry Mill Plain WA (98684) | Custom Trim & Millwork | Norbilt",
	description:
		"Custom finish carpentry in Mill Plain, WA 98684. Crown molding, wainscoting, board & batten, baseboards, and precision millwork installation. Licensed & insured.",
	alternates: {
		canonical: "https://norbilt.com/locations/mill-plain/finish-carpentry",
	},
	openGraph: {
		title: "Mill Plain Finish Carpentry | Custom Trim & Millwork 98684",
		description:
			"Architectural trim and detailed millwork for Mill Plain homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1595841055318-47db69634f41?w=1400",
			},
		],
	},
};

export default function MillPlainFinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t3.ftcdn.net/jpg/00/59/73/70/240_F_59737006_BId6JE8az7hC3eE8Lu5l4sRn10sn2LY4.jpg"
					alt="Custom crown molding and millwork installation in Mill Plain WA 98684"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Mill Plain • Washington • 98684
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Custom Finish Carpentry
						<span className="block text-[#A5D6A7]">in Mill Plain</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Elevate your home with refined architectural trim, precision
						millwork, and clean, professional installation.
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

			{/* AUTHORITY */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Architectural Trim & Millwork Specialists
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						From Mill Plain homes to surrounding properties, we design
						and install trim packages that add character, dimension, and
						long-term value.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Precision Miters & Seamless Joints",
							"Floor & Surface Protection During Install",
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
								Mill Plain Finish Carpentry Services
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							We transform plain interiors into polished, architectural spaces
							with precision craftsmanship.
						</p>

						<ul className="grid grid-cols-1 gap-4 pt-4">
							{[
								"Custom Crown Molding Installation",
								"Board & Batten Accent Walls",
								"Wainscoting & Panel Molding",
								"Modern Craftsman Door & Window Casing",
								"Tall Baseboard Upgrades",
								"Feature Walls & Decorative Trim",
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
								src="https://t3.ftcdn.net/jpg/16/83/70/40/240_F_1683704094_CaiKKulMUFNizBJqMgLv5wkDRSRwxjyf.jpg"
								alt="Custom trim and wainscoting in Mill Plain Washington home"
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
						Proudly Serving Mill Plain & 98684
					</h3>
					<p className="text-white/80 leading-relaxed">
						We provide finish carpentry services throughout Mill Plain, including
						Fourth Plain, Hough, Central Park, and surrounding Clark
						County neighborhoods.
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

			{/* FAQ */}
			<section className="py-24 bg-white">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Mill Plain Finish Carpentry FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Does trim work increase home value?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. Architectural trim and millwork elevate perceived value and
								improve resale appeal.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Can you match existing trim styles?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Absolutely. We replicate or upgrade existing profiles to
								maintain architectural consistency.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
