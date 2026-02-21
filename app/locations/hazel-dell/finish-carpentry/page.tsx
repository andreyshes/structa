import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Award,
	CheckCircle,
	MapPin,
	Ruler,
	Hammer,
} from "lucide-react";

export const metadata = {
	title:
		"Finish Carpentry Hazel Dell WA (98665) | Custom Trim & Millwork | Norbilt Homes",
	description:
		"Expert finish carpentry in Hazel Dell, Vancouver WA 98665. Custom crown molding, baseboards, wainscoting, board & batten, and precision trim installation. Licensed & insured.",
	alternates: {
		canonical: "https://norbilt.com/locations/hazel-dell-finish-carpentry",
	},
	openGraph: {
		title: "Hazel Dell Finish Carpentry | Custom Trim & Millwork 98665",
		description:
			"Architectural trim and millwork upgrades for Hazel Dell homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1503387762-592dea58ef23?w=1400",
			},
		],
	},
};

export default function HazelDellFinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t4.ftcdn.net/jpg/06/66/83/07/240_F_666830706_QSyt816I33CldVcTHzDgUG681EgjOmB1.jpg"
					alt="Custom finish carpentry and crown molding installation in Hazel Dell Vancouver WA 98665"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Hazel Dell • Vancouver WA • 98665
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Custom Finish Carpentry
						<span className="block text-[#A5D6A7]">in Hazel Dell</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Elevate your home with precision trim, custom millwork, and
						architectural upgrades designed for established 98665 interiors.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Finish Carpentry Quote
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-6">
						Architectural Trim & Millwork Specialists
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						From mid-century ranch homes near 78th Street to modern properties
						throughout Hazel Dell, our finish carpentry adds refined detail and
						lasting value.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Precision Miters & Seamless Joints",
							"Clean Installations & Protected Flooring",
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

			{/* SERVICES SECTION */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<div>
							<h2 className="text-4xl font-bold mb-4">
								Finish Carpentry Services in Hazel Dell
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							We design and install custom trim packages that transform plain
							interiors into polished, architectural spaces.
						</p>

						<ul className="grid grid-cols-1 gap-4 pt-4">
							{[
								"Custom Crown Molding Installation",
								"Board & Batten Accent Walls",
								"Modern Craftsman Door & Window Casing",
								"Tall Baseboard & Trim Upgrades",
								"Wainscoting & Panel Molding",
								"Feature Walls & Decorative Millwork",
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
								src="https://t4.ftcdn.net/jpg/11/11/33/47/240_F_1111334745_KZwtmNi2agjaIl8ItZYGSyKT1avKrvTS.jpg"
								alt="Custom trim and millwork in Hazel Dell Washington home"
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
						Proudly Serving Hazel Dell & Clark County
					</h3>
					<p className="text-white/80 leading-relaxed">
						We provide custom trim and finish carpentry throughout Hazel Dell
						(98665), Vancouver WA, and nearby neighborhoods including Minnehaha,
						Salmon Creek, and Felida.
					</p>
					<div className="mt-10">
						<Link
							href="/contact"
							className="inline-block px-10 py-4 bg-[#A5D6A7] text-[#1F2E2B] font-semibold rounded-xl hover:scale-105 transition"
						>
							Schedule Your Carpentry Consultation
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<section className="py-24 bg-white">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Hazel Dell Finish Carpentry FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Does trim work increase home value?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. Architectural trim and millwork add perceived value,
								elevate interior design, and improve resale appeal.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you match existing trim styles?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Absolutely. We can replicate or upgrade existing profiles to
								maintain architectural consistency in your home.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
