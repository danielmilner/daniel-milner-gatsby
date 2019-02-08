import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Image from 'gatsby-image'

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 45vw;
  position: relative;
  ${props =>
    props.title &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          160deg,
          rgba(0, 0, 0, 0) 70%,
          rgba(0, 0, 0, 0.4) 75%,
          rgba(0, 0, 0, 0.8) 100%
        );
      }
    `}
`

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;

  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

const Title = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 2vw;
  color: #ffffff;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 300;
  font-size: 5vw;
  text-align: right;
  line-height: 5vw;
`

export default class PageHeader extends Component {
  render() {
    return (
      <Container title={this.props.title}>
        <BgImage fluid={this.props.image} />
        {this.props.title !== 'false' && (
          <Title
            dangerouslySetInnerHTML={{
              __html: this.props.title,
            }}
          />
        )}
      </Container>
    )
  }
}
