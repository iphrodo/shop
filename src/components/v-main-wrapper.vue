<template>
	<main class="v-main-wrapper l-main_wrapper">
		<v-header></v-header>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import vHeader from './v-header/v-header';
	import vFooter from './v-footer/v-footer';

	export default {
		name: 'v-main-wrapper',
		components: {
			vHeader,
			vFooter
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

<style>

</style>