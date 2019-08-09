/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { paginate } = require('gatsby-awesome-pagination')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const path = require('path')

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WordPress_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/page.js`)
  const postTemplate = path.resolve(`src/templates/post.js`)
  const homeTemplate = path.resolve(`src/templates/home.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const contactTemplate = path.resolve(`src/templates/contact.js`)
  const postListTemplate = path.resolve(`src/templates/post-list.js`)

  return graphql(`
    {
      wp {
        pages(where: { status: PUBLISH }) {
          edges {
            node {
              id: pageId
              slug
              ftConfig {
                template
              }
            }
          }
        }
        posts(
          where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }
        ) {
          edges {
            node {
              id: postId
              slug
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
    result.data.wp.pages.edges.forEach(({ node }) => {
      layoutComponent = pageTemplate
      switch (node.ftConfig.template) {
        case 'Home':
          layoutComponent = homeTemplate
          break
        case 'Projects':
          layoutComponent = projectTemplate
          break
        case 'Contact':
          layoutComponent = contactTemplate
          break
      }
      createPage({
        path: `/${node.slug === 'home' ? '' : node.slug}`,
        component: layoutComponent,
        context: {
          id: node.id,
        }, // additional data can be passed via context
      })
    })
    result.data.wp.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: postTemplate,
        context: {
          id: node.id,
        },
      })
    })

    paginate({
      createPage, // The Gatsby `createPage` function
      items: result.data.wp.posts.edges, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
      component: postListTemplate, // Just like `createPage()`
    })
  })
}
