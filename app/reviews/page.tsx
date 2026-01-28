"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, ArrowRight, MessageSquare } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

type Testimonial = {
	name: string;
	location: string;
	rating: number;
	text: string;
	project: string;
};

export default function ReviewsPage() {
	const testimonials: Testimonial[] = [
		{
			name: "Sarah Mitchell",
			location: "Portland, OR",
			rating: 5,
			text: "Evergreen Collective transformed our dated bathroom into a beautiful, modern space. Their attention to detail and clean work ethic was impressive. The team communicated every step of the way, and the final result exceeded our expectations. We've already recommended them to several friends.",
			project: "Bathroom Refresh",
		},
		{
			name: "James Thompson",
			location: "Seattle, WA",
			rating: 5,
			text: "Finally found a handyman service that shows up on time and does quality work. They've handled everything from trim work to deck repairs for us. It's so refreshing to work with professionals who take pride in their craft. They treat our home like it's their own.",
			project: "Multiple Home Repairs",
		},
		{
			name: "Emily Chen",
			location: "Bend, OR",
			rating: 5,
			text: "The team was incredibly respectful of our home and family. They communicated every step and left our kitchen update cleaner than they found it. The cabinet painting and new hardware made such a difference — our kitchen feels brand new without the full renovation cost.",
			project: "Kitchen Update",
		},
		{
			name: "Michael Foster",
			location: "Tacoma, WA",
			rating: 5,
			text: "After several disappointing experiences with other contractors, Evergreen was a breath of fresh air. Honest pricing, beautiful work, and genuine care for the outcome. They built custom bookshelves in our living room that look like they've always been there. Exceptional craftsmanship.",
			project: "Built-in Bookshelves",
		},
		{
			name: "Amanda Rodriguez",
			location: "Eugene, OR",
			rating: 5,
			text: "We hired Evergreen for our pre-sale punch list — dozens of small repairs and touch-ups. They handled everything efficiently and professionally. Our home looked perfect for showings, and we sold above asking price.",
			project: "Pre-Sale Repairs",
		},
		{
			name: "David Park",
			location: "Olympia, WA",
			rating: 5,
			text: "The crown molding and trim work they did in our main floor is stunning. You can tell they take real pride in the details — perfectly mitered corners, smooth transitions, clean caulk lines.",
			project: "Trim & Crown Molding",
		},
		{
			name: "Jennifer Walsh",
			location: "Bellingham, WA",
			rating: 5,
			text: "Our deck was in rough shape after years of PNW weather. The Evergreen team replaced damaged boards, refinished the railings, and it looks better than new.",
			project: "Deck Restoration",
		},
		{
			name: "Robert Kim",
			location: "Portland, OR",
			rating: 5,
			text: "We've used Evergreen Collective for several projects now — bathroom vanity installation, light fixtures, and drywall repairs. Consistent quality every single time.",
			project: "Various Home Improvements",
		},
		{
			name: "Lisa Morrison",
			location: "Lake Oswego, OR",
			rating: 5,
			text: "The mudroom built-ins they designed and installed are exactly what we needed. Hooks, cubbies, a bench with storage — all perfectly fitted to our space.",
			project: "Custom Mudroom Built-ins",
		},
	];

	const stats = [
		{ value: "100+", label: "5-Star Reviews" },
		{ value: "98%", label: "Would Recommend" },
		{ value: "10+", label: "Years of Service" },
		{ value: "500+", label: "Happy Clients" },
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F8F6F3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
					>
						<MessageSquare className="w-4 h-4" />
						Client Testimonials
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						What Our Clients Say
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						Hear from homeowners across the Pacific Northwest who’ve experienced
						the Evergreen difference.
					</motion.p>
				</div>
			</section>

			{/* STATS */}
			<section className="py-12 bg-[#2D5A3D]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="text-center"
						>
							<p className="text-3xl md:text-4xl font-bold text-[#F8F6F3]">
								{stat.value}
							</p>
							<p className="text-[#F8F6F3]/70 text-sm">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* REVIEWS */}
			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
							className="bg-white rounded-2xl p-8 border border-[#E8E4DE] relative hover:shadow-xl transition-all"
						>
							<Quote className="absolute top-6 right-6 w-8 h-8 text-[#2D5A3D]/10" />

							<span className="inline-block px-3 py-1 bg-[#2D5A3D]/10 rounded-full text-xs text-[#2D5A3D] font-medium mb-4">
								{testimonial.project}
							</span>

							<div className="flex gap-1 mb-4">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star
										key={i}
										className={`w-4 h-4 ${
											i < testimonial.rating
												? "text-[#8B7355] fill-[#8B7355]"
												: "text-[#E8E4DE]"
										}`}
									/>
								))}
							</div>

							<p className="text-[#2C3E3A]/80 text-sm mb-6">
								“{testimonial.text}”
							</p>

							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-[#2D5A3D] rounded-full flex items-center justify-center text-white font-semibold">
									{testimonial.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</div>
								<div>
									<p className="font-semibold text-[#2C3E3A]">
										{testimonial.name}
									</p>
									<p className="text-sm text-[#2C3E3A]/60">
										{testimonial.location}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 lg:py-32 bg-[#E8E4DE] text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto px-6"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
						Ready to Experience the Difference?
					</h2>
					<p className="text-xl text-[#2C3E3A]/70 mb-10">
						Let’s talk about your project.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition"
					>
						Start Your Project
						<ArrowRight className="w-5 h-5" />
					</Link>
				</motion.div>
			</section>
		</div>
	);
}
