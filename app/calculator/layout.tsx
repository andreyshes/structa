import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom & Kitchen Remodel Cost Calculator | Clark County WA | Norbilt",
	description:
		"Free bathroom and kitchen remodel cost calculator for Clark County WA homeowners. Get an instant estimate for your Vancouver, Camas, or Ridgefield remodel — no signup required.",
	alternates: {
		canonical: "https://norbilt.com/calculator",
	},
	openGraph: {
		title: "Bathroom & Kitchen Remodel Cost Calculator | Clark County WA",
		description:
			"Instant remodel cost estimates for Clark County WA homeowners. No email required.",
		url: "https://norbilt.com/calculator",
		siteName: "Norbilt",
		type: "website",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
	keywords: [
		"bathroom remodel cost calculator clark county wa",
		"kitchen remodel cost calculator vancouver wa",
		"bathroom remodel calculator washington state",
		"home remodel cost estimator clark county",
		"bathroom renovation cost calculator",
	],
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
