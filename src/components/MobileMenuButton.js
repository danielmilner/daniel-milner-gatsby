import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const MobileButton = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  font-size: 3rem;
  color: ${props => props.theme.primaryColor};
  padding: 1rem;
  display: inline-block;
  z-index: 1000;
  display: none;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${props => darken(0.1, props.theme.primaryColor)};
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: inline-block;
  }
`

class MobileMenuButton extends Component {
  render() {
    return (
      <MobileButton onClick={this.props.onClick}>
        <i className="fas fa-bars" />
      </MobileButton>
    )
  }
}

export default MobileMenuButton
