import React from 'react'
import styled from 'styled-components'
import gatsbyIcon from '../images/gatsby-icon.png'

const FooterContainer = styled.div`
  text-align: center;
  padding: 2rem 2rem 5rem 2rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-size: 1.3rem;
  color: ${props => props.theme.textColor};
  font-weight: 200;
`

const GatsbyIcon = styled.img`
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-left: 0.3rem;
`

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    Site created with{' '}
    <a href="https://gatsbyjs.org/" title="Gatsby">
      <GatsbyIcon src={gatsbyIcon} />
    </a>
  </FooterContainer>
)

export default Footer
