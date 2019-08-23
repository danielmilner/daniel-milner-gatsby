import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
// import PageText from '../components/PageText'
import Layout from '../components/Layout'
import SEO from '../components/seo/SEO'
import { CoreBlock } from 'wp-block-components'

import '../graphql/CoreCodeBlockFragment'
import '../graphql/CoreHeadingBlockFragment'
import '../graphql/CoreImageBlockFragment'
import '../graphql/CoreListBlockFragment'
import '../graphql/CoreParagraphBlockFragment'

const Template = (data, location) => {
  const pageData = data.data.wordPress.page
  const { title, blocks, excerpt } = pageData
  const image = pageData.featuredImage.imageFile
  const heading_title = pageData.ftConfig.headingTitle
  console.log(pageData.featuredImage.sizes)
  return (
    <Layout location={location}>
      <SEO
        title={title}
        pathname={location.pathname}
        desc={excerpt}
        banner={image.banner.fixed}
      />
      <PageHeader image={image.childImageSharp.fluid} title={heading_title} />
      <PageContainer>
        <PageTitle>{title}</PageTitle>
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
  query Page($id: ID) {
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
