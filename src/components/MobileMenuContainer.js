import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MobileMenuButton from '../components/MobileMenuButton'
import MobileMenu from '../components/MobileMenu'

const Menu = styled.ul`
  padding: 2rem;
  margin: 0;
  display: grid;
  grid-gap: 4rem;
  justify-content: start;
  align-content: center;
  height: 100vh;
`

const MenuItemContainer = styled.li`
  padding: 0;
  display: block;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 2.5rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 400;
  // text-transform: uppercase;
  padding: 1.5rem;
  margin: 0 0.5rem;

  &:hover,
  &:active {
    color: #fff;
  }
`

const MenuIcon = styled.i`
  font-size: 3.5rem;
  margin-right: 1rem;
  width: 4rem;
  vertical-align: middle;
  text-align: center;
`

const MenuItem = props => (
  <MenuItemContainer>
    <MenuLink to={props.to}>
      <MenuIcon className={props.icon} /> {props.title}
    </MenuLink>
  </MenuItemContainer>
)

class MobileMenuContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleMouseDown(e) {
    this.toggleMenu()

    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    const { pages, children } = this.props
    return (
      <div>
        <MobileMenuButton onClick={this.handleMouseDown} />
        <MobileMenu
          menuVisibility={this.state.visible}
          onClick={this.handleMouseDown}
        >
          <Menu>
            {pages.map(({ node }) => (
              <MenuItem
                to={node.page.value.slug.value}
                title={node.title.value}
                icon={node.icon.value}
              />
            ))}
          </Menu>
        </MobileMenu>
        {children}
      </div>
    )
  }
}

export default MobileMenuContainer
