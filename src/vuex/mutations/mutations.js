export default {
	SET_PRODUCTS_TO_STATE: (state, products) => {
		state.products = products;
	},
	SET_CART: (state, product) => {
		if (state.cart.length) {
			let idProductExists = false;
			state.cart.map(function (item) {
				if (item.id === product.id) {
					idProductExists = true;
					item.quantity++
				}
			})
			if (!idProductExists) {
				state.cart.push(product)
			}
		} else {
			state.cart.push(product)
		}
	},
	REMOVE_FROM_CART: (state, index) => {
		state.cart.splice(index, 1)
	}
}