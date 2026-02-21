"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

const faqs = [
	{
		question: "Are you licensed and insured in Washington State?",
		answer:
			"Yes, Norbilt is fully licensed, bonded, and insured in Washington State. We carry general liability insurance and workers' compensation coverage to protect our clients and our team.",
	},
	{
		question: "What areas do you serve?",
		answer:
			"We serve all of Clark County, WA, including Vancouver, Camas, Battle Ground, Ridgefield, Washougal, Salmon Creek, Hazel Dell, Five Corners, Brush Prairie, Felida, Lake Shore, Orchards, and Mill Plain.",
	},
	{
		question: "How long does a typical project take?",
		answer:
			"Project timelines vary based on scope. Small repairs might take a day or two, while larger remodels can take several weeks. We provide detailed timelines in our estimates and keep you updated throughout the process.",
	},
	{
		question: "Do you offer free estimates?",
		answer:
			"Yes, we provide free, no-obligation estimates for all projects. We'll visit your home, assess the work needed, and provide a detailed written proposal.",
	},
	{
		question: "What types of projects do you specialize in?",
		answer:
			"We specialize in interior work including finish carpentry, drywall repair, kitchen and bathroom updates, door and window installation, flooring repairs, and general handyman services.",
	},
	{
		question: "Do you clean up after the project?",
		answer:
			"Absolutely. We believe in leaving your home cleaner than we found it. We use dust containment systems, protect your floors and furniture, and thoroughly clean up after each day's work.",
	},
];

export default function FaqSection() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<section className="py-24 lg:py-32 bg-[#F8F6F3]">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<SectionHeader
					eyebrow="FAQ"
					title="Frequently Asked Questions"
					description="Common questions about our services, licensing, and service area."
				/>

				<div className="mt-16 space-y-4">
					{faqs.map((faq, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
							className="bg-white rounded-xl border border-[#E8E4DE] overflow-hidden"
						>
							<button
								onClick={() => setOpenFaq(openFaq === i ? null : i)}
								className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F8F6F3]/50 transition"
							>
								<span className="font-semibold text-[#2C3E3A] pr-4">
									{faq.question}
								</span>
								<ChevronDown
									className={`w-5 h-5 text-[#2D5A3D] flex-shrink-0 transition-transform ${
										openFaq === i ? "rotate-180" : ""
									}`}
								/>
							</button>
							{openFaq === i && (
								<div className="px-6 pb-5 text-[#2C3E3A]/70 leading-relaxed">
									{faq.answer}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
