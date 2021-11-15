import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/v-catalog/v-catalog'
import vCart from '../components/v-cart/v-cart'
import vProductItem from '../components/v-product/v-product-item'
import vHome from '../components/v-home/v-home'

Vue.use(Router);

let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/catalog',
			name: 'catalog',
			component: vCatalog
		},
		{
			path: '/cart',
			name: 'cart',
			component: vCart,
			props: true
		},
		{
			path: '/product/:product_data.id',
			name: 'product',
			component: vProductItem,
			props: true
		},
		{
			path: '/',
			alias: '/shop',
			name: 'home',
			component: vHome
		},
	]
})

export default router