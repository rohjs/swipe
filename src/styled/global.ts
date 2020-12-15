import { createGlobalStyle } from 'styled-components'
import styledReset from 'styled-reset'
import { lightThemes } from './theme'

export const GlobalStyle = createGlobalStyle`
  ${styledReset}

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${lightThemes.colors.grayscale.primary};
  }

  button,
  input,
  select,
  textarea,
  form {
    font-family: Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
