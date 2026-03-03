import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel & Kitchen Updates Clark County WA | Norbilt",
	description:
		"Bathroom remodels & kitchen updates in Vancouver, Brush Prairie, Felida & Clark County WA. Tile, vanity, fixtures. Licensed contractor. Free estimate!",
	alternates: {
		canonical: "https://norbilt.com/services/kitchen-bath",
	},
	openGraph: {
		title: "Bathroom Remodel & Kitchen Updates Clark County WA | Norbilt",
		description:
			"Bathroom remodels & kitchen updates across Clark County WA. Tile, vanity, faucets & fixtures. Licensed contractor.",
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
		title: "Bathroom Remodel & Kitchen Updates Clark County WA | Norbilt",
		description:
			"Bathroom remodels & kitchen updates across Clark County WA. Tile, vanity, faucets & fixtures. Licensed contractor.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
