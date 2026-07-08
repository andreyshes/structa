"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Upload, Camera, ArrowRight, Phone, CheckCircle2, AlertTriangle, Clock, DollarSign, X } from "lucide-react";

type Assessment = {
	issue: string;
	scope: string;
	urgency: "Cosmetic" | "Should address soon" | "Address promptly — may worsen";
	costRange: { low: number; high: number };
	projectType: string;
	timeline: string;
	included: string[];
	watchFor: string;
	confidence: string;
};

const urgencyColor = {
	"Cosmetic": "bg-green-50 border-green-200 text-green-800",
	"Should address soon": "bg-yellow-50 border-yellow-200 text-yellow-800",
	"Address promptly — may worsen": "bg-red-50 border-red-200 text-red-800",
};

const urgencyIcon = {
	"Cosmetic": <CheckCircle2 className="w-4 h-4" />,
	"Should address soon": <Clock className="w-4 h-4" />,
	"Address promptly — may worsen": <AlertTriangle className="w-4 h-4" />,
};

export default function PhotoEstimatePage() {
	const [preview, setPreview] = useState<string | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	const [assessment, setAssessment] = useState<Assessment | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [dragOver, setDragOver] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	function handleFile(f: File) {
		if (!f.type.startsWith("image/")) {
			setError("Please upload an image file (JPG, PNG, HEIC, etc.)");
			return;
		}
		setFile(f);
		setAssessment(null);
		setError(null);
		const reader = new FileReader();
		reader.onload = (e) => setPreview(e.target?.result as string);
		reader.readAsDataURL(f);
	}

	const onDrop = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setDragOver(false);
		const f = e.dataTransfer.files[0];
		if (f) handleFile(f);
	}, []);

	async function analyze() {
		if (!file) return;
		setLoading(true);
		setError(null);

		const formData = new FormData();
		formData.append("photo", file);

		try {
			const res = await fetch("/api/photo-assess", { method: "POST", body: formData });
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setAssessment(data.assessment);
		} catch {
			setError("Something went wrong analyzing the photo. Try again or call (360) 216-9920.");
		} finally {
			setLoading(false);
		}
	}

	function reset() {
		setFile(null);
		setPreview(null);
		setAssessment(null);
		setError(null);
	}

	return (
		<div className="bg-[#FDFCFB] min-h-screen">
			{/* HERO */}
			<section className="bg-[#1F2E2B] pt-32 pb-16 px-6">
				<div className="max-w-3xl mx-auto text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded mb-6">
						<Camera className="w-3.5 h-3.5" /> AI Photo Assessment
					</div>
					<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-4">
						Upload a Photo.<br />
						<span className="text-[#FFB800]">Get a Real Cost Estimate.</span>
					</h1>
					<p className="text-[#A7C4B5] text-lg font-medium leading-relaxed max-w-xl mx-auto">
						Snap a photo of your drywall crack, old bathroom, damaged floor, or any home project — our AI gives you a real Clark County cost range in seconds.
					</p>
				</div>
			</section>

			<div className="max-w-2xl mx-auto px-6 py-12 space-y-8">

				{!assessment ? (
					<>
						{/* UPLOAD ZONE */}
						<div
							onDrop={onDrop}
							onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
							onDragLeave={() => setDragOver(false)}
							onClick={() => !preview && inputRef.current?.click()}
							className={`relative rounded-3xl border-2 border-dashed transition-all cursor-pointer overflow-hidden
								${dragOver ? "border-[#FFB800] bg-[#FFB800]/5" : "border-[#E8E4DE] hover:border-[#1F2E2B] bg-white"}
								${preview ? "cursor-default" : ""}`}
						>
							<input
								ref={inputRef}
								type="file"
								accept="image/*"
								className="hidden"
								onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
							/>

							{preview ? (
								<div className="relative">
									<img src={preview} alt="Uploaded" className="w-full max-h-80 object-contain bg-black/5" />
									<button
										onClick={(e) => { e.stopPropagation(); reset(); }}
										className="absolute top-3 right-3 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
									>
										<X className="w-4 h-4" />
									</button>
									<div className="absolute bottom-3 left-3 bg-[#FFB800] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
										Photo ready
									</div>
								</div>
							) : (
								<div className="py-10 px-6 text-center space-y-3">
									<div className="w-12 h-12 bg-[#F8F6F3] rounded-2xl flex items-center justify-center mx-auto">
										<Upload className="w-6 h-6 text-[#1F2E2B]" />
									</div>
									<div>
										<p className="font-black text-[#1F2E2B] text-base uppercase tracking-tight">Drop a photo here</p>
										<p className="text-gray-500 font-medium text-sm mt-0.5">or tap to choose from your camera roll</p>
									</div>
									<p className="text-gray-400 text-xs">JPG, PNG, HEIC · Any room, any damage, any project</p>
								</div>
							)}
						</div>

						{error && (
							<div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 text-red-700 font-medium text-sm">
								{error}
							</div>
						)}

						{/* EXAMPLE PHOTOS */}
						{!preview && (
							<div className="space-y-3">
								<p className="text-xs font-black text-gray-400 uppercase tracking-widest">Works great for</p>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
									{["Drywall cracks & holes", "Old bathrooms", "Damaged flooring", "Dated kitchens"].map((label) => (
										<div key={label} className="bg-white border border-[#E8E4DE] rounded-xl p-3 text-center">
											<p className="text-xs font-bold text-gray-600">{label}</p>
										</div>
									))}
								</div>
							</div>
						)}

						{file && (
							<button
								onClick={analyze}
								disabled={loading}
								className="w-full py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-2xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-3 text-sm"
							>
								{loading ? (
									<>
										<span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
										Analyzing photo...
									</>
								) : (
									<>
										Analyze Photo <ArrowRight className="w-4 h-4" />
									</>
								)}
							</button>
						)}
					</>
				) : (
					/* RESULTS */
					<div className="space-y-6">
						{/* Preview thumbnail */}
						<div className="flex gap-4 items-start">
							<img src={preview!} alt="Analyzed" className="w-24 h-24 object-cover rounded-2xl border border-[#E8E4DE] shrink-0" />
							<div>
								<div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-black uppercase tracking-wide mb-2 ${urgencyColor[assessment.urgency]}`}>
									{urgencyIcon[assessment.urgency]}
									{assessment.urgency}
								</div>
								<p className="font-black text-[#1F2E2B] text-lg leading-tight">{assessment.issue}</p>
								<p className="text-gray-500 text-xs font-medium mt-1">Confidence: {assessment.confidence} · {assessment.projectType}</p>
							</div>
						</div>

						{/* Cost range */}
						<div className="bg-[#1F2E2B] rounded-3xl p-6 flex items-center justify-between">
							<div>
								<p className="text-[#A7C4B5] text-xs font-black uppercase tracking-widest mb-1">Estimated Cost</p>
								<p className="text-white font-black text-3xl">
									${assessment.costRange.low.toLocaleString()} – ${assessment.costRange.high.toLocaleString()}
								</p>
								<p className="text-[#A7C4B5] text-xs font-medium mt-1">Clark County 2026 · licensed contractor rates</p>
							</div>
							<DollarSign className="w-10 h-10 text-[#FFB800]" />
						</div>

						{/* Scope + timeline */}
						<div className="grid sm:grid-cols-2 gap-4">
							<div className="bg-white border border-[#E8E4DE] rounded-2xl p-5">
								<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">What's Needed</p>
								<p className="text-gray-700 font-medium text-sm leading-relaxed">{assessment.scope}</p>
							</div>
							<div className="bg-white border border-[#E8E4DE] rounded-2xl p-5">
								<p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Typical Timeline</p>
								<p className="text-[#1F2E2B] font-black text-xl">{assessment.timeline}</p>
								<p className="text-gray-500 text-xs font-medium mt-1">{assessment.projectType}</p>
							</div>
						</div>

						{/* Included */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6 space-y-3">
							<p className="text-xs font-black text-gray-400 uppercase tracking-widest">What's Typically Included</p>
							{assessment.included.map((item, i) => (
								<div key={i} className="flex gap-3 items-start">
									<CheckCircle2 className="w-4 h-4 text-[#2D5A3D] shrink-0 mt-0.5" />
									<p className="text-gray-700 font-medium text-sm">{item}</p>
								</div>
							))}
						</div>

						{/* Watch for */}
						<div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-2xl p-5 flex gap-3">
							<AlertTriangle className="w-5 h-5 text-[#CC8800] shrink-0 mt-0.5" />
							<div>
								<p className="text-xs font-black text-[#1F2E2B] uppercase tracking-widest mb-1">Watch For</p>
								<p className="text-gray-700 font-medium text-sm">{assessment.watchFor}</p>
							</div>
						</div>

						{/* CTA */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 text-white">
							<p className="text-xs font-black uppercase tracking-widest text-[#FFB800] mb-2">Want a Real Quote?</p>
							<p className="font-black text-xl uppercase tracking-tight mb-2">
								Free estimate from a licensed Clark County contractor
							</p>
							<p className="text-[#A7C4B5] font-medium text-sm mb-6">
								Andrey reaches back to every inquiry personally — usually same day.
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

						{/* Try another */}
						<button
							onClick={reset}
							className="w-full py-3 border-2 border-[#E8E4DE] rounded-2xl text-sm font-bold text-gray-500 hover:border-[#1F2E2B] hover:text-[#1F2E2B] transition-colors"
						>
							Analyze Another Photo
						</button>
					</div>
				)}

				{/* Disclaimer */}
				<p className="text-xs text-gray-400 text-center leading-relaxed">
					AI assessment based on visual analysis. Actual costs depend on site conditions, material choices, and exact scope.
					NORBILT provides free on-site estimates with written quotes.
				</p>
			</div>
		</div>
	);
}
