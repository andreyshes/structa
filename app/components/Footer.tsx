import Link from "next/link";
import Image from "next/image";
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
						<div className="flex items-center mb-6">
							{/* Jumbo Footer Logo */}
							<div className="relative w-32 h-32 -ml-4">
								<Image
									src="/NORBILT.png"
									alt="Norbilt Logo"
									fill
									className="object-contain brightness-0 invert opacity-90"
								/>
							</div>
						</div>

						<p className="text-[#F8F6F3]/70 text-sm leading-relaxed mb-6">
							Expert hands delivering exceptional results across the Pacific
							Northwest. Thoughtful craftsmanship and respect for your home.
						</p>

						<div className="flex items-center gap-2 text-sm">
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-medium">
								Licensed
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-medium">
								Bonded
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-medium">
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
								{ name: "Locations", href: "/locations" },
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
									hello@norbilt.com
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
							© {currentYear} Norbilt. All rights reserved.
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
