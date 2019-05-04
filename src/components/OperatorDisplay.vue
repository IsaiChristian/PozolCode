<template>
  <div class="page">
    <div v-if="page==0">
      <button id="start-button" @click="start">Press to Start!</button>
    </div>
    <div v-else-if="page==1">
      <button id="select-button" @click="selectUser">Select User</button>
      <div>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.name }} | {{ user.status }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: "OperatorDisplay",
  data: function() {
    return {
      page: 0,
      users: []
    }
  },
  apollo: {
    getTurns: {
      query: gql`
        query {
          highTurn (where: {status: {_eq: "free"}}, order_by: {date: desc}) {
          id
          name
          date
          status
          }
          mediumTurn (where: {status: {_eq: "free"}}, order_by: {date: desc}) {
            id
            name
            date
            status
          }
          lowTurn (where: {status: {_eq: "free"}}, order_by: {date: desc}) {
            id
            name
            date
            status
          }
        }
      `,
      result ({ data }) {
        this.users = data.highTurn;
        this.user.push(data.lowTurn);
      }
    }
  },
  methods: {
    start: function () {
      this.page = 1;
    },
    selectUser: function () {
      this.updateUser();
      this.throwUser();
    },
    updateUser: function () {
      this.users.forEach(function (user) {
        if (user.status === 'free') {
          user.status = 'ocupied';
          return;
        }
      });
    },
    throwUser: function () {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>