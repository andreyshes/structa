import { locationsData } from "@/app/locations/data";
import { notFound } from "next/navigation";
import ServiceLandingClient from "./[service]/ServicePageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
	const params: { city: string; service: string }[] = [];

	Object.keys(locationsData).forEach((city) => {
		// Assuming each city object has a 'services' keys or you iterate common services
		const services = [
			"handyman",
			"drywall-repair",
			"finish-carpentry",
			"door-window",
			"flooring",
			"kitchen-bath",
			"lighting",
		];
		services.forEach((service) => {
			params.push({ city, service });
		});
	});

	return params;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { city, service } = await params;
	const cityData = locationsData[city];

	if (!cityData) return { title: "Location Not Found" };

	const cityName = cityData.name.split(",")[0];

	// LOGIC TO FIX "TITLE TOO LONG"
	// This takes "Flooring Repair & Interior Updates" and turns it into "Flooring Repair"
	// keeping the total character count around 40-50 chars.
	const rawServiceName = service
		.split("-")
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	const shortServiceName = rawServiceName
		.split(" Repair")[0]
		.split(" &")[0]
		.split(" Updates")[0];

	const shortTitle = `${shortServiceName} in ${cityName} WA | Norbilt`;
	const fullDesc = `Expert ${rawServiceName.toLowerCase()} in ${cityName}, WA. Norbilt provides professional home repairs and licensed contracting for your local neighborhood.`;

	return {
		title: shortTitle,
		description: fullDesc,

		// Fixes the "Canonical mismatch"
		alternates: {
			canonical: `https://norbilt.com/locations/${city}/${service}`,
		},

		// Fills those "Empty Boxes" in the HeyTony Audit
		openGraph: {
			title: shortTitle,
			description: fullDesc,
			url: `https://norbilt.com/locations/${city}/${service}`,
			siteName: "Norbilt",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: "https://norbilt.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: `${shortServiceName} Services in ${cityName}`,
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
	const { city: citySlug, service: serviceSlug } = await params;
	const city = locationsData[citySlug];

	if (!city) return notFound();

	return (
		<ServiceLandingClient
			city={city}
			citySlug={citySlug}
			serviceSlug={serviceSlug}
		/>
	);
}
