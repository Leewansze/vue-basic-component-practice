// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'videojs-flash'// 引入才能播放rtmp视频
import 'videojs-contrib-hls' // 引入才能播放m3u8文件
import App from './App'
import router from './router'
import utils from './utils/api'
import Axios from 'axios'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = Axios
Vue.prototype.$utils = utils
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
