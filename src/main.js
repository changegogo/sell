// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home.vue'
import News from './components/News.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '/home', component: Home},
		{path: '/news', component: News},
		{path: '*', redirect: '/home'}
	]
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
