import { graphql } from 'gatsby'

export const CoreImageBlockFragment = graphql`
  fragment CoreImageBlock on WPGraphQL_CoreImageBlock {
    name
    attributes {
      __typename
      align
      alt
      caption
      className
      height
      href
      linkClass
      linkDestination
      linkTarget
      rel
      url
      width
    }
  }
`
