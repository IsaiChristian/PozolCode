<template>
  <div class="page">
    <div v-if="error">Error, name field can't be empty</div>
    <input type="text" class="text-input" v-model="name" />
    <button class="send-button" @click="addHighTurn">Send</button>
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
    addHighTurn: function () {
      if (this.name === '') {
        this.error = true;
      } else {
        let date = new Date();
        date = date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString();
        const { name } = this;
        this.$apollo.mutate({
          mutation: require('../graphql/createHighTurn.gql'),
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
