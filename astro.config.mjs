import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

import syntax from './config/syntax-theme.json'

// https://astro.build/config
export default defineConfig({
	site: 'https://saltyaom.com',
	integrations: [mdx(), sitemap(), react(), tailwind()],
	markdown: {
		shikiConfig: {
			theme: syntax
		}
	}
})
