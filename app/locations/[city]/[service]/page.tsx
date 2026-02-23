import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

/**
 * 1. STATIC PATH GENERATION
 */
export async function generateStaticParams() {
	const cities = Object.keys(locationsData);
	const services = Object.keys(servicesData);

	return cities.flatMap((city) =>
		services.map((service) => ({
			city: city,
			service: service,
		})),
	);
}

/**
 * 2. DYNAMIC METADATA (SEO OPTIMIZED)
 * Fixed to prevent 'split' errors and shortened to avoid 'Title Too Long' audit flags.
 */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ city: string; service: string }> | any;
}): Promise<Metadata> {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	// SAFETY CHECK: Prevents build crash if data is missing
	if (!cityData || !serviceData || !cityData.name) {
		return { title: "Home Repair Services | Norbilt" };
	}

	// SAFE SPLIT: Uses optional chaining to handle city name safely
	const cityName = cityData.name?.split(",")[0] || "Local";

	// LOGIC TO SHORTEN TITLES: Keeps them under 60 chars
	// "Flooring Repair & Interior Updates" -> "Flooring Repair"
	const serviceTitle = serviceData.title.split(" &")[0].split(" and")[0];

	const shortTitle = `${serviceTitle} in ${cityName} WA | Norbilt`;
	const fullDesc = `Need expert ${serviceTitle.toLowerCase()} in ${cityName}? Norbilt is your local general contractor for home repairs. Get a free estimate today!`;

	return {
		title: shortTitle,
		description: fullDesc,

		alternates: {
			canonical: `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`,
		},

		// Fills the empty Facebook/Social Metadata boxes in your audit
		openGraph: {
			title: shortTitle,
			description: fullDesc,
			url: `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`,
			siteName: "Norbilt",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://norbilt.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: `${serviceTitle} in ${cityName} WA`,
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

/**
 * 3. SERVER-SIDE PAGE LOGIC
 */
export default async function Page({
	params,
}: {
	params: Promise<{ city: string; service: string }> | any;
}) {
	const resolvedParams = await params;
	const city = locationsData[resolvedParams.city];
	const service = servicesData[resolvedParams.service];

	if (!city || !service) return notFound();

	return (
		<ServicePageClient
			city={city}
			service={service}
			citySlug={resolvedParams.city}
			serviceSlug={resolvedParams.service}
		/>
	);
}
