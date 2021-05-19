const reducer = (state = [], action) => {
	switch (action.type) {
	case 'UPDATE':

		// Check if page exists in the state
		if (state.some(page => page.id === action.page)) {

			// Loop through the state items updating the desired page if its ID == action.page
			return state.map(page => {
				if (page.id === action.page) {

					// Check if answer exists in the [state -> page -> answers]
					if (page.answers.some(answer => answer.id === action.data.id)) {

						// If value is null, remove it from state
						if (action.data.value === undefined || action.data.value === '')
							return { ...page, answers: page.answers.filter(answer => (answer.id !== action.data.id)) }

						// Answer exists and gets updated to new value
						return {
							...page,
							answers: page.answers.map(answer => {
								if (answer.id === action.data.id){

									return {
										...answer,
										id:action.data.id,
										value:action.data.value
									}
								}
								return answer
							})
						}
					}

					// Answer doesnt exist in the [state -> page -> answers], so it gets added
					return { ...page, answers: page.answers.concat({
						id:action.data.id,
						value:action.data.value
					}) }
				}
				return page
			})
		}

		// Page doesn't exist in the state so it is added along with the new answer value
		return state.concat({
			id: action.page,
			answers: [{ id:action.data.id, value:action.data.value }]
		})

	case 'CLEAR':
		return []
	default:
		return state
	}
}

export const updateAnswers = (page, id, value) => {
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