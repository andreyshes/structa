import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title: "Kitchen & Bath Remodeling Vancouver WA | Licensed Contractor | NORBILT",

	description:
		"Licensed kitchen and bathroom remodeling contractor in Vancouver WA and Clark County. Full gut remodels, tub-to-shower conversions, finish carpentry, flooring & more. Free same-week estimates. Call (360) 216-9920.",

	alternates: {
		canonical: "https://www.norbilt.com",
	},
	openGraph: {
		title: "Kitchen & Bath Remodeling Vancouver WA | Licensed Contractor | NORBILT",
		description:
			"Licensed remodeling contractor in Vancouver WA — kitchen & bath remodels, finish carpentry, flooring, and more. 5-star rated. Free same-week estimates.",
		type: "website",
		url: "https://www.norbilt.com",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NORBILT Kitchen & Bath Remodeling Vancouver WA",
			},
		],
	},
	keywords: [
		"kitchen remodeling Vancouver WA",
		"bathroom remodeling Vancouver WA",
		"home remodeling contractor Vancouver WA",
		"licensed contractor Vancouver WA",
		"tub to shower conversion Clark County",
		"finish carpentry Clark County",
		"general contractor Vancouver WA",
	],
};

export default function HomePage() {
	return <HomePageContent />;
}
