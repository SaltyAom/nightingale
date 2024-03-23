/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            aspectRatio: {
                '16-10': '16 / 10',
                '9-21': '9 / 14'
            }
        }
    },
    plugins: []
}
