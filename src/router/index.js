import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
}]

const router = new VueRouter({
  base: "/wheel_selector",
  mode: "history",
  routes
})

export default router