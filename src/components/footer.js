import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: #ffffff;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
  padding: 2.5rem 3rem;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: block;
    & > div {
      text-align: center;
    }
  }
`

const Copyright = styled.div`
  flex: 1 1 auto;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    margin-bottom: 2rem;
  }
`

const Social = styled.div`
  flex: 1 1 auto;
  margin-left: auto;
  text-align: right;
`

const IconLink = styled.a`
  color: #ffffff;
  &:not(:first-of-type) {
    margin-left: 3rem;
  }
`

const Icon = styled.i`
  font-size: 2.4rem;
`

const Footer = () => (
  <Container>
    <Copyright>
      &copy; {new Date().getFullYear()} Daniel Milner. All Rights Reserved.
    </Copyright>
    <Social>
      <IconLink href={'https://github.com/danielmilner'} title={`GitHub`}>
        <Icon className={'fab fa-github'} />
      </IconLink>
      <IconLink href={'https://twitter.com/danielmilner'} title={`Twitter`}>
        <Icon className={'fab fa-twitter'} />
      </IconLink>
    </Social>
  </Container>
)

export default Footer
