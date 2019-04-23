<template>
  <div class="page">
    <div v-if="current_page==1">
      <div id="error" v-if="error">Error, operator's name invalid</div>
      <input type="text" id="text-input" v-model="name" />
      <button class="send-button">Send</button>
      <div v-if="send">
        <ApolloQuery :query="require('../graphql/checkName.gql')">
          <template slot-scope="{ result: { data, error, loading } }">
            <div id="loading" v-if="loading">Checking for a match...</div>
            <div id="error" v-else-if="error">Oops! Something went wrong...</div>
            <div id="data" v-else-if="data">
              <div v-for="operator in data.Operators" :key="operator.id">
                {{ checkOperators(operator) }}
              </div>
            </div>
          </template>
        </ApolloQuery>
      </div>
    </div>
    <div v-else-if="current_page==2">
      <p>Welcome, {{ name }}!</p><br><br>
      <button id="fetch-turns" @click="fetchTurn">Next One</button><br>
      <p>Current client:</p><br>
      {{ current_client }}
    </div>
</template>

<script>
export default {
  name: "OperatorDisplay",
  data: function () {
    return {
      name: '',
      error: false,
      send: false,
      current_page: 1,
      current_client: []
    }
  },
  methods: {
    sendData: function () {
      if (this.name === '') {
        this.error = true;
        this.send = false;
      } else {
        this.error = false;
        this.send = true;
      }
    },
    checkOperators: function (operator) {
      if (this.name === operator) {
        current_page = 2;
        break;
      } else {
        this.error = true;
      }
    },
    fetchTurn: function () {
      // Apollo Uptade status to true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
