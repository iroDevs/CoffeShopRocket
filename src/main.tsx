import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemaDefault } from './Themas/ThemaDefault'
import { ThemeProvider } from 'styled-components'

import Router from './Routes/Router'
import {GlobalStyles} from './GlobalStyle'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ThemaDefault}>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
