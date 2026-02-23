import { MetadataRoute } from "next";
import { locationsData, servicesData } from "./locations/data"; // Verify this path matches your file structure

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://norbilt.com";
	const lastModified = new Date();

	// 1. Define your Core Routes
	const routes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified,
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/locations`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.9,
		},
	];

	// 2. Add Dynamic Location Landing Pages (e.g., /locations/vancouver)
	const locationKeys = Object.keys(locationsData);
	const serviceKeys = Object.keys(servicesData);

	locationKeys.forEach((location) => {
		routes.push({
			url: `${baseUrl}/locations/${location}`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.8,
		});

		// 3. Add Dynamic City + Service Pages (e.g., /locations/vancouver/drywall-repair)
		// Now that you use dynamic routes, every service is valid for every location
		serviceKeys.forEach((service) => {
			routes.push({
				url: `${baseUrl}/locations/${location}/${service}`,
				lastModified,
				changeFrequency: "weekly",
				priority: 0.7,
			});
		});
	});

	// 4. Add Main Service Pages (e.g., /services/drywall-repair)
	serviceKeys.forEach((service) => {
		routes.push({
			url: `${baseUrl}/services/${service}`,
			lastModified,
			changeFrequency: "weekly",
			priority: 0.8,
		});
	});

	return routes;
}
