import React, { useState, useContext, createContext } from 'react'
import initialFormState from './initialFormState'

const FormContext = createContext(null)

export const useForm = () => {
	const context = useContext(FormContext)

	if (!context) {
		throw new Error('useForm() is used outside of FormContext')
	}

	return context
}

// eslint-disable-next-line react/prop-types
const FormContextProvider = ({ children }) => {
	const [formData, setFormData] = useState(initialFormState)
	const [currentPage, setCurrentPage] = useState(1)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const handleSubmitChange = (event) => {
		event.preventDefault()
		setFormSubmitted(!formSubmitted)
	}
	console.log(formData)
	const handleInputChange = (id, value) => {
		const newData = {
			id: parseInt(id),
			value
		}
		// Create a new state variable
		const newState = formData.map((pageToEdit) => {
			// Change the value in the page it is located at
			if (pageToEdit.page === currentPage) {
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
		setFormData(newState)
	}

	const value = {
		formSubmitted,
		formData,
		currentPage,
		handleSubmitChange,
		handleInputChange,
		setCurrentPage,
		setFormSubmitted
	}

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormContextProvider
