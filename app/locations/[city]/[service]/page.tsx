import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
	const cities = Object.keys(locationsData);
	const services = Object.keys(servicesData);
	return cities.flatMap((city) =>
		services.map((service) => ({ city, service })),
	);
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	if (!cityData || !serviceData || !cityData.name) {
		return { title: "Home Repair Services | Norbilt" };
	}

	const cityName = cityData.name?.split(",")[0] || "Local";
	const serviceTitle = serviceData.title.split(" &")[0].split(" and")[0];
	const shortTitle = `${serviceTitle} in ${cityName} WA | Norbilt`;

	// FIXED LENGTH: ~140 Characters (Audit Safe)
	const fullDesc = `Need expert ${serviceTitle.toLowerCase()} in ${cityName}? Norbilt offers professional home repairs and licensed contracting. Get a free estimate today!`;
	const pageUrl = `https://norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`;

	return {
		title: shortTitle,
		description: fullDesc,
		alternates: { canonical: pageUrl },
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

export default async function Page({ params }: any) {
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
