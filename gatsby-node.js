/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { paginate } = require('gatsby-awesome-pagination')

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const postTemplate = path.resolve(`src/templates/post.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const contactTemplate = path.resolve(`src/templates/contact.js`)
  const postListTemplate = path.resolve(`src/templates/post-list.js`)

  return graphql(`
    {
      pages: allCockpitPages {
        edges {
          node {
            cockpitId
            slug {
              value
            }
            template {
              value
            }
          }
        }
      }
      posts: allCockpitPosts(
        filter: { published: { value: { eq: true } } }
        sort: { fields: [date___value], order: DESC }
      ) {
        edges {
          node {
            slug {
              value
            }
            cockpitId
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    let layoutComponent = pageTemplate
    result.data.pages.edges.forEach(({ node }) => {
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
          cockpitId: node.cockpitId,
        }, // additional data can be passed via context
      })
    })
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.value,
        component: postTemplate,
        context: {
          cockpitId: node.cockpitId,
        },
      })
    })

    paginate({
      createPage, // The Gatsby `createPage` function
      items: result.data.posts.edges, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
      component: postListTemplate, // Just like `createPage()`
    })
  })
}
