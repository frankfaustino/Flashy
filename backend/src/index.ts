import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'

import { Prisma } from './generated/prisma-client'
import resolvers from './resolvers'
import typeDefs from './schemas'
import { authorization, validation } from './utils'

export const startServer = (async () => {
  const { PORT, PRISMA_ENDPOINT, PRISMA_SECRET } = process.env
  const execSchema = makeExecutableSchema({ typeDefs, resolvers })
  const schema = applyMiddleware(execSchema, authorization, validation)

  const prisma = new Prisma({
    endpoint: PRISMA_ENDPOINT,
    secret: PRISMA_SECRET,
    debug: false
  })

  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ ...req, prisma })
  })

  await server.listen({ port: PORT })
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})()
