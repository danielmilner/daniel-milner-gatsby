module.exports = {
  siteMetadata: {
    title: 'Daniel Milner',
    siteUrl: 'https://danielmilner.com',
    description: 'Full Stack Web Developer',
    banner: '',
    siteLanguage: 'en',
    ogLanguage: 'en_US',
    twitter: '@danielmilner', // Twitter Username
    facebook: 'Daniel Milner', // Facebook Site Name
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wordPress`,
        url: `https://wordpress.danielmilner.com/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Assistant`,
            variants: [`200`, `300`, `400`, `600`, `800`],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Daniel Milner',
        short_name: 'Daniel',
        start_url: '/',
        background_color: '#8B388C',
        theme_color: '#8B388C',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/daniel.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
