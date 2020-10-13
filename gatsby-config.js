const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Norwegian Destinations",
    titleTemplate: "%s · Norwegian",
    description: "Find destination on Norwegian.",
    url: "https://norwegian.com",
    image: "/images/preview.png",
    author: "LukeXF",
    authorLink: "https://github.com/LukeXF"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images"
      }
    },
    "gatsby-plugin-remove-trailing-slashes",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Norwegian Destinations",
        short_name: "norwegian",
        start_url: "/",
        background_color: "#d81939",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "./src/assets/images/norwegian_logo.png"
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [
          `${__dirname}/node_modules`,
          `${__dirname}/src/`,
          `${__dirname}/src/styles`
        ],
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@pages": path.resolve(__dirname, "src/pages"),
          "@reducers": path.resolve(__dirname, "src/reducers"),
          "@helpers": path.resolve(__dirname, "src/helpers"),
          "@actions": path.resolve(__dirname, "src/actions"),
          "@media": path.resolve(__dirname, "src/media"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@fonts": path.resolve(__dirname, "src/fonts"),
          "@views": path.resolve(__dirname, "src/views"),
          "@store": path.resolve(__dirname, "src/store.js")
        },
        extensions: []
      }
    }
  ]
}
