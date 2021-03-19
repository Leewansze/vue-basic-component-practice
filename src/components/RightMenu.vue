<template>
  <div class='videowrapper'>
    <div class='videowrapper__source'>
      <Video source='../../assets/201904090825064.mp4'></Video>
    </div>
  </div>
</template>
<script>
import Video from './video/Videojs'
export default {
  name: 'videoPlay',
  components: {
    'Video': Video
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.videowrapper{
  width: 1148px;
  padding-top: 5px
}
</style>
