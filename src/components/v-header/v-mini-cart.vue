<template>
	<header class="b-mini_cart">
		<router-link :to="{name: 'cart', params: {cart_data: CART}}" class="b-mini_cart-link">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
				<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
			</svg>
			<span class="b-mini_cart-text">Cart: {{ CART.length }}</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
			</svg>
		</router-link>
		<ul class="b-mini_cart-list">
			<li v-for="item in CART" :key="item.id" class="b-mini_cart-item">
				<div class="b-mini_cart-image"><img :src="item.image_link" alt=""></div>
				<div class="b-mini_cart-body">
					<router-link :to="{name: 'product', params: {product_data: product_data}}" class="b-mini_cart-name link-secondary">
						{{ item.name }}
					</router-link>
					<div class="b-mini_cart-price">${{ item.price | roundPrice }}</div>
				</div>
			</li>
		</ul>
	</header>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'v-mini-cart',
		components: {},
		props: {},
		data() {
			return {}
		},
		filters: {
			roundPrice(value) {
				return Math.round(value);
			}
		},
		computed: {
			...mapGetters([
				'CART'
			])
		},
		methods: {},
		watch: {}
	}
</script>

<style lang="scss" scoped>
	.b-mini_cart {
		min-width: 210px;
		position: relative;

		&:hover {
			.b-mini_cart {
				&-list {
					display: block;
				}
				&-link {
					background: #00c8c8;
					color: #ffffff;

					.bi {
						color: #ffffff;
					}
				}
			}
		}
		
		&-link {
			align-items: center;
			color: #999999;
			display: flex;
			height: 100%;
			margin-left: 60px;
			padding: 15px 20px;
			text-decoration: none;
		}

		&-list {
			position: absolute;
			top: 100%;
			left: 0;
			z-index: 10;
			background: #fff;
			box-shadow: 0px 4px 6px #ccc;
			padding: 20px;
			margin: 0;
			display: none;
		}

		&-item {
			list-style: none;
			display: flex;
			padding: 10px 0;
			border-bottom: 1px solid #eee;
			
			&:last-child {
				border: none;
			}
		}

		&-image {
			max-width: 50%;
			margin-right: 10px;
		}

		&-price {
			margin-top: 10px;
		}
	}

	.bi {
		color: #999999;

		&-cart-fill {
			margin-right: 25px;
		}

		&-chevron-down {
			margin-left: 10px;
		}
	}
</style>