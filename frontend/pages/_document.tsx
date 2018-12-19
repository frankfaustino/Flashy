import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface DocumentProps {
  styleTags: string
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet()
    const callbackFn = (App: Function) => (props: any) => sheet.collectStyles(<App { ...props } />)
    const page = renderPage(callbackFn)
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}