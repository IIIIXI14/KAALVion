"use client";

import { Reveal } from "@/components/motion/Reveal";

const projects = [
	{
		title: "Metropolis Test Drive",
		desc: "Experiential onboarding with WebGL and linear narrative.",
	},
	{ title: "Symphony of Vines", desc: "Interactive brand story with cursor exploration." },
	{ title: "ADHD Experience", desc: "Evidence-informed visuals that build empathy." },
];

export function Work() {
	return (
		<section id="work" className="py-20 sm:py-28 border-t border-white/5">
			<div className="mx-auto max-w-6xl px-6">
				<Reveal>
					<h2 className="text-2xl sm:text-3xl font-semibold">Selected work</h2>
				</Reveal>
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((p, i) => (
						<Reveal key={p.title} delay={i * 0.05}>
							<article className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
								<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/0 group-hover:from-white/20" />
								<div className="p-5">
									<h3 className="font-medium">{p.title}</h3>
									<p className="mt-1 text-sm text-white/70">{p.desc}</p>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
