import type { CollectionEntry } from 'astro:content'

export const siteUrl = new URL('/', import.meta.env.SITE).href
export const blogUrl = new URL('/blog', siteUrl).href

export const person = {
	'@type': 'Person',
	'@id': `${siteUrl}#person`,
	name: 'SaltyAom',
	url: siteUrl,
	description: 'Open source maintainer and cosplayer',
	sameAs: [
		'https://github.com/saltyaom',
		'https://x.com/saltyaom',
		'https://bsky.app/profile/saltyaom.com'
	]
}

export const website = {
	'@type': 'WebSite',
	'@id': `${siteUrl}#website`,
	name: 'SaltyAom',
	url: siteUrl,
	author: person
}

export function blogPosting(id: string, data: CollectionEntry<'blog'>['data']) {
	const url = new URL(`/blog/${id}`, siteUrl).href

	return {
		'@type': 'BlogPosting',
		'@id': `${url}#article`,
		url,
		headline: data.title,
		description: data.description,
		image: new URL(data.cover, siteUrl).href,
		datePublished: data.date.toISOString().slice(0, 10),
		keywords: data.tags,
		author: person,
		mainEntityOfPage: { '@type': 'WebPage', '@id': url },
		isPartOf: { '@type': 'Blog', '@id': `${blogUrl}#blog`, url: blogUrl }
	}
}
