import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Project from '../components/Project'
import Layout from '../components/Layout'
import SEO from '../components/seo/SEO'

require('prismjs/themes/prism-tomorrow.css')

const ProjectsContainer = styled.div`
  margin: 0;
  padding: 7rem;
  display: grid;
  grid-gap: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 2rem;
    grid-gap: 2rem;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
  location,
}) {
  const { image, heading_title } = data.cockpitPages
  return (
    <Layout location={location}>
      <SEO
        title={`Projects`}
        pathname={location.pathname}
        desc={`Here are some of the projects that I've worked on.`}
        banner={image.value.banner.fixed.src}
      />
      <PageHeader
        image={image.value.childImageSharp.fluid}
        title={heading_title.value}
      />
      <ProjectsContainer>
        {data.projects.edges.map(({ node }) => (
          <Project
            key={node.cockpitId}
            link={node.url.value}
            name={node.title.value}
            desc={node.content.value.childMarkdownRemark.html}
            tech={node.technologies.value}
          />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPage($cockpitId: String!) {
    cockpitPages(cockpitId: { eq: $cockpitId }) {
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
    projects: allCockpitProjects {
      edges {
        node {
          cockpitId
          title {
            value
          }
          url {
            value
          }
          content {
            value {
              childMarkdownRemark {
                html
              }
            }
          }
          technologies {
            value {
              value {
                title {
                  value
                }
                icon {
                  value
                }
                color {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`
