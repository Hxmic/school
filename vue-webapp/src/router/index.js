import Vue from 'vue'
import Router from 'vue-router'

const Test = () => import(/* webpackChunkName: "out"*/ '@/views/test')
const Login = () => import(/* webpackChunkName: "out"*/ '@/views/login')
const Register = () => import(/* webpackChunkName: "out"*/ '@/views/register')
const Home = () => import(/* webpackChunkName: "out"*/ '@/views/home')

const Main = () => import(/* webpackChunkName: "out"*/ '@/views/main')
const Table = () => import(/* webpackChunkName: "out"*/ '@/views/table')

const Person = () => import(/* webpackChunkName: "out"*/ '@/views/person')
const UserTable = () => import(/* webpackChunkName: "out"*/ '@/views/userTable')


// const Table = () => import(/* webpackChunkName: "out"*/ '@/views/table')

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
      component: Home,
      redirect: '/main', // 登录后直接映射到main
      children: [
        {
          path: '/main',
          component: Main,
          name: 'Main'
        },
        {
          path: '/person',
          component: Person,
          name: 'Person'
        },
        {
          path: '/user_table',
          component: UserTable,
          name: 'UserTable'
        },
        {
          path: '/table',
          component: Table,
          name: 'Table'
        }
      ]
    }
  ]
})
