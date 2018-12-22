import { GraphQLClient } from 'graphql-request'

const { GRAPHQL_SERVER_URL, TOKEN } = process.env

const USERS_QUERY = `
  query {
    users {
      id
      name
    }
  }
`

test('Should return array of users if authorized', async () => {
  const OPTIONS = {
    headers: {
      authorization: `Bearer ${TOKEN}`
    }
  }
  const client = new GraphQLClient(GRAPHQL_SERVER_URL, OPTIONS)
  const response: any = await client.request(USERS_QUERY)
  expect(response.users.length).toBeGreaterThan(0)
})

test('Should return null if unauthorized', async () => {
  const client = new GraphQLClient(GRAPHQL_SERVER_URL, {})
  const response: any = await client.request(USERS_QUERY)
  expect(response.users).toBeNull()
})
