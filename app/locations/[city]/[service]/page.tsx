import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ city: string; service: string }> | any;
}): Promise<Metadata> {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	// SAFETY CHECK: Prevents build crash
	if (!cityData || !serviceData || !cityData.name) {
		return { title: "Home Repair Services | Norbilt" };
	}

	const cityName = cityData.name?.split(",")[0] || "Local";

	// SHORTENING LOGIC: Removes extra text like "& Interior Updates" to fix title length
	const serviceTitle = serviceData.title.split(" &")[0].split(" and")[0];
	const shortTitle = `${serviceTitle} in ${cityName} WA | Norbilt`;
	const fullDesc = `Need expert ${serviceTitle.toLowerCase()} in ${cityName}? Norbilt is your local general contractor for home repairs. Get a free estimate today!`;
	const pageUrl = `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`;

	return {
		title: shortTitle,
		description: fullDesc,
		alternates: {
			canonical: pageUrl,
		},
		// Fills "OG URL Missing" and "Facebook Metadata" boxes
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
