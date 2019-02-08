import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import DevIcons from '../components/DevIcons'

require('prismjs/themes/prism-tomorrow.css')

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
  text-align: center;

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
    /* text-transform: uppercase; */
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

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  location,
}) {
  const { content, image, heading_title } = data.cockpitPages
  const pageHtml = content.value.childMarkdownRemark.html
  return (
    <Layout location={location}>
      <PageHeader
        image={image.value.childImageSharp.fluid}
        title={heading_title.value}
      />
      <DevIcons />
      <ContentContainer>
        <ContentInner
          dangerouslySetInnerHTML={{
            __html: pageHtml,
          }}
        />
      </ContentContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Home($cockpitId: String!) {
    cockpitPages(cockpitId: { eq: $cockpitId }) {
      content {
        value {
          childMarkdownRemark {
            html
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
        }
      }
    }
  }
`
