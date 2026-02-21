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
	title: "Kitchen & Bathroom Remodeling Hazel Dell WA (98665) | Norbilt Homes",
	description:
		"Premium kitchen and bathroom updates in Hazel Dell, Vancouver WA 98665. Cabinet hardware upgrades, fixture swaps, backsplash installation, and lighting modernization without full demolition.",
	alternates: {
		canonical: "https://norbilt.com/locations/hazel-dell-kitchen-bath",
	},
	openGraph: {
		title: "Hazel Dell Kitchen & Bathroom Updates | Vancouver WA 98665",
		description:
			"High-impact kitchen & bath modernization for Hazel Dell homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1400",
			},
		],
	},
};

export default function HazelDellKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1400&auto=format&fit=crop&q=80"
					alt="Luxury kitchen and bathroom update in Hazel Dell Vancouver WA 98665"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Hazel Dell • Vancouver WA • 98665
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Premium Kitchen & Bathroom
						<span className="block text-[#A5D6A7]">Updates in Hazel Dell</span>
					</h1>

					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
						Upgrade your space without full demolition. We modernize kitchens
						and bathrooms in Hazel Dell with precision craftsmanship, designer
						finishes, and clean execution.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all shadow-2xl hover:scale-105"
						>
							Request Free Consultation
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>

						<Link
							href="/services"
							className="px-8 py-4 border border-white/30 text-white rounded-xl hover:bg-white/10 transition"
						>
							View All Services
						</Link>
					</div>
				</div>
			</section>

			{/* TRUST / AUTHORITY */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-6">
						Hazel Dell Kitchen & Bath Specialists
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						Most 98665 homes have strong layouts but outdated finishes. Instead
						of expensive tear-outs, we focus on high-impact upgrades that
						modernize your space efficiently and cost-effectively.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Licensed & Insured in Washington",
							"Clean Job Sites & Protected Flooring",
							"Precision Installations — No Shortcuts",
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
								Hazel Dell Kitchen & Bathroom Modernization Services
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							Serving homeowners near Hwy 99, 78th Street, and throughout Hazel
							Dell. We upgrade the elements that date your home most — hardware,
							lighting, fixtures, and surfaces.
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
								alt="Bathroom remodel update in Hazel Dell Washington"
								fill
								className="object-cover transition duration-700 group-hover:scale-105"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* LOCAL AREA SECTION */}
			<section className="bg-[#1F2E2B] text-white py-20">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h3 className="text-3xl font-bold mb-6">
						Proudly Serving Hazel Dell & Clark County
					</h3>

					<p className="text-white/80 leading-relaxed">
						We serve homeowners throughout Hazel Dell, Vancouver WA, and
						surrounding Clark County neighborhoods including Salmon Creek,
						Felida, and areas near Luke Jensen Sports Park.
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
						Hazel Dell Kitchen & Bath FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Do I need a full remodel to modernize my kitchen?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								No. Strategic upgrades like hardware, backsplash, lighting, and
								fixture replacements can dramatically improve your space without
								full demolition.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you serve all of Vancouver WA?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. We work throughout Hazel Dell (98665), Salmon Creek,
								Felida, and nearby neighborhoods.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
