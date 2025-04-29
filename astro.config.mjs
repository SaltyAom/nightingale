import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import syntax from './config/syntax-theme.json'

// https://astro.build/config
export default defineConfig({
	site: 'https://saltyaom.com',
	integrations: [mdx(), sitemap(), react()],

	markdown: {
		shikiConfig: {
			theme: syntax
		}
	},

	vite: {
		plugins: [tailwindcss()]
	}
})
