/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			klee: ["Klee One", "cursive"],
			shippori: ["Shippori Mincho B1","serif"],
		},
		container:{
			center: true,
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
