"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
	Wrench,
	Scissors,
	Layers,
	ChefHat,
	DoorOpen,
	Grid3x3,
	Lightbulb,
	Home,
	ArrowRight,
	ArrowLeft,
	Sparkles,
	CheckCircle,
	Clock,
	AlertCircle,
	Phone,
	Calendar,
	Star,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ServiceKey =
	| "Handyman Services"
	| "Finish Carpentry"
	| "Drywall Repair"
	| "Kitchen & Bath"
	| "Door & Window"
	| "Flooring"
	| "Lighting & Fixtures"
	| "Home Repair / Other";

interface Estimate {
	priceRange: { low: number; high: number };
	timeline: string;
	included: string[];
	factors: string[];
	recommendation: string;
	confidence: string;
	disclaimer: string;
}

// ─── Service Definitions ──────────────────────────────────────────────────────

const services = [
	{ key: "Handyman Services" as ServiceKey, icon: Wrench, desc: "Punch lists, repairs, misc tasks" },
	{ key: "Finish Carpentry" as ServiceKey, icon: Scissors, desc: "Trim, crown molding, baseboards" },
	{ key: "Drywall Repair" as ServiceKey, icon: Layers, desc: "Patches, texturing, water damage" },
	{ key: "Kitchen & Bath" as ServiceKey, icon: ChefHat, desc: "Updates, tile, cabinets, fixtures" },
	{ key: "Door & Window" as ServiceKey, icon: DoorOpen, desc: "Installation and repair" },
	{ key: "Flooring" as ServiceKey, icon: Grid3x3, desc: "LVP, tile, hardwood, removal" },
	{ key: "Lighting & Fixtures" as ServiceKey, icon: Lightbulb, desc: "Recessed lights, fans, fixtures" },
	{ key: "Home Repair / Other" as ServiceKey, icon: Home, desc: "General repairs and maintenance" },
];

// ─── Service-Specific Questions ───────────────────────────────────────────────

function ServiceDetails({ service, details, onChange }: { service: ServiceKey; details: Record<string, string>; onChange: (k: string, v: string) => void }) {
	const sel = (id: string, label: string, opts: string[]) => (
		<div key={id} className="space-y-2">
			<label className="block text-sm font-bold text-[#1F2E2B]">{label}</label>
			<select
				value={details[id] || ""}
				onChange={(e) => onChange(id, e.target.value)}
				className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-white text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
			>
				<option value="">Select an option…</option>
				{opts.map((o) => <option key={o} value={o}>{o}</option>)}
			</select>
		</div>
	);

	const txt = (id: string, label: string, placeholder: string) => (
		<div key={id} className="space-y-2">
			<label className="block text-sm font-bold text-[#1F2E2B]">{label}</label>
			<textarea
				value={details[id] || ""}
				onChange={(e) => onChange(id, e.target.value)}
				placeholder={placeholder}
				rows={3}
				className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-white text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm resize-none"
			/>
		</div>
	);

	if (service === "Finish Carpentry") return (
		<div className="space-y-5">
			{sel("trimType", "What type of trim work?", ["Baseboards", "Crown Molding", "Door Casing", "Window Casing", "Wainscoting", "Chair Rail", "Multiple types"])}
			{sel("linearFeet", "Approximate linear feet of trim", ["Under 50 ft", "50–150 ft", "150–300 ft", "300+ ft", "Not sure"])}
			{sel("rooms", "Which rooms?", ["1 bedroom", "2–3 bedrooms", "Living room", "Kitchen", "Whole house / multiple rooms", "Basement", "Other"])}
			{sel("removeExisting", "Remove and dispose of existing trim?", ["Yes", "No – new construction / bare walls", "Partial – some to remove"])}
			{sel("paintFinish", "Paint finish included?", ["Yes – paint to match", "No – I'll handle painting", "Prime only"])}
		</div>
	);

	if (service === "Drywall Repair") return (
		<div className="space-y-5">
			{sel("repairType", "Type of repair needed", ["Small hole (under 6\")", "Medium hole (6\"–12\")", "Large section replacement", "Water damage / mold remediation", "Full room hang and finish", "Crack repair and skim coat"])}
			{sel("repairCount", "How many areas need repair?", ["1 spot", "2–3 spots", "4–6 spots", "7+ spots / extensive"])}
			{sel("textureMatch", "Texture matching needed?", ["Yes – needs to match existing texture", "No – smooth finish", "Not sure"])}
			{sel("paintAfter", "Paint after repair?", ["Yes – paint to match", "No – I'll handle painting", "Prime only"])}
		</div>
	);

	if (service === "Kitchen & Bath") return (
		<div className="space-y-5">
			{sel("space", "Kitchen or bathroom?", ["Kitchen", "Bathroom", "Both"])}
			{sel("scope", "What's the project scope?", ["Cabinet painting / refresh", "Tile backsplash installation", "Countertop replacement", "Fixture replacement (faucets, hardware)", "Full kitchen/bath refresh (multiple items)", "Vanity installation", "Shower tile / tub surround"])}
			{sel("size", "Size of the space", ["Small (under 80 sq ft)", "Medium (80–150 sq ft)", "Large (150+ sq ft)"])}
			{sel("materials", "Material preference", ["Budget-friendly (builder grade)", "Mid-range (standard quality)", "Premium / high-end", "I'll supply materials"])}
		</div>
	);

	if (service === "Door & Window") return (
		<div className="space-y-5">
			{sel("type", "What type of work?", ["Interior door installation", "Exterior door installation", "Window repair / reglazing", "Window replacement", "Door frame repair", "Hardware replacement only"])}
			{sel("count", "How many doors / windows?", ["1", "2–3", "4–5", "6+"])}
			{sel("supply", "Material supply", ["Install only – I have the materials", "Supply and install (Norbilt sources materials)", "Not sure yet"])}
		</div>
	);

	if (service === "Flooring") return (
		<div className="space-y-5">
			{sel("floorType", "Type of flooring", ["Luxury vinyl plank (LVP)", "Hardwood (solid or engineered)", "Tile (ceramic or porcelain)", "Laminate", "Carpet removal only", "Multiple types"])}
			{sel("sqft", "Square footage", ["Under 200 sq ft", "200–500 sq ft", "500–1,000 sq ft", "1,000–2,000 sq ft", "2,000+ sq ft"])}
			{sel("subfloor", "Subfloor condition", ["Good – no issues expected", "Minor leveling needed", "Unknown / needs assessment"])}
			{sel("furniture", "Furniture moving needed?", ["Yes", "No – room is empty", "Partial"])}
		</div>
	);

	if (service === "Lighting & Fixtures") return (
		<div className="space-y-5">
			{sel("lightType", "Type of lighting work", ["Recessed can lights (new)", "Ceiling fan installation / replacement", "Light fixture replacement", "Dimmer switch installation", "Under-cabinet lighting", "Multiple / combination"])}
			{sel("count", "How many fixtures?", ["1–2", "3–5", "6–10", "10+"])}
			{sel("atticAccess", "Attic access available?", ["Yes", "No", "Not sure"])}
			{sel("supply", "Fixtures", ["Install only – I have fixtures", "Supply and install", "Not sure yet"])}
		</div>
	);

	if (service === "Handyman Services") return (
		<div className="space-y-5">
			{txt("taskList", "List the tasks you need done", "e.g. Fix a door that won't close, patch two nail holes, replace bathroom faucet, re-caulk shower, mount a TV...")}
			{sel("duration", "Estimated time needed", ["A few hours (half day)", "Full day", "2–3 days", "Not sure – need assessment"])}
			{sel("urgency", "How soon do you need this?", ["ASAP (this week)", "Within 2–3 weeks", "Within a month", "Flexible / planning ahead"])}
		</div>
	);

	// Home Repair / Other
	return (
		<div className="space-y-5">
			{txt("description", "Describe your project", "Tell us what needs to be done. The more detail you provide, the more accurate your estimate will be.")}
			{sel("urgency", "How urgent is this?", ["Emergency / safety issue", "ASAP (this week)", "Within 2–3 weeks", "Flexible / planning ahead"])}
			{sel("scale", "Estimated project scale", ["Minor repair (a few hours)", "Medium project (1–2 days)", "Larger project (multiple days)", "Not sure"])}
		</div>
	);
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function EstimatePage() {
	const [step, setStep] = useState(1);
	const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);
	const [details, setDetails] = useState<Record<string, string>>({});
	const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "", city: "", timeline: "", notes: "" });
	const [estimate, setEstimate] = useState<Estimate | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const updateDetail = (k: string, v: string) => setDetails((prev) => ({ ...prev, [k]: v }));
	const updateContact = (k: string, v: string) => setContactInfo((prev) => ({ ...prev, [k]: v }));

	const canProceedStep2 = Object.values(details).some((v) => v.trim().length > 0);

	const generateEstimate = async () => {
		setLoading(true);
		setError("");
		try {
			const res = await fetch("/api/estimate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					service: selectedService,
					details,
					...contactInfo,
				}),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Failed to generate estimate");
			setEstimate(data.estimate);
			setStep(4);
		} catch (e) {
			setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const confidenceColor = (c: string) =>
		c === "High" ? "text-emerald-600 bg-emerald-50" : c === "Medium" ? "text-amber-600 bg-amber-50" : "text-slate-500 bg-slate-100";

	return (
		<div className="min-h-screen bg-[#FDFCFB]">
			{/* Hero Header */}
			<div className="bg-[#1F2E2B] pt-32 pb-16">
				<div className="max-w-3xl mx-auto px-6 text-center">
					<div className="inline-flex items-center gap-2 bg-[#FFB800]/20 border border-[#FFB800]/40 rounded-full px-4 py-1.5 mb-6">
						<Sparkles className="w-4 h-4 text-[#FFB800]" />
						<span className="text-[#FFB800] text-sm font-bold tracking-wide uppercase">Instant · Detailed · Free</span>
					</div>
					<h1 className="text-4xl sm:text-5xl font-black text-[#F8F6F3] leading-tight mb-4">
						Get Your Instant<br />
						<span className="text-[#FFB800]">Project Estimate</span>
					</h1>
					<p className="text-[#F8F6F3]/70 text-lg max-w-xl mx-auto">
						Answer a few quick questions and get a realistic price range, timeline, and breakdown — in seconds.
					</p>

					{/* Progress Steps */}
					<div className="flex items-center justify-center gap-3 mt-10">
						{[1, 2, 3, 4].map((s) => (
							<div key={s} className="flex items-center gap-3">
								<div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 ${
									step >= s ? "bg-[#FFB800] text-[#1F2E2B]" : "bg-[#F8F6F3]/20 text-[#F8F6F3]/40"
								}`}>
									{step > s ? <CheckCircle className="w-4 h-4" /> : s}
								</div>
								{s < 4 && <div className={`w-12 h-0.5 transition-all duration-300 ${step > s ? "bg-[#FFB800]" : "bg-[#F8F6F3]/20"}`} />}
							</div>
						))}
					</div>
					<div className="flex justify-center gap-12 mt-2">
						{["Service", "Details", "Your Info", "Estimate"].map((label, i) => (
							<span key={label} className={`text-xs font-bold transition-colors ${step >= i + 1 ? "text-[#FFB800]" : "text-[#F8F6F3]/30"}`}>
								{label}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Step Content */}
			<div className="max-w-3xl mx-auto px-6 py-12">
				<AnimatePresence mode="wait">
					{/* ── Step 1: Choose Service ─────────────────────────────── */}
					{step === 1 && (
						<motion.div
							key="step1"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-2xl font-black text-[#1F2E2B] mb-2">What can we help you with?</h2>
							<p className="text-[#2C3E3A]/60 mb-8">Select the service that best matches your project.</p>

							<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
								{services.map(({ key, icon: Icon, desc }) => (
									<button
										key={key}
										onClick={() => { setSelectedService(key); setDetails({}); setStep(2); }}
										className={`group p-5 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-lg ${
											selectedService === key
												? "border-[#2D5A3D] bg-[#2D5A3D]/5"
												: "border-[#2C3E3A]/10 bg-white hover:border-[#2D5A3D]/40"
										}`}
									>
										<div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
											selectedService === key ? "bg-[#2D5A3D] text-white" : "bg-[#F8F6F3] text-[#2D5A3D] group-hover:bg-[#2D5A3D]/10"
										}`}>
											<Icon className="w-5 h-5" />
										</div>
										<div className="text-sm font-bold text-[#1F2E2B] leading-tight mb-1">{key}</div>
										<div className="text-xs text-[#2C3E3A]/50 font-medium">{desc}</div>
									</button>
								))}
							</div>
						</motion.div>
					)}

					{/* ── Step 2: Project Details ────────────────────────────── */}
					{step === 2 && selectedService && (
						<motion.div
							key="step2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<div className="flex items-center gap-3 mb-2">
								<button onClick={() => setStep(1)} className="text-[#2C3E3A]/40 hover:text-[#2D5A3D] transition-colors">
									<ArrowLeft className="w-5 h-5" />
								</button>
								<h2 className="text-2xl font-black text-[#1F2E2B]">Tell us about your project</h2>
							</div>
							<p className="text-[#2C3E3A]/60 mb-8 ml-8">
								<span className="text-[#2D5A3D] font-bold">{selectedService}</span> · More detail = more accurate estimate
							</p>

							<div className="bg-white rounded-2xl border border-[#2C3E3A]/10 p-6 shadow-sm">
								<ServiceDetails service={selectedService} details={details} onChange={updateDetail} />
							</div>

							<div className="mt-6 flex justify-end">
								<button
									onClick={() => setStep(3)}
									disabled={!canProceedStep2}
									className="flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#4A7C59] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
								>
									Next Step <ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</motion.div>
					)}

					{/* ── Step 3: Contact Info ───────────────────────────────── */}
					{step === 3 && (
						<motion.div
							key="step3"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
						>
							<div className="flex items-center gap-3 mb-2">
								<button onClick={() => setStep(2)} className="text-[#2C3E3A]/40 hover:text-[#2D5A3D] transition-colors">
									<ArrowLeft className="w-5 h-5" />
								</button>
								<h2 className="text-2xl font-black text-[#1F2E2B]">Almost there</h2>
							</div>
							<p className="text-[#2C3E3A]/60 mb-8 ml-8">We'll email your estimate and reach out to confirm details.</p>

							<div className="bg-white rounded-2xl border border-[#2C3E3A]/10 p-6 shadow-sm space-y-5">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
									<div className="space-y-2">
										<label className="block text-sm font-bold text-[#1F2E2B]">Your Name <span className="text-red-400">*</span></label>
										<input
											type="text"
											value={contactInfo.name}
											onChange={(e) => updateContact("name", e.target.value)}
											placeholder="Jane Smith"
											className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-[#1F2E2B]">Email <span className="text-red-400">*</span></label>
										<input
											type="email"
											value={contactInfo.email}
											onChange={(e) => updateContact("email", e.target.value)}
											placeholder="jane@email.com"
											className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-[#1F2E2B]">Phone</label>
										<input
											type="tel"
											value={contactInfo.phone}
											onChange={(e) => updateContact("phone", e.target.value)}
											placeholder="(360) 555-0100"
											className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-[#1F2E2B]">City</label>
										<select
											value={contactInfo.city}
											onChange={(e) => updateContact("city", e.target.value)}
											className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
										>
											<option value="">Select city…</option>
											{["Vancouver", "Camas", "Ridgefield", "Battle Ground", "Washougal", "Brush Prairie", "Felida", "Hazel Dell", "Salmon Creek", "Five Corners", "Orchards", "Mill Plain", "Lake Shore", "Other"].map((c) => (
												<option key={c} value={c}>{c}</option>
											))}
										</select>
									</div>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-bold text-[#1F2E2B]">Desired Timeline</label>
									<select
										value={contactInfo.timeline}
										onChange={(e) => updateContact("timeline", e.target.value)}
										className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm"
									>
										<option value="">Select timeline…</option>
										<option>ASAP – this week</option>
										<option>Within 2–3 weeks</option>
										<option>Within a month</option>
										<option>1–3 months out</option>
										<option>Just planning ahead</option>
									</select>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-bold text-[#1F2E2B]">Anything else we should know? <span className="text-[#2C3E3A]/40 font-medium">(optional)</span></label>
									<textarea
										value={contactInfo.notes}
										onChange={(e) => updateContact("notes", e.target.value)}
										placeholder="Access notes, existing issues, specific preferences, budget constraints…"
										rows={3}
										className="w-full px-4 py-3 rounded-xl border border-[#2C3E3A]/20 bg-[#FDFCFB] text-[#1F2E2B] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] text-sm resize-none"
									/>
								</div>
							</div>

							{error && (
								<div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
									<AlertCircle className="w-4 h-4 shrink-0" />
									{error}
								</div>
							)}

							<div className="mt-6 flex justify-end">
								<button
									onClick={generateEstimate}
									disabled={loading || !contactInfo.name || !contactInfo.email}
									className="flex items-center gap-3 px-8 py-4 bg-[#FFB800] text-[#1F2E2B] font-black rounded-xl hover:bg-[#f5a800] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg text-base"
								>
									{loading ? (
										<>
											<div className="w-5 h-5 border-2 border-[#1F2E2B]/30 border-t-[#1F2E2B] rounded-full animate-spin" />
											Generating your estimate…
										</>
									) : (
										<>
											<Sparkles className="w-5 h-5" />
											Generate My Free Estimate
										</>
									)}
								</button>
							</div>
							<p className="text-xs text-[#2C3E3A]/40 text-right mt-2">No spam. We'll only reach out to follow up on your project.</p>
						</motion.div>
					)}

					{/* ── Step 4: Results ────────────────────────────────────── */}
					{step === 4 && estimate && (
						<motion.div
							key="step4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<div className="text-center mb-8">
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: 0.1, type: "spring" }}
									className="inline-flex items-center justify-center w-16 h-16 bg-[#2D5A3D] rounded-2xl mb-4"
								>
									<Sparkles className="w-8 h-8 text-[#FFB800]" />
								</motion.div>
								<h2 className="text-3xl font-black text-[#1F2E2B] mb-2">Your Instant Estimate is Ready</h2>
								<p className="text-[#2C3E3A]/60">{selectedService} · {contactInfo.city || "Clark County, WA"}</p>
							</div>

							{/* Price Range Card */}
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="bg-[#1F2E2B] rounded-2xl p-8 text-center mb-5 relative overflow-hidden"
							>
								<div className="absolute inset-0 bg-linear-to-br from-[#2D5A3D]/40 to-transparent" />
								<div className="relative">
									<div className="text-[#FFB800]/70 text-sm font-bold tracking-widest uppercase mb-2">Estimated Project Cost</div>
									<div className="text-5xl sm:text-6xl font-black text-[#F8F6F3] mb-1">
										${estimate.priceRange.low.toLocaleString()} – ${estimate.priceRange.high.toLocaleString()}
									</div>
									<div className="text-[#F8F6F3]/50 text-sm mt-1">All-in estimate for Clark County, WA</div>
									<div className="flex items-center justify-center gap-4 mt-5">
										<div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
											<Clock className="w-4 h-4 text-[#FFB800]" />
											<span className="text-[#F8F6F3] text-sm font-bold">{estimate.timeline}</span>
										</div>
										<div className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold ${confidenceColor(estimate.confidence)}`}>
											<Star className="w-4 h-4" />
											{estimate.confidence} confidence
										</div>
									</div>
								</div>
							</motion.div>

							{/* Details Grid */}
							<div className="grid sm:grid-cols-2 gap-5 mb-5">
								{/* What's Included */}
								<motion.div
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className="bg-white rounded-2xl border border-[#2C3E3A]/10 p-5 shadow-sm"
								>
									<h3 className="text-sm font-black text-[#1F2E2B] uppercase tracking-wider mb-4 flex items-center gap-2">
										<CheckCircle className="w-4 h-4 text-[#2D5A3D]" />
										What&apos;s Included
									</h3>
									<ul className="space-y-2.5">
										{estimate.included.map((item, i) => (
											<li key={i} className="flex items-start gap-2 text-sm text-[#2C3E3A] font-medium">
												<div className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] mt-2 shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</motion.div>

								{/* Cost Factors */}
								<motion.div
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.35 }}
									className="bg-white rounded-2xl border border-[#2C3E3A]/10 p-5 shadow-sm"
								>
									<h3 className="text-sm font-black text-[#1F2E2B] uppercase tracking-wider mb-4 flex items-center gap-2">
										<AlertCircle className="w-4 h-4 text-[#FFB800]" />
										Factors That Affect Price
									</h3>
									<ul className="space-y-2.5">
										{estimate.factors.map((f, i) => (
											<li key={i} className="flex items-start gap-2 text-sm text-[#2C3E3A] font-medium">
												<div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-2 shrink-0" />
												{f}
											</li>
										))}
									</ul>
								</motion.div>
							</div>

							{/* Pro Recommendation */}
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="bg-[#2D5A3D]/8 border border-[#2D5A3D]/20 rounded-2xl p-5 mb-5"
							>
								<div className="flex items-start gap-3">
									<div className="w-8 h-8 bg-[#2D5A3D] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
										<Star className="w-4 h-4 text-[#FFB800]" />
									</div>
									<div>
										<div className="text-xs font-black text-[#2D5A3D] uppercase tracking-wider mb-1">Pro Recommendation</div>
										<p className="text-sm text-[#1F2E2B] font-medium leading-relaxed">{estimate.recommendation}</p>
									</div>
								</div>
							</motion.div>

							{/* Disclaimer */}
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.45 }}
								className="text-xs text-[#2C3E3A]/50 mb-8 leading-relaxed text-center"
							>
								{estimate.disclaimer}
							</motion.p>

							{/* CTAs */}
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
								className="bg-white rounded-2xl border border-[#2C3E3A]/10 p-6 shadow-sm"
							>
								<h3 className="text-lg font-black text-[#1F2E2B] mb-1">Ready for your free on-site quote?</h3>
								<p className="text-sm text-[#2C3E3A]/60 mb-5">Lock in your project with a no-obligation walkthrough. We'll confirm scope, timeline, and exact pricing.</p>
								<div className="flex flex-col sm:flex-row gap-3">
									<Link
										href="/contact"
										className="flex items-center justify-center gap-2 flex-1 px-6 py-4 bg-[#2D5A3D] text-white font-bold rounded-xl hover:bg-[#4A7C59] transition-all duration-200 shadow-md"
									>
										<Calendar className="w-4 h-4" />
										Book a Free Walkthrough
									</Link>
									<a
										href="tel:+13602169920"
										className="flex items-center justify-center gap-2 flex-1 px-6 py-4 bg-[#F8F6F3] text-[#1F2E2B] font-bold rounded-xl hover:bg-[#2C3E3A]/10 border border-[#2C3E3A]/10 transition-all duration-200"
									>
										<Phone className="w-4 h-4" />
										Call (360) 216-9920
									</a>
								</div>
							</motion.div>

							<div className="mt-6 text-center">
								<button
									onClick={() => { setStep(1); setSelectedService(null); setDetails({}); setContactInfo({ name: "", email: "", phone: "", city: "", timeline: "", notes: "" }); setEstimate(null); }}
									className="text-sm text-[#2C3E3A]/50 hover:text-[#2D5A3D] font-medium transition-colors"
								>
									Start a new estimate →
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Trust Bar */}
			{step !== 4 && (
				<div className="border-t border-[#2C3E3A]/10 bg-[#F8F6F3] py-8">
					<div className="max-w-3xl mx-auto px-6">
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
							{[
								{ label: "Licensed & Bonded", sub: "WA Lic #NORBIHH849QC" },
								{ label: "Free On-Site Quote", sub: "No obligation, ever" },
								{ label: "100% Satisfaction", sub: "Guaranteed results" },
								{ label: "Clark County", sub: "Local since 2018" },
							].map(({ label, sub }) => (
								<div key={label}>
									<div className="text-sm font-black text-[#1F2E2B]">{label}</div>
									<div className="text-xs text-[#2C3E3A]/50 mt-0.5">{sub}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
