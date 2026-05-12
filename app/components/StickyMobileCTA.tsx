"use client";

import { usePathname } from "next/navigation";
import { Phone, Zap } from "lucide-react";
import Link from "next/link";

function track(event: string, cta: string) {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag("event", event, { cta });
	}
}

export default function StickyMobileCTA() {
	const pathname = usePathname();

	// Homepage and estimate page have their own CTAs — skip to avoid overlap
	if (pathname === "/" || pathname === "/estimate") return null;

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t-2 border-[#FFB800] shadow-2xl">
			<a
				href="tel:+13602169920"
				onClick={() => track("phone_click", "sticky_mobile")}
				className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#14201D] text-white font-black uppercase tracking-widest text-xs border-r border-white/10 active:bg-[#1F2E2B]"
			>
				<Phone className="w-4 h-4 text-[#FFB800]" /> Call Now
			</a>
			<Link
				href="/estimate"
				onClick={() => track("estimator_click", "sticky_mobile")}
				className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest text-xs active:bg-amber-400"
			>
				<Zap className="w-4 h-4" /> AI Estimate
			</Link>
		</div>
	);
}
