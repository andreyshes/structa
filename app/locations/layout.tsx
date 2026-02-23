import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Service Areas | Norbilt General Contractor Vancouver WA",
	description:
		"Norbilt serves Vancouver, Camas, Washougal, Battle Ground, Ridgefield, and all of Clark County WA. Find licensed home repair services near you.",
	alternates: {
		canonical: "https://norbilt.com/locations",
	},
	openGraph: {
		title: "Service Areas | Norbilt General Contractor",
		description:
			"Licensed home repair and remodeling across Clark County WA. See all the areas Norbilt serves.",
		url: "https://norbilt.com/locations",
		type: "website",
	},
};

export default function LocationsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
