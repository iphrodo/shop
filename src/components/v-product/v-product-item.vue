<template>
	<div class="container">
		<div class="b-product-item">
			<img :src="product_data.image" alt="">
			<div class="b-cart-item-info">
				<p><img :src="product_data.image_link" class="b-home_tile-img" alt=""></p>
				<p>{{ product_data.name }}</p>
				<p>{{ product_data.price }}</p>
				<p>{{ product_data.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'v-product-item',
		components: {},
		props: {
			product_data: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {}
		},
		computed: {},
		methods: {},
		watch: {}
	}
</script>

<style>

</style>