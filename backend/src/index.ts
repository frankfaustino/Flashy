import * as express from 'express'
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'

import resolvers from './resolvers'
import typeDefs from './schemas'
import { getUser, permissions, prisma, sesh, validation } from './middleware'

export const startServer = (async () => {
  const app = express()
  const { CLIENT_ENDPOINT, PORT } = process.env
  const execSchema = makeExecutableSchema({ typeDefs, resolvers })
  const schema = applyMiddleware(execSchema, permissions, validation)

  app.use(sesh)
  app.use(getUser)

  const server = new ApolloServer({
    schema,
    context: (ctx: any) => ({ ...ctx, prisma })
  })

  const cors = {
    credentials: true,
    origin: CLIENT_ENDPOINT
  }

  server.applyMiddleware({ app, path: '/', cors })

  app.listen({ port: PORT }, () =>
    console.log(`🚀 GraphQL server is running on http://localhost:${PORT}${server.graphqlPath}`)
  )
})()
