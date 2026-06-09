import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "";
const BASE_URL = "https://www.norbilt.com";

// All canonical URLs to ping when submitting to IndexNow
const ALL_URLS = [
	`${BASE_URL}/`,
	`${BASE_URL}/about`,
	`${BASE_URL}/contact`,
	`${BASE_URL}/services`,
	`${BASE_URL}/services/handyman`,
	`${BASE_URL}/services/home-repair`,
	`${BASE_URL}/services/drywall-repair`,
	`${BASE_URL}/services/finish-carpentry`,
	`${BASE_URL}/services/kitchen-bath`,
	`${BASE_URL}/services/flooring`,
	`${BASE_URL}/services/door-window`,
	`${BASE_URL}/services/lighting`,
	`${BASE_URL}/locations`,
	`${BASE_URL}/locations/vancouver`,
	`${BASE_URL}/locations/camas`,
	`${BASE_URL}/locations/ridgefield`,
	`${BASE_URL}/locations/battle-ground`,
	`${BASE_URL}/locations/washougal`,
	`${BASE_URL}/locations/brush-prairie`,
	`${BASE_URL}/locations/felida`,
	`${BASE_URL}/locations/hazel-dell`,
	`${BASE_URL}/locations/salmon-creek`,
	`${BASE_URL}/locations/five-corners`,
	`${BASE_URL}/locations/orchards`,
	`${BASE_URL}/locations/mill-plain`,
	`${BASE_URL}/locations/lake-shore`,
	`${BASE_URL}/pricing`,
	`${BASE_URL}/calculator`,
	`${BASE_URL}/faq`,
	`${BASE_URL}/reviews`,
	`${BASE_URL}/portfolio`,
	`${BASE_URL}/blog`,
	`${BASE_URL}/blog/home-remodeling-clark-county-wa`,
	`${BASE_URL}/blog/flooring-installation-cost-clark-county-wa`,
	`${BASE_URL}/blog/drywall-repair-cost-clark-county-wa`,
	`${BASE_URL}/blog/bathroom-remodel-cost-clark-county-wa`,
	`${BASE_URL}/blog/kitchen-remodel-cost-clark-county-wa`,
	`${BASE_URL}/blog/bathtub-to-shower-conversion-cost-clark-county-wa`,
	`${BASE_URL}/blog/bathroom-remodel-cost-vancouver-wa`,
	`${BASE_URL}/blog/kitchen-remodel-cost-vancouver-wa`,
	`${BASE_URL}/blog/handyman-cost-vancouver-wa`,
	`${BASE_URL}/blog/finish-carpentry-cost-vancouver-wa`,
	`${BASE_URL}/blog/flooring-installation-cost-vancouver-wa`,
	`${BASE_URL}/blog/drywall-repair-cost-vancouver-wa`,
	`${BASE_URL}/blog/bathroom-remodel-cost-camas-wa`,
	`${BASE_URL}/blog/kitchen-remodel-cost-camas-wa`,
	`${BASE_URL}/blog/home-remodeling-camas-wa`,
	`${BASE_URL}/blog/handyman-services-camas-wa`,
	`${BASE_URL}/blog/flooring-installation-cost-camas-wa`,
	`${BASE_URL}/blog/bathroom-remodel-cost-battle-ground-wa`,
	`${BASE_URL}/blog/kitchen-remodel-cost-battle-ground-wa`,
	`${BASE_URL}/blog/battle-ground-handyman-cost`,
	`${BASE_URL}/blog/battle-ground-handyman-what-to-expect`,
	`${BASE_URL}/blog/bathroom-remodel-cost-ridgefield-wa`,
	`${BASE_URL}/blog/kitchen-remodel-cost-ridgefield-wa`,
	`${BASE_URL}/blog/home-repairs-before-selling-clark-county-wa`,
	`${BASE_URL}/blog/signs-you-need-bathroom-remodel-vancouver-wa`,
	`${BASE_URL}/blog/licensed-contractor-vs-handyman-washington-state`,
	`${BASE_URL}/blog/clark-county-home-repair-checklist`,
];

// GET /api/indexnow — submit all URLs to Bing IndexNow
export async function GET(req: NextRequest) {
	const authHeader = req.headers.get("authorization");
	const expectedAuth = `Bearer ${process.env.INDEXNOW_ADMIN_SECRET ?? ""}`;

	if (!INDEXNOW_KEY) {
		return NextResponse.json({ error: "INDEXNOW_KEY not set" }, { status: 500 });
	}
	if (!authHeader || authHeader !== expectedAuth) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const body = {
		host: "www.norbilt.com",
		key: INDEXNOW_KEY,
		keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
		urlList: ALL_URLS,
	};

	const res = await fetch("https://api.indexnow.org/indexnow", {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=utf-8" },
		body: JSON.stringify(body),
	});

	return NextResponse.json({
		status: res.status,
		ok: res.ok,
		urlsSubmitted: ALL_URLS.length,
	});
}
