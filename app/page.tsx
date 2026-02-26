import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title: "General Contractor Vancouver WA | Norbilt Home Repairs",

	description:
		"Looking for a licensed general contractor in Vancouver WA? Norbilt provides expert home repairs and interior remodeling. Get a free estimate today!",

	alternates: {
		canonical: "https://norbilt.com",
	},
	openGraph: {
		title: "General Contractor Vancouver WA | Norbilt",
		description:
			"Licensed general contractor serving Vancouver, WA. We specialize in quality interior renovations and home repairs.",
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
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "5.0",
							reviewCount: "50",
						},
					}),
				}}
			/>

			<HomePageContent />
		</>
	);
}
