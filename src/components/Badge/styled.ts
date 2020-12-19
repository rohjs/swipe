import { css } from 'styled-components'

import { grayscaleColors, uiColors } from 'styled/constants'
import { rgba, setTextStyle } from 'styled/utils'
import { UiColors } from 'types/theme'

export type BadgeVariants = 'muted' | UiColors
export type BadgeTypes = 'solid' | 'subtle' | 'outlined'

export const commonBadgeStyle = css`
  ${setTextStyle('micro', 'medium')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 5px;
  line-height: 1;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: 3px;
`

export const navySolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.navy.base};
`

export const navySubtleBadgeStyle = css`
  color: ${uiColors.navy.base};
  background-color: ${rgba(uiColors.navy.base, 0.125)};
`

export const navyOutlinedBadgeStyle = css`
  color: ${uiColors.navy.base};
  border: 1px solid ${rgba(uiColors.navy.base, 0.5)};
`

export const blueSolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.blue.base};
`

export const blueSubtleBadgeStyle = css`
  color: ${uiColors.blue.base};
  background-color: ${rgba(uiColors.blue.base, 0.125)};
`

export const blueOutlinedBadgeStyle = css`
  color: ${uiColors.blue.base};
  border: 1px solid ${rgba(uiColors.blue.base, 0.5)};
`

export const greenSolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.green.base};
`

export const greenSubtleBadgeStyle = css`
  color: ${uiColors.green.base};
  background-color: ${rgba(uiColors.green.base, 0.125)};
`

export const greenOutlinedBadgeStyle = css`
  color: ${uiColors.green.base};
  border: 1px solid ${rgba(uiColors.green.base, 0.5)};
`

export const orangeSolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.orange.base};
`

export const orangeSubtleBadgeStyle = css`
  color: ${uiColors.orange.base};
  background-color: ${rgba(uiColors.orange.base, 0.125)};
`

export const orangeOutlinedBadgeStyle = css`
  color: ${uiColors.orange.base};
  border: 1px solid ${rgba(uiColors.orange.base, 0.5)};
`

export const yellowSolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${uiColors.yellow.base};
`

export const yellowSubtleBadgeStyle = css`
  color: ${uiColors.yellow.base};
  background-color: ${rgba(uiColors.yellow.base, 0.125)};
`

export const yellowOutlinedBadgeStyle = css`
  color: ${uiColors.yellow.base};
  border: 1px solid ${rgba(uiColors.yellow.base, 0.5)};
`

export const mutedSolidBadgeStyle = css`
  color: ${grayscaleColors.white};
  background-color: ${grayscaleColors.secondary};
`

export const mutedSubtleBadgeStyle = css`
  color: ${grayscaleColors.secondary};
  background-color: ${grayscaleColors.lightGray};
`

export const mutedOutlinedBadgeStyle = css`
  color: ${grayscaleColors.secondary};
  border: 1px solid ${grayscaleColors.tertiary};
`

export function selectBadgeStyle(variant: BadgeVariants, type: BadgeTypes) {
  switch (variant) {
    case 'navy':
      switch (type) {
        case 'solid':
          return navySolidBadgeStyle
        case 'subtle':
          return navySubtleBadgeStyle
        case 'outlined':
          return navyOutlinedBadgeStyle
        default:
          return navySubtleBadgeStyle
      }
    case 'blue':
      switch (type) {
        case 'solid':
          return blueSolidBadgeStyle
        case 'subtle':
          return blueSubtleBadgeStyle
        case 'outlined':
          return blueOutlinedBadgeStyle
        default:
          return blueSubtleBadgeStyle
      }
    case 'green':
      switch (type) {
        case 'solid':
          return greenSolidBadgeStyle
        case 'subtle':
          return greenSubtleBadgeStyle
        case 'outlined':
          return greenOutlinedBadgeStyle
        default:
          return greenSubtleBadgeStyle
      }
    case 'orange':
      switch (type) {
        case 'solid':
          return orangeSolidBadgeStyle
        case 'subtle':
          return orangeSubtleBadgeStyle
        case 'outlined':
          return orangeOutlinedBadgeStyle
        default:
          return orangeSubtleBadgeStyle
      }
    case 'yellow':
      switch (type) {
        case 'solid':
          return yellowSolidBadgeStyle
        case 'subtle':
          return yellowSubtleBadgeStyle
        case 'outlined':
          return yellowOutlinedBadgeStyle
        default:
          return yellowSubtleBadgeStyle
      }
    case 'muted':
      switch (type) {
        case 'solid':
          return mutedSolidBadgeStyle
        case 'subtle':
          return mutedSubtleBadgeStyle
        case 'outlined':
          return mutedOutlinedBadgeStyle
        default:
          return mutedSubtleBadgeStyle
      }
    default:
      switch (type) {
        case 'solid':
          return mutedSolidBadgeStyle
        case 'subtle':
          return mutedSubtleBadgeStyle
        case 'outlined':
          return mutedOutlinedBadgeStyle
        default:
          return mutedSubtleBadgeStyle
      }
  }
}
