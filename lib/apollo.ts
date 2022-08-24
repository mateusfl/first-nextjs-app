import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6z3pgy501ed01urbi5jggg5/master",
  cache: new InMemoryCache(),
})
