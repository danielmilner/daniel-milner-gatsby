import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Container = styled.div`
  margin: 0;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 1rem 0;
  }
`

const Icon = styled(Image)`
  margin: 1rem 3rem;
  opacity: 0.3;
  width: 6rem;
  height: 6rem;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
  img {
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
`

export default class DevIcons extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query DevIcons {
            WordPress: file(
              relativePath: { eq: "images/devicons/wordpress.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            React: file(relativePath: { eq: "images/devicons/react.png" }) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            Gatsby: file(relativePath: { eq: "images/devicons/gatsby.png" }) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            JavaScript: file(
              relativePath: { eq: "images/devicons/javascript.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            CSS: file(relativePath: { eq: "images/devicons/css.png" }) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            PHP: file(relativePath: { eq: "images/devicons/php.png" }) {
              childImageSharp {
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Container>
            <Icon
              fluid={data.WordPress.childImageSharp.fluid}
              alt={'WordPress'}
            />
            <Icon fluid={data.React.childImageSharp.fluid} alt={'React'} />
            <Icon fluid={data.Gatsby.childImageSharp.fluid} alt={'Gatsby'} />
            <Icon
              fluid={data.JavaScript.childImageSharp.fluid}
              alt={'JavaScript'}
            />
            <Icon fluid={data.CSS.childImageSharp.fluid} alt={'CSS'} />
            <Icon fluid={data.PHP.childImageSharp.fluid} alt={'PHP'} />
          </Container>
        )}
      />
    )
  }
}
