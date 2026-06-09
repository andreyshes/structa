import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Drywall Repair Vancouver WA | NORBILT Contractor",
	description:
		"Expert drywall repair in Vancouver WA. NORBILT fixes wall holes, water damage, texture matching, and stress cracks. Licensed contractor in Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/services/drywall-repair",
	},
	openGraph: {
		title: "Drywall Repair Vancouver WA | NORBILT",
		description:
			"Professional drywall patching, texture matching, and wall repair in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/drywall-repair",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Drywall Repair Vancouver WA | NORBILT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Drywall Repair Vancouver WA | NORBILT",
		description:
			"Professional drywall patching, texture matching, and wall repair in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
