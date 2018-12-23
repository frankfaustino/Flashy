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
    user(id: "cjq0274u33apy099129zwl387") {
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

  test('Should return array of users if authorized', () => {
    client.request(USERS_QUERY)
      .then(response => {
        expect(response).toHaveProperty('users')
      })
      .catch(() => expect(0).toBe(1))
  })

  test('Should allow finding of an existing user account', () => {
    client.request(USER_QUERY)
      .then(response => {
        expect(response).toHaveProperty('user.name', 'Frank')
      })
      .catch(() => expect(0).toBe(1))
  })

  test('Should return null if unauthorized', () => {
    client = new GraphQLClient(GRAPHQL_SERVER_URL, {})
    client.request(USERS_QUERY)
      .catch(err => expect(err).toThrowError('Not Authorized!'))
  })
})

