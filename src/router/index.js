import Vue from 'vue'
import VueRouter from 'vue-router'
// import Devices from '../views/Devices.vue'

Vue.use(VueRouter)

const routes =
    [
      // /*component: Devices*/
      {
        path: '/',
        name: 'home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/devices',
        name: 'devices',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "devices" */ '../views/Devices.vue')
      }
    ]

    const router =
        new VueRouter({mode: 'history', base: process.env.BASE_URL, routes})

export default router
