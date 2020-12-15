import { css } from 'styled-components'
import hexToRgba from 'hex-to-rgba'

import {
  grayscaleColors,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontWeights
} from './constants'
import { FontWeights, GrayscaleColors, TypeScales } from 'types/theme'

export function setTextStyle(type: TypeScales, weight: FontWeights) {
  return css`
    font-size: ${fontSizes[type]};
    font-weight: ${fontWeights[weight]};
    line-height: ${lineHeights[type]};
    letter-spacing: ${letterSpacings[type]};
  `
}

export function setTextColor(type: GrayscaleColors) {
  return css`
    color: ${grayscaleColors[type]};
  `
}

export function rgba(hex: string, opacity = 1): string {
  let color = hex
  if (hex in grayscaleColors) {
    color = grayscaleColors[hex as GrayscaleColors]
  }
  return hexToRgba(color, opacity)
}
