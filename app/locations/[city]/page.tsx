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

	// SAFETY CHECK: Prevents build crash if city name is missing
	if (!cityData || !cityData.name) {
		return { title: "Local Home Repair Contractor | Norbilt" };
	}

	const cityName = cityData.name?.split(",")[0] || "Local";
	const shortTitle = `General Contractor ${cityName} WA | Norbilt`;
	const fullDesc = `Looking for a general contractor in ${cityName}? Norbilt provides licensed home repairs and remodeling for ${cityData.neighborhoods?.slice(0, 2).join(" and ") || "local"} residents.`;
	const pageUrl = `https://norbilt.com/locations/${city}`;

	return {
		title: shortTitle,
		description: fullDesc,
		alternates: {
			canonical: pageUrl,
		},
		// Fills all social/Facebook audit boxes
		openGraph: {
			title: shortTitle,
			description: fullDesc,
			url: pageUrl,
			siteName: "Norbilt",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://norbilt.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: `Norbilt Services in ${cityName} WA`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: shortTitle,
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
