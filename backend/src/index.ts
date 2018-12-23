// import { ApolloServer } from 'apollo-server'
// import { applyMiddleware } from 'graphql-middleware'
// import { makeExecutableSchema } from 'graphql-tools'

// import { Prisma } from './generated/prisma-client'
// import resolvers from './resolvers'
// import typeDefs from './schemas'
// import { getUser, permissions, validation } from './middleware'

export const startServer = (async () => {
  const { PORT, PRISMA_ENDPOINT, PRISMA_SECRET } = process.env
  console.log(process.env)
  console.log(PORT, PRISMA_ENDPOINT, PRISMA_SECRET)
  // const execSchema = makeExecutableSchema({ typeDefs, resolvers })
  // const schema = applyMiddleware(execSchema, permissions, validation)

  // const prisma = new Prisma({
  //   endpoint: PRISMA_ENDPOINT,
  //   secret: PRISMA_SECRET,
  //   debug: false
  // })

  // const server = new ApolloServer({
  //   schema,
  //   context: (ctx: any) => ({ ...ctx, prisma, user: getUser(ctx, prisma) })
  // })

  // await server.listen({ port: PORT })
  // console.log(`🚀 Server is running on http://localhost:${PORT}`)
})()
