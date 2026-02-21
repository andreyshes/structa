import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	ShieldCheck,
	Clock,
	MapPin,
	CheckCircle,
	Hammer,
	Wrench,
	Home,
} from "lucide-react";

export const metadata = {
	title: "Professional Handyman Services Brush Prairie WA (98606) | Norbilt",
	description:
		"Reliable handyman services in Brush Prairie, WA 98606. Drywall repair, trim work, fixture installation, door adjustments, and general home maintenance for custom and acreage homes.",
	alternates: {
		canonical: "https://norbilt.com/locations/brush-prairie/handyman",
	},
	openGraph: {
		title: "Brush Prairie Handyman Services | 98606 Home Repairs",
		description:
			"Detail-oriented handyman repairs and home maintenance for Brush Prairie homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1400",
			},
		],
	},
};

export default function BrushPrairieHandymanPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1400&auto=format&fit=crop&q=80"
					alt="Professional handyman working in Brush Prairie Washington 98606"
					fill
					priority
					className="object-cover opacity-35"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Brush Prairie • Washington • 98606
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Professional Handyman
						<span className="block text-[#A5D6A7]">
							Services in Brush Prairie
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
						Dependable repairs and maintenance for acreage, custom, and estate
						homes throughout 98606.
					</p>

					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold shadow-2xl hover:scale-105"
					>
						Request Free Estimate
						<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* TRUST BAR */}
			<section className="py-14 bg-white border-b border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-8 font-semibold">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#2D5A3D]" />
						Licensed & Insured in Washington
					</div>
					<div className="flex items-center gap-3">
						<Clock className="text-[#2D5A3D]" />
						Reliable Scheduling
					</div>
					<div className="flex items-center gap-3">
						<MapPin className="text-[#2D5A3D]" />
						Serving Brush Prairie & 98606
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-6">
						Home Repair & Maintenance in Brush Prairie
					</h2>
					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80">
						From small interior fixes to exterior repairs, we provide skilled
						handyman services tailored to larger homes and rural properties.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Drywall Repair & Patching",
							icon: <Hammer />,
						},
						{
							title: "Door & Window Adjustments",
							icon: <Home />,
						},
						{
							title: "Fixture & Hardware Installation",
							icon: <Wrench />,
						},
						{
							title: "Trim & Finish Carpentry",
							icon: <Hammer />,
						},
						{
							title: "Fence & Exterior Repairs",
							icon: <Wrench />,
						},
						{
							title: "General Property Maintenance",
							icon: <Home />,
						},
					].map((item) => (
						<div
							key={item.title}
							className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition"
						>
							<div className="text-[#2D5A3D] mb-4">{item.icon}</div>
							<h3 className="font-semibold text-lg">{item.title}</h3>
						</div>
					))}
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
						communities with professional, reliable handyman services.
					</p>

					<div className="mt-10">
						<Link
							href="/contact"
							className="inline-block px-10 py-4 bg-[#A5D6A7] text-[#1F2E2B] font-semibold rounded-xl hover:scale-105 transition"
						>
							Schedule Your Service
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
