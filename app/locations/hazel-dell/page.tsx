"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function HazelDellLocationPage() {
	return (
		<div className="overflow-hidden">
			<section className="pt-32 pb-24 bg-[#2C3E3A]">
				<div className="max-w-6xl mx-auto px-6">
					<span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm mb-6">
						<MapPin className="w-4 h-4" />
						Hazel Dell, WA
					</span>

					<h1 className="text-4xl md:text-5xl font-semibold text-[#F8F6F3] mb-6">
						Home Services in Hazel Dell, WA
					</h1>

					<p className="text-xl text-[#F8F6F3]/80 max-w-3xl">
						Trusted home repair and improvement services for homeowners in Hazel
						Dell and nearby Vancouver neighborhoods.
					</p>
				</div>
			</section>

			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-4xl mx-auto px-6 space-y-6 text-[#2C3E3A]/70">
					<p>
						From interior repairs to finish carpentry and maintenance, we help
						Hazel Dell homeowners keep their homes functional, comfortable, and
						well cared for.
					</p>

					<p>
						Our team regularly serves Hazel Dell as part of our Vancouver-based
						service area.
					</p>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-5xl mx-auto px-6">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-10">
						Home Services Available in Hazel Dell
					</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ name: "Handyman & Home Repairs", href: "/services/handyman" },
							{ name: "Drywall Repair", href: "/services/drywall-repair" },
							{ name: "Finish Carpentry", href: "/services/finish-carpentry" },
							{ name: "Door & Window Repair", href: "/services/door-window" },
							{
								name: "Kitchen & Bathroom Updates",
								href: "/services/kitchen-bath",
							},
							{ name: "Flooring Repairs", href: "/services/flooring" },
						].map((service) => (
							<Link
								key={service.name}
								href={service.href}
								className="block rounded-xl border border-[#E8E4DE] bg-white p-6 hover:shadow-md transition"
							>
								<span className="text-lg font-medium text-[#2C3E3A]">
									{service.name}
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 bg-[#2C3E3A] text-center">
				<h2 className="text-3xl font-semibold text-[#F8F6F3] mb-6">
					Need Home Services in Hazel Dell?
				</h2>
				<Link
					href="/contact"
					className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59]"
				>
					Request a Free Estimate
					<ArrowRight className="w-5 h-5" />
				</Link>
			</section>
		</div>
	);
}
