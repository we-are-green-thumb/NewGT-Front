import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexMain from '../views/main/IndexMain.vue'
import login from "../views/account/Login.vue"
import signup from "../views/account/Signup.vue"

import mypage from "../views/mypage/Indexmypage.vue"
import plant from "../views/plant/Indexplant.vue"
import plantplus from "../views/plant/Indexplantplus.vue"
import hospital from "../views/hospital/IndexHospital.vue"
import community from "../views/community/IndexCommunity.vue"
import postdetail from "../components/community/Postdetail.vue"

Vue.use(VueRouter);

const Plantfeeddetail = () => {
  return import("../components/plant/Plantfeeddetail.vue");
};

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
    // path: "/myplant/:userId",
    path: "/plant",
    name: "plant",
    component: plant,
    props: true,
  },

  {
    // path: "/myplant/:userId/:plantId",
    path: "/oneplant",
    name: "Plantfeeddetail",
    component: Plantfeeddetail,
    props: true
    
  },
  {
    path: '/plantplus',
    name: 'plantplus',
    component: plantplus
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
    path: '/postdetail',
    name: 'postdetail',
    component: postdetail
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
