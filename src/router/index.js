import Vue from 'vue'
import Router from 'vue-router'
// 引入各级路由页面/组件
import Main from '@/components/ContentForm'
import VideoPlay from '@/components/video/VideoPlay'
import UploadVideo from '@/components/Upload'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        name: 'home',
        component: Main
      },
      {
        path: 'videoPlay',
        name: 'videoPlay',
        component: VideoPlay
      },
      {
        path: '/uploadVideo',
        name: 'uploadVideo',
        component: UploadVideo
      }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
