import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "What a Camas Bathroom Remodel Actually Looks Like | NORBILT",
	description:
		"A real walkthrough of a Camas WA bathroom remodel — what we find behind the walls, how we price it, the timeline, and what Prune Hill homeowners actually get for their budget.",
	alternates: {
		canonical: "https://www.norbilt.com/blog/camas-bathroom-remodel-what-to-expect",
	},
	openGraph: {
		title: "What a Camas Bathroom Remodel Actually Looks Like | NORBILT",
		description:
			"A real walkthrough of a Camas WA bathroom remodel — demo day discoveries, pricing tiers, timeline, and what Prune Hill homeowners actually get for their budget.",
		url: "https://www.norbilt.com/blog/camas-bathroom-remodel-what-to-expect",
		siteName: "NORBILT",
		type: "article",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const buildSequence = [
	{ step: "1", label: "Demo", detail: "Remove tile, fixtures, vanity, and subfloor protection. Inspect what's underneath." },
	{ step: "2", label: "Waterproofing membrane", detail: "Schluter Kerdi or Wedi board applied to all shower walls. This step determines whether the shower lasts 5 years or 25." },
	{ step: "3", label: "New cement board", detail: "Replaced over the waterproofing membrane on shower walls. Not the other way around." },
	{ step: "4", label: "Drain rough-in", detail: "If converting from a tub, the drain is moved or rebuilt. Plumber subcontract on this step." },
	{ step: "5", label: "Tile layout", detail: "We dry-lay the floor and shower tile before setting a single piece. Camas clients care about grout line alignment." },
	{ step: "6", label: "Tile set", detail: "Large-format tile takes longer to set properly. We use appropriate thin-set and back-butter every piece." },
	{ step: "7", label: "Grout", detail: "48–72 hours after tile set, minimum. Rushing this step causes grout cracking within a year." },
	{ step: "8", label: "Vanity installation", detail: "Solid wood or plywood-box vanity set and leveled. Plumbing connection on next subcontract visit." },
	{ step: "9", label: "Fixture rough-in", detail: "Plumber returns for final connections — supply lines, drain, shower valve trim." },
	{ step: "10", label: "Vanity top & sink", detail: "Quartz or stone top set with proper silicone and drain connection." },
	{ step: "11", label: "Mirror & lighting", detail: "Electrical is coordinated so mirrors and sconces go in after painting." },
	{ step: "12", label: "Final trim & punch list", detail: "Door hardware, towel bars, toilet paper holders, caulk lines, and final inspection with the homeowner." },
];

const costTiers = [
	{
		label: "Budget-Conscious",
		range: "$18,000 – $28,000",
		includes: "Mid-grade ceramic or porcelain tile, stock vanity from a big-box retailer, basic frameless mirror, standard chrome fixtures, LVP floor.",
		note: "Right for rentals, starter homes, or homeowners who want the function without the premium finish.",
		color: "#2D5A3D",
	},
	{
		label: "Mid-Range",
		range: "$28,000 – $45,000",
		includes: "Custom tile shower with niche and bench, solid wood vanity, frameless glass enclosure, brushed nickel or matte black fixtures, heated floor option.",
		note: "This is the sweet spot for most Prune Hill homes. The result looks like what buyers expect when they walk through an open house.",
		color: "#1F2E2B",
	},
	{
		label: "High-End",
		range: "$45,000 – $75,000",
		includes: "Designer tile (book-matched marble, large-format stone), heated floor, freestanding soaking tub addition, custom mirrors, waterfall showerhead, in-ceiling speakers.",
		note: "Right for primary suites in homes priced $800K–$1.2M where the bathroom needs to match the rest of the house.",
		color: "#14201D",
	},
];

const faqs = [
	{
		q: "How far in advance should I schedule a Camas bathroom remodel?",
		a: "For a standard master bath remodel, schedule 6–10 weeks out from your target start date. That window covers the estimate visit, material selection and ordering (vanity and tile often have 2–4 week lead times), permit application if needed, and subcontractor scheduling for plumbing. Homeowners who call us in August wanting a September start can usually make it work — but tile lead times from specialty suppliers can push things. The more notice, the more options you have on materials.",
	},
	{
		q: "Do I need to vacate the bathroom for the full remodel duration?",
		a: "Yes, plan to be without that bathroom for the full project duration — typically 10–16 working days for a standard Camas master bath. The shower and toilet will both be non-functional for most of the build. If it's your only full bathroom, that changes the math significantly. Most Camas homes have a second full or half bath, which makes this manageable. We're explicit about this during the estimate so there are no surprises on demo day.",
	},
	{
		q: "What should I pick first — tile, vanity, or fixtures?",
		a: "Pick your tile first, then fixtures, then the vanity. Tile is the largest surface area and the hardest to swap once ordered. Everything else should be selected to complement it. Fixtures should be picked before the vanity because the vanity finish (wood tone, hardware) should work with whatever metal finish you've chosen for the shower. This sequencing prevents the most common conflict we see: homeowners who pick a vanity first and then realize the tile they love doesn't work with it.",
	},
	{
		q: "How do I avoid change orders blowing up my budget?",
		a: "Two things. First, hire a contractor who builds a realistic contingency into the original quote — typically 10–15% for a Camas bathroom that's 25+ years old. If the contingency isn't needed, you get it back. If it is needed, you're not surprised. Second, complete all material selections before demo starts. The most common budget-blowing change orders come from homeowners who swap tile or vanity mid-project. Changing materials after work has started means restocking fees, re-ordering lead times, and rescheduling labor. Lock it in before day one.",
	},
	{
		q: "What warranty does NORBILT offer on bathroom remodel work?",
		a: "NORBILT backs all bathroom remodel work with a 1-year workmanship warranty covering tile installation, waterproofing, fixture connections, and finish carpentry. If a grout line cracks, a connection leaks, or anything we installed fails within a year of completion, we come back and fix it at no charge. This warranty is in writing and transferable if you sell the home within the year. Manufacturer warranties on fixtures, vanities, and glass enclosures are separate and typically run 1–5 years depending on the product.",
	},
];

export default function CamasBathroomRemodel() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: "What a Camas Bathroom Remodel Actually Looks Like",
						description:
							"A real walkthrough of a Camas WA bathroom remodel — what we find behind the walls, how we price it, the timeline, and what Prune Hill homeowners actually get for their budget.",
						author: { "@id": "https://www.norbilt.com/#founder" },
						publisher: { "@id": "https://www.norbilt.com/#organization" },
						datePublished: "2026-08-17",
						dateModified: "2026-08-17",
						mainEntityOfPage:
							"https://www.norbilt.com/blog/camas-bathroom-remodel-what-to-expect",
					}),
				}}
			/>
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
								name: "What a Camas Bathroom Remodel Actually Looks Like",
								item: "https://www.norbilt.com/blog/camas-bathroom-remodel-what-to-expect",
							},
						],
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
								Project Story
							</span>
							<span className="text-white/50 text-xs font-medium">August 2026</span>
						</div>
						<h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
							What a{" "}
							<span className="text-[#FFB800]">Camas Bathroom Remodel</span>{" "}
							Actually Looks Like
						</h1>
						<div className="bg-[#2D5A3D]/10 border-l-4 border-[#2D5A3D] rounded-r-2xl p-6 my-6">
							<p className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] mb-2">
								The Short Version
							</p>
							<p className="text-gray-200 leading-relaxed text-sm">
								A standard Camas master bath remodel — tub-to-shower conversion, double vanity, large-format tile floor, new lighting, new toilet — costs{" "}
								<strong className="text-white">$18,000–$45,000</strong> depending on material tier and runs{" "}
								<strong className="text-white">10–16 working days</strong> when properly scheduled. What actually determines whether your bathroom looks the way you imagined isn't the fixtures or the tile — it's whether the waterproofing behind those walls was done correctly. This post walks through the whole process: the estimate visit, demo day, the build sequence, what things cost, and why Camas homes specifically reward doing this right.
							</p>
						</div>
						<p className="text-xl text-white/70 leading-relaxed max-w-2xl border-l-4 border-[#FFB800] pl-6">
							Behind-the-walls detail on what we find, how we build it, and what it
							actually costs in Prune Hill and Lacamas Shores.
						</p>
						<div className="flex items-center gap-2 text-[#A7C4B5] text-sm">
							<MapPin className="w-4 h-4" />
							Camas, WA · Prune Hill · Lacamas Shores · Clark County
						</div>
					</div>
				</section>

				{/* AUTHOR BAR */}
				<div className="bg-[#1F2E2B] border-b border-white/10 py-3 px-6">
					<div className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#A7C4B5]">
						<Link
							href="/about"
							className="font-bold text-[#FFB800] hover:text-white transition-colors"
						>
							By Andrey
						</Link>
						<span>· WA Licensed General Contractor · NORBILT · Lic. NORBI**741CS</span>
					</div>
				</div>

				{/* ARTICLE */}
				<article className="py-16 lg:py-24">
					<div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-16">

						{/* INTRO */}
						<section className="space-y-6 text-gray-700 text-lg leading-relaxed">
							<p>
								Camas is not a typical Clark County market. Homeowners in Prune Hill and along Lacamas Shores have been through enough open houses to know what a well-done bathroom looks like — and what a bad one looks like under fresh paint. When they call us, they're not shopping for the cheapest quote. They've usually been through one painful experience with a contractor who communicated poorly, or they've seen a friend's renovation go sideways, and they want someone who can tell them exactly what's going to happen before the first tile gets broken.
							</p>
							<p>
								The typical Camas master bath we get called about looks the same in almost every house: a 1990s or early 2000s build with a cultured marble vanity top that's seen better days, original chrome fixtures that are either mismatched from partial replacements or just old, a tub-and-shower combo with white 4x4 tile that goes halfway up the wall, and a layout that hasn't moved since the house was built. The bathroom functions. It's not broken. But it looks like 1998, and the rest of the house doesn't.
							</p>
							<p>
								What homeowners want — and what we deliver — is the version that should have been there from the start: a walk-in tile shower with a frameless glass enclosure, a double vanity with proper undermount sinks and real stone or quartz countertops, large-format tile on the floor laid with visible grout lines that are uniform and straight, and lighting that actually illuminates the space instead of casting shadows. In Camas, that means doing it right the first time, because the homes here have resale values where a mediocre bathroom renovation is visible on inspection.
							</p>
							<p>
								This is a walkthrough of exactly what happens when you hire NORBILT for that project — from the day we come out to measure through the punch list walk at the end. No selling. Just what we actually do and why we do it that way.
							</p>
						</section>

						{/* ESTIMATE VISIT */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								The Estimate Visit: What We Actually Look At
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed">
								The estimate visit is not a handshake and a number. It&apos;s an inspection. Here&apos;s what we&apos;re checking and why each item matters.
							</p>
							<div className="space-y-5">
								{[
									{
										title: "Subfloor condition",
										body: "We press every square foot of the bathroom floor with our foot, looking for soft spots. A soft spot means moisture has gotten into the subfloor — either from a slow tub drain leak, a toilet wax ring failure, or a grout joint that gave up years ago. If the subfloor is compromised, that's a mandatory repair before any tile goes down. We tell you this at the estimate, not on demo day.",
									},
									{
										title: "Drain location and type",
										body: "Converting a tub to a walk-in shower means the drain moves or gets rebuilt. A tub drain sits at one end; a shower drain needs to be centered or offset to allow proper sloping toward the drain. We measure whether the existing drain can be adapted or whether we need to break the slab and relocate. In Camas homes on a crawl space, this is easier. On a slab, it adds cost and we tell you upfront.",
									},
									{
										title: "Ceiling height and shower layout",
										body: "Ceiling height determines tile layout options. Eight-foot ceilings on a standard shower give us one set of proportions; nine-foot ceilings open up a different layout. We also note whether the shower zone has a window — if it does, that window needs proper waterproofing at the jamb or it will leak within a few years. A lot of builders skipped this step. We don't.",
									},
									{
										title: "Existing tile adhesion",
										body: "We tap the existing shower tile. A hollow sound means the tile has delaminated from the wall behind it — the adhesive has failed. This is common in Camas homes built in the early-to-mid 1990s when cement board installation practices were less standardized. Hollow tile means full demo is the only responsible option. We will not tile over a wall that we know is failing.",
									},
									{
										title: "Vanity plumbing rough-in",
										body: "The supply lines and drain for the existing vanity are in a specific location. A double vanity — typically 60 to 72 inches wide — may require relocating plumbing rough-ins if the existing single vanity was narrower. We note this during the estimate so the plumber knows what to expect and the quote is accurate.",
									},
									{
										title: "Electrical",
										body: "We look at where the existing light bar or overhead fixture is wired, check if there's a GFCI outlet within six feet of the sink (code requires it), and note whether the exhaust fan is functional and properly ducted to the exterior. Fans that duct into the attic — which happens in older homes — are a moisture problem waiting to happen. We flag it.",
									},
								].map((item) => (
									<div key={item.title} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
										<CheckCircle2 className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-1" />
										<div>
											<h3 className="font-black text-[#1F2E2B] mb-2">{item.title}</h3>
											<p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
										</div>
									</div>
								))}
							</div>
							<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
								<p className="text-[#1F2E2B] font-bold leading-relaxed">
									The estimate visit takes 45–60 minutes. At the end, you get a written quote — not a ballpark, a number — that reflects what we actually found. That&apos;s what we go off. If something unexpected turns up during demo, we tell you the same day with a clear explanation and options. We don&apos;t surprise you with a change order at the end of the project.
								</p>
							</div>
						</section>

						{/* DEMO DAY */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Demo Day: What We Usually Find
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed">
								Demo day is when the bathroom stops looking like a bathroom and starts looking like a project. It&apos;s also when every assumption gets tested. Here&apos;s what we actually find in Camas homes built between 1990 and 2010, in rough order of how often we see it.
							</p>
							<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-6">
								<h3 className="text-xl font-black text-white uppercase tracking-tighter">
									Common Demo Day Discoveries in Camas Homes
								</h3>
								<div className="space-y-5">
									{[
										{
											issue: "Cement board installed without a waterproofing membrane",
											detail: "This is the most common finding in early 1990s Camas builds. The tile was set directly over cement board with no membrane — no Kerdi, no Wedi, no tar paper, nothing. Cement board alone is not waterproof. Water migrates through grout joints, saturates the board, and eventually reaches the framing behind it. We find mold on the framing in roughly one out of four full demo projects on homes built before 1998.",
											severity: "Very common",
										},
										{
											issue: "Original shower valves that need replacement",
											detail: "The Moen and Delta valves from the 1990s work — until they don't. Cartridges are often calcified in Clark County water conditions, and the pressure-balance technology in those valves doesn't meet current code. When we open the wall and the valve is original, we recommend replacing it with a current Moen Posi-Temp or equivalent. The rough-in is already exposed. It costs far less to do it now than to open the wall again in three years.",
											severity: "Common",
										},
										{
											issue: "Tile adhesion failure behind the visible surface",
											detail: "Shower tile that looks fine from the front can be completely detached from the wall behind it. Water gets behind a cracked grout joint, freezes and expands in winter, and the thin-set bond breaks. The tile holds in place by friction and caulk — until someone pushes on it. We tap every wall before we start swinging hammers. If a section is hollow, it comes off as a unit and we inspect the cement board behind it.",
											severity: "Common",
										},
										{
											issue: "Subfloor moisture around the drain",
											detail: "Slow leaks from the tub drain or shower pan drain show up as dark spots or soft spots in the subfloor plywood. In Camas homes with a crawl space, we sometimes see the moisture damage better from below than from above. Subfloor repair adds $575–$1,800 to a project depending on how far the moisture traveled. We price a specific repair, not an open-ended estimate.",
											severity: "Occasional",
										},
										{
											issue: "Non-code drain height",
											detail: "Occasionally — particularly in homes where a previous owner attempted their own tub-to-shower conversion — we find a drain that was rough-set too high, preventing proper slope toward the drain. Water puddles instead of draining. The fix requires breaking the concrete surround, lowering the drain, and repacking. It&apos;s a plumber job on a day-rate, and we get you a number before we start.",
											severity: "Less common",
										},
									].map((item) => (
										<div key={item.issue} className="border-l-2 border-[#FFB800]/40 pl-5">
											<div className="flex items-start justify-between gap-4 mb-1">
												<h4 className="font-black text-white text-sm">{item.issue}</h4>
												<span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800] whitespace-nowrap">
													{item.severity}
												</span>
											</div>
											<p className="text-[#A7C4B5] text-sm leading-relaxed">{item.detail}</p>
										</div>
									))}
								</div>
							</div>
							<p className="text-gray-700 text-lg leading-relaxed">
								A well-run contractor builds contingency into the quote for exactly these discoveries — typically 10–15% of the project total on a Camas home that&apos;s 20+ years old. A transparent contractor tells you on demo day what they found and gives you a specific number for the repair. If your contractor is calling you with change orders that weren&apos;t even hinted at during the estimate, that&apos;s not a surprise — that&apos;s an incomplete estimate.
							</p>
						</section>

						{/* BUILD SEQUENCE */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								The Build: Timeline and Sequence
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed">
								For a standard Camas master bath — tub-to-shower conversion, double vanity, large-format tile floor, new lighting, new toilet — a well-run job takes{" "}
								<strong>10–16 working days</strong>. Here&apos;s why that timeline is what it is, and what happens on each step.
							</p>
							<div className="space-y-3">
								{buildSequence.map((item) => (
									<div key={item.step} className="flex gap-4 items-start">
										<div className="w-9 h-9 rounded-full bg-[#FFB800] text-black font-black text-sm flex items-center justify-center shrink-0">
											{item.step}
										</div>
										<div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1">
											<h3 className="font-black text-[#1F2E2B] mb-1">{item.label}</h3>
											<p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
										</div>
									</div>
								))}
							</div>
							<div className="bg-[#2D5A3D]/5 border border-[#2D5A3D]/20 rounded-2xl p-6">
								<p className="font-black text-[#1F2E2B] mb-2">Why 10–16 days and not less?</p>
								<p className="text-gray-600 leading-relaxed text-sm">
									Tile takes time to set and cure before grouting. Large-format tile (12x24 or 24x48) is particularly unforgiving — set it wrong and you see lippage immediately. Multiple trades coordinate around each other: the plumber needs to be in before tile goes up, and back again after tile is done for trim connections. Camas homeowners also expect a clean and organized site daily — tarps, dust barriers, equipment staged properly. That takes time too. Any contractor who tells you a full master bath conversion takes five days is cutting corners somewhere you won&apos;t see until the grout cracks.
								</p>
							</div>
						</section>

						{/* COST SECTION */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What It Actually Costs
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed">
								These are real numbers for a Camas master bath remodel that includes a tub-to-shower conversion, double vanity, large-format tile floor, new lighting, and a new toilet. They reflect 2026 Clark County labor and material costs.
							</p>
							<div className="space-y-5">
								{costTiers.map((tier) => (
									<div
										key={tier.label}
										className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
									>
										<div
											className="px-8 py-5 flex items-center justify-between"
											style={{ backgroundColor: tier.color }}
										>
											<h3 className="font-black text-white text-lg uppercase tracking-tighter">
												{tier.label}
											</h3>
											<span className="font-black text-[#FFB800] text-xl whitespace-nowrap">
												{tier.range}
											</span>
										</div>
										<div className="bg-white px-8 py-5 space-y-3">
											<p className="text-gray-700 text-sm leading-relaxed">
												<strong className="text-[#1F2E2B]">What&apos;s included:</strong>{" "}
												{tier.includes}
											</p>
											<p className="text-[#2D5A3D] font-bold text-sm">{tier.note}</p>
										</div>
									</div>
								))}
							</div>
							<div className="bg-[#FFB800]/10 border-l-4 border-[#FFB800] rounded-r-2xl p-6">
								<p className="text-[#1F2E2B] font-bold leading-relaxed text-sm">
									A $15,000 bathroom remodel in Camas is going to look like a $15,000 bathroom remodel. That&apos;s fine for some situations. But it&apos;s not what most Camas buyers expect when they come to sell — and in a market where homes are trading at $600K–$1M+, a dated-looking bathroom costs you more at resale than the difference between the tiers.
								</p>
							</div>
							<div className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100">
								<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
									What drives cost up within a tier
								</p>
								<div className="space-y-2 text-sm text-gray-600">
									{[
										"Tile selection — basic ceramic ($2–$5/sq ft) vs. large-format porcelain or stone ($12–$30/sq ft) is the single biggest variable",
										"Drain relocation — adds $800–$2,500 depending on whether we&apos;re on a crawl space or slab",
										"Subfloor repairs — $575–$1,800 depending on how far moisture traveled",
										"Frameless glass enclosure — adds $1,200–$3,000 vs. a standard framed door",
										"Heated floor — adds $700–$1,500 for a 50–60 sq ft bathroom floor",
										"Plumbing relocation for vanity — adds $800–$2,000 if supply lines need to move",
									].map((item, i) => (
										<div key={i} className="flex items-start gap-2">
											<span className="text-[#FFB800] font-black mt-0.5">→</span>
											<span dangerouslySetInnerHTML={{ __html: item }} />
										</div>
									))}
								</div>
							</div>
						</section>

						{/* WHAT MAKES CAMAS DIFFERENT */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Makes Camas Bathrooms Different
							</h2>
							<div className="space-y-6 text-gray-700 text-lg leading-relaxed">
								<p>
									Camas comps drive decisions. Homes on Prune Hill and Lacamas Shores are selling at $600K–$1M+, with some newer custom builds pushing past that. A master bath that looks dated takes buyers out of the emotional &quot;yes&quot; even if the price is otherwise right. Buyers in this market have been through dozens of open houses. They can tell the difference between a tile shower with proper layout and grading and a tile shower someone did on a Saturday.
								</p>
								<p>
									The single biggest differentiator — the one that separates a bathroom that lasts 20 years without problems from one that starts leaking within five — is waterproofing. A properly waterproofed shower is built so that any water that gets through the grout joints (and it will, eventually) hits a membrane and drains down and out. An improperly waterproofed shower sends that water into the cement board, into the framing, and into the drywall on the other side of the wall. You won&apos;t see it for three to five years. Then you&apos;ll see it all at once.
								</p>
							</div>
							<div className="grid md:grid-cols-2 gap-5">
								{[
									{
										title: "Proper waterproofing",
										body: "We use Schluter Kerdi or Wedi board as the primary waterproofing layer on all shower walls. The membrane goes on first, then cement board over it. Not the other way around. All corners and seams are reinforced with membrane tape before tile goes up. This is code in some jurisdictions and best practice everywhere — we do it on every job regardless.",
									},
									{
										title: "Tile layout and grading",
										body: "In Camas, clients notice if the grout lines don't line up at the corners or if the tile doesn't look level. We dry-lay before we set, always. Large-format tile on the floor requires a dead-flat substrate — any variation gets telegraphed through the tile as lippage. We skim-coat or grind the subfloor before setting if needed.",
									},
									{
										title: "Comps and ROI",
										body: "A mid-range bathroom remodel ($28,000–$45,000) in a $700K Prune Hill home typically recovers 65–80% at resale — and more importantly, it keeps the home competitive in showings against updated inventory. A dated bathroom in a well-maintained house often costs sellers $30,000–$50,000 in negotiated price concessions from buyers who want credit for the work they&apos;ll have to do.",
									},
									{
										title: "Permits in Camas",
										body: "The City of Camas requires permits for plumbing relocation and electrical changes beyond replacing existing fixtures. A cosmetic remodel — new tile, same layout, fixture swap at existing locations — typically doesn&apos;t require a permit. We pull all required permits on every job. Unpermitted work creates disclosure issues at resale and can affect insurance claims in Clark County.",
									},
								].map((item) => (
									<div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
										<h3 className="font-black text-[#1F2E2B] mb-2 text-sm uppercase tracking-wide">
											{item.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
									</div>
								))}
							</div>
						</section>

						{/* LICENSING BLOCK */}
						<div className="bg-[#1F2E2B] rounded-3xl p-8 space-y-4">
							<div className="flex items-center gap-3">
								<Shield className="w-7 h-7 text-[#FFB800]" />
								<h2 className="text-xl font-black text-white uppercase tracking-tighter">
									NORBILT Credentials
								</h2>
							</div>
							<ul className="space-y-3">
								{[
									"WA General Contractor License NORBI**741CS",
									"$1,000,000 liability insurance on every job",
									"Bonded — protects you if work is incomplete",
									"We pull all required City of Camas and Clark County permits",
									"1-year workmanship warranty on all bathroom work, in writing",
									"Subcontractors (plumbing) are licensed and verified",
								].map((item, i) => (
									<li key={i} className="flex items-start gap-3 text-white/80 text-sm">
										<CheckCircle2 className="w-4 h-4 text-[#FFB800] mt-0.5 shrink-0" />
										{item}
									</li>
								))}
							</ul>
							<p className="text-[#A7C4B5] text-sm leading-relaxed">
								Verify any WA contractor at{" "}
								<strong className="text-white">verify.contractors.wa.gov</strong> before signing anything. Takes 30 seconds. Our license is current.
							</p>
						</div>

						{/* FAQ */}
						<section className="space-y-6">
							<h2 className="text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Frequently Asked Questions
							</h2>
							<div className="space-y-5">
								{faqs.map((faq, i) => (
									<div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
										<h3 className="text-lg font-black text-[#1F2E2B] mb-3">{faq.q}</h3>
										<p className="text-gray-600 leading-relaxed">{faq.a}</p>
									</div>
								))}
							</div>
						</section>

						{/* SOURCES */}
						<section className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								Sources & Project Data
							</p>
							<ul className="space-y-2 text-sm text-gray-500">
								<li>
									<strong className="text-[#1F2E2B]">City of Camas Building Division</strong> — permit requirements for residential remodels, camaswa.gov/building
								</li>
								<li>
									<strong className="text-[#1F2E2B]">Clark County Department of Community Development</strong> — unincorporated county permit and contractor license requirements
								</li>
								<li>
									<strong className="text-[#1F2E2B]">Washington State Department of Labor & Industries</strong> — contractor licensing and bonding requirements, lni.wa.gov
								</li>
								<li>
									<strong className="text-[#1F2E2B]">NORBILT Project Data</strong> — cost ranges, demo findings, and timeline data compiled from bathroom remodel projects completed in Camas WA, 2023–2026
								</li>
								<li>
									<strong className="text-[#1F2E2B]">Schluter Systems / Wedi</strong> — waterproofing membrane installation standards for tile shower assemblies
								</li>
							</ul>
						</section>

						{/* RELATED READING */}
						<section className="space-y-4">
							<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Related Reading
							</h2>
							<div className="grid sm:grid-cols-2 gap-4">
								{[
									{ title: "Bathroom Remodel Cost in Camas WA", href: "/blog/bathroom-remodel-cost-camas-wa" },
									{ title: "Bathtub to Shower Conversion Cost in Clark County", href: "/blog/bathtub-to-shower-conversion-cost-clark-county-wa" },
									{ title: "Bathroom Remodel Cost in Clark County WA", href: "/blog/bathroom-remodel-cost-clark-county-wa" },
									{ title: "Camas WA Bathroom Remodeling Service", href: "/locations/camas/bathroom-remodel" },
								].map((link, i) => (
									<Link
										key={i}
										href={link.href}
										className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#FFB800]/40 hover:shadow-md transition-all group"
									>
										<ArrowRight className="w-4 h-4 text-[#2D5A3D] group-hover:text-[#FFB800] shrink-0 transition-colors" />
										<span className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">
											{link.title}
										</span>
									</Link>
								))}
							</div>
						</section>

						{/* NEARBY AREAS */}
						<section className="bg-[#F8F6F3] rounded-2xl p-6 border border-gray-100">
							<p className="text-sm font-black text-[#2D5A3D] uppercase tracking-widest mb-3">
								We Also Remodel Bathrooms In
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									{ name: "Vancouver", slug: "vancouver" },
									{ name: "Battle Ground", slug: "battle-ground" },
									{ name: "Ridgefield", slug: "ridgefield" },
									{ name: "Washougal", slug: "washougal" },
									{ name: "Salmon Creek", slug: "salmon-creek" },
								].map((city) => (
									<Link
										key={city.slug}
										href={`/locations/${city.slug}/bathroom-remodel`}
										className="flex items-center gap-1 px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 border border-gray-200 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors"
									>
										<MapPin className="w-3 h-3" />
										{city.name}, WA
									</Link>
								))}
							</div>
						</section>

					</div>
				</article>

				{/* CTA */}
				<section className="py-20 bg-[#FFB800]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter">
							Ready to Talk About Your Camas Bathroom?
						</h2>
						<p className="text-black/70 text-lg font-medium max-w-xl mx-auto">
							NORBILT is a licensed WA general contractor (Lic. NORBI**741CS) specializing in bathroom remodels in Camas, Prune Hill, and Lacamas Shores. Free written estimates, same-week scheduling, and a job site that&apos;s clean at the end of every day.
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
