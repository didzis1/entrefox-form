import React from 'react'
import { useForm } from './contexts/FormContext'

import RadioButton from './components/typeComponents/RadioButton'
import Range from './components/typeComponents/Range'
import Text from './components/typeComponents/Text'
import MultiText from './components/typeComponents/MultiText'
import DateField from './components/typeComponents/DateField'

export const getAnswerByID = (questionPage, questionID) => {
	const { formData } = useForm()
	// Find the page the answer is located at, then find the answer's value based on questionID

	return formData
		.find((answer) => answer.page === questionPage)
		.answers.find((answer) => answer.id === questionID).value
}

const typeComponent = (question) => {
	// Each question returns it's corresponding component
	// Type is assigned in questions.json for each question
	switch (question.type) {
		case 'radio':
			return <RadioButton question={question} />
		case 'range':
			return <Range question={question} />
		case 'text':
			return <Text question={question} />
		case 'multiple-text':
			return <MultiText question={question} />
		case 'date':
			return <DateField question={question} />
		default:
			throw new Error('Type not found...')
	}
}

export default typeComponent
