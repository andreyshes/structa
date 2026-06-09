import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact NORBILT | Free Estimate Vancouver WA",
	description:
		"Contact NORBILT for a free home repair estimate in Vancouver WA. Licensed general contractor serving Clark County. Call or fill out our form today!",
	alternates: {
		canonical: "https://www.norbilt.com/contact",
	},
	openGraph: {
		title: "Contact NORBILT | Free Estimate Vancouver WA",
		description:
			"Get a free estimate from NORBILT, your licensed general contractor in Vancouver WA. We handle home repairs and interior remodeling.",
		url: "https://www.norbilt.com/contact",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Contact NORBILT General Contractor Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact NORBILT | Free Estimate Vancouver WA",
		description:
			"Get a free estimate from NORBILT, your licensed general contractor in Vancouver WA. We handle home repairs and interior remodeling.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
