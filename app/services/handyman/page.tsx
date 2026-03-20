import Link from "next/link";
import Image from "next/image";
import {
	CheckCircle2,
	ArrowRight,
	Home,
	Clock,
	Hammer,
	Settings,
	Paintbrush,
	Lightbulb,
	ShieldCheck,
	Phone,
	Construction,
	Star,
	Quote,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function HandymanPage() {
	const services = [
		{
			icon: Hammer,
			title: "Drywall & Wall Repair",
			desc: "We patch holes, fix stress cracks, and match textures for a clean, smooth finish.",
		},
		{
			icon: Lightbulb,
			title: "Fixtures & Smart Home",
			desc: "We install light fixtures, smart locks, and home security devices quickly and cleanly.",
		},
		{
			icon: Paintbrush,
			title: "Caulking & Sealing",
			desc: "We re-caulk kitchens and baths and add weather-stripping to keep moisture out.",
		},
		{
			icon: Settings,
			title: "Assembly & Mounting",
			desc: "We mount TVs, hang floating shelves, and assemble furniture of all sizes.",
		},
		{
			icon: Home,
			title: "Interior Trim & Doors",
			desc: "We fix sticking doors, swap out hinges, and repair baseboards and door casings.",
		},
		{
			icon: Construction,
			title: "Punch List Support",
			desc: "We work through your home to-do list fast, for both homeowners and property managers.",
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000"
						alt="Home repair tools and equipment in Vancouver WA"
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
							Expert Handyman <br />
							<span className="text-[#FFB800]">Services Vancouver WA</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 animate-fade-in-up animate-delay-200">
							Vancouver WA&apos;s trusted handyman for home repairs and
							maintenance in Clark County. Our licensed handyman team handles
							your entire to-do list with professional precision and full
							accountability.
						</p>

						<div className="flex items-center gap-2 animate-fade-in-up animate-delay-200">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
							))}
							<span className="text-white font-black text-sm ml-1">5.0</span>
							<span className="text-white/60 text-sm">· Google Rated</span>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-delay-300">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Request A Quote
								<ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(360) 216-9920
							</a>
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
								Finding a good handyman should not be a gamble. Norbilt
								handles all the small and mid-size jobs your home needs. We
								fill the gap between casual labor and a full remodel.
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
											Unlike casual handymen, we are a licensed WA General
											Contractor. Every job meets state code and safety
											standards.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Home Value Protection
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											Small fixes now stop big repair bills later. We tackle
											the items that protect your home and its value.
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
						title="Handyman Repair Services"
						description="Expert results for the repairs and upgrades that keep your home running smoothly."
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

			{/* FAQ SECTION */}
		<section className="py-24 bg-white">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<SectionHeader
					eyebrow="FAQ"
					title="Handyman Services FAQ"
					description="Common questions about our services in Vancouver WA."
				/>
				<div className="mt-16 space-y-6">
					{[
						{
							q: "What does a handyman service include?",
							a: "We cover a wide range of home repairs. For example, we handle drywall patching, fixture installation, door repairs, caulking, TV mounting, and furniture assembly. Additionally, we help homeowners and property managers work through punch lists and routine maintenance.",
						},
						{
							q: "Do I need a licensed handyman in Vancouver WA?",
							a: "In Washington State, repair work above a set dollar amount requires a licensed contractor. As a result, hiring a registered WA General Contractor like Norbilt protects you legally and ensures the work meets code. In fact, unlicensed repair work can affect your home insurance and future resale value.",
						},
						{
							q: "How much does handyman service cost in Vancouver WA?",
							a: "Our service costs depend on the scope of work. We give free, clear estimates before we start, so there are no surprises. Our rates are fair for licensed, insured repair work throughout Vancouver, Camas, and Clark County.",
						},
						{
							q: "What areas do you serve?",
							a: "We serve homeowners throughout Clark County WA. Therefore, whether you are in central Vancouver, Camas, Washougal, Battle Ground, or Ridgefield, our team is ready for your home repair and maintenance needs.",
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

		{/* REVIEWS */}
		<section className="py-24 bg-[#F8F6F3]">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="text-center mb-16 space-y-3">
					<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
						Real Customers
					</span>
					<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						What Homeowners Say
					</h2>
					<div className="flex justify-center items-center gap-1 pt-1">
						{[...Array(5)].map((_, i) => (
							<Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
						))}
						<span className="text-[#1F2E2B] font-black text-sm ml-2">5.0 on Google</span>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{[
						{
							quote: "We had a positive experience with Norbilt here in Vancouver, WA. I worked with Andrey, who was courteous, professional, efficient, and delivered high-quality work in a timely manner. It's hard to find reliable help these days, and I truly appreciated his attention to detail and expertise.",
							name: "M. Taylor",
							location: "Vancouver, WA",
						},
						{
							quote: "I couldn't hold back on leaving a review, gotta say I am impressed with their professionalism! Came in, did the job and left a clean site always! I will recommend them to everyone!",
							name: "Dennis",
							location: "Vancouver, WA",
						},
						{
							quote: "Great experience with Norbilt. Andrey and his team were professional, easy to work with, and delivered high-quality work. Everything was smooth from start to finish. Highly recommend!",
							name: "Sam Y.",
							location: "Vancouver, WA",
						},
						{
							quote: "Andre, did a great job! He's very good at listening to the customer, he cares about making sure he gets it done, also he came on time and did with short notice from me the customer. Excellent service, I highly recommend him for any work needed. Five stars!",
							name: "Susan",
							location: "Vancouver, WA",
						},
						{
							quote: "I had a great experience working with Norbilt on my remodeling project. From start to finish, their team was professional, detail-oriented, and easy to communicate with. Andrey was especially helpful — he made sure everything stayed on track and met my expectations.",
							name: "Taylor K.",
							location: "Vancouver, WA",
						},
						{
							quote: "Andrey and his team did an excellent job. There was a mix up with the material that I ordered and Andrey handled the situation professionally with grace and patience. He communicated every step of the way, was timely and pleasant to work with.",
							name: "Dawn Trano",
							location: "Vancouver, WA",
						},
					].map((review, i) => (
						<div
							key={i}
							className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#FFB800]/30 transition-all duration-300 flex flex-col gap-4"
						>
							<div className="flex gap-1">
								{[...Array(5)].map((_, j) => (
									<Star key={j} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
								))}
							</div>
							<Quote className="w-6 h-6 text-[#FFB800]/30" />
							<p className="text-gray-700 leading-relaxed text-sm italic flex-1">
								&ldquo;{review.quote}&rdquo;
							</p>
							<div className="flex items-center gap-3 pt-3 border-t border-gray-100">
								<div className="w-9 h-9 rounded-full bg-[#1F2E2B] flex items-center justify-center text-white font-black text-xs">
									{review.name[0]}
								</div>
								<div>
									<p className="font-black text-[#1F2E2B] text-sm">{review.name}</p>
									<p className="text-xs text-gray-400">{review.location}</p>
								</div>
							</div>
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
								Get a free, transparent estimate from Vancouver&apos;s trusted
								handyman service. Let us handle the details while you relax.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
								>
									Free Estimate
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
