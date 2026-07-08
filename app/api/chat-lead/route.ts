import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const { messages } = await req.json();

	// Quick Haiku check — did the user share contact info in this conversation?
	const extraction = await client.messages.create({
		model: "claude-haiku-4-5-20251001",
		max_tokens: 200,
		system: `Extract contact info from a chat conversation. Return ONLY valid JSON, no other text:
{
  "hasLead": <true if user shared name AND/OR phone/email, false otherwise>,
  "name": "<name or null>",
  "phone": "<phone number or null>",
  "email": "<email or null>",
  "projectType": "<what project/service they mentioned, or null>"
}`,
		messages: [
			{
				role: "user",
				content: `Chat conversation:\n${messages.map((m: { role: string; content: string }) => `${m.role.toUpperCase()}: ${m.content}`).join("\n")}\n\nDid the user share their name and/or phone number or email?`,
			},
		],
	});

	const text = extraction.content[0].type === "text" ? extraction.content[0].text : "{}";
	const raw = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
	const lead = JSON.parse(raw);

	if (!lead.hasLead || (!lead.name && !lead.phone && !lead.email)) {
		return NextResponse.json({ captured: false });
	}

	// Build a short conversation summary for context
	const summary = messages
		.slice(-8)
		.map((m: { role: string; content: string }) => `<b>${m.role === "user" ? "Homeowner" : "Bot"}:</b> ${m.content}`)
		.join("<br/>");

	await resend.emails.send({
		from: "NORBILT Chat <hello@norbilt.com>",
		to: ["hello@norbilt.com"],
		subject: `New Chat Lead — ${lead.name || "Unknown"} — ${lead.projectType || "Home project"}`,
		html: `
			<div style="font-family:sans-serif;max-width:560px;color:#1F2E2B">
				<div style="background:#1F2E2B;padding:20px 28px;border-radius:12px 12px 0 0">
					<p style="color:#FFB800;font-weight:900;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;margin:0">NORBILT Chat Lead</p>
				</div>
				<div style="background:#fff;padding:28px;border:1px solid #E8E4DE;border-top:none;border-radius:0 0 12px 12px">
					<table style="width:100%;border-collapse:collapse;margin-bottom:20px">
						<tr><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;width:120px;color:#6B7280;font-size:13px;font-weight:700">Name</td><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;font-weight:700">${lead.name || "—"}</td></tr>
						<tr><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;color:#6B7280;font-size:13px;font-weight:700">Phone</td><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;font-weight:700">${lead.phone ? `<a href="tel:${lead.phone}" style="color:#2D5A3D">${lead.phone}</a>` : "—"}</td></tr>
						<tr><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;color:#6B7280;font-size:13px;font-weight:700">Email</td><td style="padding:8px 0;border-bottom:1px solid #F3F4F6;font-weight:700">${lead.email || "—"}</td></tr>
						<tr><td style="padding:8px 0;color:#6B7280;font-size:13px;font-weight:700">Project</td><td style="padding:8px 0;font-weight:700">${lead.projectType || "—"}</td></tr>
					</table>
					<p style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#6B7280;margin:0 0 10px">Chat Transcript</p>
					<div style="background:#F8F6F3;border-radius:8px;padding:16px;font-size:13px;line-height:1.7;color:#374151">${summary}</div>
				</div>
			</div>
		`,
	});

	return NextResponse.json({ captured: true, name: lead.name, phone: lead.phone });
}
