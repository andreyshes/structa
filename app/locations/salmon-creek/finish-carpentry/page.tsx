import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Ruler,
	Award,
	Home,
	Scissors,
	CheckCircle,
	MapPin,
} from "lucide-react";

export const metadata = {
	title: "Finish Carpentry Salmon Creek WA | Custom Trim & Millwork 98686",
	description:
		"Precision finish carpentry in Salmon Creek, WA. Specializing in crown molding, wainscoting, door casing, and custom accent walls in Clark County.",
	alternates: {
		canonical: "https://norbilt.com/locations/salmon-creek-finish-carpentry",
	},
};

export default function SalmonCreekFinishCarpentryPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* Hero Section - Highlighting Craftsmanship & Location */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1503387762-592dea58ef23?w=1200&auto=format&fit=crop&q=80"
					alt="Precision finish carpentry and crown molding installation in Salmon Creek WA"
					fill
					priority
					className="object-cover opacity-30"
				/>
				<div className="relative z-10 max-w-4xl px-6 text-white">
					<div className="flex items-center justify-center gap-2 mb-6 text-[#A5D6A7]">
						<Award className="w-5 h-5" />
						<span className="uppercase tracking-[0.2em] text-sm font-bold">
							Master-Grade Millwork
						</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
						Salmon Creek <br />{" "}
						<span className="text-[#A5D6A7]">Finish Carpentry</span>
					</h1>
					<p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
						Elevate your home’s character with clean lines and expert millwork
						near **WSU Vancouver and Salmon Creek Park.**
					</p>
					<div className="flex flex-col items-center gap-4">
						<Link
							href="/contact"
							className="px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#3d7a52] transition-all font-bold flex items-center gap-2 shadow-2xl"
						>
							Start Your Trim Project <ArrowRight className="w-5 h-5" />
						</Link>
						<span className="text-white/60 text-sm flex items-center gap-1">
							<MapPin className="w-4 h-4" /> Serving 98686, 98685, and Felida
						</span>
					</div>
				</div>
			</section>

			{/* Specialty Services Section - Key for Keyword Indexing */}

			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A] mb-6 leading-tight">
							Architectural Details Built to Last
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 mb-8 leading-relaxed">
							Whether you are updating a **Craftsman in the 98686 area** or
							adding modern flair to a new build near **Mt. Vista**, our finish
							carpentry services define the interior aesthetic of your home.
						</p>

						<ul className="space-y-4">
							{[
								{
									title: "Crown Molding",
									detail:
										"Traditional and modern profiles for all ceiling heights.",
								},
								{
									title: "Custom Accent Walls",
									detail:
										"Shiplap, board and batten, and geometric wainscoting.",
								},
								{
									title: "Door & Window Casing",
									detail: "Precision-mitered frames that eliminate gaps.",
								},
								{
									title: "Baseboard Upgrades",
									detail: "High-profile 5-7 inch baseboards for a luxury feel.",
								},
							].map((item, idx) => (
								<li key={idx} className="flex gap-4">
									<CheckCircle className="text-[#2D5A3D] w-6 h-6 flex-shrink-0" />
									<div>
										<h3 className="font-bold text-[#2C3E3A]">{item.title}</h3>
										<p className="text-sm text-[#2C3E3A]/60">{item.detail}</p>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
						<Image
							src="https://media.istockphoto.com/id/2210454103/photo/a-minimalistic-unfurnished-interior-with-a-cozy-armchair-side-table-and-potted-plant-in-front.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zz1xzY_dhWZ7zkxYC_LCBKMSeO8eisj3x8MInBBK24E="
							alt="Custom shiplap accent wall and crown molding in Salmon Creek home"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Localized Bottom Banner */}
			<section className="py-16 bg-[#2C3E3A] text-center text-white">
				<div className="max-w-4xl mx-auto px-6">
					<h2 className="text-2xl font-bold mb-4">
						Salmon Creek's Trusted Trim Experts
					</h2>
					<p className="text-white/70 mb-8">
						From the historic charm of older Vancouver neighborhoods to the
						custom estates in **Salmon Creek**, we provide the precision your
						project deserves.
					</p>
					<div className="flex justify-center gap-12 opacity-80 grayscale invert">
						<Ruler className="w-8 h-8" />
						<Scissors className="w-8 h-8" />
						<Home className="w-8 h-8" />
					</div>
				</div>
			</section>
		</div>
	);
}
