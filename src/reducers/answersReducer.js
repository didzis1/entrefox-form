const reducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE':
			// eslint-disable-next-line no-case-declarations
			const newData = {
				id: action.data.id,
				value: action.data.value
			}
			// eslint-disable-next-line no-case-declarations
			const pageForData = action.data.page
			// Check if page exists
			if (state.some((answerPage) => answerPage.page === pageForData)) {
				return state.map((answersPage) => {
					// Check if an item already exists inside the state
					if (
						answersPage.answers.some(
							(answer) => answer.id === newData.id
						)
					) {
						// If value is null/undefined/empty filter it out of the state
						if (!newData || newData.value === '') {
							return {
								...answersPage,
								answers: answersPage.answers.filter(
									(answer) => answer.id !== newData.id
								)
							}
						}
						return {
							...answersPage,
							answers: answersPage.answers.map((answer) =>
								answer.id === newData.id ? newData : answer
							)
						}
					}
					// Item does not exist in state
					return {
						...answersPage,
						answers: answersPage.answers.concat(newData)
					}
				})
			}
			// Page doesn't exist => add with items to state
			return state.concat({
				page: pageForData,
				answers: [newData]
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
		data: {
			page: parseInt(page),
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
