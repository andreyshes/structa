import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Services Vancouver WA | Licensed Contractor | NORBILT",
	description:
		"Home remodeling services in Vancouver WA and Clark County. Kitchen & bath remodels, finish carpentry, flooring, drywall, and more. Licensed contractor. Free estimate!",
	alternates: {
		canonical: "https://www.norbilt.com/services",
	},
	openGraph: {
		title: "Home Remodeling Services | NORBILT Vancouver WA",
		description:
			"Licensed home remodeling contractor in Clark County — kitchen & bath, finish carpentry, flooring, drywall, and more.",
		url: "https://www.norbilt.com/services",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Home Repair Services Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Home Remodeling Services | NORBILT Vancouver WA",
		description:
			"Licensed home remodeling contractor in Clark County — kitchen & bath, finish carpentry, flooring, drywall, and more.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
