import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
})
