import Link from "next/link";

export default function NotFound() {
	return (
		<div className="mx-auto max-w-3xl px-6 py-24 text-center">
			<h1 className="text-4xl font-semibold">Page not found</h1>
			<p className="mt-3 text-white/70">The page you are looking for doesn’t exist or has been moved.</p>
			<div className="mt-8">
				<Link href="/" className="rounded-full bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition">Back home</Link>
			</div>
		</div>
	);
}
