/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				red: {
					DEFAULT: '#FF2E2E'
				},
				gray: {
					light: '#C6C6C6',
					DEFAULT: '#8A8A8A',
					middle: '#8A8A8A',
					darker: '#404040',
					darken: '#1E1E1E'
				}
			},
			fontFamily: {
				yellowtail: ['Yellowtail', 'cursive'],
				firacode: ['Fira Code', 'monospace'],
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
