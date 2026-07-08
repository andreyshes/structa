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

	if (!cityData || !cityData.name) {
		return {
			title: "Local Home Repair Contractor | NORBILT",
			description:
				"NORBILT provides expert home repairs and general contracting services. Contact our licensed team for professional remodeling and maintenance today.",
		};
	}

	const cityName = cityData.name?.split(",")[0] || "Local";
	const shortTitle = `#1 Contractor in ${cityName} WA | 5-Star Rated & Licensed | NORBILT`;

	const fullDesc = `5-star rated licensed contractor in ${cityName}, WA. Handyman, drywall, finish carpentry, kitchen & bath updates, flooring & more. Free same-week estimates. Call (360) 216-9920.`;
	const pageUrl = `https://www.norbilt.com/locations/${city}`;

	return {
		title: shortTitle,
		description: fullDesc,
		alternates: { canonical: pageUrl },
		openGraph: {
			title: shortTitle,
			description: fullDesc,
			url: pageUrl,
			siteName: "NORBILT",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://www.norbilt.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: `NORBILT Services in ${cityName} WA`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: shortTitle,
			description: fullDesc,
			images: ["https://www.norbilt.com/og-image.jpg"],
		},
	};
}

export default async function Page({ params }: any) {
	const { city: citySlug } = await params;
	const city = locationsData[citySlug];
	if (!city) return notFound();

	const cityName = city.name?.split(",")[0] || "Local";
	const pageUrl = `https://www.norbilt.com/locations/${citySlug}`;
	const schema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": pageUrl,
		name: `NORBILT — General Contractor in ${cityName} WA`,
		url: pageUrl,
		telephone: "+13602169920",
		email: "hello@norbilt.com",
		description: `Licensed general contractor in ${cityName}, WA. Kitchen & bathroom remodeling, handyman, drywall, finish carpentry, flooring & more. Free same-week estimates.`,
		address: {
			"@type": "PostalAddress",
			addressLocality: cityName,
			addressRegion: "WA",
			addressCountry: "US",
		},
		areaServed: { "@type": "City", name: cityName, containedInPlace: "Clark County, WA" },
		priceRange: "$$",
		openingHours: "Mo-Sa 08:00-18:00",
		hasCredential: "WA General Contractor License NORBIHH849QC",
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
			<CityLandingClient city={city} citySlug={citySlug} />
		</>
	);
}
