import { locationsData, servicesData } from "../../data";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
	const params = [];
	for (const city of Object.keys(locationsData)) {
		for (const service of Object.keys(servicesData)) {
			params.push({ city, service });
		}
	}
	return params;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const resolvedParams = await params;
	const cityData = locationsData[resolvedParams.city];
	const serviceData = servicesData[resolvedParams.service];

	if (!cityData || !serviceData || !cityData.name) {
		return { title: "Home Repair Services | NORBILT" };
	}

	const cityName = cityData.name?.split(",")[0] || "Local";
	const serviceSlug = resolvedParams.service;

	// Service-specific title and description patterns for higher CTR
	const titleMap: Record<string, string> = {
		"handyman": `Handyman in ${cityName} WA | 5-Star Licensed | Same-Week | NORBILT`,
		"home-repair": `Home Repair in ${cityName} WA | Licensed & 5-Star Rated | NORBILT`,
		"drywall-repair": `Drywall Repair in ${cityName} WA | Seamless Patches | Free Estimate | NORBILT`,
		"finish-carpentry": `Finish Carpentry in ${cityName} WA | Crown Molding & Trim | NORBILT`,
		"kitchen-bath": `Kitchen & Bathroom Remodeling in ${cityName} WA | Licensed Contractor | NORBILT`,
		"flooring": `Flooring Repair in ${cityName} WA | LVP & Tile | Free Estimate | NORBILT`,
		"door-window": `Door & Window Repair in ${cityName} WA | Licensed | Free Estimate | NORBILT`,
		"bathroom-remodel": `Bathroom Remodeling in ${cityName} WA | Licensed Contractor | NORBILT`,
		"kitchen-remodel": `Kitchen Remodeling in ${cityName} WA | Licensed Contractor | NORBILT`,
		"lighting": `Lighting & Fixtures in ${cityName} WA | Licensed Installation | NORBILT`,
	};

	const descMap: Record<string, string> = {
		"handyman": `5-star rated handyman in ${cityName}, WA. Licensed, bonded & insured. Drywall, fixtures, doors, mounting, punch lists & more. Free same-week estimates. Call (360) 216-9920.`,
		"home-repair": `Licensed home repair contractor in ${cityName}, WA — 5-star rated. Drywall, fixtures, doors, caulking, safety repairs & more. Free same-week estimates. Call (360) 216-9920.`,
		"drywall-repair": `Expert drywall repair in ${cityName}, WA. Seamless hole patching, texture matching & water damage repair. Licensed, 1-year warranty. Free estimates. Call (360) 216-9920.`,
		"finish-carpentry": `Licensed finish carpentry in ${cityName}, WA. Baseboards, crown molding, wainscoting & trim installed right. Free estimates, 1-year warranty. Call (360) 216-9920.`,
		"kitchen-bath": `Licensed kitchen & bathroom remodeling contractor in ${cityName}, WA. Full remodels, tub-to-shower conversions, tile, vanity, backsplash & more. Free same-week estimates. Call (360) 216-9920.`,
		"flooring": `Flooring repair & installation in ${cityName}, WA. LVP, tile, hardwood, subfloor repair. Licensed contractor, free estimates. Call (360) 216-9920.`,
		"door-window": `Door & window repair in ${cityName}, WA. Installs, weatherstripping, sticking doors & hardware. Licensed, free estimates. Call (360) 216-9920.`,
		"bathroom-remodel": `Licensed bathroom remodeling contractor in ${cityName}, WA. Full gut remodels, tub-to-shower conversions, vanity & tile. Free same-week estimates. Call (360) 216-9920.`,
		"kitchen-remodel": `Licensed kitchen remodeling contractor in ${cityName}, WA. Full remodels, cabinet replacement, countertops, backsplash & more. Free same-week estimates. Call (360) 216-9920.`,
		"lighting": `Licensed lighting & fixture installation in ${cityName}, WA. Ceiling fans, recessed lighting, fixture swaps & upgrades. Free estimates. Call (360) 216-9920.`,
	};

	const shortTitle = titleMap[serviceSlug] ?? `${serviceData.title} in ${cityName} WA | Licensed & 5-Star Rated | NORBILT`;
	const fullDesc = descMap[serviceSlug] ?? `5-star rated ${serviceData.title.toLowerCase()} in ${cityName}, WA. Licensed, bonded & insured. Free same-week estimates. Call (360) 216-9920.`;
	const pageUrl = `https://www.norbilt.com/locations/${resolvedParams.city}/${resolvedParams.service}`;

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
					alt: `${serviceData.title} in ${cityName} WA`,
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
