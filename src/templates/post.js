import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageContainer from '../components/PageContainer'
// import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SEO from '../components/seo/SEO'
import {
  CoreCodeBlock,
  CoreHeadingBlock,
  CoreParagraphBlock,
} from 'wp-block-components'

import CoreCodeBlockFragment from '../graphql/CoreCodeBlockFragment'
import CoreHeadingBlockFragment from '../graphql/CoreHeadingBlockFragment'
import CoreParagraphBlockFragment from '../graphql/CoreParagraphBlockFragment'

const BlockComponents = {
  WPGraphQL_CoreCodeBlock: CoreCodeBlock,
  WPGraphQL_CoreHeadingBlock: CoreHeadingBlock,
  WPGraphQL_CoreParagraphBlock: CoreParagraphBlock,
}

// require('prismjs/themes/prism-tomorrow.css')

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
  margin: 1.5rem 0;
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
      <PageHeader image={image.childImageSharp.fluid} height={'35vw'} />
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
          const typename = block.__typename
          if (BlockComponents[typename]) {
            const Block = BlockComponents[typename]
            if ('WPGraphQL_CoreCodeBlock' === typename) {
              block.attributes.content = block.attributes.codeContent
              delete block.attributes.codeContent
              // block.attributes.className = `language-${block.attributes.language}`
              // console.log(block.attributes)
            }
            return <Block key={index} attributes={block.attributes} />
          } else {
            return null
          }
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
