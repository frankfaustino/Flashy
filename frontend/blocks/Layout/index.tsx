import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import { GlobalStyle, ThemeProvider } from '../../lib/styles/global-styles'
import { ALT_THEME, BASE_THEME } from '../../lib/styles/themes'

// Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ children }): JSX.Element => {
  const [theme, useTheme] = useState(BASE_THEME)

  const handleRouteChange = (url: string) => {
    NProgress.start()
    switch (url.slice(1)) {
      case 'profile':
      case 'decks':
      case 'settings':
        useTheme(ALT_THEME)
        break
      case 'signup':
      case 'login':
      default:
        useTheme(BASE_THEME)
        break
    }
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChange)
    return () => Router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Meta title={`Flashy | Welcome ! ⚡️`} />
        <Header />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout