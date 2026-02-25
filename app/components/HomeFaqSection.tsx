"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

const faqs = [
	{
		q: "Do you handle small interior repairs?",
		a: "Yes. While we specialize in remodeling, we treat small 'punch-list' repairs with the same precision as full-scale renovations.",
	},
	{
		q: "Are you a licensed and insured contractor?",
		a: "Absolutely. Norbilt is a fully licensed, bonded, and insured general contractor in the state of Washington.",
	},
	{
		q: "What areas of Clark County do you serve?",
		a: "We provide interior remodeling and handyman services throughout Vancouver, Camas, Washougal, Ridgefield, Battle Ground, Salmon Creek, Hazel Dell, Five Corners, Brush Prairie, Felida, Lake Shore, Orchards, and Mill Plain, WA.",
	},
];

export default function HomeFaqSection() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<section className="py-32 bg-white">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<SectionHeader
					eyebrow="Homeowner Guide"
					title="Common Questions"
					description="Everything you need to know about remodeling in Vancouver, WA."
				/>
				<div className="mt-16 space-y-4">
					{faqs.map((item, i) => (
						<div
							key={i}
							className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-[#FFB800]/30 transition-all"
						>
							<button
								onClick={() => setOpenFaq(openFaq === i ? null : i)}
								className="w-full px-8 py-6 flex items-start justify-between text-left hover:bg-gray-50/50 transition-colors group"
							>
								<div className="flex gap-4 items-start flex-1">
									<span className="text-[#FFB800] font-black text-xl shrink-0 mt-1">
										0{i + 1}
									</span>
									<h3 className="text-xl md:text-2xl font-black text-[#1F2E2B] tracking-tight flex-1 pr-4">
										{item.q}
									</h3>
								</div>
								<ChevronDown
									className={`w-6 h-6 text-[#FFB800] shrink-0 transition-transform duration-300 mt-1 ${
										openFaq === i ? "rotate-180" : ""
									}`}
								/>
							</button>
							{openFaq === i && (
								<div className="px-8 pb-6 pl-20">
									<div className="pt-4 border-t border-gray-100">
										<p className="text-gray-600 leading-relaxed font-medium text-lg">
											{item.a}
										</p>
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
