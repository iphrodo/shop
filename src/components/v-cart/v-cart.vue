<template>
	<div class="v-cart b-cart container">
		<h1 class="b-page_title">Cart</h1>
		<router-link :to="{name: 'catalog'}">
			<div class="v-catalog__link_to_cart">Back to catalog</div>
		</router-link>
		<p v-if="!cart_data.length">No products...</p>
		<v-cart-item 
			v-for="(item, index) in cart_data"
			:key="item.id"
			:cart_item_data="item"
			@deleteFromCart="deleteFromCart(index)"
		/>
		<div class="v-cart_total">
			<p>Total: ${{ cartTotalCost }}</p>
		</div>
	</div>
</template>

<script>
	import vCartItem from './v-cart-item'
	import {mapActions} from 'vuex'

	export default {
		name: 'v-cart',
		components: {
			vCartItem
		},
		props: {
			cart_data: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {}
		},
		computed: {
			cartTotalCost() {

				if (this.cart_data.length) {
					let result = [];

					for (let item of this.cart_data) {
						result.push(item.price * item.quantity);
					}

					result = result.reduce(function (sum, el) {
						return sum + el;
					}) 

					return result;
				} else {
					return 0;
				}

			}
		},
		methods: {
			...mapActions([
				'DELETE_FROM_CART'
			]),
			deleteFromCart(index) {
				this.DELETE_FROM_CART(index)
			}
		},
		watch: {}
	}
</script>

<style>

</style>