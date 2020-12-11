export type ThemeTypes = 'light'

export type GrayscaleColors =
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'lightGray'
  | 'white'

export type UiColors = 'navy' | 'blue' | 'green' | 'orange' | 'yellow'

export type TypeScales =
  | 'micro'
  | 'tiny'
  | 'small'
  | 'base'
  | 'medium'
  | 'large'

export type FontWeights = 'normal' | 'medium' | 'bold' | 'heavy'

export interface BaseTheme {
  colors: {
    grayscale: {
      [key in GrayscaleColors]: string
    }
    ui: {
      [key in UiColors]: string
    }
  }
  fontSizes: {
    [key in TypeScales]: string
  }
  lineHeights: {
    [key in TypeScales]: string
  }
}
