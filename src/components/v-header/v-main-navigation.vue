<template>
	<div class="b-main_navigation">
		<ul class="b-main_navigation-list">
			<li class="b-main_navigation-item">
				<router-link :to="{name: 'catalog'}" class="b-main_navigation-link" >
					Mens
				</router-link>
			</li>
			<li class="b-main_navigation-item"><a class="b-main_navigation-link" href="#">Womens</a></li>
			<li class="b-main_navigation-item"><a class="b-main_navigation-link" href="#">The brand</a></li>
			<li class="b-main_navigation-item"><a class="b-main_navigation-link" href="#">Local stores</a></li>
			<li class="b-main_navigation-item"><a class="b-main_navigation-link" href="#">Look book</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'v-main-navigation',
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
	.b-main_navigation {
		&-list {
			display: flex;

			.b-footer & {
				margin: 0;
				padding: 0;
			}
		}

		&-item {
			list-style: none;

			&:last-child {
				.b-main_navigation-link {
					padding-right: 0;
				}
			}
		}

		&-link {
			color: #222222;
			text-decoration: none;
			padding: 0 12px;
			text-transform: uppercase;

			&:hover {
				color: #00c8c8;
			}
		}
	}
</style>