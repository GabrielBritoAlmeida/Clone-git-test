import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    authorization: 'Bearer 81f9f66bbbdf330018440ef107a6936691e25f03'
  }
})

export default client
