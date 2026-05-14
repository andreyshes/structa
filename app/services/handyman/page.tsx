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

export const metadata = {
	title: "Handyman Services Vancouver WA | Handyman Near Me | Norbilt",
	description: "Licensed handyman near you in Vancouver WA & Clark County. Drywall, fixtures, doors, punch lists & more. 5-star Google rated. Free estimates. Call (360) 216-9920.",
	alternates: { canonical: "https://norbilt.com/services/handyman" },
	openGraph: {
		title: "Handyman Services Vancouver WA | Norbilt",
		description: "Licensed handyman near you in Vancouver WA & Clark County.",
		url: "https://norbilt.com/services/handyman",
	},
};

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
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "LocalBusiness",
								"@id": "https://norbilt.com/#business",
								"name": "Norbilt",
								"url": "https://norbilt.com",
								"telephone": "+13602169920",
								"address": {
									"@type": "PostalAddress",
									"addressLocality": "Vancouver",
									"addressRegion": "WA",
									"postalCode": "98660",
									"addressCountry": "US"
								},
								"areaServed": ["Vancouver WA", "Camas WA", "Ridgefield WA", "Battle Ground WA", "Washougal WA", "Clark County WA"],
								"aggregateRating": {
									"@type": "AggregateRating",
									"ratingValue": "5.0",
									"reviewCount": "24",
									"bestRating": "5"
								}
							},
							{
								"@type": "Service",
								"name": "Handyman Services Vancouver WA",
								"provider": { "@id": "https://norbilt.com/#business" },
								"areaServed": "Vancouver WA",
								"description": "Licensed handyman services in Vancouver WA and Clark County including drywall repair, fixture installation, door repairs, TV mounting, and home maintenance punch lists.",
								"serviceType": "Handyman Service",
								"url": "https://norbilt.com/services/handyman"
							},
							{
								"@type": "FAQPage",
								"mainEntity": [
									{
										"@type": "Question",
										"name": "How do I find a reliable handyman near me in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Norbilt is a licensed WA General Contractor serving Vancouver, Camas, Ridgefield, Battle Ground, and all of Clark County. Unlike unlicensed handymen found on apps, we carry full liability insurance and a contractor's bond. Call (360) 216-9920 or submit a project request for a free same-week estimate."
										}
									},
									{
										"@type": "Question",
										"name": "What does a handyman cost in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Licensed handyman labor in Vancouver WA runs $65\u2013$95/hour in 2026. Small jobs (TV mounting, shelf install, fixture swap) typically run $150\u2013$350. Half-day punch lists run $350\u2013$600. We provide free written estimates before any work begins."
										}
									},
									{
										"@type": "Question",
										"name": "Do you offer handyman services for seniors in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Yes. We regularly help seniors with safety grab bar installation, non-slip modifications, door adjustment for easier use, smart lock installation, and general home maintenance. We are patient, communicative, and keep job sites clean and safe."
										}
									},
									{
										"@type": "Question",
										"name": "What handyman services do you offer?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "We handle drywall patching, hole repair, texture matching, fixture installation, ceiling fans, smart locks, TV mounting, shelf installation, furniture assembly, caulking, weatherstripping, door adjustments, cabinet hardware, tile grout repair, and full home punch lists."
										}
									},
									{
										"@type": "Question",
										"name": "Are you a licensed handyman in Washington State?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Yes. Norbilt is a licensed and bonded WA General Contractor. In Washington, repair work above a set dollar amount legally requires a licensed contractor. Hiring unlicensed help can void your homeowner's insurance and cause issues at resale. Every Norbilt job is fully insured and code-compliant."
										}
									}
								]
							}
						]
					})
				}}
			/>

			{/* HERO SECTION - BILLBOARD STYLE */}
			<section className="relative min-h-[75vh] flex items-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://plus.unsplash.com/premium_photo-1682597000363-97fdf9b85bbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmR5bWFufGVufDB8fDB8fHww"
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
							<span className="text-white/60 text-sm">&middot; Google Rated</span>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-delay-300">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-2xl"
							>
								Book a Handyman
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

			{/* BREADCRUMB */}
			<div className="bg-[#FDFCFB] border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
					<Link href="/services" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2D5A3D] hover:text-[#FFB800] transition-colors">
						&larr; All Services
					</Link>
				</div>
			</div>

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

			{/* FULL SERVICE LIST */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="border border-[#E8E4DE] rounded-2xl p-8 lg:p-12 bg-[#FDFCFB]">
						<h3 className="text-sm font-black uppercase tracking-widest text-[#2D5A3D] mb-8">
							Every Handyman Task We Handle
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
							{[
								"TV Mounting",
								"Furniture Assembly",
								"Shelf Hanging",
								"Picture Hanging",
								"Caulking & Sealing",
								"Weatherstripping",
								"Door Adjustments",
								"Sticking Door Fixes",
								"Hinge Replacement",
								"Smart Lock Install",
								"Deadbolt Install",
								"Cabinet Hardware",
								"Drywall Patching",
								"Hole Repair",
								"Texture Matching",
								"Wood Rot Repair",
								"Baseboard Repair",
								"Door Casing Fixes",
								"Tile Grout Repair",
								"Caulk Replacement",
								"Fence Staining",
								"Deck Repair",
								"Soffit & Fascia Repair",
								"Gutter Reattachment",
								"Safety Bar Install",
								"Smoke Detector Install",
								"Storm Door Install",
								"Window Screen Repair",
								"Minor Plumbing Fixes",
								"Faucet Replacement",
								"Toilet Flapper Fix",
								"Property Punch Lists",
							].map((task) => (
								<div
									key={task}
									className="flex items-center gap-2 text-sm text-gray-600 font-medium"
								>
									<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
									{task}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* PRICING + NEAR ME SECTION */}
			<section className="py-24 bg-[#1F2E2B] text-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">Transparent Pricing</span>
						<h2 className="mt-3 text-3xl md:text-4xl font-black uppercase tracking-tighter">
							Handyman Cost in Vancouver WA
						</h2>
						<p className="mt-4 text-[#A7C4B5] max-w-xl mx-auto font-medium">
							2026 local rates for licensed handyman work in Clark County. Every job gets a free written estimate before we start.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ service: "TV Mounting", range: "$150\u2013$300", note: "Existing wall" },
							{ service: "Fixture Swap", range: "$150\u2013$350", note: "Per fixture" },
							{ service: "Drywall Patch", range: "$150\u2013$500", note: "Small to medium" },
							{ service: "Smart Lock Install", range: "$150\u2013$300", note: "Labor + hardware" },
							{ service: "Door Realignment", range: "$150\u2013$300", note: "Per door" },
							{ service: "Caulking (tub/shower)", range: "$150\u2013$350", note: "Full perimeter" },
							{ service: "Shelf / TV Mount", range: "$100\u2013$250", note: "Wall anchored" },
							{ service: "Half-Day Punch List", range: "$350\u2013$600", note: "Multiple tasks" },
						].map((item) => (
							<div key={item.service} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FFB800]/40 transition-colors">
								<p className="font-black text-white uppercase tracking-wide text-sm">{item.service}</p>
								<p className="text-[#FFB800] font-black text-xl mt-2">{item.range}</p>
								<p className="text-[#A7C4B5] text-xs mt-1">{item.note}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* NEAR ME CITY GRID */}
			<section className="py-16 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
						Handyman Services Near You &mdash; Clark County WA
					</h2>
					<p className="text-gray-500 font-medium mb-10 max-w-xl mx-auto">
						We serve homeowners across Clark County. Click your city for local service info.
					</p>
					<div className="flex flex-wrap justify-center gap-3">
						{[
							{ name: "Vancouver", href: "/locations/vancouver/handyman-services" },
							{ name: "Camas", href: "/locations/camas/handyman-services" },
							{ name: "Ridgefield", href: "/locations/ridgefield/handyman-services" },
							{ name: "Battle Ground", href: "/locations/battle-ground/handyman-services" },
							{ name: "Washougal", href: "/locations/washougal/handyman-services" },
							{ name: "Salmon Creek", href: "/locations/salmon-creek/handyman-services" },
							{ name: "Hazel Dell", href: "/locations/hazel-dell/handyman-services" },
							{ name: "Orchards", href: "/locations/orchards/handyman-services" },
						].map((city) => (
							<Link
								key={city.name}
								href={city.href}
								className="px-5 py-2.5 bg-white border border-[#E8E4DE] rounded-xl text-sm font-black text-[#2C3E3A] hover:border-[#FFB800] hover:text-[#2D5A3D] transition-colors uppercase tracking-wide"
							>
								{city.name}
							</Link>
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
							{
								q: "How do I find a handyman near me in Vancouver WA?",
								a: "Norbilt is locally based in Vancouver WA and serves all of Clark County. We offer same-week estimates and straightforward pricing. You can call us at (360) 216-9920, submit a project request online, or use our instant estimator to get an idea of cost before we visit.",
							},
							{
								q: "Do you offer senior-friendly handyman services?",
								a: "Yes. We regularly assist seniors with safety modifications — including grab bars, slip-resistant thresholds, door adjustments, smart lock installation, and general home maintenance. We are licensed, insured, and take extra care to leave every job site clean and safe.",
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
									Book a Handyman
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
