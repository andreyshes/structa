import AboutPageContent from "@/app/components/AboutPageContent";

export const metadata = {
	// 54 Characters: Hits the 50-60 target perfectly
	title: "About NORBILT | General Contractor in Vancouver WA",

	// 156 Characters: Hits the 150-160 target perfectly
	description:
		"Learn about NORBILT, your local general contractor in Vancouver WA. We provide licensed home repairs and remodeling for Clark County. Get a free estimate!",

	alternates: {
		canonical: "https://www.norbilt.com/about",
	},
	openGraph: {
		title: "About NORBILT | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		url: "https://www.norbilt.com/about",
		siteName: "NORBILT",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://www.norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "About NORBILT General Contractor Vancouver WA",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About NORBILT | Vancouver WA General Contractor",
		description:
			"Licensed home repair and remodeling experts serving Vancouver and Clark County.",
		images: ["https://www.norbilt.com/og-image.jpg"],
	},
};

export default function AboutPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "Person",
								"@id": "https://www.norbilt.com/about#founder",
								name: "Andrey",
								jobTitle: "Licensed General Contractor",
								worksFor: { "@id": "https://www.norbilt.com/#business" },
								knowsAbout: [
									"Home Remodeling",
									"Drywall Repair",
									"Finish Carpentry",
									"Kitchen Remodeling",
									"Bathroom Remodeling",
									"Flooring Installation",
								],
								areaServed: "Clark County, WA",
								url: "https://www.norbilt.com/about",
							},
							{
								"@type": "AboutPage",
								url: "https://www.norbilt.com/about",
								name: "About NORBILT — Licensed General Contractor Vancouver WA",
								description:
									"Learn about Andrey, the licensed general contractor behind NORBILT. 5+ years in the trade, 250+ Clark County projects, WA license #NORBIR**741CS.",
								mainEntity: { "@id": "https://www.norbilt.com/about#founder" },
							},
						],
					}),
				}}
			/>
			<AboutPageContent />
		</>
	);
}
