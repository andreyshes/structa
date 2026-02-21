import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	MapPin,
	Sparkles,
	Hammer,
	Droplets,
	Lightbulb,
} from "lucide-react";

export const metadata = {
	title: "Kitchen & Bathroom Remodeling Brush Prairie WA (98606) | Norbilt",
	description:
		"Premium kitchen and bathroom updates in Brush Prairie, WA 98606. Custom backsplash installation, fixture upgrades, cabinet refinishing, and modern interior improvements for estate and acreage homes.",
	alternates: {
		canonical: "https://norbilt.com/locations/brush-prairie/kitchen-bath",
	},
	openGraph: {
		title: "Brush Prairie Kitchen & Bath Updates | 98606 Remodeling",
		description:
			"High-end kitchen and bathroom upgrades for Brush Prairie homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1400",
			},
		],
	},
};

export default function BrushPrairieKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t3.ftcdn.net/jpg/06/02/78/12/240_F_602781256_SskzC28cnuv9lVmj6JRstfxNWzJGcyL7.jpg"
					alt="Luxury kitchen remodel in Brush Prairie Washington 98606"
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
						Elevated Kitchen & Bathroom
						<span className="block text-[#A5D6A7]">
							Updates in Brush Prairie
						</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Refined upgrades for custom homes and acreage properties. Designer
						finishes, precision installation, and modern enhancements without
						full demolition.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Consultation
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Modernizing Brush Prairie Homes
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						From estate properties near Hockinson to custom homes throughout
						Brush Prairie, we focus on high-impact kitchen and bathroom upgrades
						that enhance both aesthetic appeal and long-term value.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Premium Finish Selections",
							"Clean, Detail-Oriented Installation",
							"Licensed & Insured Washington Contractor",
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

			{/* SERVICES */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<div className="space-y-8">
						<div>
							<h2 className="text-4xl font-bold mb-4">
								Kitchen & Bath Upgrade Services in 98606
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							We focus on high-impact design elements that transform your space
							while preserving your home’s structural integrity.
						</p>

						<div className="grid sm:grid-cols-2 gap-6 pt-4">
							{[
								{
									title: "Luxury Faucet & Fixture Installation",
									icon: <Droplets className="w-5 h-5" />,
								},
								{
									title: "Custom Cabinet Hardware",
									icon: <Hammer className="w-5 h-5" />,
								},
								{
									title: "Designer Tile & Backsplash",
									icon: <Sparkles className="w-5 h-5" />,
								},
								{
									title: "Modern LED Lighting",
									icon: <Lightbulb className="w-5 h-5" />,
								},
							].map((item) => (
								<div
									key={item.title}
									className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-stone-100"
								>
									<span className="text-[#2D5A3D] mt-1">{item.icon}</span>
									<span className="font-semibold">{item.title}</span>
								</div>
							))}
						</div>
					</div>

					<div className="relative group">
						<div className="absolute -inset-4 bg-[#A5D6A7]/20 rounded-[2rem] blur-2xl group-hover:bg-[#A5D6A7]/30 transition" />
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=60"
								alt="Bathroom upgrade in Brush Prairie Washington"
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
						We serve Brush Prairie, Hockinson, and surrounding Clark County
						communities with professional kitchen and bathroom modernization
						services.
					</p>

					<div className="mt-10">
						<Link
							href="/contact"
							className="inline-block px-10 py-4 bg-[#A5D6A7] text-[#1F2E2B] font-semibold rounded-xl hover:scale-105 transition"
						>
							Schedule Your Upgrade Consultation
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
