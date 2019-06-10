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
      path: '/compnent',
      name: 'compnent',
      component:()=>import('@/view/layout/index'),
      meta: {title: '首页'},
      redirect: 'compnent/button',
      children:[
        {
          path: 'button',
          name:'buttonCompent',
          meta: {title: '组件'},
          component:()=>import('@/view/Button/buttonCompent')
        },
        {
          path: 'radio',
          name:'Radio',
          meta: {title: '组件'},
          component:()=>import('@/view/Radio/index')
        },
        {
          path:'table',
          name: 'Table',
          meta: {title: '组件'},
          component:()=>import('@/view/Table/index')
        },
        {
          path: 'pagination',
          name:'Pagination',
          meta: {title: '组件'},
          component:()=>import('@/view/Pagination/index')
        },
        {
          path: 'loading',
          name:'loading',
          meta: {title: '组件'},
          component:()=>import('@/view/Loading/index')
        },
        {
          path: 'cascader',
          name:'cascader',
          meta: {title: '组件'},
          component:()=>import('@/view/Cascader/index')
        },
        {
          path: 'tabs',
          name:'tabs',
          meta: {title: '组件'},
          component:()=>import('@/view/Tabs/index')
        }
      ]
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: ()=>import('@/view/layout/index'),
      redirect: 'personCenter/person',
      children: [
        {
          path: 'person',
          name: 'person',
          component: ()=>import('@/view/persons/index')
        }
      ]
    },
    {
      path: '/other',
      name: 'other',
      component:()=>import('@/view/layout/index'),
      redirect: 'other',
      children: [
        {
          path: '',
          name: 'other',
          component:()=>import('@/view/other/index')
        }
      ]
    }
  ]
})
