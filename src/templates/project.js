import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PageHeader from '../components/PageHeader'
import Project from '../components/Project'
import Layout from '../components/Layout'
import SEO from '../components/seo/SEO'

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

export default function Template({ data, location }) {
  const pageData = data.wordPress.page
  const { title, excerpt } = pageData
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
      <ProjectsContainer>
        {data.projects.projects.nodes.map(node => (
          <Project
            key={node.id}
            link={node.projectDetails.dmUrl}
            name={node.title}
            desc={node.content}
            tech={node.projectDetails.dmTechnologies}
          />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Project($id: ID) {
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
    projects: wordPress {
      projects {
        nodes {
          id
          title
          content(format: RENDERED)
          projectDetails {
            dmUrl
            dmTechnologies {
              title
              icon
            }
          }
        }
      }
    }
  }
`
