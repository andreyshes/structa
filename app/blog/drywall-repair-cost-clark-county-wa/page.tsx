import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Drywall Repair Cost in Clark County WA: 2026 Guide | Norbilt",
	description: "How much does drywall repair cost in Clark County WA? Real 2026 price ranges — from a $175 nail hole patch to a $4,000 full room replacement — from a licensed Vancouver contractor.",
	alternates: { canonical: "https://norbilt.com/blog/drywall-repair-cost-clark-county-wa" },
	openGraph: { title: "Drywall Repair Cost in Clark County WA: 2026 Guide | Norbilt", description: "Complete 2026 cost guide for drywall repair in Clark County WA.", url: "https://norbilt.com/blog/drywall-repair-cost-clark-county-wa", siteName: "Norbilt", type: "article", images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }] },
};

const repairTypes = [
	{ type: "Nail / screw holes (per hole)", cost: "$175 – $300", timeline: "1–2 hrs", notes: "Most common repair. Includes texture match and prime." },
	{ type: "Small patch (fist-sized, up to 6\")", cost: "$290 – $500", timeline: "2–4 hrs", notes: "Backing installed, compound applied in 2–3 coats, texture matched." },
	{ type: "Medium patch (6\"–18\")", cost: "$345 – $700", timeline: "Half day", notes: "California patch or drywall piece, texture matched, prime-ready." },
	{ type: "Large patch / water damage repair", cost: "$460 – $1,200", timeline: "Half–full day", notes: "Includes moisture check before patching. Mold treatment if needed." },
	{ type: "Texture matching only", cost: "$230 – $600", timeline: "2–4 hrs", notes: "Orange peel, knockdown, skip trowel, or smooth finish." },
	{ type: "Popcorn ceiling removal (per room)", cost: "$575 – $1,500", timeline: "1 day", notes: "Pre-1978 homes tested for asbestos first. Skim coat or retexture included." },
	{ type: "Full room drywall replacement", cost: "$1,725 – $4,000", timeline: "1–3 days", notes: "Demo, new drywall, tape, mud, texture, prime-ready." },
	{ type: "Water damage + mold remediation", cost: "$460 – $1,500", timeline: "1–2 days", notes: "Moisture source must be resolved first. We don't patch over active leaks." },
];

const cityNotes = [
	{ city: "Vancouver, WA", note: "Largest stock of older homes. Hazel Dell and Orchards have high rates of texture mismatch repairs from previous DIY patches.", low: "$175", high: "$4,000+" },
	{ city: "Camas, WA", note: "Newer homes with consistent textures. Repairs are more predictable. Popcorn ceilings rare.", low: "$175", high: "$3,500" },
	{ city: "Ridgefield, WA", note: "Mix of newer builds (consistent) and older downtown properties (varied textures).", low: "$175", high: "$3,500" },
	{ city: "Battle Ground, WA", note: "Older homes in Cherry Grove often have multiple layers of texture from previous repairs. Budget for texture leveling.", low: "$175", high: "$4,000+" },
	{ city: "Washougal, WA", note: "River-area older homes often have moisture-related drywall damage that needs full replacement vs. patching.", low: "$230", high: "$4,000+" },
];

const drivers = [
	{ title: "Texture Type Is the Biggest Variable", body: "Matching existing texture is the hardest part of any drywall repair. Orange peel and light knockdown are straightforward. Heavy knockdown, skip trowel, and smooth finishes take longer and cost more. Popcorn texture (common in Clark County pre-1990 homes) requires testing for asbestos before removal." },
	{ title: "Paint Matching After the Repair", body: "We prime the repair to minimize flash, but whether a touch-up blends depends on your paint sheen, age, and color. Flat and eggshell paints blend more easily than satin or semi-gloss. We tell you honestly during the walkthrough whether a spot touch-up will blend or whether the full wall needs painting." },
	{ title: "Water Damage: Source First, Then Repair", body: "We never patch over active moisture. If a Clark County home has water-damaged drywall, the source (roof, window, plumbing) must be resolved first. We can assess and refer plumbers or roofers if needed before scheduling the drywall repair." },
	{ title: "Popcorn Ceilings and Asbestos Risk", body: "Clark County homes built before 1978 may have asbestos in popcorn ceiling texture. We test before scraping — never skip this step. If asbestos is present, licensed abatement is required before we proceed. We coordinate this for you." },
	{ title: "Access and Ceiling Height", body: "High ceilings, stairwells, and tight closets require additional setup time. Most standard repairs are priced flat-rate. Rooms requiring scaffolding or specialty access may carry a modest surcharge — we note this during the free walkthrough." },
];

const faqs = [
	{ q: "How much does drywall repair cost in Clark County WA?", a: "In Clark County WA, drywall repair costs between $175 for a small nail hole patch and $4,000+ for a full room replacement. Water damage repairs run $460–$1,500. Popcorn ceiling removal runs $575–$1,500 per room. Prices reflect 2026 rates for licensed, warranted work." },
	{ q: "Can you match my existing wall texture?", a: "Yes. We match orange peel, knockdown, skip trowel, smooth, and most popcorn textures. Before starting, we test on a scrap piece to confirm the match. If the existing texture is unusual (hand-applied, layered, or very old), we discuss options honestly during the walkthrough." },
	{ q: "Do I need to repaint the whole wall after a drywall patch?", a: "Not always. We prime the repair to minimize flash. Whether a spot touch-up blends depends on your existing paint sheen and age. We'll tell you honestly — if the paint is more than 5 years old or a satin/semi-gloss finish, painting the full wall usually looks better." },
	{ q: "How do I know if my drywall has water damage?", a: "Signs include soft or spongy spots, brown staining, bubbling paint, and visible mold at the base of walls. In Clark County homes, bathroom and exterior walls are the most common locations. If you have any of these, the moisture source must be resolved before we repair — we assess this during the free walkthrough." },
	{ q: "Do you remove popcorn ceilings in Clark County?", a: "Yes. We scrape, skim, and retexture to a smooth or light knockdown finish. Pre-1978 Clark County homes may contain asbestos in the texture — we test before scraping and follow safe removal protocols. Testing adds 1–2 days to the timeline." },
	{ q: "Is drywall repair work covered by a warranty?", a: "Yes. All Norbilt drywall work is backed by a 1-year workmanship warranty. If a patch cracks, lifts, or the texture mismatches after settling, we come back and fix it at no charge within the warranty period." },
];

export default function DrywallRepairCostClarkCountyWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: "Drywall Repair Cost in Clark County WA: 2026 Guide", author: { "@type": "Person", name: "Andrey Norbilt" }, publisher: { "@type": "Organization", name: "Norbilt", logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" } }, datePublished: "2026-06-08", dateModified: "2026-06-08", mainEntityOfPage: "https://norbilt.com/blog/drywall-repair-cost-clark-county-wa" }, { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] }) }} />
			<div className="overflow-hidden bg-[#FDFCFB]">
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3"><Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">← Blog</Link><span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">Cost Guide</span></div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">Drywall Repair Cost in <span className="text-[#FFB800]">Clark County WA</span></h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every repair type — from a nail hole patch to full room replacement — from a licensed contractor doing drywall work across Clark County every week.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Clark County, WA · Vancouver · Camas · Ridgefield · Battle Ground · Washougal</div>
					</div>
				</section>
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg"><p>Drywall repair in Clark County WA costs between <strong>$175 for a small nail hole patch</strong> and <strong>$4,000+ for full room replacement</strong>. The range is wide because texture matching, moisture damage, and room access all significantly affect the scope.</p><p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) serving all of Clark County. We back all drywall work with a 1-year workmanship warranty. $1,000,000 liability insurance.</p></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Drywall Repair Cost by Type — Clark County WA 2026</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Repair Type</th><th className="text-left p-4 font-black uppercase tracking-wider">Cost Range</th><th className="text-left p-4 font-black uppercase tracking-wider">Timeline</th><th className="text-left p-4 font-black uppercase tracking-wider">Notes</th></tr></thead><tbody>{repairTypes.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 font-medium text-[#1F2E2B]">{r.type}</td><td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{r.cost}</td><td className="p-4 text-gray-500 whitespace-nowrap">{r.timeline}</td><td className="p-4 text-gray-600 text-xs">{r.notes}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Clark County City Breakdown</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">City</th><th className="text-left p-4 font-black uppercase tracking-wider">Notes</th><th className="text-left p-4 font-black uppercase tracking-wider">Typical Range</th></tr></thead><tbody>{cityNotes.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 font-black text-[#1F2E2B] whitespace-nowrap">{r.city}</td><td className="p-4 text-gray-600 text-sm">{r.note}</td><td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{r.low}–{r.high}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">What Drives Drywall Repair Costs</h2><div className="space-y-5">{drivers.map((d, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{d.title}</h3><p className="text-gray-600 leading-relaxed">{d.body}</p></div>))}</div></section>
						<section className="space-y-4"><h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">Related Guides</h2><div className="grid sm:grid-cols-2 gap-4">{[{ title: "Drywall Repair Cost in Vancouver WA", href: "/blog/drywall-repair-cost-vancouver-wa" }, { title: "Clark County Home Repair Checklist", href: "/blog/clark-county-home-repair-checklist" }, { title: "Drywall Repair in Vancouver WA", href: "/locations/vancouver/drywall-repair" }, { title: "Drywall Repair in Camas WA", href: "/locations/camas/drywall-repair" }].map((link, i) => (<Link key={i} href={link.href} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"><ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" /><span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.title}</span></Link>))}</div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Frequently Asked Questions</h2><div className="space-y-5">{faqs.map((faq, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>))}</div></section>
					</div>
				</article>
				<section className="py-20 bg-[#F8F6F3]"><div className="max-w-3xl mx-auto px-6 text-center space-y-6"><h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">Get a Free Drywall Repair Estimate</h2><p className="text-gray-600 text-lg">Licensed, bonded & insured. Same-week estimates across Clark County. 1-year warranty.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link><a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"><Phone className="w-5 h-5" /> (360) 216-9920</a></div></div></section>
			</div>
		</>
	);
}
