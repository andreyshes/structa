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
	title: "Professional Handyman Services Ridgefield WA (98642) | Norbilt",
	description:
		"Reliable handyman services in Ridgefield, WA 98642. Drywall repair, trim work, door adjustments, fixture installation, and general home maintenance. Licensed & insured.",
	alternates: {
		canonical: "https://norbilt.com/locations/ridgefield/handyman",
	},
	openGraph: {
		title: "Ridgefield Handyman Services | 98642 Home Repairs",
		description:
			"Detail-oriented handyman repairs and home maintenance for Ridgefield homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1400",
			},
		],
	},
};

export default function RidgefieldHandymanPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1400&auto=format&fit=crop&q=80"
					alt="Professional handyman working in Ridgefield Washington 98642"
					fill
					priority
					className="object-cover opacity-35"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Ridgefield • Washington • 98642
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Professional Handyman
						<span className="block text-[#A5D6A7]">Services in Ridgefield</span>
					</h1>

					<p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
						Detail-oriented repairs and maintenance for Ridgefield homeowners. Clean
						work. Reliable scheduling. High-quality results.
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
						Serving Ridgefield & 98642
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-6">
						Ridgefield Home Repair & Maintenance Services
					</h2>
					<p className="max-w-3xl mx-auto text-lg text-[#2C3E3A]/80">
						We provide professional handyman services tailored to the needs of
						Ridgefield homeowners — from small repairs to detailed finish work.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Drywall Repair & Patching",
							icon: <Hammer />,
						},
						{
							title: "Fixture & Hardware Installation",
							icon: <Wrench />,
						},
						{
							title: "Door & Window Adjustments",
							icon: <Home />,
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
							title: "General Home Maintenance",
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
						Proudly Serving Ridgefield & 98642
					</h3>
					<p className="text-white/80 leading-relaxed">
						We serve Ridgefield neighborhoods including Abrams Park,
						Discovery Ridge, Pioneer Canyon, and surrounding Clark County communities.
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

			{/* FAQ */}
			<section className="py-24 bg-white">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Ridgefield Handyman FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Do you serve all of Ridgefield?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. We provide handyman services throughout Ridgefield (98642) and
								nearby Clark County neighborhoods.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Are you licensed and insured?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Absolutely. Norbilt is fully licensed and insured in Washington
								State.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
