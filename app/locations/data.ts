export interface CityData {
	name: string;
	description: string;
	neighborhoods: string[];
}

export interface ServiceData {
	title: string;
	description: string;
	features: string[];
}

export const locationsData: Record<string, CityData> = {
	vancouver: {
		name: "Vancouver, WA",
		description:
			"Our central hub for professional home repair and precision finish carpentry in the heart of Clark County.",
		neighborhoods: ["Downtown", "Uptown", "Cascade Park", "Fishers Landing"],
	},
	camas: {
		name: "Camas, WA",
		description:
			"High-end interior improvements and detail-focused repairs for Camas and Prune Hill homeowners.",
		neighborhoods: ["Prune Hill", "Deer Creek", "Grass Valley", "Fern Prairie"],
	},
	ridgefield: {
		name: "Ridgefield, WA",
		description:
			"Expert trim installation and modernization services for the rapidly growing Ridgefield community.",
		neighborhoods: ["Union Ridge", "Bellwood", "Hillhurst"],
	},
	"battle-ground": {
		name: "Battle Ground, WA",
		description:
			"Reliable handyman services and licensed interior renovations for residential properties in North County.",
		neighborhoods: ["Daybreak", "Cherry Grove", "Lewisville"],
	},
	washougal: {
		name: "Washougal, WA",
		description:
			"Professional structural maintenance and interior updates for the Gateway to the Gorge.",
		neighborhoods: ["Downtown Washougal", "River's Edge", "Lookout Ridge"],
	},
	"brush-prairie": {
		name: "Brush Prairie, WA",
		description:
			"Full-service interior improvements and custom carpentry for acreage estates and local homes.",
		neighborhoods: ["Hockinson", "Meadow Glade", "Curtin Creek"],
	},
	felida: {
		name: "Felida, WA",
		description:
			"Detail-oriented home improvements and fixture installations for the Felida community.",
		neighborhoods: ["Felida Overlook", "Lakeshore Park", "Erickson Farms"],
	},
	"hazel-dell": {
		name: "Hazel Dell, WA",
		description:
			"Trusted local repairs and bathroom fixture upgrades across Hazel Dell North and South.",
		neighborhoods: ["Starcrest", "Northeast Hazel Dell", "West Hazel Dell"],
	},
	"salmon-creek": {
		name: "Salmon Creek, WA",
		description:
			"Quality drywall matching and interior painting prep for Salmon Creek residential properties.",
		neighborhoods: ["Mount Vista", "Salmon Creek Estates", "Clineline"],
	},
	"five-corners": {
		name: "Five Corners, WA",
		description:
			"Dependable interior carpentry and handyman solutions for the Five Corners area.",
		neighborhoods: ["Sunnyside", "Covington", "Orchards"],
	},
	orchards: {
		name: "Orchards, WA",
		description:
			"Efficient home maintenance and door/window casing repairs in the Orchards neighborhood.",
		neighborhoods: ["Burnt Bridge Creek", "Sifton", "Heritage"],
	},
	"mill-plain": {
		name: "Mill Plain, WA",
		description:
			"Modernizing Mill Plain interiors with custom trim and flooring transition updates.",
		neighborhoods: ["Cimarron", "Landover", "Bennington"],
	},
	"lake-shore": {
		name: "Lake Shore, WA",
		description:
			"Specialized interior repairs and carpentry for the Lake Shore and Vancouver Lake area.",
		neighborhoods: ["Lakeview Heights", "Lakeshore Dr", "Northwest Lake Shore"],
	},
};

export const servicesData: Record<string, ServiceData> = {
	"handyman-services": {
		title: "Handyman Services",
		description:
			"Professional, reliable home repair solutions for local homeowners. No job is too small for our expert team.",
		features: [
			"General Home Repairs",
			"Fixture Installation",
			"Maintenance Tasks",
			"Furniture Assembly",
		],
	},
	"drywall-repair": {
		title: "Drywall Repair",
		description:
			"Seamless hole patching and texture matching that makes your walls look brand new again.",
		features: [
			"Patching & Sanding",
			"Texture Matching",
			"Stress Crack Repair",
			"Water Damage Fixes",
		],
	},
	"finish-carpentry": {
		title: "Finish Carpentry",
		description:
			"Precision trim work, baseboards, and crown molding that adds a touch of elegance to every room.",
		features: [
			"Crown Molding",
			"Baseboard Install",
			"Wainscoting",
			"Door & Window Casing",
		],
	},
	"door-window-repair": {
		title: "Door & Window Repair",
		description:
			"Expert adjustments and repairs to ensure your doors and windows operate smoothly and securely.",
		features: [
			"Door Realignment",
			"Weather Stripping",
			"Hardware Replacement",
			"Window Screen Repair",
		],
	},
	"flooring-repair-interior-updates": {
		title: "Flooring Repair & Interior Updates",
		description:
			"Modernizing your home's interior with flooring fixes and aesthetic upgrades that increase value.",
		features: [
			"Flooring Transitions",
			"Minor Tile Repair",
			"Baseboard Updates",
			"Interior Paint Prep",
		],
	},
	"kitchen-bathroom-updates": {
		title: "Kitchen & Bathroom Updates",
		description:
			"Refreshing your most used spaces with modern fixtures, hardware, and surface updates.",
		features: [
			"Cabinet Hardware",
			"Faucet Installation",
			"Caulking & Grout",
			"Backsplash Refreshes",
		],
	},
};
