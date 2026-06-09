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
	Zap,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export const metadata = {
	title: "Small Repairs & Handyman Services Vancouver WA | Same-Day | NORBILT",
	description: "Same-day small repairs and handyman services in Vancouver WA and Clark County. TV mounting, furniture assembly, caulking, grab bars, and minor task lists — by the task. Licensed & insured. Free estimates. (360) 216-9920.",
	alternates: { canonical: "https://www.norbilt.com/services/handyman" },
	openGraph: {
		title: "Small Repairs & Handyman Services Vancouver WA | NORBILT",
		description: "Same-day small repairs in Vancouver WA. TV mounting, furniture assembly, caulking, grab bars, minor fixes. No project too small.",
		url: "https://www.norbilt.com/services/handyman",
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
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "BreadcrumbList",
								itemListElement: [
									{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
									{ "@type": "ListItem", position: 2, name: "Services", item: "https://www.norbilt.com/services" },
									{ "@type": "ListItem", position: 3, name: "Handyman Services", item: "https://www.norbilt.com/services/handyman" },
								],
							},
							{
								"@type": "LocalBusiness",
								"@id": "https://www.norbilt.com/#business",
								"name": "NORBILT",
								"url": "https://www.norbilt.com",
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
									"reviewCount": "13",
									"bestRating": "5"
								}
							},
							{
								"@type": "Service",
								"name": "Small Repairs & Handyman Services Vancouver WA",
								"provider": { "@id": "https://www.norbilt.com/#business" },
								"areaServed": "Vancouver WA",
								"description": "Same-day small repairs and handyman services in Vancouver WA and Clark County. TV mounting, furniture assembly, caulking, grab bar installation, door adjustments, and task lists. No minimum job size. Licensed and insured.",
								"serviceType": "Handyman Service",
								"url": "https://www.norbilt.com/services/handyman"
							},
							{
								"@type": "FAQPage",
								"mainEntity": [
									{
										"@type": "Question",
										"name": "What small repairs can you do same day in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "NORBILT handles same-day or next-day small repairs including TV mounting, furniture assembly, shelf hanging, grab bar installation, smart lock installation, caulking, door adjustments, fixture swaps, and minor punch lists throughout Clark County."
										}
									},
									{
										"@type": "Question",
										"name": "What does a handyman cost in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Small jobs in Vancouver WA run $150–$350 per task in 2026 — TV mounting, shelf install, fixture swap. Half-day punch lists (multiple tasks) run $350–$600. We price every job flat before we start — no hourly surprises."
										}
									},
									{
										"@type": "Question",
										"name": "Is there a minimum job size?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "No. NORBILT has no minimum job size. One TV mount, one grab bar, one fixture — we price it flat and show up. Most small jobs in Clark County are completed in a single visit."
										}
									},
									{
										"@type": "Question",
										"name": "What is the difference between your handyman service and your home repair service?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Handyman services cover small, no-permit tasks — TV mounting, assembly, caulking, grab bars, minor fixes. Home repair covers larger licensed work — drywall damage, door replacements, weatherization, and jobs that may require permits. Not sure which applies? Call us and we will tell you honestly."
										}
									},
									{
										"@type": "Question",
										"name": "Do you offer handyman services for seniors in Vancouver WA?",
										"acceptedAnswer": {
											"@type": "Answer",
											"text": "Yes. We regularly help seniors with grab bar installation, non-slip modifications, door adjustments, smart lock installation, and general home maintenance. We are patient, communicative, and keep job sites clean and safe."
										}
									}
								]
							}
						]
					})
				}}
			/>
			<div className="overflow-hidden bg-[#FDFCFB]">

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
					<div className="absolute inset-0 bg-linear-to-r from-[#14201D] via-[#14201D]/85 to-transparent" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3 animate-fade-in-up">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Licensed General Contractor
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase animate-fade-in-left animate-delay-100">
							Small Repairs & <br />
							<span className="text-[#FFB800]">Handyman Services Vancouver WA</span>
						</h1>

						<p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 animate-fade-in-up animate-delay-200">
							Fast, affordable small repairs for Clark County homeowners. TV
							mounting, furniture assembly, caulking, grab bars, door fixes, and
							task lists — completed same day or next. Licensed and insured. No
							project too small.
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

			{/* AUTHOR & DATE BAR */}
			<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
				<div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
					<a href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</a>
					<span>· WA Licensed General Contractor · NORBILT · Updated June 2026</span>
				</div>
			</div>

			{/* TRUST STRIP */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20 text-white">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<ShieldCheck className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Licensed & Insured
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Clock className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							Same-Day & Next-Day Available
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Zap className="text-[#FFB800] w-5 h-5" />
						<span className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
							No Minimum Job Size
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
								Small Repairs Done Fast <br />
								<span className="text-[#2D5A3D]">in Vancouver, WA</span>
							</h2>

							<p className="text-gray-600 text-lg font-medium leading-relaxed">
								Got a task list that never gets done? NORBILT specializes in
								the small, no-permit jobs Clark County homeowners put off —
								TV mounting, assembly, caulking, grab bars, minor door fixes.
								We show up prepared, work fast, and leave the site clean.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								{[
									"No Minimum Job Size",
									"Same-Day Availability",
									"Flat Price Per Task",
									"Clean Jobsite Guarantee",
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
							<div className="relative bg-[#1F2E2B] p-10 lg:p-14 rounded-[2.5rem] shadow-2xl border-b-8 border-[#FFB800]">
								<h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">
									Why Homeowners Call Us First
								</h3>
								<div className="space-y-8">
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											No Job Too Small
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											One TV mount or a 10-item task list — we price every
											job flat before we start. No hourly surprises, no
											minimums.
										</p>
									</div>
									<div className="space-y-2 border-l-2 border-[#FFB800]/30 pl-6">
										<span className="block font-black text-[#FFB800] text-xs uppercase tracking-widest">
											Licensed Means Accountable
										</span>
										<p className="text-[#A7C4B5] text-sm font-medium">
											Unlike app-based handymen, NORBILT is a licensed WA
											contractor — insured, bonded, and accountable if
											anything goes wrong.
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

			{/* PROPERTY MANAGER SECTION */}
			<section className="py-16 bg-[#FFFBEA] border-y border-[#FFB800]/30">
				<div className="max-w-5xl mx-auto px-6 lg:px-8">
					<div className="flex flex-col md:flex-row gap-8 items-start">
						<div className="shrink-0">
							<span className="inline-block px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Property Managers
							</span>
						</div>
						<div className="space-y-3">
							<h2 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tight">
								Recurring Handyman Services for Clark County Landlords &amp; Property Managers
							</h2>
							<p className="text-gray-700 font-medium leading-relaxed">
								Managing rental units, vacation properties, or a multi-property portfolio in Clark County? NORBILT works with landlords and property managers on a recurring basis — unit turnover repairs, between-tenant punch lists, maintenance calls, and scheduled seasonal tasks. One licensed contact, consistent quality across all your properties, no job-minimum hassle. We prioritize repeat clients and can hold scheduled maintenance slots for properties that need regular attention.
							</p>
							<p className="text-gray-600 font-medium leading-relaxed">
								Call <a href="tel:+13602169920" className="text-[#2D5A3D] font-black hover:underline">(360) 216-9920</a> to discuss a recurring service arrangement for your properties.
							</p>
						</div>
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
								q: "What small repairs can you do same day in Vancouver WA?",
								a: "Most small jobs are same-day or next-day: TV mounting, furniture assembly, shelf hanging, picture hanging, grab bar installation, smart lock install, caulking, weatherstripping, door adjustments, cabinet hardware, ceiling fan install, and minor fixture swaps. We come prepared with common hardware so most tasks are done in a single visit.",
							},
							{
								q: "Is there a minimum job size?",
								a: "No minimum. One TV mount, one grab bar, one fixture swap — we price it flat and show up. Most single tasks in Clark County run $150–$350.",
							},
							{
								q: "How much does handyman service cost in Vancouver WA?",
								a: "Based on 2026 Clark County rates: TV mounting $150–$300, fixture swap $150–$350, shelf or picture hanging $100–$250, grab bar install $200–$400, smart lock $150–$300, caulking $150–$350, and half-day punch lists $350–$600. We price every job flat before we start — no hourly surprises.",
							},
							{
								q: "What is the difference between handyman and home repair?",
								a: "Handyman covers small, no-permit tasks — TV mounting, assembly, caulking, grab bars, minor fixes. Home repair covers larger licensed work that may require permits, like drywall damage, door replacement, or weatherization. Not sure which applies? Call us and we'll tell you honestly.",
							},
							{
								q: "What areas do you serve?",
								a: "We serve all of Clark County WA — Vancouver, Camas, Washougal, Battle Ground, Ridgefield, Salmon Creek, Hazel Dell, and surrounding areas.",
							},
							{
								q: "Do you offer senior-friendly handyman services?",
								a: "Yes. We regularly help seniors with grab bar installation, slip-resistant thresholds, door adjustments, smart lock installation, and general home maintenance. We are licensed, insured, and take extra care to leave every job site clean and safe.",
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
								quote: "We had a positive experience with NORBILT here in Vancouver, WA. I worked with Andrey, who was courteous, professional, efficient, and delivered high-quality work in a timely manner. It's hard to find reliable help these days, and I truly appreciated his attention to detail and expertise.",
								name: "M. Taylor",
								location: "Vancouver, WA",
							},
							{
								quote: "I couldn't hold back on leaving a review, gotta say I am impressed with their professionalism! Came in, did the job and left a clean site always! I will recommend them to everyone!",
								name: "Dennis",
								location: "Vancouver, WA",
							},
							{
								quote: "Great experience with NORBILT. Andrey and his team were professional, easy to work with, and delivered high-quality work. Everything was smooth from start to finish. Highly recommend!",
								name: "Sam Y.",
								location: "Vancouver, WA",
							},
							{
								quote: "Andre, did a great job! He's very good at listening to the customer, he cares about making sure he gets it done, also he came on time and did with short notice from me the customer. Excellent service, I highly recommend him for any work needed. Five stars!",
								name: "Susan",
								location: "Vancouver, WA",
							},
							{
								quote: "I had a great experience working with NORBILT on my remodeling project. From start to finish, their team was professional, detail-oriented, and easy to communicate with. Andrey was especially helpful — he made sure everything stayed on track and met my expectations.",
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

			
			{/* RELATED GUIDES */}
			<section className="py-10 bg-[#F8F6F3] border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Related Cost Guides</p>
					<div className="flex flex-wrap gap-x-8 gap-y-3">
						<Link href="/blog/handyman-cost-vancouver-wa" className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1">How Much Does a Handyman Cost in Vancouver WA? <span aria-hidden>→</span></Link>
					<Link href="/blog/battle-ground-handyman-cost" className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1">Handyman Services in Battle Ground WA: 2026 Costs <span aria-hidden>→</span></Link>
					<Link href="/blog/handyman-services-camas-wa" className="text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors flex items-center gap-1">Handyman Services in Camas WA: 2026 Costs <span aria-hidden>→</span></Link>
					</div>
				</div>
			</section>

			{/* FINAL CTA - BILLBOARD STYLE */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden border-b-12 border-[#FFB800] shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
								Schedule a Handyman <br />{" "}
								<span className="text-[#FFB800]">in Clark County, WA</span>
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
		</>
	);
}
