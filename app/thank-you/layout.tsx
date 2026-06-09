import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Thank You | NORBILT",
	description:
		"Thank you for contacting NORBILT. We will get back to you shortly with a free estimate for your home repair project.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function ThankYouLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
