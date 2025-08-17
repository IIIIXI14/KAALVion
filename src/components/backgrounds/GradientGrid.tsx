export function GradientGrid() {
	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-20 opacity-60"
			style={{
				backgroundImage:
					"radial-gradient(60rem 60rem at 50% -10rem, rgba(110,231,249,0.08), transparent 60%), radial-gradient(40rem 40rem at 90% 10%, rgba(168,85,247,0.06), transparent 60%), radial-gradient(50rem 50rem at 10% 40%, rgba(255,255,255,0.04), transparent 60%), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px)",
				maskImage:
					"radial-gradient(120rem 80rem at 50% 10rem, black, transparent 70%)",
			}}
		/>
	);
}
