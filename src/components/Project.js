import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJsSquare,
  faReact,
  faWordpressSimple,
  faAppStoreIos,
  faGooglePlay,
  faNodeJs,
  faPhp,
  faWindows,
  faApple,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons'

const ProjectContainer = styled.a`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.2);
  }
`

const ProjectName = styled.div`
  font-family: 'Playfair Display';
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primaryColor};
`

const ProjectDesc = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.8rem;
  color: ${props => props.theme.textColor};

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`

const ProjectTechContainer = styled.div`
  margin-top: auto;
  padding-top: 2rem;
`

const ProjectTechBadge = styled.div`
  font-size: 1.2rem;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  color: ${props => props.theme.altTextColor};
  text-transform: uppercase;
  display: inline-block;
  margin-right: 1.5rem;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  vertical-align: middle;
  margin-right: 0.2rem;
`

const getIcon = icon => {
  switch (icon) {
    case 'javascript':
      return <Icon icon={faJsSquare} style={{ color: 'rgb(247, 223, 30)' }} />
    case 'react':
      return <Icon icon={faReact} style={{ color: 'rgb(97, 218, 251)' }} />
    case 'wordpress':
      return (
        <Icon icon={faWordpressSimple} style={{ color: 'rgb(33, 117, 155)' }} />
      )
    case 'app-store':
      return (
        <Icon icon={faAppStoreIos} style={{ color: 'rgb(142, 142, 147)' }} />
      )
    case 'google-play':
      return <Icon icon={faGooglePlay} style={{ color: 'rgb(164, 198, 57)' }} />
    case 'node':
      return <Icon icon={faNodeJs} style={{ color: '#215732' }} />
    case 'php':
      return <Icon icon={faPhp} style={{ color: '#8892be' }} />
    case 'windows':
      return <Icon icon={faWindows} style={{ color: '#0078d7' }} />
    case 'apple':
      return <Icon icon={faApple} style={{ color: 'rgb(142, 142, 147)' }} />
    case 'android':
      return <Icon icon={faAndroid} style={{ color: 'rgb(164, 198, 57)' }} />
    default:
      return
  }
}

const Project = props => (
  <ProjectContainer href={props.link}>
    <ProjectName>{props.name}</ProjectName>
    <ProjectDesc dangerouslySetInnerHTML={{ __html: props.desc }} />
    <ProjectTechContainer>
      {Object.keys(props.tech).map(key => (
        <ProjectTechBadge key={key}>
          {getIcon(props.tech[key].icon)} {props.tech[key].title}
        </ProjectTechBadge>
      ))}
    </ProjectTechContainer>
  </ProjectContainer>
)

export default Project
