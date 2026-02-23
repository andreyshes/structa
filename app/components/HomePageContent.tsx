"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	Wrench,
	Hammer,
	Paintbrush,
	Home,
	Lightbulb,
	TreeDeciduous,
	Shield,
	Heart,
	Sparkles,
	ArrowRight,
	CheckCircle2,
	MapPin,
	Star,
	Phone,
	Construction,
	Award,
	Clock,
} from "lucide-react";

import ServiceCard from "@/app/components/ServiceCard";
import SectionHeader from "@/app/components/SectionHeader";
import HomeFaqSection from "@/app/components/HomeFaqSection";

export default function HomePageContent() {
	const { scrollY } = useScroll();
	const heroRef = useRef<HTMLElement>(null);
	const heroEndRef = useRef(800);

	useEffect(() => {
		const updateHeroEnd = () => {
			if (heroRef.current) {
				heroEndRef.current = heroRef.current.offsetHeight;
			}
		};
		updateHeroEnd();
		window.addEventListener("resize", updateHeroEnd);
		return () => window.removeEventListener("resize", updateHeroEnd);
	}, []);

	const buttonOpacity = useTransform(scrollY, (value) => {
		const h = heroEndRef.current;
		if (value < h) return 0;
		if (value > h + 200) return 1;
		return (value - h) / 200;
	});

	const buttonScale = useTransform(scrollY, (value) => {
		const h = heroEndRef.current;
		if (value < h) return 0.8;
		if (value > h + 200) return 1;
		return 0.8 + 0.2 * ((value - h) / 200);
	});

	const pointerEvents = useTransform(scrollY, (value) =>
		value > heroEndRef.current ? "auto" : "none",
	);

	const services = [
		{
			icon: Hammer,
			title: "Custom Finish Carpentry",
			description:
				"Premium installation of baseboards, crown molding, and wainscoting. Our carpentry services enhance the structural beauty of your Vancouver home.",
		},
		{
			icon: Wrench,
			title: "Home Repair & Maintenance",
			description:
				"Expert drywall repair, door adjustments, and hardware installation. We handle the small repairs and major maintenance tasks that other contractors overlook.",
		},
		{
			icon: Paintbrush,
			title: "Kitchen & Bath Remodeling",
			description:
				"Full kitchen and bathroom upgrades, including backsplash installation, fixture replacement, and cabinet hardware refreshes to increase home value.",
		},
		{
			icon: Home,
			title: "Door & Window Installation",
			description:
				"Professional installation of interior doors, custom trim replacement, and weather-sealing services for residential properties in Clark County.",
		},
		{
			icon: Lightbulb,
			title: "Electrical & Plumbing Fixtures",
			description:
				"Safe installation of ceiling fans, modern lighting, and plumbing fixtures. We ensure all home upgrades are installed cleanly and meet local safety codes.",
		},
		{
			icon: Construction,
			title: "Interior Construction Repairs",
			description:
				"Addressing structural integrity through siding repair, deck restoration, and specialized wood-rot repair to protect your interior investment.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* Mobile Fixed CTA */}
			<motion.div
				initial={{ opacity: 0 }}
				style={{
					opacity: buttonOpacity,
					scale: buttonScale,
					pointerEvents: pointerEvents as any,
					left: "50%",
					x: "-50%",
				}}
				className="fixed bottom-6 z-50 w-[90%] md:hidden"
			>
				<Link
					href="/contact"
					className="flex items-center justify-center gap-3 bg-[#FFB800] text-black font-black py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-2 border-white uppercase text-sm tracking-widest"
				>
					<Phone className="w-4 h-4" />
					Call For Free Estimate
				</Link>
			</motion.div>

			{/* HERO SECTION */}
			<section
				ref={heroRef}
				className="relative min-h-screen flex items-center overflow-hidden"
			>
				<div className="absolute inset-0">
					<Image
						src="/bathroom.jpg.png"
						alt="Licensed General Contractor in Vancouver WA performing home repairs and kitchen remodeling"
						fill
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-64 md:pb-40">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex flex-wrap items-center gap-4"
						>
							<span className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#FFB800] text-black text-xs font-black uppercase tracking-[0.2em] shadow-lg">
								Verified General Contractor
							</span>
							<span className="inline-flex items-center gap-2 text-white font-bold text-sm drop-shadow-md">
								<MapPin className="w-5 h-5 text-[#FFB800]" />
								SERVING VANCOUVER, CAMAS & CLARK COUNTY
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl"
						>
							Your Trusted{" "}
							<span className="text-[#FFB800]">General Contractor</span> <br />
							in Vancouver, WA
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-2xl md:text-4xl font-extrabold text-white tracking-tight border-l-8 border-[#FFB800] pl-6 py-2 drop-shadow-lg"
						>
							EXPERT HOME REMODELING & INTERIOR REPAIR
						</motion.h2>

						<p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium drop-shadow-md">
							Norbilt provides high-quality home repair, professional
							installation, and comprehensive remodeling services. As a licensed
							Washington contractor, we bring precision to every renovation
							project.
						</p>

						<div className="flex flex-col sm:flex-row gap-5 pt-8">
							<Link
								href="/contact"
								className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-b from-[#FFD700] to-[#CC9900] text-[#1F2E2B] rounded-xl font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all border-b-4 border-[#997300]"
							>
								Get Your Free Estimate
								<ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* SEO DEPTH SECTION: THE AUTHORITY BLOCK */}
			<section className="py-24 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-3 gap-12 items-start">
						<div className="lg:col-span-2 space-y-6">
							<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Vancouver's Premier Choice for Home Improvement
							</h2>
							<p className="text-lg text-gray-700 leading-relaxed">
								When searching for a{" "}
								<strong>general contractor in Vancouver, WA</strong>, homeowners
								need a partner who understands the specific structural needs of
								Pacific Northwest homes. At Norbilt, we specialize in{" "}
								<strong>interior remodeling</strong> and{" "}
								<strong>structural home repairs</strong> that protect your
								investment. Whether you are dealing with drywall damage,
								outdated kitchen fixtures, or need a complete finish carpentry
								overhaul, our team delivers licensed, bonded, and insured
								expertise.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								Our approach to <strong>construction and remodeling</strong> is
								built on transparency. Unlike large-scale firms that lose track
								of the details, Norbilt focuses on precision{" "}
								<strong>installation</strong>
								and high-quality <strong>home repairs</strong>. We handle
								everything from <strong>window replacement</strong>
								to <strong>bathroom renovations</strong>, ensuring that every
								project meets the highest standards of local craftsmanship in
								Clark County.
							</p>
						</div>
						<div className="bg-[#F8F6F3] p-8 rounded-3xl border-2 border-[#FFB800]/20">
							<h3 className="text-xl font-black mb-4 uppercase">
								Core Service Areas
							</h3>
							<ul className="space-y-3 font-bold text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Kitchen
									Remodeling
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Bathroom
									Updates
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Finish
									Carpentry
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Drywall &
									Interior Repair
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Door &
									Window Install
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Custom
									Mill Work
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES SECTION */}
			<section className="py-32 bg-[#E8E4DE]/50">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Expertise"
						title="General Contractor Services"
						description="Specializing in home repairs, custom installations, and high-end remodeling for residential properties."
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{services.map((s, i) => (
							<ServiceCard key={s.title} {...s} index={i} />
						))}
					</div>
				</div>
			</section>

			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="bg-[#1F2E2B] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
						<div className="lg:w-1/2 relative h-96 lg:h-auto">
							{/* RECOMMENDED: Replace with your actual project photo */}
							<Image
								src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669"
								alt="Precision finish carpentry and interior repair in Vancouver WA"
								fill
								className="object-cover"
							/>
							{/* Visual Badge to make the image feel purposeful */}
							<div className="absolute top-6 left-6 bg-[#FFB800] text-black font-black px-4 py-2 rounded-lg text-xs uppercase tracking-widest shadow-xl">
								The Norbilt Standard
							</div>
						</div>
						<div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
							<h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-8">
								Precision <span className="text-[#FFB800]">Repair</span> &
								Quality <span className="text-[#FFB800]">Installation</span>
							</h2>
							<p className="text-[#A7C4B5] text-lg leading-relaxed mb-6">
								Home maintenance is more than just fixing what's broken; it's
								about enhancing your living space. As a local{" "}
								<strong>Vancouver general contractor</strong>, we specialize in
								identifying the root cause of <strong>home damage</strong> and
								providing long-term
								<strong>repair solutions</strong>.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
								<div className="space-y-2">
									<h4 className="text-[#FFB800] font-black uppercase text-sm flex items-center gap-2">
										<Wrench className="w-4 h-4" /> Repair Services
									</h4>
									<p className="text-white/70 text-sm">
										Expert drywall patching, texture matching, and structural
										wood-rot repair.
									</p>
								</div>
								<div className="space-y-2">
									<h4 className="text-[#FFB800] font-black uppercase text-sm flex items-center gap-2">
										<Hammer className="w-4 h-4" /> New Installation
									</h4>
									<p className="text-white/70 text-sm">
										Modernizing your home with custom flooring, trim, and
										premium fixtures.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* LOCAL REACH SECTION */}
			<section className="py-24 bg-[#FDFCFB]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Vancouver & Beyond"
						title="Serving All of Clark County"
						centered
					/>
					<p className="max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
						We are proud to be the preferred <strong>contractor</strong> for
						homeowners throughout Southwest Washington. Our service area covers{" "}
						<strong>
							Vancouver, Camas, Washougal, Ridgefield, Battle Ground, and La
							Center
						</strong>
						. Whether you need a <strong>remodeling expert</strong>
						in Cascade Park or a <strong>handyman</strong> in Felida, Norbilt is
						ready to help.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							"Camas",
							"Ridgefield",
							"Washougal",
							"Battle Ground",
							"Salmon Creek",
							"Minnehaha",
						].map((city) => (
							<span
								key={city}
								className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-500 shadow-sm"
							>
								{city}, WA
							</span>
						))}
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative">
						<div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-[#FDFCFB]">
							<Image
								src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=2670"
								alt="High-quality construction and interior remodel in Vancouver"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-8 -right-8 bg-[#1F2E2B] p-10 rounded-2xl shadow-2xl border-b-8 border-[#FFB800]">
							<div className="flex items-center gap-2 mb-2">
								<p className="text-[#FFB800] font-black text-6xl">5.0</p>
								<div className="h-12 w-[2px] bg-white/20 mx-2" />
							</div>
							<div className="flex gap-1 mb-2">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-[#FFB800] text-[#FFB800]"
									/>
								))}
							</div>
							<p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-black italic">
								Clark County's Top Rated
							</p>
						</div>
					</div>
					<div>
						<SectionHeader
							eyebrow="The Norbilt Difference"
							title="A Better Construction Experience"
							description="Hiring a general contractor should be simple. We provide clear communication and master-level craftsmanship."
							centered={false}
						/>
						<div className="space-y-10 mt-12">
							{[
								{
									icon: Shield,
									title: "Licensed & Accountable",
									description:
										"As a fully licensed, bonded, and insured Washington general contractor, we protect you and your home.",
								},
								{
									icon: Award,
									title: "Precision Craftsmanship",
									description:
										"We specialize in the high-end details that typical repair services miss, from millwork to flawless paint prep.",
								},
								{
									icon: Clock,
									title: "Reliable Scheduling",
									description:
										"We respect your time. Our projects are completed on schedule with clear daily progress updates.",
								},
							].map((item, i) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.15 }}
									className="flex gap-6 group"
								>
									<div className="shrink-0 w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#FFB800] transition-all duration-300">
										<item.icon className="w-8 h-8 text-[#2D5A3D] group-hover:text-black transition-colors" />
									</div>
									<div>
										<h3 className="text-xl font-black text-[#1F2E2B] mb-2 uppercase tracking-tight">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed font-medium">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<HomeFaqSection />

			{/* FOOTER STRIP */}
			<section className="py-12 bg-[#14201D] text-center text-xs md:text-sm font-black text-[#A7C4B5] uppercase tracking-[0.4em] px-4">
				Licensed Washington General Contractor #NORBIR**741CS • Bonded & Insured
				• Serving Vancouver & Camas
			</section>
		</div>
	);
}
