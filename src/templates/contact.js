import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import Layout from '../components/Layout'
import SEO from '../components/seo/SEO'
import ContactForm from '../components/ContactForm'

require('prismjs/themes/prism-tomorrow.css')

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  location,
}) {
  const { title, content, image, heading_title } = data.cockpitPages
  const pageTitle = title.value
  const pageHtml = content.value.childMarkdownRemark.html
  return (
    <Layout location={location}>
      <SEO
        title={pageTitle}
        pathname={location.pathname}
        desc={content.value.childMarkdownRemark.excerpt}
        banner={image.value.banner.fixed.src}
      />
      <PageHeader
        image={image.value.childImageSharp.fluid}
        title={heading_title.value}
      />
      <PageContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <PageText
          dangerouslySetInnerHTML={{
            __html: pageHtml,
          }}
        />
        <ContactForm />
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
            excerpt
          }
        }
      }
      heading_title {
        value
      }
      image {
        value {
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
    }
  }
`
