import React from 'react'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import styled from 'styled-components'
import Layout from '../components/Layout'

require('prismjs/themes/prism-tomorrow.css')

const SocialMediaContainer = styled.div`
  display: block;
`

const SocialMediaIcon = styled.a`
  font-size: 4rem;
  margin-right: 2rem;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <PageContainer>
        <PageTitle>{post.frontmatter.title}</PageTitle>
        <PageText dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialMediaContainer>
          {Object.keys(data.social.frontmatter.links).map(key => (
            <SocialMediaIcon
              href={data.social.frontmatter.links[key].url}
              alt={data.social.frontmatter.links[key].title}
            >
              <i
                className={data.social.frontmatter.links[key].icon}
                style={{ color: data.social.frontmatter.links[key].color }}
              />
            </SocialMediaIcon>
          ))}
        </SocialMediaContainer>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    social: markdownRemark(
      fileAbsolutePath: { regex: "/^(?=.*/cms/settings/social-media).*/gm" }
    ) {
      frontmatter {
        links {
          color
          icon
          title
          url
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
