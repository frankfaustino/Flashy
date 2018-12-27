import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'

import withData from '../lib/withData'
import Layout from '../blocks/Layout'

interface Props {
  apollo: ApolloClient<{}>
}

class Root extends App<Props> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {} as any
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { apollo, Component, pageProps } = this.props

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