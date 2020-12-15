import { GrayscaleColors, TypeScales, UiColors } from 'types/theme'
import { rgba } from './utils'

// Grayscales
export const grayscaleDark = '#1B1C32'
export const grayscalePrimary = '#3F4150'
export const grayscaleSecondary = '#858896'
export const grayscaleTertiary = '#E0E2E7'
export const grayscaleLightGray = '#F4F5FA'
export const grayscaleWhite = '#FFFFFF'

export const grayscaleColors: Record<GrayscaleColors, string> = {
  dark: grayscaleDark,
  primary: grayscalePrimary,
  secondary: grayscaleSecondary,
  tertiary: grayscaleTertiary,
  lightGray: grayscaleLightGray,
  white: grayscaleWhite
}

// UI Colors
export const navyBase = '#0052CC'
export const navyLight = '#F2F6FC'
export const navyDim = rgba('#0052CC', 0.05)

export const blueBase = '#0086FF'
export const blueLight = '#D9EDFF'
export const blueDim = rgba('#0086FF', 0.05)

export const greenBase = '#22C58B'
export const greenLight = '#DBF6EC'
export const greenDim = rgba('#22C58B', 0.05)

export const orangeBase = '#E95432'
export const orangeLight = '#FCE6E0'
export const orangeDim = rgba('#E95432', 0.05)

export const yellowBase = '#FCBC1D'
export const yellowLight = '#FFF5DD'
export const yellowDim = rgba('#FCBC1D', 0.05)

export const uiColors: Record<
  UiColors,
  { base: string; light: string; dim: string }
> = {
  navy: { base: navyBase, light: navyLight, dim: navyDim },
  blue: { base: blueBase, light: blueLight, dim: blueDim },
  green: { base: greenBase, light: greenLight, dim: greenDim },
  orange: { base: orangeBase, light: orangeLight, dim: orangeDim },
  yellow: { base: yellowBase, light: yellowLight, dim: yellowDim }
}

// Font Sizes
export const fontSizeMicro = '12px'
export const fontSizeTiny = '13px'
export const fontSizeSmall = '14px'
export const fontSizeBase = '16px'
export const fontSizeMedium = '18px'
export const fontSizeLarge = '22px'

export const fontSizes: Record<TypeScales, string> = {
  micro: fontSizeMicro,
  tiny: fontSizeTiny,
  small: fontSizeSmall,
  base: fontSizeBase,
  medium: fontSizeMedium,
  large: fontSizeLarge
}

// Font Weights
export const fontWeightNormal = 400
export const fontWeightMedium = 500
export const fontWeightBold = 700
export const fontWeightHeavy = 900

export const fontWeights = {
  normal: fontWeightNormal,
  medium: fontWeightMedium,
  bold: fontWeightBold,
  heavy: fontWeightHeavy
}

// Line Heights
export const lineHeightMicro = '15px'
export const lineHeightTiny = '16px'
export const lineHeightSmall = '20px'
export const lineHeightBase = '24px'
export const lineHeightMedium = '28px'
export const lineHeightLarge = '32px'

export const lineHeights: Record<TypeScales, string> = {
  micro: lineHeightMicro,
  tiny: lineHeightTiny,
  small: lineHeightSmall,
  base: lineHeightBase,
  medium: lineHeightMedium,
  large: lineHeightLarge
}

// Letter Spacings
export const letterSpacingMicro = '0'
export const letterSpacingTiny = '0'
export const letterSpacingSmall = '0'
export const letterSpacingBase = '-0.001em'
export const letterSpacingMedium = '-0.0025em'
export const letterSpacingLarge = '-0.003em'

export const letterSpacings: Record<TypeScales, string> = {
  micro: letterSpacingMicro,
  tiny: letterSpacingTiny,
  small: letterSpacingSmall,
  base: letterSpacingBase,
  medium: letterSpacingMedium,
  large: letterSpacingLarge
}
