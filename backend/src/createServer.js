const { GraphQLServer } = require('graphql-yoga')

const Mutation
const Query
const db

module.exports = function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db })
  })
}