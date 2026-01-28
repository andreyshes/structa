"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Send,
	Phone,
	Mail,
	MapPin,
	Clock,
	CheckCircle2,
	TreePine,
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

export default function ContactPage() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		projectType: "",
		details: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		setIsSubmitting(false);

		if (res.ok) {
			setIsSubmitted(true);
		} else {
			alert("Something went wrong. Please try again.");
		}
	};

	const projectTypes = [
		"Home Repairs",
		"Drywall & Wall Repairs",
		"Trim & Finish Carpentry",
		"Door & Window Services",
		"Kitchen Update",
		"Bathroom Refresh",
		"Fixture Installation",
		"Deck & Exterior",
		"Built-ins & Custom Work",
		"Punch List / Multiple Items",
		"Other",
	];

	return (
		<div className="overflow-hidden">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#2C3E3A]">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F8F6F3' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#4A7C59]/30 rounded-full text-[#F8F6F3]/90 text-sm font-medium mb-8"
					>
						<TreePine className="w-4 h-4" />
						Let's Talk
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F6F3] mb-6"
					>
						Start Your Project
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-xl text-[#F8F6F3]/80 max-w-3xl mx-auto"
					>
						Tell us about your project and we'll get back to you with a free
						estimate. No pressure — just an honest conversation.
					</motion.p>
				</div>
			</section>

			<section className="py-24 lg:py-32 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
					{/* INFO */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-2xl font-semibold text-[#2C3E3A] mb-8">
							Get in Touch
						</h2>

						<div className="space-y-6 mb-12">
							{[
								{
									icon: Phone,
									label: "Phone",
									value: "(916) 508-6272",
								},
								{
									icon: Mail,
									label: "Email",
									value: "hello@structawa.com",
								},
								{
									icon: MapPin,
									label: "Service Area",
									value: "Greater Vancouver, WA and surrounding areas",
								},
								{
									icon: Clock,
									label: "Response Time",
									value: "Typically within 1 business day",
								},
							].map((item) => (
								<div key={item.label} className="flex gap-4">
									<div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
										<item.icon className="w-5 h-5 text-[#2D5A3D]" />
									</div>
									<div>
										<p className="font-medium text-[#2C3E3A]">{item.label}</p>
										<p className="text-[#2C3E3A]/70">{item.value}</p>
									</div>
								</div>
							))}
						</div>

						<div className="p-6 bg-[#E8E4DE] rounded-2xl">
							<p className="text-sm font-medium text-[#2C3E3A] mb-4">
								Our Promise
							</p>
							<ul className="space-y-3">
								{[
									"Free, no-pressure estimates",
									"Clear, upfront pricing",
									"Licensed, bonded & insured",
									"Satisfaction guaranteed",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-sm text-[#2C3E3A]/70"
									>
										<CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* FORM */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-2"
					>
						{isSubmitted ? (
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								className="bg-white rounded-2xl p-12 border border-[#E8E4DE] text-center"
							>
								<div className="w-20 h-20 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
									<CheckCircle2 className="w-10 h-10 text-[#2D5A3D]" />
								</div>
								<h3 className="text-2xl font-semibold text-[#2C3E3A] mb-4">
									Thank You!
								</h3>
								<p className="text-[#2C3E3A]/70 max-w-md mx-auto">
									We've received your message and will be in touch shortly.
								</p>
							</motion.div>
						) : (
							<form
								onSubmit={handleSubmit}
								className="bg-white rounded-2xl p-8 lg:p-12 border border-[#E8E4DE]"
							>
								<h3 className="text-xl font-semibold text-[#2C3E3A] mb-8">
									Project Details
								</h3>

								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<Label>Full Name *</Label>
										<Input
											required
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
										/>
									</div>
									<div>
										<Label>Email *</Label>
										<Input
											type="email"
											required
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
										/>
									</div>
								</div>

								<div className="grid md:grid-cols-2 gap-6 mb-6">
									<div>
										<Label>Phone</Label>
										<Input
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
										/>
									</div>
									<div>
										<Label>Project Type *</Label>
										<Select
											value={formData.projectType}
											onValueChange={(value) =>
												setFormData({ ...formData, projectType: value })
											}
											required
										>
											<SelectTrigger>
												<SelectValue
													placeholder="Select project type"
													className="bg-white text-black"
												/>
											</SelectTrigger>
											<SelectContent className="bg-white text-black">
												{projectTypes.map((type) => (
													<SelectItem
														className="hover:bg-gray-300"
														key={type}
														value={type}
													>
														{type}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="mb-8">
									<Label>Project Details *</Label>
									<Textarea
										required
										value={formData.details}
										onChange={(e) =>
											setFormData({ ...formData, details: e.target.value })
										}
										className="min-h-40"
									/>
								</div>

								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full h-14 bg-[#2D5A3D] hover:bg-[#4A7C59]"
								>
									{isSubmitting ? "Sending…" : "Start Your Project"}
								</Button>
							</form>
						)}
					</motion.div>
				</div>
			</section>
		</div>
	);
}
