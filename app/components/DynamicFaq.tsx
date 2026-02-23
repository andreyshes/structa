"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

interface DynamicFaqProps {
	cityName: string;
	serviceTitle: string;
}

export default function DynamicFaq({
	cityName,
	serviceTitle,
}: DynamicFaqProps) {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	// Dynamic FAQ Content Generation
	const faqs = [
		{
			q: `How long does ${serviceTitle} typically take in ${cityName}?`,
			a: `Most ${serviceTitle.toLowerCase()} projects in ${cityName} are completed within 1-2 days, depending on the scope. We prioritize efficiency and clean workspaces to minimize disruption to your home.`,
		},
		{
			q: `Are you licensed to perform ${serviceTitle} in ${cityName}, WA?`,
			a: `Yes. Norbilt is a fully licensed, bonded, and insured general contractor (WA License #NORBI**) authorized to perform ${serviceTitle.toLowerCase()} and home improvements throughout ${cityName} and Clark County.`,
		},
		{
			q: `Can I get a free estimate for ${serviceTitle} in the ${cityName} area?`,
			a: `Absolutely. We provide detailed, transparent estimates for homeowners in ${cityName}. You can request one by calling us directly or filling out our online contact form.`,
		},
	];

	return (
		<section className="py-32 bg-white">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<SectionHeader
					eyebrow="Expert Advice"
					title={`${cityName} Homeowner FAQ`}
					description={`Common questions about ${serviceTitle.toLowerCase()} in your neighborhood.`}
				/>

				{/* Schema.org FAQPage Markup - CRITICAL FOR SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: faqs.map((f) => ({
								"@type": "Question",
								name: f.q,
								acceptedAnswer: {
									"@type": "Answer",
									text: f.a,
								},
							})),
						}),
					}}
				/>

				<div className="mt-16 space-y-4">
					{faqs.map((item, i) => (
						<div
							key={i}
							className="border-2 border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-[#FFB800]/30 transition-all shadow-sm hover:shadow-md"
						>
							<button
								onClick={() => setOpenFaq(openFaq === i ? null : i)}
								className="w-full px-8 py-6 flex items-start justify-between text-left hover:bg-gray-50/50 transition-colors group"
							>
								<div className="flex gap-4 items-start flex-1">
									<span className="text-[#FFB800] font-black text-xl shrink-0 mt-1">
										0{i + 1}
									</span>
									<h4 className="text-xl font-black text-[#1F2E2B] tracking-tight flex-1 pr-4">
										{item.q}
									</h4>
								</div>
								<ChevronDown
									className={`w-6 h-6 text-[#FFB800] shrink-0 transition-transform duration-300 mt-1 ${
										openFaq === i ? "rotate-180" : ""
									}`}
								/>
							</button>
							{openFaq === i && (
								<div className="px-8 pb-6 md:pl-20">
									<div className="pt-4 border-t border-gray-100 text-gray-600 leading-relaxed font-medium text-lg">
										{item.a}
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
