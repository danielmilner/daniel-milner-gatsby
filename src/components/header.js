import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import daniel from '../images/daniel.jpg'

const HeaderContainer = styled.div`
  margin-bottom: 1.45rem;
  display: grid;
  grid-template-columns: 8rem 2fr 3fr;
  grid-template-areas: 'logo site-name menu';
  grid-gap: 3rem;
  padding: 2rem 3rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    grid-template-columns: 6rem 1fr;
    grid-template-areas: 'logo site-name';
    grid-gap: 2rem;
    padding: 2rem;
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 3px solid white;
`

const SiteNameLink = styled(Link)`
  grid-area: site-name;
  align-self: center;
  text-decoration: none;
  margin-right: 4rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: none;
  }
`

const SiteNameText = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 3.5rem;
  color: ${props => props.theme.darkColor};
  text-transform: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 2.2rem;
  }
`

const SiteNameDesc = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${props => props.theme.primaryColor};
  text-transform: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.2rem;
  }
`

const Menu = styled.ul`
  grid-area: menu;
  align-self: center;
  justify-self: end;
  margin: 0;
  padding: 0;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: none;
  }
`

const MenuItemContainer = styled.li`
  padding: 0;
  display: inline-block;
`

const AvatarLink = styled(Link)`
  grid-area: logo;
`

const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textColor};
  font-size: 1.5rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 400;
  padding: 1rem;
  margin: 0 0.5rem;

  &:hover,
  &:active {
    color: ${props => props.theme.primaryColor};
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`

const MenuIcon = styled.i`
  font-size: 1.8rem;
  margin-right: 0.5rem;
  vertical-align: text-bottom;
`

const MenuItem = props => (
  <MenuItemContainer>
    <MenuLink to={props.to}>
      <MenuIcon className={props.icon} /> {props.title}
    </MenuLink>
  </MenuItemContainer>
)

const Avatar = props => (
  <AvatarLink to={props.to}>
    <AvatarImage src={props.src} alt={props.alt} />
  </AvatarLink>
)

const SiteName = props => (
  <SiteNameLink to={props.to}>
    <SiteNameText>Daniel Milner</SiteNameText>
    <SiteNameDesc>Full Stack Web Developer</SiteNameDesc>
  </SiteNameLink>
)

const Header = ({ siteTitle, pages, handleMobileMenu }) => (
  <HeaderContainer>
    <Avatar to="/" src={daniel} alt={siteTitle} />
    <SiteName to="/" />
    <Menu>
      {pages.map(({ node }) => (
        <MenuItem
          to={node.page.value}
          title={node.title.value}
          icon={node.icon.value}
        />
      ))}
    </Menu>
  </HeaderContainer>
)

export default Header
