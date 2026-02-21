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
	title:
		"Kitchen & Bath Updates Vancouver WA | Modern Refinements | Norbilt Homes",
	description:
		"High-impact kitchen and bathroom updates in Vancouver, WA. We specialize in fixture upgrades, cabinet hardware, and interior detailing across Clark County.",
};

const updateServices = [
	{
		title: "Fixture Modernization",
		desc: "Replacing outdated faucets, showerheads, and lighting with modern, water-efficient designs.",
		icon: Droplets,
	},
	{
		title: "Cabinet Refinement",
		desc: "Updating hinges and hardware, and installing pull-out organizers for a high-end feel.",
		icon: Sparkles,
	},
	{
		title: "Bathroom Essentials",
		desc: "New towel bars, curved shower rods, and vanity updates that refresh the space instantly.",
		icon: Bath,
	},
	{
		title: "Kitchen Detailing",
		desc: "Adding trim work, tile repairs, and modernizing the 'touch-points' of your daily kitchen use.",
		icon: Utensils,
	},
];

export default function VancouverKitchenBathPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* --- HERO SECTION --- */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1556912177-c548537c8a2c?w=1200&auto=format&fit=crop&q=80"
					alt="Modern kitchen update with new fixtures and hardware in Vancouver"
					fill
					priority
					className="object-cover opacity-35"
				/>
				<div className="relative z-10 max-w-4xl px-6">
					<span className="text-[#4A7C59] font-bold tracking-widest uppercase text-sm mb-4 block">
						Smart Home Modernization
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Refresh Your Space. <br />
						<span className="text-[#4A7C59]">Without the Remodel.</span>
					</h1>
					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
						High-impact updates for Vancouver kitchens and bathrooms that
						elevate your home's value without the massive renovation timeline.
					</p>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-xl"
					>
						Request an Update Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* --- THE PHILOSOPHY SECTION --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A]">
							Value-Driven{" "}
							<span className="text-[#2D5A3D]">Interior Refinements.</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Not every kitchen needs a complete teardown to feel new. Many
							homes in **Salmon Creek** and **Felida** feature solid layouts
							that just need a aesthetic "reboot."
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Norbilt Homes focuses on the high-touch details—hardware, plumbing
							fixtures, and custom trim—that modernize your most-used rooms in
							days, not months. We handle the technical installation so you get
							a designer result without the designer price tag.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
							{[
								"Minimal Disruption",
								"Professional Plumbing Fits",
								"Clean Job Sites",
								"Detail-Oriented Finish",
							].map((item) => (
								<div
									key={item}
									className="flex items-center gap-2 font-medium text-[#2C3E3A]"
								>
									<CheckCircle className="w-5 h-5 text-[#2D5A3D]" /> {item}
								</div>
							))}
						</div>
					</div>
					<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60"
							alt="Luxury bathroom fixture installation"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* --- SERVICES GRID --- */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-4">
							Targeted Modernization
						</h2>
						<p className="text-[#2C3E3A]/60">
							Elevate your daily experience in Vancouver's most essential rooms.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{updateServices.map((service, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#2D5A3D]/20"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-6" />
								<h3 className="text-lg font-bold mb-3 text-[#2C3E3A]">
									{service.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- DIAGRAM / VISUAL AID --- */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h3 className="text-2xl font-bold mb-6 text-[#2C3E3A]">
						High-Impact Update Areas
					</h3>

					<p className="mt-6 text-[#2C3E3A]/60 max-w-2xl mx-auto italic">
						Focusing on the "Golden Triangle"—the sink, stove, and fridge
						areas—with updated fixtures and lighting provides the highest return
						on investment.
					</p>
				</div>
			</section>

			{/* --- SERVICE AREAS --- */}
			<section className="py-20 bg-[#F8F6F3] border-y border-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-[#2C3E3A]">
						<MapPin className="text-[#2D5A3D]" /> Serving Clark County Homes
					</h2>
					<div className="flex flex-wrap justify-center gap-6 text-[#2C3E3A]/70 font-medium">
						{[
							"Hazel Dell",
							"Vancouver",
							"Felida",
							"Salmon Creek",
							"Five Corners",
							"Camas",
						].map((area) => (
							<span
								key={area}
								className="hover:text-[#2D5A3D] transition-colors"
							>
								{area}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* --- FINAL CTA --- */}
			<section className="py-28 bg-[#2C3E3A] text-center text-white">
				<div className="max-w-3xl mx-auto px-6">
					<h2 className="text-3xl md:text-5xl font-bold mb-8">
						Start Your Refresh Today
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Professional kitchen and bath updates that respect your time and
						your budget.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-2xl font-bold text-lg"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
