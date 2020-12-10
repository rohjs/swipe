export type ThemeTypes = 'light' | 'dark'

export type GrayscaleColors =
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'border'
  | 'background'

export type UiColors = 'navy' | 'blue' | 'green' | 'orange' | 'yellow'

export type TypeScales =
  | 'micro'
  | 'tiny'
  | 'small'
  | 'base'
  | 'medium'
  | 'large'

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
