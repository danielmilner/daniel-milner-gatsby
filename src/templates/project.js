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
  const { title, content } = data.cockpitPages
  const pageTitle = title.value
  const pageHtml = content.value.childMarkdownRemark.html
  return (
    <Layout>
      <PageContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <PageText
          dangerouslySetInnerHTML={{
            __html: pageHtml,
          }}
        />
        {data.projects.edges.map(({ node }) => (
          <Project
            link={node.url.value}
            name={node.title.value}
            desc={node.content.value.childMarkdownRemark.html}
            tech={node.technologies.value}
          />
        ))}
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectPage($slug: String!) {
    cockpitPages(slug: { value: { eq: $slug } }) {
      title {
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
    projects: allCockpitProjects {
      edges {
        node {
          title {
            value
          }
          url {
            value
          }
          content {
            value {
              childMarkdownRemark {
                html
              }
            }
          }
          technologies {
            value {
              value {
                title {
                  value
                }
                icon {
                  value
                }
                color {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`
