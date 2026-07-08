"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, ChevronRight, CheckCircle2, Lightbulb } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

type Answers = {
	homeAge: string;
	goal: string;
	budget: string;
	concern: string;
};

type Project = {
	rank: number;
	name: string;
	why: string;
	estimatedCost: string;
	roi: string;
	timeline: string;
};

type Advice = {
	summary: string;
	projects: Project[];
	proTip: string;
};

const STEPS = {
	1: {
		question: "How old is your home?",
		key: "homeAge" as keyof Answers,
		options: [
			{ label: "Before 1970", sub: "Craftsman, mid-century, older stock" },
			{ label: "1970 – 1990", sub: "Ranch, split-level, early suburban" },
			{ label: "1990 – 2010", sub: "The bulk of Clark County homes" },
			{ label: "2010 or newer", sub: "New construction, modern builds" },
		],
	},
	2: {
		question: "What's your main goal?",
		key: "goal" as keyof Answers,
		options: [
			{ label: "Selling within 12 months", sub: "Maximize ROI at resale" },
			{ label: "Staying long-term", sub: "Improve livability & comfort" },
			{ label: "Both — improve & hold value", sub: "Balance livability + resale" },
			{ label: "Just got the house", sub: "Making it mine" },
		],
	},
	3: {
		question: "What's your budget range?",
		key: "budget" as keyof Answers,
		options: [
			{ label: "Under $5,000", sub: "Repairs, paint, quick wins" },
			{ label: "$5,000 – $20,000", sub: "One full room or flooring" },
			{ label: "$20,000 – $50,000", sub: "Kitchen or two bathrooms" },
			{ label: "$50,000+", sub: "Multi-room or whole-home" },
		],
	},
	4: {
		question: "What bothers you most?",
		key: "concern" as keyof Answers,
		options: [
			{ label: "Kitchen feels dated", sub: "Cabinets, counters, layout" },
			{ label: "Bathroom needs work", sub: "Tile, vanity, fixtures, tub" },
			{ label: "Flooring throughout", sub: "Old carpet or worn floors" },
			{ label: "General repairs & maintenance", sub: "Drwall, doors, fixes" },
		],
	},
};

const rankColors = ["bg-[#FFB800]", "bg-[#2D5A3D]", "bg-[#1F2E2B]", "bg-gray-400"];

export default function RenovationAdvisorPage() {
	const [step, setStep] = useState<Step>(1);
	const [answers, setAnswers] = useState<Partial<Answers>>({});
	const [loading, setLoading] = useState(false);
	const [advice, setAdvice] = useState<Advice | null>(null);
	const [error, setError] = useState<string | null>(null);

	function select(key: keyof Answers, value: string) {
		const updated = { ...answers, [key]: value };
		setAnswers(updated);

		if (step < 4) {
			setStep((step + 1) as Step);
		} else {
			setStep(5);
			fetchAdvice(updated as Answers);
		}
	}

	async function fetchAdvice(a: Answers) {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/renovation-advisor", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...a, neighborhood: "Clark County WA" }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setAdvice(data.advice);
		} catch {
			setError("Something went wrong. Please try again or call (360) 216-9920.");
		} finally {
			setLoading(false);
		}
	}

	function restart() {
		setStep(1);
		setAnswers({});
		setAdvice(null);
		setError(null);
	}

	const currentStep = step <= 4 ? STEPS[step as 1 | 2 | 3 | 4] : null;

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-16 px-6">
				<div className="max-w-2xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded mb-6">
						<Lightbulb className="w-3.5 h-3.5" /> AI Renovation Advisor
					</div>
					<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-4">
						What Should You<br />
						<span className="text-[#FFB800]">Renovate First?</span>
					</h1>
					<p className="text-[#A7C4B5] text-lg font-medium leading-relaxed max-w-xl mx-auto">
						4 questions. Personalized project priorities for your Clark County home — with real cost ranges and ROI data.
					</p>
				</div>
			</section>

			<div className="max-w-xl mx-auto px-6 py-12">

				{/* PROGRESS BAR */}
				{step <= 4 && (
					<div className="flex gap-1.5 mb-10">
						{[1, 2, 3, 4].map((s) => (
							<div
								key={s}
								className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-[#FFB800]" : "bg-[#E8E4DE]"}`}
							/>
						))}
					</div>
				)}

				{/* QUESTION STEPS */}
				{currentStep && step <= 4 && (
					<div className="space-y-6">
						<div>
							<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
								Step {step} of 4
							</p>
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								{currentStep.question}
							</h2>
						</div>

						<div className="space-y-3">
							{currentStep.options.map((opt) => (
								<button
									key={opt.label}
									onClick={() => select(currentStep.key, opt.label)}
									className="w-full flex items-center justify-between gap-4 p-5 bg-white border-2 border-[#E8E4DE] rounded-2xl hover:border-[#FFB800] hover:bg-[#FFFBEA] transition-all group text-left"
								>
									<div>
										<p className="font-black text-[#1F2E2B] text-base">{opt.label}</p>
										<p className="text-gray-500 font-medium text-sm mt-0.5">{opt.sub}</p>
									</div>
									<ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#FFB800] shrink-0 transition-colors" />
								</button>
							))}
						</div>

						{/* Previous answers */}
						{Object.keys(answers).length > 0 && (
							<div className="flex flex-wrap gap-2 pt-2">
								{Object.values(answers).map((v, i) => (
									<span key={i} className="text-xs font-bold px-3 py-1 bg-[#F8F6F3] border border-[#E8E4DE] rounded-full text-gray-500">
										{v}
									</span>
								))}
							</div>
						)}
					</div>
				)}

				{/* LOADING */}
				{step === 5 && loading && (
					<div className="text-center py-20 space-y-4">
						<div className="w-12 h-12 border-4 border-[#FFB800] border-t-transparent rounded-full animate-spin mx-auto" />
						<p className="font-black text-[#1F2E2B] uppercase tracking-tighter text-lg">
							Building your renovation plan...
						</p>
						<p className="text-gray-500 font-medium text-sm">
							Analyzing your home's profile against Clark County market data
						</p>
					</div>
				)}

				{/* ERROR */}
				{error && (
					<div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-red-700 font-medium text-sm">
						{error}
					</div>
				)}

				{/* RESULTS */}
				{advice && !loading && (
					<div className="space-y-8">
						{/* Summary */}
						<div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-3xl p-6">
							<p className="text-xs font-black text-[#1F2E2B] uppercase tracking-widest mb-2">Your Renovation Profile</p>
							<p className="text-gray-700 font-medium leading-relaxed">{advice.summary}</p>
							<div className="flex flex-wrap gap-2 mt-4">
								{Object.values(answers).map((v, i) => (
									<span key={i} className="text-xs font-bold px-3 py-1 bg-[#FFB800]/20 border border-[#FFB800]/30 rounded-full text-[#1F2E2B]">
										{v}
									</span>
								))}
							</div>
						</div>

						{/* Projects */}
						<div className="space-y-4">
							<h2 className="text-xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Your Priority Projects
							</h2>
							{advice.projects.map((p) => (
								<div key={p.rank} className="bg-white border border-[#E8E4DE] rounded-2xl overflow-hidden shadow-sm">
									<div className="flex items-center gap-4 p-5">
										<span className={`w-8 h-8 rounded-full ${rankColors[p.rank - 1]} text-white font-black text-sm flex items-center justify-center shrink-0`}>
											{p.rank}
										</span>
										<div className="flex-1 min-w-0">
											<p className="font-black text-[#1F2E2B] text-base">{p.name}</p>
											<p className="text-gray-500 font-medium text-sm mt-0.5 leading-snug">{p.why}</p>
										</div>
									</div>
									<div className="border-t border-[#E8E4DE] grid grid-cols-3 divide-x divide-[#E8E4DE]">
										<div className="px-4 py-3">
											<p className="text-xs text-gray-400 font-black uppercase tracking-wider">Cost</p>
											<p className="text-[#2D5A3D] font-black text-sm">{p.estimatedCost}</p>
										</div>
										<div className="px-4 py-3">
											<p className="text-xs text-gray-400 font-black uppercase tracking-wider">ROI</p>
											<p className="text-[#1F2E2B] font-black text-sm">{p.roi}</p>
										</div>
										<div className="px-4 py-3">
											<p className="text-xs text-gray-400 font-black uppercase tracking-wider">Timeline</p>
											<p className="text-[#1F2E2B] font-black text-sm">{p.timeline}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pro tip */}
						<div className="flex gap-3 bg-[#F8F6F3] rounded-2xl p-5">
							<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
							<div>
								<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Pro Tip</p>
								<p className="text-gray-700 font-medium text-sm leading-relaxed">{advice.proTip}</p>
							</div>
						</div>

						{/* CTA */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white">
							<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-2">Ready to Start?</p>
							<p className="font-black text-xl uppercase tracking-tight mb-2">
								Get a free estimate on any of these projects
							</p>
							<p className="text-[#A7C4B5] font-medium text-sm mb-6">
								Licensed, insured, Clark County-based. Andrey follows up personally — usually same day.
							</p>
							<div className="flex flex-col sm:flex-row gap-3">
								<Link
									href="/estimate"
									className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all text-sm"
								>
									Get Free Estimate <ArrowRight className="w-4 h-4" />
								</Link>
								<a
									href="tel:+13602169920"
									className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all text-sm"
								>
									<Phone className="w-4 h-4" /> 360.216.9920
								</a>
							</div>
						</div>

						<button
							onClick={restart}
							className="w-full py-3 border-2 border-[#E8E4DE] rounded-2xl text-sm font-bold text-gray-500 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors"
						>
							Start Over
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
