import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Get a Free Estimate | Home Remodeling Contractor Clark County WA | NORBILT",
	description:
		"Get a free, no-obligation estimate for home remodeling in Vancouver WA and Clark County. Kitchen & bath, finish carpentry, flooring & more. Licensed contractor, same-week response.",
	alternates: { canonical: "https://www.norbilt.com/estimate" },
};

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
