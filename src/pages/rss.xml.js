import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const posts = await getCollection('blog')

	return rss({
		title: 'SaltyAom',
		description: 'SaltyAom, open source maintainer and cosplayer',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.date.toString(),
			link: `/blog/${post.slug}`
		}))
	})
}
