<template>
  <div id="contentForm">
    <div class="content-form">
      <div class="page-content">
        <left-menu></left-menu>
        <right-menu></right-menu>
      </div>
      <div class="page-content">
        <video-card title='最新课程资源' :playList='this.playList'></video-card>
        <video-card title='最新实训资源'></video-card>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu.vue'
import VideoList from './video/VideoList'
import VideoCard from './VideoCard.vue'
export default {
  name: 'contentForm',
  data () {
    return {
      playList: []
    }
  },
  components: {
    'left-menu': LeftMenu,
    VideoList,
    RightMenu,
    VideoCard
  },
  mounted () {
    this.getVideoList()
  },
  methods: {
    getVideoList () {
      this.$utils.demoService.get('/getVideoList').then((response) => {
        this.playList = response.data
        console.log(JSON.stringify(response.data))
      })
    }
  }
}
</script>
<style lang="less">
#contentForm {
  width: 1152px;
  margin: auto;
  h2 {
    text-align: center;
    color: #fff;
    margin-top: 50px;
    margin-bottom: 65px;
    font-size: 26px;
    letter-spacing: 1.2px;
  }
  .content-form {
    height: 589px;
    background-color: #fff;
    .page-content{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
}
</style>
