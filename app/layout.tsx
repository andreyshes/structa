import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollTracker from "@/app/components/ScrollTracker";
import StickyMobileCTA from "@/app/components/StickyMobileCTA";
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
				{/* Site-wide Structured Data — Organization + GeneralContractor + WebSite */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "Organization",
									"@id": "https://norbilt.com/#organization",
									"name": "Norbilt",
									"alternateName": "Norbilt General Contracting",
									"url": "https://norbilt.com",
									"logo": {
										"@type": "ImageObject",
										"url": "https://norbilt.com/icon-v3.png",
										"width": 512,
										"height": 512,
									},
									"image": "https://norbilt.com/og-image.jpg",
									"description": "Norbilt is a licensed, bonded, and insured general contractor based in Vancouver WA, serving all of Clark County. Specializing in kitchen remodeling, bathroom remodeling, drywall repair, finish carpentry, flooring installation, and handyman services. WA General Contractor License NORBI**741CS. $1,000,000 liability insurance.",
									"telephone": "+13602169920",
									"email": "hello@norbilt.com",
									"address": {
										"@type": "PostalAddress",
										"addressLocality": "Vancouver",
										"addressRegion": "WA",
										"addressCountry": "US",
										"postalCode": "98660",
									},
									"areaServed": [
										{ "@type": "City", "name": "Vancouver", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Camas", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Ridgefield", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Battle Ground", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Washougal", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Salmon Creek", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Hazel Dell", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Brush Prairie", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Orchards", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
										{ "@type": "City", "name": "Felida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clark County, WA" } },
									],
									"hasCredential": {
										"@type": "EducationalOccupationalCredential",
										"credentialCategory": "license",
										"name": "Washington State General Contractor License",
										"identifier": "NORBI**741CS",
										"recognizedBy": { "@type": "GovernmentOrganization", "name": "Washington State Department of Labor & Industries" },
									},
									"knowsAbout": [
										"Kitchen Remodeling",
										"Bathroom Remodeling",
										"Drywall Repair",
										"Finish Carpentry",
										"Flooring Installation",
										"Handyman Services",
										"Home Repair",
										"Tub to Shower Conversion",
										"Lighting Installation",
										"Door and Window Installation",
										"General Contracting",
										"Home Renovation",
									],
									"founder": {
										"@type": "Person",
										"@id": "https://norbilt.com/#founder",
										"name": "Andrey Shestopal",
										"jobTitle": "Owner & Licensed General Contractor",
										"worksFor": { "@id": "https://norbilt.com/#organization" },
									},
									"numberOfEmployees": { "@type": "QuantitativeValue", "value": "1-10" },
									"foundingDate": "2022",
									"slogan": "5-Star Rated. Licensed, Bonded & Insured. We Show Up.",
									"sameAs": [
										"https://www.google.com/maps/place/NORBILT/@45.6933319,-122.5403396,11z/data=!3m1!4b1!4m6!3m5!1s0x6ba3be3e3106abb:0x1cb70e756db2c95b!8m2!3d45.6933319!4d-122.5403396!16s%2Fg%2F11yzz5_myb",
										"https://www.yelp.com/biz/norbilt-vancouver",
									],
								},
								{
									"@type": "GeneralContractor",
									"@id": "https://norbilt.com/#business",
									"name": "Norbilt",
									"url": "https://norbilt.com",
									"telephone": "+13602169920",
									"email": "hello@norbilt.com",
									"image": "https://norbilt.com/og-image.jpg",
									"description": "Licensed general contractor in Vancouver WA specializing in kitchen remodeling, bathroom remodeling, handyman services, drywall repair, finish carpentry, and flooring installation across Clark County WA.",
									"address": {
										"@type": "PostalAddress",
										"addressLocality": "Vancouver",
										"addressRegion": "WA",
										"addressCountry": "US",
										"postalCode": "98660",
									},
									"geo": {
										"@type": "GeoCoordinates",
										"latitude": 45.6387,
										"longitude": -122.6615,
									},
									"openingHoursSpecification": [
										{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
										{ "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" },
									],
									"priceRange": "$$",
									"paymentAccepted": "Cash, Check, Credit Card, Venmo, Zelle",
									"currenciesAccepted": "USD",
									"hasOfferCatalog": {
										"@type": "OfferCatalog",
										"name": "Home Remodeling & Repair Services — Clark County WA",
										"itemListElement": [
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Remodeling", "description": "Full kitchen remodels, cabinet updates, countertop replacement, and cosmetic refreshes in Vancouver WA and Clark County.", "url": "https://norbilt.com/services/kitchen-bath" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Remodeling", "description": "Full gut remodels, tub-to-shower conversions, vanity replacement, and tile work in Vancouver WA and Clark County.", "url": "https://norbilt.com/services/kitchen-bath" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Handyman Services", "description": "Small repairs, fixture replacement, drywall patches, door repairs, and punch lists across Clark County WA.", "url": "https://norbilt.com/services/handyman" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair", "description": "Patching, texture matching, and water damage repair for drywall in Vancouver WA and Clark County.", "url": "https://norbilt.com/services/drywall-repair" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finish Carpentry", "description": "Baseboards, crown molding, door casing, wainscoting, and built-ins in Vancouver WA and Clark County.", "url": "https://norbilt.com/services/finish-carpentry" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flooring Installation", "description": "LVP, engineered hardwood, tile, and laminate flooring installation across Clark County WA.", "url": "https://norbilt.com/services/flooring" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door & Window Installation", "description": "Interior and exterior door installation, window replacement, and trim work in Clark County WA.", "url": "https://norbilt.com/services/door-window" } },
											{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lighting & Fixture Installation", "description": "Ceiling fans, recessed lighting, vanity fixtures, and fixture replacement in Vancouver WA and Clark County.", "url": "https://norbilt.com/services/lighting" } },
										],
									},
									"aggregateRating": {
										"@type": "AggregateRating",
										"ratingValue": "5",
										"bestRating": "5",
										"worstRating": "1",
										"ratingCount": "47",
									},
								},
								{
									"@type": "WebSite",
									"@id": "https://norbilt.com/#website",
									"url": "https://norbilt.com",
									"name": "Norbilt — Licensed General Contractor in Vancouver WA",
									"description": "Norbilt provides kitchen remodeling, bathroom remodeling, handyman services, drywall repair, finish carpentry, and flooring installation across Vancouver WA and Clark County.",
									"publisher": { "@id": "https://norbilt.com/#organization" },
									"inLanguage": "en-US",
									"potentialAction": {
										"@type": "SearchAction",
										"target": {
											"@type": "EntryPoint",
											"urlTemplate": "https://norbilt.com/blog?s={search_term_string}",
										},
										"query-input": "required name=search_term_string",
									},
								},
							],
						}),
					}}
				/>
			</head>

			<body className="bg-[#F8F6F3] antialiased">
				<ScrollTracker />
				<div className="flex min-h-screen flex-col">
					<Navigation />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
				<StickyMobileCTA />
			</body>
		</html>
	);
}
