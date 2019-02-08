import React from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  &:hover,
  &:active,
  &:focus {
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.2);
  }
`

const ProjectLink = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
`

const ProjectName = styled.div`
  font-family: 'Playfair Display';
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primaryColor};
  /* text-transform: uppercase; */
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
    {(props.link && props.link !== '' && (
      <ProjectLink href={props.link}>
        <ProjectName>{props.name}</ProjectName>
      </ProjectLink>
    )) || <ProjectName>{props.name}</ProjectName>}
    <ProjectDesc dangerouslySetInnerHTML={{ __html: props.desc }} />
    <ProjectTechContainer>
      {Object.keys(props.tech).map(key => (
        <ProjectTechBadge>
          <i
            className={props.tech[key].value.icon.value}
            style={{ color: props.tech[key].value.color.value }}
          />{' '}
          {props.tech[key].value.title.value}
        </ProjectTechBadge>
      ))}
    </ProjectTechContainer>
  </ProjectContainer>
)

export default Project
