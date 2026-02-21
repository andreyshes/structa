import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Lock,
	Settings2,
	Wind,
	Maximize,
	MapPin,
} from "lucide-react";

export const metadata = {
	title:
		"Door & Window Repair Vancouver WA | Alignments & Trim | Norbilt Homes",
	description:
		"Expert door and window repairs in Vancouver, WA. We fix sticking doors, misaligned latches, window casing damage, and hardware issues across Clark County.",
};

const solutions = [
	{
		title: "Precision Realignment",
		desc: "Correcting sagging hinges and settling frames so your doors swing smoothly and latch securely.",
		icon: Settings2,
	},
	{
		title: "Draft & Seal Repair",
		desc: "Replacing worn weatherstripping and adjusting trim to keep the Pacific Northwest dampness out.",
		icon: Wind,
	},
	{
		title: "Hardware Upgrades",
		desc: "Professional installation of smart locks, handlesets, and window cranks for better security.",
		icon: Lock,
	},
	{
		title: "Finish Carpentry",
		desc: "Repairing or replacing damaged window casings, sills, and door decorative trim.",
		icon: Maximize,
	},
];

export default function VancouverDoorWindowPage() {
	return (
		<div className="overflow-hidden bg-[#F8F6F3]">
			{/* --- HERO SECTION --- */}
			<section className="relative pt-40 pb-32 flex items-center justify-center text-center bg-[#2C3E3A]">
				<Image
					src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=1200&auto=format&fit=crop&q=80"
					alt="Professional door installation and alignment in Vancouver WA"
					fill
					priority
					className="object-cover opacity-35"
				/>
				<div className="relative z-10 max-w-4xl px-6">
					<span className="text-[#4A7C59] font-bold tracking-widest uppercase text-sm mb-4 block">
						Vancouver's Door & Window Specialists
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Seamless Function. <br />
						<span className="text-[#4A7C59]">Superior Seals.</span>
					</h1>
					<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
						Stop fighting with sticking doors and drafty windows. We provide
						precision adjustments and carpentry for a home that works perfectly.
					</p>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition-all shadow-xl hover:shadow-2xl"
					>
						Request My Estimate
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</section>

			{/* --- VALUE PROPOSITION --- */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2C3E3A]">
							Fixing More Than Just a{" "}
							<span className="text-[#2D5A3D]">Stuck Door.</span>
						</h2>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							When a door sticks or a window won't close tight, it's usually a
							symptom of Vancouver’s seasonal shifts. These small annoyances
							lead to increased energy bills and compromised home security.
						</p>
						<p className="text-lg text-[#2C3E3A]/70 leading-relaxed">
							At **Norbilt Homes**, we don't just plane down your doors; we
							address the underlying hinge issues, frame alignment, and casing
							integrity to ensure a long-term fix.
						</p>

						<div className="grid grid-cols-2 gap-4 py-4">
							<div className="flex items-center gap-2 text-[#2C3E3A] font-medium">
								<div className="w-2 h-2 rounded-full bg-[#2D5A3D]" /> Smooth
								Operation
							</div>
							<div className="flex items-center gap-2 text-[#2C3E3A] font-medium">
								<div className="w-2 h-2 rounded-full bg-[#2D5A3D]" /> Energy
								Efficiency
							</div>
							<div className="flex items-center gap-2 text-[#2C3E3A] font-medium">
								<div className="w-2 h-2 rounded-full bg-[#2D5A3D]" /> Enhanced
								Security
							</div>
							<div className="flex items-center gap-2 text-[#2C3E3A] font-medium">
								<div className="w-2 h-2 rounded-full bg-[#2D5A3D]" /> Expert
								Finish
							</div>
						</div>
					</div>

					<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
						<Image
							src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&auto=format&fit=crop&q=60"
							alt="Close up of high quality door hardware and wood finish"
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
							Precision Services
						</h2>
						<p className="text-[#2C3E3A]/60">
							Professional repairs for homes in Felida, Salmon Creek, and Camas.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{solutions.map((item, idx) => (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-[#2D5A3D]/20 transition-all"
							>
								<item.icon className="w-10 h-10 text-[#2D5A3D] mb-6" />
								<h3 className="text-lg font-bold mb-3">{item.title}</h3>
								<p className="text-sm text-[#2C3E3A]/70 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* --- TECHNICAL DIAGRAM PLACEHOLDER --- */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="mt-4 text-sm text-[#2C3E3A]/50 italic text-center">
						We address every component of your door’s anatomy, from the strike
						plate to the top hinge.
					</p>
				</div>
			</section>

			{/* --- SERVICE AREAS --- */}
			<section className="py-20 bg-[#F8F6F3] border-y border-[#E8E4DE]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-[#2C3E3A]">
						<MapPin className="text-[#2D5A3D]" /> Local Clark County Experts
					</h2>
					<div className="flex flex-wrap justify-center gap-6 text-[#2C3E3A]/70 font-medium">
						{[
							"Vancouver",
							"Hazel Dell",
							"Salmon Creek",
							"Five Corners",
							"Felida",
							"Orchards",
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
					<h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
						Is it time to fix that sticking door?
					</h2>
					<p className="text-xl text-white/70 mb-10">
						Professional window and door repairs delivered with clean job sites
						and expert craftsmanship.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 px-10 py-5 bg-[#2D5A3D] text-white rounded-xl hover:bg-[#4A7C59] transition shadow-2xl font-bold text-lg"
					>
						Get My Free Estimate
						<ArrowRight className="w-5 h-5" />
					</Link>
				</div>
			</section>
		</div>
	);
}
