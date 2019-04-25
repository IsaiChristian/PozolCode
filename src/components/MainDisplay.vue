<template>
  <div class="page">
    <ApolloQuery :query="require('../graphql/getTurns.gql')">
      <template slot-scope="{ result: { data, error, loading } }">
        <div id="loading" v-if="loading">Loading...</div>
        <div id="error" v-else-if="error">Error!</div>
        <div id="data" v-else-if="data">
          <ol>
            <li v-for="turn in data.highTurn" :key="turn.id">
              {{ turn.name }}
            </li>
            <li v-for="turn in data.mediumTurn" :key="turn.id">
              {{ turn.name }}
            </li>
            <li v-for="turn in data.lowTurn" :key="turn.id">
              {{ turn.name }}
            </li>
          </ol>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "MainDisplay"
}
</script>

<style lang="scss" scoped>
</style>
