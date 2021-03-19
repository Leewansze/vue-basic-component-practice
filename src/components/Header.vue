<template>
  <div id="header">
    <div class='headerOne'>
      <div class='headerLogo'>
        <img src='/assets/log.png'/>
      </div>
      <h1>专本一体化 教学资源库</h1>
      <div class='headerLogin'>
        <div>{{currentTime}}</div>
        <span class='size'><router-link to='/login'>登录</router-link></span>
        <span class='size'><a href='#'>注册</a></span>
      </div>
      <div>
        <router-link to='/uploadVideo'>上传课程视频</router-link>
      </div>
      <div class='headerLogo'><img src='src/assets/log.png'/></div>
    </div>
    <div class='headerTwo'>
      <span>广东理工职业学院</span>
      <span>————计算机网络技术专业+信息安全专业</span>
      <span>广东开放大学</span>
    </div>
    <top-navbar></top-navbar>
  </div>
</template>
<script>
import topNavbar from './topNavbar'
export default {
  name: 'header',
  components: {
    'top-navbar': topNavbar
  },
  data () {
    return {
      currentTime: ''
    }
  },
  mounted () {
    this.getDate()
  },
  methods: {
    getDate () {
      let date = new Date()
      let time = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 `
      this.currentTime = time
    }
  }
}
</script>
<style scoped lang="less">
#header{
  width:1150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  .headerOne{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
      margin: 0;
    }
  }
  .headerTwo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
