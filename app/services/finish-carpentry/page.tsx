import Link from "next/link";
import Image from "next/image";
import {
	Hammer,
	CheckCircle2,
	ArrowRight,
	Shield,
	Ruler,
	Home,
	Star,
	Maximize,
	PenTool,
	Layers,
	MapPin,
	ShieldCheck,
	Phone,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function FinishCarpentryPage() {
	const services = [
		{
			title: "Crown & High-Profile Base",
			desc: "Upgrade builder-grade trim to bold, architectural crown moulding and baseboards that define your home’s character.",
			icon: Maximize,
		},
		{
			title: "Window & Door Casing",
			desc: "Precision framing for every opening. We handle everything from classic craftsman casings to elaborate pediments.",
			icon: PenTool,
		},
		{
			title: "Wainscoting & Accent Walls",
			desc: "Custom board and batten, picture frame moulding, and traditional beadboard to add depth to any room.",
			icon: Layers,
		},
		{
			title: "Custom Mantels",
			desc: "Create a stunning focal point with a hand-crafted fireplace mantel tailored to your interior style.",
			icon: Home,
		},
		{
			title: "Interior Door Upgrades",
			desc: "Replace hollow-core doors with solid-core millwork for superior sound dampening and a premium feel.",
			icon: Shield,
		},
		{
			title: "Historic Profile Matching",
			desc: "Faithfully replicating existing trim profiles in older homes to ensure seamless, historically accurate repairs.",
			icon: Ruler,
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - ARCHITECTURAL STYLE */}
			<section className="relative min-h-[80vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t3.ftcdn.net/jpg/18/96/12/42/240_F_1896124211_mGn9bJAb0Yq8aTys7VNbElJ63ouM0cjk.jpg"
						alt="Custom finish carpentry and crown moulding installation in Vancouver WA"
						fill
						priority
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3 animate-fade-in-up">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Master Craftsmanship
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase animate-fade-in-left animate-delay-100">
							Finish Carpentry <br />
							<span className="text-[#FFB800]">& Custom Trim</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 animate-fade-in-up animate-delay-200">
							Elevate your home’s character with precision-crafted millwork. We
							specialize in architectural details that transform standard rooms
							into custom spaces across Vancouver and Camas.
						</p>

						<div className="pt-4 animate-fade-in-up animate-delay-300">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Request A Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20 text-white">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<Hammer className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Precision Joinery Guaranteed
						</span>
					</div>
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Licensed WA Contractor
						</span>
					</div>
				</div>
			</section>

			{/* CRAFTSMANSHIP CONTENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Interior Details <br />
								<span className="text-[#2D5A3D]">That Define Your Home</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								Finish carpentry is where construction meets art. At Norbilt, we
								believe the difference is found in the tight miters, seamless
								joints, and perfect reveals. We don't just install trim—we
								increase your property's value through skilled craftsmanship.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Master Miters",
									"Zero Filler Policy",
									"Seamless Coped Joints",
									"Profile Matching",
								].map((item) => (
									<div key={item} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-[10px] uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-[8px] border-[#FFB800]">
								<Star className="absolute right-8 top-8 w-12 h-12 text-[#FFB800]/20" />
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">
									The Norbilt Standard
								</h3>
								<div className="space-y-8">
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Tight Joinery
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											No gaps or excessive wood filler—just clean, professional
											wood-to-wood contact.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Material Expertise
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											From MDF to solid Oak and Hemlock, we treat every species
											with expert care.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Specializations"
						title="Custom Millwork Services"
						description="Architectural details designed to add elegance and structural sophistication."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
						{services.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
							>
								<div className="w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-[#1F2E2B] transition-colors">
									<service.icon className="w-8 h-8 text-[#2D5A3D] group-hover:text-[#FFB800]" />
								</div>
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight mb-4 leading-none">
									{service.title}
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed text-sm">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA - BILLBOARD STYLE */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Transform Your <br />{" "}
								<span className="text-[#FFB800]">Interior Details</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Ready for high-end millwork? Contact Norbilt today for a
								professional carpentry consultation. Let’s give your home the
								finish it deserves.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> 916.508.6272
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SEO FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>WASHOUGAL</span>
					<span>FELIDA</span>
				</div>
			</section>
		</div>
	);
}
