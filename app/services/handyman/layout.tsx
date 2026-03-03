import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Handyman Services Vancouver & Battle Ground WA | Norbilt",
	description:
		"Licensed handyman in Vancouver, Battle Ground & Clark County WA. Drywall, TV mounting, repairs & more. Bonded & insured. Free estimate today!",
	alternates: {
		canonical: "https://norbilt.com/services/handyman",
	},
	openGraph: {
		title: "Handyman Services Vancouver & Battle Ground WA | Norbilt",
		description:
			"Licensed handyman services across Clark County WA. Home repairs, drywall, fixtures & more.",
		url: "https://norbilt.com/services/handyman",
		type: "website",
		siteName: "Norbilt",
		locale: "en_US",
		images: [
			{
				url: "https://norbilt.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Handyman Services Vancouver WA | Norbilt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Handyman Services Vancouver & Battle Ground WA | Norbilt",
		description:
			"Licensed handyman services across Clark County WA. Home repairs, drywall, fixtures & more.",
		images: ["https://norbilt.com/og-image.jpg"],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "What does a handyman service include?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We cover a wide range of home repairs. For example, we handle drywall patching, fixture installation, door repairs, caulking, TV mounting, and furniture assembly. Additionally, we help homeowners and property managers work through punch lists and routine maintenance.",
				},
			},
			{
				"@type": "Question",
				"name": "Do I need a licensed handyman in Vancouver WA?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "In Washington State, repair work above a set dollar amount requires a licensed contractor. As a result, hiring a registered WA General Contractor like Norbilt protects you legally and ensures the work meets code. In fact, unlicensed repair work can affect your home insurance and future resale value.",
				},
			},
			{
				"@type": "Question",
				"name": "How much does handyman service cost in Vancouver WA?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Our service costs depend on the scope of work. We give free, clear estimates before we start, so there are no surprises. Our rates are fair for licensed, insured repair work throughout Vancouver, Camas, and Clark County.",
				},
			},
			{
				"@type": "Question",
				"name": "What areas do you serve?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "We serve homeowners throughout Clark County WA. Whether you are in central Vancouver, Camas, Washougal, Battle Ground, or Ridgefield, our team is ready for your home repair and maintenance needs.",
				},
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			{children}
		</>
	);
}
