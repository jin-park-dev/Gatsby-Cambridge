const path = require('path')

module.exports = {
  pathPrefix: `/~jp835`,
  siteMetadata: {
    title: `Jin Park`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // path: `${__dirname}/static`,
        path: path.join(__dirname, `static`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-htaccess',
    //   options: {
    //     RewriteBase: '/~jp835/',
    //     // https: true,
    //     // www: true,
    //     // SymLinksIfOwnerMatch: true,
    //     // host: 'www.mydomain.com', // if 'www' is set to 'false', be sure to also remove it here!
    //     ErrorDocument: `
    //       ErrorDocument 401 /error_pages/401.html
    //       ErrorDocument 404 /error_pages/404.html
    //       ErrorDocument 500 /error_pages/500.html
    //     `,
    //     // redirect: [
    //     //   'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
    //     //   {
    //     //     from: 'my-domain.com',
    //     //     to: 'mydomain.com',
    //     //   },
    //     //   {
    //     //     from: 'my-other-domain.com',
    //     //     to: 'mydomain.com',
    //     //   },
    //     // ],
    //     // custom: `
    //     //     # This is a custom rule!
    //     //     # This is a another custom rule!
    //     // `,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
