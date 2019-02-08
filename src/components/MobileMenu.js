import React, { Component } from 'react'
import styled from 'styled-components'

const MobileMenuInner = styled.div`
  //   padding: 3rem;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  color: ${props => props.theme.textColor};
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 900;

  &.hide {
    transform: translate3d(0, -100vh, 0);
  }

  &.show {
    transform: translate3d(0, 0vh, 0);
    overflow: hidden;
  }
`

class MobileMenu extends Component {
  render() {
    var visibility = 'hide'

    if (this.props.menuVisibility) {
      visibility = 'show'
    }
    return (
      <MobileMenuInner className={visibility} onClick={this.props.onClick}>
        {this.props.children}
      </MobileMenuInner>
    )
  }
}

export default MobileMenu
