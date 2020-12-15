import { css } from 'styled-components'

import { grayscaleColors, uiColors } from 'styled/constants'

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'dark'
  | 'danger'
  | 'success'
  | 'blue'
  | 'yellow'

export const commonButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  box-shadow: none;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const primaryButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.navy.base};
`

export const secondaryButtonStyle = css`
  color: ${uiColors.navy.base};
  background-color: ${uiColors.navy.light};
`

export const ghostButtonStyle = css`
  color: ${uiColors.navy.base};
  background-color: ${grayscaleColors.white};
  border-color: ${grayscaleColors.tertiary};
`

export const darkButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${grayscaleColors.dark};
`

export const dangerButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.orange.base};
`

export const successButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.green.base};
`

export const blueButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.blue.base};
`

export const yellowButtonStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.yellow.base};
`

export function selectButtonVariant(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return primaryButtonStyle
    case 'secondary':
      return secondaryButtonStyle
    case 'ghost':
      return ghostButtonStyle
    case 'dark':
      return darkButtonStyle
    case 'danger':
      return dangerButtonStyle
    case 'success':
      return successButtonStyle
    case 'blue':
      return blueButtonStyle
    case 'yellow':
      return yellowButtonStyle
    default:
      return ghostButtonStyle
  }
}
