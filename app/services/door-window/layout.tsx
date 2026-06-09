import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Door & Window Repair Vancouver WA | NORBILT Contractor",
	description:
		"Door and window repair in Vancouver WA. NORBILT handles interior door setup, lock installation, window trim, and sliding door work. Licensed contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/services/door-window",
	},
	openGraph: {
		title: "Door & Window Repair Vancouver WA | NORBILT",
		description:
			"Professional door and window repair and installation for homes in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/door-window",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Door & Window Repair Vancouver WA | NORBILT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Door & Window Repair Vancouver WA | NORBILT",
		description:
			"Professional door and window repair and installation for homes in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
