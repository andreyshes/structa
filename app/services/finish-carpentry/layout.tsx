import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Finish Carpentry Vancouver WA | NORBILT Contractor",
	description:
		"Quality finish carpentry in Vancouver WA. NORBILT installs crown molding, baseboards, window trim, and built-in shelves. Licensed general contractor.",
	alternates: {
		canonical: "https://www.norbilt.com/services/finish-carpentry",
	},
	openGraph: {
		title: "Finish Carpentry Vancouver WA | NORBILT",
		description:
			"Expert trim work, crown molding, and custom carpentry for homes in Vancouver and Clark County WA.",
		url: "https://www.norbilt.com/services/finish-carpentry",
		type: "website",
		siteName: "NORBILT",
		locale: "en_US",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Finish Carpentry Vancouver WA | NORBILT",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Finish Carpentry Vancouver WA | NORBILT",
		description:
			"Expert trim work, crown molding, and custom carpentry for homes in Vancouver and Clark County WA.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
