import styled from 'styled-components'

const PageContainer = styled.div`
  padding: 2rem;
  max-width: ${props => props.theme.contentMaxWidth};
  margin: 0 auto;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0rem;
  }
`

export default PageContainer
