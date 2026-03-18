import Link from "next/link";
import {
	Star,
	MapPin,
	ArrowRight,
	Phone,
	CheckCircle2,
	Quote,
} from "lucide-react";

const reviews = [
	{
		quote:
			"We had a positive experience with Norbilt here in Vancouver, WA. I worked with Andrey, who was courteous, professional, efficient, and delivered high-quality work in a timely manner. It's hard to find reliable help these days, and I truly appreciated his attention to detail and expertise.",
		name: "M. Taylor",
		location: "Vancouver, WA",
		service: "Home Repairs",
		rating: 5,
	},
	{
		quote:
			"I hired Norbilt to stain my fence at my home in Vancouver, WA and they did an excellent job. Communication was clear, they showed up on time, and the quality of the work really shows. The stain came out even, clean, and professional — it completely refreshed the look of our yard.",
		name: "Angelo",
		location: "Vancouver, WA",
		service: "Fence Staining",
		rating: 5,
	},
	{
		quote:
			"Norbilt was awesome to work with. They transformed my outdated bathroom to something modern and I love it! Great company to work with and I am in love with my bathroom once again.",
		name: "David",
		location: "Vancouver, WA",
		service: "Bathroom Remodel",
		rating: 5,
	},
	{
		quote:
			"They did an excellent job installing my flooring — professional, efficient, and the final result looks amazing. The quality of work and attention to detail really stood out. Highly recommend them for any home projects!",
		name: "Mike",
		location: "Vancouver, WA",
		service: "Flooring Installation",
		rating: 5,
	},
	{
		quote:
			"NorBilt did a great job on my flooring and baseboards in Battle Ground, WA. The work was clean, precise, and finished on time. Everything looks solid and professionally done. Definitely recommend them for quality remodeling work.",
		name: "David B.",
		location: "Battle Ground, WA",
		service: "Flooring & Baseboards",
		rating: 5,
	},
	{
		quote:
			"Andrey and his team did an excellent job installing a mini split system. There was a mix up with the material that I ordered and Andrey handled the situation professionally with grace and patience. He communicated every step of the way, was timely and pleasant to work with. I highly recommend Andrey and will definitely work with him again.",
		name: "Dawn Trano",
		location: "Vancouver, WA",
		service: "Mini Split Installation",
		rating: 5,
	},
	{
		quote:
			"I had a great experience working with Andrey and his company, NORBILT, here in Vancouver, WA. The interior painting job they did on my home turned out even better than I expected. Andrey was professional, easy to communicate with, and paid close attention to detail throughout the entire process. The quality of the work really shows! Clean lines, smooth finishes, and everything was done on time.",
		name: "Emmanuel K.",
		location: "Vancouver, WA",
		service: "Interior Painting",
		rating: 5,
	},
	{
		quote:
			"Norbilt did a great job on flooring project. Andrey was professional, efficient, and made sure everything was installed perfectly. The floors look amazing and completely transformed the space. Very happy with the quality of work and would definitely recommend them.",
		name: "Roman K.",
		location: "Vancouver, WA",
		service: "Flooring Installation",
		rating: 5,
	},
	{
		quote:
			"NorBilt did a great job installing doors and windows in my Camas home. Andrey was professional, detail-oriented, and made sure everything was done right. The quality of work really shows — highly recommend!",
		name: "Joey D.",
		location: "Camas, WA",
		service: "Doors & Windows",
		rating: 5,
	},
	{
		quote:
			"I couldn't hold back on leaving a review, gotta say I am impressed with their professionalism! Came in, did the job and left a clean site always! I will recommend them to everyone!",
		name: "Dennis",
		location: "Vancouver, WA",
		service: "Home Repairs",
		rating: 5,
	},
	{
		quote:
			"Great experience with Norbilt. Andrey and his team were professional, easy to work with, and delivered high-quality work. Everything was smooth from start to finish. Highly recommend!",
		name: "Sam Y.",
		location: "Vancouver, WA",
		service: "Home Repairs",
		rating: 5,
	},
	{
		quote:
			"Norbilt has built me my dream bathroom. Andrey was quick to respond to me whenever I had any questions and was very respectful and pleasant to work with. Couldn't have been more happy with the experience!",
		name: "Ruvim C.",
		location: "Vancouver, WA",
		service: "Bathroom Remodel",
		rating: 5,
	},
	{
		quote:
			"Did really great job for my tiles in my bathroom came there did a quick and quality job highly recommend.",
		name: "Moses",
		location: "Vancouver, WA",
		service: "Bathroom Tile",
		rating: 5,
	},
	{
		quote:
			"I had a great experience working with Norbilt on my remodeling project. From start to finish, their team was professional, detail-oriented, and easy to communicate with. Andrey was especially helpful throughout the process — he made sure everything stayed on track and met my expectations. The quality of work really shows, and the final result turned out even better than I imagined.",
		name: "Taylor K.",
		location: "Vancouver, WA",
		service: "Remodeling",
		rating: 5,
	},
	{
		quote:
			"Andre, did a great job! He's very good at listening to the customer, he cares about making sure he gets it done, also he came on time and did with short notice from me the customer. Excellent service, I highly recommend him for any work needed. Five stars!",
		name: "Susan",
		location: "Vancouver, WA",
		service: "Home Repairs",
		rating: 5,
	},
];

const stats = [
	{ value: "5.0", label: "Average Rating" },
	{ value: "50+", label: "Projects Completed" },
	{ value: "5+", label: "Years Serving Clark County" },
	{ value: "100%", label: "Licensed & Bonded" },
];

const serviceAreas = [
	{ name: "Vancouver", slug: "vancouver" },
	{ name: "Battle Ground", slug: "battle-ground" },
	{ name: "Camas", slug: "camas" },
	{ name: "Felida", slug: "felida" },
	{ name: "Ridgefield", slug: "ridgefield" },
	{ name: "Brush Prairie", slug: "brush-prairie" },
	{ name: "Washougal", slug: "washougal" },
	{ name: "Salmon Creek", slug: "salmon-creek" },
];

export default function ReviewsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "LocalBusiness",
						"@id": "https://norbilt.com",
						name: "Norbilt Homes",
						review: reviews.map((r) => ({
							"@type": "Review",
							author: { "@type": "Person", name: r.name },
							reviewRating: {
								"@type": "Rating",
								ratingValue: r.rating,
								bestRating: "5",
							},
							reviewBody: r.quote,
							
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
								Customer Reviews
							</span>
							<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter uppercase">
								What Clark County <br />
								<span className="text-[#FFB800]">Homeowners Say</span>
							</h1>
							<p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium border-l-4 border-[#FFB800] pl-6">
								Real feedback from real customers across Vancouver, Battle
								Ground, Camas, Felida, and all of Clark County, WA.
							</p>
						</div>
					</div>
				</section>

				{/* STATS */}
				<section className="py-12 bg-[#1F2E2B] border-y-4 border-[#FFB800]/20">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
							{stats.map((stat) => (
								<div key={stat.label} className="text-center">
									<p className="text-4xl font-black text-[#FFB800] mb-1">
										{stat.value}
									</p>
									<p className="text-[#A7C4B5] text-xs font-bold uppercase tracking-widest">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* REVIEWS GRID */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="text-center mb-16 space-y-4">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Verified Reviews
							</span>
							<h2 className="text-4xl md:text-5xl font-black text-[#1F2E2B] uppercase tracking-tighter">
								Trusted by Local Homeowners
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto text-lg">
								Every review is from a real homeowner across Clark County. We
								take pride in every project, regardless of size.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{reviews.map((review, i) => (
								<div
									key={i}
									className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FFB800]/30 transition-all duration-300 flex flex-col gap-6"
								>
									<div className="flex items-start justify-between">
										<div className="flex gap-1">
											{[...Array(review.rating)].map((_, j) => (
												<Star
													key={j}
													className="w-5 h-5 fill-[#FFB800] text-[#FFB800]"
												/>
											))}
										</div>
										<span className="text-[10px] font-black uppercase tracking-widest text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1 rounded-full">
											{review.service}
										</span>
									</div>

									<Quote className="w-8 h-8 text-[#FFB800]/30" />

									<p className="text-gray-700 leading-relaxed text-lg italic flex-1">
										&ldquo;{review.quote}&rdquo;
									</p>

									<div className="flex items-center gap-3 pt-4 border-t border-gray-100">
										<div className="w-10 h-10 rounded-full bg-[#1F2E2B] flex items-center justify-center text-white font-black text-sm">
											{review.name[0]}
										</div>
										<div>
											<p className="font-black text-[#1F2E2B]">{review.name}</p>
											<p className="text-sm text-gray-500 flex items-center gap-1">
												<MapPin className="w-3 h-3" />
												{review.location}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* LEAVE A REVIEW CTA */}
				<section className="py-24 bg-white">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="bg-[#1F2E2B] rounded-[3rem] p-12 lg:p-20 text-center">
							<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
								Had Work Done?
							</span>
							<h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-4 mb-6">
								Leave Us a Review
							</h2>
							<p className="text-[#A7C4B5] text-lg max-w-2xl mx-auto mb-10">
								If Norbilt worked on your home in Vancouver, Battle Ground,
								Camas, Felida, Ridgefield, or anywhere in Clark County — we'd
								love to hear about it. Your review helps other local homeowners
								find trusted help.
							</p>
							<a
								href="https://g.page/r/CVvJsm11DrccEBM/review"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-10 py-5 bg-[#FFB800] text-black font-black uppercase tracking-widest rounded-xl shadow-2xl hover:scale-105 transition-all"
							>
								<Star className="w-5 h-5 fill-black" />
								Review Us on Google
								<ArrowRight className="w-5 h-5" />
							</a>
						</div>
					</div>
				</section>

				{/* SERVICE AREAS */}
				<section className="py-24 bg-[#F8F6F3]">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
						<span className="text-[#FFB800] font-black uppercase tracking-[0.3em] text-sm">
							Where We Work
						</span>
						<h2 className="text-3xl md:text-4xl font-black text-[#1F2E2B] uppercase tracking-tighter mt-4 mb-4">
							Serving All of Clark County
						</h2>
						<p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
							We serve homeowners across Southwest Washington. Click your city
							to see what we offer in your area.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							{serviceAreas.map((city) => (
								<Link
									key={city.slug}
									href={`/locations/${city.slug}`}
									className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:border-[#2D5A3D] hover:text-[#2D5A3D] transition-colors duration-300"
								>
									<MapPin className="w-4 h-4" />
									{city.name}, WA
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* BOTTOM CTA */}
				<section className="py-24 bg-[#FFB800]">
					<div className="max-w-4xl mx-auto px-6 text-center space-y-8">
						<h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter leading-none">
							Ready to Get Started?
						</h2>
						<p className="text-black/70 text-xl font-medium max-w-xl mx-auto">
							Join dozens of Clark County homeowners who trust Norbilt for
							quality repairs and remodeling.
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
						<div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-bold text-black/60 uppercase tracking-widest">
							<span className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4" /> Licensed & Bonded
							</span>
							<span className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4" /> Free Estimates
							</span>
							<span className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4" /> Clark County Based
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
