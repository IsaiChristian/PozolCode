<template>
  <div class="page">
    <div v-if="error">Error, name field can't be empty</div>
    <input type="text" class="text-input" v-bind="date" />
    <button class="send-button">Send</button>
  </div>
</template>

<script>
export default {
  name: "LowTurn",
  data: function () {
    return {
      name: '',
      error: false
    }
  },
  methods: {
    addLowTurn: function () {
      if (this.name === '') {
        error = true;
      } else {
        let date = new Date();
        let date = date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();
        const { name } = this;
        this.$apollo.mutate({
          mutation: require('../graphql/createMediumTurn.gql'),
          variables: {
            name,
            date
          },
          refetchQueries: ['getTurns']
        })
      }
      this.name = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
