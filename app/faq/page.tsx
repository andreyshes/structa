import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, DollarSign, MapPin } from "lucide-react";

const faqs = [
	{
		category: "Cost & Pricing",
		icon: DollarSign,
		questions: [
			{
				q: "How much does a handyman cost in Clark County, WA?",
				a: "For single tasks, most handyman jobs in Clark County run $150–$350. A half-day (4 hours, multiple tasks) is typically $300–$600, and a full day runs $550–$1,000. Norbilt gives you a flat price before we start — no hourly surprises.",
			},
			{
				q: "How much does drywall repair cost in Vancouver, WA?",
				a: "A small hole patch (under 6\") runs $150–$300. Medium damage (6\"–12\") is $250–$450. A full wall repair or skim coat for a room is $800–$2,000 depending on size. Texture matching is included in every quote.",
			},
			{
				q: "How much does a bathroom remodel cost in Clark County?",
				a: "A cosmetic refresh (new fixtures, caulking, paint) runs $800–$2,500. A mid-range update with new tile, vanity, and lighting is $3,000–$7,000. A full remodel with demo, new tile floor, shower surround, and all fixtures is $8,000–$18,000. High-end custom work starts at $18,000+.",
			},
			{
				q: "How much does flooring installation cost near Vancouver, WA?",
				a: "LVP (luxury vinyl plank) installation runs $3–$6 per square foot installed. Hardwood flooring is $6–$12 per square foot installed, depending on species and pattern. Most living rooms run $1,500–$4,500 total.",
			},
			{
				q: "Do you charge for estimates?",
				a: "No. Norbilt provides free on-site estimates for all Clark County homeowners. We walk the job, assess what's needed, and give you a clear written price before any work starts. You know the cost before we touch anything.",
			},
			{
				q: "Do you give a price upfront or charge by the hour?",
				a: "We price by the job, not the hour. You get a flat written quote before work begins. We've completed 250+ projects across Clark County this way — no open-ended invoices, no surprises at the end.",
			},
		],
	},
	{
		category: "Licensing & Insurance",
		icon: ShieldCheck,
		questions: [
			{
				q: "Is Norbilt a licensed contractor in Washington State?",
				a: "Yes. Norbilt is a licensed, bonded, and insured general contractor in Washington State. Our WA contractor license number is NORBIR**741CS. We carry general liability insurance on every job.",
				verifyLink: "https://secure.lni.wa.gov/verify/",
				verifyText: "Verify our license at Washington State L&I →",
			},
			{
				q: "Why does licensing matter for home repair in WA?",
				a: "Washington State requires a contractor's license for repair work above $500. An unlicensed person doing electrical-adjacent, plumbing-adjacent, or structural work puts your home insurance at risk — if something goes wrong, your insurer can deny the claim. Norbilt is licensed for every job we take.",
			},
			{
				q: "What's the difference between a handyman and a licensed general contractor?",
				a: "In Washington, an unlicensed handyman is legally limited to jobs under $500. A licensed general contractor like Norbilt can legally handle larger repairs, remodels, and any work that requires permits. We do jobs that unlicensed handymen legally can't.",
			},
			{
				q: "Are you insured if something gets damaged during the job?",
				a: "Yes. Norbilt carries general liability insurance. If we damage your home during a project, you're covered. We can provide a certificate of insurance upon request before any work begins.",
			},
		],
	},
	{
		category: "Service Area",
		icon: MapPin,
		questions: [
			{
				q: "What cities do you serve in Clark County?",
				a: "We serve all of Clark County, WA — including Vancouver, Camas, Ridgefield, Battle Ground, Washougal, Brush Prairie, Felida, Hazel Dell, Salmon Creek, Five Corners, Orchards, Mill Plain, and Lake Shore. If you're in Clark County, we come to you.",
			},
			{
				q: "Do you serve Battle Ground, WA?",
				a: "Yes. Battle Ground is one of our most active service areas. We do drywall repair, handyman work, finish carpentry, flooring, and bathroom updates in Battle Ground regularly. Free estimates available for all Battle Ground homeowners.",
			},
			{
				q: "Do you work in Camas, WA?",
				a: "Yes. Norbilt serves Camas homeowners with the same licensed, bonded service as our Vancouver clients. We handle kitchen updates, tile work, trim carpentry, and general repairs across Camas and Washougal.",
			},
			{
				q: "Do you work in Brush Prairie or Ridgefield?",
				a: "Yes to both. Brush Prairie and Ridgefield are active service areas. We've done bathroom remodels, flooring installs, and handyman jobs throughout North Clark County. Free estimates for both areas.",
			},
		],
	},
	{
		category: "Process & What to Expect",
		icon: ArrowRight,
		questions: [
			{
				q: "How does the estimate process work?",
				a: "You contact us, we schedule a free walkthrough at your home, assess the scope, and send you a written quote — usually within 24 hours. Once you approve, we schedule the work. No deposits until the quote is accepted, and no payment in full until the job is done.",
			},
			{
				q: "How long do most jobs take?",
				a: "Small handyman tasks take a few hours. Drywall repairs typically take 1–2 days (including dry time). Bathroom remodels run 3–10 days depending on scope. Flooring for a living room or bedroom is usually 1–2 days. We give you a timeline at the estimate so you can plan around it.",
			},
			{
				q: "Do I need to be home during the work?",
				a: "For the estimate, yes. For the actual work, it depends on the project — many clients give us a key or code. We treat your home with respect and clean up at the end of every work day.",
			},
			{
				q: "What if the project scope changes mid-job?",
				a: "We tell you immediately. If we open a wall and find water damage or unexpected conditions, we stop, show you what we found, and get your approval before doing any additional work. No surprise charges added to the final invoice.",
			},
			{
				q: "Do you pull permits for remodel work?",
				a: "For work that requires a permit in Clark County — structural changes, certain electrical or plumbing-adjacent work — yes, we handle permit pulling as part of the project. We'll tell you upfront if a permit is required and factor it into the quote.",
			},
		],
	},
];

export default function FAQPage() {
	const allFaqs = faqs.flatMap((cat) =>
		cat.questions.map((q) => ({ ...q }))
	);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: allFaqs.map((item) => ({
							"@type": "Question",
							name: item.q,
							acceptedAnswer: { "@type": "Answer", text: item.a },
						})),
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
								Straight Answers
							</span>
							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								Frequently Asked <br />
								<span className="text-[#FFB800]">Questions</span>
							</h1>
							<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								Real answers on cost, licensing, and process — from a licensed Clark County contractor who's completed 250+ local projects.
							</p>
						</div>
					</div>
				</section>

				{/* NARRATIVE FACTS BAR */}
				<section className="py-8 bg-[#FFB800]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
						<div>
							<p className="text-2xl font-black text-black">250+</p>
							<p className="text-xs font-black uppercase tracking-widest text-black/70">Clark County Projects</p>
						</div>
						<div>
							<p className="text-2xl font-black text-black">$0</p>
							<p className="text-xs font-black uppercase tracking-widest text-black/70">Cost for Your Estimate</p>
						</div>
						<div>
							<p className="text-2xl font-black text-black">Licensed</p>
							<p className="text-xs font-black uppercase tracking-widest text-black/70">WA Contractor #NORBIR**741CS</p>
						</div>
						<div>
							<p className="text-2xl font-black text-black">Flat Rate</p>
							<p className="text-xs font-black uppercase tracking-widest text-black/70">You Know the Price Before We Start</p>
						</div>
					</div>
				</section>

				{/* FAQ CATEGORIES */}
				{faqs.map((cat, catIdx) => {
					const Icon = cat.icon;
					return (
						<section
							key={cat.category}
							className={`py-20 ${catIdx % 2 === 0 ? "bg-white" : "bg-[#F8F6F3]"}`}
						>
							<div className="max-w-4xl mx-auto px-6 lg:px-8">
								<div className="flex items-center gap-4 mb-10">
									<div className="w-12 h-12 bg-[#FFB800] rounded-2xl flex items-center justify-center shrink-0">
										<Icon className="w-6 h-6 text-black" />
									</div>
									<h2 className="text-2xl md:text-3xl font-black text-[#1F2E2B] uppercase tracking-tighter">
										{cat.category}
									</h2>
								</div>
								<div className="space-y-6">
									{cat.questions.map((item) => (
										<div
											key={item.q}
											className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
										>
											<h3 className="text-lg font-black text-[#1F2E2B] mb-3 leading-snug">
												{item.q}
											</h3>
											<p className="text-gray-600 leading-relaxed">{item.a}</p>
											{item.verifyLink && (
												<a
													href={item.verifyLink}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block mt-3 text-sm font-bold text-[#2D5A3D] hover:text-[#FFB800] transition-colors"
												>
													{item.verifyText}
												</a>
											)}
										</div>
									))}
								</div>
							</div>
						</section>
					);
				})}

				{/* CTA */}
				<section className="py-24 bg-[#1F2E2B]">
					<div className="max-w-4xl mx-auto px-6 text-center space-y-6">
						<h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
							Still Have Questions?
						</h2>
						<p className="text-[#A7C4B5] text-lg max-w-2xl mx-auto">
							Every job is different. Contact us and we'll walk your home, assess the scope, and give you a clear written price — free, no obligation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
							<Link
								href="/contact"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-xl hover:scale-105 transition-all"
							>
								Get Free Estimate
								<ArrowRight className="w-5 h-5" />
							</Link>
							<Link
								href="tel:+19165086272"
								className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
							>
								<Phone className="w-5 h-5" />
								(916) 508-6272
							</Link>
						</div>
						<div className="pt-6 flex flex-wrap justify-center gap-4 text-sm">
							<Link href="/pricing" className="text-[#A7C4B5] hover:text-[#FFB800] font-bold transition-colors">
								View Full Pricing Guide →
							</Link>
							<Link href="/services" className="text-[#A7C4B5] hover:text-[#FFB800] font-bold transition-colors">
								Browse All Services →
							</Link>
							<Link href="/reviews" className="text-[#A7C4B5] hover:text-[#FFB800] font-bold transition-colors">
								Read Customer Reviews →
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
