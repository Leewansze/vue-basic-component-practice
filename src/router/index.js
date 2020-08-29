import Vue from 'vue'
import Router from 'vue-router'
// 引入各级路由页面/组件
import contentLegal from '@/components/contentLegal'
import contentShipment from '@/components/contentShipment'
import contentBasic from '@/components/contentBasic'
import contentAddress from '@/components/contentAddress'
import contentSegment from '@/components/contentSegment'
import contentContract from '@/components/contentContract'
import contentNotifica from '@/components/contentNotifica'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
	meta:{
		keepAlive: true//缓存路由，除非刷新页面
	},
  routes: [
      	{
      		path: '/',
	      	name: 'contentLegal',
	      	component: contentLegal,
	      	meta:{index:7},
	      	redirect:'/contentLegal'
      	},
		    {
		      path: '/contentLegal',
		      name: 'contentLegal',
		      meta:{index:7},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
		      component: contentLegal
		    },
		    {
		      path: '/contentShipment',
		      name: 'contentShipment',
		      meta:{index:6},
		      component: contentShipment
		    },
		    {
		      path: '/contentBasic',
		      name: 'contentBasic',
		      meta:{index:5},
		      component: contentBasic
		    },
		    {
		      path: '/contentAddress',
		      name: 'contentAddress',
		      meta:{index:4},
		      component: contentAddress
		    },
		    {
		      path: '/contentContract',
		      name: 'contentContract',
		      meta:{index:3},
		      component: contentContract
		    },
		    {
		      path: '/contentSegment',
		      name: 'contentSegment',
		      meta:{index:2},
		      component: contentSegment
		    },
		    {
		      path: '/contentNotifica',
		      name: 'contentNotifica',
		      meta:{index:1},
		      component: contentNotifica
		    }
  ]
})