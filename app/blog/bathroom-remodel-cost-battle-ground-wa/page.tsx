import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bathroom Remodel Cost in Battle Ground WA: 2026 Guide | NORBILT",
	description: "How much does a bathroom remodel cost in Battle Ground WA? Real 2026 price ranges — from a $920 cosmetic refresh to a $35,000 primary suite — from a licensed north Clark County contractor.",
	alternates: { canonical: "https://www.norbilt.com/blog/bathroom-remodel-cost-battle-ground-wa" },
	openGraph: { title: "Bathroom Remodel Cost in Battle Ground WA: 2026 Guide | NORBILT", description: "Complete 2026 cost guide for bathroom remodels in Battle Ground WA.", url: "https://www.norbilt.com/blog/bathroom-remodel-cost-battle-ground-wa", siteName: "NORBILT", type: "article", images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }] },
};

const costTiers = [
	{ scope: "Cosmetic Refresh", desc: "New fixtures, faucet, toilet, mirror, recaulk, paint. Same tile and layout.", range: "$920 – $2,500", timeline: "1–2 days", best: "Good bones, tight budget, prepping to sell" },
	{ scope: "Mid-Range Remodel", desc: "New vanity, tile floor, shower surround, all fixtures. Layout stays the same.", range: "$3,450 – $7,500", timeline: "3–5 days", best: "Dated finishes, worn vanity, 15+ year old fixtures" },
	{ scope: "Full Gut Remodel", desc: "Everything to studs — new cement board, tile, plumbing fixtures, vanity, exhaust.", range: "$9,200 – $18,000", timeline: "1–2 weeks", best: "Water damage, full overhaul, same layout" },
	{ scope: "Tub-to-Shower Conversion", desc: "Remove tub, install walk-in shower — prefab insert or custom tile.", range: "$1,725 – $8,000", timeline: "2–5 days", best: "Aging in place, space maximizing, accessibility" },
	{ scope: "Primary Suite Remodel", desc: "Custom tile, heated floors, high-end fixtures, freestanding tub option.", range: "$20,750 – $35,000+", timeline: "2–4 weeks", best: "Acreage homes, luxury finish, maximum ROI" },
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
	{ item: "Plumbing relocation (per fixture)", range: "$1,725 – $4,000" },
];
const drivers = [
	{ title: "Older Homes Hide Costly Surprises", body: "Cherry Grove and central Battle Ground have a significant stock of 1970s–1990s homes. Original tile surrounds were often installed directly over drywall (not cement board), galvanized pipe is common, and decades of slow leaks frequently left soft subfloors. We always do a walkthrough before quoting — this is where the surprises live." },
	{ title: "Tub-to-Shower Conversions Are Popular", body: "Battle Ground has a large aging-in-place demographic. Tub-to-shower conversions — removing the tub and installing a barrier-free or low-threshold shower — are one of the most requested remodels. These run $1,725–$8,000 depending on whether you choose a prefab insert or custom tile." },
	{ title: "Acreage Homes Warrant Premium Investment", body: "Homes on larger lots in the Lewisville area often have larger bathrooms suited to custom tile and heated floors. These homeowners typically invest in the $12,000–$35,000 range and prioritize quality over speed." },
	{ title: "Fewer Licensed Contractors Serve Battle Ground", body: "Most Clark County contractors are concentrated in Vancouver. NORBILT is one of the most active licensed contractors in north Clark County, which means faster scheduling and no subcontracting." },
	{ title: "Permits Follow Clark County Requirements", body: "Cosmetic remodels — vanity, tile, fixtures, paint — typically don't require a permit. Plumbing relocation, structural changes, and electrical panel work do. NORBILT (WA Lic. NORBI**741CS) handles all permits." },
];
const neighborhoods = [
	{ area: "Daybreak", note: "2000s builds with solid subfloors and standard plumbing. Mid-range remodels dominate — new vanity, tile, and fixtures for a modern update." },
	{ area: "Cherry Grove", note: "1970s–1990s homes with original tile. Subfloor rot is common from old slow leaks. Budget for a full gut and subfloor inspection on pre-1995 homes." },
	{ area: "Lewisville / Acreage", note: "Larger homes with quality expectations. Custom tile, heated floors, and tub-to-shower conversions are common. Projects commonly run $15,000–$35,000." },
	{ area: "New Battle Ground Developments", note: "Newer plumbing and solid construction. Cosmetic refreshes are most common — these bathrooms just need a modern update, not a full demo." },
];
const faqs = [
	{ q: "How much does a bathroom remodel cost in Battle Ground WA?", a: "In Battle Ground WA, a bathroom remodel costs between $920 for a cosmetic refresh and $35,000+ for a high-end primary suite. A mid-range remodel runs $3,450–$7,500. A full gut remodel runs $9,200–$18,000. Prices reflect 2026 Clark County rates." },
	{ q: "What hidden costs should Battle Ground homeowners expect?", a: "Older Battle Ground homes (pre-1995) frequently have soft subfloors from slow leaks, original tile installed over drywall instead of cement board, and galvanized pipe under the sink. These conditions require correction before new tile goes in. We assess all of this during the free walkthrough." },
	{ q: "Is a tub-to-shower conversion worth it in Battle Ground?", a: "Yes — especially for aging-in-place homeowners and those maximizing a smaller bathroom. A prefab tub-to-shower conversion runs $1,725–$3,500. A custom tile walk-in shower runs $3,500–$8,000. Both add function and buyer appeal." },
	{ q: "Do I need a permit for a bathroom remodel in Battle Ground?", a: "Cosmetic remodels — new vanity, tile, fixtures, and paint — typically don't require a permit. Plumbing relocation, structural changes, and electrical panel work do. NORBILT (WA Lic. NORBI**741CS) handles all required permits." },
	{ q: "How long does a bathroom remodel take in Battle Ground?", a: "A cosmetic refresh takes 1–2 days. A mid-range remodel takes 3–5 days. A full gut remodel takes 1–2 weeks. Primary suite remodels with custom tile take 2–4 weeks. We confirm timelines during the free estimate." },
	{ q: "What adds the most bathroom value before selling in Battle Ground?", a: "Updated fixtures, a new vanity, and a clean recaulk/regrout job have the highest visible ROI in Battle Ground's market. Fixing any water damage or failing caulk is non-negotiable — buyers' agents flag these. A mid-range update ($3,450–$7,500) typically recovers 70–80% at sale." },
];

export default function BathroomRemodelCostBattleGroundWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Bathroom Remodel Cost in Battle Ground WA: 2026 Guide", author: { "@id": "https://www.norbilt.com/#founder" }, publisher: { "@id": "https://www.norbilt.com/#organization" }, datePublished: "2026-06-08", dateModified: "2026-06-08", mainEntityOfPage: "https://www.norbilt.com/blog/bathroom-remodel-cost-battle-ground-wa" }) }} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
						{ "@type": "ListItem", position: 2, name: "Blog", item: "https://www.norbilt.com/blog" },
						{ "@type": "ListItem", position: 3, name: "Bathroom Remodel Cost in Battle Ground WA: 2026 Pricing Guide", item: "https://www.norbilt.com/blog/bathroom-remodel-cost-battle-ground-wa" },
					],
				}) }}
			/>
			<div className="overflow-hidden bg-[#FDFCFB]">
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3"><Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">← Blog</Link><span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">Cost Guide</span></div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">Bathroom Remodel Cost in <span className="text-[#FFB800]">Battle Ground WA</span></h1>
				<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
					<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">Quick Answer</p>
					<p className="text-gray-700 leading-relaxed text-sm">A bathroom remodel in Battle Ground WA costs between $920 and $35,000+ depending on scope. A cosmetic refresh — new fixtures, toilet, recaulk, and paint — runs $920–$2,500 and takes 1–2 days. A mid-range remodel with new vanity, tile floor, shower surround, and all fixtures replaced costs $3,450–$7,500 and takes 3–5 days. A full gut remodel — everything to studs with new plumbing, cement board, tile, and vanity — runs $9,200–$18,000 over 1–2 weeks. Tub-to-shower conversions start at $1,725 for a prefab insert and go up to $8,000 for a custom tile walk-in. Battle Ground's mix of older ranch homes and newer construction like Daybreak affects cost: older homes frequently hide water damage and aging plumbing that adds $460–$1,380 to the final bill. All prices reflect 2026 Clark County rates.</p>
				</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every scope — from a cosmetic refresh to a full primary suite gut — from a licensed contractor serving Battle Ground and north Clark County.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Battle Ground, WA · Daybreak · Cherry Grove · Lewisville</div>
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
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg"><p>A bathroom remodel in Battle Ground WA costs between <strong>$920 for a cosmetic refresh</strong> and <strong>$35,000+ for a high-end primary suite</strong>. Battle Ground&apos;s mix of older homes and newer subdivisions means the right scope varies — and older Cherry Grove homes often need more prep work than their price tags suggest.</p><p>NORBILT is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) — one of the most active licensed contractors in north Clark County. $1,000,000 liability insurance. 1-year warranty on all bathroom work.</p></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Bathroom Remodel Cost by Scope</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Scope</th><th className="text-left p-4 font-black uppercase tracking-wider">What&apos;s Included</th><th className="text-left p-4 font-black uppercase tracking-wider">Cost Range</th><th className="text-left p-4 font-black uppercase tracking-wider">Timeline</th><th className="text-left p-4 font-black uppercase tracking-wider">Best For</th></tr></thead><tbody>{costTiers.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 font-black text-[#1F2E2B]">{r.scope}</td><td className="p-4 text-gray-600">{r.desc}</td><td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{r.range}</td><td className="p-4 text-gray-500 whitespace-nowrap">{r.timeline}</td><td className="p-4 text-gray-600">{r.best}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Cost by Component</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Component</th><th className="text-left p-4 font-black uppercase tracking-wider">Installed Cost (Battle Ground WA, 2026)</th></tr></thead><tbody>{components.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 text-gray-700 font-medium">{r.item}</td><td className="p-4 font-bold text-[#2D5A3D]">{r.range}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">What Drives Costs in Battle Ground</h2><div className="space-y-5">{drivers.map((d, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{d.title}</h3><p className="text-gray-600 leading-relaxed">{d.body}</p></div>))}</div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Battle Ground Neighborhood Breakdown</h2><div className="space-y-4">{neighborhoods.map((n, i) => (<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#2D5A3D] mt-1 shrink-0" /><div><p className="font-black text-[#1F2E2B] mb-1">{n.area}</p><p className="text-gray-600 text-sm leading-relaxed">{n.note}</p></div></div>))}</div></section>
						<section className="space-y-4"><h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">Related Guides</h2><div className="grid sm:grid-cols-2 gap-4">{[{ title: "Bathroom Remodel Cost in Clark County WA", href: "/blog/bathroom-remodel-cost-clark-county-wa" }, { title: "Bathtub to Shower Conversion Cost", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa" }, { title: "Handyman Services in Battle Ground WA", href: "/blog/battle-ground-handyman-cost" }, { title: "Bathroom Remodeling in Battle Ground", href: "/locations/battle-ground/bathroom-remodel" }].map((link, i) => (<Link key={i} href={link.href} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"><ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" /><span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.title}</span></Link>))}</div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Frequently Asked Questions</h2><div className="space-y-5">{faqs.map((faq, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>))}</div></section>
					</div>
				</article>
				<section className="py-20 bg-[#F8F6F3]"><div className="max-w-3xl mx-auto px-6 text-center space-y-6"><h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">Get a Free Estimate for Your Battle Ground Bathroom</h2><p className="text-gray-600 text-lg">Licensed, bonded & insured. Same-week estimates. 1-year warranty.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link><a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"><Phone className="w-5 h-5" /> (360) 216-9920</a></div></div></section>
			</div>
		</>
	);
}
