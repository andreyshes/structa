import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lighting Installation Vancouver WA | NORBILT Contractor",
	description:
		"Lighting installation and fixture updates in Vancouver WA. NORBILT handles interior lighting upgrades for your home. Licensed general contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/services/lighting",
	},
	openGraph: {
		title: "Lighting Installation Vancouver WA | NORBILT",
		description:
			"Professional lighting fixture installation and upgrades for homes in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/lighting",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Lighting Installation Vancouver WA | NORBILT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Lighting Installation Vancouver WA | NORBILT",
		description:
			"Professional lighting fixture installation and upgrades for homes in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
