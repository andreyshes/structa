import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#2C3E3A] text-[#F8F6F3]">
			{/* Main Footer */}
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
					{/* Brand Column */}
					<div>
						<div className="flex items-center mb-6">
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
							Expert home repairs and quality service for local owners. We treat
							your house with care and respect.
						</p>

						<div className="flex items-center gap-2 text-sm">
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-bold">
								Licensed
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-bold">
								Bonded
							</span>
							<span className="px-3 py-1 bg-[#4A7C59]/30 text-[#F8F6F3] rounded-full text-[12px] font-bold">
								Insured
							</span>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#F8F6F3]/90">
							Information
						</h4>
						<ul className="space-y-3">
							{[
								{ name: "Home", href: "/" },
								{ name: "About Us", href: "/about" },
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
						<h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">
							Services
						</h4>
						<ul className="space-y-4">
							{[
								{ name: "Home Repairs", href: "/services/handyman" },
								{
									name: "Finish Carpentry",
									href: "/services/finish-carpentry",
								},
								{ name: "Bathroom Updates", href: "/services/kitchen-bath" },
								{ name: "Kitchen Remodeling", href: "/services/kitchen-bath" },
								{ name: "Drywall Patching", href: "/services/drywall-repair" },
								{ name: "Custom Projects", href: "/contact" },
							].map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm font-medium text-[#A7C4B5] hover:text-[#FFB800] transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 group-hover:w-2 h-px bg-[#FFB800] mr-0 group-hover:mr-2 transition-all duration-300"></span>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Service Areas */}
					<div>
						<h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">
							Service Areas
						</h4>
						<ul className="space-y-4">
							{[
								{ name: "Vancouver, WA", href: "/locations/vancouver" },
								{ name: "Camas, WA", href: "/locations/camas" },
								{ name: "Ridgefield, WA", href: "/locations/ridgefield" },
								{ name: "Battle Ground, WA", href: "/locations/battle-ground" },
								{ name: "Washougal, WA", href: "/locations/washougal" },
								{ name: "Salmon Creek, WA", href: "/locations/salmon-creek" },
								{ name: "Hazel Dell, WA", href: "/locations/hazel-dell" },
							].map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm font-medium text-[#A7C4B5] hover:text-[#FFB800] transition-colors duration-300 flex items-center group"
									>
										<span className="w-0 group-hover:w-2 h-px bg-[#FFB800] mr-0 group-hover:mr-2 transition-all duration-300"></span>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#F8F6F3]/90">
							Contact Us
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
									Vancouver, WA & Clark County
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-[#F8F6F3]/10">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center md:text-left">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-[#F8F6F3]/50">
							© {currentYear} Norbilt.
						</p>
						<p className="text-sm text-[#F8F6F3]/50">
							General Contractor in Vancouver, WA
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
