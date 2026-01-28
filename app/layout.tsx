import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
	title: "Structa Homes",
	description: "Expert hands. Exceptional results.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
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
