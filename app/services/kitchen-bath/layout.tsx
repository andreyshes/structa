import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen & Bath Updates Vancouver WA | Norbilt Contractor",
	description:
		"Kitchen and bathroom updates in Vancouver WA. Norbilt installs backsplash, cabinet hardware, faucets, and fixtures. Licensed general contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/kitchen-bath",
	},
	openGraph: {
		title: "Kitchen & Bath Updates Vancouver WA | Norbilt",
		description:
			"Professional kitchen and bathroom fixture installation and updates in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/kitchen-bath",
		type: "website",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
