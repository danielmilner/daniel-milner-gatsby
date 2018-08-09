import styled from 'styled-components'

const ProjectContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 3rem rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
  padding: 3rem;
`

const ProjectLink = styled(Link)`
  float: right;
  color: ${props => props.theme.primaryColor};
  font-size: 2rem;
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

const Project = props => (
  <ProjectContainer>
    <ProjectLink src={props.link}>
      <i class="fas fa-external-link-alt" />
    </ProjectLink>
    <ProjectName>{props.name}</ProjectName>
    <ProjectDesc>{props.desc}</ProjectDesc>
  </ProjectContainer>
)

export default Project
