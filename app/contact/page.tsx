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
	Star,
	CalendarCheck,
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
	city: string; // Added for better local qualifying
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
		city: "",
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
			{/* HERO SECTION */}
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
								Licensed Specialist
							</span>
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase"
						>
							Get Your <br />
							<span className="text-[#FFB800]">Free Estimate</span>
						</motion.h1>
						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Precision carpentry and flawless repairs start with a
							conversation. Submit your project details below for a professional
							proposal.
						</p>
					</div>
				</div>
			</section>

			{/* THREE STEP PROCESS - NEW SECTION */}
			<section className="py-12 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
					{[
						{
							step: "01",
							title: "Submit Details",
							desc: "Fill out the form with your project goals.",
						},
						{
							step: "02",
							title: "Consultation",
							desc: "We'll review and schedule a site visit if needed.",
						},
						{
							step: "03",
							title: "Detailed Quote",
							desc: "Receive a transparent, fixed-price proposal.",
						},
					].map((item) => (
						<div key={item.step} className="flex gap-4">
							<span className="text-3xl font-black text-[#FFB800]/30">
								{item.step}
							</span>
							<div>
								<h3 className="font-black text-[#1F2E2B] uppercase text-sm tracking-widest">
									{item.title}
								</h3>
								<p className="text-gray-500 text-sm font-medium">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="py-24 lg:py-32">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 lg:gap-24">
					{/* INFO SIDEBAR */}
					<div className="lg:col-span-4 space-y-12">
						<div>
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
								Connect
							</h2>
							<div className="space-y-8">
								{contactItems.map((item) => {
									const Wrapper = item.href ? "a" : "div";
									return (
										<Wrapper
											key={item.label}
											href={item.href}
											className="group flex gap-6 items-start"
										>
											<div className="w-14 h-14 bg-[#F8F6F3] rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#1F2E2B] transition-colors duration-300">
												<item.icon className="w-6 h-6 text-[#2D5A3D] group-hover:text-[#FFB800]" />
											</div>
											<div>
												<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">
													{item.label}
												</p>
												<p className="text-lg font-bold text-[#1F2E2B]">
													{item.value}
												</p>
											</div>
										</Wrapper>
									);
								})}
							</div>
						</div>

						{/* TESTIMONIAL SNIPPET - NEW ADDITION */}
						<div className="p-8 bg-[#F8F6F3] rounded-3xl border-l-8 border-[#FFB800]">
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-4 h-4 fill-[#FFB800] text-[#FFB800]"
									/>
								))}
							</div>
							<p className="text-[#1F2E2B] font-bold italic mb-4">
								"Norbilt was professional, on time, and the finish work on our
								trim exceeded our expectations."
							</p>
							<p className="text-xs font-black uppercase tracking-widest text-gray-400">
								— Sarah J., Camas WA
							</p>
						</div>

						<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white border-b-8 border-[#FFB800]">
							<div className="flex items-center gap-3 mb-6">
								<Shield className="w-6 h-6 text-[#FFB800]" />
								<p className="font-black uppercase tracking-widest text-sm">
									Norbilt Standard
								</p>
							</div>
							<ul className="space-y-4">
								{[
									"Licensed & Bonded",
									"Detailed Price Quotes",
									"Dust-Free Workspace",
									"On-Time Arrival",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-sm font-bold text-[#A7C4B5]"
									>
										<CheckCircle2 className="w-5 h-5 text-[#FFB800]" /> {item}
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
							className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-2xl border border-gray-50"
						>
							<div className="flex items-center gap-4 mb-10">
								<div className="w-12 h-12 bg-[#FFB800]/10 rounded-xl flex items-center justify-center">
									<CalendarCheck className="w-6 h-6 text-[#2D5A3D]" />
								</div>
								<h3 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
									Request Quote
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
											className="h-14 rounded-xl"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
										/>
									</div>
									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Phone Number *
										</Label>
										<Input
											required
											placeholder="(360) 000-0000"
											className="h-14 rounded-xl"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-8">
									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Project Location (City) *
										</Label>
										<Input
											required
											placeholder="e.g. Vancouver"
											className="h-14 rounded-xl"
											value={formData.city}
											onChange={(e) =>
												setFormData({ ...formData, city: e.target.value })
											}
										/>
									</div>
									<div className="space-y-3">
										<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
											Project Type *
										</Label>
										<Select
											value={formData.projectType}
											onValueChange={(v) =>
												setFormData({ ...formData, projectType: v })
											}
										>
											<SelectTrigger className="h-14 rounded-xl">
												<SelectValue placeholder="Select service" />
											</SelectTrigger>
											<SelectContent className="bg-white">
												{projectTypes.map((t) => (
													<SelectItem
														key={t}
														value={t}
														className="font-bold py-3 uppercase text-[10px] tracking-widest"
													>
														{t}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-3">
									<Label className="text-xs font-black uppercase tracking-widest text-gray-500">
										Project Details *
									</Label>
									<Textarea
										required
										placeholder="Describe what you need fixed or built..."
										className="min-h-48 rounded-2xl"
										value={formData.details}
										onChange={(e) =>
											setFormData({ ...formData, details: e.target.value })
										}
									/>
								</div>

								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full h-16 bg-[#1F2E2B] hover:bg-[#2D5A3D] text-[#FFB800] font-black uppercase tracking-widest rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all"
								>
									{isSubmitting ? (
										"Processing..."
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
		</div>
	);
}
