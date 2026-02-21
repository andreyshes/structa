import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Bath,
	Utensils,
	Sparkles,
	Droplets,
	MapPin,
	CheckCircle,
} from "lucide-react";

export const metadata = {
	title: "Kitchen & Bath Updates Salmon Creek WA | 98686 Home Refresh",
	description:
		"Professional kitchen and bathroom modernizations in Salmon Creek, WA. Specializing in cabinet hardware, fixture swaps, and lighting updates near WSU Vancouver.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-kitchen-bath",
	},
};

export default function SalmonCreekKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Optimized with H1 and Location Context */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1200&auto=format&fit=crop&q=80"
					alt="Modern kitchen hardware and fixture update in Salmon Creek Washington"
					fill
					priority
					className="object-cover opacity-35"
				/>
				<div className="relative z-10 max-w-4xl px-6">
					<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-sm mb-4 block">
						Vancouver WA Home Improvements
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Kitchen & Bath Updates <br className="hidden md:block" />
						in <span className="text-[#A5D6A7]">Salmon Creek, WA</span>
					</h1>
					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Give your 98686 home a designer feel without the 6-month wait. We
						specialize in high-impact updates near WSU Vancouver and Salmon
						Creek Park.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition shadow-xl"
						>
							Request a Free Estimate
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
						<span className="text-white/70 text-sm flex items-center gap-1">
							<MapPin className="w-4 h-4" /> Serving 98686 & 98685
						</span>
					</div>
				</div>
			</section>

			{/* Strategic Content Section - Optimized for Local Keywords */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl font-bold text-[#2C3E3A]">
							Strategic Modernization for Salmon Creek Homeowners
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Many homes in the **Salmon Creek and Felida areas** built in the
							late 90s and 2000s feature great layouts but dated finishes. Our
							"Modernization Package" focuses on high-touch surfaces that
							provide the best ROI for your property value.
						</p>

						<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
							<h3 className="font-bold text-[#2D5A3D] mb-4">
								Popular Salmon Creek Services:
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{[
									"Designer Fixture Swaps",
									"Cabinet Hardware Refresh",
									"Grout & Tile Restoration",
									"Modern LED Lighting",
									"Vanity Top Upgrades",
									"Kitchen Faucet Installs",
								].map((item) => (
									<div
										key={item}
										className="flex items-center gap-2 font-medium text-[#2C3E3A]"
									>
										<CheckCircle className="w-5 h-5 text-[#2D5A3D] flex-shrink-0" />{" "}
										{item}
									</div>
								))}
							</div>
						</div>

						<p className="text-sm italic text-gray-500">
							*Serving neighborhoods near Salmon Creek Elementary and Skyview
							High School.
						</p>
					</div>

					<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60"
							alt="Luxury bathroom faucet and tile update in a Salmon Creek home"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
