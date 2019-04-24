<template>
  <div class="page">
    <ApolloQuiery :query="require('../graphql/getTurns.gql')">
      <template slot-scope="{ result: { data, error, loading } }">
        <div id="loading" v-if="loading">Loading...</div>
        <div id="error" v-else-if="error">Error!</div>
        <ol id="data" v-else-if="data">
          <li v-for="turn in data.Turns" :key="turn.id">
            {{ turn.name }}
          </li>
        </ol>
      </template>
    </ApolloQuiery>
  </div>
</template>

<script>
export default {
  name: "MainDisplay"
}
</script>

<style lang="scss" scoped>
</style>
