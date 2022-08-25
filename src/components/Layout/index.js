import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { darkTheme } from './theme'

export const Layout = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <main className="shorturl__main">
      <div className="shorturl__wrapper">{children}</div>
    </main>
  </ThemeProvider>
)
