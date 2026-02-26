import Link from "next/link";
import Image from "next/image";
import {
	Wrench,
	CheckCircle2,
	ArrowRight,
	Home,
	Shield,
	Clock,
	Hammer,
	Settings,
	Paintbrush,
	Lightbulb,
	MapPin,
	ShieldCheck,
	Phone,
	Construction,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HandymanPage() {
	const services = [
		{
			icon: Hammer,
			title: "Drywall & Wall Repair",
			desc: "Expert patching, stress crack repair, and texture matching to restore seamless wall surfaces.",
		},
		{
			icon: Lightbulb,
			title: "Fixtures & Smart Home",
			desc: "Professional installation of designer lighting, smart locks, and home security devices.",
		},
		{
			icon: Paintbrush,
			title: "Caulking & Sealing",
			desc: "Kitchen and bath re-caulking and weather-stripping to protect against PNW moisture.",
		},
		{
			icon: Settings,
			title: "Assembly & Mounting",
			desc: "Precision TV wall mounting, floating shelf installation, and complex furniture assembly.",
		},
		{
			icon: Home,
			title: "Interior Trim & Doors",
			desc: "Repairing sticking doors, replacing hinges, and fixing damaged baseboards or casings.",
		},
		{
			icon: Construction,
			title: "Punch List Support",
			desc: "Efficient completion of detailed 'to-do' lists for homeowners and property managers.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000"
						alt="Professional handyman service tools in Vancouver WA"
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
								Licensed General Contractor
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase animate-fade-in-left animate-delay-100">
							Professional <br />
							<span className="text-[#FFB800]">Home Repairs</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 animate-fade-in-up animate-delay-200">
							Expert residential maintenance for Vancouver and Clark County. We
							handle your "to-do" list with professional precision and licensed
							accountability.
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
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Fully Licensed & Bonded
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Clock className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Prompt & Reliable Service
						</span>
					</div>
				</div>
			</section>

			{/* CORE CONTENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Reliable Support <br />
								<span className="text-[#2D5A3D]">For Your Whole Home</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								Finding a dependable handyman shouldn’t be a gamble. Norbilt
								provides professional, detail-focused service that bridges the
								gap between casual labor and large-scale remodeling.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Licensed Accountability",
									"Detail-Oriented Finish",
									"Clear, Fixed Pricing",
									"Local PNW Expertise",
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
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">
									The Norbilt Advantage
								</h3>
								<div className="space-y-8">
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											General Contractor Status
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											Unlike casual handymen, we are a registered WA General
											Contractor, ensuring every small job meets structural
											standards.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Home Value Protection
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											We specialize in the "to-do" lists that prevent minor
											issues from becoming expensive structural failures.
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
						eyebrow="Solutions"
						title="Professional Repair Services"
						description="Expert results for the upgrades that keep your home running smoothly."
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
								Clear Your <br />{" "}
								<span className="text-[#FFB800]">To-Do List</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Get a free, transparent estimate from Vancouver’s trusted local
								professional. Let us handle the details while you relax.
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

			{/* LOCAL AREA FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>BATTLE GROUND</span>
					<span>WASHOUGAL</span>
				</div>
			</section>
		</div>
	);
}
