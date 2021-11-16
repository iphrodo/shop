<template>
    <div class="v-footer b-footer">
        <div class="b-footer-container container">
            <v-main-navigation></v-main-navigation>
            Copyright © 2021. All rights reserved.
        </div>
    </div>
</template>

<script>
    import vMainNavigation from '../v-header/v-main-navigation'
    
	export default {
		name: 'v-footer',
		components: {
			vMainNavigation
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

<style lang="scss" scoped>
    .b-footer {
        background: #f8f8f8;
        padding: 55px 0;

        &-container {
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
    }

    .b-main_navigation-list {
        padding: 0;
        display: none;
    }
</style>