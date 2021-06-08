import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { useForm } from '../../contexts/FormContext'
import { useField } from '../../hooks/useField'

// Material UI
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const Text = ({ question }) => {
	const { handleInputChange } = useForm()
	const { value, onValueChange } = useField('')

	const handleOnChange = (event) => {
		onValueChange(event.target.value)
		handleDebouncedDispatch(event)
	}

	const handleDebouncedDispatch = debounce((event) => {
		handleInputChange(event.target.name, event.target.value)
	}, 400)

	return (
		<>
			{question.fields.map((field) => {
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={question.ID && question.ID.toString()}
							value={value}
							onChange={(event) => handleOnChange(event)}
							multiline
							rows='4'
							variant='outlined'
							fullWidth
							label={field.text && field.text}
							InputLabelProps={{
								style: {
									fontSize: '1.1rem'
								}
							}}
						/>
					</Box>
				)
			})}
		</>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text
