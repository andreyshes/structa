// app/locations/[city]/page.tsx
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
		title: `Home Repairs in ${cityName} WA | Expert General Contractor`,

		description: `Need a reliable general contractor in ${cityName}? Norbilt provides licensed, bonded home repairs and remodeling. Serving ${cityData.neighborhoods.slice(0, 3).join(", ")} and beyond.`,

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
