import { GraphQLClient } from 'graphql-request'

const { GRAPHQL_SERVER_URL, TEST_EMAIL, TEST_NAME, TEST_PASSWORD } = process.env


const ME_QUERY = `
  query {
    me {
      id
      name
      email
    }
  }
`

const SIGNUP_MUTATION = `
  mutation {
    signUp(email: "${TEST_EMAIL}", name: "${TEST_NAME}", password: "${TEST_PASSWORD}") {
      id
      token
      name
      email
      errors {
        path
        message
      }
    }
  }
`

const LOGOUT_MUTATION = `
  mutation {
    logOut {
      message
    }
  }
`

const LOGIN_MUTATION = (email: string, password: string) => `
  mutation {
    logIn(email: "${email}", password: "${password}") {
      id
      name
      errors {
        path
        message
      }
    }
  }
`

const DELETE_ME_MUTATION = `
  mutation {
    deleteMe {
      id
    }
  }
`

let client: GraphQLClient
let USER_ID: string = ''
let TOKEN: string = ''
let OPTIONS: object

beforeAll(async () => {
  client = new GraphQLClient(GRAPHQL_SERVER_URL)
})

describe('Mutation signUp', () => {
  test('Should allow the creation of a user account with valid email and password', async () => {
    const response: any = await client.request(SIGNUP_MUTATION)
    USER_ID = response.signUp.id
    TOKEN = response.signUp.token
    OPTIONS = {
      headers: {
        authorization: `Bearer ${TOKEN}`
      }
    }
    expect(response).toHaveProperty('signUp.email', TEST_EMAIL)
  })
})

describe('Mutation logOut', () => {
  test('Should allow a user to log out', async () => {
    client = new GraphQLClient(GRAPHQL_SERVER_URL, OPTIONS)
    await client.request(LOGIN_MUTATION(TEST_EMAIL, TEST_PASSWORD))
    const response: any = await client.request(LOGOUT_MUTATION)
    expect(response).toHaveProperty('logOut.message', 'success!')
  })
})

describe('Mutation logIn', () => {
  test('Should allow a user to log in', async () => {
    const response: any = await client.request(LOGIN_MUTATION(TEST_EMAIL, TEST_PASSWORD))
    expect(response).toHaveProperty('logIn.name', TEST_NAME)
  })

  test('Should receive "Not authorized" error when invalid email is given', async () => {
    const response: any = await client.request(LOGIN_MUTATION('notbob@bob.com', 'fakePas5w0rd'))
    expect(response.logIn.errors[0].message).toEqual('Not authorized')
  })

  test('Should receive "Not authorized" error when invalid password is given', async () => {
    const response: any = await client.request(LOGIN_MUTATION('bob@email.com', 'xxx'))
    expect(response.logIn.errors[0].message).toEqual('Not authorized')
  })

  test('Should receive 3 error messages when invalid input length is detected', async () => {
    const response: any = await client.request(LOGIN_MUTATION('x', 'x'))
    expect(response.logIn.errors).toHaveLength(3)
  })
})

describe('Query me', () => {
  test('Should allow a user to get their own profile', async () => {
    client = new GraphQLClient(GRAPHQL_SERVER_URL, OPTIONS)
    const response: any = await client.request(ME_QUERY)
    const expectedResponse = {
      me: {
        id: USER_ID,
        name: TEST_NAME,
        email: TEST_EMAIL
      }
    }
    expect(response).toEqual(expectedResponse)
  })
})

describe('Mutation deleteMe', () => {
  test('Should allow a user to delete their own account', async () => {
    client = new GraphQLClient(GRAPHQL_SERVER_URL, OPTIONS)
    const response: any = await client.request(DELETE_ME_MUTATION)
    expect(response).toEqual({ deleteMe: { id: USER_ID }})
  })
})