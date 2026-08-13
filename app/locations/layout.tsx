import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Contractor Service Areas | Clark County WA | NORBILT",
	description:
		"NORBILT is a licensed home remodeling contractor serving Vancouver, Camas, Washougal, Battle Ground, and Ridgefield WA. Kitchen & bath remodels across Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/locations",
	},
	openGraph: {
		title: "Home Remodeling Contractor Service Areas | NORBILT Vancouver WA",
		description:
			"Licensed home remodeling contractor serving Vancouver, Camas, Washougal, and all of Clark County WA.",
		url: "https://www.norbilt.com/locations",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT General Contractor Service Areas in Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Remodeling Contractor Service Areas | NORBILT Vancouver WA",
		description:
			"Licensed home remodeling contractor serving Vancouver, Camas, Washougal, and all of Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
	keywords: [
		"general contractor Vancouver WA",
		"home repair Clark County",
		"contractor Camas WA",
		"contractor Battle Ground WA",
		"home repair Washougal WA",
		"licensed contractor Clark County",
	],
};

export default function LocationsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
