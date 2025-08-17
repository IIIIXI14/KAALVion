import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email(),
	message: z.string().min(10).max(5000),
	source: z.string().optional(),
});

export async function POST(request: Request) {
	try {
		const json = await request.json();
		const parsed = ContactSchema.safeParse(json);
		if (!parsed.success) {
			return NextResponse.json(
				{ error: "Invalid payload", details: parsed.error.flatten() },
				{ status: 400 }
			);
		}

		const resendApiKey = process.env.RESEND_API_KEY;
		const toEmail = process.env.CONTACT_TO_EMAIL;
		const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
		if (!resendApiKey || !toEmail) {
			return NextResponse.json(
				{ error: "Server not configured" },
				{ status: 500 }
			);
		}

		const resend = new Resend(resendApiKey);
		await resend.emails.send({
			from: fromEmail,
			to: toEmail,
			replyTo: parsed.data.email,
			subject: `New contact request from ${parsed.data.name}`,
			html: `
				<h2>New Contact Request</h2>
				<p><strong>Name:</strong> ${parsed.data.name}</p>
				<p><strong>Email:</strong> ${parsed.data.email}</p>
				<p><strong>Source:</strong> ${parsed.data.source ?? "n/a"}</p>
				<p><strong>Message:</strong></p>
				<p>${parsed.data.message.replace(/\n/g, "<br/>")}</p>
			`,
		});

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ error: "Unexpected error" },
			{ status: 500 }
		);
	}
} 