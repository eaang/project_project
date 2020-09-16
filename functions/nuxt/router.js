import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe79e8e2 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _e46ebe5e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0ac57c8e = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _9a3b8688 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _735e43ee = () => interopDefault(import('../pages/admin/new-project/index.vue' /* webpackChunkName: "pages/admin/new-project/index" */))
const _e8c7aeae = () => interopDefault(import('../pages/admin/_projectId/index.vue' /* webpackChunkName: "pages/admin/_projectId/index" */))
const _7251a079 = () => interopDefault(import('../pages/projects/_id/index.vue' /* webpackChunkName: "pages/projects/_id/index" */))
const _150a18d1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fe79e8e2,
    name: "about"
  }, {
    path: "/admin",
    component: _e46ebe5e,
    name: "admin"
  }, {
    path: "/projects",
    component: _0ac57c8e,
    name: "projects"
  }, {
    path: "/admin/auth",
    component: _9a3b8688,
    name: "admin-auth"
  }, {
    path: "/admin/new-project",
    component: _735e43ee,
    name: "admin-new-project"
  }, {
    path: "/admin/:projectId",
    component: _e8c7aeae,
    name: "admin-projectId"
  }, {
    path: "/projects/:id",
    component: _7251a079,
    name: "projects-id"
  }, {
    path: "/",
    component: _150a18d1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
