import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Grid,
	Paintbrush,
	ShieldCheck,
	Eraser,
	CheckCircle,
	Droplets,
	MapPin,
} from "lucide-react";

export const metadata = {
	title: "Drywall Repair Salmon Creek WA | Texture Matching Specialists",
	description:
		"Professional drywall patching and texture matching in Salmon Creek, WA. Expert repair for water damage, cracks, and holes in 98686 and 98685.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-drywall-repair",
	},
};

export default function SalmonCreekDrywallPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Problem/Solution Oriented */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://media.istockphoto.com/id/1339784330/photo/application-of-plaster-on-the-wall-with-a-comb.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1Jo0XuWJnrg3a2aqdASyslgzxIOP-6INjhnj6BbtGs="
					alt="Professional drywall patching and sanding in a Salmon Creek home"
					fill
					priority
					className="object-cover opacity-30"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white text-center">
					<span className="text-[#A5D6A7] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
						Invisible Repairs • 98686
					</span>
					<h1 className="text-4xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">
						Salmon Creek <br />{" "}
						<span className="text-[#A5D6A7]">Drywall Repair</span>
					</h1>
					<p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
						From plumbing "access holes" to stress cracks, we make water damage
						and holes disappear with expert texture matching.
					</p>
					<div className="flex flex-col items-center gap-4">
						<Link
							href="/contact"
							className="px-10 py-5 bg-[#2D5A3D] hover:bg-[#3d7a52] transition-all rounded-xl font-bold flex items-center gap-2 shadow-2xl"
						>
							Get a Patch Quote <ArrowRight className="w-5 h-5" />
						</Link>
						<p className="flex items-center gap-2 text-sm text-white/60">
							<MapPin className="w-4 h-4" /> Near WSU Vancouver & Legacy Medical
							Center
						</p>
					</div>
				</div>
			</section>

			{/* Texture Matching Section - High SEO Keyword Density */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-[#2C3E3A] mb-6">
								Flawless Texture Matching for Salmon Creek Homes
							</h2>
							<p className="mb-6 text-lg text-[#2C3E3A]/70 leading-relaxed">
								Nothing ruins a room like a "visible" patch. Most homes in the
								**Salmon Creek and Felida** area utilize specific textures. We
								specialize in replicating these patterns so your repair is truly
								invisible.
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
								{[
									{ title: "Orange Peel", icon: Grid },
									{ title: "Knockdown", icon: Paintbrush },
									{ title: "Smooth Finish", icon: Eraser },
									{ title: "Water Damage", icon: Droplets },
								].map((item) => (
									<div
										key={item.title}
										className="flex items-center gap-3 p-4 bg-[#F8F6F3] rounded-lg"
									>
										<item.icon className="w-5 h-5 text-[#2D5A3D]" />
										<span className="font-bold text-[#2C3E3A]">
											{item.title}
										</span>
									</div>
								))}
							</div>
						</div>
						<div className="bg-[#2C3E3A] p-8 md:p-12 rounded-3xl text-white">
							<h3 className="text-2xl font-bold mb-6 text-[#A5D6A7]">
								Common Repairs We Handle:
							</h3>
							<ul className="space-y-4">
								{[
									"Stress cracks above door frames",
									"Plumbing leak ceiling repairs",
									"Doorknob holes (wall damage)",
									"Popcorn ceiling removal & re-texture",
									"Nail pop corrections",
									"Garage drywall fire-tape and repair",
								].map((text) => (
									<li key={text} className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-[#A5D6A7] mt-1 flex-shrink-0" />
										<span>{text}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Local Authority Section */}
			<section className="py-12 bg-[#F8F6F3] border-t border-gray-200">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-xl font-bold text-[#2C3E3A] mb-4">
						Dust-Conscious Service in Clark County
					</h2>
					<p className="text-gray-600">
						We know you live in your home. That’s why we use high-grade HEPA
						filtration and plastic screening on every Salmon Creek project to
						ensure your 98686 home stays as clean as we found it.
					</p>
				</div>
			</section>
		</div>
	);
}
