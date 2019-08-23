import { graphql } from 'gatsby'

export const CoreListBlockFragment = graphql`
  fragment CoreListBlock on WPGraphQL_CoreListBlock {
    name
    attributes {
      __typename
      className
      ordered
      values
    }
  }
`
