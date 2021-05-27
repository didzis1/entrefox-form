const initializeSlider = {
	page: 3,
	answers: [
		{
			id: 7,
			value: 6,
		},
	],
}
const reducer = (state = [initializeSlider], action) => {
	switch (action.type) {
		case 'UPDATE': {
			const newData = {
				id: action.data.id,
				value: action.data.value,
			}
			const pageForData = action.data.page

			// Check if page exists
			if (state.some((answerSet) => answerSet.page === pageForData)) {
				return state.map((answersPage) => {
					if (answersPage.page === pageForData) {
						// Check if the answer exists in the page
						if (
							answersPage.answers.some(
								(answer) => answer.id === newData.id
							)
						) {
							// If answer is empty filter it out of the state
							if (!newData || newData.value === '') {
								return {
									...answersPage,
									answers: answersPage.answers.filter(
										(answer) => answer.id !== newData.id
									),
								}
							}
							// Answer exists and is not empty => replace it with current answer
							return {
								...answersPage,
								answers: answersPage.answers.map((answer) =>
									answer.id === newData.id
										? { ...answer, ...newData }
										: answer
								),
							}
						}
						// Answer does not exist in the state current page
						if (newData.value !== '')
							return {
								...answersPage,
								answers: answersPage.answers.concat(newData),
							}
					}
					return answersPage
				})
			}

			// Page doesn't exist => add with items to state
			if (newData.value !== '')
				return state.concat({
					page: pageForData,
					answers: [newData],
				})
			return state
		}
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
			value,
		},
	}
}

export const clearAnswers = () => {
	return {
		type: 'CLEAR',
	}
}

export default reducer
