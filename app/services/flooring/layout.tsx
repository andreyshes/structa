import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flooring Repair Vancouver WA | LVP & Tile | NORBILT",
	description:
		"Flooring repair and LVP installation in Vancouver WA. NORBILT fixes planks, squeaks, grout, and thresholds. Licensed general contractor in Clark County.",
	alternates: {
		canonical: "https://www.norbilt.com/services/flooring",
	},
	openGraph: {
		title: "Flooring Repair Vancouver WA | NORBILT",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/flooring",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Flooring Repair Vancouver WA | NORBILT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Flooring Repair Vancouver WA | NORBILT",
		description:
			"LVP, tile, and floor repair services for homes in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
