import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

export const fragment = graphql`
  fragment CoreHeadingBlock on WordPress_CoreHeadingBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreHeadingBlockAttributes {
        align
        anchor
        className
        content
        level
      }
    }
  }
`

const H1 = styled.h1`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const H2 = styled.h2`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const H3 = styled.h3`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const H4 = styled.h4`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const H5 = styled.h5`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const H6 = styled.h6`
  font-family: ${props => props.theme.serifFont};
  color: ${props => props.theme.primaryColor};

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const CoreHeadingBlock = data => {
  const { anchor, className, content, level } = data
  const Heading = `H` + level
  return (
    <Heading
      id={anchor !== null ? anchor : ''}
      className={className !== null ? className : ''}
      {...data}
    >
      {content}
    </Heading>
  )
}

export default CoreHeadingBlock
