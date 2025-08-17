type Case = {
	title: string;
	description: string;
	roles: string[];
};

const cases: Record<string, Case> = {
	"metropolis-test-drive": {
		title: "Metropolis Test Drive",
		description: "A linear, seven-step interactive journey explaining a seamless parking process.",
		roles: ["Interaction Design", "WebGL", "Narrative"],
	},
	"symphony-of-vines": {
		title: "The Symphony of Vines",
		description: "An immersive, cursor-explorable brand story using WebGL layers and sound.",
		roles: ["Creative Direction", "WebGL", "Story"],
	},
	"adhd-experience": {
		title: "ADHD Experience",
		description: "Evidence-informed visualizations to mirror non-linear attention patterns.",
		roles: ["UX Research", "Motion", "Education"],
	},
};

export default function CasePage({ params }: { params: { slug: string } }) {
	const data = cases[params.slug];
	if (!data) {
		return (
			<div className="mx-auto max-w-4xl px-6 py-20">
				<h1 className="text-3xl font-semibold">Not found</h1>
				<p className="mt-2 text-white/70">We couldn&apos;t find this case study.</p>
			</div>
		);
	}
	return (
		<div className="mx-auto max-w-4xl px-6 py-20">
			<h1 className="text-3xl sm:text-4xl font-semibold">{data.title}</h1>
			<p className="mt-3 text-white/70">{data.description}</p>
			<ul className="mt-6 flex flex-wrap gap-2">
				{data.roles.map((r) => (
					<li key={r} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">{r}</li>
				))}
			</ul>
			<div className="mt-10 space-y-6">
				<div className="aspect-[16/9] rounded-xl bg-white/5 border border-white/10" />
				<div className="aspect-[16/9] rounded-xl bg-white/5 border border-white/10" />
			</div>
		</div>
	);
}
