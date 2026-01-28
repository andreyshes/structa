import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#2C3E3A] text-[#F8F6F3]">
			{/* Main Footer */}
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Brand Column */}
					<div>
						<div className="flex items-center gap-3 mb-6">
							<div className="text-[#F8F6F3]">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20 4L8 16V36H32V16L20 4Z"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path d="M20 4L20 12" stroke="currentColor" strokeWidth="2" />
									<path
										d="M14 36V24H26V36"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</div>
							<div className="flex flex-col">
								<span className="text-lg font-semibold tracking-tight">
									STRUCTA
								</span>
								<span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F6F3]/60">
									HOMES
								</span>
							</div>
						</div>

						<p className="text-[#F8F6F3]/70 text-sm leading-relaxed mb-6">
							Expert hands delivering exceptional results across the Pacific
							Northwest.
						</p>

						<div className="flex items-center gap-2 text-sm text-[#4A7C59]">
							<span className="px-3 py-1 bg-[#4A7C59]/20 rounded-full">
								Licensed
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/20 rounded-full">
								Bonded
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/20 rounded-full">
								Insured
							</span>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#F8F6F3]/90">
							Quick Links
						</h4>
						<ul className="space-y-3">
							{[
								{ name: "Home", href: "/" },
								{ name: "About", href: "/about" },
								{ name: "Services", href: "/services" },
								{ name: "Reviews", href: "/reviews" },
								{ name: "Contact", href: "/contact" },
							].map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-[#F8F6F3]/60 hover:text-[#F8F6F3] transition-colors text-sm"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#F8F6F3]/90">
							Services
						</h4>
						<ul className="space-y-3 text-sm text-[#F8F6F3]/60">
							<li>General Repairs</li>
							<li>Finish Carpentry</li>
							<li>Bathroom Refreshes</li>
							<li>Kitchen Updates</li>
							<li>Property Improvements</li>
							<li>Custom Projects</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-[#F8F6F3]/90">
							Get in Touch
						</h4>
						<ul className="space-y-4">
							<li className="flex items-center gap-3">
								<div className="p-2 bg-[#4A7C59]/20 rounded-lg">
									<Phone className="w-4 h-4 text-[#4A7C59]" />
								</div>
								<span className="text-sm text-[#F8F6F3]/70">
									(916) 508-6272
								</span>
							</li>

							<li className="flex items-center gap-3">
								<div className="p-2 bg-[#4A7C59]/20 rounded-lg">
									<Mail className="w-4 h-4 text-[#4A7C59]" />
								</div>
								<span className="text-sm text-[#F8F6F3]/70">
									hello@structawa.com
								</span>
							</li>

							<li className="flex items-center gap-3">
								<div className="p-2 bg-[#4A7C59]/20 rounded-lg">
									<MapPin className="w-4 h-4 text-[#4A7C59]" />
								</div>
								<span className="text-sm text-[#F8F6F3]/70">
									Vancouver, WA & Surrounding Areas
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-[#F8F6F3]/10">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-[#F8F6F3]/50">
							© {currentYear} Structa Homes. All rights reserved.
						</p>
						<p className="text-sm text-[#F8F6F3]/50">
							Proudly serving the Pacific Northwest
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
