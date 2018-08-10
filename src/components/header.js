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
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  background: linear-gradient(rgba(56,86,135,0.7), rgba(56,86,135,0.7)), url(./assets/header-bg.png);

  @media (max-width: ${props => props.theme.tabletWidth}) {
    grid-template-columns: 6rem 1fr;
    grid-template-areas 'logo site-name';
    grid-gap: 2rem;
    padding: 2rem;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  filter: hue-rotate(220deg);
  border: 3px solid white;

  &:hover,
  &:active {
    filter: hue-rotate(0deg);
  }
`

const SiteNameLink = styled(Link)`
  grid-area: site-name;
  align-self: center;
  text-decoration: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    // display: none;
  }
`

const SiteNameText = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 3.5rem;
  color: #fff;
  text-transform: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 2.2rem;
  }
`

const SiteNameDesc = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  text-transform: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.2rem;
  }
`

const Menu = styled.ul`
  grid-area: menu;
  align-self: center;
  justify-self: end;
  margin: -2rem 0 0 0;
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
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 400;
  // text-transform: uppercase;
  padding: 1.5rem;
  margin: 0 0.5rem;

  &:hover,
  &:active {
    color: #fff;
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`

const MenuIcon = styled.i`
  font-size: 2rem;
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
      {Object.keys(pages).map(key => (
        <MenuItem
          key={key}
          to={pages[key].page}
          title={pages[key].title}
          icon={pages[key].icon}
        />
      ))}
    </Menu>
  </HeaderContainer>
)

export default Header
