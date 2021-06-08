import { useState } from 'react'
import { useForm } from '../contexts/FormContext'

const initalState = (formData, question) => {
	let data = ''
	formData.forEach((formPage) => {
		const found = formPage.answers.find(
			(answer) => answer.id === question.ID
		)
		if (found) return (data = found.value)
	})
	return data
}

export const useField = (question) => {
	const { formData } = useForm()
	const [value, setValue] = useState(initalState(formData, question))

	const onValueChange = (newValue) => {
		setValue(newValue)
	}

	return {
		value,
		onValueChange,
	}
}
