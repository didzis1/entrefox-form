import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'
import debounce from 'lodash/debounce'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const Text = ({ question }) => {
	const [textValue, setTextValue] = useState('')
	const dispatch = useDispatch()
	const currentPage = useSelector((state) => state.currentPage)

	// Debounce the dispatch call, dispatch after one second after the user has typed in the input field
	const debounceDispatch = debounce((name, value) => {
		dispatch(updateAnswers(currentPage, name, value))
	}, 1000)

	const handleTextChange = (event) => {
		// Update the state
		const [name, value] = [event.target.name, event.target.value]
		setTextValue(value)
		// Call the debounce dispatch function
		debounceDispatch(name, value)
	}

	return (
		<>
			{question.fields.map((field) => {
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={question.ID && question.ID.toString()}
							value={textValue}
							onChange={(event) => handleTextChange(event)}
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
