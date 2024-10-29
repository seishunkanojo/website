/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				"sp-md": "400px",
				"sp-lg": "550px",
				"break": "720px",
			},
			colors:{
				"cat-pink": "#c03a7d",
				"moon-blue": "#064072",
			},
		},
		fontFamily: {
			klee: ["Klee One", "cursive"],
			notoJP: ["Noto Sans JP","sans-serif"],
			kaiseiDecol: ["Kaisei Decol", "serif"],
		},
		container:{
			center: true,
		},
	},
	plugins: [],
}
