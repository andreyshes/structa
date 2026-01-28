"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
	eyebrow?: string;
	title: string;
	description?: string;
	centered?: boolean;
	light?: boolean;
};

export default function SectionHeader({
	eyebrow,
	title,
	description,
	centered = true,
	light = false,
}: SectionHeaderProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
		>
			{eyebrow && (
				<span
					className={`inline-block text-sm font-medium tracking-wider uppercase mb-4 ${
						light ? "text-[#4A7C59]" : "text-[#4A7C59]"
					}`}
				>
					{eyebrow}
				</span>
			)}

			<h2
				className={`text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 ${
					light ? "text-[#F8F6F3]" : "text-[#2C3E3A]"
				}`}
			>
				{title}
			</h2>

			{description && (
				<p
					className={`text-lg leading-relaxed ${
						light ? "text-[#F8F6F3]/80" : "text-[#2C3E3A]/70"
					}`}
				>
					{description}
				</p>
			)}
		</motion.div>
	);
}
  