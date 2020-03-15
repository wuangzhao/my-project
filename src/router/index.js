import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')
const ManageHome = () => import('../views/management/Home.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/manage',
      name: 'manage',
      component: ManageHome
    },
  ]
})
