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
} from "lucide-react";

import ServiceCard from "@/app/components/ServiceCard";
import SectionHeader from "@/app/components/SectionHeader";
import HomeFaqSection from "@/app/components/HomeFaqSection";

export default function HomePageContent() {
	// SCROLL LOGIC: Monitor scroll progress to show button after Hero
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

	// buttonOpacity: Starts at 0, becomes 1 after scrolling past hero
	const buttonOpacity = useTransform(scrollY, (value) => {
		const h = heroEndRef.current;
		if (value < h) return 0;
		if (value > h + 200) return 1;
		return (value - h) / 200;
	});
	// buttonScale: Starts at 0.8, becomes 1 for a "pop-in" effect
	const buttonScale = useTransform(scrollY, (value) => {
		const h = heroEndRef.current;
		if (value < h) return 0.8;
		if (value > h + 200) return 1;
		return 0.8 + 0.2 * ((value - h) / 200);
	});
	// pointerEvents: Ensures the button isn't clickable while invisible
	const pointerEvents = useTransform(scrollY, (value) =>
		value > heroEndRef.current ? "auto" : "none",
	);

	const services = [
		{
			icon: Hammer,
			title: "Finish Carpentry & Mill Work",
			description:
				"Premium installation of baseboards, crown molding, and custom wainscoting throughout Vancouver, WA.",
		},
		{
			icon: Wrench,
			title: "Handyman & Interior Repairs",
			description:
				"Drywall repair, door adjustments, hardware installs, and punch-list completion handled professionally.",
		},
		{
			icon: Paintbrush,
			title: "Kitchen & Bathroom Upgrades",
			description:
				"Backsplashes, cabinet hardware refreshes, and fixture upgrades that add value without full remodels.",
		},
		{
			icon: Home,
			title: "Doors & Windows",
			description:
				"Interior door installation, trim replacement, and weather-sealing for Clark County homes.",
		},
		{
			icon: Lightbulb,
			title: "Fixtures & Lighting",
			description:
				"Ceiling fans, lighting, plumbing fixtures, and smart upgrades installed cleanly and correctly.",
		},
		{
			icon: TreeDeciduous,
			title: "Selective Exterior Repairs",
			description:
				"Exterior repairs such as siding, deck, and wood-rot work related to interior protection and home integrity.",
		},
	];

	const testimonials = [
		{
			name: "Daniel R.",
			location: "Vancouver, WA",
			rating: 5,
			text: "Norbilt handled our trim, drywall, and repairs flawlessly. Clean, professional, and detail-driven.",
		},
		{
			name: "Melissa K.",
			location: "Brush Prairie, WA",
			rating: 5,
			text: "Having one professional handle everything made our kitchen refresh stress-free.",
		},
		{
			name: "Aaron L.",
			location: "Five Corners, WA",
			rating: 5,
			text: "Excellent craftsmanship. The finish work completely elevated our space.",
		},
		{
			name: "Rebecca S.",
			location: "Camas, WA",
			rating: 5,
			text: "Respectful, organized, and highly skilled. Our go-to interior contractor.",
		},
	];

	const whyChoose = [
		{
			icon: Shield,
			title: "Licensed, Bonded & Insured",
			description:
				"A fully registered Washington contractor providing professional accountability and total peace of mind.",
		},
		{
			icon: Heart,
			title: "Local Vancouver Craftsmanship",
			description:
				"Based in Vancouver and serving all of Clark County with transparent pricing and dependable local service.",
		},
		{
			icon: Sparkles,
			title: "Clean & Detail-Oriented",
			description:
				"We respect your living space with strict dust control, tidy job sites, and precision finishes.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
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
					Get A Free Estimate
				</Link>
			</motion.div>

			{/* HERO SECTION - FLASHY AD STYLE */}
			<section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src="/bathroom.jpg.png"
						alt="Vancouver WA Home Remodeling Contractor performing interior renovations"
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
								Verified Specialist
							</span>
							<span className="inline-flex items-center gap-2 text-white font-bold text-sm drop-shadow-md">
								<MapPin className="w-5 h-5 text-[#FFB800]" />
								VANCOUVER & CLARK COUNTY, WA
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl"
						>
							Licensed General Contractor <br />
							in{" "}
							<span className="text-[#FFB800]">Vancouver & Clark County</span>,
							WA
						</motion.h1>

						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="text-2xl md:text-4xl font-extrabold text-white tracking-tight border-l-8 border-[#FFB800] pl-6 py-2 drop-shadow-lg"
						>
							QUALITY REMODELS & RELIABLE SERVICE
						</motion.h2>

						<p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium drop-shadow-md">
							Norbilt is your licensed local expert for precision interior work.
							We specialize in the details that make your home feel new again.
						</p>

						<div className="flex flex-col sm:flex-row gap-5 pt-8">
							<Link
								href="/contact"
								className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-b from-[#FFD700] to-[#CC9900] text-[#1F2E2B] rounded-xl font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all border-b-4 border-[#997300]"
							>
								Get A Free Quote
								<ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
							</Link>
							<Link
								href="/services"
								className="inline-flex items-center justify-center px-10 py-6 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
							>
								Our Services
							</Link>
						</div>
					</div>
				</div>

				{/* FLOATING TRUST BAR */}
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#14201D] to-[#1F2E2B] border-t-4 border-[#FFB800]/50 py-8 z-20">
					<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
						<div className="flex items-center gap-4">
							<div className="p-3 bg-[#FFB800]/10 rounded-lg border border-[#FFB800]/20">
								<Home className="w-8 h-8 text-[#FFB800]" />
							</div>
							<div>
								<p className="text-white font-black text-xl leading-none uppercase tracking-tight">
									Licensed & Bonded
								</p>
								<p className="text-[#A7C4B5] font-bold text-sm uppercase tracking-widest italic">
									WA General Contractor
								</p>
							</div>
						</div>

						<div className="hidden xl:flex items-center gap-12 text-white/20 font-black italic text-3xl tracking-tighter">
							<span className="hover:text-white transition-colors">
								DEPENDABLE
							</span>
							<span className="text-[#FFB800]">•</span>
							<span className="hover:text-white transition-colors">
								DETAILED
							</span>
							<span className="text-[#FFB800]">•</span>
							<span className="hover:text-white transition-colors">LOCAL</span>
						</div>

						<div className="flex items-center gap-4">
							<div className="text-right">
								<p className="text-white font-black text-2xl leading-none tracking-tighter">
									NORBILT
								</p>
								<p className="text-[#A7C4B5] font-bold text-sm uppercase tracking-widest">
									Renovations
								</p>
							</div>
							<div className="w-12 h-12 border-2 border-[#FFB800] rounded-lg flex items-center justify-center bg-[#FFB800]/5">
								<CheckCircle2 className="w-7 h-7 text-[#FFB800]" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES SECTION */}
			<section className="py-32 bg-[#E8E4DE]/50">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="What We Do"
						title="Professional Interior Services"
						description="From high-end finish carpentry to kitchen refreshes, we deliver clean, precise results."
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{services.map((s, i) => (
							<ServiceCard key={s.title} {...s} index={i} />
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
								src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=2670&auto=format&fit=crop"
								alt="Precision interior remodeling work"
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
								Vancouver Top Rated
							</p>
						</div>
					</div>
					<div>
						<SectionHeader
							eyebrow="The Norbilt Standard"
							title="A Better Remodeling Experience"
							description="One skilled professional. Clean execution. Reliable results."
							centered={false}
						/>
						<div className="space-y-10 mt-12">
							{whyChoose.map((item, i) => (
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

			{/* TESTIMONIALS */}
			<section className="py-32 bg-[#1F2E2B] overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
					<SectionHeader
						eyebrow="Local Reputation"
						title="Trusted by Clark County Homeowners"
						light
					/>
				</div>
				<div className="relative flex">
					<motion.div
						className="flex gap-6 pr-6"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: 40,
								ease: "linear",
							},
						}}
					>
						{[...testimonials, ...testimonials].map((t, i) => (
							<div
								key={i}
								className="min-w-[350px] md:min-w-[450px] bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 flex flex-col justify-between"
							>
								<div>
									<div className="flex gap-1 mb-6">
										{[...Array(t.rating)].map((_, star) => (
											<Star
												key={star}
												className="w-5 h-5 fill-[#FFB800] text-[#FFB800]"
											/>
										))}
									</div>
									<p className="text-xl text-white font-medium italic leading-relaxed mb-8">
										"{t.text}"
									</p>
								</div>
								<div className="flex items-center gap-4 border-t border-white/10 pt-6">
									<div className="w-14 h-14 bg-[#FFB800] rounded-full flex items-center justify-center text-black font-black text-xl">
										{t.name.charAt(0)}
									</div>
									<div>
										<h4 className="text-white font-black text-lg uppercase tracking-tight">
											{t.name}
										</h4>
										<p className="text-[#A7C4B5] text-xs uppercase tracking-[0.2em] font-bold">
											{t.location}
										</p>
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* PROCESS SECTION */}
			<section className="py-32 bg-[#FDFCFB] relative">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="The Norbilt Method"
						title="Our Seamless Interior Process"
						description="We've refined our workflow to ensure your project is stress-free."
					/>
					<div className="grid md:grid-cols-3 gap-8 mt-20">
						{[
							{
								step: "01",
								title: "Initial Consultation",
								text: "Schedule your free estimate to discuss your vision and take precise measurements.",
								keywords: "Site Visit & Assessment",
							},
							{
								step: "02",
								title: "Detailed Proposal",
								text: "Receive a transparent, fixed-price quote with a clear scope of work and no hidden fees.",
								keywords: "Transparent Pricing",
							},
							{
								step: "03",
								title: "Precision Execution",
								text: "We complete your remodel with meticulous detail and a strict clean-as-we-go philosophy.",
								keywords: "Final Walkthrough",
							},
						].map((item, i) => (
							<motion.div
								key={item.step}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								className="relative p-10 bg-white border-2 border-gray-50 rounded-3xl shadow-xl hover:border-[#FFB800]/30 transition-all group"
							>
								<span className="absolute top-4 right-6 text-7xl font-black text-gray-100 group-hover:text-[#FFB800]/10 transition-colors">
									{item.step}
								</span>
								<div className="relative z-10">
									<div className="w-14 h-14 bg-[#1F2E2B] rounded-xl flex items-center justify-center mb-6 shadow-lg">
										<span className="text-[#FFB800] font-black text-xl">
											{item.step}
										</span>
									</div>
									<h3 className="text-2xl font-black text-[#1F2E2B] mb-4 uppercase tracking-tighter">
										{item.title}
									</h3>
									<p className="text-gray-600 leading-relaxed mb-6 font-medium">
										{item.text}
									</p>
									<div className="pt-6 border-t border-gray-100 flex items-center gap-2 text-[#2D5A3D] font-black text-xs uppercase tracking-widest">
										<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
										{item.keywords}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ SECTION */}
			<HomeFaqSection />

			{/* FOOTER STRIP */}
			<section className="py-12 bg-[#14201D] text-center text-xs md:text-sm font-black text-[#A7C4B5] uppercase tracking-[0.4em] px-4">
				Licensed Washington Contractor • Bonded & Insured • Serving Vancouver,
				Camas & Clark County
			</section>
		</div>
	);
}
