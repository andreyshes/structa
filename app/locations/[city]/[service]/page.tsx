import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
	const cities = Object.keys(locationsData);
	const services = Object.keys(servicesData);

	return cities.flatMap((city) =>
		services.map((service) => ({
			city: city, // Must match folder name [city]
			service: service, // Must match folder name [service]
		})),
	);
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ city: string; service: string }> | any;
}) {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	if (!cityData || !serviceData) return { title: "Not Found" };
	return { title: `${serviceData.title} in ${cityData.name} | Norbilt` };
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
