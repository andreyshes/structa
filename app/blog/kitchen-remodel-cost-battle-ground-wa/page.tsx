import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kitchen Remodel Cost in Battle Ground WA: 2026 Guide | Norbilt",
	description: "How much does a kitchen remodel cost in Battle Ground WA? Real 2026 price ranges from a $1,725 refresh to a $100,000 custom build — from a licensed contractor serving north Clark County.",
	alternates: { canonical: "https://norbilt.com/blog/kitchen-remodel-cost-battle-ground-wa" },
	openGraph: { title: "Kitchen Remodel Cost in Battle Ground WA: 2026 Guide | Norbilt", description: "Complete 2026 cost guide for kitchen remodels in Battle Ground WA.", url: "https://norbilt.com/blog/kitchen-remodel-cost-battle-ground-wa", siteName: "Norbilt", type: "article", images: [{ url: "https://norbilt.com/og-image.jpg", width: 1200, height: 630 }] },
};

const costTiers = [
	{ scope: "Cosmetic Refresh", desc: "New hardware, faucet, backsplash, lighting, paint. Same cabinets and layout.", range: "$1,725 – $5,000", timeline: "2–4 days", best: "Original builder finishes, tight budget, prepping to sell" },
	{ scope: "Mid-Range Remodel", desc: "New countertops, backsplash, sink, faucet, appliances. Cabinet fronts replaced or refaced.", range: "$17,250 – $35,000", timeline: "1–3 weeks", best: "Dated counters, worn cabinets, outdated appliances" },
	{ scope: "Full Remodel", desc: "All cabinets and counters replaced, new tile, updated plumbing and lighting. Same layout.", range: "$34,500 – $60,000", timeline: "3–6 weeks", best: "Full overhaul, older home, maximizing value" },
	{ scope: "Custom Build", desc: "Custom cabinetry, high-end stone, premium appliances, island, layout reconfiguration.", range: "$57,500 – $100,000+", timeline: "6–12 weeks", best: "Acreage homes, luxury finish, long-term primary home" },
];
const components = [
	{ item: "Cabinet hardware (full kitchen)", range: "$230 – $600" },
	{ item: "Backsplash (tile, installed)", range: "$460 – $1,800" },
	{ item: "Countertop — laminate", range: "$1,150 – $3,000" },
	{ item: "Countertop — quartz", range: "$2,875 – $7,500" },
	{ item: "Kitchen sink + faucet (supply & install)", range: "$575 – $1,800" },
	{ item: "Cabinet refacing (per linear ft)", range: "$115 – $230" },
	{ item: "Semi-custom cabinets (per linear ft)", range: "$345 – $920" },
	{ item: "Custom cabinets (per linear ft)", range: "$920 – $2,300" },
	{ item: "Kitchen island (supply & install)", range: "$2,300 – $8,000" },
	{ item: "Plumbing relocation (per fixture)", range: "$1,725 – $4,000" },
];
const drivers = [
	{ title: "Older Homes Have More Surprises", body: "Cherry Grove and central Battle Ground have a significant stock of 1970s–1990s homes with original cabinets, galvanized pipe, and out-of-level floors. Demo often reveals conditions that add cost — we always do a walkthrough before quoting." },
	{ title: "Fewer Licensed Contractors Serve Battle Ground", body: "Most Clark County contractors are concentrated in Vancouver and Camas. Norbilt is one of the most active licensed contractors in Battle Ground, which means faster scheduling and no outsourcing." },
	{ title: "Acreage Homes Warrant Custom Investment", body: "Homes on larger lots in the Lewisville area and rural Battle Ground often have larger kitchens suited to custom cabinetry and islands. These homeowners typically invest in the $34,500–$100,000 range." },
	{ title: "ROI Is Strong in Battle Ground's Growing Market", body: "Battle Ground is one of north Clark County's fastest-growing areas. Kitchen remodels recover 70–80% of their cost at sale in the current market — making a mid-range remodel a strong pre-sale investment." },
	{ title: "Permits Follow Clark County Requirements", body: "Battle Ground follows Clark County permit requirements. Cosmetic work typically doesn't require a permit. Plumbing relocation, electrical panel work, and structural changes do. Norbilt (WA Lic. NORBI**741CS) handles all permits." },
];
const neighborhoods = [
	{ area: "Daybreak", note: "2000s–2010s subdivision builds with builder-grade kitchens. Mid-range remodels dominate — counters, backsplash, appliances, and refaced cabinets." },
	{ area: "Cherry Grove", note: "1970s–1990s homes with original cabinetry. Full remodels have the strongest ROI here — the kitchens are significantly overdue for a full replacement." },
	{ area: "Lewisville Area", note: "Acreage properties with larger homes. Homeowners invest in custom cabinetry, islands, and high-end counters. Projects commonly run $34,500–$80,000." },
	{ area: "South Battle Ground (near 119th St)", note: "Mix of entry-level homes and established ranches. Cosmetic and mid-range remodels are most common." },
];
const faqs = [
	{ q: "How much does a kitchen remodel cost in Battle Ground WA?", a: "In Battle Ground WA, a kitchen remodel costs between $1,725 for a cosmetic refresh and $100,000+ for a custom build. A mid-range remodel runs $17,250–$35,000. A full cabinet-replacement remodel runs $34,500–$60,000. Prices reflect 2026 Clark County rates." },
	{ q: "Is it worth remodeling a kitchen in Battle Ground before selling?", a: "Yes — Battle Ground's growing market means kitchen remodels recover 70–80% of their cost at sale. Even a targeted cosmetic refresh (new counters, backsplash, hardware) for $3,000–$8,000 significantly improves buyer first impressions and days-on-market." },
	{ q: "What scope makes sense for an older Battle Ground home?", a: "For 1970s–1990s homes in Cherry Grove and central Battle Ground, a full remodel often makes more sense than refacing — the cabinet boxes may be damaged, out of level, or just too dated to work with. We assess during the free walkthrough and give you an honest recommendation." },
	{ q: "Do I need a permit for a kitchen remodel in Battle Ground?", a: "Cosmetic work — counters, backsplash, hardware, lighting at existing boxes — typically doesn't require a permit. Plumbing relocation, gas line work, and electrical panel changes do. Norbilt (WA Lic. NORBI**741CS) handles all required permits." },
	{ q: "How long does a kitchen remodel take in Battle Ground?", a: "A cosmetic refresh takes 2–4 days. A mid-range remodel takes 1–3 weeks. A full remodel takes 3–6 weeks. Custom builds take 6–12 weeks. We confirm exact timelines during the free estimate." },
	{ q: "What are the biggest cost drivers in a Battle Ground kitchen remodel?", a: "Cabinets (30–40% of budget), countertop material choice ($1,500–$8,000 swing), and hidden conditions in older homes (out-of-level floors, galvanized pipe, old electrical). We do a thorough walkthrough before quoting so there are no surprises." },
];

export default function KitchenRemodelCostBattleGroundWA() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "Article", headline: "Kitchen Remodel Cost in Battle Ground WA: 2026 Guide", author: { "@type": "Person", name: "Andrey Norbilt" }, publisher: { "@type": "Organization", name: "Norbilt", logo: { "@type": "ImageObject", url: "https://norbilt.com/icon-v3.png" } }, datePublished: "2026-06-08", dateModified: "2026-06-08", mainEntityOfPage: "https://norbilt.com/blog/kitchen-remodel-cost-battle-ground-wa" }, { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] }) }} />
			<div className="overflow-hidden bg-[#FDFCFB]">
				<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-[#14201D]">
					<div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
						<div className="flex flex-wrap items-center gap-3"><Link href="/blog" className="text-[#A7C4B5] text-sm font-bold hover:text-[#FFB800] transition-colors">← Blog</Link><span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">Cost Guide</span></div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">Kitchen Remodel Cost in <span className="text-[#FFB800]">Battle Ground WA</span></h1>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">Real 2026 price ranges for every scope — from a cosmetic refresh to a full custom build — from a licensed contractor serving Battle Ground and north Clark County.</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm"><MapPin className="w-4 h-4" />Battle Ground, WA · Daybreak · Cherry Grove · Lewisville</div>
					</div>
				</section>
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">
						<section className="space-y-5 text-gray-700 leading-relaxed text-lg">
							<p>A kitchen remodel in Battle Ground WA costs between <strong>$1,725 for a cosmetic refresh</strong> and <strong>$100,000+ for a full custom build</strong>. Battle Ground&apos;s mix of older homes and newer subdivisions means the right remodel scope varies widely — and getting the right advice before you commit is critical.</p>
							<p>Norbilt is a licensed general contractor (WA Lic. <strong>NORBI**741CS</strong>) — one of the most active licensed contractors serving Battle Ground and north Clark County. $1,000,000 liability insurance. 1-year workmanship warranty on all kitchen work.</p>
						</section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Kitchen Remodel Cost by Scope</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Scope</th><th className="text-left p-4 font-black uppercase tracking-wider">What&apos;s Included</th><th className="text-left p-4 font-black uppercase tracking-wider">Cost Range</th><th className="text-left p-4 font-black uppercase tracking-wider">Timeline</th><th className="text-left p-4 font-black uppercase tracking-wider">Best For</th></tr></thead><tbody>{costTiers.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 font-black text-[#1F2E2B]">{r.scope}</td><td className="p-4 text-gray-600">{r.desc}</td><td className="p-4 font-bold text-[#2D5A3D] whitespace-nowrap">{r.range}</td><td className="p-4 text-gray-500 whitespace-nowrap">{r.timeline}</td><td className="p-4 text-gray-600">{r.best}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Cost by Component</h2><div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"><table className="w-full text-sm"><thead className="bg-[#1F2E2B] text-white"><tr><th className="text-left p-4 font-black uppercase tracking-wider">Component</th><th className="text-left p-4 font-black uppercase tracking-wider">Installed Cost (Battle Ground WA, 2026)</th></tr></thead><tbody>{components.map((r, i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}><td className="p-4 text-gray-700 font-medium">{r.item}</td><td className="p-4 font-bold text-[#2D5A3D]">{r.range}</td></tr>))}</tbody></table></div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">What Drives Costs in Battle Ground</h2><div className="space-y-5">{drivers.map((d, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{d.title}</h3><p className="text-gray-600 leading-relaxed">{d.body}</p></div>))}</div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Battle Ground Neighborhood Breakdown</h2><div className="space-y-4">{neighborhoods.map((n, i) => (<div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#2D5A3D] mt-1 shrink-0" /><div><p className="font-black text-[#1F2E2B] mb-1">{n.area}</p><p className="text-gray-600 text-sm leading-relaxed">{n.note}</p></div></div>))}</div></section>
						<section className="space-y-4"><h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">Related Guides</h2><div className="grid sm:grid-cols-2 gap-4">{[{ title: "Kitchen Remodel Cost in Clark County WA", href: "/blog/kitchen-remodel-cost-clark-county-wa" }, { title: "Kitchen Remodel Cost in Vancouver WA", href: "/blog/kitchen-remodel-cost-vancouver-wa" }, { title: "Handyman Services in Battle Ground WA", href: "/blog/battle-ground-handyman-cost" }, { title: "Kitchen Remodeling in Battle Ground", href: "/locations/battle-ground/kitchen-remodel" }].map((link, i) => (<Link key={i} href={link.href} className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"><ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" /><span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{link.title}</span></Link>))}</div></section>
						<section className="space-y-6"><h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">Frequently Asked Questions</h2><div className="space-y-5">{faqs.map((faq, i) => (<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"><h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>))}</div></section>
					</div>
				</article>
				<section className="py-20 bg-[#F8F6F3]"><div className="max-w-3xl mx-auto px-6 text-center space-y-6"><h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">Get a Free Estimate for Your Battle Ground Kitchen</h2><p className="text-gray-600 text-lg">Licensed, bonded & insured. Same-week estimates. 1-year warranty.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link><a href="tel:+13602169920" className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#1F2E2B] text-[#1F2E2B] font-black uppercase tracking-widest rounded-xl hover:bg-[#1F2E2B] hover:text-white transition-all"><Phone className="w-5 h-5" /> (360) 216-9920</a></div></div></section>
			</div>
		</>
	);
}
