import { useState } from 'react'

export const useField = (initState) => {
	const [value, setValue] = useState(initState)

	const onValueChange = (newValue) => {
		setValue(newValue)
	}

	return {
		value,
		onValueChange
	}
}
