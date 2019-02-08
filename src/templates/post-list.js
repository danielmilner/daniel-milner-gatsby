import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import GridContainer from '../components/GridContainer'
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
      <Layout location={this.props.location}>
        <PageHeader
          image={this.props.data.HeaderImage.childImageSharp.fluid}
          title={`Blog Posts`}
        />
        <GridContainer>
          {posts.map(({ node }) => {
            const { title, slug, excerpt, date, image, tags } = node
            return (
              <PostListItem
                title={title.value}
                link={slug.value}
                date={date.value}
                image={image.value}
                tags={tags.value}
              >
                {excerpt.value}
              </PostListItem>
            )
          })}
        </GridContainer>
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
      filter: { published: { value: { eq: true } } }
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
          tags {
            value
          }
          image {
            value {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    HeaderImage: file(relativePath: { eq: "images/headers/blog-list.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
