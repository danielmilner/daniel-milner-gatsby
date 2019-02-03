import React from 'react'
import { graphql } from 'gatsby'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PostListItem from '../components/PostListItem'

require('prismjs/themes/prism-tomorrow.css')

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const posts = data.allCockpitPosts.edges
  return (
    <Layout>
      <PageContainer>
        <PageText>
          <ul>
            {posts.map(({ node }) => {
              const { title, slug, excerpt, date } = node
              return (
                <PostListItem
                  title={title.value}
                  link={slug.value}
                  date={date.value}
                >
                  {excerpt.value}
                </PostListItem>
              )
            })}
          </ul>
        </PageText>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allCockpitPosts(
      skip: $skip
      limit: $limit
      sort: { fields: [date___value], order: DESC }
    ) {
      edges {
        node {
          title {
            value
          }
          slug {
            value
          }
          excerpt {
            value
          }
          date {
            value(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`
