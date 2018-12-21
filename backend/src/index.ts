import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, prisma })
})

const { PORT } = process.env

server
  .start({ port: PORT }, () => console.log(`🚀 Server is running on http://localhost:${PORT}`))
  .catch(err => console.error(err))
