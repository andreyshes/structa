import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services Vancouver WA | Norbilt Contractor",
	description:
		"Need a reliable handyman in Vancouver WA? Norbilt handles general home repairs, wood rot fixes, TV mounting, and maintenance. Licensed and bonded contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/handyman",
	},
	openGraph: {
		title: "Handyman Services Vancouver WA | Norbilt",
		description:
			"Licensed handyman services for home repairs and maintenance in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/handyman",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Handyman Services Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Handyman Services Vancouver WA | Norbilt",
		description:
			"Licensed handyman services for home repairs and maintenance in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
