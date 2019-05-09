import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BracketGen from '@/components/BracketGen'
import BracketPage from '@/components/BracketPage'
import Login from '@/components/login'
import SignUp from '@/components/signup'
import HowTo from '@/components/howto'
import Forgot from '@/components/forgot'
import ResetPass from '@/components/resetpass'
import Preview from '@/components/preview'
import Profile from '@/components/profile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BracketGenerator',
      name: 'BracketGen',
      component: BracketGen
    },
    {
      path: '/BracketPage',
      name: 'BracketPage',
      component: BracketPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/howto',
      name: 'HowTo',
      component: HowTo
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/resetpass',
      name: 'ResetPass',
      component: ResetPass
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
