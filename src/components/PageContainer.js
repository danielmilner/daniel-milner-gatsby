import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  max-width: ${props => props.theme.contentMaxWidth};
  margin: 0 auto;

  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 0 2rem;
  }
`

export default Container

// export default class PageContainer extends Component {
//   render() {
//     return <Container>{this.props.children}</Container>
//   }
// }
