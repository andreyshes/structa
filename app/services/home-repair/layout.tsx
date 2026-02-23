import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Vancouver WA | Norbilt General Contractor",
	description:
		"Professional home repair services in Vancouver WA. Norbilt is your licensed general contractor for interior fixes and updates in Clark County.",
	alternates: {
		canonical: "https://norbilt.com/services/home-repair",
	},
	openGraph: {
		title: "Home Repair Vancouver WA | Norbilt",
		description:
			"Licensed home repair and interior updates for homeowners in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/home-repair",
		type: "website",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
