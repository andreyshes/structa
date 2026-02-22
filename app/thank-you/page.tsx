"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import {
	CheckCircle2,
	Phone,
	ArrowRight,
	Clock,
	FileText,
	CalendarCheck,
	ShieldCheck,
} from "lucide-react";

export default function ThankYouPage() {
	const nextSteps = [
		{
			icon: Clock,
			title: "Reviewing Your Details",
			desc: "Our lead estimator is reviewing your project requirements and local availability.",
		},
		{
			icon: Phone,
			title: "Initial Outreach",
			desc: "We will contact you via phone or email within 1 business day to discuss the scope.",
		},
		{
			icon: FileText,
			title: "Detailed Estimate",
			desc: "If it's a fit, we'll schedule a site visit to provide a firm, transparent proposal.",
		},
	];

	return (
		<>
			<Script id="google-ads-conversion" strategy="afterInteractive">
				{`
          gtag('event', 'conversion', {
            'send_to': 'AW-17966936255/ZWrACLjd3PwbEL_hpvdC'
          });
        `}
			</Script>

			<div className="min-h-screen bg-[#14201D] flex items-center justify-center px-6 py-20 relative overflow-hidden">
				{/* Decorative Background */}
				<div className="absolute top-0 right-0 w-1/2 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/3 z-0 opacity-50" />

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					className="relative z-10 max-w-4xl w-full"
				>
					<div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-b-[12px] border-[#FFB800]">
						<div className="p-8 md:p-16 text-center border-b border-gray-100">
							<div className="flex justify-center mb-8">
								<div className="w-20 h-20 bg-[#FFB800]/10 rounded-full flex items-center justify-center">
									<CheckCircle2 className="w-12 h-12 text-[#2D5A3D]" />
								</div>
							</div>

							<h1 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-4">
								Request <span className="text-[#2D5A3D]">Confirmed</span>
							</h1>
							<p className="text-xl text-gray-600 font-medium max-w-xl mx-auto">
								Thank you for choosing Norbilt. We've received your project
								details and we're ready to get to work.
							</p>
						</div>

						{/* WHAT HAPPENS NEXT SECTION */}
						<div className="bg-[#F8F6F3] p-8 md:p-12 lg:p-16">
							<h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] text-center mb-10">
								What Happens Next
							</h2>

							<div className="grid md:grid-cols-3 gap-8">
								{nextSteps.map((step, i) => (
									<div key={i} className="text-center md:text-left space-y-4">
										<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mx-auto md:mx-0">
											<step.icon className="w-6 h-6 text-[#FFB800]" />
										</div>
										<h3 className="font-black text-[#1F2E2B] uppercase tracking-tight text-sm italic">
											{step.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed font-medium">
											{step.desc}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* ACTION FOOTER */}
						<div className="p-8 md:p-12 bg-white flex flex-col sm:flex-row gap-6 justify-center items-center">
							<div className="text-center sm:text-left">
								<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
									Need immediate help?
								</p>
								<p className="text-lg font-bold text-[#1F2E2B]">
									Call us directly at (916) 508-6272
								</p>
							</div>

							<div className="flex gap-4">
								<a
									href="tel:+19165086272"
									className="inline-flex items-center justify-center gap-2 bg-[#1F2E2B] text-[#FFB800] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#2D5A3D] transition-all shadow-lg"
								>
									<Phone className="w-4 h-4" />
									Call Now
								</a>

								<Link
									href="/"
									className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs text-[#1F2E2B] hover:bg-gray-50 transition-all"
								>
									Home <ArrowRight className="w-4 h-4" />
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-8 flex justify-center items-center gap-4 text-white/40">
						<ShieldCheck className="w-5 h-5" />
						<span className="text-[10px] font-black uppercase tracking-[0.4em]">
							Licensed • Bonded • Insured Contractor
						</span>
					</div>
				</motion.div>
			</div>
		</>
	);
}
