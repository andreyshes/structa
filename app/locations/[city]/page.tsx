import { locationsData } from "../data";
import { notFound } from "next/navigation";
import CityLandingClient from "./CityLandingClient";
import { Metadata } from "next";

export async function generateStaticParams() {
	return Object.keys(locationsData).map((city) => ({
		city: city,
	}));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { city } = await params;
	const cityData = locationsData[city];

	if (!cityData) return { title: "Location Not Found" };

	const cityName = cityData.name.split(",")[0];
	const fullTitle = `General Contractor ${cityName} WA | Home Repair Experts`;
	const fullDesc = `Looking for a general contractor in ${cityName}? Norbilt provides licensed home repairs and remodeling. We serve ${cityData.neighborhoods.slice(0, 2).join(" and ")} area residents.`;

	return {
		title: fullTitle,
		description: fullDesc,

		// Fixes the "Canonical does not match sitemap" issue
		alternates: {
			canonical: `https://norbilt.com/locations/${city}`,
		},

		// Fills the "Empty Boxes" in your audit for Social/Facebook metadata
		openGraph: {
			title: fullTitle,
			description: fullDesc,
			url: `https://norbilt.com/locations/${city}`,
			siteName: "Norbilt",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://norbilt.com/og-image.jpg", // Make sure this image exists in your /public folder
					width: 1200,
					height: 630,
					alt: `Norbilt Home Repairs in ${cityName} WA`,
				},
			],
		},

		// Additional tags for Twitter/X previews
		twitter: {
			card: "summary_large_image",
			title: fullTitle,
			description: fullDesc,
			images: ["https://norbilt.com/og-image.jpg"],
		},
	};
}

export default async function Page({ params }: any) {
	const { city: citySlug } = await params;
	const city = locationsData[citySlug];

	if (!city) return notFound();

	return <CityLandingClient city={city} citySlug={citySlug} />;
}
