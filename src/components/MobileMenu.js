import React from 'react'
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

export default function MobileMenu(data) {
  const { children, menuVisible } = data

  return (
    <MobileMenuInner className={menuVisible ? 'show' : 'hide'}>
      {children}
    </MobileMenuInner>
  )
}
