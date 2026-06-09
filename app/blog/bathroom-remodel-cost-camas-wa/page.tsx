import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Camas WA: 2026 Pricing Guide | NORBILT",
	description: "How much does a bathroom remodel cost in Camas WA? Real 2026 price ranges — from a $920 cosmetic refresh to a $35,000 primary suite — from a licensed contractor working in Camas every week.",
	alternates: { canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-camas-wa" },
	openGraph: {
		title: "Bathroom Remodel Cost in Camas WA: 2026 Pricing Guide | NORBILT",
		description: "Complete 2026 cost guide for bathroom remodels in Camas WA — real price ranges, component costs, neighborhood breakdowns.",
		url: "https://www.norbilt.com/blog/bathroom-remodel-cost-camas-wa",
		siteName: "NORBILT", type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const costTiers = [
	{ scope: "Cosmetic Refresh", desc: "New fixtures, faucet, toilet, mirror, recaulk, paint. Same tile and layout.", range: "$920 – $2,500", timeline: "1–2 days", best: "Good bones, tight budget, prepping to sell" },
	{ scope: "Mid-Range Remodel", desc: "New vanity, tile floor, shower surround, all fixtures replaced. Layout stays.", range: "$3,450 – $7,500", timeline: "3–5 days", best: "Dated finishes, worn vanity, 15+ year old fixtures" },
	{ scope: "Full Gut Remodel", desc: "Everything to studs — new cement board, tile, plumbing fixtures, vanity, exhaust.", range: "$9,200 – $18,000", timeline: "1–2 weeks", best: "Water damage, full overhaul, same layout" },
	{ scope: "Tub-to-Shower Conversion", desc: "Remove tub, install custom walk-in shower — prefab or full custom tile.", range: "$1,725 – $8,000", timeline: "2–5 days", best: "Aging in place, space maximizing, modern look" },
	{ scope: "Primary Suite Remodel", desc: "Custom tile, freestanding tub, heated floors, high-end fixtures, layout reconfiguration.", range: "$20,750 – $35,000+", timeline: "2–4 weeks", best: "Luxury primary bath, maximum ROI, Prune Hill homes" },
];

const components = [
	{ item: "Toilet replacement", range: "$345 – $800" },
	{ item: "Faucet & showerhead", range: "$230 – $600" },
	{ item: "Vanity (supply & install)", range: "$690 – $2,500" },
	{ item: "Recaulk tub/shower", range: "$115 – $250" },
	{ item: "Regrout shower/tub surround", range: "$345 – $800" },
	{ item: "Tile floor (per sq ft, installed)", range: "$9.25 – $18" },
	{ item: "Shower tile surround (installed)", range: "$1,400 – $4,000" },
	{ item: "Subfloor repair", range: "$575 – $1,800" },
	{ item: "Exhaust fan replacement", range: "$175 – $400" },
	{ item: "Mirror & lighting update", range: "$345 – $900" },
	{ item: "Heated floor (per sq ft)", range: "$14 – $25" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,725 – $4,000" },
];

const drivers = [
	{ title: "Camas Homeowners Expect Premium Finishes", body: "Camas is one of Clark County's highest-income zip codes. Homeowners in Prune Hill and Deer Creek typically choose large-format tile, quartz or stone accents, and premium fixtures — not builder-grade materials. This is a good thing for ROI but it does move budgets toward the top of each tier." },
	{ title: "Newer Construction = Fewer Hidden Surprises", body: "Unlike older parts of Vancouver (Hazel Dell, Orchards), most Camas homes were built post-1990 with modern plumbing and solid subfloors. Surprises are less common, which means budgets are more predictable. The exception is older homes near downtown Camas and Fern Prairie." },
	{ title: "Tile Selection Is the Biggest Variable", body: "Basic ceramic tile runs $2–5 per sq ft. Large-format porcelain or natural stone runs $15–30+ per sq ft and takes longer to install. In Camas, tile upgrades commonly add $2,000–$8,000 to a project compared to standard spec." },
	{ title: "Heated Floors Are Popular in Camas", body: "Heated tile floors are one of the most requested upgrades in Camas primary baths. Adding in-floor radiant heat runs $14–$25 per sq ft installed. For a typical 50 sq ft bathroom floor, that's $700–$1,250 added to the project — and one of the highest satisfaction upgrades we install." },
	{ title: "Permits in Camas", body: "The City of Camas requires permits for plumbing relocation, structural changes, and electrical panel work. Cosmetic remodels — vanity, tile, fixtures, paint — typically don't require a permit. NORBILT (WA Lic. NORBI**741CS) pulls all required permits." },
];

const neighborhoods = [
	{ area: "Prune Hill", note: "Larger homes with ensuite primary baths. High-end remodels ($20,000+) are common. Homeowners invest in custom tile, heated floors, and freestanding tubs." },
	{ area: "Deer Creek", note: "2000s–2010s builds with solid bones. Cosmetic and mid-range remodels dominate — counters, fixtures, and tile updates that modernize without full demo." },
	{ area: "Grass Valley / Fern Prairie", note: "Mix of older and newer homes. Older properties often need a full gut due to aging plumbing and original tile. Budget for subfloor inspection on pre-2000 homes." },
	{ area: "Near Lacamas Lake", note: "Upscale area. Custom tile, heated floors, and spa-style showers are the norm. Most projects fall in the $12,000–$35,000 range." },
];

const faqs = [
	{ q: "How much does a bathroom remodel cost in Camas WA?", a: "In Camas WA, a bathroom remodel costs between $920 for a cosmetic refresh and $35,000+ for a high-end primary suite. A mid-range remodel (new vanity, tile, all fixtures) runs $3,450–$7,500. A full gut remodel runs $9,200–$18,000. Prices reflect 2026 Clark County rates with Camas material expectations factored in." },
	{ q: "Do I need a permit for a bathroom remodel in Camas WA?", a: "The City of Camas requires permits for plumbing relocation, structural changes, and electrical panel work. Cosmetic remodels — new vanity, tile, fixtures, and paint within the existing layout — typically don't require a permit. NORBILT (WA Lic. NORBI**741CS) handles all permit applications when required." },
	{ q: "Why do Camas bathroom remodels cost more than other Clark County cities?", a: "Camas homeowners consistently choose higher-end materials — large-format tile, premium fixtures, quartz accents, and heated floors. These are the right choices for the market and for resale, but they push budgets toward the top of each tier. The homes themselves (newer, well-maintained) tend to have fewer hidden surprises, which helps predictability." },
	{ q: "How long does a bathroom remodel take in Camas?", a: "A cosmetic refresh takes 1–2 days. A mid-range remodel takes 3–5 days. A full gut remodel takes 1–2 weeks. Primary suite remodels with custom tile take 2–4 weeks. We confirm exact timelines during the free estimate." },
	{ q: "What adds the most value to a Camas bathroom before selling?", a: "In Camas's real estate market, updated tile, a new vanity, modern fixtures, and a clean grout/caulk job have the highest visible ROI. Buyers in Camas expect quality — a tired bathroom stands out more here than in other Clark County markets. A mid-range update ($3,450–$7,500) typically recovers 70–80% at sale." },
	{ q: "Should I do a cosmetic refresh or full remodel in my Camas home?", a: "If the tile and layout are sound and the home is under 20 years old, a cosmetic refresh (new fixtures, recaulk, vanity, lighting) gives excellent ROI for $920–$2,500. If there's water damage, failing grout, or the bathroom is 25+ years old, a full gut remodel is the better long-term investment. We assess during the free walkthrough and give you an honest recommendation." },
];

export default function BathroomRemodelCostCamasWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: "Bathroom Remodel Cost in Camas WA: 2026 Pricing Guide", author: { "@id": "https://www.norbilt.com/#founder" }, publisher: { "@id": "https://www.norbilt.com/#organization" }, datePublished: "2026-06-08", dateModified: "2026-06-08", mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-camas-wa"
			})}} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
						{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
						{ "@type": "ListItem", position: 3, name: "Bathroom Remodel Cost in Camas WA: 2026 Pricing Guide", item: "https://www.norbilt.com/blog/bathroom-remodel-cost-camas-wa" },
					],
				}) }}
			/>
			<div className="overflow-hidden bg-[#FDFCFB]">
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3">
							<Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">← Blog</Link>
							<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">Cost Guide</span>
					<span className="text-white/50 text-xs font-medium">Updated June 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">Bathroom Remodel Cost in <span className="text-[#FFB800]">Camas WA</span></h1>
				<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
					<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
					<p className="text-gray-700 leading-relaxed text-sm">A bathroom remodel in Camas WA costs between $920 for a cosmetic refresh and $35,000+ for a high-end primary suite. A mid-range remodel with new vanity, tile floor, shower surround, and all fixtures runs $3,450–$7,500 and takes 3–5 days. A full gut remodel — everything to studs — costs $9,200–$18,000 over 1–2 weeks. Primary suite remodels with custom tile, heated floors, and layout changes run $20,750–$35,000+. Camas homeowners in Prune Hill and Deer Creek consistently choose higher-end materials — large-format tile, quartz accents, heated floors — which pushes budgets toward the top of each tier. The good news: most Camas homes were built post-1990, meaning fewer hidden surprises and more predictable project costs compared to older parts of Vancouver. All prices reflect 2026 Clark County rates with Camas material expectations factored in.</p>
				</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every scope — from a cosmetic refresh to a full primary suite gut — from a licensed contractor remodeling bathrooms in Camas every week.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Camas, WA · Prune Hill · Deer Creek · Grass Valley · Lacamas Lake</div>
					</div>
				</section>
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link href="/about" className="font-bold text-[#FFB800] hover:text-white transition-colors">By Andrey</Link>
						<span>· WA Licensed General Contractor · NORBILT</span>
					</div>
				</div>
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>A bathroom remodel in Camas WA costs anywhere from <strong>$920 for a cosmetic refresh</strong> to <strong>$35,000+ for a high-end primary suite gut</strong>. Camas homeowners typically invest more in materials than other Clark County cities — and the homes here are newer, which means fewer hidden surprises and more predictable budgets.</p>
							<p>NORBILT is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) serving Camas and all of Clark County. We carry $1,000,000 liability insurance and back all bathroom work with a 1-year workmanship warranty.</p>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Bathroom Remodel Cost by Scope — Camas WA</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Scope</th><th className="text-left p-4 font-black uppercase tracking-wider">What&apos;s Included</th><th className="text-left p-4 font-black uppercase tracking-wider">Cost Range</th><th className="text-left p-4 font-black uppercase tracking-wider">Timeline</th><th className="text-left p-4 font-black uppercase tracking-wider">Best For</th></tr></thead>
									<tbody>{costTiers.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 font-black text-[#1F2E2B]">{r.scope}</td><td className="p-4 text-gray-600">{r.desc}</td><td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{r.range}</td><td className="p-4 text-gray-500 whitespace-nowrap">{r.timeline}</td><td className="p-4 text-gray-600">{r.best}</td></tr>))}</tbody>
								</table>
							</div>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Cost by Component</h2>
							<div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
								<table className="w-full text-sm">
									<thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Component</th><th className="text-left p-4 font-black uppercase tracking-wider">Installed Cost (Camas WA, 2026)</th></tr></thead>
									<tbody>{components.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 text-gray-700 font-medium">{r.item}</td><td className="p-4 font-bold text-[#2D5A3D]">{r.range}</td></tr>))}</tbody>
								</table>
							</div>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">What Drives Costs in Camas</h2>
							<div className="space-y-5">{drivers.map((d, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{d.title}</h3><p className="text-gray-600 leading-relaxed">{d.body}</p></div>))}</div>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Camas Neighborhood Breakdown</h2>
							<div className="space-y-4">{neighborhoods.map((n, i) => (<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#2D5A3D] mt-1 shrink-0" /><div><p className="font-black text-[#1F2E2B] mb-1">{n.area}</p><p className="text-gray-600 text-sm leading-relaxed">{n.note}</p></div></div>))}</div>
						</section>
						<section className="bg-[#1F2E2B] rounded-3xl p-10 space-y-5">
							<h2 className="text-2xl font-black text-white uppercase tracking-tighter">Why Licensed Matters in Camas</h2>
							<p className="text-[#A7C4B5] leading-relaxed">Washington State requires a licensed contractor for bathroom remodel work above $500. Unlicensed work voids homeowner&apos;s insurance and creates disclosure issues at resale — which matters even more in Camas&apos;s high-value market.</p>
							<ul className="space-y-3">{["WA General Contractor License NORBI**741CS", "$1,000,000 liability insurance on every job", "Bonded — protects you if work is incomplete", "We pull all required permits", "1-year workmanship warranty on all bathroom work"].map((item, i) => (<li key={i} className="flex items-start gap-3 text-white/80 text-sm"><CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />{item}</li>))}</ul>
						</section>
						<section className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">Related Guides</h2>
							<div className="grid sm:grid-cols-2 gap-4">{[{ title: "Bathroom Remodel Cost in Vancouver WA", href: "/blog/bathroom-remodel-cost-vancouver-wa" }, { title: "Bathroom Remodel Cost in Clark County WA", href: "/blog/bathroom-remodel-cost-clark-county-wa" }, { title: "Bathtub to Shower Conversion Cost Clark County", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa" }, { title: "Bathroom Remodeling in Camas WA", href: "/locations/camas/bathroom-remodel" }].map((link, i) => (<Link key={i} href={link.href} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"><ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" /><span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.title}</span></Link>))}</div>
						</section>
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Frequently Asked Questions</h2>
							<div className="space-y-5">{faqs.map((faq, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>))}</div>
						</section>
					</div>
				</article>
				<section className="py-20 bg-[#F8F6F3]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">Get a Free Estimate for Your Camas Bathroom</h2>
						<p className="text-gray-600 text-lg">Licensed, bonded & insured. Same-week estimates. 1-year warranty on all work.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link>
							<a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"><Phone className="w-5 h-5" /> (360) 216-9920</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
