import { css } from 'styled-components'

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
