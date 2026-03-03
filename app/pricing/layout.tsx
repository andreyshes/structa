import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair & Remodeling Pricing | Clark County WA | Norbilt",
	description:
		"Transparent pricing for home repairs and remodeling in Clark County WA. See real cost ranges for handyman, bathroom remodel, carpentry, drywall & more.",
	alternates: {
		canonical: "https://norbilt.com/pricing",
	},
	openGraph: {
		title: "Home Repair Pricing Guide | Norbilt Clark County WA",
		description:
			"Real cost ranges for home repairs and remodeling across Clark County WA. No surprises — see what to expect before you call.",
		url: "https://norbilt.com/pricing",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Home Repair Pricing Clark County WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Repair Pricing Guide | Norbilt Clark County WA",
		description:
			"Real cost ranges for home repairs and remodeling across Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
	keywords: [
		"home repair cost Vancouver WA",
		"bathroom remodel cost Clark County",
		"handyman pricing Vancouver WA",
		"drywall repair cost Vancouver WA",
		"contractor pricing Clark County WA",
		"finish carpentry cost Vancouver WA",
	],
};

export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
