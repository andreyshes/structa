/**
 * Lead scraper — Google Maps via Apify
 * Finds property managers, real estate agents, and investors in Clark County WA
 * Output: scripts/leads.csv
 *
 * Run: node scripts/scrape-leads.mjs
 */

import { ApifyClient } from "apify-client";
import { writeFileSync } from "fs";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const SEARCHES = [
  "property management company Vancouver WA",
  "property management company Clark County WA",
  "property manager Camas WA",
  "property manager Battle Ground WA",
  "real estate investor Vancouver WA",
  "landlord services Vancouver WA",
  "HOA management company Vancouver WA",
  "apartment complex Vancouver WA",
];

console.log("🔍 Starting Google Maps scrape for Clark County leads...\n");

const run = await client.actor("compass/crawler-google-places").call({
  searchStringsArray: SEARCHES,
  maxCrawledPlacesPerSearch: 40,
  language: "en",
  countryCode: "us",
  includeHistogram: false,
  includeOpeningHours: false,
  includePeopleAlsoSearch: false,
});

console.log(`✅ Scrape complete. Fetching results...`);

const { items } = await client.dataset(run.defaultDatasetId).listItems();

console.log(`📦 ${items.length} raw results returned\n`);

// Filter to Clark County / SW Washington area only
const filtered = items.filter((p) => {
  const addr = (p.address || "").toLowerCase();
  const state = (p.state || "").toLowerCase();
  const city = (p.city || "").toLowerCase();
  const inWA = state === "wa" || addr.includes(", wa") || addr.includes("washington");
  const inArea =
    addr.includes("vancouver") ||
    addr.includes("camas") ||
    addr.includes("battle ground") ||
    addr.includes("ridgefield") ||
    addr.includes("washougal") ||
    addr.includes("brush prairie") ||
    addr.includes("hazel dell") ||
    addr.includes("salmon creek") ||
    addr.includes("orchards") ||
    addr.includes("clark county") ||
    city.includes("vancouver") ||
    city.includes("camas");
  return inWA && inArea;
});

console.log(`📍 ${filtered.length} leads in Clark County / SW Washington\n`);

// Deduplicate by place ID
const seen = new Set();
const unique = filtered.filter((p) => {
  if (seen.has(p.placeId)) return false;
  seen.add(p.placeId);
  return true;
});

console.log(`🧹 ${unique.length} unique leads after dedup\n`);

// Sort by review count descending (bigger = more established)
unique.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));

// Build CSV
const headers = [
  "Business Name",
  "Category",
  "Phone",
  "Website",
  "Address",
  "City",
  "State",
  "ZIP",
  "Rating",
  "Reviews",
  "Google Maps URL",
];

function esc(val) {
  if (!val) return "";
  const s = String(val).replace(/"/g, '""');
  return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s}"` : s;
}

const rows = unique.map((p) => [
  esc(p.title),
  esc(p.categoryName),
  esc(p.phone),
  esc(p.website),
  esc(p.address),
  esc(p.city),
  esc(p.state),
  esc(p.postalCode),
  esc(p.totalScore),
  esc(p.reviewsCount),
  esc(p.url),
]);

const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

writeFileSync("scripts/leads.csv", csv, "utf8");

console.log(`✅ Saved to scripts/leads.csv`);
console.log(`\n📊 Summary:`);
console.log(`   Total leads: ${unique.length}`);
console.log(`   With phone:  ${unique.filter((p) => p.phone).length}`);
console.log(`   With website: ${unique.filter((p) => p.website).length}`);
console.log(`\nTop 10 leads by review count:`);
unique.slice(0, 10).forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.title} — ${p.phone || "no phone"} (${p.reviewsCount || 0} reviews)`);
});
