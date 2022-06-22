import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pn3vij24gj01xk0n5s92qr/master',
  cache: new InMemoryCache()
})