import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import GridContainer from '../components/GridContainer'
import PostListItem from '../components/PostListItem'
import SEO from '../components/seo/SEO'

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
    const posts = this.props.data.wordPress.posts.nodes
    return (
      <Layout location={this.props.location}>
        <SEO
          title={`Blog`}
          pathname={this.props.location.pathname}
          desc={`Daniel Milner's blog posts.`}
          banner={this.props.data.HeaderImage.banner.fixed.src}
        />
        <PageHeader
          image={this.props.data.HeaderImage.childImageSharp.fluid}
          title={`Blog Posts`}
        />
        <GridContainer>
          {posts.map(node => {
            const { title, slug, date, featuredImage, tags, postId } = node
            return (
              <PostListItem
                key={postId}
                title={title}
                link={slug}
                date={date}
                image={featuredImage}
                tags={tags}
              />
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
  query PostList($first: Int, $after: String) {
    wordPress {
      posts(
        where: { status: PUBLISH, orderby: [{ field: DATE, order: DESC }] }
        first: $first
        after: $after
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          postId
          title
          slug
          date
          tags {
            nodes {
              name
              id
            }
          }
          featuredImage {
            sourceUrl
            imageFile {
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
      banner: childImageSharp {
        fixed(width: 1280, height: 720) {
          src
        }
      }
    }
  }
`
