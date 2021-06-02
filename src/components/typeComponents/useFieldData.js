import { useState, useEffect } from 'react'
import { useForm } from '../../contexts/FormContext'

export const useFieldData = (question) => {
	const [fieldData, setFieldData] = useState([])
	const [fieldCounter, setFieldCounter] = useState(0)
	const { handleInputChange } = useForm()

	// Update local state to useForm after small delay to avoid lag
	useEffect(() => {
		const timeout = setTimeout(() => {
			handleInputChange(question.ID, validatedDispatch())
		}, 0)
		return () => clearTimeout(timeout)
	}, [fieldData])

	// Handle field removing and adding based on the fieldCounter value
	useEffect(() => {
		setFieldData(fieldData.filter((field) => !(field.ID > fieldCounter)))
	}, [fieldCounter])

	// Remove all answers from the dispatch that do not contain all the
	// required fields (only 1 field has been filled)
	const validatedDispatch = () => {
		const result = fieldData.filter(
			(field) =>
				field.values.length ===
				question.fields[parseInt(field.ID)].innerFields.length
		)
		return result.length !== 0 ? result : ''
	}

	// Remove a text field if it's empty
	const removeInnerField = (fieldID, innerFieldID) => {
		return fieldData.map((field) => {
			return field.ID === fieldID
				? {
						...field,
						values: field.values.filter(
							(innerField) => innerField.ID !== innerFieldID
						),
				  }
				: field
		})
	}

	const handleChange = (fieldID, innerFieldID, value) => {
		setFieldData(() => {
			if (fieldData.find((field) => field.ID === fieldID)) {
				if (value === '') return removeInnerField(fieldID, innerFieldID)
			}

			if (fieldData.some((fieldState) => fieldState.ID === fieldID)) {
				return fieldData.map((fieldState) => {
					if (fieldState.ID === fieldID) {
						if (
							fieldState.values.some(
								(innerFieldState) =>
									innerFieldState.ID === innerFieldID
							)
						) {
							return {
								...fieldState,
								values: fieldState.values.map((innerField) => {
									if (innerField.ID === innerFieldID) {
										return {
											...innerField,
											value,
										}
									}
									return innerField
								}),
							}
						}
						return {
							...fieldState,
							values: fieldState.values.concat({
								ID: innerFieldID,
								value,
							}),
						}
					}
					return fieldState
				})
			} else {
				return [
					...fieldData,
					{
						ID: fieldID,
						values: [{ ID: innerFieldID, value }],
					},
				]
			}
		})
	}

	const getValue = (fieldID, innerFieldID) => {
		const fieldState = fieldData.find((field) => field.ID === fieldID)

		if (fieldState?.values === undefined) return ''

		const innerField = fieldState.values.find(
			(innerField) => innerField.ID === innerFieldID
		)

		if (innerField?.value === undefined) return ''

		return innerField.value
	}

	// Add new text field to page
	const addField = () => {
		setFieldCounter(fieldCounter + 1)
	}

	// remove the newest text fields from page
	const removeField = () => {
		setFieldCounter(fieldCounter - 1)
	}

	return {
		fieldCounter,
		addField,
		removeField,
		getValue,
		handleChange,
	}
}
