import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  margin: 0;
  padding: ${props => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  &:hover,
  &:active,
  &:focus {
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.2);
  }
`

export default class GridItem extends Component {
  render() {
    return (
      <Item padding={this.props.padding ? this.props.padding : '2rem'}>
        {this.props.children}
      </Item>
    )
  }
}
