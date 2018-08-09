import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import daniel from '../images/daniel.jpg'

const HeaderContainer = styled.div`
  // background-color: #f8f8f8;
  margin-bottom: 1.45rem;
  // border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: 8rem 2fr 3fr;
  grid-template-areas: 'logo site-name menu';
  grid-gap: 3rem;
  padding: 2rem 3rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    grid-template-columns: 6rem 1fr;
    grid-template-areas 'logo menu';
    grid-gap: 1rem;
    padding: 2rem;
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`

const SiteNameLink = styled(Link)`
  grid-area: site-name;
  align-self: center;
  text-decoration: none;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: none;
  }
`

const SiteNameText = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 5rem;
  color: #000;
  text-transform: none;

  & span {
    color: ${props => props.theme.primaryColor};
  }
`

const Menu = styled.ul`
  grid-area: menu;
  align-self: center;
  justify-self: end;
  margin: 0;
  padding: 0;
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
  font-size: 1.9rem;
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  text-transform: uppercase;
  padding: 1.5rem;
  margin: 0 0.5rem;
  border-bottom: 3px solid transparent;

  &:hover,
  &:active {
    border-bottom: 3px solid ${props => props.theme.primaryColor};
  }

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.5rem;
    padding: 1rem;
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

const SiteName = props => (
  <SiteNameLink to={props.to}>
    <SiteNameText>Daniel Milner</SiteNameText>
  </SiteNameLink>
)

const Header = ({ siteTitle, pages }) => (
  <HeaderContainer>
    <Avatar to="/" src={daniel} alt={siteTitle} />
    <SiteName to="/" />
    <Menu>
      {Object.keys(pages).map(key => (
        <MenuItem to={pages[key].page} title={pages[key].title} />
      ))}
    </Menu>
  </HeaderContainer>
)

export default Header
