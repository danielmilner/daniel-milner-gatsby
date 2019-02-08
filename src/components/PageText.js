import styled from 'styled-components'

const Text = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.textSize};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  line-height: 2.8rem;
  font-size: 1.7rem;
  margin-bottom: 4rem;

  hr {
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
    margin: 4rem 0 0 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.serifFont};
    color: ${props => props.theme.primaryColor};
    font-weight: 400;
    margin-top: 4rem;
  }

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default Text
