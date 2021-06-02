import questions from '../data/questions.json'

// Initiate the state with empty values for every question in the questions.json file
const initialFormState = questions.map((page) => {
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

export default initialFormState
