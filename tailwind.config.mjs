/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            aspectRatio: {
                '16-10': '16 / 10',
                '16-9': '16 / 9',
                '9-14': '9 / 14',
                '31-21': '31 / 21'
            }
        }
    },
    plugins: []
}
