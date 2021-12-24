import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexMain from '../views/main/IndexMain.vue'
import login from "../views/account/Login.vue"
import signup from "../views/account/Signup.vue"

import mypage from "../views/mypage/Indexmypages.vue"
import plant from "../views/plant/Indexplant.vue"
import plantadd from "../views/plant/Indexplantadd.vue"
import hospital from "../views/hospital/IndexHospitals.vue"
import community from "../views/community/IndexCommunity.vue"
import postdetail from "../components/community/Postdetail.vue"

Vue.use(VueRouter);

const Plantfeeddetail = () => {
  return import("../components/plant/Plantfeeddetail.vue");
}

const editplant = () => {
  return import("../components/plant/Editoneplant.vue")
}
const postwrite = () => {
  return import("../components/community/Postwrite.vue")
}
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
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: mypage
  },
  {
    path: "/plant/:userId",
    name: "plant",
    component: plant,
    props: true,
  },
  {
    path: "/editplant/:plantId",
    name: "editplant",
    component: editplant,
    props: true
  },
  {
    path: "/oneplant/:userId/:plantId",
    name: "Plantfeeddetail",
    component: Plantfeeddetail,
    props: true
    
  },
  {
    path: '/plantplus',
    name: 'plantplus',
    component: plantadd
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: hospital
  },
  {
    path: '/community',
    name: 'community',
    component: community
  },
  {
    path: '/postdetail/:userId/:postId',
    name: 'postdetail',
    component: postdetail,
    props: true
  },
  {
    path: '/postwrite',
    name: 'postwrite',
    component: postwrite,
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
