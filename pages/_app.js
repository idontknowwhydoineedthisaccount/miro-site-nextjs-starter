import '../styles/globals.css'

import React from 'react'

import {ThemeProvider} from 'styled-components'

import {theme} from '@miro-site/design-tokens'

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
