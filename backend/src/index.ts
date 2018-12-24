import { ApolloServer } from 'apollo-server'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'

import { Prisma } from './generated/prisma-client'
import resolvers from './resolvers'
import typeDefs from './schemas'
import { getUser, permissions, validation } from './middleware'

export const startServer = (async () => {
  const { PORT, PRISMA_ENDPOINT, PRISMA_SECRET } = process.env
  const execSchema = makeExecutableSchema({ typeDefs, resolvers })
  const schema = applyMiddleware(execSchema, permissions, validation)

  const prisma = new Prisma({
    endpoint: PRISMA_ENDPOINT,
    secret: PRISMA_SECRET
  })

  const server = new ApolloServer({
    schema,
    context: (ctx: any) => ({ ...ctx, prisma, user: getUser(ctx, prisma) })
  })

  const { url } = await server.listen({ port: PORT })
  console.log(`🚀 GraphQL server is running on ${url}`)
})()
