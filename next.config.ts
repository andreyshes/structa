/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: false,
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=0, stale-while-revalidate=300",
					},
				],
			},
		];
	},
	async redirects() {
		return [
			// /locations/[city]/[service] → /services/[service] (consolidate thin pages)
			// Specific overrides for slugs that map to /services/kitchen-bath
			{
				source: "/locations/:city/bathroom-remodel",
				destination: "/services/kitchen-bath",
				permanent: true,
			},
			{
				source: "/locations/:city/kitchen-remodel",
				destination: "/services/kitchen-bath",
				permanent: true,
			},
			// Generic catch-all for all other city+service combos
			{
				source: "/locations/:city/:service",
				destination: "/services/:service",
				permanent: true,
			},
			// Old service slugs → new slugs (permanent 301)
			{
				source: "/services/handyman-services",
				destination: "/services/handyman",
				permanent: true,
			},
			{
				source: "/services/door-window-repair",
				destination: "/services/door-window",
				permanent: true,
			},
			{
				source: "/services/kitchen-bathroom-updates",
				destination: "/services/kitchen-bath",
				permanent: true,
			},
			{
				source: "/services/flooring-repair-interior-updates",
				destination: "/services/flooring",
				permanent: true,
			},
			// Old location+service slugs → new slugs
			{
				source: "/locations/:city/handyman-services",
				destination: "/locations/:city/handyman",
				permanent: true,
			},
			{
				source: "/locations/:city/door-window-repair",
				destination: "/locations/:city/door-window",
				permanent: true,
			},
			{
				source: "/locations/:city/kitchen-bathroom-updates",
				destination: "/locations/:city/kitchen-bath",
				permanent: true,
			},
			{
				source: "/locations/:city/flooring-repair-interior-updates",
				destination: "/locations/:city/flooring",
				permanent: true,
			},
		];
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "t3.ftcdn.net",
			},
		],
	},
};

module.exports = nextConfig;
