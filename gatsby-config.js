/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipes",
    description: "Nice and clean recipes data site",
    author: "@mike++",
    person: { name: "Mike", age: 25 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "Mike", age: 30 },
      { name: "Abdullah", age: 6 },
      { name: "Abdurahman", age: 4 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/src/examples`,
      },
    },
  ],
}
