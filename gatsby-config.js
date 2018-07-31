module.exports = {
  siteMetadata: {
    title: 'Daniel Milner',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`merriweather\:300,400,900`, `montserrat\:400,700`],
      },
    },
  ],
}
