import AboutPageContent from "@/app/components/AboutPageContent";

export const metadata = {
	// 54 Characters: Hits the 50-60 target perfectly
	title: "About Norbilt | General Contractor in Vancouver WA",

	// 156 Characters: Hits the 150-160 target perfectly
	description:
		"Learn about Norbilt, your local general contractor in Vancouver WA. We provide licensed home repairs and remodeling for Clark County. Get a free estimate!",

	alternates: {
		canonical: "https://norbilt.com/about",
	},
	openGraph: {
		title: "About Norbilt | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		url: "https://norbilt.com/about",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "About Norbilt General Contractor Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Norbilt | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function AboutPage() {
	return (
		<>
			<AboutPageContent />
		</>
	);
}
