import { css } from 'styled-components'

import { grayscaleColors } from 'styled/constants'
import { rgba } from 'styled/utils'

export type InputVariants = 'default' | 'filled'

export const commonInputStyle = css`
  display: block;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: none;
  background-color: ${grayscaleColors.white};
  appearance: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${rgba(grayscaleColors.secondary, 0.75)};
  }
`

export const defaultInputStyle = css`
  color: ${grayscaleColors.primary};
  border: 1px solid ${grayscaleColors.tertiary};
`

export const filledInputStyle = css`
  color: ${grayscaleColors.primary};
  background-color: ${rgba(grayscaleColors.lightGray, 0.8)};
`

export function selectInputVariant(variant: InputVariants) {
  switch (variant) {
    case 'default':
      return defaultInputStyle
    case 'filled':
      return filledInputStyle
    default:
      return defaultInputStyle
  }
}
