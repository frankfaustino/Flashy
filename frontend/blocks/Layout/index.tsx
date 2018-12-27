import React, { ReactNode, useEffect, useState } from 'react'
import Router from 'next/router'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { altTheme, baseTheme, GlobalStyle, ThemeProvider } from '../../lib'

interface Props {
  children?: ReactNode
}

const Layout: React.SFC<Props> = ({ children }): JSX.Element => {
  const [theme, useTheme] = useState(baseTheme)

  const handleRouteChange = (url: string) => {
    switch (url.slice(1)) {
        case 'profile':
        case 'decks':
        case 'settings':
          useTheme(altTheme)
          break
        case 'signup':
        case 'login':
        default:
          useTheme(baseTheme)
          break
    }
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => Router.events.off('routeChangeStart', handleRouteChange)
  })

  return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Header />
          {children}
          <Footer />
        </>
      </ThemeProvider>
  )
}

export default Layout