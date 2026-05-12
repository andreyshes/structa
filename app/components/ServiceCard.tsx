"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	href?: string;
	cta?: string;
	index?: number;
};

export default function ServiceCard({
	icon: Icon,
	title,
	description,
	href,
	cta,
	index = 0,
}: ServiceCardProps) {
	const cardClass =
		"group relative bg-[#F8F6F3] rounded-2xl p-8 hover:shadow-xl hover:shadow-[#2D5A3D]/10 transition-all duration-500 border border-[#E8E4DE] block";

	const inner = (
		<>
			<div className="absolute inset-0 bg-linear-to-br from-[#2D5A3D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

			<div className="relative">
				<div className="w-14 h-14 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2D5A3D] transition-colors duration-500">
					<Icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#F8F6F3] transition-colors duration-500" />
				</div>

				<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3 group-hover:text-[#2D5A3D] transition-colors duration-300">
					{title}
				</h3>

				<p className="text-[#2C3E3A]/70 leading-relaxed text-sm">
					{description}
				</p>

				{cta && (
					<span className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl text-xs group-hover:scale-105 transition-transform duration-300">
						{cta} →
					</span>
				)}
			</div>
		</>
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{href ? (
				<Link href={href} className={cardClass}>
					{inner}
				</Link>
			) : (
				<div className={cardClass}>{inner}</div>
			)}
		</motion.div>
	);
}
