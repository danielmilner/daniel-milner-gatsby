import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Project from '../components/Project'
import Layout from '../components/Layout'

require('prismjs/themes/prism-tomorrow.css')

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <PageContainer>
        <PageTitle>{post.frontmatter.title}</PageTitle>
        <PageText dangerouslySetInnerHTML={{ __html: post.html }} />
        {data.projects.edges.map(({ node }) => (
          <Project
            link={node.frontmatter.url}
            name={node.frontmatter.title}
            desc={node.html}
            tech={node.frontmatter.technologies}
          />
        ))}
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^(?=.*/cms/projects)/gm" } }
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            url
            technologies {
              color
              icon
              name
            }
          }
          html
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
