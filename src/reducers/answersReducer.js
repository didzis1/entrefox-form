const reducer = (state = [], action) => {
	// console.log(action.data)
	// console.log(state)
	switch (action.type) {
	case 'UPDATE':

		if (state.some(page => page.page === action.page)) {

			return state.map(page => {
				if (page.page === action.page) {

					return {
						...page,
						answers: {
							...page.answers,
							[action.data.id]: action.data.value
						}
					}
				}
				return page
			})
		}
		return state.concat({
			page: action.page,
			answers: { [action.data.id]: action.data.value }
		})

	case 'CLEAR':
		return []
	default:
		return state
	}
}

export const updateAnswers = (page, id, value) => {
	// console.log(typeof id, id)
	// console.log(typeof value, value)
	return {
		type: 'UPDATE',
		page: parseInt(page),
		data: {
			id: parseInt(id),
			value
		}
	}
}

export const clearAnswers = () => {
	return {
		type: 'CLEAR'
	}
}

export default reducer