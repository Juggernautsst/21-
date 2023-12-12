import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import PhotoPage from '../views/PhotoPage.vue'
import AuthorPage from '../views/AuthorPage.vue'
import LoginModal from '../views/LoginModal.vue'
// import RegisterPage from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage,
  },
  {
      path: "/PhotoPage/:id",
      name: 'PhotoPage',
      component: PhotoPage,
  },
  {
      path: "/AuthorPage/:id",
      name: 'AuthorPage',
      component: AuthorPage,
  },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: RegisterPage,
    // },
    {
      path:"/",
      name:"LoginModal",
      component:LoginModal,
    }
  ];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
