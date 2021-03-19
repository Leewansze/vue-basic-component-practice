<template>
  <div>
    <videoPlayer
      class="vjs-custom-skin video-player"
      ref="videoPlayer"
      :options="playOptions"
      :playsinline="true"
    >
    </videoPlayer>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Videojs-play',
  components: { videoPlayer },
  props: {
    source: {
      type: ''
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      playOptions: {
        // techOrder: ['html5', 'flash'], // 兼容顺序
        flash: { hls: { withCredentials: false } }, // 可以使用rtmp视频
        html5: { hls: { withCredentials: false } }, // 可以使用m3u8视频
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器
        sources: [{ // 播放资源格式
          type: 'video/mp4',
          src: ''
        }],
        width: document.documentElement.clientWidth, // 默认视频全屏时的最大宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // 配置控制栏
        controlBar: {
          volumePanel: {
            inline: false // 音量调节是否水平
          },
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true, // 全屏按钮
          currentTimeDisplay: true // 当前播放位置
        }
      }
    }
  },
  mounted () {
    this.playerOptions['sources'][0]['src'] = this.props.source
  }

}
</script>
<style lang="less" scoped>
</style>
