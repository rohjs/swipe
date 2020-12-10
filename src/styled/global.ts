import { createGlobalStyle, css } from 'styled-components'
import { lightThemes } from './theme'

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${lightThemes.colors.grayscale.primary};
  }
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${lightThemes.colors.grayscale.primary};
  }
`
