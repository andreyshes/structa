import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

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
 * Rewritten for maximum readability and keyword density.
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

	const cityName = cityData.name.split(",")[0];
	const serviceTitle = serviceData.title;

	return {
		// 55 Characters: Perfect for Google search results
		title: `${serviceTitle} ${cityName} WA | General Contractor`,

		// 155 Characters: Uses active voice and clear Call to Action (CTA)
		description: `Need expert ${serviceTitle.toLowerCase()} in ${cityName}? Norbilt is your local general contractor for home repairs. Get a free estimate from our team today!`,

		alternates: {
			canonical: `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`,
		},

		openGraph: {
			title: `${serviceTitle} in ${cityName} | Norbilt`,
			description: `Professional ${serviceTitle.toLowerCase()} and home remodeling for owners in ${cityName}, WA.`,
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
