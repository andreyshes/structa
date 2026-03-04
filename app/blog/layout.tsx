import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Tips Clark County WA | Norbilt Blog",
	description:
		"Expert home repair and remodeling advice for Clark County homeowners. Costs, tips, and guides for Vancouver, Battle Ground, Camas, Ridgefield & more.",
	alternates: {
		canonical: "https://norbilt.com/blog",
	},
	openGraph: {
		title: "Home Repair & Remodeling Tips | Norbilt Blog",
		description:
			"Practical home repair and remodeling guides for Clark County WA homeowners.",
		url: "https://norbilt.com/blog",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt Home Repair Blog Clark County WA",
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
