import React from 'react'
import { ThemeProvider } from 'styled-components'

import { selectTheme } from 'styled/theme'

function App() {
  return (
    <ThemeProvider theme={selectTheme('light')}>
      <div className="App">App</div>
    </ThemeProvider>
  )
}

export default App
