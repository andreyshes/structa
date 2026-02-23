import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Finish Carpentry Vancouver WA | Norbilt Contractor",
	description:
		"Quality finish carpentry in Vancouver WA. Norbilt installs crown molding, baseboards, window trim, and built-in shelves. Licensed general contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/finish-carpentry",
	},
	openGraph: {
		title: "Finish Carpentry Vancouver WA | Norbilt",
		description:
			"Expert trim work, crown molding, and custom carpentry for homes in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/finish-carpentry",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Finish Carpentry Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Finish Carpentry Vancouver WA | Norbilt",
		description:
			"Expert trim work, crown molding, and custom carpentry for homes in Vancouver and Clark County WA.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
