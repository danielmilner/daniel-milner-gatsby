import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import SEO from '../components/seo/SEO'
import ContactForm from '../components/ContactForm'

import CoreHeadingBlock from '../components/blocks/CoreHeadingBlock'
import CoreParagraphBlock from '../components/blocks/CoreParagraphBlock'

const BlockComponents = {
  WordPress_CoreHeadingBlock: CoreHeadingBlock,
  WordPress_CoreParagraphBlock: CoreParagraphBlock,
}

require('prismjs/themes/prism-tomorrow.css')

const Template = (data, location) => {
  const pageData = data.data.wp.page
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
      <PageContainer>
        <PageTitle>{title}</PageTitle>
        {blocks.map((block, index) => {
          const typename = block.__typename
          const $Block = BlockComponents[typename]
          return <$Block key={index} {...block.attributes} />
        })}
        <ContactForm />
      </PageContainer>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query contactPage($id: Int) {
    wp {
      page: pageBy(pageId: $id) {
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

// export const pageQuery = graphql`
//   query contactPage($cockpitId: String!) {
//     cockpitPages(cockpitId: { eq: $cockpitId }) {
//       title {
//         value
//       }
//       content {
//         value {
//           childMarkdownRemark {
//             html
//             excerpt
//           }
//         }
//       }
//       heading_title {
//         value
//       }
//       image {
//         value {
//           childImageSharp {
//             fluid(maxWidth: 1900) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//           banner: childImageSharp {
//             fixed(width: 1280, height: 720) {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `
