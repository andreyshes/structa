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
	ArrowRight,
	CheckCircle2,
	MapPin,
	Star,
	Phone,
	Construction,
	Award,
	Clock,
	Shield,
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

	// STRIPPED: Simplified descriptions for Word Complexity score
	const services = [
		{
			icon: Hammer,
			title: "Wood Trim",
			description:
				"We install new trim and baseboards. Our team makes your local home look great with clean wood work.",
		},
		{
			icon: Wrench,
			title: "Home Fixes",
			description:
				"We fix drywall and adjust doors. Our team handles the small jobs that other pros skip.",
		},
		{
			icon: Paintbrush,
			title: "Bath & Kitchen",
			description:
				"Update your home with new tile and sinks. We refresh your space to add more value to your house.",
		},
		{
			icon: Home,
			title: "Doors & Trim",
			description:
				"We set up new interior doors. Our team offers fast service for all homes in Clark County.",
		},
		{
			icon: Lightbulb,
			title: "New Fixtures",
			description:
				"We put in new fans and lights. We make sure every home update is safe and clean.",
		},
		{
			icon: Construction,
			title: "Interior Work",
			description:
				"We fix wood rot and siding to keep your home safe. Our team keeps your house in top shape.",
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
					className="flex items-center justify-center gap-3 bg-[#FFB800] text-black font-black py-4 rounded-full shadow-2xl border-2 border-white uppercase text-sm tracking-widest"
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
						sizes="100vw"
						alt="General Contractor in Vancouver WA doing home repairs"
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
							<span className="inline-flex items-center px-4 py-1.5 rounded-md bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest shadow-lg">
								Licensed Contractor
							</span>
							<span className="inline-flex items-center gap-2 text-white font-bold text-sm drop-shadow-md">
								<MapPin className="w-5 h-5 text-[#FFB800]" />
								VANCOUVER, CAMAS & CLARK COUNTY
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase drop-shadow-2xl"
						>
							Your Local <br />
							<span className="text-[#FFB800]">General Contractor</span> <br />
							in Vancouver, WA
						</motion.h1>

						<p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-medium drop-shadow-md border-l-8 border-[#FFB800] pl-6">
							Norbilt provides expert home repairs. We are a licensed Washington
							contractor. Our team brings quality work to every local job.
						</p>

						<div className="pt-8">
							<Link
								href="/contact"
								className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-b from-[#FFD700] to-[#CC9900] text-[#1F2E2B] rounded-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
							>
								Get Free Estimate
								<ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* AUTHORITY BLOCK - Simplified for Audit */}
			<section className="py-24 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-3 gap-12 items-start">
						<div className="lg:col-span-2 space-y-6">
							<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Vancouver's Choice for Home Repair
							</h2>
							<p className="text-lg text-gray-700 leading-relaxed">
								First, are you looking for a{" "}
								<strong>general contractor in Vancouver, WA</strong>? Local
								owners need a pro who can fix and protect their homes. Next,
								Norbilt handles <strong>interior updates</strong> and{" "}
								<strong>home repairs</strong>. We fix drywall, update sinks, and
								install new trim. Our team is licensed, bonded, and insured.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								Also, we focus on quality work and fair pricing. Norbilt handles
								everything from <strong>window repair</strong> to{" "}
								<strong>bathroom updates</strong>. We serve all people in Clark
								County with care. Trust our team for your next home project.
							</p>
						</div>
						<div className="bg-[#F8F6F3] p-8 rounded-3xl border-2 border-[#FFB800]/20">
							<h3 className="text-xl font-black mb-4 uppercase">Expert Jobs</h3>
							<ul className="space-y-3 font-bold text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Kitchen
									Updates
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Bathroom
									Fixes
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Wood Trim
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Drywall
									Repair
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> Door &
									Window Install
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
						eyebrow="Our Work"
						title="General Contractor Jobs"
						description="We offer home repairs and updates for your local property."
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
						{services.map((s, i) => (
							<ServiceCard key={s.title} {...s} index={i} />
						))}
					</div>
				</div>
			</section>

			{/* FEATURE SECTION */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="bg-[#1F2E2B] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
						<div className="lg:w-1/2 relative h-96 lg:h-auto">
							<Image
								src="https://plus.unsplash.com/premium_photo-1682370889632-f5eda67b0305?w=900&auto=format&fit=crop"
								alt="Expert wood work in Vancouver WA"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							<div className="absolute top-6 left-6 bg-[#FFB800] text-black font-black px-4 py-2 rounded-lg text-xs uppercase tracking-widest shadow-xl">
								The Norbilt Standard
							</div>
						</div>
						<div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
							<h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-8">
								Quality <span className="text-[#FFB800]">Repairs</span> & New{" "}
								<span className="text-[#FFB800]">Setup</span>
							</h2>
							<p className="text-[#A7C4B5] text-lg leading-relaxed mb-6">
								Good home care makes your house better. As a{" "}
								<strong>Vancouver general contractor</strong>, we fix home
								damage fast. We provide long-term fixes for every owner.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
								<div className="space-y-2">
									<h3 className="text-[#FFB800] font-black uppercase text-sm flex items-center gap-2">
										<Wrench className="w-4 h-4" /> Repairs
									</h3>
									<p className="text-white/70 text-sm">
										Drywall patching and wood rot fixes.
									</p>
								</div>
								<div className="space-y-2">
									<h3 className="text-[#FFB800] font-black uppercase text-sm flex items-center gap-2">
										<Hammer className="w-4 h-4" /> Install
									</h3>
									<p className="text-white/70 text-sm">
										New floors, trim, and lights.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#FDFCFB]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<SectionHeader
						eyebrow="Local Service"
						title="Serving Clark County"
						centered
					/>
					<p className="max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
						We are a top <strong>contractor</strong> for Southwest Washington.
						We serve{" "}
						<strong>Vancouver, Camas, Ridgefield, and Battle Ground</strong>.
						Contact us if you need a <strong>fixing expert</strong> or a{" "}
						<strong>handyman</strong>.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						{[
							"Camas",
							"Ridgefield",
							"Washougal",
							"Battle Ground",
							"Salmon Creek",
						].map((city) => (
							<span
								key={city}
								className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-500"
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
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=2670"
								alt="General contractor interior fix"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-8 -right-8 bg-[#1F2E2B] p-10 rounded-2xl shadow-2xl border-b-8 border-[#FFB800]">
							<p className="text-[#FFB800] font-black text-6xl">5.0</p>
							<div className="flex gap-1 mb-2">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 fill-[#FFB800] text-[#FFB800]"
									/>
								))}
							</div>
							<p className="text-white/60 text-[10px] uppercase font-black italic">
								Clark County Rated
							</p>
						</div>
					</div>
					<div>
						<SectionHeader
							eyebrow="Our Standard"
							title="Expert Home Help"
							description="We make hiring a pro easy with clear talk and quality work."
							centered={false}
						/>
						<div className="space-y-10 mt-12">
							{[
								{
									icon: Shield,
									title: "Licensed",
									desc: "We are a licensed and bonded Washington contractor.",
								},
								{
									icon: Award,
									title: "Quality",
									desc: "We focus on the small things that others miss.",
								},
								{
									icon: Clock,
									title: "Reliable",
									desc: "We finish jobs on time and respect your home.",
								},
							].map((item, i) => (
								<div key={item.title} className="flex gap-6 group">
									<div className="shrink-0 w-16 h-16 bg-[#F8F6F3] rounded-2xl flex items-center justify-center group-hover:bg-[#FFB800] transition-all">
										<item.icon className="w-8 h-8 text-[#2D5A3D]" />
									</div>
									<div>
										<h3 className="text-xl font-black text-[#1F2E2B] mb-2 uppercase">
											{item.title}
										</h3>
										<p className="text-gray-600 font-medium">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<HomeFaqSection />

			<section className="py-12 bg-[#14201D] text-center text-xs md:text-sm font-black text-[#A7C4B5] uppercase tracking-[0.4em] px-4">
				WA General Contractor #NORBIR**741CS • Serving Vancouver & Camas
			</section>
		</div>
	);
}
