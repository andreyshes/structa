import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Lock,
	Settings2,
	Wind,
	Maximize,
	CheckCircle,
	MapPin,
} from "lucide-react";

export const metadata = {
	title: "Door & Window Repair Salmon Creek WA | Fix Sticking Doors | 98686",
	description:
		"Professional repair for sticking doors, drafty windows, and faulty locks in Salmon Creek, WA. Expert alignment and weatherstripping in the 98686 area.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-door-window-repair",
	},
};

export default function SalmonCreekDoorWindowPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Highlighting Common PNW Problems */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=1200&auto=format&fit=crop&q=80"
					alt="Professional entry door alignment and repair in Salmon Creek WA"
					fill
					priority
					className="object-cover opacity-35"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white">
					<span className="inline-block px-4 py-1 rounded-full bg-[#2D5A3D] text-xs font-bold uppercase tracking-widest mb-4">
						Energy Efficiency & Security
					</span>
					<h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
						Salmon Creek <br />{" "}
						<span className="text-[#A5D6A7]">Door & Window Repair</span>
					</h1>
					<p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
						Stop the drafts and silence the squeaks. We specialize in fixing
						sticking doors and sealing window frames for **98686 and 98685
						homeowners.**
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
						<Link
							href="/contact"
							className="px-10 py-5 bg-[#2D5A3D] hover:bg-[#3d7a52] text-white rounded-xl font-bold text-lg inline-flex items-center gap-2 shadow-2xl transition-all"
						>
							Get a Free Estimate <ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Solutions Grid - Semantic SEO for Repair Tasks */}
			<section className="py-24 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Door Alignment",
								icon: Maximize,
								desc: "Fixing doors that won't latch or drag on the carpet due to settling.",
							},
							{
								title: "Draft Protection",
								icon: Wind,
								desc: "Replacing worn weatherstripping and sealing gaps to lower energy bills.",
							},
							{
								title: "Hardware Prep",
								icon: Lock,
								desc: "Installing smart locks, deadbolts, and handle-sets with precision.",
							},
							{
								title: "Window Trim",
								icon: Settings2,
								desc: "Repairing interior casing and ensuring a tight, moisture-proof seal.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="group p-8 rounded-2xl border border-gray-100 bg-[#F8F6F3] hover:bg-white hover:shadow-xl transition-all"
							>
								<item.icon className="w-10 h-10 text-[#2D5A3D] mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="font-bold text-[#2C3E3A] text-lg mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Specialized Repair Content */}
			<section className="py-20 max-w-5xl mx-auto px-6">
				<div className="bg-[#2C3E3A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
					<div className="relative z-10">
						<h2 className="text-3xl font-bold mb-6">
							Solving Salmon Creek's "Settling" Issues
						</h2>
						<p className="text-lg text-white/80 mb-8">
							In the Pacific Northwest, the shift between wet and dry seasons
							causes timber frames to move. This leads to common issues in Clark
							County homes like:
						</p>

						<div className="grid md:grid-cols-2 gap-4 text-left">
							{[
								"Entry doors that stick in the winter",
								"Sliding glass doors that are hard to pull",
								"Double-hung window balance issues",
								"Loose or misaligned door strikes",
								"Gaps in exterior door sweeps",
								"French door adjustment & leveling",
							].map((text) => (
								<div key={text} className="flex items-center gap-3">
									<CheckCircle className="w-5 h-5 text-[#A5D6A7]" />
									<span className="text-sm md:text-base">{text}</span>
								</div>
							))}
						</div>
					</div>
					<div className="absolute top-0 right-0 w-64 h-64 bg-[#2D5A3D] rounded-full -mr-32 -mt-32 opacity-20" />
				</div>
			</section>

			{/* Local SEO Footer Bar */}
			<section className="py-12 border-t border-gray-200 text-center">
				<p className="text-[#2C3E3A]/60 flex items-center justify-center gap-2">
					<MapPin className="w-4 h-4" /> Trusted Door & Window Specialists near
					**Hwy 99 and Klineline Pond**
				</p>
			</section>
		</div>
	);
}
