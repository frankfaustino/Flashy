import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withData from '../lib/with-data'
import Layout from '../components/Layout'

class Root extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {} as any
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { apollo, Component, pageProps } = this.props as any

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(Root)