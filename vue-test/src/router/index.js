import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)
const originalPush = Router.prototype.push
//修改原型对象中的push方法，
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  },

  routes: [
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index/Index')
    },
    {
      path: '/ad',
      name: 'ad',
      component: () => import('../components/article/ArticleDetail')
    },
    {
      path: '/nf',
      name: 'nf',
      component: () => import('../components/NewsFlash/NewsFlashIndex')
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('../components/topic/TopicIndex')
    },
    {
      path: '/topic/list',
      name: 'topic',
      component: () => import('../components/topic/TopicList')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/Test')
    },
    {
      path: '/forum',
      component: () => import('../components/forum_index/index')
    },
    {
      path:'/forum_detail',
      component: () => import('../components/forum_detail/Index')
    },
    {
      path:'/',
      component: () => import('../components/index/Index'),
      children:[
        {
          path:'/',
          component: () => import('../components/index/Index')
        },
        {
          path: '/nf',
          component: () => import('../components/NewsFlash/NewsFlashIndex')
        },
        {
          path: '/topic',
          component: () => import('../components/topic/TopicIndex')
        },
        {
          path: '/forum',
          component: () => import('../components/forum_index/index')
        },
      ]
    },

  ]
})
