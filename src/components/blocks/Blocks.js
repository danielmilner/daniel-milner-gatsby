import React from 'react'
import CoreHeadingBlock from './CoreHeadingBlock'
import CoreParagraphBlock from './CoreParagraphBlock'

const Components = {
  CoreHeadingBlock: CoreHeadingBlock,
  CoreParagraphBlock: CoreParagraphBlock,
}

function Blocks() {
  return (
    <>
      {props.blocks.map((block, index) => {
        const typename = block.__typename
        const BlockComponent = Components[typename]
        return <BlockComponent key={index} {...block} />
      })}
    </>
  )
}

export default Blocks
