export interface CityFaq {
	q: string;
	a: string;
}

export interface CityData {
	name: string;
	description: string;
	neighborhoods: string[];
	housingNotes: string;
	commonProjects: Array<{ name: string; desc: string }>;
	permitNotes: string;
	cityFAQs: CityFaq[];
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
		neighborhoods: ["Downtown", "Uptown", "Cascade Park", "Fishers Landing", "Hazel Dell", "Salmon Creek", "Mill Plain", "Orchards"],
		housingNotes:
			"Vancouver is Clark County's largest and most diverse housing market. The city spans nearly a century of construction — 1940s and 1950s craftsman homes near downtown and Uptown, 1960s–70s ranches in Hazel Dell and Orchards, 1980s–90s suburbia in Salmon Creek and Felida, and newer construction in Cascade Park, Fishers Landing, and Mill Plain. Each era brings different repair realities. Older homes commonly have popcorn ceilings, original drywall with hairline settlement cracks, and outdated fixtures that are overdue for replacement. Homes from the 1980s and 90s often need trim refreshes and bathroom updates. Newer builds in east and north Vancouver tend to be in better structural condition but sometimes have builder-grade finishes that owners want upgraded — thicker trim profiles, custom tile, and higher-end fixture packages. Vancouver's wet winters accelerate caulk failure around windows, tubs, and exterior door frames, making re-caulking one of the most common single-visit repairs we do throughout the city. NORBILT works across all Vancouver zip codes with same-week estimates and flat-rate written quotes.",
		commonProjects: [
			{ name: "Drywall Repair & Texture Matching", desc: "Settlement cracks, water damage from older plumbing, and hole patches are constant in Vancouver's mid-century housing stock. We match orange peel, knockdown, and smooth textures precisely." },
			{ name: "Bathroom Updates & Remodels", desc: "Older Vancouver bathrooms — especially in Hazel Dell and Orchards homes — have original 1970s tile and fixtures. Full gut remodels and cosmetic refreshes are among our most requested projects here." },
			{ name: "Finish Carpentry & Trim", desc: "Many Vancouver homes have minimal or builder-grade trim. We install crown molding, wainscoting, and custom door and window casing throughout the city." },
			{ name: "Kitchen Updates", desc: "Cabinet hardware upgrades, backsplash installs, and countertop replacements are frequent in Vancouver's 1980s–2000s homes where kitchens are dated but structurally sound." },
		],
		permitNotes:
			"Permits for most residential remodel work in unincorporated Vancouver and Clark County are issued through Clark County Community Development (564-397-2375). Work within Vancouver city limits is permitted through the City of Vancouver's Permit Center. NORBILT handles permit applications as part of any permitted scope.",
		cityFAQs: [
			{
				q: "What neighborhoods in Vancouver do you serve?",
				a: "We serve all Vancouver neighborhoods including Downtown, Uptown, Hazel Dell, Salmon Creek, Cascade Park, Fishers Landing, Mill Plain, Orchards, Five Corners, Felida, and all surrounding unincorporated Clark County areas. There is no travel fee for any Vancouver location.",
			},
			{
				q: "Do you work on older Vancouver homes from the 1950s–70s?",
				a: "Yes — and we're experienced with the common issues in that era's construction. Settlement cracks in original drywall, popcorn ceilings, outdated fixtures, and tired trim are all things we handle routinely in Hazel Dell, Orchards, and north Vancouver. We price these jobs honestly based on what we actually find.",
			},
		],
	},
	camas: {
		name: "Camas, WA",
		description:
			"NORBILT offers high-end interior updates and repairs for Camas homeowners. Camas homes tend to be well-kept and owner-occupied, with many featuring detailed finish carpentry, tile work, and fixtures that deserve a careful touch. Our team works on both established Prune Hill homes and newer builds near Grass Valley. We bring the same licensed, insured standard to every Camas project, regardless of size.",
		neighborhoods: ["Prune Hill", "Deer Creek", "Grass Valley", "Fern Prairie", "Crown Park", "Lacamas Shores"],
		housingNotes:
			"Camas has some of Clark County's most desirable residential real estate — and homeowners here expect a higher standard of workmanship. The city's housing stock skews newer and better-maintained than much of the county. Prune Hill and Lacamas Shores feature established 1990s and 2000s homes, many with custom finish carpentry, tile work, and high-end fixture packages. Grass Valley and Deer Creek have newer construction from the 2010s and 2020s where builders sometimes left finish work incomplete — no crown molding, minimal door casing, or builder-grade baseboards that owners want upgraded. Fern Prairie sits on the eastern rural fringe with larger lot properties and custom homes where quality expectations are high. One thing consistent across Camas: homeowners know what good work looks like and they're not looking for the cheapest option. They want it done right the first time. NORBILT has completed bathroom remodels, kitchen updates, finish carpentry, and flooring installations throughout Camas and brings the same licensed standard to every job. Material costs in Camas tend to run at the higher end of Clark County ranges — homeowners here typically choose quartz over laminate and custom tile over prefab.",
		commonProjects: [
			{ name: "Finish Carpentry Upgrades", desc: "Prune Hill and Lacamas Shores homes are ideal candidates for crown molding, wainscoting, and built-in shelving. Many owners want to upgrade from builder-grade trim to something more custom." },
			{ name: "Bathroom Tile & Remodels", desc: "Camas homeowners frequently invest in full master bath upgrades — custom tile showers, freestanding tubs, and heated floors. We handle every stage from demo to final fixture." },
			{ name: "Kitchen Updates", desc: "Backsplash installs, countertop upgrades to quartz or stone, and cabinet hardware refreshes are common in Camas kitchens from the 1990s–2000s build era." },
			{ name: "Flooring Installation", desc: "Wide-plank hardwood and large-format tile installations are frequent in Camas. Homes here often have the square footage to make flooring a significant upgrade." },
		],
		permitNotes:
			"Permits in Camas are issued through the City of Camas Community Development Department (360-817-8100). Most residential remodel work requires a permit review, and Camas has a reputation for thorough inspection. NORBILT is familiar with the Camas permit process and handles applications as part of any permitted project.",
		cityFAQs: [
			{
				q: "Do you work on high-end Camas homes and custom builds?",
				a: "Yes. Many of our Camas projects are in Prune Hill, Lacamas Shores, and Fern Prairie — homes where owners expect a trade-quality finish, not a contractor who rushes. We take time with cuts, fittings, and details. Our flat-rate pricing reflects the actual scope, not a lowball number that grows on the invoice.",
			},
			{
				q: "What's the most common remodel request from Camas homeowners?",
				a: "Bathroom upgrades are the most frequent — specifically tub-to-shower conversions with custom tile, and master bath remodels. Kitchen countertop and backsplash updates are close behind. Finish carpentry is also very common in Camas, where many 1990s–2000s homes were built without crown molding or detailed trim packages.",
			},
		],
	},
	ridgefield: {
		name: "Ridgefield, WA",
		description:
			"We install expert trim work and modern interior updates in Ridgefield, WA. Ridgefield has grown rapidly over the past decade, with many newer homes in Union Ridge and Bellwood that need finish carpentry completed or updated. Our team also works on older properties in the original Ridgefield townsite where repairs and refreshes are common. We provide free estimates and complete every job with a clean site.",
		neighborhoods: ["Union Ridge", "Bellwood", "Hillhurst", "South Ridgefield", "Ridgefield Townsite"],
		housingNotes:
			"Ridgefield is one of Clark County's fastest-growing cities, and the construction profile reflects it. Union Ridge and Bellwood are filled with homes built between 2010 and the present — newer construction on larger lots with cleaner infrastructure but often builder-grade finishes. It's common in these neighborhoods to find homes where the builder skipped crown molding, installed the cheapest interior doors, or used minimal baseboard profiles. Owners who've been in these homes a few years often want to customize — upgrade the trim package, tile the master shower properly, or install hardwood where the builder put carpet. The Ridgefield townsite and Hillhurst areas have older homes in the 1940s–1970s range with more traditional repair needs: drywall cracks, outdated fixtures, weathered exterior trim, and bathrooms that haven't been touched since the 80s. Both sides of Ridgefield's housing spectrum are jobs we handle regularly. The city's rapid growth also means tradespeople are in high demand here, so scheduling a licensed contractor can take time — NORBILT aims for same-week estimates for all Ridgefield homeowners.",
		commonProjects: [
			{ name: "Finish Carpentry on New Builds", desc: "Union Ridge and Bellwood homes frequently need trim package upgrades — crown molding, thicker baseboard profiles, and custom door casing to replace builder-grade material." },
			{ name: "Bathroom Remodels", desc: "Both older townsite homes and newer builds need bathroom work. Older homes get full gut remodels; newer homes get master suite upgrades with custom tile and fixtures." },
			{ name: "Flooring Updates", desc: "Many newer Ridgefield homes have carpet in living areas where owners want LVP or hardwood. We handle the full install including transitions and baseboard renail." },
			{ name: "Drywall Repair", desc: "Settlement cracks are common in Ridgefield's newer construction as homes are still adjusting. We repair and texture-match to restore walls to like-new condition." },
		],
		permitNotes:
			"Permits in Ridgefield are issued through the City of Ridgefield Community Development Department. For properties in unincorporated areas outside city limits, permits come from Clark County Community Development. NORBILT confirms which jurisdiction applies during the estimate and handles permit applications for all permitted work.",
		cityFAQs: [
			{
				q: "Do you work in newer Ridgefield subdivisions like Union Ridge and Bellwood?",
				a: "Yes — these are some of our most active areas. Newer builds in Union Ridge and Bellwood are structurally sound but often need finish work completed or upgraded. Trim packages, bathroom tile, and flooring upgrades are the most common requests. We provide free on-site estimates and flat-rate written quotes for all Ridgefield homeowners.",
			},
			{
				q: "How soon can you get to Ridgefield for an estimate?",
				a: "We typically schedule Ridgefield estimates within the same week of contact. Ridgefield is within our core service area — there's no travel surcharge and no difference in our pricing vs. Vancouver jobs.",
			},
		],
	},
	"battle-ground": {
		name: "Battle Ground, WA",
		description:
			"NORBILT provides reliable handyman services and licensed renovations in Battle Ground, WA. North Clark County homes in Daybreak and Cherry Grove vary widely in age and style, from acreage properties on larger lots to newer subdivision homes. Our team handles both small maintenance tasks and larger interior projects throughout Battle Ground. We are one of the most active licensed contractors in this area.",
		neighborhoods: ["Daybreak", "Cherry Grove", "Lewisville", "Tukes Valley", "Battle Ground Village"],
		housingNotes:
			"Battle Ground sits in north Clark County and has a distinctly different housing character than south county cities. The area mixes older established properties — some dating to the 1940s and 1950s in the original townsite — with large Daybreak subdivision homes from the 2000s and acreage properties throughout Lewisville and Tukes Valley. Older Battle Ground homes frequently have deferred maintenance: original drywall with hairline cracks, outdated bathroom tile from the 1970s and 80s, worn wood trim, and windows that haven't been resealed in years. Water intrusion is a recurring issue in older north county properties due to heavier rainfall and homes that haven't had regular maintenance. The Daybreak neighborhood skews newer, with 2000s–2010s construction that's holding up well but often needs cosmetic updates — tile replacements, trim upgrades, and kitchen refreshes. Battle Ground homeowners tend to be practical: they want the work done correctly and fairly priced, without a lot of back-and-forth. NORBILT has completed dozens of projects throughout Battle Ground and knows what licensed work looks like here.",
		commonProjects: [
			{ name: "Water Damage & Drywall Repair", desc: "Older Battle Ground homes frequently have hidden moisture damage behind walls and under floors. We assess the source, remove compromised material, and restore walls correctly with matched texture." },
			{ name: "Bathroom Refreshes & Remodels", desc: "Many Battle Ground bathrooms in 1970s–1990s homes have original tile, fixtures, and vanities that are due for replacement. We handle everything from cosmetic refreshes to full gut remodels." },
			{ name: "Handyman Punch Lists", desc: "North county homeowners often have a longer list of deferred tasks — sticking doors, worn caulking, dated hardware, loose railings. We clear the whole list in a single visit." },
			{ name: "Flooring Installation", desc: "LVP flooring upgrades are popular in Battle Ground ranch homes where owners are replacing worn carpet or vinyl. We handle install, transitions, and baseboard work." },
		],
		permitNotes:
			"Permits in Battle Ground are issued through the City of Battle Ground Building Department (360-342-5076). Properties outside city limits use Clark County Community Development. NORBILT handles permit applications as part of any permitted project and can advise which jurisdiction applies during the estimate.",
		cityFAQs: [
			{
				q: "Do you work in rural Battle Ground areas like Lewisville and Tukes Valley?",
				a: "Yes. We serve all of north Clark County including rural Battle Ground, Lewisville, and Tukes Valley. Acreage properties and older rural homes are jobs we're comfortable with — we know to budget extra time for deferred maintenance and hidden conditions that are common in this area.",
			},
			{
				q: "Are there licensed contractors who actually come to Battle Ground?",
				a: "Yes — NORBILT is one of the more active licensed contractors in north Clark County. We don't charge extra for the drive and we schedule Battle Ground estimates the same week. WA License #NORBIR**741CS, bonded and insured.",
			},
		],
	},
	washougal: {
		name: "Washougal, WA",
		description:
			"NORBILT provides home maintenance and interior updates for Washougal homeowners. Washougal properties range from older river-area homes near downtown to newer construction along Lookout Ridge with mountain views. Many homes here have original fixtures and trim that benefit from updates or replacement. Our team works throughout Washougal and the surrounding Camas–Washougal corridor with the same licensed, insured standard.",
		neighborhoods: ["Downtown Washougal", "River's Edge", "Lookout Ridge", "Steigerwald", "Canyon Creek"],
		housingNotes:
			"Washougal sits at the eastern edge of Clark County along the Columbia River Gorge, and its housing stock reflects both its age and its setting. The downtown core and River's Edge area have homes from the 1940s through the 1970s — older construction with original fixtures, plaster or early drywall walls, and bathrooms that in many cases have never been updated. Lookout Ridge and Canyon Creek are much newer, with 1990s–2010s construction that has mountain and river views but increasingly needs cosmetic updates. The Gorge location means Washougal homes see higher humidity levels than inland Clark County, which accelerates caulk failure around windows, tubs, and exterior penetrations. Water intrusion issues in older downtown homes are more common than in dryer inland cities. Mold behind drywall after a slow leak is something we encounter with more frequency here. Washougal homeowners are often working with original finishes from decades past — original tile, wood-paneled walls, dropped ceilings — and want a contractor who can remove and update without damaging the surrounding structure. The Camas–Washougal corridor is a short drive for our crew, and we serve all Washougal addresses with the same pricing and same-week estimate availability.",
		commonProjects: [
			{ name: "Moisture & Water Damage Repair", desc: "Older Washougal homes near the river have higher humidity and a greater history of water intrusion. We assess, remove compromised material, and restore drywall and finishes correctly." },
			{ name: "Bathroom Updates in Older Homes", desc: "Downtown Washougal homes from the 1950s–70s often have original bathrooms. Cosmetic refreshes and full remodels are both common depending on condition." },
			{ name: "Window & Door Weatherization", desc: "Gorge weather accelerates seal failure on windows and exterior doors. Re-caulking, weatherstripping replacement, and door hardware updates are frequent Washougal jobs." },
			{ name: "Finish Carpentry", desc: "Lookout Ridge and Canyon Creek homeowners frequently want trim upgrades on their newer builds — crown molding, wainscoting, and custom door casing." },
		],
		permitNotes:
			"Permits in Washougal are issued through the City of Washougal Community Development (360-835-8501). Rural properties outside city limits fall under Clark County Community Development. NORBILT handles permit applications and can confirm which office applies during your estimate.",
		cityFAQs: [
			{
				q: "Do older Washougal homes near downtown need special handling?",
				a: "Yes — homes from the 1950s–70s in downtown Washougal and River's Edge sometimes have plaster walls, original fixture rough-ins, or moisture issues that require more careful approach than newer construction. We assess conditions honestly during the walkthrough and build that into the flat-rate quote before we start.",
			},
			{
				q: "Is Washougal within your regular service area?",
				a: "Yes. Washougal is a regular service area for NORBILT — no travel surcharge, same-week estimates, and the same licensed, insured standard as any Vancouver or Camas job. We work throughout the Camas–Washougal corridor regularly.",
			},
		],
	},
	"brush-prairie": {
		name: "Brush Prairie, WA",
		description:
			"We offer custom carpentry and interior improvements in Brush Prairie, WA. Brush Prairie is home to a mix of acreage estates, Hockinson-area properties, and newer planned subdivisions — each requiring a different level of finish work and maintenance. Our team is comfortable working on large properties with high-end trim expectations as well as straightforward repairs on everyday homes. Free estimates for all Brush Prairie homeowners.",
		neighborhoods: ["Hockinson", "Meadow Glade", "Curtin Creek", "Harrington Hills", "Brush Prairie Estates"],
		housingNotes:
			"Brush Prairie is semi-rural north Clark County — Hockinson School District territory, known for larger lots, acreage properties, and a mix of custom homes and established ranches. The housing profile is distinct from the denser suburban cities. Custom homes in Harrington Hills and Brush Prairie Estates often have high-end finish expectations: detailed trim packages, custom tile work, hardwood floors, and built-in cabinetry. These are homes where the owners notice the difference between a good cut and a sloppy one. The Meadow Glade and Curtin Creek areas have more modest properties — 1970s–1990s ranches on rural lots where repair and maintenance work is the more common request. Deferred maintenance is common on these older properties: worn drywall, outdated fixtures, failing caulking on older tile, and doors that have shifted with the foundation over decades. Brush Prairie properties tend to be larger than suburban equivalents, which means flooring and carpentry jobs have more square footage and linear footage — both cost and timeline should be planned accordingly. NORBILT serves all Brush Prairie addresses and is comfortable with both the high-end custom work and the practical maintenance repairs this area generates.",
		commonProjects: [
			{ name: "Custom Finish Carpentry", desc: "Acreage estates in Harrington Hills and Brush Prairie Estates frequently request crown molding, built-in bookshelves, wainscoting, and custom trim packages that match the home's quality level." },
			{ name: "Flooring on Large Properties", desc: "Larger Brush Prairie homes mean larger flooring jobs. LVP and hardwood installations on open-plan main floors and upper landings are common projects here." },
			{ name: "Bathroom Remodels", desc: "Older ranches in Meadow Glade and Curtin Creek often have original 1970s–1980s bathrooms. Full remodels and tub-to-shower conversions are frequent in this area." },
			{ name: "Home Repair Punch Lists", desc: "Acreage properties accumulate repair needs over time. Sticking doors, worn weatherstripping, drywall cracks, and fixture updates are typical items on Brush Prairie punch lists." },
		],
		permitNotes:
			"Brush Prairie is unincorporated Clark County — all permits are issued through Clark County Community Development (564-397-2375). There is no separate city permit office for Brush Prairie or Hockinson addresses. NORBILT handles permit applications as part of any permitted project.",
		cityFAQs: [
			{
				q: "Do you serve rural properties and acreage homes in Brush Prairie and Hockinson?",
				a: "Yes. Acreage and rural properties are a normal part of our work in north Clark County. We're familiar with the finish expectations on custom Brush Prairie homes and the practical repair needs of older rural ranches. No travel surcharge for Brush Prairie or Hockinson addresses.",
			},
			{
				q: "What's the most common project type in Brush Prairie?",
				a: "It splits by neighborhood. Harrington Hills and estate properties most often request finish carpentry upgrades and flooring. Meadow Glade and Curtin Creek ranches more often need drywall repair, bathroom updates, and general maintenance punch lists.",
			},
		],
	},
	felida: {
		name: "Felida, WA",
		description:
			"NORBILT delivers detail-oriented home improvements in Felida, WA. Felida is one of Clark County's more established residential communities, with many homes built in the 1980s and 1990s that are now due for fixture updates, trim refreshes, and interior repairs. Our team handles everything from caulking and hardware replacement to full room updates. We bring professional results to every Felida home we work in.",
		neighborhoods: ["Felida Overlook", "Lakeshore Park", "Erickson Farms", "Felida Park", "Ridgecrest"],
		housingNotes:
			"Felida is an established residential community in northwest Clark County — one of the more desirable areas of unincorporated Vancouver. Most Felida homes were built between 1980 and 2000, with a concentration of well-kept properties on larger lots with mature landscaping. The housing is predominantly owner-occupied, single-family, and well-maintained — but at 30–40 years old, many of these homes are now hitting the age window where interior systems need attention. Bathrooms from the 1980s–90s have original tile, fixtures, and vanities that homeowners are ready to replace. Kitchen hardware and countertops from that same era often feel dated. Caulking around windows and in bathrooms has completed its lifespan and needs replacement to prevent water intrusion. Trim and baseboards from this era were often builder-grade and owners upgrading before a sale or for personal satisfaction frequently request crown molding and thicker profile trim. Felida sits between Salmon Creek and the Ridgefield corridor, giving it a quieter, more residential character. Homeowners here tend to be established families or empty nesters — buyers who invest in quality updates and expect the work to last. NORBILT has completed numerous projects in Felida and provides free estimates throughout the area.",
		commonProjects: [
			{ name: "Bathroom Updates", desc: "1980s–1990s Felida bathrooms are the most common remodel request — original tile, vanity, and fixtures updated to modern finishes. Cosmetic refreshes and mid-range remodels both common." },
			{ name: "Trim & Carpentry Upgrades", desc: "Many Felida homes were built with minimal trim. Crown molding, updated door and window casing, and wainscoting are popular updates before sales or personal upgrades." },
			{ name: "Kitchen Refreshes", desc: "Counter replacements, backsplash installs, and hardware upgrades in 1990s–2000s kitchens are frequent — layouts stay the same, but the finishes get a decade-appropriate update." },
			{ name: "Window & Door Re-caulk", desc: "Homes at this age have caulking that's past its service life. Re-caulking around windows, doors, and in wet areas is a common single-visit repair throughout Felida." },
		],
		permitNotes:
			"Felida is in unincorporated Clark County — permits are issued through Clark County Community Development (564-397-2375). NORBILT handles permit applications as part of any permitted project and can advise during the estimate whether the planned scope requires a permit.",
		cityFAQs: [
			{
				q: "What kind of work do Felida homeowners typically request?",
				a: "Bathroom updates are the most common — 1980s–90s fixtures, tile, and vanities are at the age where most owners want a refresh or full remodel. Trim upgrades and kitchen refreshes are close behind. Most Felida jobs are driven by either presale prep or personal quality-of-life improvements.",
			},
			{
				q: "Is Felida within your standard service area?",
				a: "Yes. Felida is a regular area for NORBILT. We serve all Felida neighborhoods — Felida Overlook, Lakeshore Park, Erickson Farms, Felida Park, and Ridgecrest — with no travel surcharge and same-week estimate availability.",
			},
		],
	},
	"hazel-dell": {
		name: "Hazel Dell, WA",
		description:
			"We provide trusted home repairs and bathroom updates in Hazel Dell, WA. Hazel Dell's housing stock includes many mid-century homes and 1970s–80s builds where original fixtures, drywall, and carpentry are showing age. Our team handles these updates quickly and cleanly, restoring walls, replacing fixtures, and refreshing tired spaces. We serve all Hazel Dell neighborhoods and provide same-week estimates for most jobs.",
		neighborhoods: ["Starcrest", "Northeast Hazel Dell", "West Hazel Dell", "Minnehaha", "Fircrest"],
		housingNotes:
			"Hazel Dell is one of Clark County's older suburban communities — a dense residential area in north Vancouver where much of the housing was built between the 1940s and the 1980s. This is some of the oldest housing stock in the county, and it shows. Homes in Starcrest and West Hazel Dell often have original drywall with decades of settlement cracks, outdated plaster in the oldest properties, and bathroom tile from the 1960s and 70s that's been grouted over and re-grouted multiple times. Popcorn ceilings are extremely common throughout Hazel Dell — many homeowners want them scraped and replaced with a clean knockdown or smooth finish. Original windows are past their seal life. Older plumbing rough-ins don't always align with modern fixture footprints without adapter work. What Hazel Dell homeowners share is a practical approach: they know these are older homes and they want honest pricing and work that holds up, not a quick patch that fails in two years. NORBILT has done extensive work in Hazel Dell, particularly on drywall, bathroom updates, and general repair punch lists. We know what to expect in this housing era and we price it honestly.",
		commonProjects: [
			{ name: "Drywall Repair & Popcorn Ceiling Removal", desc: "Settlement cracks, hole patches, and popcorn ceiling removal are among the most frequent Hazel Dell jobs. We match textures and restore walls to clean, paint-ready condition." },
			{ name: "Bathroom Remodels", desc: "Original 1960s–1970s bathrooms are common in Hazel Dell. Full gut remodels — new tile, vanity, fixture, and all — are the most thorough solution and one of the best investments before a sale." },
			{ name: "Fixture & Hardware Replacement", desc: "Outdated light fixtures, ceiling fans, faucets, and cabinet hardware throughout the home. Most can be updated in a single half-day visit." },
			{ name: "Window Re-caulk & Weatherization", desc: "Older windows throughout Hazel Dell have failed seals and drafts. Re-caulking exterior frames and replacing weatherstripping is a high-value maintenance repair here." },
		],
		permitNotes:
			"Hazel Dell is in unincorporated Clark County — all residential permits are issued through Clark County Community Development (564-397-2375). There is no separate permit office for Hazel Dell addresses. NORBILT handles permit applications as part of any permitted project.",
		cityFAQs: [
			{
				q: "Can you work on older Hazel Dell homes from the 1950s and 60s?",
				a: "Yes — this is exactly the kind of home we work in most often. Older construction means more careful assessment before quoting, and we build honest allowances for hidden conditions into our flat-rate price. We don't lowball the estimate and add surprises at the end.",
			},
			{
				q: "How much does popcorn ceiling removal cost in Hazel Dell?",
				a: "Popcorn ceiling scrape, skim, and retexture in Clark County runs $500–$1,500 depending on room size and whether there is asbestos (homes before 1978 require testing). We assess and quote at the walkthrough.",
			},
		],
	},
	"salmon-creek": {
		name: "Salmon Creek, WA",
		description:
			"NORBILT offers drywall repair, interior finishing, and home updates in Salmon Creek, WA. Salmon Creek has a wide range of home ages and styles, from 1990s developments near Mount Vista to newer construction along the Salmon Creek corridor. Our team matches textures precisely, installs clean trim work, and keeps every project on schedule. We serve all Salmon Creek neighborhoods with free, no-obligation estimates.",
		neighborhoods: ["Mount Vista", "Salmon Creek Estates", "Clineline", "Felida Ridge", "Queensborough"],
		housingNotes:
			"Salmon Creek is a broad north Vancouver corridor with one of the more consistent housing profiles in Clark County — primarily 1990s through early 2000s suburban construction on medium-sized lots. Mount Vista, Salmon Creek Estates, and Queensborough were developed largely during this era and represent the dominant housing type here: two-story suburban homes in generally good condition, now 20–30 years old and entering the age where cosmetic updates and maintenance repairs become priorities. These homes were well-built for their time but the original finishes are showing age. Bathroom tile from 1995 looks dated. Builder-grade trim profiles throughout the main floor are candidates for upgrade. Caulking in wet areas has completed its useful life. Kitchens that were standard-issue in 1998 benefit from backsplash installs, countertop replacements, and hardware updates. Clineline and the older parts of Felida Ridge have a slightly older housing profile — some 1980s construction with more wear. NORBILT works throughout the Salmon Creek area regularly, particularly on the cosmetic update and bathroom remodel requests that define this neighborhood age segment. Same-week estimates for all Salmon Creek addresses.",
		commonProjects: [
			{ name: "Bathroom Cosmetic Refreshes & Remodels", desc: "1990s–early 2000s bathrooms in Salmon Creek are prime candidates for updates — new tile, vanity, fixtures, and lighting without necessarily a full gut." },
			{ name: "Kitchen Updates", desc: "Countertop replacement, backsplash installation, and hardware upgrades are common in Salmon Creek kitchens that are structurally sound but visually dated." },
			{ name: "Finish Carpentry Upgrades", desc: "Builder-grade trim throughout these homes is commonly upgraded — crown molding in main living areas, door and window casing replacements, and wainscoting in dining rooms." },
			{ name: "Flooring Updates", desc: "Original carpet replacements with LVP or hardwood are among the most impactful upgrades in Salmon Creek's 1990s–2000s homes." },
		],
		permitNotes:
			"Salmon Creek is in unincorporated Clark County — all permits are issued through Clark County Community Development (564-397-2375). NORBILT handles permit applications as part of any permitted project.",
		cityFAQs: [
			{
				q: "What's the typical project in a Salmon Creek home?",
				a: "Most Salmon Creek requests are cosmetic updates on well-maintained 1990s–2000s homes: bathroom tile and fixture updates, kitchen backsplash and countertop installs, crown molding additions, and flooring upgrades. These homes don't typically have major structural issues — owners are updating for personal satisfaction or presale value.",
			},
			{
				q: "Do you serve all Salmon Creek neighborhoods including Mount Vista and Clineline?",
				a: "Yes — we serve all Salmon Creek addresses with no travel charge. Mount Vista, Salmon Creek Estates, Clineline, Felida Ridge, and Queensborough are all within our standard service area with same-week estimate availability.",
			},
		],
	},
	"five-corners": {
		name: "Five Corners, WA",
		description:
			"We offer dependable carpentry and handyman solutions in Five Corners, WA. Five Corners sits at the center of several established Vancouver neighborhoods, with homes spanning multiple decades and a wide range of repair and update needs. Our team handles everything from small fixture swaps to multi-room interior projects. We work efficiently, price by the job, and leave every home cleaner than we found it.",
		neighborhoods: ["Sunnyside", "Covington", "Orchards West", "Ellsworth", "Burton"],
		housingNotes:
			"Five Corners is a central Vancouver hub surrounded by established residential neighborhoods. The intersection of 192nd Ave and SE 1st St anchors a community of diverse housing stock — Sunnyside and Covington have 1970s and 1980s homes with the typical deferred maintenance of that era, while newer construction exists on infill lots along the corridors. Orchards West and Ellsworth have a mix that spans from older ranch homes to 1990s two-stories. What Five Corners lacks in neighborhood character it makes up for in accessibility — it's centrally located within east-central Vancouver and one of the fastest areas for us to reach from anywhere in the city. Homes in this area skew toward working families who want practical, reliable repairs done at fair prices without a lengthy sales process. Common calls from Five Corners are drywall patches, fixture replacements, door and window adjustments, and bathroom updates. The housing age range means we see everything from popcorn ceiling removal in older homes to cosmetic bath refreshes in 1990s builds. NORBILT provides same-week estimates for all Five Corners addresses and handles jobs of any size in the area.",
		commonProjects: [
			{ name: "Drywall Repair & Patching", desc: "Settlement cracks and patch repairs are consistent throughout this area's 1970s–1990s housing stock. We match existing textures and deliver paint-ready results." },
			{ name: "Bathroom Updates", desc: "Outdated bathrooms across multiple decades — from 1970s original tile to 1990s builder finishes — are common remodel targets in Five Corners homes." },
			{ name: "Door & Window Repairs", desc: "Older homes throughout Five Corners have sticking doors, worn weatherstripping, and hardware that's failed. Most are resolved in a single visit." },
			{ name: "Handyman Punch Lists", desc: "Multi-task handyman visits are common in Five Corners — homeowners want to clear a list efficiently rather than schedule multiple contractors." },
		],
		permitNotes:
			"Five Corners is in unincorporated Clark County — permits are issued through Clark County Community Development (564-397-2375). NORBILT handles permit applications as part of any permitted project.",
		cityFAQs: [
			{
				q: "Is Five Corners in your regular service area?",
				a: "Yes — Five Corners is one of the most central locations in east Vancouver and a frequent area for NORBILT. No travel surcharge, same-week estimates, and the same licensed standard as any other Clark County address.",
			},
			{
				q: "What's the most common repair call from Five Corners homeowners?",
				a: "Drywall repair and general handyman punch lists are the most frequent — these homes tend to be older and have accumulated deferred maintenance. Bathroom updates are a close second.",
			},
		],
	},
	orchards: {
		name: "Orchards, WA",
		description:
			"NORBILT provides efficient home maintenance and interior repairs in Orchards, WA. The Orchards area includes many 1970s and 1980s homes along Burnt Bridge Creek and Sifton where drywall, trim, doors, and fixtures are due for updates. Our team is familiar with these home styles and the most common issues they develop over time. We provide fast, licensed service for Orchards homeowners at honest flat-rate prices.",
		neighborhoods: ["Burnt Bridge Creek", "Sifton", "Heritage", "Orchards Park", "Hearthwood"],
		housingNotes:
			"Orchards is east Vancouver — a large residential area built primarily from the 1960s through the 1990s, with a housing profile that closely mirrors Hazel Dell and Five Corners in age and condition. Burnt Bridge Creek and Sifton have older homes in the 1960s–1970s range where maintenance repairs are the primary need: drywall settlement cracks, original bathroom tile well past its service life, doors that have shifted off plumb over the decades, and fixtures from a previous era. Heritage and Orchards Park have slightly newer stock from the 1980s and early 1990s where cosmetic updates are the more common ask — bathroom refreshes, kitchen hardware, and trim upgrades. Hearthwood has newer infill construction. Orchards is a practical, family-oriented community where homeowners aren't looking for luxury — they want dependable licensed work at honest prices. We handle everything from quick single-task repairs to full bathroom remodels throughout Orchards. The area is a short drive from our standard operating area and we serve it with the same scheduling priority as Vancouver proper.",
		commonProjects: [
			{ name: "Drywall Repair", desc: "Settlement cracks and patch repairs are consistent throughout Orchards' 1960s–1980s housing stock. Texture matching to orange peel and knockdown finishes is common." },
			{ name: "Bathroom Remodels", desc: "Original 1960s–70s bathrooms in Burnt Bridge Creek and Sifton homes are common full remodel candidates. 1980s homes more often get cosmetic refreshes." },
			{ name: "Door Adjustments & Hardware", desc: "Older homes in Orchards frequently have doors that stick or fail to latch properly due to foundation settling. Most are resolved in under two hours." },
			{ name: "Fixture Replacement", desc: "Outdated lighting, ceiling fans, faucets, and cabinet hardware throughout Orchards homes. Most updates completed in a single half-day visit." },
		],
		permitNotes:
			"Orchards is in unincorporated Clark County — all permits are issued through Clark County Community Development (564-397-2375). NORBILT handles permit applications for all permitted project scopes.",
		cityFAQs: [
			{
				q: "Do you serve Orchards and east Vancouver?",
				a: "Yes. Orchards is within our regular service area — Burnt Bridge Creek, Sifton, Heritage, Orchards Park, and Hearthwood are all standard coverage. No travel surcharge and same-week estimates available.",
			},
			{
				q: "What do older Orchards homes from the 1960s–70s typically need?",
				a: "Drywall repair and texture matching are the most common call. Bathroom remodels — replacing original 1960s tile, fixtures, and vanities — are close behind. Door adjustments and fixture replacements are frequent single-visit repairs throughout the area.",
			},
		],
	},
	"mill-plain": {
		name: "Mill Plain, WA",
		description:
			"Modernize your Mill Plain home with custom trim, flooring updates, and interior repairs from NORBILT. Mill Plain is one of Vancouver's busiest residential corridors, with homes ranging from early 2000s builds to recent new construction in Cimarron and Landover. Whether you need a quick maintenance fix or a room-level interior update, our team delivers clean, professional results. Free estimates for all Mill Plain homeowners.",
		neighborhoods: ["Cimarron", "Landover", "Bennington", "Sullivan Pines", "Fisher's Creek"],
		housingNotes:
			"Mill Plain is one of southeast Vancouver's primary residential corridors — SE Mill Plain Blvd anchors a stretch of suburban development that spans from older 1980s neighborhoods near 162nd Ave to newer construction in Cimarron and Sullivan Pines closer to 192nd. The housing skews newer than most Clark County neighborhoods, with a strong concentration of 2000s–2010s builds that are in generally good condition but beginning to show the expected wear of homes in that age range. Cimarron and Landover have newer homes where finish carpentry upgrades are the most common request — owners want crown molding, wainscoting, and updated trim packages to elevate the builder-grade interiors they moved into. Sullivan Pines and Fisher's Creek are slightly older, with 1990s–2000s construction where bathroom updates and kitchen refreshes are the dominant project type. Flooring upgrades are very common throughout Mill Plain — many homeowners are replacing original carpet with LVP or engineered hardwood. The SE Mill Plain corridor is easy for our crew to reach from anywhere in Clark County, and we serve all Mill Plain neighborhoods with same-week estimate availability.",
		commonProjects: [
			{ name: "Finish Carpentry Upgrades", desc: "Newer Mill Plain homes in Cimarron and Landover frequently get trim upgrades — crown molding, thicker baseboards, and custom door and window casing." },
			{ name: "Flooring Installation", desc: "LVP and hardwood flooring replacements over original carpet are among the most common Mill Plain jobs. Main floor open-plan installs are typical." },
			{ name: "Bathroom Refreshes", desc: "1990s–2000s bathrooms throughout Mill Plain benefit from tile updates, fixture replacements, and vanity swaps without necessarily a full gut remodel." },
			{ name: "Kitchen Updates", desc: "Backsplash installation, countertop replacement, and hardware upgrades in kitchens from the same era are frequent requests from Mill Plain homeowners." },
		],
		permitNotes:
			"Mill Plain is in unincorporated Clark County — permits are issued through Clark County Community Development (564-397-2375). Properties within Vancouver city limits along the Mill Plain corridor use the City of Vancouver Permit Center. NORBILT can confirm jurisdiction during the estimate and handles all permit applications.",
		cityFAQs: [
			{
				q: "Do you serve all of Mill Plain including Cimarron and Sullivan Pines?",
				a: "Yes. We cover all Mill Plain neighborhoods — Cimarron, Landover, Bennington, Sullivan Pines, and Fisher's Creek. Same-week estimates, no travel surcharge, same licensed standard as any Clark County address.",
			},
			{
				q: "What's the most popular upgrade in Mill Plain homes?",
				a: "Flooring replacements — specifically LVP over original carpet — and finish carpentry upgrades are the most frequent requests. Mill Plain's newer housing stock doesn't usually need major repairs; owners are upgrading for aesthetic and resale value.",
			},
		],
	},
	"lake-shore": {
		name: "Lake Shore, WA",
		description:
			"We provide specialized interior repairs and finish carpentry in Lake Shore, WA. Homes near Vancouver Lake and Lakeshore Drive tend to be well-established, with older construction that benefits from trim updates, fixture replacements, and drywall repairs. Our team works carefully in these homes and respects the existing character of each property. We serve all Lake Shore neighborhoods with licensed, insured service and free written estimates.",
		neighborhoods: ["Lakeview Heights", "Lakeshore Dr", "Northwest Lake Shore", "Vancouver Lake", "Highland"],
		housingNotes:
			"Lake Shore is northwest Vancouver, anchored by Vancouver Lake and Lakeshore Drive — a quiet, established residential community that doesn't get as much attention as busier Vancouver corridors but has a loyal base of long-term homeowners. The housing stock in Lake Shore is predominantly older: Lakeview Heights and the Lakeshore Dr corridor have homes from the 1950s through the 1970s, with the character and maintenance challenges that come with properties of that age. Settlement cracks in original drywall are standard. Bathrooms in these homes are frequently still in their original 1960s or 1970s state — harvest gold fixtures, ceramic tile from a different decade, and vanities that haven't been touched since installation. Original wood trim and doors throughout are showing their age but also have a quality of construction that's worth preserving or restoring. Highland and the newer parts of Northwest Lake Shore have more recent construction — 1980s and 1990s homes — where the maintenance needs are similar but less acute. The proximity to Vancouver Lake means some properties have higher moisture levels than inland equivalents, which can accelerate caulk failure and cause drywall issues in basements and lower levels. NORBILT treats Lake Shore homes with care — these are often family properties that have been owned for decades, and repairs should respect the existing character.",
		commonProjects: [
			{ name: "Drywall Repair & Settlement Cracks", desc: "Original drywall throughout 1950s–70s Lake Shore homes develops long settlement cracks along seams and at corners. We repair and texture-match for a like-new result." },
			{ name: "Bathroom Remodels", desc: "Original 1960s–70s bathrooms are a defining feature of Lake Shore's housing stock. Full remodels — new tile, vanity, fixtures — are a common investment for these homes." },
			{ name: "Fixture Replacement", desc: "Outdated lighting, ceiling fans, faucets, and hardware throughout homes of this era. Most updates completed in a single visit with no structural work required." },
			{ name: "Window & Door Maintenance", desc: "Older windows and exterior doors throughout Lake Shore properties need re-caulking, weatherstripping, and hardware replacement. Higher moisture near the lake accelerates wear." },
		],
		permitNotes:
			"Lake Shore is in unincorporated Clark County — all permits are issued through Clark County Community Development (564-397-2375). NORBILT handles permit applications as part of any permitted project scope.",
		cityFAQs: [
			{
				q: "Do you work in Lake Shore and northwest Vancouver?",
				a: "Yes. Lake Shore, Lakeview Heights, Vancouver Lake, and the Highland area are all within our service area. Same-week estimates, no travel surcharge, and the same licensed standard as any Clark County job.",
			},
			{
				q: "Are older Lake Shore homes harder to work on than newer construction?",
				a: "They require more careful assessment during the walkthrough, and we budget honest allowances for conditions typical in that era — non-standard fixture rough-ins, older drywall that requires different finishing approaches, and occasionally materials like plaster or asbestos tile that affect scope. We price these honestly upfront.",
			},
		],
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
