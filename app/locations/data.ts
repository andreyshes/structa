export interface CityData {
	name: string;
	description: string;
	neighborhoods: string[];
}

export interface ServiceData {
	title: string;
	description: string;
	process: string;
	features: string[];
}

export const locationsData: Record<string, CityData> = {
	vancouver: {
		name: "Vancouver, WA",
		description:
			"We provide expert home repairs and precision carpentry across Vancouver, WA. Vancouver's housing stock ranges from mid-century craftsman homes near downtown to newer construction in Cascade Park and Fishers Landing — each with different repair and update needs. Our team knows local building styles and common issues, from settlement cracks in older drywall to trim gaps in newer builds. We serve all Vancouver neighborhoods with written estimates before any work begins.",
		neighborhoods: ["Downtown", "Uptown", "Cascade Park", "Fishers Landing"],
	},
	camas: {
		name: "Camas, WA",
		description:
			"Norbilt offers high-end interior updates and repairs for Camas homeowners. Camas homes tend to be well-kept and owner-occupied, with many featuring detailed finish carpentry, tile work, and fixtures that deserve a careful touch. Our team works on both established Prune Hill homes and newer builds near Grass Valley. We bring the same licensed, insured standard to every Camas project, regardless of size.",
		neighborhoods: ["Prune Hill", "Deer Creek", "Grass Valley", "Fern Prairie"],
	},
	ridgefield: {
		name: "Ridgefield, WA",
		description:
			"We install expert trim work and modern interior updates in Ridgefield, WA. Ridgefield has grown rapidly over the past decade, with many newer homes in Union Ridge and Bellwood that need finish carpentry completed or updated. Our team also works on older properties in the original Ridgefield townsite where repairs and refreshes are common. We provide free estimates and complete every job with a clean site.",
		neighborhoods: ["Union Ridge", "Bellwood", "Hillhurst"],
	},
	"battle-ground": {
		name: "Battle Ground, WA",
		description:
			"Norbilt provides reliable handyman services and licensed renovations in Battle Ground, WA. North Clark County homes in Daybreak and Cherry Grove vary widely in age and style, from acreage properties on larger lots to newer subdivision homes. Our team handles both small maintenance tasks and larger interior projects throughout Battle Ground. We are one of the most active licensed contractors in this area.",
		neighborhoods: ["Daybreak", "Cherry Grove", "Lewisville"],
	},
	washougal: {
		name: "Washougal, WA",
		description:
			"Norbilt provides home maintenance and interior updates for Washougal homeowners. Washougal properties range from older river-area homes near downtown to newer construction along Lookout Ridge with mountain views. Many homes here have original fixtures and trim that benefit from updates or replacement. Our team works throughout Washougal and the surrounding Camas–Washougal corridor with the same licensed, insured standard.",
		neighborhoods: ["Downtown Washougal", "River's Edge", "Lookout Ridge"],
	},
	"brush-prairie": {
		name: "Brush Prairie, WA",
		description:
			"We offer custom carpentry and interior improvements in Brush Prairie, WA. Brush Prairie is home to a mix of acreage estates, Hockinson-area properties, and newer planned subdivisions — each requiring a different level of finish work and maintenance. Our team is comfortable working on large properties with high-end trim expectations as well as straightforward repairs on everyday homes. Free estimates for all Brush Prairie homeowners.",
		neighborhoods: ["Hockinson", "Meadow Glade", "Curtin Creek"],
	},
	felida: {
		name: "Felida, WA",
		description:
			"Norbilt delivers detail-oriented home improvements in Felida, WA. Felida is one of Clark County's more established residential communities, with many homes built in the 1980s and 1990s that are now due for fixture updates, trim refreshes, and interior repairs. Our team handles everything from caulking and hardware replacement to full room updates. We bring professional results to every Felida home we work in.",
		neighborhoods: ["Felida Overlook", "Lakeshore Park", "Erickson Farms"],
	},
	"hazel-dell": {
		name: "Hazel Dell, WA",
		description:
			"We provide trusted home repairs and bathroom updates in Hazel Dell, WA. Hazel Dell's housing stock includes many mid-century homes and 1970s–80s builds where original fixtures, drywall, and carpentry are showing age. Our team handles these updates quickly and cleanly, restoring walls, replacing fixtures, and refreshing tired spaces. We serve all Hazel Dell neighborhoods and provide same-week estimates for most jobs.",
		neighborhoods: ["Starcrest", "Northeast Hazel Dell", "West Hazel Dell"],
	},
	"salmon-creek": {
		name: "Salmon Creek, WA",
		description:
			"Norbilt offers drywall repair, interior finishing, and home updates in Salmon Creek, WA. Salmon Creek has a wide range of home ages and styles, from 1990s developments near Mount Vista to newer construction along the Salmon Creek corridor. Our team matches textures precisely, installs clean trim work, and keeps every project on schedule. We serve all Salmon Creek neighborhoods with free, no-obligation estimates.",
		neighborhoods: ["Mount Vista", "Salmon Creek Estates", "Clineline"],
	},
	"five-corners": {
		name: "Five Corners, WA",
		description:
			"We offer dependable carpentry and handyman solutions in Five Corners, WA. Five Corners sits at the center of several established Vancouver neighborhoods, with homes spanning multiple decades and a wide range of repair and update needs. Our team handles everything from small fixture swaps to multi-room interior projects. We work efficiently, price by the job, and leave every home cleaner than we found it.",
		neighborhoods: ["Sunnyside", "Covington", "Orchards"],
	},
	orchards: {
		name: "Orchards, WA",
		description:
			"Norbilt provides efficient home maintenance and interior repairs in Orchards, WA. The Orchards area includes many 1970s and 1980s homes along Burnt Bridge Creek and Sifton where drywall, trim, doors, and fixtures are due for updates. Our team is familiar with these home styles and the most common issues they develop over time. We provide fast, licensed service for Orchards homeowners at honest flat-rate prices.",
		neighborhoods: ["Burnt Bridge Creek", "Sifton", "Heritage"],
	},
	"mill-plain": {
		name: "Mill Plain, WA",
		description:
			"Modernize your Mill Plain home with custom trim, flooring updates, and interior repairs from Norbilt. Mill Plain is one of Vancouver's busiest residential corridors, with homes ranging from early 2000s builds to recent new construction in Cimarron and Landover. Whether you need a quick maintenance fix or a room-level interior update, our team delivers clean, professional results. Free estimates for all Mill Plain homeowners.",
		neighborhoods: ["Cimarron", "Landover", "Bennington"],
	},
	"lake-shore": {
		name: "Lake Shore, WA",
		description:
			"We provide specialized interior repairs and finish carpentry in Lake Shore, WA. Homes near Vancouver Lake and Lakeshore Drive tend to be well-established, with older construction that benefits from trim updates, fixture replacements, and drywall repairs. Our team works carefully in these homes and respects the existing character of each property. We serve all Lake Shore neighborhoods with licensed, insured service and free written estimates.",
		neighborhoods: ["Lakeview Heights", "Lakeshore Dr", "Northwest Lake Shore"],
	},
};

export const servicesData: Record<string, ServiceData> = {
	"handyman": {
		title: "Handyman Services",
		description:
			"Our team handles the to-do list that piles up over time — fixing doors that stick, installing ceiling fans, patching walls, hanging shelves, and swapping out dated fixtures. As a licensed general contractor, we work faster and cleaner than a typical handyman, and we can legally take on jobs that unlicensed handymen in Washington State cannot. We price by the job, not the hour, so you know the full cost before we start.",
		process:
			"We start with a walkthrough of your list, prioritize by urgency, and work through each task in a single visit when possible. Most handyman calls in Clark County are completed in half a day or less. We bring our own tools and supplies for standard repairs, so there is no waiting on materials. You get a clean, finished result without coordinating multiple contractors.",
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
			"We provide seamless hole patching and texture matching for Clark County homeowners. Whether it's a doorknob punch-through, water damage from a leak, or a crumbling stress crack along a ceiling seam, our team repairs and blends it invisibly. We match existing texture — orange peel, knockdown, smooth, or popcorn — so the repair disappears completely. Most patches are primed and ready to paint within one to two days.",
		process:
			"We assess the damage, cut back to clean drywall if needed, and apply joint compound in layers — sanding between each coat. Texture matching happens on the final pass using the same technique as your existing wall. Most patches are fully cured and ready for paint within 24 to 48 hours depending on humidity. We protect floors and furniture before we start and clean up completely when we finish.",
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
			"Finish carpentry is what separates a house from a polished home. We install crown molding, baseboards, door and window casing, wainscoting, and built-in trim work with precision cuts and tight joints. Every piece is hand-fitted and nailed with care. Whether you're updating a single room or trimming out a full floor, our team brings detail work that holds up for years and raises your home's value at sale.",
		process:
			"We measure, cut, and install one room at a time, fitting each piece to the actual wall rather than a standard measurement. Corners are coped or mitered as the situation requires. Nail holes are filled and sanded before we leave. We typically complete a single room — baseboards, casing, and crown — in one full day, leaving it clean and ready to paint.",
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
			"Doors and windows take daily wear — they sag, stick, draft, and break down over time. Our team realigns doors that no longer latch, replaces damaged weather stripping, swaps worn hardware, and repairs window screens and frames. We keep your home secure, energy-efficient, and easy to operate. Most door and window repairs are completed in a single visit with no material delays or return trips needed.",
		process:
			"We diagnose the root cause first — whether it's hinge sag, a shifted frame, worn hardware, or a damaged seal — and fix the underlying issue rather than the symptom. Most door repairs take under two hours. Window screen and hardware repairs are typically done in a single visit. We test everything before we leave to confirm it operates correctly and seals properly.",
		features: [
			"Door Realignment",
			"Weather Stripping",
			"Hardware Replacement",
			"Window Screen Repair",
		],
	},
	"flooring": {
		title: "Flooring Repair & Updates",
		description:
			"A floor update changes the entire feel of a room. We handle flooring transitions between rooms, replace damaged boards or tiles, install new baseboard and shoe molding, and prep surfaces before painting. Whether you need a small repair or a full room refresh, our team works efficiently and cleans up completely before leaving. We help Clark County homeowners get more value and comfort out of every square foot of their home.",
		process:
			"We remove the old transition or damaged section, prep the subfloor if needed, and install the new material to match the existing floor pattern and height. Baseboard and shoe molding is renailed or replaced to close any gaps at the wall. We clean up all debris and dust before leaving. Most single-room flooring updates are completed in one day with no overnight disruption.",
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
			"Kitchens and bathrooms get the most daily use and show wear the fastest. We update cabinet hardware, install new faucets and fixtures, re-caulk tubs and showers, regrout tile, and refresh backsplash areas. These targeted updates cost a fraction of a full remodel but make a big visible difference in how your home looks and functions. Our team keeps the space usable during the job and finishes with a clean, polished result.",
		process:
			"We shut off water or power as needed, remove the old fixture or hardware, and install the new one with proper sealing and alignment. Caulking is applied in a single clean bead and tooled smooth. Grout repairs are color-matched to existing tile before we start. Most kitchen and bathroom update visits are completed in a few hours with no overnight disruption to your daily routine.",
		features: [
			"Cabinet Hardware",
			"Faucet Installation",
			"Caulking & Grout",
			"Backsplash Refreshes",
		],
	},
};
