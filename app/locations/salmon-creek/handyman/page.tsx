import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	ShieldCheck,
	Hammer,
	Clock,
	MapPin,
	Wrench,
	Home,
	Star,
} from "lucide-react";

export const metadata = {
	title: "Top-Rated Handyman Salmon Creek WA | Repairs & Maintenance 98686",
	description:
		"Licensed Salmon Creek handyman services. Expert home repairs, drywall, fence repair, and door installs near Salmon Creek Park and WSU Vancouver. Licensed & Insured.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-handyman",
	},
};

export default function SalmonCreekHandymanPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Optimized for Local Intent */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1200&auto=format&fit=crop&q=80"
					alt="Professional handyman performing home repairs in Salmon Creek WA"
					fill
					priority
					className="object-cover opacity-35"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white text-center">
					<div className="flex items-center justify-center gap-2 mb-4">
						<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
						<span className="uppercase tracking-widest text-sm font-bold text-[#A5D6A7]">
							Professional Salmon Creek Home Repairs
						</span>
						<Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						Handyman Services <br /> in{" "}
						<span className="text-[#A5D6A7]">Salmon Creek</span>
					</h1>
					<p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
						Get the precision of a custom home builder for your everyday home
						repairs. Serving the **98686 and 98685** communities with pride.
					</p>
					<div className="flex flex-col items-center gap-6">
						<Link
							href="/contact"
							className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl"
						>
							Get a Fast Estimate{" "}
							<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
						</Link>
						<p className="text-sm text-white/70">
							Typical response time: Under 24 hours
						</p>
					</div>
				</div>
			</section>

			{/* Trust Signals Bar - Critical for Conversion */}
			<section className="py-12 bg-white border-b border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-[#2C3E3A] font-semibold">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#2D5A3D] w-6 h-6" /> Licensed &
						Insured (WA #NORBI**)
					</div>
					<div className="flex items-center gap-3">
						<Clock className="text-[#2D5A3D] w-6 h-6" /> Punctual & Professional
					</div>
					<div className="flex items-center gap-3">
						<MapPin className="text-[#2D5A3D] w-6 h-6" /> Salmon Creek Native
						Pro
					</div>
				</div>
			</section>

			{/* Service Semantic Grid - Helps Crawlers find specific keywords */}
			<section className="py-20 max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-4">
						What Can We Fix Today?
					</h2>
					<p className="text-[#2C3E3A]/70">
						Reliable handyman solutions for Clark County homeowners.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Drywall & Paint",
							desc: "Patching, texture matching, and scuff repair near 134th St.",
						},
						{
							title: "Carpentry",
							desc: "Door adjustments, trim repair, and shelving installations.",
						},
						{
							title: "Outdoor Maintenance",
							desc: "Fence repair and deck staining in Salmon Creek neighborhoods.",
						},
						{
							title: "Assembly",
							desc: "Furniture, gym equipment, and playset assembly services.",
						},
						{
							title: "Mounting",
							desc: "Art, TV wall mounts, and heavy mirror hanging.",
						},
						{
							title: "Plumbing/Electrical",
							desc: "Minor fixture swaps, leak repairs, and outlet updates.",
						},
					].map((service) => (
						<div
							key={service.title}
							className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
						>
							<CheckCircle className="w-8 h-8 text-[#2D5A3D] mb-4" />
							<h3 className="text-xl font-bold text-[#2C3E3A] mb-2">
								{service.title}
							</h3>
							<p className="text-gray-600">{service.desc}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
