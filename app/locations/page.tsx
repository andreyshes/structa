import Link from "next/link";
import {
	MapPin,
	ArrowRight,
	Phone,
	ShieldCheck,
	CheckCircle2,
} from "lucide-react";

interface LocationCity {
	name: string;
	href: string;
	description: string;
	tags?: string[];
	primary?: boolean;
}

interface Region {
	title: string;
	cities: LocationCity[];
}

export default function LocationsIndexPage() {
	const regions: Region[] = [
		{
			title: "Primary Service Hub",
			cities: [
				{
					name: "Vancouver, WA",
					href: "/locations/vancouver",
					description:
						"Our main hub for general contractor work in Clark County. We handle kitchen updates, wood trim, drywall repair, and all home repairs across Vancouver.",
					tags: ["Main Hub", "Full Service"],
					primary: true,
				},
			],
		},
		{
			title: "East Clark County",
			cities: [
				{
					name: "Camas, WA",
					href: "/locations/camas",
					description:
						"Licensed general contractor for Camas homes. We do high-end wood trim, home repairs, and interior updates for local homeowners.",
					tags: ["Interior Trim", "Updates"],
					primary: false,
				},
				{
					name: "Washougal, WA",
					href: "/locations/washougal",
					description:
						"Trusted home repair contractor in Washougal. Our team handles general repairs, maintenance, and interior fixes for local homes.",
					tags: ["Home Repair", "Maintenance"],
					primary: false,
				},
			],
		},
		{
			title: "North Clark County",
			cities: [
				{
					name: "Ridgefield, WA",
					href: "/locations/ridgefield",
					description:
						"General contractor for new and older Ridgefield homes. We provide drywall repair, trim work, and home updates you can count on.",
					tags: ["New Work", "Drywall"],
					primary: false,
				},
				{
					name: "Battle Ground, WA",
					href: "/locations/battle-ground",
					description:
						"Licensed contractor in Battle Ground for home repairs and handyman work. Fast, reliable service for local homeowners.",
					tags: ["General Repairs", "Fixes"],
					primary: false,
				},
				{
					name: "Brush Prairie, WA",
					href: "/locations/brush-prairie",
					description:
						"Home repair contractor serving Brush Prairie. We handle carpentry, general fixes, and interior work for houses and rural properties.",
					tags: ["Wood Work", "Licensed Pro"],
					primary: false,
				},
			],
		},
		{
			title: "Vancouver Neighborhoods",
			cities: [
				{
					name: "Felida, WA",
					href: "/locations/felida",
					description:
						"Local home repair contractor for Felida. We do fixture installs, general repairs, and interior updates for your home.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Salmon Creek, WA",
					href: "/locations/salmon-creek",
					description:
						"Home repair and drywall contractor in Salmon Creek. We match wall textures and prep interiors for a clean finish.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Hazel Dell, WA",
					href: "/locations/hazel-dell",
					description:
						"Your go-to contractor in Hazel Dell for home repairs and bath updates. Licensed, bonded, and ready to help.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Orchards, WA",
					href: "/locations/orchards",
					description:
						"Reliable home repair contractor in Orchards. We handle trim work, general fixes, and fast maintenance calls.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Mill Plain, WA",
					href: "/locations/mill-plain",
					description:
						"General contractor for Mill Plain homes. We do custom trim, flooring repair, and interior updates for every room.",
					tags: ["Local Service"],
					primary: false,
				},
				{
					name: "Five Corners, WA",
					href: "/locations/five-corners",
					description:
						"Home repair and handyman contractor in Five Corners. We provide carpentry and general fixes for local homeowners.",
					tags: ["Local Service"],
					primary: false,
				},
			],
		},
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO SECTION */}
			<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl space-y-6">
						<div className="flex items-center gap-3 animate-fade-in-up">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Serving SW Washington
							</span>
							<span className="text-[#A7C4B5] font-bold text-sm uppercase tracking-widest">
								Clark County Licensed Contractor
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase animate-fade-in-left animate-delay-100">
							Areas We <br />
							<span className="text-[#FFB800]">Serve</span>
						</h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Norbilt is a licensed general contractor serving Vancouver and
							all of Clark County, WA. We provide home repairs, interior
							remodeling, and quality contractor work you can trust.
						</p>
					</div>
				</div>
			</section>

			{/* QUICK TRUST BAR */}
			<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
				<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
					<div className="flex items-center gap-2">
						<ShieldCheck className="w-5 h-5 text-[#FFB800]" />
						<span className="text-white font-black text-xs uppercase tracking-widest">
							Licensed & Bonded
						</span>
					</div>
					<div className="flex items-center gap-2">
						<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
						<span className="text-white font-black text-xs uppercase tracking-widest">
							Local Home Pro
						</span>
					</div>
				</div>
			</section>

			{/* LOCATIONS GRID */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="space-y-32">
						{regions.map((region) => (
							<div key={region.title} className="space-y-12">
								<div className="flex items-center gap-6">
									<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter shrink-0">
										{region.title}
									</h2>
									<div className="h-px bg-gray-300 w-full" />
								</div>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{region.cities.map((location, index) => (
										<div key={location.name}>
											<Link
												href={location.href}
												className={`group relative flex flex-col h-full rounded-3xl p-10 transition-all duration-500 border-b-8 shadow-sm ${
													location.primary
														? "bg-[#1F2E2B] border-[#FFB800] text-white"
														: "bg-white border-transparent hover:border-[#FFB800] text-[#1F2E2B]"
												}`}
											>
												<div className="flex justify-between items-start mb-6">
													<MapPin
														className={`w-8 h-8 ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
													/>
												</div>

												<h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
													{location.name}
												</h3>

												<p
													className={`font-medium leading-relaxed mb-8 text-sm ${location.primary ? "text-[#A7C4B5]" : "text-gray-600"}`}
												>
													{location.description}
												</p>

												<div
													className={`mt-auto inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] ${location.primary ? "text-[#FFB800]" : "text-[#2D5A3D]"}`}
												>
													See {location.name.split(",")[0]} Work{" "}
													<ArrowRight className="w-4 h-4" />
												</div>
											</Link>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-24 lg:py-40">
				<div className="max-w-7xl mx-auto px-6">
					<div className="bg-[#FFB800] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
						<div className="relative z-10 max-w-3xl mx-auto space-y-8">
							<h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">
								Start Your Local <br />{" "}
								<span className="text-[#1F2E2B]">Job Today</span>
							</h2>
							<div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
								<Link
									href="/contact"
									className="px-12 py-6 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl shadow-xl"
								>
									Get Free Estimate
								</Link>
								<Link
									href="tel:+19165086272"
									className="px-12 py-6 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3"
								>
									<Phone className="w-5 h-5" /> Call Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
