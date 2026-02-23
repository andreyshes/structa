"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Locations", href: "/locations" },
	{ name: "Contact", href: "/contact" },
];

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
					isScrolled
						? "bg-[#F8F6F3]/95 backdrop-blur-md shadow-sm h-20"
						: "bg-transparent h-28"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
					<div className="flex items-center justify-between h-full">
						{/* Logo Section with Hidden Text for SEO */}
						<Link href="/" className="relative flex items-center group">
							<span className="sr-only">
								Norbilt General Contractor Vancouver WA
							</span>
							<div
								className={`relative transition-all duration-500 transform ${
									isScrolled ? "w-20 h-20" : "w-40 h-40 scale-125 translate-y-2"
								}`}
							>
								<Image
									src="/NORBILT.png"
									alt="Norbilt Home Repairs Logo"
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
						<div className="hidden lg:flex items-center gap-1">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg hover:bg-[#2D5A3D]/10 ${
										isScrolled
											? "text-[#2C3E3A] hover:text-[#2D5A3D]"
											: "text-[#F8F6F3]/90 hover:text-[#F8F6F3]"
									}`}
								>
									{link.name}
								</Link>
							))}

							<Link
								href="/contact"
								className="ml-4 px-6 py-2.5 bg-[#2D5A3D] text-[#F8F6F3] text-sm font-bold rounded-lg hover:bg-[#4A7C59] transition-all duration-300 shadow-lg"
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
							{isMobileMenuOpen ? (
								<X className="w-8 h-8" />
							) : (
								<Menu className="w-8 h-8" />
							)}
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
							className="absolute right-0 top-0 bottom-0 w-80 bg-[#F8F6F3] shadow-2xl"
						>
							<div className="p-6 pt-32 space-y-2">
								{navLinks.map((link, index) => (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 }}
									>
										<Link
											href={link.href}
											onClick={() => setIsMobileMenuOpen(false)}
											className="block px-4 py-4 text-lg text-[#2C3E3A] font-bold rounded-lg hover:bg-[#2D5A3D]/10"
										>
											{link.name}
										</Link>
									</motion.div>
								))}

								<Link
									href="/contact"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block w-full text-center mt-6 px-6 py-4 bg-[#2D5A3D] text-[#F8F6F3] font-black uppercase tracking-widest rounded-xl hover:bg-[#4A7C59] shadow-lg"
								>
									Get Free Estimate
								</Link>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
