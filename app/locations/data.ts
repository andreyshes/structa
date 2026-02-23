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
			"We provide expert home repairs and precision carpentry in Vancouver. Our team is the top choice for quality work in Clark County.",
		neighborhoods: ["Downtown", "Uptown", "Cascade Park", "Fishers Landing"],
	},
	camas: {
		name: "Camas, WA",
		description:
			"Norbilt offers high-end interior updates and repairs for Camas homes. We focus on quality results for every Prune Hill homeowner.",
		neighborhoods: ["Prune Hill", "Deer Creek", "Grass Valley", "Fern Prairie"],
	},
	ridgefield: {
		name: "Ridgefield, WA",
		description:
			"We install expert trim and modern interior updates in Ridgefield. Trust our team for professional service in this growing community.",
		neighborhoods: ["Union Ridge", "Bellwood", "Hillhurst"],
	},
	"battle-ground": {
		name: "Battle Ground, WA",
		description:
			"Get reliable handyman services and licensed renovations in Battle Ground. We help maintain and upgrade your North County home.",
		neighborhoods: ["Daybreak", "Cherry Grove", "Lewisville"],
	},
	washougal: {
		name: "Washougal, WA",
		description:
			"Norbilt provides home maintenance and interior updates in Washougal. We serve as the expert choice for your local property needs.",
		neighborhoods: ["Downtown Washougal", "River's Edge", "Lookout Ridge"],
	},
	"brush-prairie": {
		name: "Brush Prairie, WA",
		description:
			"We offer custom carpentry and interior improvements in Brush Prairie. Our team works on both local homes and large acreage estates.",
		neighborhoods: ["Hockinson", "Meadow Glade", "Curtin Creek"],
	},
	felida: {
		name: "Felida, WA",
		description:
			"Norbilt delivers detail-oriented home improvements in Felida. We handle fixture installs and professional updates for your home.",
		neighborhoods: ["Felida Overlook", "Lakeshore Park", "Erickson Farms"],
	},
	"hazel-dell": {
		name: "Hazel Dell, WA",
		description:
			"We provide trusted repairs and bathroom updates in Hazel Dell. Count on our local team for fast and reliable home service.",
		neighborhoods: ["Starcrest", "Northeast Hazel Dell", "West Hazel Dell"],
	},
	"salmon-creek": {
		name: "Salmon Creek, WA",
		description:
			"Norbilt offers drywall matching and interior painting prep in Salmon Creek. We ensure your home looks great with quality finishes.",
		neighborhoods: ["Mount Vista", "Salmon Creek Estates", "Clineline"],
	},
	"five-corners": {
		name: "Five Corners, WA",
		description:
			"We offer dependable carpentry and handyman solutions in Five Corners. Our experts handle small fixes and larger interior tasks.",
		neighborhoods: ["Sunnyside", "Covington", "Orchards"],
	},
	orchards: {
		name: "Orchards, WA",
		description:
			"Norbilt provides efficient home maintenance and repairs in Orchards. We specialize in door and window casing for local houses.",
		neighborhoods: ["Burnt Bridge Creek", "Sifton", "Heritage"],
	},
	"mill-plain": {
		name: "Mill Plain, WA",
		description:
			"Modernize your Mill Plain home with custom trim and flooring updates. Our team delivers professional interior results you will love.",
		neighborhoods: ["Cimarron", "Landover", "Bennington"],
	},
	"lake-shore": {
		name: "Lake Shore, WA",
		description:
			"We provide specialized interior repairs and carpentry in Lake Shore. Our experts help maintain beautiful homes near Vancouver Lake.",
		neighborhoods: ["Lakeview Heights", "Lakeshore Dr", "Northwest Lake Shore"],
	},
};

export const servicesData: Record<string, ServiceData> = {
	"handyman": {
		title: "Handyman Services",
		description:
			"We offer reliable home repair solutions for local owners. No job is too small for our expert team of professionals.",
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
			"We provide seamless hole patching and texture matching. Our team makes your home walls look brand new again.",
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
			"Get precision trim work and crown molding for your home. We add a touch of elegance to every room in your house.",
		features: [
			"Crown Molding",
			"Baseboard Install",
			"Wainscoting",
			"Door & Window Casing",
		],
	},
	"door-window": {
		title: "Door & Window Repair",
		description:
			"Our team handles repairs to keep your doors and windows secure. We ensure everything operates smoothly and correctly.",
		features: [
			"Door Realignment",
			"Weather Stripping",
			"Hardware Replacement",
			"Window Screen Repair",
		],
	},
	"flooring": {
		title: "Flooring Repair & Interior Updates",
		description:
			"Modernize your interior with flooring fixes and updates. We offer upgrades that increase the value of your local home.",
		features: [
			"Flooring Transitions",
			"Minor Tile Repair",
			"Baseboard Updates",
			"Interior Paint Prep",
		],
	},
	"kitchen-bath": {
		title: "Kitchen & Bathroom Updates",
		description:
			"Refresh your kitchen and bathroom with modern fixtures. We update hardware and surfaces to give your space a new look.",
		features: [
			"Cabinet Hardware",
			"Faucet Installation",
			"Caulking & Grout",
			"Backsplash Refreshes",
		],
	},
};
