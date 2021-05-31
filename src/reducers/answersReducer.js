import questions from '../data/questions.json'

// Initiate the state with empty values for every question in the questions.json file
const initialState = questions.map((page) => {
	return {
		page: page.ID,
		answers: page.questions.map((question) => {
			switch (question.type) {
				case 'multi-text':
				case 'text':
					return {
						id: question.ID,
						value: ''
					}
				case 'range':
					return {
						id: question.ID,
						value: 5
					}
				case 'radio':
				case 'date':
					return {
						id: question.ID,
						value: null
					}
				default:
					return {
						id: question.ID,
						value: ''
					}
			}
		})
	}
})

const reducer = (state = initialState, action) => {
	//console.log(state)
	switch (action.type) {
		case 'UPDATE': {
			// Assign variables from action.data
			const newData = {
				id: action.data.id,
				value: action.data.value
			}
			const dataInPage = action.data.page
			// Create a new state -> replace old value with new one
			const newState = state.map((pageToEdit) => {
				// Change the value in the page it is located at
				if (pageToEdit.page === dataInPage) {
					return {
						...pageToEdit,
						answers: pageToEdit.answers.map((answer) =>
							answer.id === newData.id ? newData : answer
						)
					}
				}
				// Return page data (no values need to be changed here)
				return {
					...pageToEdit
				}
			})
			// Replace the old state with new one
			return newState
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
