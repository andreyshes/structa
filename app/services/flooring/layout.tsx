import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Repair Vancouver WA | LVP & Tile | Norbilt",
	description:
		"Flooring repair and LVP installation in Vancouver WA. Norbilt fixes planks, squeaks, grout, and thresholds. Licensed general contractor in Clark County.",
	alternates: {
		canonical: "https://norbilt.com/services/flooring",
	},
	openGraph: {
		title: "Flooring Repair Vancouver WA | Norbilt",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/flooring",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Flooring Repair Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Flooring Repair Vancouver WA | Norbilt",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
