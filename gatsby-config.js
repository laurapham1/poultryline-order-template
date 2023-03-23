/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Poultryline Template App`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.ico"
      }
    },
  ]
}
