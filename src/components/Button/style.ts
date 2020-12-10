import { css } from 'styled-components'

import { ButtonSizes, ButtonVariants } from 'types/button'

export const commonButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 400;
  border: 0;
  border-radius: 6px;
  box-shadow: none;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
  }
`

export const primaryButtonStyle = css`
  background-color: blue;
  color: white;
`

export const secondaryButtonStyle = css`
  background-color: red;
  color: white;
`

export function selectButtonVariant(variant: ButtonVariants) {
  switch (variant) {
    case 'primary':
      return primaryButtonStyle
    case 'secondary':
      return secondaryButtonStyle
    default:
      return
  }
}

export const bigButtonStyle = css`
  height: 50px;
`

export const mediumButtonStyle = css`
  height: 44px;
`

export const smallButtonStyle = css`
  height: 36px;
  font-size: 14px;
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
