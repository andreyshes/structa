import { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ — Handyman & Contractor Costs, Licensing & Process | Norbilt",
	description:
		"Common questions about hiring Norbilt in Clark County WA. We cover costs, licensing, service area, and how we quote — so you know exactly what to expect.",
	alternates: {
		canonical: "https://norbilt.com/faq",
	},
	openGraph: {
		title: "FAQ — Handyman & Contractor Costs in Clark County WA | Norbilt",
		description:
			"Straight answers on cost, licensing, and process from a licensed Clark County general contractor.",
		url: "https://norbilt.com/faq",
		siteName: "Norbilt",
		type: "website",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
