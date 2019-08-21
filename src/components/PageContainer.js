import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  max-width: ${props => props.theme.contentMaxWidth};
  margin: 0 auto;
  font-size: ${props => props.theme.textSize};

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.serifFont};
    color: ${props => props.theme.primaryColor};
  }

  a {
    color: ${props => props.theme.primaryColor};
  }
`

export default Container
