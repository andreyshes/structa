import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen & Bath Updates Vancouver WA | Norbilt Contractor",
	description:
		"Kitchen and bathroom updates in Vancouver WA. Norbilt installs backsplash, cabinet hardware, faucets, and fixtures. Licensed general contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/kitchen-bath",
	},
	openGraph: {
		title: "Kitchen & Bath Updates Vancouver WA | Norbilt",
		description:
			"Professional kitchen and bathroom fixture installation and updates in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/kitchen-bath",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Kitchen & Bath Updates Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kitchen & Bath Updates Vancouver WA | Norbilt",
		description:
			"Professional kitchen and bathroom fixture installation and updates in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
