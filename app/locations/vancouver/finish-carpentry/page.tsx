import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, Award, Home, Scissors, MapPin } from "lucide-react";

export const metadata = {
	title:
		"Finish Carpentry & Trim Vancouver WA | Custom Millwork | Norbilt Homes",
	description:
		"Elevate your home with precision finish carpentry in Vancouver, WA. Specializing in baseboards, crown molding, window casing, and custom trim detailing across Clark County.",
};

const woodworkServices = [
	{
		title: "Baseboards & Shoe Molding",
		desc: "Clean, crisp lines that ground your rooms and hide flooring transitions perfectly.",
		icon: Ruler,
	},
	{
		title: "Crown Molding",
		desc: "Elegant ceiling transitions that add height, character, and luxury to any living space.",
		icon: Award,
	},
	{
		title: "Casing & Aprons",
		desc: "Framing your doors and windows with custom profiles that match your home's unique style.",
		icon: Home,
	},
	{
		title: "Precision Mitering",
		desc: "Tight joints and seamless corners that only come from professional-grade carpentry.",
		icon: Scissors,
	},
];

export default function VancouverFinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* --- HERO SECTION --- */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<div className="relative z-10 max-w-4xl px-6 text-white">
					<span className="text-[#4A7C59] font-bold tracking-widest uppercase text-sm mb-4 block">
						Vancouver's Premier Trim Specialists
					</span>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						The Art of the <br />
						<span className="text-[#4A7C59]">Perfect Finish.</span>
					</h1>
					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
						Elevate your interior with precision millwork, elegant crown
						molding, and custom trim designed to stand the test of time.
					</p>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-xl hover:shadow-2xl"
					>
						Start Your Transformation
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* --- QUALITY SPOTLIGHT --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-8">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A]">
							Small Details.{" "}
							<span className="text-[#2D5A3D]">Significant Impact.</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Nothing signals a quality home like well-executed finish
							carpentry. In Vancouver, where custom homes set the standard,
							Norbilt Homes brings that same "builder-grade excellence" to your
							interior updates.
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Whether you are updating outdated 1990s honey-oak trim to modern
							craftsman profiles or adding crown molding to a master suite in
							**Salmon Creek** or **Felida**, we focus on the tolerances that
							matter—tight miters, seamless caulking, and perfect levels.
						</p>

						<div className="bg-white p-6 rounded-2xl border-l-4 border-[#2D5A3D] shadow-sm italic text-[#2C3E3A]/80">
							"We don't just install wood; we sculpt the boundaries of your
							rooms."
						</div>
					</div>

					<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="https://media.istockphoto.com/id/178023791/photo/contractor-cutting-new-baseboard-for-renovation.jpg?s=612x612&w=0&k=20&c=sgjQb_IumAUhGOLFmrnY1S5IQVd2phQlYQ_ZoAyKT4s="
							alt="Close up of a perfect miter joint on window casing"
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
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-4">
							Our Carpentry Expertise
						</h2>
						<p className="text-[#2C3E3A]/60">
							Serving Camas, Hazel Dell, and the greater Vancouver area.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{woodworkServices.map((service, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[#2D5A3D]/20"
							>
								<service.icon className="w-10 h-10 text-[#2D5A3D] mb-6" />
								<h3 className="text-lg font-bold mb-3 text-[#2C3E3A]">
									{service.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{service.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- DIAGRAM / VISUAL AID --- */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h3 className="text-xl font-semibold mb-6">Interior Trim Anatomy</h3>

					<p className="mt-4 text-sm text-[#2C3E3A]/50 italic">
						Choosing the right profile is key. We help you select trim that
						matches your home’s architectural DNA.
					</p>
				</div>
			</section>

			{/* --- SERVICE AREAS --- */}
			<section className="py-20 bg-[#F8F6F3] border-y border-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-[#2C3E3A]">
						<MapPin className="text-[#2D5A3D]" /> Clark County Service Area
					</h2>
					<div className="flex flex-wrap justify-center gap-6 text-[#2C3E3A]/70 font-medium">
						{[
							"Vancouver",
							"Hazel Dell",
							"Camas",
							"Washougal",
							"Salmon Creek",
							"Ridgefield",
						].map((area) => (
							<span
								key={area}
								className="hover:text-[#2D5A3D] transition-colors"
							>
								{area}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* --- FINAL CTA --- */}
			<section className="py-28 bg-[#2C3E3A] text-center text-white">
				<div className="max-w-3xl mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
						Ready to upgrade your home's detail?
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Professional trim installation and finish carpentry delivered with
						the precision of a custom home builder.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-2xl font-bold text-lg"
					>
						Get Your Free Estimate
						<ArrowRight className="w-6 h-6" />
					</Link>
				</div>
			</section>
		</div>
	);
}
