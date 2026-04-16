"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, RefreshCw, CheckCircle2, MapPin } from "lucide-react";

// ── Cost data ─────────────────────────────────────────────────────────────────

const BATHROOM_BASE: Record<string, { low: number; high: number; label: string }> = {
	cosmetic:   { low: 800,   high: 2500,  label: "Cosmetic Refresh (fixtures, caulk, paint)" },
	midrange:   { low: 3000,  high: 7000,  label: "Mid-Range Update (vanity, tile, all fixtures)" },
	full:       { low: 8000,  high: 18000, label: "Full Remodel (demo, new tile, vanity, drywall)" },
	highend:    { low: 18000, high: 35000, label: "High-End Remodel (custom tile, layout change)" },
};

const KITCHEN_BASE: Record<string, { low: number; high: number; label: string }> = {
	cosmetic:   { low: 500,   high: 2000,  label: "Cosmetic Refresh (hardware, paint, caulk)" },
	midrange:   { low: 3000,  high: 8000,  label: "Mid-Range Update (backsplash, fixtures, countertop)" },
	full:       { low: 10000, high: 25000, label: "Full Remodel (cabinets, counters, tile, appliances)" },
	highend:    { low: 25000, high: 60000, label: "High-End Remodel (custom cabinets, full layout)" },
};

const BATHROOM_ADDONS: { id: string; label: string; low: number; high: number }[] = [
	{ id: "heated_floor",   label: "Heated Floor",           low: 800,  high: 2000 },
	{ id: "custom_tile",    label: "Custom / Large-Format Tile", low: 1500, high: 5000 },
	{ id: "plumbing_move",  label: "Move Plumbing Fixture",   low: 1500, high: 4000 },
	{ id: "subfloor",       label: "Subfloor Repair",         low: 500,  high: 1800 },
	{ id: "freestand_tub",  label: "Freestanding Tub",        low: 1200, high: 4000 },
	{ id: "electrical",     label: "Electrical Updates",      low: 400,  high: 1200 },
];

const KITCHEN_ADDONS: { id: string; label: string; low: number; high: number }[] = [
	{ id: "island",         label: "Kitchen Island",          low: 1500, high: 5000 },
	{ id: "custom_tile",    label: "Custom Backsplash Tile",  low: 800,  high: 3000 },
	{ id: "plumbing_move",  label: "Move Plumbing / Sink",    low: 1500, high: 4000 },
	{ id: "under_cabinet",  label: "Under-Cabinet Lighting",  low: 400,  high: 1200 },
	{ id: "electrical",     label: "Electrical Panel Upgrade", low: 1200, high: 3500 },
	{ id: "flooring",       label: "New Flooring (kitchen)",  low: 1200, high: 4000 },
];

const SIZE_MULTIPLIER: Record<string, { mult: number; label: string }> = {
	small:  { mult: 0.85, label: "Small (under 50 sq ft)" },
	medium: { mult: 1.0,  label: "Medium (50–100 sq ft)" },
	large:  { mult: 1.2,  label: "Large (100–200 sq ft)" },
	xlarge: { mult: 1.45, label: "Extra Large (200+ sq ft)" },
};

function fmt(n: number) {
	const rounded = Math.round(n / 100) * 100;
	return "$" + rounded.toLocaleString();
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CalculatorPage() {
	const [type, setType] = useState<"bathroom" | "kitchen">("bathroom");
	const [scope, setScope] = useState<string>("");
	const [size, setSize]   = useState<string>("medium");
	const [addons, setAddons] = useState<Set<string>>(new Set());
	const [showResult, setShowResult] = useState(false);

	const baseData   = type === "bathroom" ? BATHROOM_BASE : KITCHEN_BASE;
	const addonData  = type === "bathroom" ? BATHROOM_ADDONS : KITCHEN_ADDONS;

	const toggleAddon = (id: string) => {
		setAddons((prev) => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	};

	const compute = () => {
		if (!scope) return null;
		const base = baseData[scope];
		const mult = SIZE_MULTIPLIER[size]?.mult ?? 1;
		let low  = base.low  * mult;
		let high = base.high * mult;
		addonData.forEach(({ id, low: al, high: ah }) => {
			if (addons.has(id)) { low += al; high += ah; }
		});
		return { low, high };
	};

	const result = compute();

	const reset = () => {
		setScope("");
		setSize("medium");
		setAddons(new Set());
		setShowResult(false);
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "WebPage",
								name: "Bathroom & Kitchen Remodel Cost Calculator | Clark County WA",
								description: "Free instant cost calculator for bathroom and kitchen remodels in Clark County WA. No signup required.",
								url: "https://norbilt.com/calculator",
								provider: {
									"@type": "LocalBusiness",
									name: "Norbilt",
									url: "https://norbilt.com",
									telephone: "+1-3602169920",
									address: {
										"@type": "PostalAddress",
										addressLocality: "Vancouver",
										addressRegion: "WA",
										postalCode: "98686",
										addressCountry: "US",
									},
									aggregateRating: {
										"@type": "AggregateRating",
										ratingValue: "5.0",
										reviewCount: "27",
										bestRating: "5",
										worstRating: "1",
									},
								},
							},
							{
								"@type": "FAQPage",
								mainEntity: [
									{
										"@type": "Question",
										name: "How much does a bathroom remodel cost in Clark County WA?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "A bathroom remodel in Clark County WA costs $800–$2,500 for a cosmetic refresh, $3,000–$7,000 for a mid-range update, $8,000–$18,000 for a full remodel, and $18,000–$35,000+ for a high-end remodel with custom tile and layout changes.",
										},
									},
									{
										"@type": "Question",
										name: "How much does a kitchen remodel cost in Vancouver WA?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "A kitchen remodel in Vancouver WA costs $500–$2,000 for a cosmetic refresh, $3,000–$8,000 for a mid-range update, $10,000–$25,000 for a full remodel, and $25,000–$60,000+ for a high-end remodel with custom cabinets.",
										},
									},
									{
										"@type": "Question",
										name: "Is this estimate accurate for my specific project?",
										acceptedAnswer: {
											"@type": "Answer",
											text: "This calculator provides a general range based on typical Clark County projects. For an accurate quote, request a free on-site estimate — Norbilt walks your home and provides written pricing before any work begins.",
										},
									},
								],
							},
						],
					}),
				}}
			/>

			<div className="min-h-screen bg-[#FDFCFB]">
				{/* HERO */}
				<section className="pt-32 pb-16 bg-[#14201D]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-4">
						<span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-4 py-1.5 rounded-full border border-[#FFB800]/20">
							Free · Instant · No Signup Required
						</span>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Remodel Cost <br />
							<span className="text-[#FFB800]">Calculator</span>
						</h1>
						<p className="text-white/70 text-lg max-w-xl mx-auto border-l-4 border-[#FFB800] pl-4 text-left">
							Instant bathroom and kitchen remodel estimates for Clark County
							WA homeowners. Based on real 2026 project costs in Vancouver,
							Camas, Ridgefield, and surrounding areas.
						</p>
						<div className="flex items-center justify-center gap-2 text-[#A7C4B5] text-sm pt-2">
							<MapPin className="w-4 h-4" />
							Clark County, WA · Vancouver · Camas · Ridgefield · Battle Ground
						</div>
					</div>
				</section>

				{/* CALCULATOR */}
				<section className="py-16 max-w-3xl mx-auto px-6 space-y-10">

					{/* Step 1 — Project type */}
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-3">Step 1 — Project Type</p>
						<div className="grid grid-cols-2 gap-4">
							{(["bathroom", "kitchen"] as const).map((t) => (
								<button
									key={t}
									onClick={() => { setType(t); setScope(""); setAddons(new Set()); setShowResult(false); }}
									className={`py-5 rounded-2xl font-black text-sm uppercase tracking-widest border-2 transition-all ${
										type === t
											? "bg-[#1F2E2B] text-white border-[#1F2E2B]"
											: "bg-white text-[#1F2E2B] border-gray-200 hover:border-[#2D5A3D]"
									}`}
								>
									{t === "bathroom" ? "🚿 Bathroom" : "🍳 Kitchen"}
								</button>
							))}
						</div>
					</div>

					{/* Step 2 — Scope */}
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-3">Step 2 — Project Scope</p>
						<div className="space-y-3">
							{Object.entries(baseData).map(([key, val]) => (
								<button
									key={key}
									onClick={() => { setScope(key); setShowResult(false); }}
									className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
										scope === key
											? "border-[#2D5A3D] bg-[#2D5A3D]/5"
											: "border-gray-200 bg-white hover:border-[#2D5A3D]/40"
									}`}
								>
									<div className="flex justify-between items-center gap-4">
										<span className="font-bold text-[#1F2E2B] text-sm">{val.label}</span>
										<span className={`text-sm font-black whitespace-nowrap ${scope === key ? "text-[#2D5A3D]" : "text-gray-400"}`}>
											{fmt(val.low)} – {fmt(val.high)}
										</span>
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Step 3 — Size */}
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-3">
							Step 3 — {type === "bathroom" ? "Bathroom" : "Kitchen"} Size
						</p>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
							{Object.entries(SIZE_MULTIPLIER).map(([key, val]) => (
								<button
									key={key}
									onClick={() => { setSize(key); setShowResult(false); }}
									className={`py-4 px-3 rounded-xl text-center border-2 transition-all ${
										size === key
											? "border-[#2D5A3D] bg-[#2D5A3D]/5"
											: "border-gray-200 bg-white hover:border-[#2D5A3D]/40"
									}`}
								>
									<p className="font-black text-[#1F2E2B] text-xs">{val.label.split(" (")[0]}</p>
									<p className="text-[10px] text-gray-400 mt-0.5">{val.label.match(/\(([^)]+)\)/)?.[1]}</p>
								</button>
							))}
						</div>
					</div>

					{/* Step 4 — Add-ons */}
					<div>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-3">
							Step 4 — Add-Ons <span className="text-gray-400 normal-case font-medium">(optional)</span>
						</p>
						<div className="grid sm:grid-cols-2 gap-3">
							{addonData.map(({ id, label, low, high }) => (
								<button
									key={id}
									onClick={() => { toggleAddon(id); setShowResult(false); }}
									className={`text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
										addons.has(id)
											? "border-[#2D5A3D] bg-[#2D5A3D]/5"
											: "border-gray-200 bg-white hover:border-[#2D5A3D]/40"
									}`}
								>
									<div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
										addons.has(id) ? "border-[#2D5A3D] bg-[#2D5A3D]" : "border-gray-300"
									}`}>
										{addons.has(id) && <CheckCircle2 className="w-3 h-3 text-white" />}
									</div>
									<div className="flex-1 min-w-0">
										<p className="font-bold text-[#1F2E2B] text-sm">{label}</p>
										<p className="text-xs text-gray-400">+{fmt(low)} – {fmt(high)}</p>
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Calculate button */}
					{scope && (
						<button
							onClick={() => setShowResult(true)}
							className="w-full py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-2xl text-lg hover:scale-[1.02] transition-all shadow-xl"
						>
							Calculate My Estimate →
						</button>
					)}

					{/* RESULT */}
					{showResult && result && (
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-6">
							<div className="text-center">
								<p className="text-[#A7C4B5] text-xs font-black uppercase tracking-widest mb-2">
									Estimated {type === "bathroom" ? "Bathroom" : "Kitchen"} Remodel Cost
								</p>
								<p className="text-5xl md:text-6xl font-black text-white">
									{fmt(result.low)} – {fmt(result.high)}
								</p>
								<p className="text-[#A7C4B5] text-sm mt-2">
									Clark County WA · {SIZE_MULTIPLIER[size].label.split(" (")[0]} {type} · {baseData[scope].label.split(" (")[0]}
									{addons.size > 0 && ` · ${addons.size} add-on${addons.size > 1 ? "s" : ""}`}
								</p>
							</div>

							<div className="bg-white/10 rounded-2xl p-5 space-y-2">
								<p className="text-[#FFB800] font-black text-xs uppercase tracking-widest mb-3">What's Included in This Range</p>
								{[
									"Licensed general contractor labor",
									"Standard material costs (mid-grade)",
									"Clark County market labor rates",
									"Site cleanup and debris removal",
								].map((item) => (
									<div key={item} className="flex items-center gap-2 text-[#A7C4B5] text-sm">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
										{item}
									</div>
								))}
							</div>

							<p className="text-[#A7C4B5] text-xs leading-relaxed text-center">
								This is a general estimate based on typical Clark County project data. Actual costs vary based on existing conditions, material selection, and site specifics. Get a free on-site estimate for exact pricing.
							</p>

							<div className="grid sm:grid-cols-2 gap-4">
								<Link
									href="/contact"
									className="flex items-center justify-center gap-2 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl text-sm hover:scale-105 transition-all"
								>
									Get Free On-Site Quote <ArrowRight className="w-4 h-4" />
								</Link>
								<Link
									href="tel:+13602169920"
									className="flex items-center justify-center gap-2 py-4 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl text-sm hover:bg-white/10 transition-all"
								>
									<Phone className="w-4 h-4" /> (360) 216-9920
								</Link>
							</div>

							<button
								onClick={reset}
								className="w-full flex items-center justify-center gap-2 text-[#A7C4B5] text-sm font-medium hover:text-white transition-colors"
							>
								<RefreshCw className="w-4 h-4" /> Start Over
							</button>
						</div>
					)}
				</section>

				{/* FAQ SECTION */}
				<section className="py-16 bg-[#F8F6F3] border-t border-gray-100">
					<div className="max-w-3xl mx-auto px-6">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-8">
							Common Questions
						</h2>
						<div className="space-y-6">
							{[
								{
									q: "How accurate is this calculator?",
									a: "It's based on real 2026 project costs from jobs we complete in Clark County. It's a reliable ballpark — typically within 20–30% of a real quote for standard projects. Hidden conditions (subfloor damage, mold, old plumbing) can push costs higher, which is why we always inspect before quoting.",
								},
								{
									q: "Does this include permits?",
									a: "Permit costs are not included. In Clark County, cosmetic remodels typically don't require permits. Structural changes, plumbing relocation, or electrical panel work do. Permit fees in Clark County typically run $150–$500 depending on scope.",
								},
								{
									q: "How do I get an exact price?",
									a: "The most accurate way is a free on-site walkthrough. Norbilt walks your home, assesses the specific conditions, and provides a written estimate before any work begins. No obligation, no pressure.",
								},
								{
									q: "Does Norbilt do full bathroom and kitchen remodels?",
									a: "Yes — we handle everything from a quick cosmetic refresh to a full gut remodel, including tile, vanity, fixtures, drywall, and finish carpentry. We serve all of Clark County: Vancouver, Camas, Ridgefield, Battle Ground, Washougal, and surrounding areas.",
								},
							].map((item) => (
								<div key={item.q} className="bg-white rounded-2xl p-6 border border-gray-100">
									<h3 className="font-black text-[#1F2E2B] mb-2">{item.q}</h3>
									<p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* RELATED READING */}
				<section className="py-16 bg-white border-t border-gray-100">
					<div className="max-w-3xl mx-auto px-6">
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-6">Related Cost Guides</p>
						<div className="grid sm:grid-cols-3 gap-4">
							{[
								{
									href: "/blog/bathroom-remodel-cost-clark-county-wa",
									label: "Bathroom Remodel Cost Guide",
									sub: "Clark County WA · 2026",
								},
								{
									href: "/blog/flooring-installation-cost-camas-wa",
									label: "Flooring Installation Costs",
									sub: "Camas WA · LVP, Tile, Hardwood",
								},
								{
									href: "/blog/drywall-repair-cost-vancouver-wa",
									label: "Drywall Repair Costs",
									sub: "Vancouver WA · All patch types",
								},
							].map(({ href, label, sub }) => (
								<Link
									key={href}
									href={href}
									className="group p-5 bg-[#F8F6F3] rounded-2xl border border-gray-100 hover:border-[#2D5A3D] transition-colors"
								>
									<p className="font-black text-[#1F2E2B] text-sm group-hover:text-[#2D5A3D] transition-colors">{label}</p>
									<p className="text-xs text-gray-400 mt-1">{sub}</p>
									<p className="text-xs font-black text-[#FFB800] uppercase tracking-widest mt-3">Read →</p>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
