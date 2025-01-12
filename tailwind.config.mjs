/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			klee: ["Klee One", "cursive"],
		},
		container:{
			center: true,
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
