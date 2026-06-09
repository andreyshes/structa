const BASE_URL = "https://www.norbilt.com";

const portfolioImages = [
	{
		loc: "/remodel-images/Untitled%20design%20(2).jpg",
		title: "Master Bathroom Vanity Remodel — Vancouver WA",
		caption: "Before and after master bath vanity remodel by NORBILT general contractor, Vancouver WA",
	},
	{
		loc: "/remodel-images/IMG_1897%202.jpg",
		title: "Full Shower Tile & Glass Door — Vancouver WA",
		caption: "Marble tile shower with frameless glass door installation by NORBILT, Clark County WA",
	},
	{
		loc: "/remodel-images/IMG_2490.jpg",
		title: "Tub Surround Tile Installation — Vancouver WA",
		caption: "Marble tile tub surround installation completed by NORBILT licensed contractor, Vancouver WA",
	},
	{
		loc: "/remodel-images/IMG_7646.jpg",
		title: "Full Kitchen Remodel — Gray Cabinets & Gold Hardware — Vancouver WA",
		caption: "Full kitchen remodel with gray cabinets and gold hardware by NORBILT, Vancouver WA",
	},
	{
		loc: "/remodel-images/IMG_7645.jpg",
		title: "Kitchen Cabinets & Tile Backsplash — Vancouver WA",
		caption: "Kitchen cabinet update with subway tile backsplash installation by NORBILT, Clark County WA",
	},
	{
		loc: "/remodel-images/IMG_7649.jpg",
		title: "Kitchen Remodel Stove Side — Gray Cabinets — Vancouver WA",
		caption: "Kitchen remodel showing new gray cabinets with stainless appliances by NORBILT, Vancouver WA",
	},
	{
		loc: "/remodel-images/IMG_6433.jpg",
		title: "Cedar Fence & Stamped Concrete Patio — Vancouver WA",
		caption: "Cedar fence and stamped concrete patio installation by NORBILT contractor, Vancouver WA",
	},
	{
		loc: "/remodel-images/IMG_6429.jpg",
		title: "Cedar Privacy Fence with Retaining Wall — Clark County WA",
		caption: "Cedar privacy fence with retaining wall installation by NORBILT, Clark County WA",
	},
	{
		loc: "/remodel-images/IMG_6432.jpg",
		title: "Cedar Fence & Paver Patio — Vancouver WA",
		caption: "Cedar fence with paver patio backyard installation by NORBILT general contractor, Vancouver WA",
	},
	{
		loc: "/remodel-images/remodel-0.jpg",
		title: "Wide-Plank Hardwood Flooring — Open Living Room — Vancouver WA",
		caption: "Wide plank hardwood flooring installation in open concept living room by NORBILT, Vancouver WA",
	},
	{
		loc: "/remodel-images/remodel-1.jpg",
		title: "Hardwood Flooring Living Room with Stone Fireplace — Clark County WA",
		caption: "Hardwood flooring installation in living room with stone fireplace by NORBILT, Clark County WA",
	},
	{
		loc: "/remodel-images/remodel-2.jpg",
		title: "LVP Flooring Installation Living Room — Vancouver WA",
		caption: "Luxury vinyl plank flooring installation in living room with brick fireplace by NORBILT, Vancouver WA",
	},
	{
		loc: "/remodel-images/remodel-3.jpg",
		title: "Wide-Plank Hardwood Flooring Upper Landing — Clark County WA",
		caption: "Wide plank hardwood flooring installed on upper landing and staircase by NORBILT, Clark County WA",
	},
];

export async function GET() {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/portfolio</loc>
    ${portfolioImages
		.map(
			(img) => `<image:image>
      <image:loc>${BASE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`,
		)
		.join("\n    ")}
  </url>
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=300",
		},
	});
}
