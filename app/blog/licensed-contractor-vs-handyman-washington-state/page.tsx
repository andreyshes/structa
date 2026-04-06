import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, XCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Licensed Contractor vs Handyman in Washington State | Norbilt",
	description:
		"What's the difference between a licensed contractor and a handyman in WA state? Learn when the law requires a license and how to protect yourself hiring for home repairs.",
	alternates: {
		canonical: "https://norbilt.com/blog/licensed-contractor-vs-handyman-washington-state",
	},
	openGraph: {
		title: "Licensed Contractor vs Handyman in Washington State | Norbilt",
		description:
			"Know the difference before you hire. Washington State law, licensing requirements, and how to protect your home investment.",
		url: "https://norbilt.com/blog/licensed-contractor-vs-handyman-washington-state",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

export default function ContractorVsHandyman() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "Licensed Contractor vs. Handyman in Washington State: What You Need to Know",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2026-04-06",
						dateModified: "2026-04-06",
						description:
							"The difference between licensed contractors and handymen in WA state, and when the law requires a license.",
						mainEntityOfPage: "https://norbilt.com/blog/licensed-contractor-vs-handyman-washington-state",
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link
								href="/blog"
								className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors"
							>
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Hiring Guide
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Licensed Contractor vs. Handyman in{" "}
							<span className="text-[#FFB800]">Washington State</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							What the law says, what each can legally do, and how to protect
							yourself when hiring for home repairs in Clark County.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Clark County, WA
						</div>
					</div>
				</section>

				{/* ARTICLE BODY */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

						{/* INTRO */}
						<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								When something breaks or needs upgrading in your Vancouver home,
								the first instinct is often to search for the cheapest option.
								That usually leads to the question: should I hire a handyman or
								a licensed contractor? In Washington State, that decision isn't
								just about price — it's about what's legal, what's protected,
								and what happens if something goes wrong.
							</p>
							<p>
								Here's what every Clark County homeowner should know before
								hiring anyone to work on their home.
							</p>
						</div>

						{/* WA LAW */}
						<div className="bg-[#F8F6F3] rounded-3xl p-8 border border-gray-100">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter mb-6">
								What Washington State Law Actually Says
							</h2>
							<div className="space-y-4 text-gray-700 leading-relaxed">
								<p>
									In Washington State, anyone performing construction, repair,
									or improvement work on a residential property for compensation
									must be registered as a contractor with the Department of
									Labor & Industries — unless the work falls under the
									&ldquo;handyman exemption.&rdquo;
								</p>
								<div className="bg-white rounded-2xl p-6 border border-gray-200">
									<p className="font-black text-[#1F2E2B] mb-2">The Handyman Exemption</p>
									<p className="text-gray-600 text-sm">
										Unregistered handymen can legally perform work in Washington
										only if each job totals <strong>$500 or less</strong> in
										combined labor and materials. Above that threshold, the work
										legally requires a registered contractor. Many homeowners
										don&apos;t know this — and many handymen don&apos;t follow it.
									</p>
								</div>
							</div>
						</div>

						{/* COMPARISON */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Side-by-Side Comparison
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								<div className="bg-[#1F2E2B] rounded-2xl p-6 space-y-4">
									<p className="font-black text-[#FFB800] uppercase tracking-widest text-sm">Licensed Contractor</p>
									{[
										"Registered with WA Dept. of L&I",
										"Carries general liability insurance",
										"Required to be bonded",
										"Work meets state building code",
										"Accountable if something goes wrong",
										"Can pull permits when required",
										"Work is documented and inspectable",
									].map((item) => (
										<div key={item} className="flex gap-3 items-start">
											<CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
											<span className="text-[#A7C4B5] text-sm">{item}</span>
										</div>
									))}
								</div>
								<div className="bg-[#F8F6F3] rounded-2xl p-6 space-y-4">
									<p className="font-black text-[#1F2E2B] uppercase tracking-widest text-sm">Unlicensed Handyman</p>
									{[
										"No registration required under $500",
										"Usually no liability insurance",
										"No bond — no recourse if damaged",
										"No code compliance requirement",
										"Limited legal accountability",
										"Cannot pull permits",
										"Work may not pass future inspection",
									].map((item) => (
										<div key={item} className="flex gap-3 items-start">
											<XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
											<span className="text-gray-600 text-sm">{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* WHY IT MATTERS */}
						<div className="space-y-6">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Why It Matters for Your Home
							</h2>
							<div className="space-y-5">
								{[
									{
										title: "Home Insurance",
										body: "If unlicensed work causes damage — a flood from a bad plumbing fix, a fire from improper wiring — your homeowner's insurance may deny the claim. Insurers routinely ask whether work was performed by a licensed contractor.",
									},
									{
										title: "Resale Value",
										body: "When you sell your home in Vancouver or Clark County, inspectors and buyers' agents will ask about permits and contractor licensing for major work. Unpermitted or unlicensed work can delay or kill a sale.",
									},
									{
										title: "Liability",
										body: "If an unlicensed worker is injured on your property, you may be liable. A licensed, bonded contractor carries workers' comp and general liability, which protects you.",
									},
									{
										title: "Quality of Work",
										body: "Licensing doesn't guarantee quality, but it does mean the contractor has passed Washington State's registration requirements and has skin in the game. An unlicensed handyman has nothing at stake if the work fails.",
									},
								].map((item) => (
									<div key={item.title} className="flex gap-4">
										<CheckCircle2 className="w-6 h-6 text-[#FFB800] shrink-0 mt-1" />
										<div>
											<h3 className="font-black text-[#1F2E2B] mb-1">
												{item.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">{item.body}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* WHEN TO USE EACH */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-6">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
								When It&apos;s Fine to Use a Handyman
							</h2>
							<p className="text-[#A7C4B5] leading-relaxed">
								Not every job requires a licensed contractor. Small tasks under
								the $500 threshold — hanging a mirror, assembling furniture,
								tightening a loose hinge — are perfectly fine for an
								unlicensed handyman. The key is knowing where that line is and
								not crossing it.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								At Norbilt, we handle both categories. We are a licensed
								Washington General Contractor, which means we can legally
								take on jobs of any size — and we bring that same
								accountability to every job, regardless of scope.
							</p>
						</div>

						{/* QUESTIONS TO ASK */}
						<div className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Questions to Ask Before You Hire Anyone
							</h2>
							<ul className="space-y-3">
								{[
									"Are you registered with the Washington Department of Labor & Industries?",
									"Can I see your contractor registration number?",
									"Do you carry general liability and workers' comp insurance?",
									"Will this job require a permit, and will you pull it?",
									"Do you provide a written estimate before starting?",
									"What's your process if something goes wrong?",
								].map((q) => (
									<li key={q} className="flex gap-3 text-gray-700">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
										{q}
									</li>
								))}
							</ul>
						</div>

						{/* NEARBY AREAS */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								Licensed Contractor Services In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Camas", slug: "camas" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Washougal", slug: "washougal" },
								].map((city) => (
									<Link
										key={city.slug}
										href={`/locations/${city.slug}`}
										className="flex items-center gap-1 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
									>
										<MapPin className="w-3 h-3" />
										{city.name}, WA
									</Link>
								))}
							</div>
						</div>
					</div>
				</article>

				{/* CTA */}
				<section className="py-16 bg-[#FFB800]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
							Work With a Licensed Clark County Contractor
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Norbilt is a registered Washington State General Contractor —
							licensed, bonded, and insured. Free estimates for any job,
							any size.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
							<Link
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(360) 216-9920
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
