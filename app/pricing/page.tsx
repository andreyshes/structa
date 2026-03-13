import Link from "next/link";
import {
	ArrowRight,
	Phone,
	CheckCircle2,
	Wrench,
	Hammer,
	Paintbrush,
	Home,
	Lightbulb,
	Construction,
	ShieldCheck,
	Info,
} from "lucide-react";

const services = [
	{
		icon: Wrench,
		name: "Handyman Services",
		href: "/services/handyman",
		description: "General repairs, TV mounting, furniture assembly, and more.",
		items: [
			{ task: "Single task (under 2 hrs)", range: "$150 – $350" },
			{ task: "Half day (4 hrs, multiple tasks)", range: "$300 – $600" },
			{ task: "Full day (8 hrs, multiple tasks)", range: "$550 – $1,000" },
			{ task: "TV mounting", range: "$100 – $200" },
			{ task: "Ceiling fan install (existing wiring)", range: "$150 – $300" },
			{ task: "Caulking / weatherstripping", range: "$100 – $250" },
		],
	},
	{
		icon: Paintbrush,
		name: "Drywall Repair",
		href: "/services/drywall-repair",
		description: "Patch, texture match, and restore walls to like-new condition.",
		items: [
			{ task: "Small hole (under 6\")", range: "$150 – $300" },
			{ task: "Medium patch (6\"–12\")", range: "$250 – $500" },
			{ task: "Large section repair", range: "$400 – $800" },
			{ task: "Water damage repair", range: "$500 – $1,500" },
			{ task: "Full room skim coat", range: "$800 – $2,000" },
		],
	},
	{
		icon: Hammer,
		name: "Finish Carpentry",
		href: "/services/finish-carpentry",
		description: "Baseboards, crown molding, wainscoting, and interior trim.",
		items: [
			{ task: "Baseboard install (per linear ft)", range: "$4 – $8 installed" },
			{ task: "Crown molding (per linear ft)", range: "$6 – $12 installed" },
			{ task: "Single room trim package", range: "$800 – $2,500" },
			{ task: "Wainscoting (per room)", range: "$1,200 – $3,500" },
			{ task: "Door / window casing (per opening)", range: "$150 – $350" },
		],
	},
	{
		icon: Paintbrush,
		name: "Kitchen & Bath Updates",
		href: "/services/kitchen-bath",
		description: "Tile, vanity, backsplash, fixtures, and full bathroom remodels.",
		items: [
			{ task: "Cosmetic refresh (fixtures, caulk, hardware)", range: "$800 – $2,500" },
			{ task: "Mid-range update (tile, vanity, lighting)", range: "$3,000 – $7,000" },
			{ task: "Full bathroom remodel", range: "$8,000 – $18,000" },
			{ task: "Backsplash install", range: "$400 – $1,200" },
			{ task: "Vanity swap (no plumbing move)", range: "$350 – $900" },
			{ task: "Faucet / sink install", range: "$150 – $400" },
		],
	},
	{
		icon: Home,
		name: "Door & Window",
		href: "/services/door-window",
		description: "Installation, repair, and weatherproofing for doors and windows.",
		items: [
			{ task: "Door adjustment / rehang", range: "$150 – $300" },
			{ task: "Interior door install", range: "$250 – $450" },
			{ task: "Exterior door install", range: "$400 – $800" },
			{ task: "Window repair / re-seal", range: "$150 – $350" },
			{ task: "Weatherstripping (per door)", range: "$80 – $200" },
		],
	},
	{
		icon: Construction,
		name: "Flooring",
		href: "/services/flooring",
		description: "LVP, hardwood, tile, and subfloor repairs.",
		items: [
			{ task: "Subfloor patch / repair", range: "$300 – $800" },
			{ task: "LVP / hardwood install (per sq ft)", range: "$4 – $8 installed" },
			{ task: "Tile floor install (per sq ft)", range: "$6 – $12 installed" },
			{ task: "Floor transition strips", range: "$100 – $250" },
			{ task: "Wood rot repair", range: "$300 – $1,200" },
		],
	},
	{
		icon: Lightbulb,
		name: "Lighting & Fixtures",
		href: "/services/lighting",
		description: "Ceiling fans, recessed lighting, and fixture upgrades.",
		items: [
			{ task: "Light fixture swap", range: "$100 – $200" },
			{ task: "Ceiling fan install (existing wiring)", range: "$150 – $300" },
			{ task: "Recessed light (per fixture)", range: "$150 – $250" },
			{ task: "Under-cabinet lighting", range: "$200 – $500" },
		],
	},
];

const costFactors = [
	{
		title: "Project Scope",
		body: "A single fixture swap takes an hour. A full bathroom remodel takes days. Scope is the biggest driver of cost.",
	},
	{
		title: "Material Choice",
		body: "We install what you supply, or we can source materials. Premium tile, custom cabinets, and name-brand fixtures cost more than builder-grade alternatives.",
	},
	{
		title: "Existing Conditions",
		body: "Older Clark County homes sometimes have water damage, non-standard framing, or outdated wiring that adds to the work. We always flag this before we start.",
	},
	{
		title: "Access & Prep",
		body: "High ceilings, tight spaces, and jobs requiring significant furniture moving take more time and affect the final price.",
	},
];

export default function PricingPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "How much does a handyman cost in Vancouver WA?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Handyman services in Vancouver WA typically run $150–$350 for a single task under 2 hours, $300–$600 for a half day, and $550–$1,000 for a full day of work. Norbilt provides free estimates before any work begins.",
								},
							},
							{
								"@type": "Question",
								name: "How much does a bathroom remodel cost in Clark County WA?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "A cosmetic bathroom refresh in Clark County runs $800–$2,500. A mid-range update with tile, vanity, and lighting runs $3,000–$7,000. A full bathroom remodel typically costs $8,000–$18,000 depending on scope and materials.",
								},
							},
							{
								"@type": "Question",
								name: "How much does drywall repair cost in Vancouver WA?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Small drywall hole repairs in Vancouver WA cost $150–$300. Medium patches run $250–$500. Larger section repairs or water damage remediation can range from $400–$1,500 depending on extent.",
								},
							},
							{
								"@type": "Question",
								name: "Does Norbilt offer free estimates?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Yes. Norbilt provides free, no-obligation estimates for all projects across Clark County WA. We visit your home, assess the scope, and provide a clear written quote before any work begins.",
								},
							},
						],
					}),
				}}
			/>

			<div className="overflow-hidden bg-[#FDFCFB]">
				{/* HERO */}
				<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#14201D] overflow-hidden">
					<div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F2E2B] -skew-x-12 translate-x-1/4 z-0 opacity-50" />
					<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
						<div className="max-w-4xl space-y-6">
							<span className="px-4 py-1 bg-[#FFB800] text-black text-xs font-black uppercase tracking-widest rounded">
								Transparent Pricing
							</span>
							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								What Home Repairs <br />
								<span className="text-[#FFB800]">Actually Cost</span>
							</h1>
							<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								Real price ranges for every service we offer across Clark
								County, WA. No runaround, no mystery — just honest numbers so
								you can plan your project with confidence.
							</p>
						</div>
					</div>
				</section>

				{/* TRUST BAR */}
				<section className="py-8 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
					<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
						{[
							"Free written estimates",
							"No surprise charges",
							"Licensed & bonded",
							"Fixed-price quotes",
						].map((item) => (
							<div key={item} className="flex items-center gap-2">
								<CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
								<span className="text-white font-black text-xs uppercase tracking-widest">
									{item}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* DISCLAIMER */}
				<section className="py-8 bg-[#F8F6F3] border-b border-gray-200">
					<div className="max-w-4xl mx-auto px-6 flex gap-3 items-start">
						<Info className="w-5 h-5 text-[#2D5A3D] shrink-0 mt-0.5" />
						<p className="text-sm text-gray-600 leading-relaxed">
							<strong>These are ranges, not fixed rates.</strong> Every project
							is different. Final price depends on scope, materials, and
							existing conditions. We provide a free written quote before any
							work begins — so there are no surprises on the invoice.
						</p>
					</div>
				</section>

				{/* PRICING TABLES */}
				<section className="py-24 bg-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
						{services.map((service) => (
							<div
								key={service.name}
								className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
							>
								{/* Header */}
								<div className="bg-[#1F2E2B] px-8 py-6 flex items-center justify-between flex-wrap gap-4">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center shrink-0">
											<service.icon className="w-6 h-6 text-black" />
										</div>
										<div>
											<h2 className="text-xl font-black text-white uppercase tracking-tight">
												{service.name}
											</h2>
											<p className="text-[#A7C4B5] text-sm">
												{service.description}
											</p>
										</div>
									</div>
									<Link
										href={service.href}
										className="text-[#FFB800] text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
									>
										Service Details <ArrowRight className="w-4 h-4" />
									</Link>
								</div>

								{/* Price rows */}
								<div className="divide-y divide-gray-50">
									{service.items.map((item, i) => (
										<div
											key={item.task}
											className={`flex items-center justify-between gap-4 px-8 py-5 ${i % 2 === 0 ? "bg-white" : "bg-[#FDFCFB]"}`}
										>
											<p className="font-medium text-[#1F2E2B]">{item.task}</p>
											<span className="text-[#2D5A3D] font-black text-lg whitespace-nowrap">
												{item.range}
											</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* WHAT AFFECTS COST */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-16 space-y-4">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Good to Know
							</span>
							<h2 className="text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								What Affects Your Final Price
							</h2>
						</div>
						<div className="grid md:grid-cols-2 gap-8">
							{costFactors.map((factor) => (
								<div
									key={factor.title}
									className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex gap-5"
								>
									<CheckCircle2 className="w-6 h-6 text-[#FFB800] shrink-0 mt-1" />
									<div>
										<h3 className="font-black text-[#1F2E2B] text-lg uppercase tracking-tight mb-2">
											{factor.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">{factor.body}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* HOW WE QUOTE */}
				<section className="py-24 bg-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-20">
							<div className="grid lg:grid-cols-2 gap-16 items-center">
								<div className="space-y-6">
									<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
										Our Process
									</span>
									<h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
										How We Quote Your Project
									</h2>
									<p className="text-[#A7C4B5] text-lg leading-relaxed">
										We don't quote over the phone without seeing the work. Most
										"estimates" that turn into surprise invoices start with a
										contractor who never visited the job. We visit, assess, and
										give you a written number before any work begins.
									</p>
									<Link
										href="/contact"
										className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all"
									>
										Schedule Free Estimate
										<ArrowRight className="w-5 h-5" />
									</Link>
								</div>
								<div className="space-y-6">
									{[
										{
											step: "01",
											title: "You contact us",
											body: "Call, text, or submit the form. Tell us what needs fixing.",
										},
										{
											step: "02",
											title: "We visit your home",
											body: "We assess the actual scope in person. No guessing, no phone-only quotes.",
										},
										{
											step: "03",
											title: "You get a written quote",
											body: "A clear, fixed-price number before we touch anything. What we quote is what you pay.",
										},
									].map((item) => (
										<div key={item.step} className="flex gap-5">
											<span className="text-4xl font-black text-[#FFB800]/30 leading-none shrink-0 w-12">
												{item.step}
											</span>
											<div>
												<h3 className="font-black text-white uppercase text-sm tracking-widest mb-1">
													{item.title}
												</h3>
												<p className="text-[#A7C4B5] text-sm leading-relaxed">
													{item.body}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-24 bg-[#FFB800]">
					<div className="max-w-3xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none">
							Ready for Your Free Quote?
						</h2>
						<p className="text-black/70 text-lg font-medium max-w-xl mx-auto">
							We serve homeowners across Vancouver, Battle Ground, Camas,
							Ridgefield, Felida, and all of Clark County. Free estimates,
							written quotes, no surprises.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
						<div className="flex flex-wrap justify-center gap-6 pt-2 text-sm font-bold text-black/60 uppercase tracking-widest">
							<span className="flex items-center gap-2">
								<ShieldCheck className="w-4 h-4" /> Licensed & Bonded
							</span>
							<span className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4" /> Written Quotes
							</span>
							<span className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4" /> No Surprise Charges
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
