import { graphql } from 'gatsby'

export const CoreHeadingBlockFragment = graphql`
  fragment CoreHeadingBlock on WPGraphQL_CoreHeadingBlock {
    name
    attributes {
      __typename
      ... on WPGraphQL_CoreHeadingBlockAttributes {
        align
        anchor
        className
        content
        level
      }
    }
  }
`
