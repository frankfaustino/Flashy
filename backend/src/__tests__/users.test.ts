import { GraphQLClient } from 'graphql-request'

const { GRAPHQL_SERVER_URL, TEST_ID, TOKEN } = process.env

const USERS_QUERY = `
  query {
    users {
      id
      name
    }
  }
`

const USER_QUERY = `
  query {
    user(id: "${TEST_ID}") {
      id
      name
    }
  }
`

describe('Query', () => {
  const OPTIONS = {
    headers: {
      authorization: `Bearer ${TOKEN}`
    }
  }
  let client = new GraphQLClient(GRAPHQL_SERVER_URL, OPTIONS)

  test('Should return array of users if authorized', async () => {
    const response = await client.request(USERS_QUERY)
    expect(response).toHaveProperty('users')
  })

  test('Should allow finding of an existing user account', async () => {
    const response = await client.request(USER_QUERY)
    expect(response).toHaveProperty('user.name', 'Frank')
  })

  test('Data object should return null if unauthorized', async () => {
    expect.assertions(1)
    try {
      client = new GraphQLClient(GRAPHQL_SERVER_URL, {})
      const response = await client.rawRequest(USERS_QUERY)
    } catch (err) {
      expect(err.response.data.users).toBeNull()
    }
  })
})