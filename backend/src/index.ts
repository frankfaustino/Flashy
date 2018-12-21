import { ApolloServer, gql } from 'apollo-server'
import { importSchema } from 'graphql-import'
import { Prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const { APP_SECRET, PORT, PRISMA_ENDPOINT } = process.env

const prisma = new Prisma({
  endpoint: PRISMA_ENDPOINT,
  secret: APP_SECRET,
  debug: true
})

const importedTypeDefs = importSchema(__dirname + '/schema.graphql')
const typeDefs = gql`${importedTypeDefs}`

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req, prisma })
})

server
  .listen({ port: PORT }, () => console.log(`🚀 Server is running on http://localhost:${PORT}`))
  .catch(err => console.error(err))
