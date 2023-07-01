import React from 'react'
import { Text } from '../FbText.Style'

export interface TextProperties {
    children: any
    font?: string
    fontSize?: string | number
    color?: string
    hoverColor?: string
    hoverBg?: string
/*     leftIcon?: ReactElement
    rightIcon?: ReactElement */
    gap?: string
    iconSize?: string
    maxWidth?: string
    width?: string
    height?: string
    display?: string
    overflow?: string
    textoverflow?: string
    clickable?: boolean
    lineQuantity?: string
    uppercase?: boolean
    textDecoration?: string
    margin?: string
    style?: any
    fontWeigth?: any
    onClick?: any
    onChange?: any
    onMouseEnter?: any
    className?: string
    title?: string
    underline?: boolean
  }

const FbText:React.FC<TextProperties> = (props) => {
  return (
    <Text {...props} style={{width: 'max-content', ...props?.style}}>
    </Text>
  )
}

export default FbText