<template>
	<div class="v-catalog b-catalog container">
		<h1 class="b-page_title">Catalog</h1>
		<v-loader v-if="loading"></v-loader>
		<v-catalog-item 
			v-else
			v-for="product in PRODUCTS"
			:key="product.article"
			:product_data="product"
			@addToCart="addToCart"
		/>
	</div>
</template>

<script>
	import vCatalogItem from './v-catalog-item'
	import vLoader from '../helpers/v-loader'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: 'v-catalog',
		components: {
			vCatalogItem,
			vLoader
		},
		props: {},
		data() {
			return {
				loading: true
			}
		},
		computed: {
			...mapGetters([
				'PRODUCTS'
			])
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),
			addToCart(data) {
				this.ADD_TO_CART(data)
			}
		},
		mounted() {
			this.GET_PRODUCTS_FROM_API()
			.then((response) => {
				if (response.data) {
					console.log('Data arrived');
					this.loading = false;
				}
			})
		}
	}
</script>

<style>
	.b-catalog{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	h1 {
		flex-basis: 100%;
	}
</style>