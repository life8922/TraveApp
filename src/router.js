import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'
import Main from './views/Main.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/Home',component: Home},
      {path:"/city",name:'city',component:City},
      {path:"/detail/:id",name:'Detail',component:Detail}
    //{path: '/*',component: NotFound},
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
