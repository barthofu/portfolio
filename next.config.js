const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {

	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',

	sassOptions: {
		includePaths: [path.join(__dirname, 'public/styles/')],
	},

	// i18n: {
	// 	locales: ['en', 'fr'],
	// 	defaultLocale: 'en'
	// }
}

module.exports = nextConfig
