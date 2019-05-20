import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=> import('@/view/login/index')
    },
    {
      path: '/',
      name: 'home',
      component:()=>import('@/view/layout/index'),
      redirect: '/analysis',
      meta: {title: '首页'},
      children:[
        {
          path: 'analysis',
          name:'menu1',
          component:()=>import('@/view/menu1/send'),
          redirect: '/analysis/user_overview',
          children:[
            {
              path: 'user_overview',
              name: 'user_overview',
              component:()=>import('@/view/menu1/analysis')
            },
            {
              path: 'scene_overview',
              name: 'scene_overview',
              component:()=>import('@/view/menu1/sceneOverview')
            }
          ]
        },
        {
          path: 'geek',
          name:'menu2',
          component:()=>import('@/view/menu2/send'),
          redirect: '/geek/batch_process',
          children:[
            {
              path: 'batch_process',
              name: 'batch_process',
              component:()=>import('@/view/menu2/analysis')
            }
          ]
        },
        {
          path: 'office-site',
          name:'menu3',
          component:()=>import('@/view/menu3/send'),
          redirect: '/office-site/websiteArticle',
          children:[
            {
              path: 'websiteArticle',
              name: 'websiteArticle',
              component:()=>import('@/view/menu3/analysis')
            }
          ]
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
