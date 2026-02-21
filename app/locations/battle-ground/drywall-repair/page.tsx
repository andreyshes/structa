import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Grid,
	Paintbrush,
	Eraser,
	MapPin,
	CheckCircle,
	ShieldCheck,
} from "lucide-react";

export const metadata = {
	title:
		"Drywall Repair Battle Ground WA (98604) | Texture Matching & Ceiling Repair | Norbilt",
	description:
		"Professional drywall repair in Battle Ground, WA 98604. We patch holes, repair cracks, fix ceiling water damage, and match Orange Peel or Knockdown textures with seamless results.",
	alternates: {
		canonical: "https://norbilt.com/locations/battle-ground/drywall-repair",
	},
	openGraph: {
		title: "Battle Ground Drywall Repair & Texture Matching | 98604",
		description:
			"Invisible drywall patching and ceiling repair for Battle Ground homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1400",
			},
		],
	},
};

export default function BattleGroundDrywallRepairPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://t4.ftcdn.net/jpg/18/67/27/17/240_F_1867271727_h9Ts79CNB5dxtiBEge2xou3CT00IViLO.jpg"
					alt="Professional drywall patching and ceiling repair in Battle Ground WA 98604"
					fill
					priority
					className="object-cover opacity-30"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Battle Ground • Washington • 98604
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Expert Drywall Repair
						<span className="block text-[#A5D6A7]">in Battle Ground</span>
					</h1>

					<p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
						Invisible patching, seamless texture blending, and professional
						ceiling restoration for 98604 homes.
					</p>

					<Link
						href="/contact"
						className="group px-10 py-5 bg-[#2D5A3D] hover:bg-[#3d7a52] transition-all rounded-xl font-bold inline-flex items-center gap-2 mx-auto w-fit shadow-2xl hover:scale-105"
					>
						Request Drywall Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Precision Texture Matching for Battle Ground Homes
					</h2>

					<p className="text-lg text-[#2C3E3A]/80 max-w-3xl mx-auto">
						Many Battle Ground properties feature Orange Peel or Knockdown textures. Our
						blending technique ensures the repair disappears into your existing
						walls or ceilings.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Dust-Controlled Work Environment",
							"Feathered Edges & Smooth Transitions",
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

			{/* TEXTURE SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-14">
						Texture Matching Services in 98604
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
						{[
							{
								title: "Orange Peel Texture",
								icon: Grid,
								desc: "Blended spray texture for seamless wall repairs.",
							},
							{
								title: "Knockdown Texture",
								icon: Paintbrush,
								desc: "Hand-finished texture common in Battle Ground homes.",
							},
							{
								title: "Smooth Wall Finish",
								icon: Eraser,
								desc: "Perfect feathering for modern interiors.",
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition group"
							>
								<item.icon className="w-10 h-10 text-[#2D5A3D] mx-auto mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="font-bold text-lg mb-2">{item.title}</h3>
								<p className="text-sm text-[#2C3E3A]/70">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* LOCAL */}
			<section className="py-20 text-center bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<h3 className="text-3xl font-bold mb-6">
						Proudly Serving Battle Ground & 98604
					</h3>

					<p className="text-[#2C3E3A]/70 mb-10">
						We provide drywall repair throughout Battle Ground, including Meadow
						Glade, Lewisville, Dollars Corner, and surrounding Clark County
						neighborhoods.
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
						Battle Ground Drywall Repair FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Can drywall patches be made invisible?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. With proper feathering, sanding, and texture matching,
								repairs are typically undetectable once painted.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Do you repair ceiling water damage?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Absolutely. We remove damaged drywall, replace sections
								properly, and blend the ceiling texture seamlessly.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
