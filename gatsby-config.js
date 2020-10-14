const path = require('path')

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Norwegian Air - Destinations',
		titleTemplate: '%s · Norwegian Air',
		description: 'Find destination with Norwegian Air.',
		url: 'https://rad-norwegian.netlify.app',
		image: '/images/preview.png',
		author: 'LukeXF',
		authorLink: 'https://github.com/LukeXF',
		twitterUsername: 'fly_norwegian',
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/data/`,
			},
		},

		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/images`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en'
			}
		},
		'gatsby-plugin-remove-trailing-slashes',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Norwegian Destinations',
				short_name: 'norwegian',
				start_url: '/',
				background_color: '#d81939',
				theme_color: '#ffffff',
				display: 'standalone',
				icon: './static/images/favicon/android-chrome-512x512.png',
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				includePaths: [
					`${__dirname}/node_modules`,
					`${__dirname}/src/`,
					`${__dirname}/src/styles`,
				],
				precision: 8,
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@pages': path.resolve(__dirname, 'src/pages'),
					'@reducers': path.resolve(__dirname, 'src/reducers'),
					'@helpers': path.resolve(__dirname, 'src/helpers'),
					'@actions': path.resolve(__dirname, 'src/actions'),
					'@media': path.resolve(__dirname, 'src/media'),
					'@styles': path.resolve(__dirname, 'src/styles'),
					'@fonts': path.resolve(__dirname, 'src/fonts'),
					'@views': path.resolve(__dirname, 'src/views'),
					'@store': path.resolve(__dirname, 'src/store.js'),
				},
				extensions: [],
			},
		},
		'gatsby-plugin-offline'
	],
}
