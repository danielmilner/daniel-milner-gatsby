import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { getFontSize, getColor } from './utility'

export const fragment = graphql`
  fragment CoreParagraphBlock on WordPress_CoreParagraphBlock {
    name
    attributes {
      __typename
      ... on WordPress_CoreParagraphBlockAttributesV3 {
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

const P = styled.p`
	font-weight: 300;
	line-height: 2.8rem;
	font-size: 1.7rem;
	margin-bottom: 4rem;
	font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.textSize};
    color: ${props => props.theme.textColor};

	${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
	${props =>
    props.backgroundColor &&
    css`
      background-color: ${getColor(props.backgroundColor, props.theme)};
    `}
	${props =>
    props.customFontSize &&
    css`
      font-size: ${props.customFontSize + `px`};
    `}
	${props =>
    props.customTextColor &&
    css`
      color: ${props.customTextColor};
    `}
	${props =>
    props.fontSize &&
    css`
      font-size: ${getFontSize(props.fontSize, props.theme)};
    `}
	${props =>
    props.textColor &&
    css`
      color: ${getColor(props.textColor, props.theme)};
    `}
	${props =>
    props.dropCap &&
    css`
      initial-letter: ${props.theme.block.dropCap};
    `}
`

const CoreParagraphBlock = data => {
  const { className, content } = data
  return (
    <P
      className={className !== null ? className : ''}
      {...data}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></P>
  )
}

export default CoreParagraphBlock
