"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTracker() {
	const pathname = usePathname();

	useEffect(() => {
		const milestones = [25, 50, 75, 90];
		const fired = new Set<number>();

		function handleScroll() {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			if (docHeight <= 0) return;
			const scrollPct = Math.round((scrollTop / docHeight) * 100);

			for (const milestone of milestones) {
				if (scrollPct >= milestone && !fired.has(milestone)) {
					fired.add(milestone);
					if (typeof window !== "undefined" && (window as any).gtag) {
						(window as any).gtag("event", "scroll_depth", {
							percent_scrolled: milestone,
							page_path: pathname,
						});
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname]);

	return null;
}
