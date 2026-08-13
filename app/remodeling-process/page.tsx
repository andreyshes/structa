import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Remodeling Process: What to Expect | NORBILT Vancouver WA",
	description:
		"Walk through NORBILT's 6-step remodeling process — from free on-site estimate to final walkthrough. What to expect, how long it takes, and what causes delays in Clark County WA.",
	alternates: {
		canonical: "https://www.norbilt.com/remodeling-process",
	},
	openGraph: {
		title: "Home Remodeling Process: What to Expect | NORBILT Vancouver WA",
		description:
			"NORBILT's 6-step remodeling process explained — estimate, contract, materials, demo, installation, and final walkthrough. Real timelines and honest answers.",
		url: "https://www.norbilt.com/remodeling-process",
		type: "website",
		images: [{ url: "https://www.norbilt.com/og-image.jpg", width: 1200, height: 630 }],
	},
};

const steps = [
	{
		number: "01",
		title: "Free On-Site Estimate",
		intro:
			"Andrey visits your home, walks the space, and has a direct conversation about what you want to accomplish and what budget you're working with.",
		details: [
			{
				heading: "What happens during the visit",
				body: "This isn't a sales call. Andrey looks at the space, asks specific questions about scope, takes measurements where needed, and tells you honestly what's realistic for your budget. If something you're hoping for isn't feasible or isn't worth the cost, you'll hear that here.",
			},
			{
				heading: "What to prepare",
				body: "Clear the space so we can actually see what we're working with. Have your wish list and your must-have list ready — they're different, and knowing the difference helps us build a scope that fits. If you have inspiration photos, bring them. We don't need a Pinterest board, but a few images of tile you like or a layout you're considering saves a lot of back-and-forth.",
			},
			{
				heading: "What you get",
				body: "A written estimate — not a verbal ballpark. We don't call you a week later with a number. Before Andrey leaves, you have a clear sense of what the project will cost. A formal written estimate follows within 24–48 hours in most cases.",
			},
		],
		note: "Scheduling: Same week in most cases. We're a working contractor, not a sales team.",
	},
	{
		number: "02",
		title: "Scope of Work & Written Contract",
		intro:
			"Everything goes in writing before any work starts. That's not a formality — it's how we protect both sides of the job.",
		details: [
			{
				heading: "What the contract covers",
				body: "Scope of work (line by line), materials specified, start date and estimated completion, payment schedule, and what happens if unforeseen conditions are discovered during demo. No verbal agreements. If it's not in the contract, it's not part of the job.",
			},
			{
				heading: "Payment schedule",
				body: "We use a three-stage payment schedule: 30% at contract signing to secure your slot and order materials, 40% at the midpoint of the project (typically after rough work and before finish installation), and 30% at completion — after the final walkthrough and punch list are done. You don't pay the last installment until you're satisfied.",
			},
			{
				heading: "Change orders",
				body: "If scope changes during the project, we handle it with a written change order. You'll see the cost and timeline impact before any additional work is done. We don't add charges to your final invoice for things you didn't approve.",
			},
		],
		note: "We don't start without a signed contract. No exceptions.",
	},
	{
		number: "03",
		title: "Materials & Scheduling",
		intro:
			"Once the contract is signed, we order materials and confirm your start date. Lead times — especially on cabinets — are what drive the schedule.",
		details: [
			{
				heading: "Cabinet lead times are the schedule driver",
				body: "Stock cabinets can arrive in 1–2 weeks. Semi-custom takes 2–4 weeks. Custom cabinets from specialty manufacturers can take 6–8 weeks. We order immediately after contract signing to minimize wait time. If you're working against a deadline, we'll tell you up front whether the cabinet choice affects it.",
			},
			{
				heading: "Confirming your start date",
				body: "We confirm the start date once key materials are inbound. We don't schedule and then reschedule when things arrive late — we set the start date when we can actually commit to it. This means there may be a gap between signing and starting. That gap is material lead time.",
			},
			{
				heading: "What you may need to select or order",
				body: "Tile, countertop slab, plumbing fixtures, cabinet hardware, lighting — these are items where you make the selection and we install. Some clients want us to specify and order everything. Others prefer to shop for their own tile or go to the showroom directly. Either way works. What doesn't work is waiting until week 3 of a 3-week project to pick countertop material.",
			},
		],
		note: "The earlier you make finish selections, the tighter we can hold the schedule.",
	},
	{
		number: "04",
		title: "Demo & Rough Work",
		intro:
			"This phase is the most disruptive. It's also when we find out exactly what we're working with behind the walls and under the floor.",
		details: [
			{
				heading: "What demo day looks like",
				body: "Loud, dusty, and disorienting. We protect adjacent areas with plastic sheeting, lay down floor protection on the path to the work area, and contain the mess as much as possible. By end of day, the space is down to studs. It looks worse before it looks better — that's normal.",
			},
			{
				heading: "Plumbing and electrical rough-in",
				body: "For full remodels that involve moving fixtures or adding circuits, the rough plumbing and electrical happen after demo and before any close-up. This is when the inspector comes out. In Clark County, permit inspections at rough-in are non-negotiable — we don't skip them. If your project required permits, you'll see this step in the schedule.",
			},
			{
				heading: "Hidden conditions",
				body: "Sometimes we open a wall and find something unexpected: old galvanized plumbing, mold behind a shower surround, a subfloor that's softer than it should be, or undersized electrical. We stop, document what we found, and call you before proceeding. That's what the change order process is for. We don't make those calls silently — you see it and you approve the additional scope before we continue.",
			},
		],
		note: "We don't close walls until rough-in inspection is signed off.",
	},
	{
		number: "05",
		title: "Installation & Finish Work",
		intro:
			"This is the phase where the project turns around and starts to look like what you signed up for. It's also the most detail-intensive.",
		details: [
			{
				heading: "Sequence matters",
				body: "Installation follows a specific order: drywall, then tile, then cabinets, then countertop template. Countertop fabrication happens after cabinets are installed and confirmed level — that's when we take the template. From template to slab delivery is typically 5–10 business days for quartz and granite in Clark County.",
			},
			{
				heading: "Tile cure times",
				body: "Tile mortar needs 24–48 hours to cure before grouting. Grout needs 48–72 hours before the shower or floor gets used. We don't push timelines on this — a failed tile installation because we rushed the cure is a far more expensive problem than waiting two days. If you need the bathroom back sooner, we plan the schedule accordingly.",
			},
			{
				heading: "Cleanliness during installation",
				body: "Daily cleanup is part of the job, not something we do when we feel like it. Tools are staged in the work area, not spread across your living room. Trash goes out regularly. We know you're living adjacent to the project.",
			},
		],
		note: "Countertop template happens after cabinets are set — not before.",
	},
	{
		number: "06",
		title: "Final Walkthrough & Warranty",
		intro:
			"Before we call the job done, we walk it together. Anything that needs adjustment gets handled before the final payment.",
		details: [
			{
				heading: "The punch list",
				body: "We walk the space with you and you tell us anything that needs attention — a grout line that's uneven, a cabinet door that doesn't close flush, caulk that missed a corner. We write it down and work through it before closing out. You're not being difficult by having a list. That's what the walkthrough is for.",
			},
			{
				heading: "Final payment",
				body: "The 30% final installment is due at completion — after the walkthrough and after the punch list is resolved. You're not paying in full and then hoping we come back. The payment schedule is structured so we're both motivated to get it right.",
			},
			{
				heading: "1-Year Workmanship Warranty",
				body: "Every project carries a one-year workmanship warranty. If tile comes loose, grout cracks, trim pulls away, or any installation issue shows up in the first year, we come back and fix it. Warranty doesn't cover damage from plumbing failures unrelated to our work, or normal wear on materials. It covers our installation and labor, which is where defects actually show up.",
			},
			{
				heading: "After the job",
				body: "Andrey's number is (360) 216-9920. If something comes up after the project, call or text directly. We're a small operation — you're not going through a call center to get someone to look at something.",
			},
		],
		note: "You pay the final installment after the walkthrough. Not before.",
	},
];

const timelines = [
	{ project: "Cosmetic bathroom refresh", range: "1–2 days" },
	{ project: "Tub-to-shower conversion", range: "2–5 days" },
	{ project: "Full bathroom remodel", range: "2–4 weeks" },
	{ project: "Backsplash / countertop only", range: "2–4 days" },
	{ project: "Mid-range kitchen remodel", range: "2–4 weeks" },
	{ project: "Full kitchen gut remodel", range: "4–8 weeks" },
	{ project: "Multi-room renovation", range: "6–12 weeks" },
];

const delays = [
	{
		cause: "Cabinet lead times",
		detail:
			"This is the most common schedule driver. Stock cabinets arrive in 1–2 weeks. Semi-custom runs 2–4 weeks. If you want a specific door style or color not in stock, you're looking at 4–6 weeks from order. We order immediately after contract signing, but lead time is what it is.",
	},
	{
		cause: "Clark County permit processing",
		detail:
			"For projects that require structural or plumbing permits, Clark County Community Development typically takes 1–3 weeks to process. We account for this in the schedule, but we can't speed up a county office. Permits that can be pulled over the counter (minor electrical, some plumbing) don't cause significant delay.",
	},
	{
		cause: "Hidden conditions found during demo",
		detail:
			"Mold behind a shower surround, a soft subfloor, pipes that aren't where the plan said they were — we find these during demo. Remediation or rerouting takes time and adds cost. We handle it as quickly as possible, but we won't rush remediation or skip steps to stay on a timeline.",
	},
	{
		cause: "Homeowner decisions",
		detail:
			"If countertop material isn't selected until week 3 of a 3-week project, it adds time. Same for tile, fixtures, cabinet hardware. We give you a decision deadline list at the start of the project. Hit those deadlines and the schedule holds.",
	},
];

const faqs = [
	{
		q: "Do I need to move out during the remodel?",
		a: "For most single-room projects, no. A bathroom remodel or kitchen remodel is disruptive but livable if you have a second bathroom or can work around a temporary kitchen setup. For whole-home gut renovations, it depends on scope — we'll tell you honestly before work starts if the project scope makes the home unlivable during construction.",
	},
	{
		q: "How do I pay?",
		a: "Three installments: 30% at contract signing, 40% at midpoint (after rough work, before finish installation), and 30% at final walkthrough after punch list is resolved. We accept check, bank transfer, or credit card. Credit card payments carry a 3% processing fee.",
	},
	{
		q: "What if there are hidden problems during demo?",
		a: "We stop, document, and call you before proceeding. You'll see what we found and get a written change order with the additional cost and timeline impact. We don't make that call for you. Nothing additional gets done without your written approval.",
	},
	{
		q: "Who pulls the permits?",
		a: "NORBILT pulls all permits for work that requires them. We handle the coordination with Clark County Community Development or the City of Vancouver (depending on your address). Permit cost is either included in the estimate or called out as a line item — you'll see it before signing.",
	},
	{
		q: "What does the 1-year warranty cover?",
		a: "Workmanship — meaning our installation. If tile comes loose, grout cracks, trim pulls away from the wall, or a cabinet door goes out of alignment due to installation, that's covered. The warranty doesn't cover normal material wear, damage from a subsequent plumbing leak, or anything that wasn't part of our scope.",
	},
	{
		q: "Can I make changes mid-project?",
		a: "Yes, with a written change order. If you want to add scope, swap a material, or adjust something after work has started, we put it in writing with the cost and timeline impact and you approve it before we proceed. Changes that require re-ordering materials can push the schedule. We'll tell you by how much.",
	},
];

export default function RemodelingProcessPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@graph": [
							{
								"@type": "BreadcrumbList",
								itemListElement: [
									{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.norbilt.com" },
									{ "@type": "ListItem", position: 2, name: "Remodeling Process", item: "https://www.norbilt.com/remodeling-process" },
								],
							},
							{
								"@type": "FAQPage",
								mainEntity: faqs.map((f) => ({
									"@type": "Question",
									name: f.q,
									acceptedAnswer: { "@type": "Answer", text: f.a },
								})),
							},
						],
					}),
				}}
			/>

			<div className="min-h-screen bg-[#FDFCFB]">
				{/* HERO */}
				<section className="pt-32 pb-20 bg-[#14201D]">
					<div className="max-w-3xl mx-auto px-6">
						<div className="flex flex-wrap gap-2 mb-6">
							<Link href="/" className="text-[#FFB800] text-xs font-black uppercase tracking-widest hover:underline">
								NORBILT
							</Link>
							<span className="text-white/30 text-xs">·</span>
							<span className="text-white/50 text-xs font-medium">How We Work</span>
						</div>
						<h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
							What to Expect:<br />
							<span className="text-[#FFB800]">The NORBILT Remodeling Process</span>
						</h1>
						<p className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FFB800] pl-6">
							From the first call to the final walkthrough, here's exactly what happens when you hire NORBILT
							for a remodeling project in Clark County. No surprises. No vague timelines. No wondering
							what comes next.
						</p>
					</div>
				</section>

				{/* STEPS */}
				<div className="max-w-3xl mx-auto px-6 py-16 space-y-20">
					{steps.map((step, idx) => (
						<section key={step.number} className="relative">
							<div className="flex items-start gap-6 mb-8">
								<div className="shrink-0 w-14 h-14 rounded-2xl bg-[#1F2E2B] flex items-center justify-center">
									<span className="text-[#FFB800] font-black text-sm">{step.number}</span>
								</div>
								<div>
									<p className="text-xs font-black text-[#2D5A3D] uppercase tracking-widest mb-1">Step {idx + 1}</p>
									<h2 className="text-2xl font-black text-[#1F2E2B] tracking-tight">{step.title}</h2>
								</div>
							</div>
							<p className="text-[#2C3E3A] leading-relaxed text-base mb-6 font-medium">{step.intro}</p>
							<div className="space-y-5 pl-0 md:pl-20">
								{step.details.map((d) => (
									<div key={d.heading} className="bg-white border border-[#2C3E3A]/8 rounded-xl p-5">
										<h3 className="text-sm font-black text-[#1F2E2B] uppercase tracking-wider mb-2">{d.heading}</h3>
										<p className="text-sm text-[#2C3E3A]/80 leading-relaxed">{d.body}</p>
									</div>
								))}
								<div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl px-5 py-3">
									<p className="text-sm font-bold text-[#1F2E2B]">{step.note}</p>
								</div>
							</div>
						</section>
					))}

					{/* Timeline table */}
					<section className="space-y-5">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Typical Timelines by Project Type
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							These are working timelines, not best-case estimates. They assume materials are on hand, decisions are
							made in advance, and no significant hidden conditions are discovered. Material lead times extend the
							total from contract signing to start — not from start to completion.
						</p>
						<div className="overflow-x-auto rounded-2xl border border-[#2C3E3A]/10">
							<table className="w-full text-sm">
								<thead className="bg-[#1F2E2B] text-white">
									<tr>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Project Type</th>
										<th className="text-left px-5 py-4 font-black uppercase tracking-wider text-xs">Active Work Duration</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-[#2C3E3A]/8">
									{timelines.map((row, i) => (
										<tr key={row.project} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}>
											<td className="px-5 py-4 font-semibold text-[#1F2E2B]">{row.project}</td>
											<td className="px-5 py-4 text-[#2C3E3A] font-bold">{row.range}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<p className="text-xs text-[#2C3E3A]/50 leading-relaxed">
							Active work duration = days/weeks crew is on-site. Add material lead time (typically 1–6 weeks
							depending on cabinet selection) from contract signing to on-site start.
						</p>
					</section>

					{/* What causes delays */}
					<section className="space-y-6">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							What Actually Causes Delays
						</h2>
						<p className="text-[#2C3E3A] leading-relaxed">
							Most delays in remodeling projects trace back to one of four causes. None of them are surprising
							once you know to look for them.
						</p>
						<div className="space-y-4">
							{delays.map((d) => (
								<div key={d.cause} className="bg-white border border-[#2C3E3A]/8 rounded-xl p-6">
									<h3 className="font-black text-[#1F2E2B] mb-2 flex items-center gap-2">
										<span className="w-2 h-2 rounded-full bg-[#FFB800] shrink-0" />
										{d.cause}
									</h3>
									<p className="text-sm text-[#2C3E3A]/80 leading-relaxed">{d.detail}</p>
								</div>
							))}
						</div>
					</section>

					{/* FAQ */}
					<section className="space-y-6">
						<h2 className="text-2xl font-black text-[#1F2E2B] uppercase tracking-tighter">
							Frequently Asked Questions
						</h2>
						<div className="space-y-6">
							{faqs.map((f) => (
								<div key={f.q} className="border-b border-[#2C3E3A]/10 pb-6">
									<h3 className="font-black text-[#1F2E2B] mb-2">{f.q}</h3>
									<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">{f.a}</p>
								</div>
							))}
						</div>
					</section>

					{/* CTA */}
					<section className="bg-[#1F2E2B] rounded-2xl p-8 text-center">
						<h2 className="text-2xl font-black text-white mb-3">
							Ready to Get Started?
						</h2>
						<p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
							Step one is a free on-site estimate. Andrey visits your home, walks the space, and gives you
							written pricing before any work starts.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							<Link
								href="/estimate"
								className="inline-flex items-center gap-2 bg-[#FFB800] text-black px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
							>
								Get Free Estimate
							</Link>
							<a
								href="tel:+13602169920"
								className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
							>
								(360) 216-9920
							</a>
						</div>
					</section>

					{/* Related reading */}
					<section>
						<p className="text-xs font-black uppercase tracking-widest text-[#2D5A3D] mb-4">Related Reading</p>
						<div className="grid sm:grid-cols-2 gap-4">
							{[
								{ href: "/remodeling", label: "NORBILT Remodeling Services", sub: "Full list of what we handle" },
								{ href: "/blog/home-remodeling-vancouver-wa", label: "Home Remodeling in Vancouver WA", sub: "Costs and what to expect in Clark County" },
								{ href: "/pricing", label: "Pricing Guide", sub: "What projects cost in 2026" },
								{ href: "/contact", label: "Contact & Schedule", sub: "Get in touch directly" },
							].map(({ href, label, sub }) => (
								<Link
									key={href}
									href={href}
									className="group p-4 bg-[#F8F6F3] rounded-xl border border-gray-100 hover:border-[#2D5A3D] transition-colors"
								>
									<p className="text-sm font-bold text-[#1F2E2B] group-hover:text-[#2D5A3D] transition-colors">{label}</p>
									<p className="text-xs text-gray-400 mt-0.5">{sub}</p>
									<p className="text-xs font-black text-[#FFB800] uppercase tracking-widest mt-2">Read →</p>
								</Link>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	);
}
