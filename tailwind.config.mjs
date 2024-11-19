import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#13151a',
				primary: '#bb3fff',
				secondary: '#84cae7',
				accent: '#bca8ff',
				inmobiliaria4: '#758c7d',
				portico: '#151a36',
				monitoring: '#77d5dc',
			},
			fontFamily: {
				IBM: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
				IBMCondensed: ['IBM Plex Sans Condensed', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
    require('tailwindcss-animated')
  ],
}
