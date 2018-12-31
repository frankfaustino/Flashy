import React from 'react'
import Router from 'next/router'

import { NextContextWithApollo } from '../lib/types/NextContextWithApollo'
import { ME_QUERY } from '../lib/graphql/queries'
import { MeQuery } from '../lib/graphql/apollo-components'

const redirect = (context: any, target: string) => {
  if (context.res) {
    // Server-side
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // Client-side (browser), replace route with target
    Router.replace(target)
  }
}

const withAuth = <T extends object>(C: React.ComponentClass<T> | React.SFC<T>) => {
  return class AuthComponent extends React.Component<T> {
    static async getInitialProps({ apolloClient, ...ctx }: NextContextWithApollo) {
      try {
        const response = await apolloClient.query<MeQuery>({ query: ME_QUERY, errorPolicy: 'ignore' })
        if (!response || !response.data || !response.data.me) {
          redirect(ctx, '/landing')
          return { me: null }
        }
        return { me: response.data.me }
      } catch (e) {
        return {}
      }
    }

    render() {
      return <C {...this.props} />
    }
  }
}

export default withAuth