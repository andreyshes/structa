import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Tips Clark County WA | NORBILT Blog",
	description:
		"Expert home repair and remodeling advice for Clark County homeowners. Costs, tips, and guides for Vancouver, Battle Ground, Camas, Ridgefield & more.",
	alternates: {
		canonical: "https://www.norbilt.com/blog",
	},
	openGraph: {
		title: "Home Repair & Remodeling Tips | NORBILT Blog",
		description:
			"Practical home repair and remodeling guides for Clark County WA homeowners.",
		url: "https://www.norbilt.com/blog",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Home Repair Blog Clark County WA",
			},
		],
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
