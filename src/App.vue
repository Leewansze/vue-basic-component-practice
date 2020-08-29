<template>
  <div id="app">
    <home></home>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import home from './components/home'
export default {
  components:{
    'home':home
  },
  data(){
    return{

    }
  },
  methods:{
    
  }
};
</script>

<style lang="less">
  body{
    background-color:#191919!important;
    margin: 0px;
    padding:0px;
  }
</style>
