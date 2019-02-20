import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MobileMenuButton from '../components/MobileMenuButton'
import MobileMenu from '../components/MobileMenu'
import { darken } from 'polished'

const Menu = styled.ul`
  padding: 2rem;
  margin: 0;
  display: grid;
  grid-gap: 4rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
`

const MenuItemContainer = styled.li`
  padding: 0;
  display: block;
  text-align: center;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.button === 'true'
      ? '#fff'
      : props.active === 'true'
      ? props.theme.primaryColor
      : props.theme.textColor};
  font-size: 2.5rem;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  padding: 0.8rem 2rem;
  margin: 0;
  border-radius: 0.4rem;
  display: block;
  background-color: ${props =>
    props.button === 'true' ? props.theme.primaryColor : 'transparent'};

  &:hover,
  &:active {
    background-color: ${props =>
      props.button === 'true'
        ? darken(0.1, props.theme.primaryColor)
        : 'transparent'};
    color: ${props =>
      props.button === 'true' ? '#ffffff' : props.theme.primaryColor};
  }
`

const MenuText = styled.div`
  text-decoration: none;
  color: ${props =>
    props.button === 'true'
      ? '#fff'
      : props.active === 'true'
      ? props.theme.primaryColor
      : props.theme.textColor};
  font-size: 2.5rem;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 600;
  padding: 0.8rem 2rem;
  margin: 0;
  border-radius: 0.4rem;
  display: block;
  background-color: ${props =>
    props.button === 'true' ? props.theme.primaryColor : 'transparent'};

  &:hover,
  &:active {
    background-color: ${props =>
      props.button === 'true'
        ? darken(0.1, props.theme.primaryColor)
        : 'transparent'};
    color: ${props =>
      props.button === 'true' ? '#ffffff' : props.theme.primaryColor};
  }
`

const MenuItem = props => (
  <MenuItemContainer>
    {('true' === props.active && (
      <MenuText active={props.active} button={props.button}>
        {props.title}
      </MenuText>
    )) || (
      <MenuLink to={props.to} active={props.active} button={props.button}>
        {props.title}
      </MenuLink>
    )}
  </MenuItemContainer>
)

export default function MobileMenuContainer(data) {
  const { pages, children, location } = data
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = 'hidden'
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
      document.getElementsByTagName('html')[0].style.overflow = 'visible'
    }
  }, [menuVisible])

  return (
    <div>
      <MobileMenuButton onClick={() => setMenuVisible(!menuVisible)} />
      <MobileMenu menuVisible={menuVisible}>
        <Menu>
          {pages.map(({ node }, index) => (
            <MenuItem
              key={index}
              to={node.page.value}
              title={node.title.value}
              active={location.pathname === node.page.value ? 'true' : 'false'}
              button={node.button ? 'true' : 'false'}
              onClick={() => setMenuVisible(false)}
            />
          ))}
        </Menu>
      </MobileMenu>
      {children}
    </div>
  )
}

// class MobileMenuContainer extends Component {
//   constructor(props, context) {
//     super(props, context)
//     this.state = {
//       visible: false,
//     }
//     this.handleMouseDown = this.handleMouseDown.bind(this)
//     this.toggleMenu = this.toggleMenu.bind(this)
//   }

//   handleMouseDown(e) {
//     this.toggleMenu()

//     e.stopPropagation()
//   }

//   toggleMenu() {
//     this.setState({
//       visible: !this.state.visible,
//     })
//   }

//   render() {
//     const { pages, children } = this.props
//     return (
//       <div>
//         <MobileMenuButton onClick={this.handleMouseDown} />
//         <MobileMenu
//           menuVisibility={this.state.visible}
//           onClick={this.handleMouseDown}
//         >
//           <Menu>
//             {pages.map(({ node }, index) => (
//               <MenuItem
//                 key={index}
//                 to={node.page.value}
//                 title={node.title.value}
//                 active={
//                   this.props.location.pathname === node.page.value
//                     ? 'true'
//                     : 'false'
//                 }
//                 button={node.button ? 'true' : 'false'}
//               />
//             ))}
//           </Menu>
//         </MobileMenu>
//         {children}
//       </div>
//     )
//   }
// }

// export default MobileMenuContainer
