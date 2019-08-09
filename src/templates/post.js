import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import SEO from '../components/seo/SEO'

import CoreHeadingBlock from '../components/blocks/CoreHeadingBlock'
import CoreParagraphBlock from '../components/blocks/CoreParagraphBlock'

const BlockComponents = {
  WordPress_CoreHeadingBlock: CoreHeadingBlock,
  WordPress_CoreParagraphBlock: CoreParagraphBlock,
}

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

const Template = (data, location) => {
  const postData = data.data.wp.post
  const { title, blocks, date, tags } = postData
  const image = postData.featuredImage.imageFile
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
            {date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              day: 'numeric',
            })}
          </MetaItem>
        </Meta>
        <Title>{title}</Title>
        {tags !== undefined && (
          <Tags>
            {tags.edges.map((node, index) => {
              return <Tag key={index}>{node.name}</Tag>
            })}
          </Tags>
        )}
        {blocks.map((block, index) => {
          const typename = block.__typename
          const $Block = BlockComponents[typename]
          return <$Block key={index} {...block.attributes} />
        })}
      </PageContainer>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query Page($id: Int) {
    wp {
      post: postBy(postId: $id) {
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
          ...CoreHeadingBlock
          ...CoreParagraphBlock
        }
        date
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query Post($cockpitId: String!) {
//     cockpitPosts(cockpitId: { eq: $cockpitId }) {
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
//       date {
//         value(formatString: "MMMM Do, YYYY")
//       }
//       tags {
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
