import { BaseTheme, ThemeTypes } from 'types/theme'

export const lightThemes: BaseTheme = {
  colors: {
    grayscale: {
      dark: '#1B1C32',
      primary: '#3F4150',
      secondary: '#858896',
      border: '#E0E2E7',
      background: '#F4F5FA'
    },
    ui: {
      navy: '#0052CC',
      blue: '#0086FF',
      green: '#22C58B',
      orange: '#E95432',
      yellow: '#FCBC1D'
    }
  },
  fontSizes: {
    micro: '12px',
    tiny: '13px',
    small: '14px',
    base: '16px',
    medium: '18px',
    large: '22px'
  },
  lineHeights: {
    micro: '15px',
    tiny: '16px',
    small: '20px',
    base: '24px',
    medium: '28px',
    large: '32px'
  }
}

export const darkThemes: BaseTheme = {
  colors: {
    grayscale: {
      dark: '#F4F5FA',
      primary: '#E0E2E7',
      secondary: '#858896',
      border: '#3F4150',
      background: '#1B1C32'
    },
    ui: {
      navy: '#0052CC',
      blue: '#0086FF',
      green: '#22C58B',
      orange: '#E95432',
      yellow: '#FCBC1D'
    }
  },
  fontSizes: {
    micro: '12px',
    tiny: '13px',
    small: '14px',
    base: '16px',
    medium: '18px',
    large: '22px'
  },
  lineHeights: {
    micro: '15px',
    tiny: '16px',
    small: '20px',
    base: '24px',
    medium: '28px',
    large: '32px'
  }
}

export function selectTheme(theme?: ThemeTypes) {
  switch (theme) {
    case 'light':
      return lightThemes
    case 'dark':
      return darkThemes
    default:
      return lightThemes
  }
}
