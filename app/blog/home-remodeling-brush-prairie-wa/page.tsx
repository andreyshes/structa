import Link from "next/link";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Contractor Brush Prairie WA | Kitchen, Bath & More | NORBILT",
	description:
		"Looking for a home remodeling contractor in Brush Prairie, WA? Kitchen & bath remodels, finish carpentry, flooring & drywall. Licensed, local. Free estimate. (360) 216-9920.",
	alternates: { canonical: "https://www.norbilt.com/blog/home-remodeling-brush-prairie-wa" },
	openGraph: {
		title: "Home Remodeling Contractor Brush Prairie WA | Kitchen, Bath & More | NORBILT",
		description:
			"2026 home remodeling costs in Brush Prairie WA — kitchen and bath renovations, finish carpentry, flooring, and drywall. Licensed Clark County contractor. Free estimate.",
		url: "https://www.norbilt.com/blog/home-remodeling-brush-prairie-wa",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costRows = [
	{ scope: "Kitchen Cosmetic Refresh", desc: "New hardware, backsplash, paint, under-cabinet lighting. Cabinets stay.", price: "$2,000 – $5,000" },
	{ scope: "Kitchen Mid-Range Remodel", desc: "New cabinet doors/fronts or semi-custom cabinets, countertops (quartz), sink, fixtures.", price: "$15,000 – $35,000" },
	{ scope: "Full Kitchen Gut Remodel", desc: "Everything to studs — new cabinets, counters, appliances, flooring, lighting. Layout change possible.", price: "$35,000 – $65,000" },
	{ scope: "Bathroom Cosmetic Update", desc: "New vanity, fixtures, mirror, lighting, LVP flooring. Tile stays.", price: "$1,500 – $4,000" },
	{ scope: "Bathroom Mid-Range Update", desc: "Vanity, toilet, tub surround tile, flooring, all fixtures. Layout unchanged.", price: "$6,000 – $15,000" },
	{ scope: "Full Bathroom Gut Remodel", desc: "Everything to studs — cement board, tile, plumbing fixtures, vanity, exhaust, fan.", price: "$15,000 – $30,000" },
	{ scope: "Flooring — LVP (Main Floor)", desc: "Luxury vinyl plank, full main floor installation including transitions and baseboard renail.", price: "$4,000 – $12,000" },
	{ scope: "Finish Carpentry Package", desc: "Crown molding, new base, door casing, window casing. Whole-home trim upgrade.", price: "$3,000 – $8,000" },
];

const priceFactors = [
	{
		title: "Home Age and Condition: Older Farmhouses Have Surprises",
		body: "A Brush Prairie farmhouse from 1965 on 2 acres may have galvanized supply lines, original knob-and-tube or aluminum wiring in additions, and decades of DIY work behind the walls. Demo reveals these conditions — they have to be addressed before new finishes go in. We quote conservatively and document change-order triggers in writing so there are no surprises on either side. A 10–15% contingency budget is realistic for any pre-1980 Brush Prairie home.",
	},
	{
		title: "Access and Material Logistics on Larger Lots",
		body: "Brush Prairie properties are larger than the suburban norm. A long driveway, a detached shop, or a site that isn&apos;t at the end of a paved road affects material delivery logistics. Cabinets, countertop slabs, and flooring pallets all need access. We assess this during the on-site estimate — it rarely adds significant cost, but it does factor into scheduling.",
	},
	{
		title: "Scope Clarity: Defined Scope Means Accurate Pricing",
		body: "The clearest predictor of a project coming in on budget is a well-defined scope before work starts. We provide a written, itemized quote that breaks down every line — labor, materials, subcontractor costs, permit fees — so you know exactly what&apos;s included and what triggers a change order. Brush Prairie homeowners who have owned their properties for decades usually know what they want; we translate that into a precise written scope.",
	},
	{
		title: "Finish Level: Mid-Grade vs. Premium Materials",
		body: "Brush Prairie homeowners tend to invest in quality. The difference between mid-grade and premium materials is significant: quartz countertops at $65/sq ft installed vs. quartzite at $120/sq ft; LVP at $4.50/sq ft vs. engineered white oak at $9/sq ft; semi-custom cabinets at $350/linear ft vs. custom at $700/linear ft. We work in both ranges and help you make informed decisions based on longevity, maintenance, and the specific character of your home.",
	},
	{
		title: "Permit Complexity for Older Structures",
		body: "Clark County permits for older Brush Prairie homes can be more complex than for newer suburban construction. If the original home lacks current permit history, additions or significant remodels may trigger an as-built review. Kitchens and bathrooms that involve plumbing or electrical changes always require permits. NORBILT handles all permit applications, coordinates Clark County Community Development inspections, and keeps you informed at every stage.",
	},
];

const faqs = [
	{
		q: "Do I need a permit for remodeling in Brush Prairie?",
		a: "Brush Prairie is unincorporated Clark County, so all permits go through Clark County Community Development (564-397-2375). Cosmetic work — flooring, paint, hardware, fixture replacements — typically doesn't require a permit. Full kitchen and bathroom gut remodels, plumbing relocation, structural changes, and electrical panel work do. Permit fees in Clark County range from $150–$600 depending on scope. NORBILT coordinates all permits as part of the project — you don't have to navigate the permit office yourself.",
	},
	{
		q: "Does NORBILT charge travel fees for Brush Prairie projects?",
		a: "No. NORBILT serves all of Clark County with no travel fee. Brush Prairie is within our standard service area. We schedule Brush Prairie estimates the same week and don't add a surcharge for the drive from the Vancouver corridor. The quote you receive covers labor and materials — no hidden mobilization or travel line items.",
	},
	{
		q: "What remodeling projects add the most value in Brush Prairie?",
		a: "In Brush Prairie's market, kitchen remodels and primary bathroom upgrades return the strongest value at resale — typically 60–80% of project cost in the current Clark County market. Finish carpentry and flooring upgrades are lower cost and have high visual impact for listing photos. For older farmhouses, addressing deferred maintenance — subfloor repair, failing caulk, soft spots behind tile — is critical before cosmetic work and often pays for itself in avoided buyer negotiations.",
	},
	{
		q: "How far does NORBILT travel for remodeling projects?",
		a: "NORBILT serves all of Clark County, WA, including Brush Prairie, Meadow Glade, Harrington Hills, and the Curtin Creek area. We do not charge extra for properties in the northeast corner of Clark County. If you're on acreage east of Battle Ground, call (360) 216-9920 and we'll confirm coverage — we've worked in some remote locations and are generally comfortable with rural Clark County properties.",
	},
	{
		q: "Do older Brush Prairie homes need asbestos testing before remodeling?",
		a: "Homes built before 1980 may contain asbestos in floor tile (especially 9×9 vinyl), ceiling texture (popcorn ceilings), pipe insulation, and some drywall joint compounds. Washington State and EPA rules require that suspect materials be tested before disturbance in renovation work. An asbestos inspection runs $300–$600 and takes 3–5 business days for lab results. NORBILT requires testing of suspect materials before demo on pre-1980 homes — it protects your family and our crew. We can recommend a certified inspector.",
	},
];

const nearbyCities = [
	{ label: "Battle Ground", href: "/locations/battle-ground" },
	{ label: "Vancouver", href: "/locations/vancouver" },
	{ label: "Ridgefield", href: "/locations/ridgefield" },
	{ label: "Salmon Creek", href: "/locations/salmon-creek" },
	{ label: "Felida", href: "/locations/felida" },
];

export default function HomeRemodelingBrushPrairieWA() {
	return (
		<>
			{/* JSON-LD: BlogPosting */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "Home Remodeling Contractor in Brush Prairie WA: 2026 Cost Guide",
						description:
							"Kitchen and bath remodels, finish carpentry, flooring, and drywall work in Brush Prairie WA. Real 2026 costs from a licensed Clark County contractor.",
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						author: { "@type": "Person", name: "Andrey", url: "https://www.norbilt.com/about" },
						publisher: {
							"@type": "Organization",
							name: "NORBILT",
							url: "https://www.norbilt.com",
							logo: { "@type": "ImageObject", url: "https://www.norbilt.com/og-image.jpg" },
						},
						mainEntityOfPage: "https://www.norbilt.com/blog/home-remodeling-brush-prairie-wa",
					}),
				}}
			/>

			{/* JSON-LD: FAQPage */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faqs.map((f) => ({
							"@type": "Question",
							name: f.q,
							acceptedAnswer: { "@type": "Answer", text: f.a },
						})),
					}),
				}}
			/>

			{/* JSON-LD: BreadcrumbList */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
							{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
							{
								"@type": "ListItem",
								position: 3,
								name: "Home Remodeling Contractor Brush Prairie WA",
								item: "https://www.norbilt.com/blog/home-remodeling-brush-prairie-wa",
							},
						],
					}),
				}}
			/>

			<div className="min-h-screen bg-[#FDFCFB]">
				{/* HERO */}
				<section className="bg-[#14201D] pt-32 pb-16 px-6">
					<div className="max-w-3xl mx-auto space-y-6">
						{/* Breadcrumb + pills */}
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">
								← Blog
							</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
								Remodeling Guide
							</span>
							<span className="text-[10px] font-black uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full">
								August 17, 2026
							</span>
						</div>

						{/* H1 */}
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
							Home Remodeling Contractor in{" "}
							<span className="text-[#FFB800]">Brush Prairie, WA</span>
						</h1>

						{/* Quick Answer callout */}
						<div className="bg-[#2D5A3D]/20 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#A7C4B5] mb-2">Quick Answer</p>
							<p className="text-white/90 text-sm leading-relaxed">
								Home remodeling in Brush Prairie WA covers kitchen and bathroom renovations (
								<strong className="text-white">$5,000–$65,000</strong> depending on scope), finish carpentry and flooring upgrades (
								<strong className="text-white">$2,000–$15,000</strong>), and drywall and repair work (
								<strong className="text-white">$500–$5,000</strong>). Brush Prairie&apos;s mix of older farmhouses and newer custom builds means
								project scopes vary significantly — from full gut remodels of 1960s farmhouse kitchens to trim package upgrades in
								newer custom homes. NORBILT serves Brush Prairie with free on-site estimates and written quotes before any work begins.
							</p>
						</div>

						{/* Subheading */}
						<p className="text-lg text-white/70 leading-relaxed border-l-4 border-[#FFB800] pl-6">
							Real 2026 remodeling costs for Brush Prairie homeowners — kitchens, bathrooms, finish carpentry, and flooring — from a
							licensed Clark County contractor with no travel fees and same-week estimates.
						</p>

						{/* Location */}
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4 shrink-0" />
							Brush Prairie, WA · Northeast Clark County · Meadow Glade · Harrington Hills
						</div>
					</div>
				</section>

				{/* AUTHOR BAR */}
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">
							By Andrey
						</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>

				{/* ARTICLE BODY */}
				<article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

					{/* 1. Yellow citation capsule */}
					<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
						<p className="text-xs font-black uppercase tracking-widest text-[#1F2E2B] mb-2">2026 Clark County Pricing — No Travel Fee</p>
						<p className="text-[#1F2E2B] font-medium leading-relaxed text-sm">
							All prices reflect 2026 Clark County market rates for licensed contractor work. Brush Prairie and northeast Clark
							County are within NORBILT&apos;s standard service area — no travel premium applies. Material costs are up 8–14%
							vs. 2024 due to tariff impacts on lumber and finish goods. Older farmhouse projects carry a 10–15% contingency
							recommendation due to the likelihood of discovering previous work and aging systems during demo.
						</p>
					</div>

					{/* 2. Two intro paragraphs */}
					<section className="space-y-5 text-gray-700 text-lg leading-relaxed">
						<p>
							Brush Prairie sits in a unique position in Clark County&apos;s housing market. Unlike the dense suburban neighborhoods
							of Salmon Creek or Hazel Dell, Brush Prairie is semi-rural — larger lots, longer driveways, homes that were
							built to last rather than to match a development template. Many homeowners here have been on their properties
							for 20 years or more and are now investing in quality upgrades that reflect both the character of the land
							and what they want the next chapter to look like. That&apos;s a different conversation than a tract-home refresh,
							and it calls for a contractor who can work at that level.
						</p>
						<p>
							NORBILT is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) with active work throughout
							Clark County, including the northeast corner. We carry $1,000,000 liability insurance, back all remodeling
							work with a 1-year labor warranty, and provide free written estimates with no obligation. Andrey personally
							does all estimates — not a salesperson — and the crew that shows up is ours, not a rotating subcontract team.
						</p>
					</section>

					{/* 3. Cost table */}
					<section className="space-y-5">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Home Remodeling Costs in Brush Prairie WA — 2026
						</h2>
						<div className="bg-[#F8F6F3] rounded-3xl overflow-hidden border border-[#E8E4DE]">
							<div className="overflow-x-auto">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white">
										<tr>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Project</th>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs">Scope</th>
											<th className="text-left px-6 py-4 font-black uppercase tracking-wider text-xs whitespace-nowrap">Price Range</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-[#E8E4DE]">
										{costRows.map((row, i) => (
											<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
												<td className="px-6 py-4 font-black text-[#1F2E2B] text-xs uppercase tracking-wide">{row.scope}</td>
												<td className="px-6 py-4 text-gray-600">{row.desc}</td>
												<td className="px-6 py-4 font-bold text-[#2D5A3D] whitespace-nowrap">{row.price}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<p className="px-6 py-4 text-xs text-gray-500">
								2026 Clark County rates. Mid-grade material pricing. Older farmhouse projects add 10–15% contingency. Permits extra where required. Get a written estimate for exact pricing.
							</p>
						</div>
					</section>

					{/* 4. What Affects the Price */}
					<section className="space-y-6">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Affects the Price
						</h2>
						<div className="space-y-4">
							{priceFactors.map((factor, i) => (
								<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-[#E8E4DE] shadow-sm">
									<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
									<div>
										<p className="font-black text-[#1F2E2B] text-sm uppercase tracking-wide mb-2">{factor.title}</p>
										<p className="text-gray-600 text-sm leading-relaxed">{factor.body}</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* 5. Dark insight section */}
					<section className="bg-[#1F2E2B] rounded-3xl p-8 md:p-12 space-y-6">
						<h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
							Brush Prairie&apos;s Unique Mix of Old Farmhouses and Custom Builds
						</h2>
						<p className="text-[#A7C4B5] leading-relaxed">
							Brush Prairie sits in a unique position in Clark County&apos;s housing market. A farmhouse from 1965 on 2 acres has
							different remodeling realities than a 2005 custom build on a half-acre. The 1960s homes frequently have
							original kitchens — laminate counters, painted wood cabinets, galley layouts that predate the open-plan era —
							that are structurally sound but ready for a complete transformation. We&apos;ve done full gut kitchen remodels
							in Brush Prairie farmhouses where the cabinets were solid fir built by the original owner and the wiring was
							a mix of original cloth-wrapped and 1980s aluminum. These are real jobs, not suburban refreshes.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							The newer custom builds — 1995 to 2010 construction in areas like Harrington Hills and Brush Prairie Estates —
							are often in excellent structural condition but owners are now ready to personalize them. The original builder
							packages were functional but generic: stock trim profiles, builder-grade tile in the bathrooms, laminate
							countertops that made sense at the time but don&apos;t anymore. These homes respond extremely well to targeted
							finish upgrades: a custom carpentry package, upgraded tile and fixtures in the master bath, quartz counters
							in the kitchen. Projects in this category are well-defined and predictably priced because the structure
							underneath is sound.
						</p>
						<p className="text-[#A7C4B5] leading-relaxed">
							The homeowner profile in Brush Prairie affects how we approach projects. These are people who know their
							properties well, have specific ideas about what they want, and value craftsmanship over speed. We match
							that approach: detailed written scopes, no surprises, and crew members who treat the property with the
							care it deserves.
						</p>
						<div className="flex gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
							<CheckCircle2 className="w-5 h-5 text-[#FFB800] shrink-0 mt-0.5" />
							<p className="text-white text-sm leading-relaxed font-medium">
								<strong>For Brush Prairie homeowners:</strong> the free estimate is not a formality. We do a thorough
								on-site assessment of the project, document what we find, and give you a written scope-of-work with
								itemized pricing before you make any commitment. Call Andrey at (360) 216-9920 to schedule.
							</p>
						</div>
					</section>

					{/* 6. FAQ accordion */}
					<section className="space-y-5">
						<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Frequently Asked Questions
						</h2>
						<div className="space-y-3">
							{faqs.map((faq, i) => (
								<details
									key={i}
									className="group bg-white border border-[#E8E4DE] rounded-2xl overflow-hidden"
								>
									<summary className="flex items-center justify-between px-7 py-5 cursor-pointer list-none font-black text-[#1F2E2B] text-sm md:text-base hover:text-[#2D5A3D] transition-colors">
										{faq.q}
										<span className="ml-4 shrink-0 text-[#FFB800] text-xl font-black group-open:rotate-45 transition-transform duration-200">+</span>
									</summary>
									<div className="px-7 pb-6">
										<p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
									</div>
								</details>
							))}
						</div>
					</section>

					{/* 7. Sources block */}
					<section className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DE] space-y-4">
						<h3 className="text-xs font-black uppercase tracking-widest text-[#1F2E2B]">Sources & References</h3>
						<ul className="space-y-2 text-sm text-gray-600">
							<li>Clark County Community Development — Permits, inspections, and fees: <span className="font-medium text-[#2D5A3D]">clark.wa.gov/community-development</span></li>
							<li>Washington State Dept. of Labor &amp; Industries — Contractor verification and asbestos rules: <span className="font-medium text-[#2D5A3D]">lni.wa.gov</span></li>
							<li>Washington State Dept. of Ecology — Asbestos regulations for renovation work: <span className="font-medium text-[#2D5A3D]">ecology.wa.gov/air/asbestos</span></li>
							<li>National Kitchen &amp; Bath Association (NKBA) 2026 Design &amp; Cost Outlook — Regional Pacific Northwest adjustments applied</li>
							<li>NORBILT project records — 2024–2026 kitchen, bathroom, carpentry, and flooring invoices in Clark County, WA</li>
						</ul>
					</section>

					{/* 8. Nearby cities pills */}
					<section className="space-y-4">
						<h3 className="text-xs font-black uppercase tracking-widest text-[#1F2E2B]">We Also Serve</h3>
						<div className="flex flex-wrap gap-3">
							{nearbyCities.map(({ label, href }) => (
								<Link
									key={label}
									href={href}
									className="px-4 py-2 bg-[#F8F6F3] border border-[#E8E4DE] rounded-full text-sm font-bold text-[#1F2E2B] hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
								>
									{label}
								</Link>
							))}
						</div>
					</section>
				</article>

				{/* YELLOW CTA SECTION */}
				<section className="bg-[#FFB800] py-20 px-6">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
							Free Remodeling Estimate in Brush Prairie
						</h2>
						<p className="text-black/70 text-lg font-medium max-w-xl mx-auto">
							No travel fee. Written quote before work starts. Licensed, bonded &amp; insured. Same-week scheduling throughout Clark County.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#1F2E2B] text-white font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate <ArrowRight className="w-5 h-5" />
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"
							>
								<Phone className="w-5 h-5" /> (360) 216-9920
							</a>
						</div>
						<p className="text-black/50 text-xs font-medium uppercase tracking-widest">
							WA License NORBI**741CS · Serving All of Clark County Including Brush Prairie
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
