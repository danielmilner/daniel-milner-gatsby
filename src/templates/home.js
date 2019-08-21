import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import DevIcons from '../components/DevIcons'
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

const ContentContainer = styled.div`
  margin: 0;
  padding: 4rem 0;
  background-color: ${props => props.theme.altBgColor};
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 2rem 0;
  }
`

const ContentInner = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${props => props.theme.contentMaxWidth};
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display';
    font-weight: 700;
    margin: 2rem 0;
    padding: 0;
    font-size: 4.8rem;
    line-height: 5rem;
    color: ${props => props.theme.primaryColor};
    @media (max-width: ${props => props.theme.tabletWidth}) {
      font-size: 3rem;
      line-height: 3.5rem;
    }
  }

  p {
    font-size: 2.8rem;
    font-weight: 200;
    line-height: 4.2rem;
    @media (max-width: ${props => props.theme.tabletWidth}) {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
  }

  a {
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`

const Template = (data, location) => {
  const pageData = data.data.wordPress.page
  const { title, blocks, excerpt } = pageData
  const image = pageData.featuredImage.imageFile
  const heading_title = pageData.ftConfig.headingTitle
  return (
    <Layout location={location}>
      <SEO
        title={title}
        pathname={location.pathname}
        desc={excerpt}
        banner={image.banner.fixed}
      />
      <PageHeader image={image.childImageSharp.fluid} title={heading_title} />
      <DevIcons />
      <ContentContainer>
        <ContentInner>
          {blocks.map((block, index) => {
            const typename = block.__typename
            const Block = BlockComponents[typename]
            return (
              <Block
                key={index}
                attributes={block.attributes}
                block={theme.block}
              />
            )
          })}
        </ContentInner>
      </ContentContainer>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query Home($id: ID) {
    wordPress {
      page: pageBy(id: $id) {
        title
        excerpt
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
        ftConfig {
          headingTitle
        }
      }
    }
  }
`
