import Vue from 'vue'
import Router from 'vue-router'

const Test = () => import(/* webpackChunkName: "out"*/ '@/views/test')
const Login = () => import(/* webpackChunkName: "out"*/ '@/views/login')
const Register = () => import(/* webpackChunkName: "out"*/ '@/views/register')
const Home = () => import(/* webpackChunkName: "out"*/ '@/views/home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
