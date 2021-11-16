<template>
	<div class="b-catalog_item">
		<div class="b-catalog_item-image"><img :src="product_data.image_link" alt=""></div>
		<div class="b-catalog_item-body">
			<router-link :to="{name: 'product', params: {product_data: product_data}}" class="b-catalog_item-link link-secondary">
				<span>{{ product_data.name }}</span>
			</router-link>
			<p>price: ${{ product_data.price }}</p>
			<button @click="addToCart" class="b-catalog_item-btn btn btn-primary">Add to cart</button>
		</div>
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

<style lang="scss" scoped>
	.b-catalog_item {
		box-shadow: 0 0 0 1px #eee;
		margin-bottom: 20px;

		&-body {
			padding: 20px;
		}

		&-btn {
			width: 100%;
		}

		&-link {
			&:hover {
				text-decoration: none;
			}
		}
	}
</style>