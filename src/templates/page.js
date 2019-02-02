import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
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
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Page($slug: String!) {
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
  }
`
