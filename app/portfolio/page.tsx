import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, MapPin } from "lucide-react";

const categories = [
	{
		id: "bathroom",
		label: "Bathroom Remodels",
		href: "/services/kitchen-bath",
		description:
			"Tile surrounds, vanity upgrades, full remodels, and fixture updates across Clark County.",
		projects: [
			{
				src: "/remodel-images/Untitled%20design%20(2).jpg",
				alt: "Master bathroom vanity before and after remodel Vancouver WA",
				caption: "Master Bath Vanity Remodel",
				location: "Vancouver, WA",
				wide: true,
			},
			{
				src: "/remodel-images/IMG_1897%202.jpg",
				alt: "Marble tile shower with glass door remodel Clark County WA",
				caption: "Full Shower Tile & Glass Door",
				location: "Vancouver, WA",
				wide: false,
			},
			{
				src: "/remodel-images/IMG_2490.jpg",
				alt: "Marble tile tub surround installation Vancouver WA",
				caption: "Tub Surround Tile Install",
				location: "Vancouver, WA",
				wide: false,
			},
		],
	},
	{
		id: "kitchen",
		label: "Kitchen Updates",
		href: "/services/kitchen-bath",
		description:
			"Cabinet refreshes, backsplash installation, countertops, and full kitchen remodels.",
		projects: [
			{
				src: "/remodel-images/IMG_7646.jpg",
				alt: "Full kitchen remodel gray cabinets gold hardware Vancouver WA",
				caption: "Full Kitchen Remodel",
				location: "Vancouver, WA",
				wide: true,
			},
			{
				src: "/remodel-images/IMG_7645.jpg",
				alt: "Kitchen cabinets and tile backsplash remodel Clark County WA",
				caption: "Cabinet & Backsplash Update",
				location: "Vancouver, WA",
				wide: false,
			},
			{
				src: "/remodel-images/IMG_7649.jpg",
				alt: "Gray kitchen cabinets with stainless appliances Vancouver WA",
				caption: "Kitchen Remodel — Stove Side",
				location: "Vancouver, WA",
				wide: false,
			},
		],
	},
	{
		id: "outdoor",
		label: "Fence & Outdoor",
		href: "/services/handyman",
		description:
			"Cedar fence installation, deck repair, fence staining, and outdoor improvements.",
		projects: [
			{
				src: "/remodel-images/IMG_6433.jpg",
				alt: "Cedar fence and stamped concrete patio installation Vancouver WA",
				caption: "Cedar Fence & Stamped Concrete",
				location: "Vancouver, WA",
				wide: true,
			},
			{
				src: "/remodel-images/IMG_6429.jpg",
				alt: "Cedar privacy fence installation with retaining wall Clark County WA",
				caption: "Cedar Privacy Fence",
				location: "Clark County, WA",
				wide: false,
			},
			{
				src: "/remodel-images/IMG_6432.jpg",
				alt: "Cedar fence with paver patio backyard Vancouver WA",
				caption: "Fence & Paver Patio",
				location: "Vancouver, WA",
				wide: false,
			},
		],
	},
	{
		id: "flooring",
		gridCols: "grid-cols-2 lg:grid-cols-2",
		label: "Flooring",
		href: "/services/flooring",
		description:
			"Wide-plank hardwood and LVP flooring installations across Clark County homes.",
		projects: [
			{
				src: "/remodel-images/remodel-0.jpg",
				alt: "Wide plank hardwood flooring installation open living room Vancouver WA",
				caption: "Wide-Plank Hardwood Install",
				location: "Vancouver, WA",
				wide: true,
			},
			{
				src: "/remodel-images/remodel-1.jpg",
				alt: "Hardwood flooring living room with stone fireplace Clark County WA",
				caption: "Hardwood Flooring — Living Room",
				location: "Clark County, WA",
				wide: false,
			},
			{
				src: "/remodel-images/remodel-2.jpg",
				alt: "LVP flooring installation living room brick fireplace Vancouver WA",
				caption: "LVP Flooring Install",
				location: "Vancouver, WA",
				wide: false,
			},
			{
				src: "/remodel-images/remodel-3.jpg",
				alt: "Wide plank hardwood flooring upper landing staircase Clark County WA",
				caption: "Hardwood — Upper Landing",
				location: "Clark County, WA",
				wide: false,
			},
		],
	},
];

export default function PortfolioPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ImageGallery",
						name: "Norbilt Project Portfolio",
						description:
							"Real completed home repair and remodeling projects by Norbilt across Clark County WA.",
						url: "https://norbilt.com/portfolio",
						author: {
							"@type": "Organization",
							name: "Norbilt",
							url: "https://norbilt.com",
						},
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
					<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />
					<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
						<div className="max-w-4xl space-y-6">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Real Projects
							</span>
							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								Our Work Across <br />
								<span className="text-[#FFB800]">Clark County</span>
							</h1>
							<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								Every photo is a real completed job in Vancouver and the
								surrounding Clark County area. No stock images, no staging.
							</p>
							<div className="flex flex-wrap gap-4 pt-2">
								{["Bathroom Remodels", "Kitchen Updates", "Fence & Outdoor", "Flooring"].map(
									(cat) => (
										<a
											key={cat}
											href={`#${cat.toLowerCase().split(" ")[0]}`}
											className="px-5 py-2 bg-white/10 hover:bg-[#FFB800] hover:text-black text-white text-sm font-black uppercase tracking-widest rounded-full transition-all"
										>
											{cat}
										</a>
									),
								)}
							</div>
						</div>
					</div>
				</section>

				{/* CATEGORIES */}
				{categories.map((cat) => (
					<section
						key={cat.id}
						id={cat.id}
						className="py-24 odd:bg-white even:bg-[#F8F6F3]"
					>
						<div className="max-w-7xl mx-auto px-6 lg:px-8">
							{/* Category header */}
							<div className="flex items-start justify-between flex-wrap gap-4 mb-12">
								<div>
									<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-xs">
										Portfolio
									</span>
									<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mt-1">
										{cat.label}
									</h2>
									<p className="text-gray-600 mt-2 max-w-xl">{cat.description}</p>
								</div>
								<Link
									href={cat.href}
									className="flex items-center gap-2 text-[#2D5A3D] font-black text-xs uppercase tracking-widest hover:gap-3 transition-all mt-2"
								>
									See This Service <ArrowRight className="w-4 h-4" />
								</Link>
							</div>

							{/* Photo grid */}
							<div className={`grid ${(cat as any).gridCols ?? "grid-cols-2 lg:grid-cols-3"} gap-4`}>
								{cat.projects.map((project) => (
									<div
										key={project.src}
										className={`relative group rounded-2xl overflow-hidden shadow-sm ${project.wide ? "col-span-2 lg:col-span-1 aspect-video lg:aspect-square" : "aspect-square"}`}
									>
										<Image
											src={project.src}
											alt={project.alt}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										<div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
											<p className="text-white font-black text-sm uppercase tracking-wide">
												{project.caption}
											</p>
											<p className="text-white/70 text-xs flex items-center gap-1 mt-1">
												<MapPin className="w-3 h-3" />
												{project.location}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				))}

				{/* READY TO START */}
				<section className="py-24 bg-[#1F2E2B]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid lg:grid-cols-2 gap-16 items-center">
							<div className="space-y-6">
								<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
									Your Project Next
								</span>
								<h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
									Ready to Add Your Home to This List?
								</h2>
								<p className="text-[#A7C4B5] text-lg leading-relaxed">
									We're a licensed, bonded general contractor serving all of
									Clark County. Contact us for a free estimate — we'll tell you
									exactly what it'll cost before any work starts.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<Link
										href="/contact"
										className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all"
									>
										Get Free Estimate
										<ArrowRight className="w-5 h-5" />
									</Link>
									<Link
										href="tel:+13602169920"
										className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
									>
										<Phone className="w-5 h-5" />
										(360) 216-9920
									</Link>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{[
									{ value: "250+", label: "Projects Completed" },
									{ value: "5.0", label: "Google Rating" },
									{ value: "5+", label: "Years in Clark County" },
									{ value: "100%", label: "Licensed & Bonded" },
								].map((stat) => (
									<div
										key={stat.label}
										className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
									>
										<p className="text-3xl font-black text-[#FFB800] mb-1">
											{stat.value}
										</p>
										<p className="text-[#A7C4B5] text-xs font-bold uppercase tracking-widest">
											{stat.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* SERVICE AREAS */}
				<section className="py-16 bg-[#F8F6F3] text-center">
					<div className="max-w-4xl mx-auto px-6 space-y-6">
						<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest">
							We Work Across Clark County
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							{[
								{ name: "Vancouver", slug: "vancouver" },
								{ name: "Camas", slug: "camas" },
								{ name: "Battle Ground", slug: "battle-ground" },
								{ name: "Ridgefield", slug: "ridgefield" },
								{ name: "Felida", slug: "felida" },
								{ name: "Brush Prairie", slug: "brush-prairie" },
								{ name: "Washougal", slug: "washougal" },
							].map((city) => (
								<Link
									key={city.slug}
									href={`/locations/${city.slug}`}
									className="flex items-center gap-1 px-5 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
								>
									<MapPin className="w-3 h-3" />
									{city.name}, WA
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
