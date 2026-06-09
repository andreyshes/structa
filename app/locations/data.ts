export interface CityData {
	name: string;
	description: string;
	neighborhoods: string[];
}

export interface ServiceType {
	name: string;
	description: string;
	priceRange: string;
}

export interface ServiceFaq {
	q: string;
	a: string;
}

export interface ServiceData {
	title: string;
	description: string;
	process: string;
	features: string[];
	types?: ServiceType[];
	faqs?: ServiceFaq[];
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
			"NORBILT offers high-end interior updates and repairs for Camas homeowners. Camas homes tend to be well-kept and owner-occupied, with many featuring detailed finish carpentry, tile work, and fixtures that deserve a careful touch. Our team works on both established Prune Hill homes and newer builds near Grass Valley. We bring the same licensed, insured standard to every Camas project, regardless of size.",
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
			"NORBILT provides reliable handyman services and licensed renovations in Battle Ground, WA. North Clark County homes in Daybreak and Cherry Grove vary widely in age and style, from acreage properties on larger lots to newer subdivision homes. Our team handles both small maintenance tasks and larger interior projects throughout Battle Ground. We are one of the most active licensed contractors in this area.",
		neighborhoods: ["Daybreak", "Cherry Grove", "Lewisville"],
	},
	washougal: {
		name: "Washougal, WA",
		description:
			"NORBILT provides home maintenance and interior updates for Washougal homeowners. Washougal properties range from older river-area homes near downtown to newer construction along Lookout Ridge with mountain views. Many homes here have original fixtures and trim that benefit from updates or replacement. Our team works throughout Washougal and the surrounding Camas–Washougal corridor with the same licensed, insured standard.",
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
			"NORBILT delivers detail-oriented home improvements in Felida, WA. Felida is one of Clark County's more established residential communities, with many homes built in the 1980s and 1990s that are now due for fixture updates, trim refreshes, and interior repairs. Our team handles everything from caulking and hardware replacement to full room updates. We bring professional results to every Felida home we work in.",
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
			"NORBILT offers drywall repair, interior finishing, and home updates in Salmon Creek, WA. Salmon Creek has a wide range of home ages and styles, from 1990s developments near Mount Vista to newer construction along the Salmon Creek corridor. Our team matches textures precisely, installs clean trim work, and keeps every project on schedule. We serve all Salmon Creek neighborhoods with free, no-obligation estimates.",
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
			"NORBILT provides efficient home maintenance and interior repairs in Orchards, WA. The Orchards area includes many 1970s and 1980s homes along Burnt Bridge Creek and Sifton where drywall, trim, doors, and fixtures are due for updates. Our team is familiar with these home styles and the most common issues they develop over time. We provide fast, licensed service for Orchards homeowners at honest flat-rate prices.",
		neighborhoods: ["Burnt Bridge Creek", "Sifton", "Heritage"],
	},
	"mill-plain": {
		name: "Mill Plain, WA",
		description:
			"Modernize your Mill Plain home with custom trim, flooring updates, and interior repairs from NORBILT. Mill Plain is one of Vancouver's busiest residential corridors, with homes ranging from early 2000s builds to recent new construction in Cimarron and Landover. Whether you need a quick maintenance fix or a room-level interior update, our team delivers clean, professional results. Free estimates for all Mill Plain homeowners.",
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
		types: [
			{
				name: "Small Hole Repair",
				description: "Doorknob punch-throughs, anchor holes, and minor wall damage under 6 inches. Patched, textured, and primed in a single visit.",
				priceRange: "$150–$300",
			},
			{
				name: "Medium Patch",
				description: "Holes 6–12 inches from plumbing access, fixture removal, or impact damage. Cut back to studs, backed, mudded, and texture-matched.",
				priceRange: "$250–$500",
			},
			{
				name: "Water Damage Repair",
				description: "Moisture-damaged or soft drywall from leaks, condensation, or flooding. We remove the compromised material, verify the source is resolved, and restore the surface.",
				priceRange: "$400–$1,200",
			},
			{
				name: "Texture Matching",
				description: "Orange peel, knockdown, skip trowel, smooth, or popcorn — we match your existing finish so repairs blend invisibly after paint.",
				priceRange: "$200–$600",
			},
			{
				name: "Popcorn Ceiling Removal",
				description: "Scrape, skim, and retexture popcorn ceilings to a smooth or light knockdown finish. Dramatically modernizes older Clark County homes.",
				priceRange: "$500–$1,500",
			},
			{
				name: "Full Room Drywall",
				description: "New drywall hang, tape, mud, sand, and texture for a complete room. Common after renovations, additions, or major water damage events.",
				priceRange: "$1,500–$4,000",
			},
		],
		faqs: [
			{
				q: "Can you match my existing wall texture?",
				a: "Yes. We match orange peel, knockdown, skip trowel, smooth, and most popcorn textures. Before starting we test on a scrap piece to confirm the match before touching your wall.",
			},
			{
				q: "Do I need to repaint the whole wall after a drywall patch?",
				a: "Not always. We prime the repair to minimize flash. Whether a spot touch-up blends depends on your existing paint sheen and age. We will tell you honestly before we start.",
			},
			{
				q: "Can you repair water-damaged drywall?",
				a: "Yes. We remove the compromised material, confirm the moisture source is resolved, and restore the wall with new drywall and matched texture. We do not patch over wet or soft material.",
			},
			{
				q: "How long does drywall repair take to dry before painting?",
				a: "Joint compound cures in 24–48 hours depending on Clark County humidity. We prime before we leave so the surface is paint-ready the next day in most conditions.",
			},
			{
				q: "Is drywall repair covered under your warranty?",
				a: "Yes. All NORBILT drywall work is covered by our 1-year workmanship warranty. If a patch cracks, lifts, or the texture mismatches after settling, we come back and fix it at no charge.",
			},
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
		title: "Kitchen & Bathroom Remodeling",
		description:
			"Kitchens and bathrooms are the two rooms that drive home value the most — and the two rooms Clark County homeowners remodel most often. NORBILT handles the full range of kitchen and bathroom remodeling: full gut remodels, tub-to-shower conversions, vanity and tile replacements, backsplash installs, and targeted cosmetic refreshes. Every scope, every budget, licensed and backed by a 1-year warranty.",
		process:
			"We shut off water or power as needed, remove the old fixture or hardware, and install the new one with proper sealing and alignment. Caulking is applied in a single clean bead and tooled smooth. Grout repairs are color-matched to existing tile before we start. Most kitchen and bathroom update visits are completed in a few hours with no overnight disruption to your daily routine.",
		features: [
			"Cabinet Hardware",
			"Faucet Installation",
			"Caulking & Grout",
			"Backsplash Refreshes",
		],
		types: [
			{
				name: "Cosmetic Refresh",
				description: "New hardware, faucets, light fixtures, mirror, and fresh caulk. Same layout, dramatically updated look. Minimal disruption — most done in a single day.",
				priceRange: "$800–$2,500",
			},
			{
				name: "Mid-Range Update",
				description: "New vanity, toilet, tub surround, tile flooring, and fixtures. Keeps the existing layout but replaces all visible surfaces for a near-new result.",
				priceRange: "$5,000–$12,000",
			},
			{
				name: "Full Gut Remodel",
				description: "Everything stripped to the studs and rebuilt — new tile, plumbing fixtures, vanity, lighting, exhaust, and flooring. Layout stays the same; everything else is new.",
				priceRange: "$15,000–$28,000",
			},
			{
				name: "Tub-to-Shower Conversion",
				description: "Remove the existing tub and install a walk-in shower — prefab insert or custom tile. Very popular with Clark County homeowners aging in place or maximizing space.",
				priceRange: "$1,500–$8,000",
			},
			{
				name: "Kitchen Cabinet & Countertop Update",
				description: "New hardware, cabinet doors, or countertops without replacing the whole kitchen. Quartz, laminate, or butcher block — we measure, order, and install.",
				priceRange: "$1,200–$7,000",
			},
			{
				name: "Backsplash Installation",
				description: "Tile, subway, peel-and-stick, or natural stone backsplash installed cleanly behind your range or sink. One of the highest visual-impact updates per dollar spent.",
				priceRange: "$400–$1,800",
			},
		],
		faqs: [
			{
				q: "Do I need a permit for a kitchen or bathroom remodel in Clark County?",
				a: "Minor cosmetic updates — hardware, fixtures, caulk, tile — do not require a permit. Permits are required when moving plumbing, electrical, or walls. We pull permits when needed and know Clark County's requirements.",
			},
			{
				q: "How much does a kitchen or bathroom remodel cost in Clark County?",
				a: "Based on 2026 Clark County rates: cosmetic refreshes run $920–$2,500, mid-range bathroom remodels $5,750–$12,000, full gut remodels $17,250–$28,000+, tub-to-shower conversions $1,725–$8,000, kitchen cabinet and countertop updates $1,380–$7,000, and backsplash installs $460–$1,800. We provide a free written estimate before any work starts.",
			},
			{
				q: "Can you match my existing tile or grout?",
				a: "We color-match grout before starting any repair or regrout project. For tile, an exact match depends on whether the same tile is still available. We bring samples to the walkthrough so you can confirm the match before we order.",
			},
			{
				q: "How long does a tub-to-shower conversion take?",
				a: "A prefab insert conversion takes 1–2 days. A custom tile walk-in shower takes 3–5 days including tile cure time. We will confirm the timeline during your free estimate based on the specific scope.",
			},
			{
				q: "Can we do the kitchen and bathroom at the same time?",
				a: "Yes, and it often saves money on mobilization costs. We schedule both together when possible. The kitchen typically stays usable throughout — bathroom access is limited only during tile cure days.",
			},
			{
				q: "Is your kitchen and bathroom work covered by a warranty?",
				a: "Yes. All NORBILT kitchen and bathroom work is backed by our 1-year workmanship warranty. If caulk fails, tile lifts, or any installed fixture has a workmanship issue, we return and fix it at no charge within the warranty period.",
			},
		],
	},


	"bathroom-remodel": {
		title: "Bathroom Remodeling",
		description:
			"NORBILT handles the full range of bathroom remodeling in Clark County — from a quick cosmetic refresh to a full gut remodel. We demo, waterproof, tile, and finish bathrooms that last. Whether you want a tub-to-shower conversion, a new vanity and tile floor, or a complete primary suite gut, our licensed team handles every detail including permits when required.",
		process:
			"We start with a detailed walkthrough and give you a flat-rate written quote before any work begins. Demo is clean and contained. We install cement board or equivalent backer on all wet areas, set tile to level, grout, caulk all seams, and install fixtures. We don't cut corners on waterproofing — that's where bathroom remodels fail long-term.",
		features: [
			"Full Gut Remodels",
			"Tub-to-Shower Conversion",
			"Vanity & Tile Replacement",
			"Custom Walk-In Showers",
		],
		types: [
			{
				name: "Cosmetic Refresh",
				description: "New fixtures, faucet, toilet, mirror, recaulk and paint. Same tile and layout — dramatically updated look in 1–2 days.",
				priceRange: "\u2013\,500",
			},
			{
				name: "Mid-Range Remodel",
				description: "New vanity, tile floor, shower surround, lighting, and all fixtures. Layout stays the same, everything visible is new.",
				priceRange: "\,450–\,500",
			},
			{
				name: "Full Gut Remodel",
				description: "Everything stripped to the studs — new cement board, tile, plumbing fixtures, vanity, exhaust, and flooring. Built to last.",
				priceRange: "\,200–\,000",
			},
			{
				name: "Tub-to-Shower Conversion",
				description: "Remove the tub and install a custom walk-in shower — prefab insert or full custom tile. Popular with aging-in-place and space-maximizing homeowners.",
				priceRange: "\,725–\,000",
			},
			{
				name: "Primary Suite Remodel",
				description: "High-end custom tile, freestanding tub, heated floors, and full layout reconfiguration for a true luxury primary bath.",
				priceRange: "\,750–\,000+",
			},
		],
		faqs: [
			{
				q: "How much does a bathroom remodel cost in Clark County WA?",
				a: "Based on 2026 Clark County rates: cosmetic refreshes run \–\,500, mid-range remodels \,450–\,500, full gut remodels \,200–\,000, tub-to-shower conversions \,725–\,000, and high-end primary suite remodels \,750–\,000+. We provide a free written estimate before any work starts.",
			},
			{
				q: "Do I need a permit for a bathroom remodel?",
				a: "Cosmetic work — fixture swaps, vanity, tile, paint — typically doesn't require a permit in Clark County. Permits are required for plumbing relocation, structural changes, and electrical panel work. NORBILT (WA Lic. NORBI**741CS) pulls all required permits.",
			},
			{
				q: "How long does a bathroom remodel take?",
				a: "A cosmetic refresh takes 1–2 days. A mid-range remodel takes 3–5 days. A full gut remodel takes 1–2 weeks. We confirm the exact timeline during your free estimate.",
			},
			{
				q: "Is your bathroom remodel work covered by a warranty?",
				a: "Yes. All NORBILT bathroom remodeling is backed by a 1-year workmanship warranty. If tile lifts, caulk fails, or any installed fixture has a workmanship issue within the warranty period, we return and fix it at no charge.",
			},
		],
	},

	"kitchen-remodel": {
		title: "Kitchen Remodeling",
		description:
			"NORBILT handles kitchen remodeling at every scope in Clark County — from new countertops and backsplash to full cabinet replacements and custom builds. Kitchens drive more home value than any other room. Our licensed team handles all permitted work including plumbing connections and electrical at existing boxes, giving you one contractor from demo to final install.",
		process:
			"We start with a detailed walkthrough and provide a flat-rate written quote before any work begins. Cabinets are installed level and plumb. Counters are templated on-site for a perfect fit. Backsplash tile is set to level and grouted with color-matched grout. We don't leave until the site is clean and you've walked through the finished work.",
		features: [
			"Cabinet Replacement & Refacing",
			"Countertop Installation",
			"Backsplash & Tile",
			"Full Gut Remodels",
		],
		types: [
			{
				name: "Cosmetic Refresh",
				description: "New hardware, faucet, lighting, backsplash, and paint. Same cabinets and layout — dramatically updated in 2–4 days.",
				priceRange: "\,725–\,000",
			},
			{
				name: "Mid-Range Remodel",
				description: "New countertops, backsplash, sink, faucet, and appliances. Cabinet fronts replaced or refaced. Layout stays the same.",
				priceRange: "\,250–\,000",
			},
			{
				name: "Full Remodel",
				description: "All cabinets and counters replaced, new tile, updated plumbing and lighting. Same layout, everything else rebuilt.",
				priceRange: "\,500–\,000",
			},
			{
				name: "Custom Build",
				description: "Custom cabinetry, high-end stone counters, premium appliances, island addition, and layout reconfiguration.",
				priceRange: "\,500–\,000+",
			},
		],
		faqs: [
			{
				q: "How much does a kitchen remodel cost in Clark County WA?",
				a: "Based on 2026 Clark County rates: cosmetic refreshes run \,725–\,000, mid-range remodels \,250–\,000, full cabinet-replacement remodels \,500–\,000, and custom builds \,500–\,000+. We provide a free written estimate before any work starts.",
			},
			{
				q: "Do I need a permit for a kitchen remodel?",
				a: "Cosmetic work — counters, backsplash, hardware, lighting swaps at existing boxes — typically doesn't require a permit. Permits are required for plumbing relocation, gas line work, and electrical panel changes. NORBILT (WA Lic. NORBI**741CS) pulls all required permits.",
			},
			{
				q: "Should I reface or replace my kitchen cabinets?",
				a: "Refacing makes sense when the cabinet boxes are solid and in good condition — typically under 20 years old. It costs \–\ per linear foot vs. \–\ for new semi-custom. If boxes are out of level, water-damaged, or over 25 years old, full replacement usually pencils out better.",
			},
			{
				q: "How long does a kitchen remodel take?",
				a: "A cosmetic refresh takes 2–4 days. A mid-range remodel takes 1–3 weeks. A full cabinet replacement takes 3–6 weeks. Custom builds take 6–12 weeks including cabinet lead times. We confirm timelines during your free estimate.",
			},
			{
				q: "Is your kitchen remodel work covered by a warranty?",
				a: "Yes. All NORBILT kitchen remodeling is backed by a 1-year workmanship warranty. If counters lift, tile cracks at grout lines, or any installed component has a workmanship issue within the warranty period, we return and fix it at no charge.",
			},
		],
	},

	"lighting": {
		title: "Lighting & Fixtures",
		description:
			"NORBILT installs and upgrades lighting and fixtures throughout Clark County. New light fixtures, ceiling fans, recessed lighting, under-cabinet lighting, and fixture swaps — all done safely by a licensed contractor. We handle everything from a single fixture replacement to a full-room lighting redesign.",
		process:
			"We shut off power at the breaker, remove the existing fixture, and install the new one with proper wire connections and secure mounting. We check for fan-rated boxes before any ceiling fan install and upgrade the box when needed. Every job is tested before we leave.",
		features: [
			"Fixture Replacement",
			"Ceiling Fan Installation",
			"Recessed Lighting",
			"Under-Cabinet Lighting",
		],
		types: [
			{
				name: "Single Fixture Swap",
				description: "Replace any existing light fixture with a new one at the same location. Most common lighting upgrade — takes 30–90 minutes.",
				priceRange: "\u2013",
			},
			{
				name: "Ceiling Fan Installation",
				description: "Install a ceiling fan where a light fixture exists. Includes fan-rated box upgrade when needed.",
				priceRange: "\u2013",
			},
			{
				name: "Recessed Lighting",
				description: "Install IC-rated recessed cans in existing ceilings. Scope depends on attic access and distance from existing switch.",
				priceRange: "\u2013\ per can",
			},
			{
				name: "Under-Cabinet Lighting",
				description: "LED strips or puck lights installed under kitchen cabinets. Hardwired or plug-in options available.",
				priceRange: "\u2013",
			},
			{
				name: "Full Room Upgrade",
				description: "Replace all fixtures in a room — recessed, pendants, vanity bars, and accent lighting — in a single visit.",
				priceRange: "\u2013\,200+",
			},
		],
		faqs: [
			{
				q: "Do I need a licensed contractor to replace a light fixture?",
				a: "For swapping a fixture at an existing box, a licensed general contractor like NORBILT handles it legally and safely. For new circuits or panel work, a licensed electrician is required. We tell you honestly which applies to your job.",
			},
			{
				q: "How much does light fixture installation cost in Clark County WA?",
				a: "Based on 2026 Clark County rates: single fixture swaps run \–\, ceiling fan installation \–\, recessed lighting \–\ per can, under-cabinet lighting \–\, and full room upgrades \–\,200+.",
			},
			{
				q: "Can you install a ceiling fan where there is currently a light?",
				a: "Yes, if the existing electrical box is fan-rated. Standard light boxes are not fan-rated and must be swapped before installation. We check the box rating and handle the upgrade and fan install in one visit.",
			},
			{
				q: "Is your lighting work covered by a warranty?",
				a: "Yes. All NORBILT lighting installations are backed by a 1-year workmanship warranty. If a fixture loosens or a connection fails within the warranty period, we return and fix it at no charge.",
			},
		],
	},
	"home-repair": {
		title: "Home Repair",
		description:
			"When something breaks or wears out in your home, NORBILT handles it fast and correctly. We cover the full range of interior home repairs — drywall patching, door and window fixes, fixture swaps, caulking, weatherstripping, safety upgrades, and general maintenance. As a licensed WA General Contractor, every repair meets state code, and our work is backed by a 1-year workmanship warranty. No job is too small.",
		process:
			"We start with a quick walkthrough of what needs fixing, give you a flat-rate price before any work begins, and complete most repairs in a single visit. We bring the tools and common materials so there's no waiting. When we're done, we clean up completely and walk you through everything that was done.",
		features: [
			"Drywall & Wall Repair",
			"Door & Window Fixes",
			"Fixture Replacement",
			"Caulking & Weatherization",
		],
		types: [
			{
				name: "Drywall & Wall Repair",
				description: "Holes, stress cracks, water damage, and texture matching. We restore walls to like-new condition with seamless finishes.",
				priceRange: "$150\u2013$800",
			},
			{
				name: "Door & Window Repairs",
				description: "Sticking doors, worn weatherstripping, damaged seals, and hardware replacement. We fix the source, not just the symptom.",
				priceRange: "$100\u2013$400",
			},
			{
				name: "Fixture Replacement",
				description: "Light fixtures, ceiling fans, faucets, toilets, and cabinet hardware. Fast swaps with clean installs and no mess left behind.",
				priceRange: "$150\u2013$700",
			},
			{
				name: "Caulking & Sealing",
				description: "Re-caulk tubs, showers, sinks, and windows. Prevents water damage and moisture intrusion — one of the highest-value small repairs.",
				priceRange: "$150\u2013$350",
			},
			{
				name: "Safety Repairs",
				description: "Grab bars, loose railings, broken locks, and unstable fixtures. We prioritize repairs that protect your household.",
				priceRange: "$150\u2013$500",
			},
			{
				name: "Home Punch List",
				description: "Multiple small tasks in a single visit. The most cost-effective way to clear your repair backlog — one mobilization fee, multiple jobs done.",
				priceRange: "$350\u2013$950",
			},
		],
		faqs: [
			{
				q: "What home repairs do you handle?",
				a: "We handle drywall patching, door and window repairs, fixture and hardware replacement, caulking, weatherstripping, safety fixes (grab bars, railings, locks), TV mounting, shelf installation, and full home punch lists. Most repairs are completed in a single visit.",
			},
			{
				q: "Do I need a licensed contractor for home repairs in Washington State?",
				a: "Washington State requires a licensed contractor for repair work above a set dollar threshold. Hiring an unlicensed handyman above that limit is illegal and can void your homeowner's insurance. As a licensed WA General Contractor, every NORBILT repair is legal, insured, and code-compliant.",
			},
			{
				q: "How much do home repairs cost near me in Clark County?",
				a: "Small repairs (drywall patch, fixture swap, caulking) run $150\u2013$400. A half-day punch list covering multiple tasks runs $350\u2013$600. We provide flat-rate written estimates before any work begins — no hourly surprises.",
			},
			{
				q: "How quickly can you schedule a home repair in my area?",
				a: "We offer same-week estimates for most home repair jobs throughout Clark County. Once you submit your project details, we confirm availability and get on the calendar fast.",
			},
			{
				q: "Is your home repair work guaranteed?",
				a: "Yes. All NORBILT home repair work is backed by our 1-year workmanship warranty. If anything we repaired fails due to workmanship, we return and fix it at no charge.",
			},
		],
	},
};
