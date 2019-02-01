import React from 'react'
import PropTypes from 'prop-types'
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
  margin: 0 auto;
  padding: 5rem;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 1.5rem;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        primary_nav: markdownRemark(
          fileAbsolutePath: { regex: "/^(?=.*/cms/settings/navigation).*/gm" }
        ) {
          frontmatter {
            primary_nav {
              page
              title
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <MobileMenuContainer pages={data.primary_nav.frontmatter.primary_nav}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'The official website for Daniel Milner',
              },
              { name: 'keywords', content: 'daniel, milner, react, gatsby' },
            ]}
          >
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
              crossorigin="anonymous"
            />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            pages={data.primary_nav.frontmatter.primary_nav}
          />
          <SiteContent className="site-content">{children}</SiteContent>
          <Footer />
        </MobileMenuContainer>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     primary_nav: markdownRemark(
//       fileAbsolutePath: { regex: "/^(?=.*/cms/settings/navigation).*/gm" }
//     ) {
//       frontmatter {
//         primary_nav {
//           page
//           title
//           icon
//         }
//       }
//     }
//   }
// `
