import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lighting Installation Vancouver WA | Norbilt Contractor",
	description:
		"Lighting installation and fixture updates in Vancouver WA. Norbilt handles interior lighting upgrades for your home. Licensed general contractor.",
	alternates: {
		canonical: "https://norbilt.com/services/lighting",
	},
	openGraph: {
		title: "Lighting Installation Vancouver WA | Norbilt",
		description:
			"Professional lighting fixture installation and upgrades for homes in Vancouver and Clark County WA.",
		url: "https://norbilt.com/services/lighting",
		type: "website",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
