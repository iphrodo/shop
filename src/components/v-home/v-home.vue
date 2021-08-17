<template>
	<div class="v-home l-home">
		<div class="b-home_products container">
			<v-loader v-if="loading"></v-loader>
			<v-home-tiles 
				v-else
				v-for="product in cutTheProducts"
				:key="product.id"
				:product_data="product"
				@addToCart="addToCart"
			/>
		</div>
	</div>
</template>

<script>
	import vHomeTiles from './v-home-tiles'
	import vLoader from '../helpers/v-loader'
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: 'v-home',
		components: {
			vHomeTiles,
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
			]),
			cutTheProducts() {
				let cutProducts = [];
				if (this.PRODUCTS.length >= 5) {
					cutProducts = this.PRODUCTS.slice(0, 6);
				}

				return cutProducts;
			}
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
					this.loading = false
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.b-home_products {
		display: grid;
		grid-gap: 30px;
		grid-template-columns: repeat(4, 1fr);
		margin-bottom: 50px;
	}
</style>