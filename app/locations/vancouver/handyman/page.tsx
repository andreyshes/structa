import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CheckCircle,
	ShieldCheck,
	Hammer,
	Clock,
	MapPin,
} from "lucide-react";

export const metadata = {
	title:
		"Expert Handyman Services Vancouver WA | Licensed & Insured | Norbilt Homes",
	description:
		"Professional Vancouver WA handyman services specializing in drywall repair, trim work, door adjustments, and home maintenance. Serving Clark County, Hazel Dell, and Salmon Creek.",
};

const services = [
	{
		title: "Drywall & Paint",
		desc: "Expert patching, texture matching, and minor wall repairs.",
	},
	{
		title: "Doors & Windows",
		desc: "Hardware replacement, alignment, and weather stripping.",
	},
	{
		title: "Trim & Finish",
		desc: "Baseboard repair, crown molding, and detail carpentry.",
	},
	{
		title: "Fixture Installs",
		desc: "Modernizing lighting, fans, and bathroom hardware.",
	},
	{
		title: "Punch Lists",
		desc: "Tackling that 'to-do' list before selling or moving in.",
	},
	{
		title: "General Repairs",
		desc: "Small-scale carpentry and interior maintenance fixes.",
	},
];

const features = [
	{ icon: ShieldCheck, text: "Fully Licensed & Insured in WA" },
	{ icon: Hammer, text: "Detail-Driven Craftsmanship" },
	{ icon: Clock, text: "Reliable Timelines & Communication" },
	{ icon: MapPin, text: "Deep Roots in Vancouver, WA" },
];

export default function VancouverHandymanPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3] text-[#2C3E3A]">
			{/* --- HERO SECTION --- */}
			<section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
				<Image
					src="https://images.unsplash.com/photo-1615974679600-665fb9468c4f?w=1200&auto=format&fit=crop&q=80"
					alt="Professional handyman providing home repairs in Vancouver WA"
					fill
					priority
					className="object-cover scale-105 animate-subtle-zoom"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

				<div className="relative z-10 max-w-5xl px-6 text-center text-white">
					<span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-widest uppercase bg-[#2D5A3D]/80 backdrop-blur-sm rounded-full">
						Trusted Clark County Repairs
					</span>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
						Vancouver WA <span className="text-[#4A7C59]">Handyman</span>{" "}
						Services
					</h1>
					<p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
						Professional home repairs and interior maintenance handled with the
						precision of a custom home builder.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/contact"
							className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all shadow-xl hover:shadow-2xl"
						>
							Get My Free Estimate
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
						<a
							href="tel:#"
							className="text-white font-medium hover:underline underline-offset-4"
						>
							Or call: (916) 508-6272
						</a>
					</div>
				</div>
			</section>

			{/* --- TRUST BAR --- */}
			<section className="py-12 bg-white border-y border-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{features.map((f, i) => (
							<div key={i} className="flex items-center gap-3">
								<f.icon className="w-6 h-6 text-[#2D5A3D] shrink-0" />
								<span className="text-sm md:text-base font-semibold text-[#2C3E3A]">
									{f.text}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- INTRO & CORE VALUES --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold leading-tight">
							Small Projects Handled with <br />
							<span className="text-[#2D5A3D]">Big Standards.</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							At Norbilt Homes, we believe no job is too small for professional
							excellence. We fill the gap between the DIY enthusiast and the
							massive remodeling firm—providing Vancouver homeowners with a
							reliable partner for those nagging repairs.
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Whether you are in <strong>Hazel Dell</strong>,{" "}
							<strong>Salmon Creek</strong>, or <strong>Felida</strong>, we
							arrive on time, keep the job site spotless, and communicate
							clearly from the first quote to the final walkthrough.
						</p>
					</div>
					<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=60"
							alt="Modern clean home interior repair"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* --- SERVICES GRID --- */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							What We Can Help With
						</h2>
						<p className="text-[#2C3E3A]/70">
							Professional solutions for every corner of your home.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service) => (
							<div
								key={service.title}
								className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-[#2D5A3D]/20"
							>
								<CheckCircle className="w-8 h-8 text-[#2D5A3D] mb-4 group-hover:scale-110 transition-transform" />
								<h3 className="text-xl font-bold mb-2">{service.title}</h3>
								<p className="text-[#2C3E3A]/70">{service.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- LOCAL SEO SECTION --- */}
			<section className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8">
						Serving All of Clark County
					</h2>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#2C3E3A]/60 font-medium">
						{[
							"Vancouver",
							"Hazel Dell",
							"Salmon Creek",
							"Felida",
							"Five Corners",
							"Orchards",
							"Camas",
							"Ridgefield",
						].map((area) => (
							<span key={area} className="flex items-center gap-2">
								<MapPin className="w-4 h-4 text-[#2D5A3D]" /> {area}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* --- FINAL CTA --- */}
			<section className="relative py-28 bg-[#2C3E3A] overflow-hidden">
				<div className="absolute top-0 right-0 w-64 h-64 bg-[#2D5A3D] blur-[120px] opacity-20" />
				<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						{" "}
						Ready to Cross It Off Your List?
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Get a clear, professional estimate for your Vancouver home repair
						project today.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-xl font-bold text-lg"
					>
						Request a Free Estimate
						<ArrowRight className="w-6 h-6" />
					</Link>
				</div>
			</section>
		</div>
	);
}
