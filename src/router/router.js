import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexMain from '../views/main/IndexMain.vue'
import Login from "../views/account/Login.vue";
import Signup from "../views/account/Signup.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexMain',
    component: IndexMain
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
