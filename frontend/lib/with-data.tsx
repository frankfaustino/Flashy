import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

const DEV_ENDPOINT = 'http://localhost:9999'

function createClient(arg: any) {
  const { headers } = arg

  return new ApolloClient({
    uri: DEV_ENDPOINT,
    request: async operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    },
  })
}

export default withApollo(createClient)