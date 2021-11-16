<template>
	<div class="b-cart_item v-cart-item">
		<img :src="cart_item_data.image_link" alt="">
		<div class="b-cart_item-info">
			<p>{{ cart_item_data.name }}</p>
			<p>${{ cart_item_data.price | roundPrice }}</p>
		</div>
		<div class="b-cart_item-quantity_wrap">
			<p>Qty:</p>
			<span class="b-cart_item-quantity_container">
				<span @click="minusItemQuantity" class="btn btn-secondary">-</span>
				<span class="b-cart_item-quantity">{{ cart_item_data.quantity }}</span>
				<span @click="plusItemQuantity" class="btn btn-secondary">+</span>
			</span>
	</div>
		<button @click="deleteFromCart" class="btn btn-danger">Delete</button>
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
		filters: {
			roundPrice(value) {
				return Math.round(value);
			}
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

<style lang="scss" scoped>
	.b-cart_item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		border: 1px solid #ccc;
		margin-bottom: 20px;
		padding: 20px;

		&-quantity {
			min-width: 40px;
			text-align: center;
		}

		&-quantity_container {
			display: flex;
			align-items: center;
		}
	}

	img {
		max-width: 100px;
	}

</style>