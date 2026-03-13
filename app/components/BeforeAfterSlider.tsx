"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
	beforeSrc: string;
	afterSrc: string;
	beforeAlt: string;
	afterAlt: string;
	label?: string;
}

export default function BeforeAfterSlider({
	beforeSrc,
	afterSrc,
	beforeAlt,
	afterAlt,
	label,
}: BeforeAfterSliderProps) {
	const [position, setPosition] = useState(50);
	const containerRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);

	const updatePosition = useCallback((clientX: number) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
		setPosition((x / rect.width) * 100);
	}, []);

	const onMouseDown = useCallback(() => {
		isDragging.current = true;
	}, []);

	const onMouseMove = useCallback(
		(e: MouseEvent) => {
			if (!isDragging.current) return;
			updatePosition(e.clientX);
		},
		[updatePosition],
	);

	const onMouseUp = useCallback(() => {
		isDragging.current = false;
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [onMouseMove, onMouseUp]);

	return (
		<div className="space-y-4">
			{label && (
				<div className="flex items-center justify-between px-1">
					<span className="text-xs font-black uppercase tracking-widest text-gray-400">
						{label}
					</span>
					<span className="text-xs font-bold text-gray-400">
						← Drag to reveal
					</span>
				</div>
			)}
			<div
				ref={containerRef}
				className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none touch-none"
				onTouchMove={(e) => {
					e.preventDefault();
					updatePosition(e.touches[0].clientX);
				}}
			>
				{/* BEFORE (base layer) */}
				<div className="absolute inset-0">
					<Image
						src={beforeSrc}
						alt={beforeAlt}
						fill
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
						Before
					</div>
				</div>

				{/* AFTER (clipped to slider position) */}
				<div
					className="absolute inset-0"
					style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
				>
					<Image
						src={afterSrc}
						alt={afterAlt}
						fill
						sizes="100vw"
						className="object-cover"
					/>
					<div className="absolute bottom-4 right-4 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
						After
					</div>
				</div>

				{/* Divider */}
				<div
					className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"
					style={{ left: `${position}%` }}
				>
					{/* Handle */}
					<button
						className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize border-2 border-[#FFB800]"
						onMouseDown={onMouseDown}
						aria-label="Drag to compare before and after"
					>
						<GripVertical className="w-5 h-5 text-[#1F2E2B]" />
					</button>
				</div>
			</div>
		</div>
	);
}
