import React from 'react'
import { graphql } from 'gatsby'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import styled from 'styled-components'
import Layout from '../components/Layout'

require('prismjs/themes/prism-tomorrow.css')

const SocialMediaContainer = styled.div`
  display: block;
`

const SocialMediaIcon = styled.a`
  font-size: 4rem;
  margin-right: 2rem;
`

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
        <SocialMediaContainer>
          {data.social.edges.map(({ node }) => (
            <SocialMediaIcon href={node.url.value} alt={node.title.value}>
              <i
                className={node.icon.value}
                style={{ color: node.color.value }}
              />
            </SocialMediaIcon>
          ))}
        </SocialMediaContainer>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query contactPage($cockpitId: String!) {
    cockpitPages(cockpitId: { eq: $cockpitId }) {
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
    social: allCockpitSocialMedia {
      edges {
        node {
          title {
            value
          }
          url {
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
`
