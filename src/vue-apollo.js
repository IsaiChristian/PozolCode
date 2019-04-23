import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: '', // GraphQL database URI
  headers: {
    'x-hasura-admin-secret': '' // Hasura's GraphQL database Secret
  }
})

export default function createProvider () {
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $loadingKey: "loading"
    }
  })
}