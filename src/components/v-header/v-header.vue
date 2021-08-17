<template>
	<header class="b-header">
		<div class="b-top_section">
			<div class="b-top_section-content container">
				<v-header-user></v-header-user>
				<v-mini-cart></v-mini-cart>
			</div>
		</div>
		<div class="b-header_content container">
			<router-link :to="{name: 'home'}" class="b-logo">
				<span class="b-logo-text"><b>Avenue</b> fashion</span>
			</router-link>
			<v-main-navigation></v-main-navigation>
		</div>
	</header>
</template>

<script>
	import vMainNavigation from '../v-header/v-main-navigation'
	import vMiniCart from '../v-header/v-mini-cart'
	import vHeaderUser from '../v-header/v-header-user'

	export default {
		name: 'v-header',
		components: {
			vMainNavigation,
			vMiniCart,
			vHeaderUser
		},
		props: {},
		data() {
			return {}
		},
		computed: {},
		methods: {},
		watch: {}
	}
</script>

<style lang="scss">
	.b-top_section {
		background: #333333;
		
		&-content {
			display: flex;
			justify-content: flex-end;
		}
	}

	.b-header_content {
		display: flex;
		justify-content: space-between;
		padding: 45px 0;
	}

	.b-logo {
		text-decoration: none;
		&-text {
			font-size: 24px;
			color: #222222;
			text-transform: uppercase;
			text-decoration: none;
		}
	}
</style>