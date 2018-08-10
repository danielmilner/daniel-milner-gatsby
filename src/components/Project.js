import React from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  margin: 7rem 0;
`

const ProjectLink = styled.a`
  float: right;
  display: block;
  color: ${props => props.theme.primaryColor};
  font-size: 1.8rem;
  text-decoration: none;
`

const ProjectName = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 2.4rem;
  margin-bottom: 1.5rem;
  color: #000;
`

const ProjectDesc = styled.div`
  font-family: ${props => props.theme.serifFont};
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 2.8rem;
  color: ${props => props.theme.textColor};
`

const ProjectTechContainer = styled.div`
  margin-top: 1rem;
`

const ProjectTechBadge = styled.div`
  background-color: #efeded;
  border-radius: 0.5rem;
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
  font-family: ${props => props.theme.sanSerifFont};
  text-transform: uppercase;
  display: inline-block;
  margin-right: 1rem;

  i {
    font-size: 1.6rem;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
`

const Project = props => (
  <ProjectContainer>
    {(props.link &&
      props.link !== '' && (
        <ProjectLink href={props.link}>
          <i className="fas fa-external-link-alt" />
        </ProjectLink>
      )) ||
      null}
    <ProjectName>{props.name}</ProjectName>
    <ProjectDesc dangerouslySetInnerHTML={{ __html: props.desc }} />
    <ProjectTechContainer>
      {Object.keys(props.tech).map(key => (
        <ProjectTechBadge>
          <i
            className={props.tech[key].icon}
            style={{ color: props.tech[key].color }}
          />{' '}
          {props.tech[key].name}
        </ProjectTechBadge>
      ))}
    </ProjectTechContainer>
  </ProjectContainer>
)

export default Project
