import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Customer Reviews | NORBILT General Contractor Vancouver WA",
	description:
		"See what homeowners across Vancouver, Battle Ground, Camas, Felida, and Clark County say about NORBILT. Licensed contractor with a 5.0 rating.",
	alternates: {
		canonical: "https://www.norbilt.com/reviews",
	},
	openGraph: {
		title: "Customer Reviews | NORBILT General Contractor Vancouver WA",
		description:
			"Real reviews from homeowners across Clark County WA. Licensed contractor with a 5.0 rating and 50+ completed projects.",
		url: "https://www.norbilt.com/reviews",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Customer Reviews Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Customer Reviews | NORBILT Vancouver WA",
		description:
			"Real reviews from homeowners across Clark County WA. Licensed contractor with a 5.0 rating.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
	keywords: [
		"NORBILT reviews",
		"general contractor reviews Vancouver WA",
		"home repair reviews Clark County",
		"contractor reviews Battle Ground",
		"contractor reviews Camas WA",
		"handyman reviews Vancouver WA",
	],
};

export default function ReviewsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
