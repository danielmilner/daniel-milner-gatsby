import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageContainer from '../components/PageContainer'
// import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SEO from '../components/seo/SEO'
import { CoreBlock } from 'wp-block-components'

import '../graphql/CoreCodeBlockFragment'
import '../graphql/CoreHeadingBlockFragment'
import '../graphql/CoreImageBlockFragment'
import '../graphql/CoreListBlockFragment'
import '../graphql/CoreParagraphBlockFragment'

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
  flex-wrap: wrap;
  margin: 1.25rem -0.25rem 0 -0.25rem;
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
  margin: 0.25rem;
`

const Template = (data, location) => {
  const postData = data.data.wordPress.post
  const { title, blocks, date, tags, excerpt } = postData
  const image = postData.featuredImage.imageFile
  const postDate = new Date(date)
  return (
    <Layout location={location}>
      <SEO
        title={title}
        pathname={location.pathname}
        desc={excerpt}
        banner={image.banner.fixed}
      />
      <PageHeader image={image.childImageSharp.fluid} height={'25vw'} />
      <PageContainer>
        <Meta>
          <MetaItem>
            {postDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
              day: 'numeric',
            })}
          </MetaItem>
        </Meta>
        <Title>{title}</Title>
        {tags !== undefined && (
          <Tags>
            {tags.nodes.map(tag => {
              return <Tag key={tag.id}>{tag.name}</Tag>
            })}
          </Tags>
        )}
        {blocks.map((block, index) => {
          if ('WPGraphQL_CoreCodeBlock' === block.__typename) {
            block.attributes.content = block.attributes.codeContent
            delete block.attributes.codeContent
          }
          return <CoreBlock key={index} block={block} />
        })}
      </PageContainer>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query Post($id: ID) {
    wordPress {
      post: postBy(id: $id) {
        title
        featuredImage {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(maxWidth: 1900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            banner: childImageSharp {
              fixed(width: 1280, height: 720) {
                src
              }
            }
          }
        }
        blocks {
          __typename
          ...CoreCodeBlock
          ...CoreHeadingBlock
          ...CoreImageBlock
          ...CoreListBlock
          ...CoreParagraphBlock
        }
        date
        tags {
          nodes {
            name
            id
          }
        }
      }
    }
  }
`
