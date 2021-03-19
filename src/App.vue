<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home'
export default {
  components: {
    Home: Home
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
</style>
