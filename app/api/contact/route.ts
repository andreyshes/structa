import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { name, email, phone, projectType, details } = body;

		if (!name || !projectType || !details) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		// Send lead notification + auto-reply in parallel
		await Promise.all([
			// Notification to NORBILT
			resend.emails.send({
				from: "NORBILT <hello@norbilt.com>",
				to: ["hello@norbilt.com"],
				replyTo: email,
				subject: `New Project Inquiry — ${projectType}`,
				html: `
	        <h2>New Contact Form Submission</h2>
	        <p><strong>Name:</strong> ${name}</p>
	        <p><strong>Email:</strong> ${email}</p>
	        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
	        <p><strong>Project Type:</strong> ${projectType}</p>
	        <p><strong>Details:</strong></p>
	        <p>${details}</p>
	      `,
			}),

			// Auto-reply to homeowner (only if email provided)
			email ? resend.emails.send({
				from: "Andrey at NORBILT <hello@norbilt.com>",
				to: [email],
				subject: `Got your ${projectType} inquiry — NORBILT`,
				html: `
					<div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1F2E2B">
						<div style="background:#1F2E2B;padding:24px 32px;border-radius:12px 12px 0 0">
							<p style="color:#FFB800;font-weight:900;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;margin:0">NORBILT · Licensed General Contractor</p>
						</div>
						<div style="background:#ffffff;padding:32px;border:1px solid #E8E4DE;border-top:none;border-radius:0 0 12px 12px">
							<h2 style="font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:-0.02em;margin:0 0 16px">Hey ${name} — got your message.</h2>
							<p style="color:#4B5563;line-height:1.6;margin:0 0 16px">
								I received your inquiry about <strong>${projectType}</strong> and I'll personally reach back out — usually same day, always within 24 hours.
							</p>
							<p style="color:#4B5563;line-height:1.6;margin:0 0 24px">
								If you need to reach me sooner, call or text directly:
							</p>
							<a href="tel:+13602169920" style="display:inline-block;background:#FFB800;color:#000000;font-weight:900;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;padding:14px 28px;border-radius:10px;text-decoration:none">
								(360) 216-9920
							</a>
							<p style="color:#9CA3AF;font-size:12px;margin:24px 0 0">
								Andrey · NORBILT · Licensed WA General Contractor · Clark County
							</p>
						</div>
					</div>
				`,
			}) : Promise.resolve(),
		]);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
