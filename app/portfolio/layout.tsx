import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project Portfolio | Home Remodeling Photos | NORBILT Vancouver WA",
	description:
		"Browse real completed projects by NORBILT — bathroom remodels, kitchen updates, fence installation, and more across Clark County WA.",
	alternates: {
		canonical: "https://www.norbilt.com/portfolio",
	},
	openGraph: {
		title: "Project Portfolio | NORBILT Vancouver WA",
		description:
			"Real completed projects by NORBILT. Bathroom remodels, kitchen updates, fencing, and more across Clark County WA.",
		url: "https://www.norbilt.com/portfolio",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Project Portfolio Clark County WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Project Portfolio | NORBILT Vancouver WA",
		description:
			"Real completed projects by NORBILT across Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
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
