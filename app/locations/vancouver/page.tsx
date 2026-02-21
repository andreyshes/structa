"use client";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	MapPin,
	Hammer,
	Layers,
	DoorOpen,
	Home,
	ArrowRight,
} from "lucide-react";

export default function VancouverLocationPage() {
	return (
		<>
			<Script
				id="local-business-schema"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "HomeAndConstructionBusiness",
						name: "Norbilt Homes",
						url: "https://www.norbilt.com/locations/vancouver",
						telephone: "+1-916-508-6272",
						priceRange: "$$",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Vancouver",
							addressRegion: "WA",
							addressCountry: "US",
						},
						areaServed: {
							"@type": "AdministrativeArea",
							name: "Clark County, WA",
						},
						serviceType: [
							"Handyman Services",
							"Home Repair",
							"Drywall Repair",
							"Finish Carpentry",
							"Kitchen Remodeling",
							"Bathroom Updates",
							"Door & Window Repair",
							"Flooring Repair",
						],
						sameAs: ["https://www.instagram.com/norbiltwa"],
					}),
				}}
			/>

			<div className="overflow-hidden">
				{/* HERO */}
				<section className="pt-32 pb-28 bg-[#2C3E3A]">
					<div className="max-w-7xl mx-auto px-6 text-center">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8"
						>
							<MapPin className="w-4 h-4" />
							Vancouver, Washington
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Vancouver WA Handyman & Home Repair Contractor
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
						>
							Norbilt Homes provides professional handyman services, drywall
							repair, finish carpentry, and interior improvement solutions for
							homeowners throughout Vancouver, WA and surrounding Clark County
							communities.
						</motion.p>
					</div>
				</section>

				{/* INTRO */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 space-y-8 text-[#2C3E3A]/80">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] text-center">
							Reliable Home Repair Services in Vancouver, WA
						</h2>

						<p className="text-lg leading-relaxed">
							Homes in Vancouver face seasonal moisture, temperature shifts, and
							natural settling common throughout the Pacific Northwest. These
							conditions often lead to drywall cracks, trim separation, sticking
							doors, flooring movement, and interior wear that require
							professional attention.
						</p>

						<p className="text-lg leading-relaxed">
							Norbilt Homes works with homeowners across Hazel Dell, Salmon
							Creek, Five Corners, Brush Prairie, Orchards, Felida, and Camas —
							delivering detail-driven craftsmanship with clean job sites and
							clear communication from start to finish.
						</p>

						<p className="text-lg leading-relaxed">
							Whether you need small handyman repairs, drywall patching,
							precision finish carpentry, or targeted kitchen and bathroom
							updates, we provide dependable solutions tailored specifically for
							Vancouver homes.
						</p>
					</div>
				</section>

				{/* SERVICES */}
				<section className="py-24 bg-[#E8E4DE]">
					<div className="max-w-7xl mx-auto px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-12">
							Home Services We Offer in Vancouver, WA
						</h2>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									icon: Hammer,
									title: "Vancouver WA Handyman Services",
									href: "/locations/vancouver/handyman",
								},
								{
									icon: Layers,
									title: "Drywall Repair in Vancouver WA",
									href: "/locations/vancouver/drywall-repair",
								},
								{
									icon: Home,
									title: "Finish Carpentry in Vancouver",
									href: "/locations/vancouver/finish-carpentry",
								},
								{
									icon: DoorOpen,
									title: "Door & Window Repair in Vancouver",
									href: "/locations/vancouver/door-window",
								},
								{
									icon: Home,
									title: "Flooring Repair & Interior Updates",
									href: "/locations/vancouver/flooring",
								},
								{
									icon: Hammer,
									title: "Kitchen & Bathroom Updates",
									href: "/locations/vancouver/kitchen-bath",
								},
							].map((service) => (
								<Link
									key={service.title}
									href={service.href}
									className="group bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE] hover:shadow-xl transition text-left"
								>
									<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2D5A3D] transition">
										<service.icon className="w-6 h-6 text-[#2D5A3D] group-hover:text-[#F8F6F3] transition" />
									</div>
									<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
										{service.title}
									</h3>
									<p className="text-[#2C3E3A]/70">
										Professional home repair solutions for Vancouver homeowners.
									</p>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* WHY */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 text-center">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-10">
							Why Vancouver Homeowners Choose Norbilt Homes
						</h2>

						<ul className="space-y-4 text-lg text-[#2C3E3A]/80 max-w-3xl mx-auto text-left">
							<li>• Licensed & insured in Washington State</li>
							<li>• Detail-driven craftsmanship on every project</li>
							<li>• Clear communication and honest recommendations</li>
							<li>• Respectful, clean job sites</li>
							<li>• Experienced working in Vancouver-area homes</li>
						</ul>
					</div>
				</section>

				{/* CTA */}
				<section className="py-28 bg-[#2C3E3A] text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#F8F6F3] mb-6">
						Get a Free Home Repair Estimate in Vancouver, WA
					</h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-12 max-w-2xl mx-auto">
						Contact Norbilt Homes today to discuss your project and receive a
						clear, professional estimate.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-lg"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</section>
			</div>
		</>
	);
}
