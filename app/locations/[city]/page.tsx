import { locationsData } from "../data";
import { notFound } from "next/navigation";
import CityLandingClient from "./CityLandingClient";

export async function generateStaticParams() {
	return Object.keys(locationsData).map((city) => ({
		city: city,
	}));
}

export async function generateMetadata({ params }: any) {
	const { city } = await params;
	const cityData = locationsData[city];

	if (!cityData) return { title: "Location Not Found" };

	const cityName = cityData.name.split(",")[0];

	return {
		// Punchy title with primary keyword first
		title: `General Contractor ${cityName} WA | Home Repair Experts`,

		// Simplified description to boost Flesch reading score of the metadata itself
		description: `Looking for a general contractor in ${cityName}? Norbilt provides licensed home repairs and remodeling. We serve ${cityData.neighborhoods.slice(0, 2).join(" and ")} area residents.`,

		alternates: {
			canonical: `https://norbilt.com/locations/${city}`,
		},
	};
}

export default async function Page({ params }: any) {
	const { city: citySlug } = await params;
	const city = locationsData[citySlug];

	if (!city) return notFound();

	return <CityLandingClient city={city} citySlug={citySlug} />;
}
