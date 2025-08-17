import Link from "next/link";

const projects = [
	{ slug: "metropolis-test-drive", title: "Metropolis Test Drive", summary: "Experiential onboarding with WebGL." },
	{ slug: "symphony-of-vines", title: "The Symphony of Vines", summary: "Interactive brand story." },
	{ slug: "adhd-experience", title: "ADHD Experience", summary: "Evidence-informed visualizations." },
];

export default function WorkPage() {
	return (
		<div className="mx-auto max-w-6xl px-6 py-20">
			<h1 className="text-3xl sm:text-4xl font-semibold">Work</h1>
			<p className="mt-3 text-white/70 max-w-2xl">Selected projects showcasing interactive, animation-forward design.</p>
			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((p) => (
					<Link key={p.slug} href={`/work/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
						<div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
						<h3 className="mt-4 font-medium">{p.title}</h3>
						<p className="mt-1 text-sm text-white/70">{p.summary}</p>
					</Link>
				))}
			</div>
		</div>
	);
}
