"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	DoorOpen,
	CheckCircle2,
	ArrowRight,
	Shield,
	Home,
	Wind,
	Lock,
	Maximize,
	AlertTriangle,
} from "lucide-react";

import SectionHeader from "@/app/components/SectionHeader";

export default function DoorWindowPage() {
	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl">
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
						>
							<DoorOpen className="w-4 h-4" />
							Door & Window Repair Specialists
						</motion.span>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6 leading-tight"
						>
							Door & Window Repair in Vancouver, WA
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-xl text-[#F8F6F3]/80 leading-relaxed max-w-2xl"
						>
							Restore security, reduce drafts, and improve everyday usability.
							We repair sticking doors and malfunctioning windows throughout
							Clark County — without pushing full replacements.
						</motion.p>
					</div>
				</div>
			</section>

			{/* INTRO */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-6 text-[#2C3E3A]/70 leading-relaxed text-lg">
							<h2 className="text-3xl md:text-4xl font-semibold text-[#2C3E3A]">
								Practical Repairs That Extend the Life of Your Home
							</h2>

							<p>
								In the Pacific Northwest, seasonal moisture and natural settling
								often lead to doors that won’t close properly and windows that
								allow heat to escape. Structa Homes provides{" "}
								<strong>
									professional door and window repair in Vancouver, WA
								</strong>{" "}
								to correct these issues at the source.
							</p>

							<p>
								Rather than recommending costly replacements, we focus on{" "}
								<strong>
									precise adjustments, hardware upgrades, weather sealing, and
									targeted repairs
								</strong>
								. Our goal is to make your existing doors and windows function
								smoothly, securely, and efficiently again.
							</p>
						</div>

						<div className="bg-[#E8E4DE] p-10 rounded-3xl border border-[#DCD7D0]">
							<h3 className="text-xl font-semibold text-[#2C3E3A] mb-6">
								Performance & Security Evaluation
							</h3>

							<ul className="space-y-4">
								{[
									{
										title: "Air Leaks",
										desc: "Improving comfort and energy efficiency with updated weatherstripping and sealing.",
									},
									{
										title: "Security",
										desc: "Reinforcing strike plates, hinges, and lock hardware where needed.",
									},
									{
										title: "Operation",
										desc: "Correcting sagging doors, misalignment, and binding issues.",
									},
								].map((item, i) => (
									<li key={i} className="flex gap-4 items-start">
										<div className="mt-1 bg-[#4A7C59] rounded-full p-1">
											<CheckCircle2 className="w-4 h-4 text-white" />
										</div>
										<div>
											<span className="block font-semibold text-[#2C3E3A]">
												{item.title}
											</span>
											<span className="text-sm text-[#2C3E3A]/70">
												{item.desc}
											</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* SERVICES */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<SectionHeader
						eyebrow="Our Services"
						title="Door & Window Repair Solutions"
						description="Focused repairs that improve comfort, safety, and long-term performance."
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
						{[
							{
								title: "Door Alignment & Adjustment",
								desc: "Correcting doors that rub, stick, or won’t latch properly due to settling or wear.",
								icon: Maximize,
							},
							{
								title: "Locks & Hardware Replacement",
								desc: "Upgrading worn or outdated handles, deadbolts, smart locks, and hinges.",
								icon: Lock,
							},
							{
								title: "Draft Sealing & Weatherproofing",
								desc: "Installing quality sweeps, seals, and caulking to block wind and moisture.",
								icon: Wind,
							},
							{
								title: "Sliding Door Repair",
								desc: "Cleaning tracks and replacing rollers for smooth, quiet operation.",
								icon: Home,
							},
							{
								title: "Screen Repair & Replacement",
								desc: "Repairing or replacing window and sliding door screens for ventilation without pests.",
								icon: Shield,
							},
							{
								title: "Rot & Trim Repair",
								desc: "Addressing early wood rot in exterior trim and sills before damage spreads.",
								icon: AlertTriangle,
							},
						].map((service, i) => (
							<div
								key={i}
								className="bg-[#F8F6F3] p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-b-4 border-transparent hover:border-[#4A7C59]"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-4" />
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{service.title}
								</h3>
								<p className="text-[#2C3E3A]/70 leading-relaxed text-sm">
									{service.desc}
								</p>
							</div>
						))}
					</div>

					<p className="max-w-3xl mt-12 text-[#2C3E3A]/70">
						Door and window repairs are often completed alongside trim
						adjustments, drywall patching, or general handyman services to
						deliver a fully finished result.
					</p>
				</div>
			</section>

			{/* WHY US */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Shield,
								title: "Licensed, Bonded & Insured",
								text: "Professional standards and coverage that protect your home and investment.",
							},
							{
								icon: Wind,
								title: "Efficiency Focused",
								text: "Proper sealing and alignment can noticeably reduce heating and cooling loss.",
							},
							{
								icon: Home,
								title: "Clean, Precise Work",
								text: "Careful adjustments, protected surfaces, and a tidy workspace at every visit.",
							},
						].map((item) => (
							<div key={item.title} className="text-center p-6">
								<div className="w-16 h-16 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
									<item.icon className="w-8 h-8 text-[#2D5A3D]" />
								</div>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-3">
									{item.title}
								</h3>
								<p className="text-[#2C3E3A]/70">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SERVICE AREA */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-semibold text-[#2C3E3A] mb-6">
						Local Door & Window Repair in Vancouver, WA
					</h2>
					<p className="text-[#2C3E3A]/70 leading-relaxed text-lg">
						Based in Vancouver, we serve homeowners throughout{" "}
						<strong>Clark County</strong>, including Battle Ground, Camas,
						Ridgefield, and Washougal. We understand the unique challenges local
						weather places on doors and windows.
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-[#2C3E3A]">
				<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F8F6F3] mb-6"
					>
						Ready to Fix Your Doors or Windows?
					</motion.h2>

					<p className="text-xl text-[#F8F6F3]/70 mb-10">
						Request a free estimate today. Many door and window adjustments can
						be quoted quickly with a brief description or photos.
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-xl font-semibold"
					>
						Request a Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
