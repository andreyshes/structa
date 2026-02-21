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
	title:
		"Kitchen & Bathroom Remodeling Five Corners WA (98662) | Norbilt Homes",
	description:
		"Premium kitchen and bathroom updates in Five Corners, Vancouver WA 98662. Cabinet hardware upgrades, fixture swaps, backsplash installation, and lighting modernization without full demolition.",
	alternates: {
		canonical: "https://norbilt.com/locations/five-corners/kitchen-bath",
	},
	openGraph: {
		title: "Five Corners Kitchen & Bathroom Updates | Vancouver WA 98662",
		description:
			"High-impact kitchen & bath modernization for Five Corners homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1400",
			},
		],
	},
};

export default function FiveCornersKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t3.ftcdn.net/jpg/07/04/19/82/240_F_704198253_i5G7iUjNt6Wwe7PAPhppeuQ2u2EOo3y3.jpg"
					alt="Modern kitchen and bathroom update in Five Corners Vancouver WA 98662"
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
						Premium Kitchen & Bathroom
						<span className="block text-[#A5D6A7]">
							Updates in Five Corners
						</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Modernize your space without full demolition. High-impact kitchen
						and bath upgrades for established 98662 homes.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Free Consultation
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Five Corners Kitchen & Bath Specialists
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						Homes throughout Five Corners often feature solid layouts with dated
						finishes. We focus on strategic modernization — upgrading hardware,
						fixtures, lighting, and surfaces to transform your space
						efficiently.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Licensed & Insured Washington Contractor",
							"Clean Job Sites & Protected Flooring",
							"Precision Installation — No Shortcuts",
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
								Five Corners Kitchen & Bathroom Modernization Services
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							Serving homeowners near NE 117th Ave and throughout Five Corners.
							We upgrade the elements that impact your home’s look and value
							most.
						</p>

						<div className="grid sm:grid-cols-2 gap-6 pt-4">
							{[
								{
									title: "Luxury Faucet & Fixture Installation",
									icon: <Droplets className="w-5 h-5" />,
								},
								{
									title: "Cabinet Hardware Upgrades",
									icon: <Hammer className="w-5 h-5" />,
								},
								{
									title: "Tile & Backsplash Installation",
									icon: <Sparkles className="w-5 h-5" />,
								},
								{
									title: "LED Recessed & Vanity Lighting",
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
								alt="Bathroom update in Five Corners Vancouver WA"
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
						Proudly Serving Five Corners & East Vancouver
					</h3>
					<p className="text-white/80 leading-relaxed">
						We provide kitchen and bathroom updates throughout Five Corners
						(98662), Orchards, Brush Prairie, and surrounding Vancouver WA
						neighborhoods.
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

			{/* FAQ */}
			<section className="py-24 bg-white">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Five Corners Kitchen & Bath FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Do I need a full remodel to modernize my kitchen?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Not always. Strategic upgrades like hardware, backsplash,
								lighting, and fixture replacements can dramatically modernize
								your kitchen at a fraction of full remodel cost.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you serve all of East Vancouver?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. We serve Five Corners (98662), Orchards, Brush Prairie, and
								surrounding Clark County neighborhoods.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
