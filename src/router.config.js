import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/Ratings.vue'
import Sellers from './components/sellers/Sellers.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{path: '/goods', component: Goods},
		{path: '/ratings', component: Ratings},
		{path: '/sellers', component: Sellers},
		{path: '*', redirect: '/goods'}
	]
});
