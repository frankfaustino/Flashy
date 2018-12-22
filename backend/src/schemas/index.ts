import { gql } from 'apollo-server'
import { importSchema } from 'graphql-import'

const importedTypeDefs = importSchema(__dirname + '/schema.graphql')

export default gql`${importedTypeDefs}`