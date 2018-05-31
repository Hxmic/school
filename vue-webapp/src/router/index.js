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

const GoodsTable = () => import(/* webpackChunkName: "out"*/ '@/views/goodsTable')
const GoodsAdd = () => import(/* webpackChunkName: "out"*/ '@/views/goodsAdd')

const MarketTable = () => import(/* webpackChunkName: "out"*/ '@/views/marketTable')
const MarketHome = () => import(/* webpackChunkName: "out"*/ '@/views/marketHome')

const ActiveTable = () => import(/* webpackChunkName: "out"*/ '@/views/activeTable')

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
      meta:{
        requireLogin:true,
      },
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
          path: '/goods_table',
          component: GoodsTable,
          name: 'GoodsTable'
        },
        {
          path: '/goods_add',
          component: GoodsAdd,
          name: 'GoodsAdd'
        },
        {
          path: '/market_table',
          component: MarketTable,
          name: 'MarketTable'

        },
        {
          path: '/market_home',
          component: MarketHome,
          name: 'MarketHome'

        },
        {
          path: '/active_table',
          component: ActiveTable,
          name: 'ActiveTable'

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
