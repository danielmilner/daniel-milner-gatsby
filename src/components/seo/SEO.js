import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

export default class SEO extends Component {
  render() {
    const { title, desc, banner, pathname, article } = this.props
    return (
      <StaticQuery
        query={query}
        render={({
          site: {
            siteMetadata: {
              siteUrl,
              defaultTitle,
              defaultDescription,
              defaultBanner,
              siteLanguage,
              ogLanguage,
              twitter,
              facebook,
            },
          },
        }) => {
          const seo = {
            title: title || defaultTitle,
            description: desc || defaultDescription,
            image: `${siteUrl}${banner || defaultBanner}`,
            url: `${siteUrl}${pathname || ''}`,
          }

          return (
            <>
              <Helmet
                title={
                  seo.title === defaultTitle
                    ? seo.title
                    : `${seo.title} | ${defaultTitle}`
                }
              >
                <html lang={siteLanguage} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
              </Helmet>
              <Facebook
                desc={seo.description}
                image={seo.image}
                title={seo.title}
                type={article ? 'article' : 'website'}
                url={seo.url}
                locale={ogLanguage}
                name={facebook}
              />
              <Twitter
                title={seo.title}
                image={seo.image}
                desc={seo.description}
                username={twitter}
              />
            </>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        ogLanguage
        twitter
        facebook
      }
    }
  }
`
