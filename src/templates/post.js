import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'

require('prismjs/themes/prism-tomorrow.css')

const Meta = styled.div`
  display: flex;
`

const MetaItem = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 800;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { title, content, date } = data.cockpitPosts
  const postTitle = title.value
  const postHtml = content.value.childMarkdownRemark.html
  const postDate = date.value
  return (
    <Layout>
      <PageContainer>
        <PageTitle>{postTitle}</PageTitle>
        <Meta>
          <MetaItem>{postDate}</MetaItem>
        </Meta>
        <PageText
          dangerouslySetInnerHTML={{
            __html: postHtml,
          }}
        />
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($cockpitId: String!) {
    cockpitPosts(cockpitId: { eq: $cockpitId }) {
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
      date {
        value(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
