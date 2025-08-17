import type { MetadataRoute } from "next";

function getBaseUrl() {
	const explicit = process.env.NEXT_PUBLIC_SITE_URL;
	if (explicit) return explicit;
	const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
	return vercel ?? "http://localhost:3000";
}

const work = ["metropolis-test-drive", "symphony-of-vines", "adhd-experience"];

export default function sitemap(): MetadataRoute.Sitemap {
	const base = getBaseUrl();
	const pages: MetadataRoute.Sitemap = [
		{ url: `${base}/`, lastModified: new Date() },
		{ url: `${base}/work`, lastModified: new Date() },
		{ url: `${base}/about`, lastModified: new Date() },
		{ url: `${base}/contact`, lastModified: new Date() },
		...work.map((slug) => ({ url: `${base}/work/${slug}`, lastModified: new Date() })),
	];
	return pages;
}
