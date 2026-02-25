import AboutPageContent from "@/app/components/AboutPageContent";

export const metadata = {
	// 54 Characters: Hits the 50-60 target perfectly
	title: "About Norbilt | General Contractor in Vancouver WA",

	// 156 Characters: Hits the 150-160 target perfectly
	description:
		"Learn about Norbilt, your local general contractor in Vancouver WA. We provide licensed home repairs and remodeling for Clark County. Get a free estimate!",

	alternates: {
		canonical: "https://norbilt.com/about",
	},
	openGraph: {
		title: "About Norbilt | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		url: "https://norbilt.com/about",
		siteName: "Norbilt",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200",
				width: 1200,
				height: 630,
				alt: "About Norbilt General Contractor Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Norbilt | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200"],
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
							"Licensed general contractor serving Vancouver, WA. We specialize in interior remodeling, carpentry, and home repairs.",
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
							"Vancouver",
							"Camas",
							"Battle Ground",
							"Ridgefield",
							"Washougal",
							"Salmon Creek",
							"Hazel Dell",
							"Five Corners",
							"Brush Prairie",
							"Felida",
							"Lake Shore",
							"Orchards",
							"Mill Plain",
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
