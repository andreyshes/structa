import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const posts = [
	{
		slug: "flooring-installation-cost-vancouver-wa",
		title: "Flooring Installation Cost in Vancouver WA & Clark County (2026)",
		excerpt:
			"LVP, engineered hardwood, tile, or laminate — real 2026 installed prices for every floor type in Vancouver WA and Clark County. What the subfloor adds, city breakdowns, and how to pick the right floor for your home.",
		category: "Cost Guide",
		location: "Vancouver, WA",
		readTime: "8 min read",
	},
	{
		slug: "kitchen-remodel-cost-clark-county-wa",
		title: "Kitchen Remodel Cost in Clark County WA: 2026 Guide",
		excerpt:
			"From a $1,500 cosmetic refresh to a $80,000 custom build — real 2026 price ranges for kitchen remodels in Vancouver, Camas, and Ridgefield. Component pricing, city breakdowns, and what drives the cost up.",
		category: "Cost Guide",
		location: "Clark County, WA",
		readTime: "9 min read",
	},
	{
		slug: "bathtub-to-shower-conversion-cost-clark-county-wa",
		title: "Bathtub to Shower Conversion Cost in Clark County WA (2026)",
		excerpt:
			"Real price ranges for tub-to-shower conversions in Vancouver, Camas, and Ridgefield — from a $1,500 prefab insert to a $25,000 custom walk-in. What drives the cost and what older homes hide.",
		category: "Cost Guide",
		location: "Clark County, WA",
		readTime: "7 min read",
	},
	{
		slug: "bathroom-remodel-cost-clark-county-wa",
		title: "Bathroom Remodel Cost in Clark County WA: The Complete 2026 Guide",
		excerpt:
			"Real price ranges for every scope — from an $800 cosmetic refresh to a $35,000 gut remodel. Cost tables, component-level pricing, city breakdowns, and what drives the price up.",
		category: "Cost Guide",
		location: "Clark County, WA",
		readTime: "10 min read",
	},
	{
		slug: "home-repairs-before-selling-clark-county-wa",
		title: "Home Repairs Before Selling in Clark County WA: What's Worth It",
		excerpt:
			"Not every repair pays off before a home sale. A licensed Clark County contractor breaks down which fixes move the needle and which ones to skip before you list.",
		category: "Selling Guide",
		location: "Clark County, WA",
		readTime: "6 min read",
	},
	{
		slug: "signs-you-need-bathroom-remodel-vancouver-wa",
		title: "7 Signs You Need a Bathroom Remodel in Vancouver, WA",
		excerpt:
			"Some are obvious, others easy to miss. A licensed contractor walks through the seven warning signs Vancouver homeowners shouldn't ignore in their bathroom.",
		category: "Home Tips",
		location: "Vancouver, WA",
		readTime: "5 min read",
	},
	{
		slug: "drywall-repair-cost-vancouver-wa",
		title: "How Much Does Drywall Repair Cost in Vancouver, WA?",
		excerpt:
			"From nail holes to water damage — real pricing for drywall repair in Clark County, plus what drives the cost up and why texture matching matters.",
		category: "Cost Guide",
		location: "Vancouver, WA",
		readTime: "5 min read",
	},
	{
		slug: "flooring-installation-cost-camas-wa",
		title: "Flooring Installation Cost in Camas, WA: LVP, Hardwood & Tile",
		excerpt:
			"Real price ranges for LVP, engineered hardwood, and tile flooring in Camas and Clark County — plus what hidden costs to watch out for.",
		category: "Cost Guide",
		location: "Camas, WA",
		readTime: "5 min read",
	},
	{
		slug: "licensed-contractor-vs-handyman-washington-state",
		title: "Licensed Contractor vs. Handyman in Washington State",
		excerpt:
			"Washington State law limits unlicensed handymen to jobs under $500. Know the difference before you hire — and what's at stake for your home insurance and resale value.",
		category: "Hiring Guide",
		location: "Clark County, WA",
		readTime: "6 min read",
	},
	{
		slug: "bathroom-remodel-cost-ridgefield-wa",
		title: "How Much Does a Bathroom Remodel Cost in Ridgefield, WA?",
		excerpt:
			"Planning a bathroom remodel in Ridgefield? Here's a realistic breakdown of what it costs in Clark County, what affects the price, and how to avoid overpaying.",
		category: "Cost Guide",
		location: "Ridgefield, WA",
		readTime: "5 min read",
	},
	{
		slug: "battle-ground-handyman-what-to-expect",
		title: "Hiring a Handyman in Battle Ground, WA: What to Expect & What It Costs",
		excerpt:
			"Battle Ground homeowners have plenty of options — but not all handymen are licensed or bonded. Here's what to look for and what fair pricing looks like in North Clark County.",
		category: "Hiring Guide",
		location: "Battle Ground, WA",
		readTime: "6 min read",
	},
	{
		slug: "clark-county-home-repair-checklist",
		title: "Clark County Home Repair Checklist: 10 Things to Fix Before They Get Expensive",
		excerpt:
			"Small problems become big bills. This checklist covers the 10 most common home repair issues in Clark County — and when to call a licensed contractor before it's too late.",
		category: "Maintenance",
		location: "Clark County, WA",
		readTime: "7 min read",
	},
];

export default function BlogPage() {
	return (
		<div className="overflow-hidden bg-[#FDFCFB]">
			{/* HERO */}
			<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
				<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />
				<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
					<div className="max-w-4xl space-y-6">
						<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
							Home Repair Guides
						</span>
						<h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase">
							Clark County <br />
							<span className="text-[#FFB800]">Homeowner Blog</span>
						</h1>
						<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
							Practical advice on home repair costs, hiring contractors, and
							maintaining your Clark County home — from the pros at Norbilt.
						</p>
					</div>
				</div>
			</section>

			{/* POSTS */}
			<section className="py-24 bg-[#F8F6F3]">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{posts.map((post) => (
							<Link
								key={post.slug}
								href={`/blog/${post.slug}`}
								className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FFB800]/30 transition-all duration-300 flex flex-col"
							>
								<div className="p-8 flex flex-col flex-1 gap-4">
									<div className="flex items-center justify-between">
										<span className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1 rounded-full">
											{post.category}
										</span>
										<span className="text-xs text-gray-400 flex items-center gap-1">
											<Clock className="w-3 h-3" />
											{post.readTime}
										</span>
									</div>

									<h2 className="text-xl font-black text-[#1F2E2B] leading-snug group-hover:text-[#2D5A3D] transition-colors">
										{post.title}
									</h2>

									<p className="text-gray-600 text-sm leading-relaxed flex-1">
										{post.excerpt}
									</p>

									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
											<MapPin className="w-3 h-3" />
											{post.location}
										</span>
										<span className="text-[#2D5A3D] font-black text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
											Read More <ArrowRight className="w-3 h-3" />
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 bg-white text-center">
				<div className="max-w-3xl mx-auto px-6 space-y-6">
					<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
						Ready to Get Work Done?
					</h2>
					<p className="text-gray-600 text-lg">
						Stop researching, start fixing. Contact Norbilt for a free estimate
						on any home repair or remodel in Clark County.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
					>
						Get Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
