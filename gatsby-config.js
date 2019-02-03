module.exports = {
  siteMetadata: {
    title: 'Daniel Milner',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `@fika/gatsby-source-cockpit`,
      options: {
        token: `6ac3bdf838484acebba54f65a729bc`,
        baseUrl: `http://cms.danielmilner.com`,
        locales: [],
        collections: null,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
            },
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`merriweather\:300,400,900`, `ubuntu\:300,400,700`],
      },
    },
  ],
}
