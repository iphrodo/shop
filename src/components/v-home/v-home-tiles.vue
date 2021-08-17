<template>
	<div :class="'v-home-tiles b-home_tile m-tile_' + product_data.id">
		<div class="b-home_tile-image">
			<img :src="product_data.image_link" class="b-home_tile-img" alt="">
		</div>
		<div class="b-home_tile-price">${{ product_data.price | roundPrice }}</div>
		<div class="b-home_tile-body">
			<router-link :to="{name: 'product', params: {product_data: product_data}}" class="b-home_tile-title">
				{{ product_data.name }}
			</router-link>
			<div class="b-home_tile-description">{{ product_data.description | cutDescription }}</div>
			<button 
				@click="addToCart"
				class="b-home_tile-button"
			>Add to cart</button>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'v-home-tiles',
		components: {},
		props: {
			product_data: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			cutDescription(value) {
				let cuttedDescription = value;

				if (value.length >= 80) {
					cuttedDescription = value.substr(0, 80) + '...';
				}

				return cuttedDescription;
			},
			roundPrice(value) {
				return Math.round(value);
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

<style lang="scss">
	.b-home_tile {
		background: #f5f5f5;
		position: relative;
		height: 300px;
		overflow: hidden;
		transition: 0.5s;
		
		&:hover {
			box-shadow: 0px 0px 24px 0px #cccccc;

			.b-home_tile-body {
				bottom: 0;
			}
		}

		&:nth-child(3) {
			grid-column: 3 / 5;
		}

		&:nth-child(4) {
			grid-column: 1 / 3;
		}

		&-image {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 100%;
		}

		&-img {
			height: 100%;
			max-width: none;
		}

		&-body {
			background: rgba(255,255,255, 0.7);
			bottom: -100%;
			left: 0;
			padding: 10px 20px;
			position: absolute;
			transition: 0.4s;
			width: 100%;
		}

		&-price {
			color: #333333;
			font-size: 16px;
			font-weight: 500;
			left: 0;
			line-height: 1;
			padding: 15px;
			position: absolute;
			top: 0;
		}

		&-title {
			text-decoration: none;
			color: #333333;
			font-weight: 500;
			margin-bottom: 10px;
			display: block;

			&:hover {
				color: #00c8c8;
			}
		}

		&-description {
			margin-bottom: 10px;
		}

		&-button {
			border: 1px solid #333333;
			text-transform: uppercase;
			background: transparent;
			font-weight: 500;
			padding: 10px;

			&:hover {
				background: #00c8c8;
				border-color: #00c8c8;
				color: #ffffff;
			}
		}
	}
</style>