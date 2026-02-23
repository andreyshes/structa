import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Services Vancouver WA | Norbilt Contractor",
	description:
		"Explore Norbilt's home repair services in Vancouver WA. From finish carpentry and drywall to handyman work, we handle all interior repairs. Get a free estimate!",
	alternates: {
		canonical: "https://norbilt.com/services",
	},
	openGraph: {
		title: "Home Repair Services | Norbilt Vancouver WA",
		description:
			"Licensed contractor offering carpentry, drywall, flooring, kitchen and bath updates, and handyman services in Clark County.",
		url: "https://norbilt.com/services",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt Home Repair Services Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Repair Services | Norbilt Vancouver WA",
		description:
			"Licensed contractor offering carpentry, drywall, flooring, kitchen and bath updates, and handyman services in Clark County.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
