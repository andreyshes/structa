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
import StatsBar from "@/app/components/StatsBar";
import BeforeAfterSlider from "@/app/components/BeforeAfterSlider";

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
			icon: Wrench,
			title: "Handyman Services",
			href: "/services/handyman",
			description:
				"Drywall patching, door adjustments, TV mounting, and general home repairs. We handle the fixes that keep your home in good shape.",
		},
		{
			icon: Hammer,
			title: "Finish Carpentry",
			href: "/services/finish-carpentry",
			description:
				"Custom baseboards, crown molding, and interior trim installation. Clean, precise woodwork that adds real value to every room.",
		},
		{
			icon: Paintbrush,
			title: "Kitchen & Bath Updates",
			href: "/services/kitchen-bath",
			description:
				"Tile, backsplash, vanity installs, and fixture upgrades. Refresh your kitchen or bathroom without a full remodel.",
		},
		{
			icon: Home,
			title: "Door & Window",
			href: "/services/door-window",
			description:
				"Interior and exterior door installation, weatherstripping, and window repair to improve comfort and curb appeal.",
		},
		{
			icon: Lightbulb,
			title: "Lighting & Fixtures",
			href: "/services/lighting",
			description:
				"Ceiling fans, recessed lighting, and fixture swaps. We upgrade your home lighting safely and leave the space clean.",
		},
		{
			icon: Construction,
			title: "Flooring Repair",
			href: "/services/flooring",
			description:
				"Wood rot repair, subfloor fixes, and flooring updates. We protect and restore your floors for the long term.",
		},
	];

	const reviews = [
		{
			quote:
				"We had a positive experience with Norbilt here in Vancouver, WA. I worked with Andrey, who was courteous, professional, efficient, and delivered high-quality work in a timely manner. It's hard to find reliable help these days, and I truly appreciated his attention to detail and expertise.",
			name: "M. Taylor",
			location: "Vancouver, WA",
			service: "Home Repairs",
		},
		{
			quote:
				"I hired Norbilt to stain my fence at my home in Vancouver, WA and they did an excellent job. Communication was clear, they showed up on time, and the quality of the work really shows. The stain came out even, clean, and professional — it completely refreshed the look of our yard.",
			name: "Angelo",
			location: "Vancouver, WA",
			service: "Fence Staining",
		},
		{
			quote:
				"Norbilt was awesome to work with. They transformed my outdated bathroom to something modern and I love it! Great company to work with and I am in love with my bathroom once again.",
			name: "David",
			location: "Vancouver, WA",
			service: "Bathroom Remodel",
		},
		{
			quote:
				"They did an excellent job installing my flooring — professional, efficient, and the final result looks amazing. The quality of work and attention to detail really stood out. Highly recommend them for any home projects!",
			name: "Mike",
			location: "Vancouver, WA",
			service: "Flooring Installation",
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
				<a
					href="tel:+13602169920"
					className="flex items-center justify-center gap-3 bg-[#FFB800] text-black font-black py-4 rounded-full shadow-2xl border-2 border-white uppercase text-sm tracking-widest"
				>
					<Phone className="w-4 h-4" />
					Call For Free Estimate
				</a>
			</motion.div>

			{/* HERO SECTION */}
			<section
				ref={heroRef}
				className="relative min-h-screen flex items-center overflow-hidden"
			>
				<div className="absolute inset-0">
					<Image
						src="/hero.jpg"
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
							Norbilt is a licensed Washington contractor providing expert home
							repair, handyman services, and interior remodeling in Vancouver,
							WA and throughout Clark County. Our team is committed to
							delivering reliable service and high-quality craftsmanship on
							every job.
						</p>

						<div className="pt-8 flex flex-wrap items-center gap-4">
							<Link
								href="/estimate"
								className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 bg-gradient-to-b from-[#FFD700] to-[#CC9900] text-[#1F2E2B] rounded-xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
							>
								Get Instant Estimate
								<ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold transition-colors"
							>
								<Phone className="w-4 h-4 text-[#FFB800]" />
								(360) 216-9920
							</a>
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

			{/* HOW IT WORKS */}
			<section className="py-24 bg-[#F8F6F3] border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Simple Process"
						title="How It Works"
						description="Finding a trusted general contractor in Vancouver WA should be simple."
						centered
					/>
					<div className="grid md:grid-cols-3 gap-10 mt-16">
						{[
							{
								step: "01",
								icon: Phone,
								title: "Free Estimate",
								desc: "Call or message us to describe your project. Our general contractor team visits your home and gives you a clear, written quote before any work begins.",
							},
							{
								step: "02",
								icon: Clock,
								title: "We Schedule",
								desc: "We confirm a date that works for you. Then, our team shows up on time and respects your home. We also communicate clearly throughout the job.",
							},
							{
								step: "03",
								icon: CheckCircle2,
								title: "Done Right",
								desc: "Finally, we complete the work to a high standard. Your home is left clean. The job is done the way it was quoted — no surprises.",
							},
						].map((item) => (
							<div
								key={item.step}
								className="relative flex flex-col items-start"
							>
								<span className="text-7xl font-black text-[#FFB800]/20 leading-none mb-4">
									{item.step}
								</span>
								<div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center mb-4">
									<item.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="text-xl font-black text-[#1F2E2B] uppercase mb-2">
									{item.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<StatsBar />

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

					{/* EXTENDED SERVICE LIST */}
					<div className="mt-16 border border-[#E8E4DE] rounded-2xl p-8 bg-white">
						<h3 className="text-sm font-black uppercase tracking-widest text-[#2D5A3D] mb-6">
							More Services We Handle
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{[
								"Drywall Patching",
								"TV Mounting",
								"Caulking & Sealing",
								"Furniture Assembly",
								"Crown Molding",
								"Wainscoting",
								"Window Trim",
								"Door Casing",
								"Tile & Grout",
								"Backsplash Install",
								"Vanity Replacement",
								"Faucet & Sink Install",
								"Cabinet Hardware",
								"Ceiling Fan Install",
								"Recessed Lighting",
								"Under-Cabinet Lighting",
								"Fence Staining",
								"Soffit & Fascia Repair",
								"Wood Rot Repair",
								"Deck Repair",
								"LVP / Hardwood Install",
								"Subfloor Repair",
								"Weatherstripping",
								"Property Punch Lists",
							].map((service) => (
								<div
									key={service}
									className="flex items-center gap-2 text-sm text-gray-600 font-medium"
								>
									<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
									{service}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FEATURE SECTION */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="bg-[#1F2E2B] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
						<div className="lg:w-1/2 relative h-96 lg:h-auto">
							<Image
								src="/remodel-images/IMG_7646.jpg"
								alt="Kitchen remodel by Norbilt in Vancouver WA"
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
								damage fast. In addition, we provide lasting fixes for every
								owner.
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
			{/* SERVICE AREAS */}
			<section className="py-24 bg-[#FDFCFB]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-12">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-xs">
							Licensed General Contractor
						</span>
						<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mt-2 mb-4">
							Serving All of Clark County, WA
						</h2>
						<p className="max-w-2xl mx-auto text-gray-600 text-lg">
							Norbilt is a licensed, bonded general contractor serving Vancouver
							and all Clark County communities. Therefore, select your city
							below for local rates and service info.
						</p>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
						{[
							{ name: "Vancouver", slug: "vancouver" },
							{ name: "Camas", slug: "camas" },
							{ name: "Ridgefield", slug: "ridgefield" },
							{ name: "Battle Ground", slug: "battle-ground" },
							{ name: "Washougal", slug: "washougal" },
							{ name: "Brush Prairie", slug: "brush-prairie" },
							{ name: "Felida", slug: "felida" },
							{ name: "Hazel Dell", slug: "hazel-dell" },
							{ name: "Salmon Creek", slug: "salmon-creek" },
							{ name: "Five Corners", slug: "five-corners" },
							{ name: "Orchards", slug: "orchards" },
							{ name: "Mill Plain", slug: "mill-plain" },
							{ name: "Lake Shore", slug: "lake-shore" },
						].map((city) => (
							<Link
								key={city.slug}
								href={`/locations/${city.slug}`}
								className="flex items-center gap-2 px-5 py-4 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-600 hover:border-[#FFB800] hover:text-[#1F2E2B] hover:shadow-md transition-all duration-200 group"
							>
								<MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
								{city.name}, WA
							</Link>
						))}
					</div>
					<div className="text-center mt-8">
						<Link
							href="/locations"
							className="inline-flex items-center gap-2 text-[#2D5A3D] font-black text-sm uppercase tracking-widest hover:gap-3 transition-all"
						>
							View All Service Areas <ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="py-32 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
					<div className="relative">
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src="/remodel-images/IMG_1897%202.jpg"
								alt="Bathroom remodel by Norbilt in Vancouver WA"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover object-top"
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
									desc: "We are a licensed general contractor, bonded and insured in Washington State.",
								},
								{
									icon: Award,
									title: "Quality",
									desc: "Also, we focus on the small details that others miss.",
								},
								{
									icon: Clock,
									title: "Reliable",
									desc: "Furthermore, we finish every job on time and respect your home.",
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

			{/* PROJECT GALLERY */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Real Projects"
						title="Our Work in Clark County"
						description="Every photo is a real completed job — no stock images, no staging."
						centered
					/>

									{/* BEFORE / AFTER FEATURED */}
					<div className="mt-16">
						<BeforeAfterSlider
							beforeSrc="/before-after-bath/4B7B4C72-3203-41BA-9B51-E623563332FF_1_201_a.jpeg"
							afterSrc="/before-after-bath/bathroom.jpg.png"
							beforeAlt="Bathroom before remodel — dated tile and dark wood vanity"
							afterAlt="Bathroom after remodel by Norbilt — modern marble and freestanding tub"
							label="Bathroom Remodel — Vancouver, WA"
								aspectClass="aspect-[3/2]"
						/>
					</div>

					{/* PROJECT GRID */}
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						{[
							{
								src: "/remodel-images/IMG_7645.jpg",
								alt: "Kitchen cabinet and backsplash remodel Vancouver WA",
								label: "Kitchen Remodel",
							},
							{
								src: "/remodel-images/IMG_1897%202.jpg",
								alt: "Marble tile shower remodel by Norbilt Clark County WA",
								label: "Bathroom Tile & Shower",
							},
							{
								src: "/remodel-images/IMG_6433.jpg",
								alt: "Cedar fence and stamped concrete patio Vancouver WA",
								label: "Fence & Outdoor",
							},
							{
								src: "/remodel-images/IMG_7649.jpg",
								alt: "Full kitchen remodel with gray cabinets Vancouver WA",
								label: "Kitchen Remodel",
							},
							{
								src: "/remodel-images/IMG_6429.jpg",
								alt: "Cedar privacy fence installation Clark County WA",
								label: "Fence Installation",
							},
							{
								src: "/remodel-images/IMG_6432.jpg",
								alt: "Stamped concrete and cedar fence backyard Vancouver WA",
								label: "Fence & Patio",
							},
						].map((photo) => (
							<div
								key={photo.src}
								className="relative aspect-square rounded-2xl overflow-hidden group"
							>
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									sizes="(max-width: 768px) 50vw, 33vw"
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
								<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
									<span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#FFB800] px-3 py-1 rounded-full">
										{photo.label}
									</span>
								</div>
							</div>
						))}
					</div>
					<div className="mt-8 text-center">
						<Link
							href="/portfolio"
							className="inline-flex items-center gap-3 px-8 py-4 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl hover:bg-[#2D5A3D] transition-all shadow-lg"
						>
							View All Projects
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="py-32 bg-[#1F2E2B] overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
					<SectionHeader
						eyebrow="Customer Reviews"
						title="What Vancouver Homeowners Say"
						description="Real feedback from real customers across Clark County, WA."
						centered
						light
					/>
				</div>
				<div className="overflow-hidden">
					<div className="flex gap-6 animate-marquee">
						{[...reviews, ...reviews].map((review, i) => (
							<div
								key={i}
								className="shrink-0 w-[380px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
							>
								<div className="flex items-center justify-between">
									<div className="flex gap-1">
										{[...Array(5)].map((_, j) => (
											<Star
												key={j}
												className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
											/>
										))}
									</div>
									<span className="text-[#FFB800] text-xs font-black uppercase tracking-widest">
										{review.service}
									</span>
								</div>
								<p className="text-white/80 leading-relaxed flex-1 italic text-sm">
									&ldquo;{review.quote}&rdquo;
								</p>
								<div>
									<p className="font-black text-white">{review.name}</p>
									<p className="text-[#A7C4B5] text-sm">{review.location}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<HomeFaqSection />

			{/* FROM THE BLOG */}
			<section className="py-24 bg-white border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-end justify-between mb-12">
						<div>
							<p className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-[10px] mb-3">
								Clark County Resources
							</p>
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								From the Blog
							</h2>
						</div>
						<Link
							href="/blog"
							className="text-sm font-black uppercase tracking-widest text-[#2D5A3D] hover:text-[#FFB800] transition-colors hidden sm:block"
						>
							All Articles →
						</Link>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<Link
							href="/blog/bathroom-remodel-cost-ridgefield-wa"
							className="group bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100 hover:border-[#FFB800] hover:shadow-lg transition-all"
						>
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">
								Cost Guide
							</p>
							<h3 className="text-lg font-black text-[#1F2E2B] leading-snug mb-3 group-hover:text-[#2D5A3D] transition-colors">
								Bathroom Remodel Cost in Ridgefield WA
							</h3>
							<p className="text-sm text-gray-500 leading-relaxed">
								Real price ranges for tile, vanity, and fixtures from a licensed
								Clark County contractor.
							</p>
							<p className="mt-6 text-[10px] font-black uppercase tracking-widest text-[#FFB800]">
								Read Article →
							</p>
						</Link>
						<Link
							href="/blog/battle-ground-handyman-what-to-expect"
							className="group bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100 hover:border-[#FFB800] hover:shadow-lg transition-all"
						>
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">
								Hiring Guide
							</p>
							<h3 className="text-lg font-black text-[#1F2E2B] leading-snug mb-3 group-hover:text-[#2D5A3D] transition-colors">
								Battle Ground Handyman: What to Expect
							</h3>
							<p className="text-sm text-gray-500 leading-relaxed">
								How to hire a licensed handyman in North Clark County and what
								the process looks like.
							</p>
							<p className="mt-6 text-[10px] font-black uppercase tracking-widest text-[#FFB800]">
								Read Article →
							</p>
						</Link>
						<Link
							href="/blog/clark-county-home-repair-checklist"
							className="group bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100 hover:border-[#FFB800] hover:shadow-lg transition-all"
						>
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">
								Checklist
							</p>
							<h3 className="text-lg font-black text-[#1F2E2B] leading-snug mb-3 group-hover:text-[#2D5A3D] transition-colors">
								Clark County Home Repair Checklist
							</h3>
							<p className="text-sm text-gray-500 leading-relaxed">
								The maintenance tasks Clark County homeowners should handle
								before they become costly repairs.
							</p>
							<p className="mt-6 text-[10px] font-black uppercase tracking-widest text-[#FFB800]">
								Read Article →
							</p>
						</Link>
					</div>
				</div>
			</section>

			<section className="py-12 bg-[#14201D] text-center text-xs md:text-sm font-black text-[#A7C4B5] uppercase tracking-[0.4em] px-4">
				WA General Contractor #NORBIR**741CS • Serving Vancouver & Camas
			</section>
		</div>
	);
}
