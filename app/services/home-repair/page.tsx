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
	ShieldCheck,
	Phone,
	Droplets,
	Zap,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

const services = [
	{
		icon: Hammer,
		title: "Drywall & Wall Repair",
		desc: "Hole patching, crack repair, and texture matching so repairs disappear completely.",
	},
	{
		icon: Wrench,
		title: "Fixture & Hardware Updates",
		desc: "Lighting, ceiling fans, door hardware, and functional upgrades throughout the home.",
	},
	{
		icon: Droplets,
		title: "Caulking & Weatherization",
		desc: "Re-caulking, weather-stripping, and exterior sealing to keep moisture and drafts out.",
	},
	{
		icon: Home,
		title: "Door & Window Repairs",
		desc: "Sticking doors, worn hardware, damaged weather seals, and window screen replacements.",
	},
	{
		icon: Zap,
		title: "Safety-Related Fixes",
		desc: "Loose railings, broken locks, unstable fixtures — repairs that protect your household.",
	},
	{
		icon: Shield,
		title: "Punch List & Maintenance",
		desc: "We work through your full to-do list — TV mounting, shelving, assembly, and more.",
	},
];

export default function HomeRepairPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000"
						alt="Home repair services in Vancouver WA by Norbilt"
						fill
						priority
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Licensed General Contractor
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
							Home Repair <br />
							<span className="text-[#FFB800]">Vancouver, WA</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Professional home repair in Clark County done right the first time.
							Our licensed team handles everything from everyday wear and tear to
							moisture damage, safety fixes, and long-term maintenance.
						</p>

						<div className="pt-4">
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
							Same-Week Estimates
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Home className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Serving All of Clark County
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
								Repairs Done <br />
								<span className="text-[#2D5A3D]">Right the First Time</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								When something breaks in your home, a temporary fix isn't
								enough. Norbilt handles interior and exterior repairs with
								construction-grade standards — protecting your property, safety,
								and long-term value.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"Licensed Accountability",
									"Pacific NW Expertise",
									"Clear, Fixed Pricing",
									"Clean Jobsite Guarantee",
								].map((item) => (
									<div key={item} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
										<span className="font-black text-[10px] uppercase tracking-widest text-[#1F2E2B]">
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-8 border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">
									Why Norbilt for Home Repair
								</h3>
								<div className="space-y-8">
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											General Contractor Standards
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											Unlike casual handymen, we are a licensed WA General
											Contractor. Every repair meets state code — which matters
											for insurance and resale.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Root Cause Repairs
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											We fix the underlying issue, not just the symptom.
											Small fixes done right now stop large repair bills later.
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
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Fix"
						title="Home Repair Services"
						description="Interior and exterior solutions built for Clark County homeowners."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
						{services.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#FFB800]"
							>
								<div className="w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#1F2E2B] transition-colors">
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

			{/* FAQ */}
			<section className="py-24 bg-white">
				<div className="max-w-4xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="FAQ"
						title="Home Repair FAQ"
						description="Common questions from Clark County homeowners."
					/>
					<div className="mt-16 space-y-6">
						{[
							{
								q: "What types of home repairs do you handle?",
								a: "We handle a wide range of repairs including drywall patching, fixture and hardware replacement, door and window repairs, caulking and weatherization, safety-related fixes, and general maintenance punch lists. Most repairs are completed in a single visit.",
							},
							{
								q: "Do I need a licensed contractor for home repairs in Washington?",
								a: "In Washington State, repair work above a set dollar threshold requires a licensed contractor. Hiring a registered WA General Contractor like Norbilt protects you legally, ensures work meets code, and keeps your homeowner's insurance intact. Unlicensed repair work can affect both your coverage and future resale value.",
							},
							{
								q: "How much do home repairs cost in Vancouver WA?",
								a: "Cost depends on the scope of work. We provide free, written estimates before any work begins so there are no surprises. Our pricing is fair for licensed, insured work throughout Vancouver, Camas, and Clark County.",
							},
							{
								q: "How quickly can you schedule a repair?",
								a: "We offer same-week estimates for most home repair jobs in Clark County. Once you submit your project details, we'll confirm availability and get a site visit on the calendar as soon as possible.",
							},
						].map((item, i) => (
							<div
								key={i}
								className="border border-gray-100 rounded-2xl p-8 bg-[#FDFCFB]"
							>
								<h3 className="text-lg font-black text-[#1F2E2B] mb-3">
									{item.q}
								</h3>
								<p className="text-gray-600 font-medium leading-relaxed">
									{item.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-12 border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Fix It Right. <br />
								<span className="text-[#FFB800]">Fix It Once.</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Get a free, transparent estimate from Vancouver's licensed home
								repair team. We handle the details so you don't have to.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
								</Link>
								<a
									href="tel:+13602169920"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> (360) 216-9920
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* LOCAL AREA STRIP */}
			<section className="py-12 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					<span>VANCOUVER</span>
					<span>CAMAS</span>
					<span>RIDGEFIELD</span>
					<span>BATTLE GROUND</span>
					<span>WASHOUGAL</span>
					<span>SALMON CREEK</span>
					<span>HAZEL DELL</span>
				</div>
			</section>
		</div>
	);
}
