import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

require('prismjs/themes/prism-tomorrow.css')

const Title = styled.div`
  font-family: 'Playfair Display';
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primaryColor};
`

const Meta = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 3rem;
`

const MetaItem = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.7rem;
  font-weight: 400;
  color: ${props => props.theme.textColor};
`

const Tags = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const Tag = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${props => props.theme.altTextColor};
  padding: 0.1rem 0.8rem;
  border-radius: 0.4rem;
  &:not(:first-of-type) {
    margin-left: 0.5rem;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  location,
}) {
  const { title, content, date, tags, image } = data.cockpitPosts
  const postTitle = title.value
  const postHtml = content.value.childMarkdownRemark.html
  const postDate = date.value
  return (
    <Layout location={location}>
      <PageHeader image={image.value.childImageSharp.fluid} />
      <PageContainer>
        <Meta>
          <MetaItem>{postDate}</MetaItem>
        </Meta>
        <Title>{postTitle}</Title>
        {tags.value !== undefined && (
          <Tags>
            {tags.value.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>
            })}
          </Tags>
        )}
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
      tags {
        value
      }
      image {
        value {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
