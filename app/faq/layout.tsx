import { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ — Handyman & Contractor Costs, Licensing & Process | NORBILT",
	description:
		"Common questions about hiring NORBILT in Clark County WA. We cover costs, licensing, service area, and how we quote — so you know exactly what to expect.",
	alternates: {
		canonical: "https://www.norbilt.com/faq",
	},
	openGraph: {
		title: "FAQ — Handyman & Contractor Costs in Clark County WA | NORBILT",
		description:
			"Straight answers on cost, licensing, and process from a licensed Clark County general contractor.",
		url: "https://www.norbilt.com/faq",
		siteName: "NORBILT",
		type: "website",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
