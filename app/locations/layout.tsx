import { Metadata } from "next";

export const metadata: Metadata = {
	title: "General Contractor Service Areas | Vancouver WA | Norbilt",
	description:
		"Norbilt is a licensed general contractor serving Vancouver, Camas, Washougal, Battle Ground, and Ridgefield WA. We handle home repairs across Clark County.",
	alternates: {
		canonical: "https://norbilt.com/locations",
	},
	openGraph: {
		title: "General Contractor Service Areas | Norbilt Vancouver WA",
		description:
			"Licensed general contractor for home repairs and remodeling across Clark County WA. Serving Vancouver, Camas, Washougal, and more.",
		url: "https://norbilt.com/locations",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt General Contractor Service Areas in Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "General Contractor Service Areas | Norbilt Vancouver WA",
		description:
			"Licensed general contractor for home repairs and remodeling across Clark County WA. Serving Vancouver, Camas, Washougal, and more.",
		images: ["https://norbilt.com/og-image.jpg"],
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
