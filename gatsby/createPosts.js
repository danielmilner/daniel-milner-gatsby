const path = require('path')

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
    query GET_POSTS($first:Int $after:String){
        wordPress {
            posts(first: $first, after: $after, where: { status: PUBLISH, orderby: [{ field: DATE, order: DESC }] }) {
                pageInfo {
                    endCursor
                    hasNextPage
                }
                nodes {
                    id
                    uri
                    postId
                    title
                }
            }
        }
  }`

  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wordPress: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const blogTemplate = path.resolve(`./src/templates/post-list.js`)
      const blogPagePath = !variables.after ? `/blog` : `/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 10, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)
      createPage({
        path: `/${post.uri}/`,
        component: postTemplate,
        context: post,
      })
    })
  })
}
