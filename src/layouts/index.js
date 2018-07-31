import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import theme from '../utils/theme'

const SiteContent = styled.div`
  margin: 0 auto;
  padding: 5rem;
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 2rem;
  }
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <SiteContent>{children()}</SiteContent>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
