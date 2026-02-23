import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Services Vancouver WA | Norbilt Contractor",
	description:
		"Explore Norbilt's home repair services in Vancouver WA. From finish carpentry and drywall to handyman work, we handle all interior repairs. Get a free estimate!",
	alternates: {
		canonical: "https://norbilt.com/services",
	},
	openGraph: {
		title: "Home Repair Services | Norbilt Vancouver WA",
		description:
			"Licensed contractor offering carpentry, drywall, flooring, kitchen and bath updates, and handyman services in Clark County.",
		url: "https://norbilt.com/services",
		type: "website",
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
