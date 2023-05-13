/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		  'print': {'raw': 'print'},
		},
		fontFamily: {
		  sans: ['Gotham SSm A, sans-serif']
		},
		extend: {},
	  },
	  plugins: [],
	}

/* // tailwind.config.js
module.exports = {
	theme: {
	  screens: {
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
		'2xl': '1536px',
		'print': {'raw': 'print'},
	  },
	  fontFamily: {
		sans: ['Gotham SSm A, sans-serif']
	  },
	  extend: {},
	},
	plugins: [],
  }
   */