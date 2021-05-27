import questions from '../data/questions.json'

const initialState = questions.map((page) => {
	return {
		page: page.ID,
		answers: page.questions.map((question) => {
			switch (question.type) {
				case 'radio':
					return {
						id: question.ID,
						value: null
					}
				case 'text' || 'multi-text':
					return {
						id: question.ID,
						value: ''
					}
				case 'date':
					return {
						id: question.ID,
						value: undefined
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
	console.log(action)
	switch (action.type) {
		case 'UPDATE': {
			const newData = {
				id: action.data.id,
				value: action.data.value
			}
			const dataInPage = action.data.page
			const newState = state.map((pageToEdit) => {
				if (pageToEdit.page === dataInPage) {
					return {
						...pageToEdit,
						answers: pageToEdit.answers.map((answer) =>
							answer.id === newData.id ? newData : answer
						)
					}
				}
				return {
					...pageToEdit
				}
			})
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
