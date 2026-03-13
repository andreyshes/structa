"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
	end: number;
	suffix: string;
	prefix?: string;
	label: string;
	isDecimal?: boolean;
}

const stats: Stat[] = [
	{ end: 250, suffix: "+", label: "Projects Completed" },
	{ end: 5, suffix: ".0", label: "Star Rating", isDecimal: true },
	{ end: 13, suffix: "", label: "Cities Served" },
	{ end: 100, suffix: "%", label: "Licensed & Bonded" },
];

function CountUp({ end, suffix, prefix = "", isDecimal, inView }: Stat & { inView: boolean }) {
	const [count, setCount] = useState(0);
	const started = useRef(false);

	useEffect(() => {
		if (!inView || started.current) return;
		started.current = true;
		const duration = 1400;
		const steps = 60;
		const increment = end / steps;
		let current = 0;
		const timer = setInterval(() => {
			current += increment;
			if (current >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, duration / steps);
		return () => clearInterval(timer);
	}, [inView, end]);

	return (
		<span>
			{prefix}{count}{suffix}
		</span>
	);
}

export default function StatsBar() {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section ref={ref} className="py-16 bg-[#1F2E2B]">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center space-y-2 px-4">
							<p className="text-5xl md:text-6xl font-black text-[#FFB800] tabular-nums">
								<CountUp {...stat} inView={inView} />
							</p>
							<p className="text-[#A7C4B5] font-black text-xs uppercase tracking-[0.2em]">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
