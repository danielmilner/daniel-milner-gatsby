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
  border-radius: 1rem;
  font-size: 1.7rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 5rem;
  margin-top: 5rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    -webkit-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.2);
  }
`

const ProjectTitle = styled.div`
  font-family: ${props => props.theme.sansSerifFont};
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
  & > i {
  }
`

const ProjectIcon = styled.i`
  color: ${props => props.color};
  font-weight: normal;
  font-size: 2.2rem;
  float: right;

  &:not(:last-of-type) {
    margin-left: 1rem;
  }
`

const Project = ({ name, icon, children }) => (
  <ProjectWrapper>{children}</ProjectWrapper>
)

const ProjectsPage = () => (
  <PageContainer>
    <PageTitle>Projects</PageTitle>
    <Project>
      <ProjectTitle>
        CCBPress{' '}
        <ProjectIcon className="fab fa-wordpress-simple" color="#000" />
      </ProjectTitle>
      The easiest way to display information from Church Community Builder in
      WordPress.
    </Project>
    <Project>
      <ProjectTitle>
        RockPress
        <ProjectIcon className="fab fa-wordpress-simple" color="#000" />
      </ProjectTitle>
      The easiest way to display information from Rock RMS in WordPress.
    </Project>
    <Project name="Discovery Church Mobile App">
      <ProjectTitle>
        Discovery Church Mobile App
        <ProjectIcon className="fab fa-react" color="#00d8ff" />
        <ProjectIcon className="fab fa-app-store-ios" color="#8e8e93" />
        <ProjectIcon className="fab fa-google-play" color="#34a853" />
      </ProjectTitle>
      Watch recent messages, see upcoming events, manage your profile, and stay
      connected.
    </Project>
  </PageContainer>
)

export default ProjectsPage
