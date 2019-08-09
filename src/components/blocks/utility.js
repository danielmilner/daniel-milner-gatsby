function getFontSize(fontSize, theme) {
  switch (fontSize) {
    case 'small':
      return theme.block.fontSize.small
    case 'normal':
      return theme.block.fontSize.normal
    case 'medium':
      return theme.block.fontSize.medium
    case 'large':
      return theme.block.fontSize.large
    case 'huge':
      return theme.block.fontSize.huge
    default:
      return null
  }
}

function getColor(color, theme) {
  return theme.block.colors[color]
}

export { getFontSize, getColor }
