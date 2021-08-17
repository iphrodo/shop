import axios from 'axios'

export default {
	GET_PRODUCTS_FROM_API({commit}) {
		return axios({
			method: 'get',
			url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox'
		})
		.then((products) => {
			commit('SET_PRODUCTS_TO_STATE', products.data);
			return products;
		})
		.catch((error) => {
			console.log(error)
			return error
		})
	},
	ADD_TO_CART({commit}, product) {
		commit('SET_CART', product)
	},
	DELETE_FROM_CART({commit}, index) {
		commit('REMOVE_FROM_CART', index)
	}
}