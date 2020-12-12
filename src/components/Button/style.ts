import { css } from 'styled-components'

import { ButtonSizes, ButtonVariants } from 'types/button'
import { setTextStyle } from 'styled/utils'
import { grayscaleColors, uiColors } from 'styled/constants'

export const commonButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 400;
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

export function selectButtonVariant(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return primaryButtonStyle
    case 'secondary':
      return secondaryButtonStyle
    case 'ghost':
      return ghostButtonStyle
    default:
      return ghostButtonStyle
  }
}

export const bigButtonStyle = css`
  ${setTextStyle('small', 'normal')};
  height: 50px;
  padding: 0 16px;
  border-radius: 8px;
`

export const mediumButtonStyle = css`
  ${setTextStyle('tiny', 'normal')};
  height: 44px;
`

export const smallButtonStyle = css`
  ${setTextStyle('tiny', 'normal')};
  height: 36px;
`

export function selectButtonSize(size?: ButtonSizes) {
  switch (size) {
    case 'big':
      return bigButtonStyle
    case 'medium':
      return mediumButtonStyle
    case 'small':
      return smallButtonStyle
    default:
      return smallButtonStyle
  }
}
