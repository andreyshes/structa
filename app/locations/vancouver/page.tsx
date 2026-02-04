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
						"@type": "LocalBusiness",
						name: "Norbilt Homes",
						url: "https://www.norbilt.com",
						telephone: "+1-916-508-6272",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Vancouver",
							addressRegion: "WA",
							addressCountry: "US",
						},
						areaServed: [
							{ "@type": "Place", name: "Vancouver, WA" },
							{ "@type": "Place", name: "Hazel Dell, WA" },
							{ "@type": "Place", name: "Salmon Creek, WA" },
							{ "@type": "Place", name: "Five Corners, WA" },
							{ "@type": "Place", name: "Brush Prairie, WA" },
							{ "@type": "Place", name: "Camas, WA" },
						],
						serviceType: [
							"Handyman Services",
							"Home Repair",
							"Drywall Repair",
							"Finish Carpentry",
							"Kitchen & Bathroom Updates",
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
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
						>
							Professional Home Repair & Handyman Services in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
						>
							Norbilt Homes provides dependable home repairs, finish carpentry,
							and interior improvement services for homeowners throughout
							Vancouver, Washington — with clean work, clear communication, and
							long-lasting results.
						</motion.p>
					</div>
				</section>

				{/* INTRO */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-5xl mx-auto px-6 text-center space-y-8 text-[#2C3E3A]/80">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
							Reliable Home Services for Vancouver Homeowners
						</h2>

						<p className="text-lg leading-relaxed">
							Owning a home in Vancouver means staying ahead of repairs,
							maintenance, and interior upgrades that protect your investment
							and keep your space functional.
						</p>

						<p className="text-lg leading-relaxed">
							Norbilt Homes works with homeowners across Vancouver — including
							Hazel Dell, Salmon Creek, Five Corners, and surrounding Clark
							County neighborhoods — providing skilled workmanship without the
							stress of juggling multiple contractors.
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
									title: "Handyman & Home Repairs",
									href: "/services/handyman",
								},
								{
									icon: Layers,
									title: "Drywall Repair",
									href: "/services/drywall-repair",
								},
								{
									icon: Home,
									title: "Finish Carpentry",
									href: "/services/finish-carpentry",
								},
								{
									icon: DoorOpen,
									title: "Door & Window Repair",
									href: "/services/door-window",
								},
								{
									icon: Home,
									title: "Flooring Repairs",
									href: "/services/flooring",
								},
								{
									icon: Hammer,
									title: "Kitchen & Bathroom Updates",
									href: "/services/kitchen-bath",
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
										Tailored solutions for Vancouver homes and homeowners.
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
							<li>• Detail-driven craftsmanship on every project</li>
							<li>• Clear communication and honest recommendations</li>
							<li>• Respect for your home and clean job sites</li>
							<li>• Locally based with knowledge of Vancouver homes</li>
						</ul>
					</div>
				</section>
				{/* FAQ */}
				<section className="py-24 bg-[#E8E4DE]">
					<div className="max-w-5xl mx-auto px-6">
						<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-10 text-center">
							Frequently Asked Questions About Home Services in Vancouver, WA
						</h2>

						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
									What home services do you offer in Vancouver, WA?
								</h3>
								<p className="text-[#2C3E3A]/80 leading-relaxed">
									Norbilt Homes provides handyman services, home repairs,
									drywall repair, finish carpentry, door and window repair,
									flooring repairs, and kitchen and bathroom updates for
									homeowners throughout Vancouver, Washington.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
									Do you offer free estimates for home repair projects?
								</h3>
								<p className="text-[#2C3E3A]/80 leading-relaxed">
									Yes. We offer free estimates for home repair and improvement
									projects in Vancouver. We’ll review your project, discuss
									options, and provide clear recommendations before any work
									begins.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
									Are you licensed and insured in Washington?
								</h3>
								<p className="text-[#2C3E3A]/80 leading-relaxed">
									Yes. Norbilt Homes is properly licensed and insured to perform
									home repair and improvement services in Washington State.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
									What areas around Vancouver do you serve?
								</h3>
								<p className="text-[#2C3E3A]/80 leading-relaxed">
									In addition to Vancouver, we regularly serve Hazel Dell,
									Salmon Creek, Five Corners, Brush Prairie, Camas, and nearby
									Clark County communities.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-2">
									Do you handle small jobs and punch lists?
								</h3>
								<p className="text-[#2C3E3A]/80 leading-relaxed">
									Absolutely. We regularly help homeowners with small repairs,
									punch lists, and ongoing maintenance projects that larger
									contractors often avoid.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-28 bg-[#2C3E3A] text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#F8F6F3] mb-6">
						Get a Free Home Repair Estimate in Vancouver, WA
					</h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-12 max-w-2xl mx-auto">
						Tell us about your project and we’ll help you plan the next step.
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
