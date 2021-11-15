module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/styles.scss";'
			}
		}
	}
};

module.exports = {
	publicPath: '/shop/'
}