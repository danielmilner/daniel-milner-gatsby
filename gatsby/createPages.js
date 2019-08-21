const path = require('path')

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
    query GET_PAGES($first:Int, $after:String){
        wordPress {
            pages(first: $first, after: $after, where: { status: PUBLISH }) {
                pageInfo {
                    endCursor
                    hasNextPage
                }
                nodes {
                    id
                    uri
                    pageId
                    title
                    ftConfig {
                        template
                    }
                }
            }
        }
  }`

  const { createPage } = actions
  const allPages = []

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wordPress: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return allPages
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    const homeTemplate = path.resolve(`./src/templates/home.js`)
    const projectTemplate = path.resolve(`./src/templates/project.js`)
    const contactTemplate = path.resolve(`./src/templates/contact.js`)

    allPages.map(page => {
      console.log(`create page: ${page.uri}`)
      layoutComponent = pageTemplate
      switch (page.ftConfig.template) {
        case 'Home':
          layoutComponent = homeTemplate
          page.uri = ''
          break
        case 'Projects':
          layoutComponent = projectTemplate
          break
        case 'Contact':
          layoutComponent = contactTemplate
          break
      }
      createPage({
        path: `/${page.uri}`,
        component: layoutComponent,
        context: page,
      })
    })
  })
}
