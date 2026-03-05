import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title: "Licensed General Contractor Clark County WA | Norbilt",

	description:
		"Norbilt is a licensed general contractor in Clark County WA. Home repairs, remodeling & interior updates. Serving Vancouver, Battle Ground, Camas & more.",

	alternates: {
		canonical: "https://norbilt.com",
	},
	openGraph: {
		title: "Licensed General Contractor Clark County WA | Norbilt",
		description:
			"Licensed general contractor serving all of Clark County WA. Expert home repairs, remodeling, and interior updates. Free estimates.",
		type: "website",
		url: "https://norbilt.com",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Norbilt General Contractor Vancouver WA",
			},
		],
	},
	keywords: [
		"general contractor Vancouver WA",
		"Vancouver WA home remodeling",
		"interior contractor Vancouver",
		"finish carpentry Clark County",
		"licensed contractor Vancouver WA",
		"home renovation Vancouver",
		"handyman services Vancouver WA",
	],
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "GeneralContractor",
						"@id": "https://norbilt.com",
						name: "Norbilt Homes",
						alternateName: "Norbilt Renovations",
						url: "https://norbilt.com",
						logo: "https://norbilt.com/icon-v3.png",
						image: "/bathroom.jpg.png",
						description:
							"Licensed general contractor in Vancouver, WA. We specialize in interior remodeling, finish carpentry, and home repairs.",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Vancouver",
							addressRegion: "WA",
							postalCode: "98686",
							addressCountry: "US",
						},
						telephone: "+1-916-508-6272",
						priceRange: "$$",
						areaServed: [
							"Vancouver",
							"Camas",
							"Washougal",
							"Ridgefield",
							"Battle Ground",
							"Salmon Creek",
							"Hazel Dell",
							"Five Corners",
							"Brush Prairie",
							"Felida",
							"Lake Shore",
							"Orchards",
							"Mill Plain",
						],
						geo: {
							"@type": "GeoCoordinates",
							latitude: "45.6387",
							longitude: "-122.6615",
						},
						openingHoursSpecification: {
							"@type": "OpeningHoursSpecification",
							dayOfWeek: [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday",
							],
							opens: "08:00",
							closes: "17:00",
						},
					}),
				}}
			/>

			<HomePageContent />
		</>
	);
}
