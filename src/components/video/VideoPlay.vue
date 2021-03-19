<template>
  <div class="videowrapper">
    <div class="videowrapper__source">
      <Video :source="this.videoSource" type='1111'></Video>
    </div>
  </div>
</template>
<script>
import Video from './Videojs'
export default {
  name: 'videoPlay',
  components: {
    Video: Video
  },
  data () {
    return {
      videoSource: ''
    }
  },
  mounted () {
    var _this = this
    _this.videoSource = `/video/${_this.$route.query.title}.mp4`
    console.log(_this.videoSource)
  }
}
</script>
<style lang="less" scoped>
.videowrapper {
  width: 1152px;
  height: 70%;
  margin: auto;
  padding-top: 40px;
}
</style>
