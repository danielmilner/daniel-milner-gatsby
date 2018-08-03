import React from 'react'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'

const IndexPage = ({ data }) => (
  <PageContainer>
    <PageTitle>{data.markdownRemark.frontmatter.title}</PageTitle>
    <PageText dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </PageContainer>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
