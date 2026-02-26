import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
	metadataBase: new URL("https://norbilt.com"),
	title: "Norbilt",
	description: "Expert hands. Exceptional results.",
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
