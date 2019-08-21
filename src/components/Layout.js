import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import MobileMenuContainer from './MobileMenuContainer'
import '../layouts/index.css'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import theme from '../utils/theme'

const SiteContent = styled.div`
  margin: 0;
  padding: 0;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        # primary_nav: allCockpitNavigation {
        #   edges {
        #     node {
        #       title {
        #         value
        #       }
        #       button {
        #         value
        #       }
        #       page {
        #         value
        #       }
        #     }
        #   }
        # }
        primary_nav: wordPress {
          menuItems(where: { location: PRIMARY }) {
            edges {
              node {
                label
                url
                ftConfig {
                  ftButton
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <MobileMenuContainer
          pages={data.primary_nav.menuItems.edges}
          location={location}
        >
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'The official website for Daniel Milner',
              },
              { name: 'keywords', content: 'daniel, milner, react, gatsby' },
              { name: 'theme-color', content: `${theme.primaryColor}` },
            ]}
          />
          <Header
            siteTitle={data.site.siteMetadata.title}
            pages={data.primary_nav.menuItems.edges}
            location={location}
          />
          <SiteContent className="site-content">{children}</SiteContent>
          <Footer />
        </MobileMenuContainer>
      </ThemeProvider>
    )}
  />
)

export default Layout
