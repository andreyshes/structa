import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Lock,
	Wind,
	Maximize,
	MapPin,
	CheckCircle,
	ShieldCheck,
} from "lucide-react";

export const metadata = {
	title:
		"Door & Window Repair Five Corners WA (98662) | Alignment & Draft Fix | Norbilt",
	description:
		"Professional door alignment and window repair in Five Corners, Vancouver WA 98662. Fix sticking doors, drafts, weatherstripping, and lock issues. Licensed & insured. Free estimates.",
	alternates: {
		canonical: "https://norbilt.com/locations/five-corners/door-window",
	},
	openGraph: {
		title: "Five Corners Door & Window Repair | Vancouver WA 98662",
		description:
			"Expert door adjustments, draft sealing, and hardware repair for Five Corners homeowners.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=1400",
			},
		],
	},
};

export default function FiveCornersDoorWindowPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* HERO */}
			<section className="relative pt-44 pb-40 flex items-center justify-center text-center bg-[#1F2E2B]">
				<Image
					src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=1400&auto=format&fit=crop&q=80"
					alt="Door alignment and window sealing repair in Five Corners Vancouver WA 98662"
					fill
					priority
					className="object-cover opacity-35"
				/>

				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="inline-flex items-center gap-2 bg-[#A5D6A7]/10 border border-[#A5D6A7]/20 px-4 py-2 rounded-full mb-6">
						<MapPin className="w-4 h-4 text-[#A5D6A7]" />
						<span className="text-[#A5D6A7] font-bold tracking-widest uppercase text-xs">
							Five Corners • Vancouver WA • 98662
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Door & Window
						<span className="block text-[#A5D6A7]">Repair in Five Corners</span>
					</h1>

					<p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
						Fix sticking doors, eliminate drafts, and restore proper sealing.
						Precision adjustments for established 98662 homes.
					</p>

					<Link
						href="/contact"
						className="group px-10 py-5 bg-[#2D5A3D] hover:bg-[#3d7a52] text-white rounded-xl font-bold text-lg inline-flex items-center gap-2 shadow-2xl hover:scale-105 transition-all"
					>
						Request Repair Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* AUTHORITY SECTION */}
			<section className="py-20 bg-white text-center">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-4xl font-bold mb-6">
						Precision Door & Window Adjustments
					</h2>

					<p className="text-lg text-[#2C3E3A]/80 max-w-3xl mx-auto">
						Foundation movement and Pacific Northwest seasonal shifts can cause
						doors to drag and windows to leak air. We diagnose alignment issues
						and correct them properly — not just temporarily.
					</p>

					<div className="grid md:grid-cols-3 gap-8 mt-14">
						{[
							"Accurate Door Re-Hanging & Shim Adjustments",
							"Energy-Efficient Sealing & Weatherproofing",
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

			{/* SERVICES GRID */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<h2 className="text-4xl font-bold text-center mb-14">
						Five Corners Door & Window Services
					</h2>

					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition group">
							<Maximize className="w-10 h-10 text-[#2D5A3D] mx-auto mb-4 group-hover:scale-110 transition-transform" />
							<h3 className="font-bold mb-2">Door Alignment</h3>
							<p className="text-sm text-[#2C3E3A]/70">
								Fix doors that rub, drag, or fail to latch due to settling.
							</p>
						</div>

						<div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition group">
							<Wind className="w-10 h-10 text-[#2D5A3D] mx-auto mb-4 group-hover:scale-110 transition-transform" />
							<h3 className="font-bold mb-2">Weatherstripping & Sealing</h3>
							<p className="text-sm text-[#2C3E3A]/70">
								Stop drafts and improve energy efficiency in your 98662 home.
							</p>
						</div>

						<div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition group">
							<Lock className="w-10 h-10 text-[#2D5A3D] mx-auto mb-4 group-hover:scale-110 transition-transform" />
							<h3 className="font-bold mb-2">Lock & Hardware Service</h3>
							<p className="text-sm text-[#2C3E3A]/70">
								Install deadbolts, smart locks, and handle-sets with precision.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* LOCAL FOOTPRINT */}
			<section className="py-20 text-center bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<h3 className="text-3xl font-bold mb-6">
						Serving Five Corners & East Vancouver
					</h3>

					<p className="text-[#2C3E3A]/70 mb-10">
						We provide door and window repair throughout Five Corners (98662),
						Orchards, Brush Prairie, and surrounding Clark County neighborhoods.
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
						Five Corners Door & Window FAQs
					</h2>

					<div className="space-y-10">
						<div>
							<h3 className="font-semibold text-lg">
								Why do doors stick in Five Corners homes?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Seasonal expansion and foundation settling can shift door frames
								slightly. Proper re-alignment corrects the issue long-term.
							</p>
						</div>

						<div>
							<h3 className="font-semibold text-lg">
								Can sealing windows reduce energy costs?
							</h3>
							<p className="text-[#2C3E3A]/70 mt-2">
								Yes. Proper weatherstripping reduces air leakage and improves
								overall energy efficiency.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
