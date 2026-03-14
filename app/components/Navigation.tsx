"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
	{ name: "Handyman Services", href: "/services/handyman" },
	{ name: "Drywall Repair", href: "/services/drywall-repair" },
	{ name: "Finish Carpentry", href: "/services/finish-carpentry" },
	{ name: "Door & Window Repair", href: "/services/door-window" },
	{ name: "Flooring", href: "/services/flooring" },
	{ name: "Kitchen & Bath Updates", href: "/services/kitchen-bath" },
	{ name: "Home Repair", href: "/services/home-repair" },
	{ name: "Lighting & Fixtures", href: "/services/lighting" },
];

const locationLinks = [
	{ name: "Vancouver", href: "/locations/vancouver" },
	{ name: "Camas", href: "/locations/camas" },
	{ name: "Ridgefield", href: "/locations/ridgefield" },
	{ name: "Battle Ground", href: "/locations/battle-ground" },
	{ name: "Washougal", href: "/locations/washougal" },
	{ name: "Brush Prairie", href: "/locations/brush-prairie" },
	{ name: "Felida", href: "/locations/felida" },
	{ name: "Hazel Dell", href: "/locations/hazel-dell" },
	{ name: "Salmon Creek", href: "/locations/salmon-creek" },
	{ name: "Five Corners", href: "/locations/five-corners" },
	{ name: "Orchards", href: "/locations/orchards" },
	{ name: "Mill Plain", href: "/locations/mill-plain" },
	{ name: "Lake Shore", href: "/locations/lake-shore" },
];

const moreLinks = [
	{ name: "About", href: "/about" },
	{ name: "Reviews", href: "/reviews" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Pricing", href: "/pricing" },
	{ name: "Blog", href: "/blog" },
	{ name: "FAQ", href: "/faq" },
];

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hoveredDropdown, setHoveredDropdown] = useState<"services" | "locations" | "more" | null>(null);
	const [mobileExpanded, setMobileExpanded] = useState<"services" | "locations" | "more" | null>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const linkClass = `px-3 py-2 text-sm font-bold transition-all duration-300 rounded-lg hover:bg-[#2D5A3D]/10 flex items-center gap-1 ${
		isScrolled ? "text-[#2C3E3A] hover:text-[#2D5A3D]" : "text-[#F8F6F3]/90 hover:text-[#F8F6F3]"
	}`;

	return (
		<>
			<motion.nav
				initial={false}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
					isScrolled
						? "bg-[#F8F6F3]/95 backdrop-blur-md shadow-sm h-20"
						: "bg-transparent h-28"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
					<div className="flex items-center justify-between h-full">
						{/* Logo */}
						<Link href="/" className="relative flex items-center group shrink-0">
							<span className="sr-only">Norbilt General Contractor Vancouver WA</span>
							<div
								className="relative w-20 h-20 transition-transform duration-500 will-change-transform"
								style={{
									transform: isScrolled
										? "scale(1) translateY(0px)"
										: "scale(2) translateY(4px)",
									transformOrigin: "left center",
								}}
							>
								<Image
									src="/NORBILT.png"
									alt="Norbilt Home Repairs Logo"
									sizes="160px"
									fill
									priority
									className={`object-contain transition-all duration-500 ${
										isScrolled
											? "brightness-100"
											: "brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
									}`}
								/>
							</div>
						</Link>

						{/* Desktop Nav */}
						<div className="hidden lg:flex items-center gap-0.5">
							{/* Services Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setHoveredDropdown("services")}
								onMouseLeave={() => setHoveredDropdown(null)}
							>
								<Link href="/services" className={linkClass}>
									Services
									<ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredDropdown === "services" ? "rotate-180" : ""}`} />
								</Link>
								<AnimatePresence>
									{hoveredDropdown === "services" && (
										<motion.div
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 6 }}
											transition={{ duration: 0.15 }}
											className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
										>
											<div className="bg-[#F8F6F3] rounded-xl shadow-xl border border-[#2C3E3A]/10 py-2 w-52">
												{serviceLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														className="block px-4 py-2.5 text-sm font-semibold text-[#2C3E3A] hover:bg-[#2D5A3D]/10 hover:text-[#2D5A3D] transition-colors"
													>
														{link.name}
													</Link>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Locations Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setHoveredDropdown("locations")}
								onMouseLeave={() => setHoveredDropdown(null)}
							>
								<Link href="/locations" className={linkClass}>
									Locations
									<ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredDropdown === "locations" ? "rotate-180" : ""}`} />
								</Link>
								<AnimatePresence>
									{hoveredDropdown === "locations" && (
										<motion.div
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 6 }}
											transition={{ duration: 0.15 }}
											className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
										>
											<div className="bg-[#F8F6F3] rounded-xl shadow-xl border border-[#2C3E3A]/10 py-2 w-44">
												{locationLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														className="block px-4 py-2.5 text-sm font-semibold text-[#2C3E3A] hover:bg-[#2D5A3D]/10 hover:text-[#2D5A3D] transition-colors"
													>
														{link.name}
													</Link>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* More Dropdown */}
							<div
								className="relative"
								onMouseEnter={() => setHoveredDropdown("more")}
								onMouseLeave={() => setHoveredDropdown(null)}
							>
								<button className={linkClass}>
									More
									<ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredDropdown === "more" ? "rotate-180" : ""}`} />
								</button>
								<AnimatePresence>
									{hoveredDropdown === "more" && (
										<motion.div
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 6 }}
											transition={{ duration: 0.15 }}
											className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
										>
											<div className="bg-[#F8F6F3] rounded-xl shadow-xl border border-[#2C3E3A]/10 py-2 w-40">
												{moreLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														className="block px-4 py-2.5 text-sm font-semibold text-[#2C3E3A] hover:bg-[#2D5A3D]/10 hover:text-[#2D5A3D] transition-colors"
													>
														{link.name}
													</Link>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Instant Estimate — pill button */}
							<Link
								href="/estimate"
								className={`ml-1 flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg border transition-all duration-300 ${
									isScrolled
										? "text-[#FFB800] border-[#FFB800]/30 hover:bg-[#FFB800]/10"
										: "text-[#FFB800] border-[#FFB800]/40 hover:bg-[#FFB800]/10"
								}`}
							>
								<Sparkles className="w-3.5 h-3.5" />
								Instant Estimate
							</Link>

							<Link
								href="/contact"
								className="ml-2 px-5 py-2.5 bg-[#2D5A3D] text-[#F8F6F3] text-sm font-bold rounded-lg hover:bg-[#4A7C59] transition-all duration-300 shadow-lg whitespace-nowrap"
							>
								Get Free Estimate
							</Link>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`lg:hidden p-2 rounded-lg transition-colors ${
								isScrolled ? "text-[#2C3E3A]" : "text-[#F8F6F3]"
							}`}
							aria-label="Toggle Menu"
						>
							{isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 lg:hidden"
					>
						<div
							className="absolute inset-0 bg-[#2C3E3A]/60 backdrop-blur-sm"
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
							className="absolute right-0 top-0 bottom-0 w-80 bg-[#F8F6F3] shadow-2xl overflow-y-auto"
						>
							<div className="p-6 pt-32 space-y-1">
								<Link
									href="/"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
								>
									Home
								</Link>
								<Link
									href="/about"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
								>
									About
								</Link>

								{/* Mobile Services Accordion */}
								<div>
									<button
										onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
										className="w-full flex items-center justify-between px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
									>
										Services
										<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
									</button>
									<AnimatePresence>
										{mobileExpanded === "services" && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
												className="overflow-hidden pl-4"
											>
												<Link
													href="/services"
													onClick={() => setIsMobileMenuOpen(false)}
													className="block px-4 py-2.5 text-sm text-[#2D5A3D] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
												>
													All Services →
												</Link>
												{serviceLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block px-4 py-2.5 text-sm text-[#2C3E3A] font-semibold rounded-lg hover:bg-[#2D5A3D]/10"
													>
														{link.name}
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								{/* Mobile Locations Accordion */}
								<div>
									<button
										onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
										className="w-full flex items-center justify-between px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
									>
										Locations
										<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
									</button>
									<AnimatePresence>
										{mobileExpanded === "locations" && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
												className="overflow-hidden pl-4"
											>
												<Link
													href="/locations"
													onClick={() => setIsMobileMenuOpen(false)}
													className="block px-4 py-2.5 text-sm text-[#2D5A3D] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
												>
													All Locations →
												</Link>
												{locationLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block px-4 py-2.5 text-sm text-[#2C3E3A] font-semibold rounded-lg hover:bg-[#2D5A3D]/10"
													>
														{link.name}
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								{/* Mobile More Accordion */}
								<div>
									<button
										onClick={() => setMobileExpanded(mobileExpanded === "more" ? null : "more")}
										className="w-full flex items-center justify-between px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
									>
										More
										<ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === "more" ? "rotate-180" : ""}`} />
									</button>
									<AnimatePresence>
										{mobileExpanded === "more" && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.2 }}
												className="overflow-hidden pl-4"
											>
												{moreLinks.map((link) => (
													<Link
														key={link.href}
														href={link.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className="block px-4 py-2.5 text-sm text-[#2C3E3A] font-semibold rounded-lg hover:bg-[#2D5A3D]/10"
													>
														{link.name}
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>

								<div className="pt-2 space-y-3">
									<Link
										href="/estimate"
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex items-center justify-center gap-2 w-full px-6 py-4 border-2 border-[#FFB800] text-[#FFB800] font-black rounded-xl hover:bg-[#FFB800]/10 transition-all"
									>
										<Sparkles className="w-4 h-4" />
										Instant Estimate
									</Link>

									<Link
										href="/contact"
										onClick={() => setIsMobileMenuOpen(false)}
										className="block w-full text-center px-6 py-4 bg-[#2D5A3D] text-[#F8F6F3] font-black uppercase tracking-widest rounded-xl hover:bg-[#4A7C59] shadow-lg"
									>
										Get Free Estimate
									</Link>

									<a
										href="tel:+13602169920"
										className="flex items-center justify-center gap-2 w-full px-6 py-3 text-[#2C3E3A] font-bold rounded-xl hover:bg-[#2D5A3D]/10 transition-all"
									>
										<Phone className="w-4 h-4" />
										(360) 216-9920
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
