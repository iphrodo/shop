<template>
	<div class="b-catalog-item">
		<img :src="product_data.image_link" alt="">
		<router-link :to="{name: 'product', params: {product_data: product_data}}">
			<span>{{ product_data.name }}</span>
		</router-link>
		<p>price: $ {{ product_data.price }}</p>
		<button @click="addToCart">Add to cart</button>
	</div>
</template>

<script>

	export default {
		name: 'v-catalog-item',
		components: {},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			}
		},
		computed: {},
		methods: {
			addToCart() {
				this.$emit('addToCart', this.product_data);
			},
			goToProduct() {
				this.$emit('goToProduct');
			}
		},
		mounted() {
			this.$set(this.product_data, 'quantity', 1)
		}
	}
</script>

<style module>
	.b-catalog-item {
		box-sizing: border-box;
		flex-basis: 32%;
		box-shadow: 0 0 0 1px #ccc;
		padding: 20px;
		margin-bottom: 20px;
	}

	img {
		max-width: 50%;
	}
</style>