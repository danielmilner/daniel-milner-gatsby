/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const contactTemplate = path.resolve(`src/templates/contact.js`)

  return graphql(`
    {
      allCockpitPages {
        edges {
          node {
            title {
              value
            }
            slug {
              value
            }
            template {
              value
            }
            content {
              value {
                childMarkdownRemark {
                  html
                }
              }
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
    result.data.allCockpitPages.edges.forEach(({ node }) => {
      layoutComponent = pageTemplate
      switch (node.template.value) {
        case 'Projects':
          layoutComponent = projectTemplate
          break
        case 'Contact':
          layoutComponent = contactTemplate
          break
      }
      createPage({
        path: node.slug.value,
        component: layoutComponent,
        context: {
          slug: node.slug.value,
        }, // additional data can be passed via context
      })
    })
  })
}
