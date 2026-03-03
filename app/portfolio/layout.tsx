import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project Portfolio | Home Remodeling Photos | Norbilt Vancouver WA",
	description:
		"Browse real completed projects by Norbilt — bathroom remodels, kitchen updates, fence installation, and more across Clark County WA.",
	alternates: {
		canonical: "https://norbilt.com/portfolio",
	},
	openGraph: {
		title: "Project Portfolio | Norbilt Vancouver WA",
		description:
			"Real completed projects by Norbilt. Bathroom remodels, kitchen updates, fencing, and more across Clark County WA.",
		url: "https://norbilt.com/portfolio",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt Project Portfolio Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Project Portfolio | Norbilt Vancouver WA",
		description:
			"Real completed projects by Norbilt across Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
	keywords: [
		"home remodeling portfolio Vancouver WA",
		"bathroom remodel photos Clark County",
		"kitchen remodel Vancouver WA",
		"contractor project photos Clark County",
		"before after bathroom remodel Vancouver WA",
	],
};

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
