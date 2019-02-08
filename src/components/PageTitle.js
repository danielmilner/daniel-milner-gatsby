import styled from 'styled-components'

const PageTitle = styled.h1`
  font-family: ${props => props.theme.serifFont};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primaryColor};

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 3.5rem;
  }
`
export default PageTitle
