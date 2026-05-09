import { MetadataRoute } from "next";
import { locationsData, servicesData } from "./locations/data";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://norbilt.com";

	// 1. Define your Core Routes
	const routes: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date("2026-02-26"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date("2026-02-26"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/locations`,
			lastModified: new Date("2026-03-04"),
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
			lastModified: new Date("2026-03-04"),
			changeFrequency: "monthly",
			priority: 0.8,
		});

		// 3. Add Dynamic City + Service Pages (e.g., /locations/vancouver/drywall-repair)
		serviceKeys.forEach((service) => {
			routes.push({
				url: `${baseUrl}/locations/${location}/${service}`,
				lastModified: new Date("2026-03-04"),
				changeFrequency: "monthly",
				priority: 0.7,
			});
		});
	});

	// 4. Add Main Service Pages (e.g., /services/drywall-repair)
	serviceKeys.forEach((service) => {
		routes.push({
			url: `${baseUrl}/services/${service}`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.8,
		});
	});

	// 5. Add standalone service pages not in servicesData
	routes.push(
		{
			url: `${baseUrl}/services/home-repair`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/lighting`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	);

	// 6. Reviews, Pricing, Portfolio, FAQ pages
	routes.push(
		{
			url: `${baseUrl}/calculator`,
			lastModified: new Date("2026-04-15"),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date("2026-03-04"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/pricing`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/portfolio`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/reviews`,
			lastModified: new Date("2026-03-03"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
	);

	// 7. Blog index + articles
	routes.push(
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/flooring-installation-cost-vancouver-wa`,
			lastModified: new Date("2026-05-09"),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog/kitchen-remodel-cost-clark-county-wa`,
			lastModified: new Date("2026-04-28"),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog/bathtub-to-shower-conversion-cost-clark-county-wa`,
			lastModified: new Date("2026-04-20"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/bathroom-remodel-cost-clark-county-wa`,
			lastModified: new Date("2026-04-15"),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog/bathroom-remodel-cost-ridgefield-wa`,
			lastModified: new Date("2026-03-04"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/battle-ground-handyman-what-to-expect`,
			lastModified: new Date("2026-03-04"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/clark-county-home-repair-checklist`,
			lastModified: new Date("2026-03-04"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/drywall-repair-cost-vancouver-wa`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/licensed-contractor-vs-handyman-washington-state`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/signs-you-need-bathroom-remodel-vancouver-wa`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/flooring-installation-cost-camas-wa`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/home-repairs-before-selling-clark-county-wa`,
			lastModified: new Date("2026-04-06"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
	);

	return routes;
}
