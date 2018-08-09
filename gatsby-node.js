/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const contactTemplate = path.resolve(`src/templates/contact.js`)

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^(?=.*/cms/pages)/gm" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    let layoutComponent = pageTemplate
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      layoutComponent = pageTemplate
      switch (node.frontmatter.layout) {
        case 'projects':
          layoutComponent = projectTemplate
          break
        case 'contact':
          layoutComponent = contactTemplate
          break
      }
      createPage({
        path: node.frontmatter.path,
        component: layoutComponent,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
