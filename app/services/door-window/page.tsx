import Link from "next/link";
import Image from "next/image";
import {
	DoorOpen,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Wind,
	Lock,
	Maximize,
	AlertTriangle,
	MapPin,
	ShieldCheck,
	Phone,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DoorWindowPage() {
	const services = [
		{
			title: "Precision Door Alignment",
			desc: "Correcting rubbing, sticking, or latching issues caused by home settling or worn-out hinge sets.",
			icon: Maximize,
		},
		{
			title: "Security Hardware",
			desc: "Installation of high-security deadbolts, smart locks, and reinforced strike plates for total peace of mind.",
			icon: Lock,
		},
		{
			title: "Draft & Weather Sealing",
			desc: "High-performance sweeps and perimeter seals designed to withstand the Pacific Northwest's driving rain.",
			icon: Wind,
		},
		{
			title: "Sliding Door Restoration",
			desc: "Professional track cleaning and roller replacement to restore effortless, one-finger operation.",
			icon: Home,
		},
		{
			title: "Screen & Mesh Repair",
			desc: "Custom rescreening for window and door units to allow ventilation while keeping pests out.",
			icon: Shield,
		},
		{
			title: "Sill & Trim Restoration",
			desc: "Structural repair of exterior casing and sills to stop wood rot before it enters your wall framing.",
			icon: AlertTriangle,
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": [
							{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.norbilt.com" },
							{ "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.norbilt.com/services" },
							{ "@type": "ListItem", "position": 3, "name": "Door & Window Services", "item": "https://www.norbilt.com/services/door-window" }
						]
					}),
				}}
			/>
			<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://t3.ftcdn.net/jpg/17/23/25/44/240_F_1723254432_wPlLS36tIF1dChcencQBJmN7dN177aXG.jpg"
						alt="Professional door and window repair services in Vancouver WA"
						fill
						priority
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#14201D] via-[#14201D]/80 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3 animate-fade-in-up">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Licensed Specialist
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase animate-fade-in-left animate-delay-100">
							Door & Window <br />
							<span className="text-[#FFB800]">Restoration</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 animate-fade-in-up animate-delay-200">
							Stop the drafts and fix the stick. We restore security and energy
							efficiency to your Vancouver home through professional hardware
							adjustments and high-performance weather sealing.
						</p>

						<div className="pt-4 animate-fade-in-up animate-delay-300">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Fix My Doors
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>
						<p className="text-white/60 text-sm font-bold mt-3">
							Need it fixed this week? Call {" "}<a href="tel:+13602169920" className="text-[#FFB800] font-bold hover:underline">(360) 216-9920</a>
						</p>
					</div>
				</div>
			</section>

			{/* BREADCRUMB */}
			<div className="bg-[#FDFCFB] border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
					<Link href="/services" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2D5A3D] hover:text-[#FFB800] transition-colors">
						← All Services
					</Link>
				</div>
			</div>
			{/* AUTHOR & DATE BAR */}
			<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
				<div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
					<a href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</a>
					<span>· WA Licensed General Contractor · NORBILT · Updated June 2026</span>
				</div>
			</div>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Hardware & Lock Specialist
						</span>
					</div>
					<div className="flex items-center gap-3 text-white">
						<MapPin className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Serving All Clark County
						</span>
					</div>
				</div>
			</section>

			{/* VALUE PROP - REPAIR VS REPLACEMENT */}
			<section className="py-24 lg:py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-20 items-center">
						<div className="space-y-8">
							<h2 className="text-4xl lg:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-none">
								Door & Window Repair Cost <br />
								<span className="text-[#2D5A3D]">in Vancouver, WA</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								In the Pacific Northwest, seasonal moisture and natural home
								settling lead to doors that stick and windows that leak heat.
								NORBILT provides professional restoration to correct these
								issues without the high cost of full replacements.
							</p>

							<div className="grid sm:grid-cols-2 gap-4 pt-4">
								{[
									"90% Cost Savings",
									"1-Day Turnaround",
									"Enhanced Security",
									"Energy Efficiency",
								].map((tag) => (
									<div key={tag} className="flex items-center gap-2">
										<CheckCircle2 className="text-[#FFB800] w-5 h-5" />
										<span className="font-black text-xs uppercase tracking-widest text-[#1F2E2B]">
											{tag}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-4 bg-[#F8F6F3] rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-[8px] border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">
									Performance Checklist
								</h3>
								<div className="space-y-8">
									{[
										{
											t: "Mechanical Alignment",
											d: "Squaring frames and tightening hinges for smooth operation.",
										},
										{
											t: "Thermal Protection",
											d: "Replacing brittle seals with high-density weatherstripping.",
										},
										{
											t: "Structural Integrity",
											d: "Inspecting and repairing sills to prevent moisture intrusion.",
										},
									].map((item, i) => (
										<div
											key={i}
											className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6"
										>
											<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
												{item.t}
											</span>
											<p className="text-[#A7C4B5] text-sm font-medium">
												{item.d}
											</p>
										</div>
									))}
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
						eyebrow="Capabilities"
						title="Complete Repair Solutions"
						description="Expert technical service for every opening in your home."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
						{services.map((service, i) => (
							<div
								key={i}
								className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all border-b-4 border-transparent hover:border-[#FFB800] group"
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


			{/* FAQ SECTION */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6">
					<div className="text-center mb-16">
						<span className="text-xs font-black uppercase tracking-widest text-[#2D5A3D]">FAQ</span>
						<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter mt-2">Door & Window FAQ</h2>
						<p className="text-gray-500 mt-4">Common questions about door and window work in Vancouver WA.</p>
					</div>
					<div className="space-y-6">
						{[
							{
								q: "How much does door repair or replacement cost in Vancouver WA?",
								a: "Based on 2026 Clark County rates: door adjustments and weatherstripping run $175–$350, interior door replacement $345–$700 installed, exterior door replacement $690–$1,800 installed, and sliding glass door repair $230–$600. We provide a free written estimate before any work starts.",
							},
							{
								q: "Why is my door sticking or not closing properly?",
								a: "Sticking doors in Clark County are almost always caused by seasonal humidity swelling the wood, or by the house settling and shifting the frame. We diagnose the cause first — if it's humidity, a simple plane and seal fixes it. If it's settling, we re-hang the door to the new frame position.",
							},
							{
								q: "Can you replace just the weatherstripping without replacing the whole door?",
								a: "Yes — replacing weatherstripping is one of the most cost-effective repairs we do. It stops drafts, reduces heating bills, and usually takes under an hour. Most exterior doors in older Clark County homes need this every 5–7 years.",
							},
							{
								q: "Do you install new exterior doors?",
								a: "Yes. We supply and install pre-hung exterior doors including entry doors, French doors, and sliding glass doors. We handle framing adjustments, flashing, caulking, and hardware so the install is watertight and code-compliant.",
							},
							{
								q: "How long does door installation take?",
								a: "A straightforward interior door swap takes 1–2 hours. An exterior pre-hung door installation takes 3–6 hours. If framing work is needed, we'll confirm a timeline during your free estimate.",
							},
							{
								q: "Is your door and window work covered by a warranty?",
								a: "Yes. All NORBILT door and window installations are backed by a 1-year workmanship warranty. If hardware fails, weatherstripping lifts, or any installation issue arises within the warranty period, we come back and fix it at no charge.",
							},
						].map((item, i) => (
							<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
								<h3 className="text-lg font-black text-[#1F2E2B] mb-3">{item.q}</h3>
								<p className="text-gray-600 leading-relaxed">{item.a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			
			{/* RELATED GUIDES */}
			<section className="py-10 bg-[#F8F6F3] border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Related Cost Guides</p>
					<div className="flex flex-wrap gap-x-8 gap-y-3">
						<Link href="/blog/clark-county-home-repair-checklist" className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1">Clark County Home Repair Checklist: 10 Things to Fix <span aria-hidden>→</span></Link>
					<Link href="/blog/home-repairs-before-selling-clark-county-wa" className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1">Home Repairs Before Selling in Clark County WA <span aria-hidden>→</span></Link>
					</div>
				</div>
			</section>

			{/* FINAL CTA - BILLBOARD STYLE */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-[12px] border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Schedule Door & Window Repair <br />{" "}
								<span className="text-[#FFB800]">in Clark County, WA</span>
							</h2>
							<p className="text-[#A7C4B5] text-xl font-medium max-w-xl mx-auto">
								Stop fighting with sticking doors and losing heat. Most minor
								repairs can be quoted with a simple photo.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Fix My Doors
								</Link>
								<Link
									href="tel:+13602169920"
									className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> 360.216.9920
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICE AREA FOOTER STRIP */}
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
		</>
	);
}
