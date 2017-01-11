// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import Hello from './components/hello.vue'
import Hello2 from './components/hello2.vue'
import MenuBar from './components/menubar.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    login (state) {
      state.isLogin = true;
    },
    logout (state) {
      state.isLogin = false;
    }
  }
})

const routes = [
  { 
    path: '/', 
    component: App,
    children: [
        { path: '/', component: Hello2 },
        { path: '/index', component: Hello2 },
        { path: '/red', component: Hello },
    ]
  },
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
})