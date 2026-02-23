import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Norbilt | Free Estimate Vancouver WA",
	description:
		"Contact Norbilt for a free home repair estimate in Vancouver WA. Licensed general contractor serving Clark County. Call or fill out our form today!",
	alternates: {
		canonical: "https://norbilt.com/contact",
	},
	openGraph: {
		title: "Contact Norbilt | Free Estimate Vancouver WA",
		description:
			"Get a free estimate from Norbilt, your licensed general contractor in Vancouver WA. We handle home repairs and interior remodeling.",
		url: "https://norbilt.com/contact",
		type: "website",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
