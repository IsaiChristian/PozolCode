import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'https://vue-queueapp-protorype.herokuapp.com/v1alpha1/graphql',
  headers: {
    'x-hasura-admin-secret': 'qA@opJD^3?fx4`g4Dy>!'
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