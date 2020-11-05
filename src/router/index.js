import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleGallery from '../views/SingleGallery'
import CreateGallery from '../views/CreateGallery'
import Login from '../views/Login'
import Register from '../views/Register'
import AuthorGallery from '../views/AuthorGallery'
import EditGallery from '../views/EditGallery'

import { store } from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/galleries/:id',
    name: 'single-gallery',
    component: SingleGallery
  },
  {
    path: '/create',
    name: 'create-gallery',
    component: CreateGallery,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/authors/:id',
    name: 'authors-gallery',
    component: AuthorGallery
  },
  {
    path: '/my-galleries',
    name: 'my-galleries',
    component: AuthorGallery,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit-gallery',
    name: 'edit-gallery',
    component: EditGallery,
    meta: {
      auth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (isAuthenticated && !store.getters.user.length) {
    store.dispatch('fetchUser').then( () => {
      store.commit('setToken', localStorage.getItem('token'))
    });
  } 
  if (isAuthenticated && to.meta.guest) {
    return next({ name: 'home' });
  }
  if (!isAuthenticated && to.meta.auth) {
    return next({ name: 'login' });
  }
  return next();
});

export default router
