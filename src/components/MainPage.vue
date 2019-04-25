<template>
  <div class="page">
    <p>Add Low Turn</p>
    <LowTurn />
    <br>
    <p>Add Medium Turn</p>
    <MediumTurn />
    <br>
    <p>Add High Turn</p>
    <HighTurn />
    <br>
    <p>Main Display</p>
    <MainDisplay />
    <br>
    <p>Operator's Display</p>
    <OperatorDisplay />
  </div>
</template>

<script>
import LowTurn from './LowTurn.vue'
import MediumTurn from './MediumTurn.vue'
import HighTurn from './HighTurn.vue'
import MainDisplay from './MainDisplay.vue'
import OperatorDisplay from './OperatorDisplay.vue'

export default {
  name: "MainPage",
  components: {
    LowTurn,
    MediumTurn,
    HighTurn,
    MainDisplay,
    OperatorDisplay
  }
}
</script>

<style lang="scss" scoped>

</style>
