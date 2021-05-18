const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				// eslint-disable-next-line quotes
				'hero-image': "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2044837-jpeg.jpg')"
			})
		},
		colors: {
			black: colors.black,
			white: colors.white,
			lime: colors.lime,
			grey: colors.gray,
			yellow: colors.yellow,
			transparent: colors.transparent
		}
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
