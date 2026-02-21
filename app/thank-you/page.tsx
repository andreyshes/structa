import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata = {
	title: "Thank You | Norbilt",
	description:
		"Your request has been received. Our team will contact you shortly.",
	robots: {
		index: false,
	},
};

export default function ThankYouPage() {
	return (
		<div className="min-h-screen bg-[#F8F6F3] flex items-center justify-center px-6">
			<div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">
				<div className="flex justify-center mb-6">
					<CheckCircle2 className="w-16 h-16 text-green-600" />
				</div>

				<h1 className="text-3xl font-semibold text-gray-900 mb-4">
					Thank You — We’ve Received Your Request
				</h1>

				<p className="text-gray-600 mb-6 leading-relaxed">
					Our team will review your project details and contact you shortly. If
					your request is urgent, feel free to call us directly.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="tel:6656078078"
						className="inline-flex items-center justify-center gap-2 bg-[#2C3E3A] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
					>
						<Phone className="w-4 h-4" />
						Call Now
					</a>

					<Link
						href="/"
						className="inline-flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition"
					>
						Return Home
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>
			</div>
		</div>
	);
}
