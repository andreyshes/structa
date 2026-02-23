import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Drywall Repair Vancouver WA | Norbilt Contractor",
	description:
		"Expert drywall repair in Vancouver WA. Norbilt fixes wall holes, water damage, texture matching, and stress cracks. Licensed general contractor in Clark County.",
	alternates: {
		canonical: "https://norbilt.com/services/drywall-repair",
	},
	openGraph: {
		title: "Drywall Repair Vancouver WA | Norbilt",
		description:
			"Professional drywall patching, texture matching, and wall repair in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/drywall-repair",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Drywall Repair Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Drywall Repair Vancouver WA | Norbilt",
		description:
			"Professional drywall patching, texture matching, and wall repair in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
