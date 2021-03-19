<template>
  <div id="topNavbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0258a5"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
      <el-menu-item index="2">专科资源库</el-menu-item>
      <el-menu-item index="3">专本一体资源库</el-menu-item>
      <el-menu-item index="4">本科资源库</el-menu-item>
      <el-menu-item index="5">实训资源库</el-menu-item>
      <el-menu-item index="6">职业资源库</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'topNavbar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    getVideo () {
      const request = {
        id: this.$route.query.id
      }
      if (this.$route.query.id !== undefined) {
        this.$utils.demoService.post('/get-video', request).then((response) => {
          this.videoTitle = response.data[0].title
        })
        return
      }
      this.videoTitle = ''
    }
  },
  watch: {
    $route: 'getVideo'
  }
}
</script>
<style lang="less">
#topNavbar{
  .el-menu-demo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
