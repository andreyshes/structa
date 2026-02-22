"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	CheckCircle2,
	Shield,
	ArrowRight,
	MessageSquare,
} from "lucide-react";

import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/app/components/ui/select";

type FormData = {
	name: string;
	email: string;
	phone: string;
	projectType: string;
	details: string;
};

const contactItems = [
	{
		icon: Phone,
		label: "Direct Line",
		value: "(916) 508-6272",
		href: "tel:+19165086272",
	},
	{
		icon: Mail,
		label: "Email",
		value: "hello@norbuilt.com",
		href: "mailto:hello@norbuilt.com",
	},
	{
		icon: MapPin,
		label: "Primary Service Area",
		value: "Vancouver & Clark County, WA",
	},
	{
		icon: Clock,
		label: "Average Response",
		value: "Within 24 business hours",
	},
];

export default function ContactPage() {
	const router = useRouter();

	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		projectType: "",
		details: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				router.push("/thank-you");
			} else {
				alert("Something went wrong. Please try again.");
			}
		} catch (error) {
			alert("Network error. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const projectTypes = [
		"Finish Carpentry & Trim",
		"Drywall & Wall Repairs",
		"Kitchen/Bath Refresh",
		"Interior Door Install",
		"Fixture & Lighting Upgrades",
		"Exterior Repairs",
		"Full Punch List",
		"Other",
	];

	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO - AD STYLE */}
			<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D]">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl space-y-6">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Get An Estimate
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Start Your <br />
							<span className="text-[#FFB800]">Next Project</span>
						</motion.h1>

						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Tell us about your home improvement goals. We provide detailed
							proposals and transparent timelines for every project.
						</p>
					</div>
				</div>
			</section>

			{/* CONTENT GRID */}
			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 lg:gap-24">
					{/* INFO SIDEBAR */}
					<div className="lg:col-span-4 space-y-12">
						<div>
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
								Connect With Us
							</h2>

							<div className="space-y-8">
								{contactItems.map((item) => {
									const Wrapper = item.href ? "a" : "div";
									return (
										<Wrapper
											key={item.label}
											href={item.href}
											className="group flex gap-6 items-start transition"
										>
											<div className="w-14 h-14 bg-[#F8F6F3] rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#1F2E2B] transition-colors">
												<item.icon className="w-6 h-6 text-[#2D5A3D] group-hover:text-[#FFB800]" />
											</div>
											<div>
												<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
													{item.label}
												</p>
												<p className="text-lg font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">
													{item.value}
												</p>
											</div>
										</Wrapper>
									);
								})}
							</div>
						</div>

						{/* TRUST BOX */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 lg:p-10 text-white border-b-8 border-[#FFB800]">
							<div className="flex items-center gap-3 mb-6">
								<Shield className="w-6 h-6 text-[#FFB800]" />
								<p className="font-black uppercase tracking-widest text-sm">
									Professional Standards
								</p>
							</div>
							<ul className="space-y-4">
								{[
									"Licensed WA Contractor",
									"Fixed-Price Detailed Quotes",
									"Strict Dust Control Practices",
									"Direct Craftsman Communication",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-sm font-bold text-[#A7C4B5]"
									>
										<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* FORM AREA */}
					<div className="lg:col-span-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-50"
						>
							<div className="flex items-center gap-4 mb-10">
								<div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center">
									<MessageSquare className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
									Tell us about your project
								</h3>
							</div>

							<form onSubmit={handleSubmit} className="space-y-8">
								<div className="grid md:grid-cols-2 gap-8">
									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Full Name *
										</Label>
										<Input
											required
											placeholder="Enter your name"
											className="h-14 rounded-xl border-gray-200 focus:border-[#FFB800] focus:ring-[#FFB800]"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
										/>
									</div>

									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Email Address *
										</Label>
										<Input
											type="email"
											required
											placeholder="email@address.com"
											className="h-14 rounded-xl border-gray-200 focus:border-[#FFB800] focus:ring-[#FFB800]"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-8">
									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Phone Number
										</Label>
										<Input
											placeholder="(555) 555-5555"
											className="h-14 rounded-xl border-gray-200 focus:border-[#FFB800] focus:ring-[#FFB800]"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
										/>
									</div>

									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Project Type *
										</Label>
										<Select
											value={formData.projectType}
											onValueChange={(value) =>
												setFormData({ ...formData, projectType: value })
											}
										>
											<SelectTrigger className="h-14 rounded-xl border-gray-200 focus:border-[#FFB800]">
												<SelectValue placeholder="Select a service" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												{projectTypes.map((type) => (
													<SelectItem
														key={type}
														value={type}
														className="hover:bg-gray-100 font-bold py-3 uppercase text-[10px] tracking-widest"
													>
														{type}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-3">
									<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
										How can we help? *
									</Label>
									<Textarea
										required
										placeholder="Brief description of the work you need completed..."
										className="min-h-48 rounded-2xl border-gray-200 focus:border-[#FFB800] focus:ring-[#FFB800]"
										value={formData.details}
										onChange={(e) =>
											setFormData({ ...formData, details: e.target.value })
										}
									/>
								</div>

								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full h-16 bg-[#1F2E2B] hover:bg-[#2D5A3D] text-[#FFB800] font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3"
								>
									{isSubmitting ? (
										"Sending..."
									) : (
										<>
											Send Request <ArrowRight className="w-5 h-5" />
										</>
									)}
								</Button>
							</form>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FOOTER STRIP */}
			<section className="py-12 bg-white border-t border-gray-100 text-center">
				<p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
					Vancouver WA • Camas • Ridgefield • Battle Ground • Clark County
				</p>
			</section>
		</div>
	);
}
