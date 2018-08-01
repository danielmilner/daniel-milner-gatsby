import React from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import H2 from '../components/H2'

const ProjectWrapper = styled.div`
  background-color: #fff;
  padding: 3rem;
  -webkit-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: 1.7rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 5rem;
  margin-top: 5rem;
  transition: all 0.3s ease-in-out;
  line-height: 2.5rem;

  &:hover,
  &:active {
    -webkit-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
  }
`

const ProjectTitle = styled.div`
  font-family: ${props => props.theme.sansSerifFont};
  font-size: 2.4rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
`

const ProjectIconContainer = styled.div`
  text-align: right;
  margin-top: 2rem;
`

const ProjectIcon = styled.i`
  color: ${props => props.color};
  font-weight: normal;
  font-size: 2.2rem;
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`

const Project = ({ url, children }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <ProjectWrapper>{children}</ProjectWrapper>
  </a>
)

const ProjectsPage = () => (
  <PageContainer>
    <PageTitle>Projects</PageTitle>
    <Project url="https://ccbpress.com/">
      <ProjectTitle>CCBPress </ProjectTitle>A premium WordPress plugin and suite
      of add-ons to display infomation from Church Community Builder on your
      website.
      <ProjectIconContainer>
        <ProjectIcon
          className="fab fa-wordpress-simple"
          color="#000"
          title="WordPress"
        />
      </ProjectIconContainer>
    </Project>
    <Project url="https://rockpresswp.com/">
      <ProjectTitle>RockPress</ProjectTitle>A premium WordPress plugin and suite
      of add-ons to display information from Rock RMS on your website.
      <ProjectIconContainer>
        <ProjectIcon
          className="fab fa-wordpress-simple"
          color="#000"
          title="WordPress"
        />
      </ProjectIconContainer>
    </Project>
    <Project url="https://discoverychurch.com/app/">
      <ProjectTitle>Discovery Church Mobile App</ProjectTitle>A React Native app
      built for Discovery Church. Brings in data from WordPress and Rock RMS.
      Has push notifications and authenticates users with Rock RMS.
      <ProjectIconContainer>
        <ProjectIcon
          className="fab fa-react"
          color="#00d8ff"
          title="React Native"
        />
        <ProjectIcon
          className="fab fa-app-store-ios"
          color="#8e8e93"
          title="iOS"
        />
        <ProjectIcon
          className="fab fa-google-play"
          color="#34a853"
          title="Android"
        />
      </ProjectIconContainer>
    </Project>
  </PageContainer>
)

export default ProjectsPage
