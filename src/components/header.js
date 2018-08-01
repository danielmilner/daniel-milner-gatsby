import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import daniel from '../images/daniel.jpg'

const HeaderContainer = styled.div`
  margin-bottom: 1.45rem;
  // border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-areas: 'logo menu';
  grid-gap: 5rem;
  padding: 2rem 3rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    grid-template-columns: 5rem 1fr;
    grid-gap: 1rem;
    padding: 2rem;
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px solid #fff;
  -webkit-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0.4rem 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.1);

  @media (max-width: ${props => props.theme.tabletWidth}) {
    border: 3px solid #fff;
  }
`

const Menu = styled.ul`
  grid-area: menu;
  align-self: center;
  justify-self: end;
  margin: 0;
  padding: 0 0 2rem 0;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0 0 1rem 0;
  }
`

const MenuItemContainer = styled.li`
  padding: 0;
  display: inline-block;

  &:not(:first-of-type) {
    margin-left: 5rem;

    @media (max-width: ${props => props.theme.tabletWidth}) {
      margin-left: 2rem;
    }
  }
`

const AvatarLink = styled(Link)`
  grid-area: logo;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2.4rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 400;

  &:hover,
  &:active {
    border-bottom: 3px solid #000;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const MenuItem = props => (
  <MenuItemContainer>
    <MenuLink to={props.to}>{props.title}</MenuLink>
  </MenuItemContainer>
)

const Avatar = props => (
  <AvatarLink to={props.to}>
    <AvatarImage src={props.src} alt={props.alt} />
  </AvatarLink>
)

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Avatar to="/" src={daniel} alt={siteTitle} />
    <Menu>
      <MenuItem to="/projects" title="Projects" />
      <MenuItem to="/contact" title="Contact" />
    </Menu>
  </HeaderContainer>
)

export default Header
