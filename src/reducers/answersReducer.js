const reducer = (state = {}, action) => {
	console.log(action.data)
	// console.log(state)
	switch (action.type) {
	case 'UPDATE':
		// if (state.some(answer => answer.id === action.data.id)) {
		// 	return state.map(answer => {
		// 		if (answer.id === action.data.id) {
		// 			console.log({ ...answer })
		// 			return {
		// 				...answer,
		// 				id: action.data.id,
		// 				value: action.data.value
		// 			}
		// 		}
		// 		return answer
		// 	})
		// }
		// return state.concat(action.data)
		return {
			...state,
			[action.data.id]: action.data.value
		}
	case 'CLEAR':
		return []
	default:
		return state
	}
}

export const updateAnswers = (id, value) => {
	// console.log(typeof id, id)
	// console.log(typeof value, value)
	return {
		type: 'UPDATE',
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