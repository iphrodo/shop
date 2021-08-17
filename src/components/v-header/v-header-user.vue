<template>
	<header class="b-header_user">
		<a class="b-header_user-link" href="#">Register</a> 
		<a class="b-header_user-link" href="#">Login</a>
	</header>
</template>

<script>

	export default {
		name: 'v-header-user',
		components: {},
		props: {},
		data() {
			return {}
		},
		computed: {},
		methods: {},
		watch: {}
	}
</script>

<style lang="scss" scoped>
	.b-header_user {
		display: flex;
		flex-wrap: wrap;

		&-link {
			color: #999999;
			display: flex;
			padding: 15px 18px;
			text-decoration: none;
	
			&:hover {
				background: #00c8c8;
				color: #ffffff;
			}
		}
	}
</style>