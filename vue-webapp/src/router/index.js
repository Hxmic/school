import Vue from 'vue'
import Router from 'vue-router'

const Test = () => import(/* webpackChunkName: "out"*/ '@/components/test')
const Login = () => import(/* webpackChunkName: "out"*/ '@/components/login')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
