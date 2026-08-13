import Link from "next/link";
import { Metadata } from "next";
import {
	ArrowRight,
	CheckCircle2,
	MapPin,
	Phone,
	Star,
	Shield,
	Clock,
	Hammer,
	ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Home Remodeling Contractor Vancouver WA | Kitchen, Bath & Full Renovations | NORBILT",
	description:
		"Licensed home remodeling contractor in Vancouver WA and Clark County. Kitchen remodels, bathroom renovations, finish carpentry, flooring, and full home renovations. Free same-week estimates. Call (360) 216-9920.",
	alternates: {
		canonical: "https://www.norbilt.com/remodeling",
	},
	openGraph: {
		title: "Home Remodeling Contractor Vancouver WA | NORBILT",
		description:
			"Licensed home remodeling contractor in Clark County — kitchen & bath remodels, finish carpentry, flooring, and full home renovations. 5-star rated.",
		url: "https://www.norbilt.com/remodeling",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Home Remodeling Contractor Vancouver WA",
			},
		],
	},
	keywords: [
		"home remodeling contractor Vancouver WA",
		"home remodeling Clark County WA",
		"remodeling contractor near me Vancouver",
		"kitchen remodel Vancouver WA",
		"bathroom remodel Vancouver WA",
		"home renovation contractor Clark County",
		"licensed remodeling contractor Vancouver WA",
	],
};

const services = [
	{
		title: "Kitchen Remodeling",
		href: "/services/kitchen-bath",
		cityHref: "/locations/vancouver/kitchen-bath",
		desc: "Full gut remodels, cabinet upgrades, tile backsplash, countertop replacement, and complete kitchen transformations.",
		items: ["Full gut remodels", "Cabinet installation", "Tile backsplash", "Countertop replacement", "Fixture upgrades"],
	},
	{
		title: "Bathroom Remodeling",
		href: "/services/kitchen-bath",
		cityHref: "/locations/vancouver/bathroom-remodel",
		desc: "Tub-to-shower conversions, full bathroom renovations, vanity installs, custom tile, and complete bathroom makeovers.",
		items: ["Tub-to-shower conversion", "Full bathroom gut", "Custom tile work", "Vanity & mirror install", "Shower systems"],
	},
	{
		title: "Finish Carpentry",
		href: "/services/finish-carpentry",
		cityHref: "/locations/vancouver/finish-carpentry",
		desc: "Custom baseboards, crown molding, wainscoting, and interior trim that adds lasting value to every room.",
		items: ["Crown molding", "Baseboards & casing", "Wainscoting", "Built-in shelving", "Interior trim"],
	},
	{
		title: "Flooring",
		href: "/services/flooring",
		cityHref: "/locations/vancouver/flooring",
		desc: "LVP, hardwood, tile, and laminate installation throughout your home — with full subfloor prep and old floor removal.",
		items: ["Luxury vinyl plank (LVP)", "Tile & stone", "Hardwood", "Laminate", "Subfloor prep"],
	},
	{
		title: "Drywall & Paint",
		href: "/services/drywall-repair",
		cityHref: "/locations/vancouver/drywall-repair",
		desc: "Drywall installation, patch repair, texture matching, and paint prep — the backbone of any remodel.",
		items: ["Full room hang & finish", "Patch & texture match", "Water damage repair", "Skim coat", "Smooth finish"],
	},
	{
		title: "Full Home Renovations",
		href: "/estimate",
		cityHref: "/estimate",
		desc: "Multi-room and whole-home projects — coordinated start to finish under one licensed contractor, one contract, one point of contact.",
		items: ["Multi-room coordination", "Whole-home remodels", "Pre-sale renovations", "Basement finishing", "Room additions"],
	},
];

const cities = [
	{ name: "Vancouver", slug: "vancouver" },
	{ name: "Camas", slug: "camas" },
	{ name: "Ridgefield", slug: "ridgefield" },
	{ name: "Battle Ground", slug: "battle-ground" },
	{ name: "Washougal", slug: "washougal" },
	{ name: "Salmon Creek", slug: "salmon-creek" },
	{ name: "Brush Prairie", slug: "brush-prairie" },
	{ name: "Felida", slug: "felida" },
];

const faqs = [
	{
		q: "Do you handle full home remodels or just kitchen and bath?",
		a: "Both. NORBILT handles everything from a single bathroom renovation to multi-room whole-home projects. We coordinate all trades under one contract — no juggling multiple contractors.",
	},
	{
		q: "Are you a licensed general contractor in Washington State?",
		a: "Yes. NORBILT holds WA General Contractor License #NORBI**741CS, is bonded, and carries general liability insurance on every project. You can verify our license at the WA L&I website.",
	},
	{
		q: "How much does a home remodel cost in Vancouver WA?",
		a: "Costs vary widely by scope. A bathroom refresh runs $800–$3,000. A full bathroom remodel runs $8,000–$18,000. A full kitchen remodel runs $10,000–$35,000+. Use our free calculator for a ballpark, then book a free on-site estimate for exact pricing.",
	},
	{
		q: "How long does a remodel take?",
		a: "A bathroom remodel typically takes 1–3 weeks. A kitchen remodel runs 2–5 weeks. Whole-home projects are scoped on a per-job basis. We give you a written timeline before work begins.",
	},
	{
		q: "Do you offer free estimates?",
		a: "Yes — always. We walk your home, assess the scope, and provide written pricing before any work starts. No pressure, no obligation.",
	},
];

export default function RemodelingPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "HomeAndConstructionBusiness",
								"@id": "https://www.norbilt.com/remodeling#business",
								name: "NORBILT — Home Remodeling Contractor",
								url: "https://www.norbilt.com/remodeling",
								telephone: "+13602169920",
								email: "hello@norbilt.com",
								description:
									"Licensed home remodeling contractor in Vancouver WA and Clark County. Kitchen remodels, bathroom renovations, finish carpentry, flooring, and full home renovations.",
								address: {
									"@type": "PostalAddress",
									addressLocality: "Vancouver",
									addressRegion: "WA",
									postalCode: "98686",
									addressCountry: "US",
								},
								areaServed: "Clark County, WA",
								hasCredential: "WA General Contractor License NORBI**741CS",
								aggregateRating: {
									"@type": "AggregateRating",
									ratingValue: "5.0",
									reviewCount: "13",
									bestRating: "5",
								},
								priceRange: "$$",
							},
							{
								"@type": "BreadcrumbList",
								itemListElement: [
									{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
									{ "@type": "ListItem", position: 2, name: "Home Remodeling", item: "https://www.norbilt.com/remodeling" },
								],
							},
							{
								"@type": "FAQPage",
								mainEntity: faqs.map((f) => ({
									"@type": "Question",
									name: f.q,
									acceptedAnswer: { "@type": "Answer", text: f.a },
								})),
							},
						],
					}),
				}}
			/>

			<div className="bg-[#FDFCFB] min-h-screen">
				{/* HERO */}
				<section className="pt-32 pb-20 bg-[#14201D] text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFB800]/4 -skew-x-12 translate-x-1/3" />
					<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
						<div className="flex items-center gap-3 text-[#FFB800] mb-6">
							<MapPin className="w-4 h-4" />
							<span className="text-[10px] font-black uppercase tracking-widest">
								Licensed General Contractor · Vancouver, WA · Clark County
							</span>
						</div>
						<h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
							Home Remodeling <br />
							<span className="text-[#FFB800]">Contractor</span> <br />
							Vancouver, WA
						</h1>
						<p className="text-xl text-white/70 max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6 leading-relaxed mb-10">
							NORBILT is a licensed home remodeling contractor serving all of Clark County.
							Kitchen remodels, bathroom renovations, finish carpentry, flooring, and full home
							renovations — handled under one roof, by one team.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
							>
								Get Free Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
							>
								<Phone className="w-4 h-4" /> (360) 216-9920
							</a>
						</div>

						{/* Trust badges */}
						<div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
							{[
								{ icon: Shield, text: "WA Lic #NORBI**741CS" },
								{ icon: Star, text: "5-Star Google Rated" },
								{ icon: Clock, text: "Free Same-Week Estimates" },
								{ icon: Hammer, text: "250+ Clark County Projects" },
							].map(({ icon: Icon, text }) => (
								<div key={text} className="flex items-center gap-2 text-white/60 text-sm font-medium">
									<Icon className="w-4 h-4 text-[#FFB800]" />
									{text}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* SERVICES GRID */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="mb-12">
							<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-3">What We Do</p>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter leading-tight">
								Remodeling Services <br />
								<span className="text-[#2D5A3D]">in Clark County</span>
							</h2>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{services.map((s) => (
								<div key={s.title} className="bg-[#FDFCFB] rounded-2xl border border-[#2C3E3A]/10 p-7 hover:border-[#2D5A3D]/40 transition-colors group">
									<h3 className="text-xl font-black text-[#1F2E2B] mb-3 group-hover:text-[#2D5A3D] transition-colors">
										{s.title}
									</h3>
									<p className="text-sm text-[#2C3E3A]/60 leading-relaxed mb-5">{s.desc}</p>
									<ul className="space-y-2 mb-6">
										{s.items.map((item) => (
											<li key={item} className="flex items-center gap-2 text-sm text-[#2C3E3A] font-medium">
												<CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0" />
												{item}
											</li>
										))}
									</ul>
									<Link
										href={s.href}
										className="inline-flex items-center gap-1 text-sm font-black text-[#2D5A3D] hover:gap-2 transition-all uppercase tracking-wider"
									>
										Learn More <ChevronRight className="w-4 h-4" />
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* WHY NORBILT */}
				<section className="py-20 bg-[#1F2E2B] text-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div>
								<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-4">Why Homeowners Choose NORBILT</p>
								<h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
									One Contractor. <br />
									<span className="text-[#FFB800]">Every Trade.</span>
								</h2>
								<p className="text-white/70 text-lg leading-relaxed mb-8">
									Most remodeling projects fall apart in the coordination — too many subs, no one point of contact,
									and no one accountable for the whole job. NORBILT handles kitchen, bath, carpentry, flooring,
									and drywall under one contract. You deal with one person, one price, one schedule.
								</p>
								<Link
									href="/estimate"
									className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all"
								>
									Get Free Estimate <ArrowRight className="w-4 h-4" />
								</Link>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{[
									{ label: "Licensed & Bonded", sub: "WA Lic #NORBI**741CS — verifiable at L&I" },
									{ label: "Flat-Rate Pricing", sub: "Written price before we touch anything" },
									{ label: "1-Year Warranty", sub: "Workmanship guarantee on every project" },
									{ label: "Clark County Only", sub: "Local crew, faster scheduling, local suppliers" },
									{ label: "5-Star Rated", sub: "13 Google reviews, all five stars" },
									{ label: "Free Estimates", sub: "On-site walkthrough, no obligation" },
								].map(({ label, sub }) => (
									<div key={label} className="bg-white/5 rounded-xl p-5 border border-white/10">
										<div className="text-sm font-black text-white mb-1">{label}</div>
										<div className="text-xs text-white/50 leading-relaxed">{sub}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* SERVICE AREAS */}
				<section className="py-16 bg-[#F8F6F3]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Service Area</p>
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
							Remodeling Across Clark County
						</h2>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
							{cities.map(({ name, slug }) => (
								<Link
									key={slug}
									href={`/locations/${slug}`}
									className="group flex items-center justify-between p-4 bg-white rounded-xl border border-[#2C3E3A]/10 hover:border-[#2D5A3D] transition-colors"
								>
									<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">
										{name}, WA
									</span>
									<ChevronRight className="w-4 h-4 text-[#2C3E3A]/30 group-hover:text-[#2D5A3D] transition-colors" />
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="py-20 bg-white">
					<div className="max-w-3xl mx-auto px-6">
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Common Questions</p>
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-10">
							Home Remodeling FAQ
						</h2>
						<div className="space-y-6">
							{faqs.map((f) => (
								<div key={f.q} className="border-b border-[#2C3E3A]/10 pb-6">
									<h3 className="font-black text-[#1F2E2B] mb-2">{f.q}</h3>
									<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">{f.a}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-20 bg-[#FFB800]">
					<div className="max-w-3xl mx-auto px-6 text-center">
						<h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-4">
							Ready to Start Your Remodel?
						</h2>
						<p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
							Get a free on-site estimate this week. We walk your home, assess the scope,
							and give you written pricing — no pressure, no obligation.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
							>
								Get Instant Estimate <ArrowRight className="w-4 h-4" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all"
							>
								<Phone className="w-4 h-4" /> Call (360) 216-9920
							</a>
						</div>
					</div>
				</section>

				{/* RELATED READING */}
				<section className="py-16 bg-[#F8F6F3] border-t border-gray-100">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-6">Remodeling Cost Guides</p>
						<div className="grid sm:grid-cols-3 gap-4">
							{[
								{ href: "/blog/home-remodeling-vancouver-wa", label: "Home Remodeling in Vancouver WA", sub: "Costs, timelines & what to expect" },
								{ href: "/blog/bathroom-remodel-cost-clark-county-wa", label: "Bathroom Remodel Cost Guide", sub: "Clark County WA · 2026 pricing" },
								{ href: "/blog/kitchen-remodel-cost-vancouver-wa", label: "Kitchen Remodel Cost Guide", sub: "Vancouver WA · Full vs. cosmetic" },
							].map(({ href, label, sub }) => (
								<Link
									key={href}
									href={href}
									className="group p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#2D5A3D] transition-colors"
								>
									<p className="font-black text-[#1F2E2B] text-sm group-hover:text-[#2D5A3D] transition-colors">{label}</p>
									<p className="text-xs text-gray-400 mt-1">{sub}</p>
									<p className="text-xs font-black text-[#FFB800] uppercase tracking-widest mt-3">Read →</p>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
