import styled from 'styled-components'

const PageTitle = styled.h1`
  font-family: ${props => props.theme.sanSerifFont};
  font-size: 4.5rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 3.5rem;
  }
`
export default PageTitle
