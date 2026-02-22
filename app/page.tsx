import HomePageContent from "@/app/components/HomePageContent";

export const metadata = {
	title:
		"Vancouver WA Home Remodeling Contractor | Licensed Interior Renovations | Norbilt",
	description:
		"Vancouver WA's most reliable home remodeling contractor. Licensed, bonded & insured. Specializing in interior renovations, finish carpentry, kitchen & bath updates. Serving all Clark County.",
	alternates: {
		canonical: "https://norbilt.com",
	},
	openGraph: {
		title: "Vancouver WA Home Remodeling Contractor | Norbilt",
		description:
			"Licensed home remodeling contractor serving Vancouver, Camas, Battle Ground & Clark County. Quality interior renovations, finish carpentry, and home improvements.",
		type: "website",
		url: "https://norbilt.com",
		images: [
			{
				url: "/bathroom.jpg.png",
				width: 1200,
				height: 630,
				alt: "Vancouver WA Home Remodeling Services",
			},
		],
	},
	keywords: [
		"Vancouver WA home remodeling",
		"interior contractor Vancouver",
		"finish carpentry Clark County",
		"licensed contractor Vancouver WA",
		"home renovation Vancouver",
		"kitchen remodel Vancouver",
		"bathroom remodel Clark County",
		"handyman services Vancouver WA",
	],
};

export default function HomePage() {
	return (
		<>
			{/* Schema Markup for Local Business */}
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
							"Licensed home remodeling contractor serving Vancouver, WA and Clark County. Specializing in interior renovations, finish carpentry, kitchen and bathroom remodeling, and handyman services.",
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
							{
								"@type": "City",
								name: "Vancouver",
								"@id": "https://en.wikipedia.org/wiki/Vancouver,_Washington",
							},
							{
								"@type": "City",
								name: "Camas",
							},
							{
								"@type": "City",
								name: "Washougal",
							},
							{
								"@type": "City",
								name: "Ridgefield",
							},
							{
								"@type": "City",
								name: "Battle Ground",
							},
							{
								"@type": "Place",
								name: "Salmon Creek, WA",
							},
							{
								"@type": "Place",
								name: "Hazel Dell, WA",
							},
							{
								"@type": "Place",
								name: "Five Corners, WA",
							},
							{
								"@type": "Place",
								name: "Brush Prairie, WA",
							},
							{
								"@type": "Place",
								name: "Felida, WA",
							},
							{
								"@type": "Place",
								name: "Lake Shore, WA",
							},
							{
								"@type": "Place",
								name: "Orchards, WA",
							},
							{
								"@type": "Place",
								name: "Mill Plain, WA",
							},
							{
								"@type": "AdministrativeArea",
								name: "Clark County",
							},
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
						sameAs: [
							"https://www.facebook.com/norbilt",
							"https://www.instagram.com/norbilt",
						],
						hasOfferCatalog: {
							"@type": "OfferCatalog",
							name: "Home Remodeling Services",
							itemListElement: [
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Interior Remodeling",
										description:
											"Complete interior home renovations and remodeling services",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Finish Carpentry",
										description:
											"Custom trim work, crown molding, baseboards, and wainscoting",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Kitchen Remodeling",
										description:
											"Kitchen renovations, backsplashes, and cabinet upgrades",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Bathroom Remodeling",
										description:
											"Bathroom renovations and fixture upgrades",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Handyman Services",
										description:
											"Professional handyman and home repair services",
									},
								},
								{
									"@type": "Offer",
									itemOffered: {
										"@type": "Service",
										name: "Drywall Repair",
										description:
											"Professional drywall repair and texture matching",
									},
								},
							],
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
