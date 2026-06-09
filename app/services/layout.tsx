import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Services Vancouver WA | NORBILT Contractor",
	description:
		"Explore NORBILT's home repair services in Vancouver WA. From finish carpentry and drywall to handyman work, we handle all interior repairs. Free estimate!",
	alternates: {
		canonical: "https://www.norbilt.com/services",
	},
	openGraph: {
		title: "Home Repair Services | NORBILT Vancouver WA",
		description:
			"Licensed contractor offering carpentry, drywall, flooring, kitchen and bath updates, and handyman services in Clark County.",
		url: "https://www.norbilt.com/services",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Home Repair Services Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Repair Services | NORBILT Vancouver WA",
		description:
			"Licensed contractor offering carpentry, drywall, flooring, kitchen and bath updates, and handyman services in Clark County.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
