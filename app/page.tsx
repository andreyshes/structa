import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title: "General Contractor Vancouver WA | 5-Star Rated | Free Estimates | NORBILT",

	description:
		"Vancouver WA's 5-star rated licensed general contractor. Handyman, drywall, finish carpentry, kitchen & bath, flooring & more. Free same-week estimates. Call (360) 216-9920.",

	alternates: {
		canonical: "https://www.norbilt.com",
	},
	openGraph: {
		title: "General Contractor Vancouver WA | 5-Star Rated | Free Estimates | NORBILT",
		description:
			"Vancouver WA's 5-star rated licensed general contractor. Handyman, drywall, finish carpentry, kitchen & bath, flooring & more. Free same-week estimates.",
		type: "website",
		url: "https://www.norbilt.com",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT General Contractor Vancouver WA",
			},
		],
	},
	keywords: [
		"general contractor Vancouver WA",
		"Vancouver WA home remodeling",
		"interior contractor Vancouver",
		"finish carpentry Clark County",
		"licensed contractor Vancouver WA",
		"home renovation Vancouver",
		"handyman services Vancouver WA",
	],
};

export default function HomePage() {
	return <HomePageContent />;
}
