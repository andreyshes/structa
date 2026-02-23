import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lighting Installation Vancouver WA | Norbilt Contractor",
	description:
		"Lighting installation and fixture updates in Vancouver WA. Norbilt handles interior lighting upgrades for your home. Licensed general contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/lighting",
	},
	openGraph: {
		title: "Lighting Installation Vancouver WA | Norbilt",
		description:
			"Professional lighting fixture installation and upgrades for homes in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/lighting",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Lighting Installation Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Lighting Installation Vancouver WA | Norbilt",
		description:
			"Professional lighting fixture installation and upgrades for homes in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
