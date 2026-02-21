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
	title: "Kitchen & Bathroom Remodeling Camas WA (98607) | Norbilt",
	description:
		"Premium kitchen and bathroom updates in Camas, WA 98607. Designer fixture upgrades, backsplash installation, cabinet refinements, and luxury finish improvements without full demolition.",
	alternates: {
		canonical: "https://norbilt.com/locations/camas/kitchen-bath",
	},
	openGraph: {
		title: "Camas Kitchen & Bathroom Updates | 98607 Remodeling",
		description: "Refined kitchen and bath modernization for Camas homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1400",
			},
		],
	},
};

export default function CamasKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t4.ftcdn.net/jpg/04/71/11/19/240_F_471111915_nZY23ebXV5D6RIXujHt5j5PH97Z5PSZa.jpg"
					alt="Luxury kitchen remodel update in Camas Washington 98607"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Camas • Washington • 98607
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Elevated Kitchen & Bathroom
						<span className="block text-[#A5D6A7]">Updates in Camas</span>
					</h1>

					<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
						Refined upgrades for discerning homeowners. Designer finishes,
						precision installation, and modern enhancements — without full
						demolition.
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
						Camas Kitchen & Bath Modernization Specialists
					</h2>

					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80 leading-relaxed">
						From downtown Camas homes to properties near Lacamas Lake, we
						enhance interiors with thoughtful upgrades that elevate aesthetic
						value and long-term performance.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Premium Finish Selections",
							"Clean, Detail-Oriented Installations",
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
								Camas Kitchen & Bathroom Upgrade Services
							</h2>
							<div className="h-1.5 w-20 bg-[#2D5A3D] rounded-full" />
						</div>

						<p className="text-lg text-[#2C3E3A]/80 leading-relaxed">
							We focus on high-impact elements that transform your space without
							requiring a full renovation.
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
									title: "Designer Backsplash Installation",
									icon: <Sparkles className="w-5 h-5" />,
								},
								{
									title: "Modern LED & Accent Lighting",
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
								alt="Bathroom upgrade in Camas Washington home"
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
						Proudly Serving Camas & 98607
					</h3>
					<p className="text-white/80 leading-relaxed">
						We serve Camas neighborhoods including Downtown Camas, Lacamas Lake,
						Prune Hill, and surrounding Clark County areas.
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
						Camas Kitchen & Bath FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Do I need a full remodel to modernize my kitchen?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Not always. Strategic upgrades like lighting, hardware,
								backsplash, and fixture updates can dramatically modernize your
								space.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you serve all of Camas?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. We serve Camas (98607) and surrounding Clark County
								neighborhoods.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
