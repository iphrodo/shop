<template>
	<div class="v-cart-item">
		<img :src="cart_item_data.image_link" alt="">
		<div class="v-cart-item-info">
			<p>{{ cart_item_data.name }}</p>
			<p>{{ cart_item_data.price }}</p>
		</div>
		<div class="v-cart-item_quantity">
			<p>Qty:</p>
			<span>
				<span @click="minusItemQuantity">-</span>
				{{ cart_item_data.quantity }}
				<span @click="plusItemQuantity">+</span>
			</span>
	</div>
		<button @click="deleteFromCart">Delete</button>
	</div>
</template>

<script>

	export default {
		name: 'v-cart-item',
		components: {},
		props: {
			cart_item_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		computed: {
		},
		methods: {
			deleteFromCart() {
				this.$emit('deleteFromCart');
			},
			minusItemQuantity() {
				if (this.cart_item_data.quantity >1 ) {
					return this.cart_item_data.quantity--;				
				}
			},
			plusItemQuantity() {
				return this.cart_item_data.quantity++;
			}
		},
		watch: {},
		mounted() {
		}
	}
</script>

<style lang="scss" module>
	.v-cart-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		border: 1px solid #ccc;
		margin-bottom: 20px;
		padding: 20px;
	}

	img {
		max-width: 100px;
	}

</style>