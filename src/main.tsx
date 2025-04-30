import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DefaultTheme } from './Themas/DeafultThema'
import { ThemeProvider } from 'styled-components'

import Router from './Routes/Router'
import GlobalStyles from './GlobalStyle'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider theme={DefaultTheme}>
      <Router />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
