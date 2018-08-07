import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Menu from '@/pages/menu'
import Mine from '@/pages/mine'
import Search from '@/pages/search'
import Shopping from '@/pages/shopping'
import Details from '@/pages/details'
import LoginRegister from '@/pages/loginRegister'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','精美水果');
        store.commit('changeLeft',"0%");
        next();
      }
    },
    {
      path: '/search',
      name: 'search',
      component:Search,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','搜索');
        store.commit('changeLeft',"25%");
        next();
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','购物车');
        store.commit('changeLeft',"50%");
        next();
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','我的');
        store.commit('changeLeft',"75%");
        next();
      }
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','详情页');
        next();
      }
    },
    {
      path: '/loginRegister',
      name: 'loginRegister',
      component: LoginRegister,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','登录/注册');
        next();
      }
    }
  ]
})
