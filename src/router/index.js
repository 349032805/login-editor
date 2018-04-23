
import Vue from 'vue'
import Router from 'vue-router'

import NavArr from '../nav-config'
import test from '../views/test'
import Layout from '../components/Layout'
import login from '../views/login'
import index from '../views/index'
import editor from '../views/editor'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: Layout,
      redirect: '/index/welcome',
      children: [
        {
          path: '/index/welcome',
          component: index
        },
        {
          path: '/editor',
          component: editor
        }
      ]
    },
  ]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {

  //将解析的导航数组挂在Vue上给页面调用
  //通过地址栏的路由来解析
  let goto = to.fullPath;
  Vue.prototype.$menuArr = [];
  NavArr.forEach(nav => {
    if (nav.index == goto) {
      Vue.prototype.$menuArr.push(nav.title);
      return;
    }
    if (nav.subs) {
      nav.subs.forEach(sub => {
        if (sub.index == goto) {
          Vue.prototype.$menuArr.push(nav.title);
          Vue.prototype.$menuArr.push(sub.title);
          return;
        }
      })
    }
  })
  next();
});

export default router;
