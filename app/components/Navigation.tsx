"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Reviews", href: "/reviews" },
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
						? "bg-[#F8F6F3]/95 backdrop-blur-md shadow-sm"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3">
							<div
								className={`transition-colors duration-500 ${
									isScrolled ? "text-[#1a3a2f]" : "text-white"
								}`}
							>
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
								<span
									className={`text-sm tracking-[0.3em] font-light transition-colors duration-500 ${
										isScrolled ? "text-[#1a3a2f]" : "text-white"
									}`}
								>
									STRUCTA
								</span>
								<span
									className={`text-xs tracking-[0.2em] transition-colors duration-500 ${
										isScrolled ? "text-[#1a3a2f]/70" : "text-white/70"
									}`}
								>
									HOMES
								</span>
							</div>
						</Link>

						{/* Desktop Nav */}
						<div className="hidden lg:flex items-center gap-1">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-[#2D5A3D]/10 ${
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
								className="ml-4 px-6 py-2.5 bg-[#2D5A3D] text-[#F8F6F3] text-sm font-medium rounded-lg hover:bg-[#4A7C59] transition-all duration-300 shadow-lg shadow-[#2D5A3D]/20"
							>
								Request a Quote
							</Link>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`lg:hidden p-2 rounded-lg ${
								isScrolled ? "text-[#2C3E3A]" : "text-[#F8F6F3]"
							}`}
						>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
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
							<div className="p-6 pt-24 space-y-2">
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
											className="block px-4 py-3 text-[#2C3E3A] font-medium rounded-lg hover:bg-[#2D5A3D]/10"
										>
											{link.name}
										</Link>
									</motion.div>
								))}

								<Link
									href="/contact"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block w-full text-center mt-4 px-6 py-3 bg-[#2D5A3D] text-[#F8F6F3] font-medium rounded-lg hover:bg-[#4A7C59]"
								>
									Request a Quote
								</Link>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
