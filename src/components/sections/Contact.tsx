"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const Schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10),
});

export function Contact() {
	const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(formData: FormData) {
		setError(null);
		setState("loading");
		const payload = {
			name: String(formData.get("name") || ""),
			email: String(formData.get("email") || ""),
			message: String(formData.get("message") || ""),
			source: "homepage",
		};
		const parsed = Schema.safeParse(payload);
		if (!parsed.success) {
			setError("Please fill all fields correctly.");
			setState("error");
			return;
		}
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(parsed.data),
			});
			if (!res.ok) throw new Error("Request failed");
			setState("success");
		} catch (e) {
			setError("Something went wrong. Please try again later.");
			setState("error");
		}
	}

	return (
		<section id="contact" className="py-20 sm:py-28 border-t border-white/5">
			<div className="mx-auto max-w-3xl px-6">
				<h2 className="text-2xl sm:text-3xl font-semibold">Start a project</h2>
				<p className="mt-2 text-white/70">Tell us a bit about your goals. We’ll get back within 1–2 business days.</p>

				<form
					className="mt-8 grid gap-4"
					action={async (fd) => onSubmit(fd)}
				>
					<div className="grid sm:grid-cols-2 gap-4">
						<input name="name" placeholder="Your name" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:ring-2 focus:ring-white/40" required />
						<input name="email" placeholder="Email" type="email" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:ring-2 focus:ring-white/40" required />
					</div>
					<textarea name="message" placeholder="Tell us about the project" rows={5} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/40" required />
					<div className="flex items-center gap-3">
						<Button type="submit" disabled={state === "loading"}>
							{state === "loading" ? "Sending…" : state === "success" ? "Sent" : "Send message"}
						</Button>
						{error && <span className="text-sm text-red-300">{error}</span>}
						{state === "success" && <span className="text-sm text-emerald-300">Thanks! We’ll be in touch.</span>}
					</div>
				</form>
			</div>
		</section>
	);
}
