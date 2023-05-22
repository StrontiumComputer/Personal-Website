/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge:
	[
		'./src/**/*.html',
		'./src/**/*.astro',
		'./src/**/*.js',
	],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
