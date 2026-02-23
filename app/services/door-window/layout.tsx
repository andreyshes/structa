import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Door & Window Repair Vancouver WA | Norbilt Contractor",
	description:
		"Door and window repair in Vancouver WA. Norbilt handles interior door setup, lock installation, window trim, and sliding door work. Licensed contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/door-window",
	},
	openGraph: {
		title: "Door & Window Repair Vancouver WA | Norbilt",
		description:
			"Professional door and window repair and installation for homes in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/door-window",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Door & Window Repair Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Door & Window Repair Vancouver WA | Norbilt",
		description:
			"Professional door and window repair and installation for homes in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
