import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PostListItem from '../components/PostListItem'

require('prismjs/themes/prism-tomorrow.css')

const Pagination = styled.div`
  display: flex;
`

const PagePrevLink = styled(Link)`
  text-decoration: none;
`

const PageNextLink = styled(Link)`
  margin-left: auto;
  text-decoration: none;
`

class PostListTemplate extends React.Component {
  render() {
    const posts = this.props.data.allCockpitPosts.edges
    return (
      <Layout>
        <PageContainer>
          <PageText>
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
            <Pagination>
              {this.props.pageContext.previousPagePath ? (
                <PagePrevLink to={this.props.pageContext.previousPagePath}>
                  Previous
                </PagePrevLink>
              ) : null}
              {this.props.pageContext.nextPagePath ? (
                <PageNextLink to={this.props.pageContext.nextPagePath}>
                  Next
                </PageNextLink>
              ) : null}
            </Pagination>
          </PageText>
        </PageContainer>
      </Layout>
    )
  }
}

export default PostListTemplate

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
