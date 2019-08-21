import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment CoreParagraphBlock on WPGraphQL_CoreParagraphBlock {
    name
    attributes {
      __typename
      ... on WPGraphQL_CoreParagraphBlockAttributesV3 {
        align
        backgroundColor
        className
        content
        customBackgroundColor
        customFontSize
        customTextColor
        direction
        dropCap
        fontSize
        textColor
      }
    }
  }
`
