import styled from 'styled-components'

const PageText = styled.p`
  font-family: ${props => props.theme.serifFont};
  font-size: ${props => props.theme.textSize};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  line-height: 3.5rem;
`

export default PageText
