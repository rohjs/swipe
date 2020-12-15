import { css } from 'styled-components'

import { FormSizes } from 'types/forms'
import { setTextStyle } from './utils'

export const bigFormStyle = css`
  ${setTextStyle('small', 'normal')};
  height: 50px;
  padding: 0 16px;
  border-radius: 8px;
`

export const mediumFormStyle = css`
  ${setTextStyle('tiny', 'normal')};
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
`

export const smallFormStyle = css`
  ${setTextStyle('tiny', 'normal')};
  height: 36px;
  padding: 0 8px;
  border-radius: 4px;
`

export function selectFormSize(size?: FormSizes) {
  switch (size) {
    case 'big':
      return bigFormStyle
    case 'medium':
      return mediumFormStyle
    case 'small':
      return smallFormStyle
    default:
      return mediumFormStyle
  }
}
