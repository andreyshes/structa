"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type TestimonialCardProps = {
	name: string;
	location: string;
	rating: number;
	text: string;
	index?: number;
};

export default function TestimonialCard({
	name,
	location,
	rating,
	text,
	index = 0,
}: TestimonialCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg shadow-[#2C3E3A]/5 border border-[#E8E4DE]"
		>
			{/* Decorative elements */}
			<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2D5A3D]/5 rounded-full" />
			<Quote className="absolute top-6 right-6 w-8 h-8 text-[#2D5A3D]/20" />

			<div className="relative">
				{/* Stars */}
				<div className="flex gap-1 mb-4">
					{Array.from({ length: 5 }).map((_, i) => (
						<Star
							key={i}
							className={`w-4 h-4 ${
								i < rating ? "text-[#8B7355] fill-[#8B7355]" : "text-[#E8E4DE]"
							}`}
						/>
					))}
				</div>

				{/* Review text */}
				<p className="text-[#2C3E3A]/80 leading-relaxed mb-6 text-sm">
					“{text}”
				</p>

				{/* Author */}
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-linear-to-br from-[#2D5A3D] to-[#4A7C59] rounded-full flex items-center justify-center text-[#F8F6F3] font-semibold">
						{name
							.split(" ")
							.map((n) => n[0])
							.join("")}
					</div>

					<div>
						<p className="font-semibold text-[#2C3E3A]">{name}</p>
						<p className="text-sm text-[#2C3E3A]/60">{location}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
