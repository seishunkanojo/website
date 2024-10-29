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
				"green-blue-ai": "#267180",
				"gray-ai": "#2c363d",
				"white-gray": "#deece7",
				"pink-ai": "#fa938c"
			},
		},
		fontFamily: {
			klee: ["Klee One", "cursive"],
			shippori: ["Shippori Mincho B1","serif"],
		},
		container:{
			center: true,
		},
	},
	plugins: [],
}
