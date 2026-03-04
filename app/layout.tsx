import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
	metadataBase: new URL("https://norbilt.com"),
	title: "Licensed General Contractor Vancouver WA | Norbilt",
	description: "Norbilt is a licensed, bonded, and insured general contractor serving Vancouver WA and Clark County. Home repairs, carpentry, drywall, and remodeling. Free estimates.",
	icons: {
		icon: "/icon-v3.png",
	},
	alternates: {
		canonical: "https://norbilt.com",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Google Analytics + Google Ads */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-ZBCTSXYS77"
					strategy="lazyOnload"
				/>
				<Script id="google-tags" strategy="lazyOnload">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-ZBCTSXYS77');
						gtag('config', 'AW-17966936255');
					`}
				</Script>
				{/* LocalBusiness Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "GeneralContractor",
							"name": "Norbilt",
							"description": "Licensed general contractor offering handyman services, finish carpentry, drywall repair, kitchen and bath updates, lighting, and flooring in Vancouver WA and Clark County.",
							"url": "https://norbilt.com",
							"telephone": "+19165086272",
							"email": "hello@norbilt.com",
							"image": "https://norbilt.com/og-image.jpg",
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Vancouver",
								"addressRegion": "WA",
								"addressCountry": "US",
							},
							"areaServed": [
								{ "@type": "City", "name": "Vancouver" },
								{ "@type": "City", "name": "Camas" },
								{ "@type": "City", "name": "Ridgefield" },
								{ "@type": "City", "name": "Battle Ground" },
								{ "@type": "City", "name": "Washougal" },
								{ "@type": "City", "name": "Salmon Creek" },
								{ "@type": "City", "name": "Hazel Dell" },
								{ "@type": "City", "name": "Brush Prairie" },
								{ "@type": "City", "name": "Mill Plain" },
								{ "@type": "City", "name": "Lake Shore" },
							],
							"hasOfferCatalog": {
								"@type": "OfferCatalog",
								"name": "Home Repair & Contractor Services",
								"itemListElement": [
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Handyman Services", "url": "https://norbilt.com/services/handyman" } },
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finish Carpentry", "url": "https://norbilt.com/services/finish-carpentry" } },
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair", "url": "https://norbilt.com/services/drywall-repair" } },
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen & Bathroom Updates", "url": "https://norbilt.com/services/kitchen-bath" } },
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lighting & Fixtures", "url": "https://norbilt.com/services/lighting" } },
									{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Repair & Updates", "url": "https://norbilt.com/services/flooring" } },
								],
							},
						}),
					}}
				/>
			</head>

			<body className="bg-[#F8F6F3] antialiased">
				<div className="flex min-h-screen flex-col">
					<Navigation />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
