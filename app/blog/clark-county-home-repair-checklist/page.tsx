import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Repair Checklist | Clark County WA | Norbilt",
	description:
		"The 10 most common home repair problems in Clark County WA — and when to call a licensed contractor before small issues become big bills.",
	alternates: {
		canonical: "https://norbilt.com/blog/clark-county-home-repair-checklist",
	},
	openGraph: {
		title: "Home Repair Checklist | Clark County | Norbilt",
		description:
			"10 home repair issues Clark County homeowners should fix before they become expensive. From a licensed local contractor.",
		url: "https://norbilt.com/blog/clark-county-home-repair-checklist",
		siteName: "Norbilt",
		type: "article",
		images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const repairs = [
	{
		number: "01",
		title: "Failing Caulk Around Tubs & Showers",
		urgency: "High",
		body: "Cracked or missing caulk is the top cause of hidden water damage. Water gets behind tile and rots the subfloor. You won't see it until it's already expensive. Re-caulking costs $100–250. Ignoring it can lead to $3,000–10,000 in rot repairs.",
		fix: "Re-caulk immediately. If tile is already loose or grout is crumbling, inspect for moisture damage behind the wall.",
	},
	{
		number: "02",
		title: "Soft Spots in Floors Near Bathrooms or Appliances",
		urgency: "High",
		body: "A spongy or bouncy floor near a toilet, dishwasher, or refrigerator water line is almost always a sign of subfloor water damage. The Pacific Northwest climate accelerates wood rot. Catching it early means a subfloor patch. Waiting means replacing joists.",
		fix: "Have a contractor inspect immediately. If the subfloor has failed, don't walk on it repeatedly — it worsens the damage.",
	},
	{
		number: "03",
		title: "Doors That Don't Latch or Stick Seasonally",
		urgency: "Medium",
		body: "Wet winters cause door frames to swell. If a door sticks or won't latch, it's usually a hinge or strike plate fix — takes 30 minutes. Left alone, the door can warp and need full replacement.",
		fix: "Adjust hinges or plane the door edge. Check weatherstripping at the same time.",
	},
	{
		number: "04",
		title: "Gaps in Window or Door Caulking",
		urgency: "Medium",
		body: "Gaps around window and door frames let in moisture, cold air, and insects. In newer homes, this shows up within 3–5 years as the house settles. A tube of caulk costs $8. The heat loss over winter can cost hundreds in utility bills.",
		fix: "Re-caulk all exterior window and door perimeters annually before the rainy season.",
	},
	{
		number: "05",
		title: "Nail Pops and Drywall Cracks",
		urgency: "Low–Medium",
		body: "Minor nail pops and hairline cracks are normal in Washington homes as they settle. However, large cracks (wider than 1/4 inch), cracks at window corners, or cracks that return after patching can signal foundation movement or structural issues. Don't just paint over them.",
		fix: "Small cosmetic cracks: patch and paint. Recurring or large cracks: have a contractor assess before assuming it's cosmetic.",
	},
	{
		number: "06",
		title: "Loose or Wobbly Deck Boards",
		urgency: "Medium–High",
		body: "Deck rot is common in Western Washington, especially on decks that don't drain properly. A loose board is a trip hazard and often indicates rot below. Replacing individual deck boards runs $200–500. Full deck replacement can hit $8,000–20,000.",
		fix: "Replace individual rotted boards before they spread to the joists. Seal the deck annually.",
	},
	{
		number: "07",
		title: "Grout Failure in Tile Areas",
		urgency: "Medium",
		body: "Cracked or missing grout in a tiled shower or kitchen backsplash allows water behind the tile. Once moisture gets behind, the tile starts to de-bond and mold grows. Re-grouting a shower is a $300–600 job. Replacing a full tile surround because moisture got behind it is $2,000–5,000+.",
		fix: "Remove failed grout and re-grout. If tiles are already loose, inspect for moisture damage.",
	},
	{
		number: "08",
		title: "Exterior Wood Rot (Fascia, Soffits, Window Sills)",
		urgency: "High",
		body: "Rain and humidity make exterior wood rot one of the most common home repair issues here. Fascia rot lets water into the roof. Window sill rot leads to frame damage. Catching it early costs $200–500. Missing it costs $2,000–8,000.",
		fix: "Inspect exterior wood annually. Paint peeling off wood trim is a warning sign that moisture is getting in.",
	},
	{
		number: "09",
		title: "Running Toilets",
		urgency: "Low",
		body: "A running toilet wastes 200 gallons of water per day. At local rates, that's $50–100 per month. A flapper replacement is a $10–20 part. If the fill valve needs replacement too, a handyman visit runs $100–200.",
		fix: "Replace the flapper first. If it still runs, replace the fill valve. Both are quick fixes.",
	},
	{
		number: "10",
		title: "Missing or Damaged Weatherstripping",
		urgency: "Low–Medium",
		body: "Weatherstripping on exterior doors fails over time. You'll notice drafts, cold floors, or insects getting in. It's a cheap fix — $20–50 in materials — and it cuts your heating bill directly.",
		fix: "Replace weatherstripping on all exterior doors. Check the threshold seal at the same time.",
	},
];

const urgencyColor: Record<string, string> = {
	High: "bg-red-100 text-red-700",
	Medium: "bg-yellow-100 text-yellow-700",
	"Medium–High": "bg-orange-100 text-orange-700",
	"Low–Medium": "bg-blue-100 text-blue-700",
	Low: "bg-green-100 text-green-700",
};

export default function ClarkCountyChecklist() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Article",
						headline: "Home Repair Checklist: 10 Things to Fix Before They Get Expensive",
						author: { "@type": "Person", name: "Andrey Norbilt" },
						publisher: {
							"@type": "Organization",
							name: "Norbilt",
							logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" },
						},
						datePublished: "2025-03-01",
						dateModified: "2026-03-04",
						description:
							"The 10 most common home repair issues Clark County WA homeowners face, and when to call a contractor before they become expensive.",
						mainEntityOfPage: "https://norbilt.com/blog/clark-county-home-repair-checklist",
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
								Maintenance
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							Home Repair Checklist{" "}
							<span className="text-[#FFB800]">Checklist</span>
						</h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							10 things to fix before small problems
							turn into expensive ones. From a licensed local contractor who
							sees these every week.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Clark County, WA — Vancouver, Battle Ground, Camas & more
						</div>
					</div>
				</section>

				{/* ARTICLE */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-4">

						<div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-12">
							<p>
								Western Washington's climate is hard on homes. The wet winters,
								mild humidity, and wood construction common across Clark County
								create predictable failure points. After hundreds of jobs in
								Vancouver, Battle Ground, Camas, Ridgefield, and the
								surrounding neighborhoods, here's what we see homeowners
								neglect most — and what it ends up costing them.
							</p>
						</div>

						<div className="space-y-8">
							{repairs.map((item) => (
								<div
									key={item.number}
									className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
								>
									<div className="flex items-start gap-4 mb-4">
										<span className="text-4xl font-black text-[#FFB800]/30 leading-none shrink-0">
											{item.number}
										</span>
										<div className="flex-1">
											<div className="flex flex-wrap items-center gap-3 mb-2">
												<h2 className="text-xl font-black text-[#1F2E2B]">
													{item.title}
												</h2>
												<span
													className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${urgencyColor[item.urgency]}`}
												>
													{item.urgency} Priority
												</span>
											</div>
											<p className="text-gray-600 leading-relaxed">{item.body}</p>
										</div>
									</div>
									<div className="flex gap-3 bg-[#F8F6F3] rounded-xl p-4 mt-4">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
										<p className="text-sm font-medium text-[#1F2E2B]">
											<strong>What to do: </strong>{item.fix}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* SUMMARY */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4 mt-12">
							<div className="flex items-center gap-3">
								<AlertTriangle className="w-8 h-8 text-[#FFB800]" />
								<h2 className="text-2xl font-black text-white uppercase tracking-tighter">
									The Rule of Thumb
								</h2>
							</div>
							<p className="text-[#A7C4B5] leading-relaxed text-lg">
								Almost every expensive home repair could
								have been caught earlier for a fraction of the cost. Water is
								always the common thread — caulk failure, grout failure, rot,
								subfloor damage. If you see water stains, soft spots, peeling
								paint, or bubbling surfaces anywhere in your home, don't wait.
							</p>
							<p className="text-[#A7C4B5] leading-relaxed">
								A free estimate costs nothing. Ignoring a problem for 12 months
								often costs thousands.
							</p>
						</div>

						{/* NEARBY */}
						<div className="bg-[#F8F6F3] rounded-2xl p-6">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								We Serve All of Clark County
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Camas", slug: "camas" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Felida", slug: "felida" },
									{ name: "Brush Prairie", slug: "brush-prairie" },
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
							Found Something on This List?
						</h2>
						<p className="text-black/70 text-lg font-medium">
							Don't wait. Contact Norbilt for a free estimate on any home
							— we'll tell you exactly what it needs
							and what it costs.
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
								href="tel:+19165086272"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-black/20 text-black font-black uppercase tracking-widest rounded-xl hover:bg-black/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(916) 508-6272
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
