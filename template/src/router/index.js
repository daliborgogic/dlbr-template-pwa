import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HomeView = () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView }
    ]
  })
}
