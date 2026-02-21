import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Paintbrush,
	ShieldCheck,
	Eraser,
	MapPin,
	CircleCheck,
	Grid,
} from "lucide-react";

export const metadata = {
	title:
		"Drywall Repair Vancouver WA | Texture Matching & Patching | Norbilt Homes",
	description:
		"Seamless drywall repair in Vancouver, WA. We specialize in texture matching, crack repair, and water damage restoration across Hazel Dell, Salmon Creek, and Clark County.",
};

const drywallSolutions = [
	{
		title: "Seamless Patching",
		desc: "From doorknob holes to plumbing access cuts, we make holes disappear with feathered edges.",
		icon: Eraser,
	},
	{
		title: "Texture Matching",
		desc: "Expert application of Orange Peel, Knockdown, or Smooth finishes to match your existing walls.",
		icon: Grid,
	},
	{
		title: "Crack & Settling Repair",
		desc: "Addressing stress cracks and nail pops caused by the Pacific Northwest's seasonal soil movement.",
		icon: ShieldCheck,
	},
	{
		title: "Water Damage Restoration",
		desc: "Removing damaged material, treating for moisture, and restoring your walls to like-new condition.",
		icon: Paintbrush,
	},
];

export default function VancouverDrywallPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* --- HERO SECTION --- */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://media.istockphoto.com/id/1339784330/photo/application-of-plaster-on-the-wall-with-a-comb.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1Jo0XuWJnrg3a2aqdASyslgzxIOP-6INjhnj6BbtGs="
					alt="Professional drywall patching and texture application in Vancouver"
					fill
					priority
					className="object-cover opacity-30"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white">
					<span className="text-[#4A7C59] font-bold tracking-widest uppercase text-sm mb-4 block">
						Vancouver's Texture Matching Experts
					</span>
					<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						Flawless Walls. <br />
						<span className="text-[#4A7C59]">Invisible Repairs.</span>
					</h1>
					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
						Don't let cracks or holes distract from your home's beauty. We
						specialize in seamless repairs that blend perfectly with your
						original finish.
					</p>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-xl"
					>
						Get a Free Patch Quote
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* --- THE TEXTURE CHALLENGE --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
						<Image
							src="https://images.unsplash.com/photo-1733431774078-692252a6605e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJ5d2FsbHxlbnwwfHwwfHx8MA%3D%3D"
							alt="Handyman applying joint compound to a drywall patch"
							fill
							className="object-cover"
						/>
					</div>
					<div className="space-y-8 order-1 lg:order-2">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A]">
							The Secret is in the{" "}
							<span className="text-[#2D5A3D]">Blending.</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							Anyone can slap mud on a wall, but matching a 20-year-old "orange
							peel" or "knockdown" texture requires an artistic eye. Vancouver
							homes often settle due to our damp winters, resulting in unsightly
							ceiling cracks and corner bead separation.
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							At **Norbilt Homes**, we use a multi-step sanding and blending
							process to ensure that once the paint is on, you’ll forget the
							damage was ever there.
						</p>

						<div className="space-y-4">
							<div className="flex items-center gap-3 text-[#2C3E3A] font-semibold">
								<CircleCheck /> Clean & Dust-Conscious Workspaces
							</div>
							<div className="flex items-center gap-3 text-[#2C3E3A] font-semibold">
								<CircleCheck /> Precision Texture Replication
							</div>
							<div className="flex items-center gap-3 text-[#2C3E3A] font-semibold">
								<CircleCheck /> Moisture-Resistant Solutions
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* --- SERVICES GRID --- */}
			<section className="py-24 bg-[#E8E4DE]">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-4">
							Drywall & Plaster Solutions
						</h2>
						<p className="text-[#2C3E3A]/60">
							Reliable repairs for Salmon Creek, Hazel Dell, and Five Corners.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{drywallSolutions.map((solution, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-[#2D5A3D]/20"
							>
								<solution.icon className="w-10 h-10 text-[#2D5A3D] mb-6" />
								<h3 className="text-lg font-bold mb-3 text-[#2C3E3A]">
									{solution.title}
								</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{solution.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- VISUAL TEXTURE GUIDE --- */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h3 className="text-2xl font-bold mb-6">Common Textures We Match</h3>

					<p className="mt-6 text-[#2C3E3A]/60 max-w-2xl mx-auto italic">
						Whether your home has a modern level-5 smooth finish or a
						traditional heavy knockdown, we have the tools to replicate it
						exactly.
					</p>
				</div>
			</section>

			{/* --- SERVICE AREAS --- */}
			<section className="py-20 bg-[#F8F6F3] border-y border-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-[#2C3E3A]">
						<MapPin className="text-[#2D5A3D]" /> Serving the Vancouver Metro
					</h2>
					<div className="flex flex-wrap justify-center gap-6 text-[#2C3E3A]/70 font-medium">
						{[
							"Brush Prairie",
							"Vancouver",
							"Orchards",
							"Salmon Creek",
							"Hazel Dell",
							"Felida",
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
						Ready to make those cracks disappear?
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Professional drywall patching and texture matching starting with a
						free, clear estimate.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-2xl font-bold text-lg"
					>
						Request a Free Estimate
						<ArrowRight className="w-6 h-6" />
					</Link>
				</div>
			</section>
		</div>
	);
}
