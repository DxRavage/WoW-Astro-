/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			navbarprimarybutton: '#aa2409',
			navbarprimaryhover: '#b23300',
			navbarsecondarybutton: '#180f01',
			navbarsecondaryhover: '#20170e',
			navbarprimary: 'rgba(60, 42, 41, 0.8)',
			navbarmenu: '#2b1d1c',
			navbarbadge: '#f8b700', 
			yellow: '#f7b10a',
			bgbuttonred: '#b06601'
		  }
	},
	plugins: [],
}
