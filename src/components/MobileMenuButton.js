import React, { Component } from 'react'
import styled from 'styled-components'

const MobileButton = styled.a`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 3rem;
  color: ${props => props.theme.colorDark};
  padding: 1rem;
  display: inline-block;
  z-index: 1000;
  display: none;

  &:hover,
  &:active {
    color: #000;
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
