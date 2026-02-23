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
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
