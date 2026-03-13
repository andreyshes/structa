"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
	return (
		<InlineWidget
			url="https://calendly.com/hello-norbilt/30min"
			styles={{ height: "700px", minWidth: "320px" }}
			pageSettings={{
				backgroundColor: "ffffff",
				hideEventTypeDetails: false,
				hideLandingPageDetails: false,
				primaryColor: "FFB800",
				textColor: "1F2E2B",
			}}
		/>
	);
}
