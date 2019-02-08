import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: 7rem;
  display: grid;
  grid-gap: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  @media (max-width: ${props => props.theme.tabletWidth}) {
    padding: 2rem;
    grid-gap: 2rem;
  }
`

export default class GridContainer extends Component {
  render() {
    return (<Container>{this.props.children}</Container>)
  }
}