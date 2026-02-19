"use client";

import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BrushPrairieLocationPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO SECTION - Optimized with H1 and Location Keywords */}
			<section className="pt-32 pb-28 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-8">
						<MapPin className="w-4 h-4" />
						Serving Clark County
					</span>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight">
						Expert Handyman & Home Services in{" "}
						<span className="text-[#4A7C59]">Brush Prairie, WA</span>
					</h1>

					<p className="text-xl md:text-2xl text-[#F8F6F3]/80 max-w-3xl mx-auto">
						From minor household repairs to custom interior improvements,
						Norbilt Homes provides reliable, high-quality craftsmanship for
						Brush Prairie homeowners.
					</p>
				</div>
			</section>

			{/* VALUE PROPOSITION SECTION */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
								Your Trusted Local Contractor in Brush Prairie
							</h2>
							<p className="text-lg text-[#2C3E3A]/80 mb-6 leading-relaxed">
								Maintaining a home in the Pacific Northwest requires attention
								to detail. Whether you’re dealing with the damp climate's
								effects on your exterior or looking to modernize your interior
								living space, our team is equipped to handle your home
								maintenance needs.
							</p>
							<ul className="space-y-4">
								{[
									"Licensed, Bonded, and Insured",
									"Deep knowledge of Clark County building styles",
									"Prompt, professional, and clean jobsites",
									"Transparent pricing and free estimates",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-[#2C3E3A]/90"
									>
										<CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="bg-[#E8E4DE] rounded-2xl p-8 border border-[#DCD7D0]">
							<h3 className="text-xl font-bold text-[#2C3E3A] mb-4">
								Area Coverage
							</h3>
							<p className="text-[#2C3E3A]/80">
								Based in Vancouver, we provide priority scheduling for the
								**Brush Prairie (98606)** community, including neighborhoods
								near Hockinson and Battle Ground.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES GRID - Semantic HTML for Search Crawlers */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A] mb-4">
						Our Home Improvement Services
					</h2>
					<p className="text-[#2C3E3A]/70 mb-12 max-w-2xl mx-auto">
						Comprehensive repair and remodeling solutions tailored to your
						home's specific needs.
					</p>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								name: "Professional Handyman Services",
								href: "/services/handyman",
								desc: "Reliable fixes for your to-do list.",
							},
							{
								name: "Expert Drywall Repair",
								href: "/services/drywall-repair",
								desc: "Seamless patching and texture matching.",
							},
							{
								name: "Custom Finish Carpentry",
								href: "/services/finish-carpentry",
								desc: "Crown molding, trim, and built-ins.",
							},
							{
								name: "Door & Window Solutions",
								href: "/services/door-window",
								desc: "Installation and weather-proofing.",
							},
							{
								name: "Kitchen & Bath Updates",
								href: "/services/kitchen-bath",
								desc: "Modernize your most used spaces.",
							},
							{
								name: "Flooring Installation",
								href: "/services/flooring",
								desc: "Hardwood, LVP, and tile repair.",
							},
						].map((service) => (
							<Link
								key={service.name}
								href={service.href}
								className="group rounded-xl border border-[#E8E4DE] bg-white p-8 text-left hover:shadow-lg transition-all duration-300"
							>
								<h3 className="text-lg font-bold text-[#2C3E3A] group-hover:text-[#2D5A3D] mb-2 transition">
									{service.name}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 mb-4">{service.desc}</p>
								<span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#4A7C59]">
									Learn More <ArrowRight className="w-3 h-3" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="py-28 bg-[#2C3E3A] text-center">
				<h2 className="text-3xl md:text-4xl font-semibold text-[#F8F6F3] mb-6">
					Ready to Start Your Brush Prairie Home Project?
				</h2>

				<p className="text-xl text-[#F8F6F3]/70 mb-12 max-w-2xl mx-auto">
					Don't put off those repairs any longer. Contact Norbilt Homes today
					for a free, no-obligation estimate.
				</p>

				<Link
					href="/contact"
					className="inline-flex items-center gap-2 px-10 py-5 bg-[#4A7C59] text-white rounded-xl hover:bg-[#5a916b] transition shadow-lg font-semibold"
				>
					Get Your Free Estimate
					<ArrowRight className="w-5 h-5" />
				</Link>
			</section>
		</div>
	);
}
