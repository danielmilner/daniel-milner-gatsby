import { graphql } from 'gatsby'

export const CoreCodeBlockFragment = graphql`
  fragment CoreCodeBlock on WPGraphQL_CoreCodeBlock {
    name
    attributes {
      __typename
      ... on WPGraphQL_CoreCodeBlockAttributes {
        className
        codeContent: content
        language
      }
    }
  }
`
