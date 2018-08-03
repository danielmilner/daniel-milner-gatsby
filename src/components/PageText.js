import styled from 'styled-components'

const PageText = styled.div`
  font-family: ${props => props.theme.serifFont};
  font-size: ${props => props.theme.textSize};
  color: ${props => props.theme.textColor};
  font-weight: 300;
  line-height: 3.5rem;
  font-size: 1.7rem;

  hr {
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
    margin: 4rem 0 0 0;
  }

  h2 {
    font-family: ${props => props.theme.sanSerifFont};
    font-size: 2.4rem;
    color: ${props => props.theme.primaryColor};
    font-weight: 400;
    margin-top: 5rem;
  }

  i[class^='fa'],
  i[class^='fab'] {
    font-size: 2rem;
  }

  i[class*='twitter'] {
    color: #1da1f2;
  }

  i[class*=' fa-wordpress'] {
    color: #000;
  }

  i[class*=' fa-react'] {
    color: #00d8ff;
  }

  i[class*=' fa-app-store-ios'] {
    color: #8e8e93;
  }

  i[class*=' fa-google-play'] {
    color: #34a853;
  }
`

export default PageText
