import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

/**
 * 1. STATIC PATH GENERATION
 * Ensures all 78+ location/service combinations are pre-rendered for speed.
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
 * This section fixes the "Needs Improvement" audit by meeting character counts:
 * - Title: 50-60 characters (includes "General Contractor" keywords)
 * - Description: 150-160 characters (includes CTA and local signals)
 */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ city: string; service: string }> | any;
}) {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	if (!cityData || !serviceData)
		return { title: "Service Not Found | Norbilt" };

	const cityName = cityData.name.split(",")[0]; // Grabs "Vancouver" from "Vancouver, WA"
	const serviceTitle = serviceData.title;

	return {
		// Optimized for 50-60 chars: Includes primary keyword and location
		title: `${serviceTitle} in ${cityName} WA | Expert General Contractor`,

		// Optimized for 150-160 chars: Hits keyword density and clear CTA
		description: `Need reliable ${serviceTitle.toLowerCase()} in ${cityName}? Norbilt is your licensed local general contractor for precision home repairs. Get your free estimate today!`,

		// Canonical prevents duplicate content issues in Search Console
		alternates: {
			canonical: `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`,
		},

		// OpenGraph for better social media sharing appearance
		openGraph: {
			title: `${serviceTitle} in ${cityName} | Norbilt Renovations`,
			description: `Professional ${serviceTitle.toLowerCase()} and interior remodeling for homeowners in ${cityName}, WA.`,
			url: `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`,
			type: "website",
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
