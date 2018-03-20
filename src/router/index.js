import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// index组件
import Index from '@/components/Index'
import Type from '@/components/Type'
import Cart from '@/components/Cart'
import Me from '@/components/Me'

// 各类别路由
import Jujia from '@/components/Jujia'
import Peijian from '@/components/Peijian'
import Dianqi from '@/components/Dianqi'
import Fuzhuang from '@/components/Fuzhuang'
// 登录页路由
import Login from '@/components/Login'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },

    // 各类别路由
    {
      path: '/jujia',
      name: 'Jujia',
      component: Jujia
    },
    {
      path: '/peijian',
      name: 'Peijian',
      component: Peijian
    },

    {
      path: '/fuzhuang',
      name: 'Fuzhuang',
      component: Fuzhuang
    },

    {
      path: '/dianqi',
      name: 'Dianqi',
      component: Dianqi
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },



  ]
})
