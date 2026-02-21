import AboutPageContent from "@/app/components/AboutPageContent";

export const metadata = {
	title: "About Norbilt | Licensed Home Remodeling Contractor in Vancouver, WA",
	description:
		"Vancouver's trusted interior remodeling specialists. Licensed, bonded & insured. Serving Clark County with quality finish carpentry, drywall repair, and home improvements.",
	alternates: {
		canonical: "https://norbilt.com/about",
	},
	openGraph: {
		title: "About Norbilt | Vancouver WA Home Remodeling Contractor",
		description:
			"Licensed home improvement contractor serving Vancouver, Camas, Battle Ground & Clark County with precision craftsmanship.",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200",
			},
		],
	},
};

export default function AboutPage() {
	return (
		<>
			{/* Schema Markup for Local Business */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"@id": "https://norbilt.com",
						name: "Norbilt Homes",
						image:
							"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200",
						description:
							"Licensed home remodeling contractor serving Vancouver, WA and Clark County. Specializing in interior remodeling, finish carpentry, drywall repair, and home improvements.",
						address: {
							"@type": "PostalAddress",
							addressLocality: "Vancouver",
							addressRegion: "WA",
							postalCode: "98686",
							addressCountry: "US",
						},
						telephone: "+1-916-508-6272",
						url: "https://norbilt.com",
						priceRange: "$$",
						areaServed: [
							"Vancouver, WA",
							"Camas, WA",
							"Battle Ground, WA",
							"Ridgefield, WA",
							"Washougal, WA",
							"Salmon Creek, WA",
							"Hazel Dell, WA",
							"Five Corners, WA",
							"Brush Prairie, WA",
							"Felida, WA",
							"Lake Shore, WA",
							"Orchards, WA",
							"Mill Plain, WA",
						],
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

			<AboutPageContent />
		</>
	);
}
