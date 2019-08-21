import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { darken } from 'polished'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'site-name menu';
  grid-gap: 3rem;
  padding: 2.5rem 3rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    grid-template-columns: 1fr;
    grid-template-areas: 'site-name';
    grid-gap: 2rem;
    padding: 2rem;
  }
`

const SiteNameLink = styled(Link)`
  grid-area: site-name;
  align-self: center;
  font-family: ${props => props.theme.fontFamily};
  font-size: 3.2rem;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-decoration: none;
  margin-right: 4rem;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 2.2rem;
  }
`

const SiteNameFirst = styled.span`
  font-weight: 400;
`

const SiteNameLast = styled.span`
  font-weight: 700;
`

const Menu = styled.div`
  grid-area: menu;
  align-self: center;
  justify-self: end;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    display: none;
  }
`

const MenuItem = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.button === 'true'
      ? '#ffffff'
      : props.active === 'true'
      ? props.theme.primaryColor
      : props.theme.textColor};
  font-size: 1.5rem;
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

  @media (max-width: ${props => props.theme.tabletWidth}) {
    font-size: 1.5rem;
    padding: 1rem;
  }
`

const SiteName = props => (
  <SiteNameLink to={props.to}>
    <SiteNameFirst>Daniel</SiteNameFirst>
    <SiteNameLast>Milner</SiteNameLast>
  </SiteNameLink>
)

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <SiteName to="/" />
        <Menu>
          {this.props.pages.map(({ node }, index) => (
            <MenuItem
              key={index}
              to={node.url}
              active={
                this.props.location.pathname === node.url ? 'true' : 'false'
              }
              button={node.ftConfig.ftButton ? 'true' : 'false'}
            >
              {node.label}
            </MenuItem>
          ))}
        </Menu>
      </HeaderContainer>
    )
  }
}
