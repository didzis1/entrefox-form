import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const Text = ({ question, inputValidation }) => {

	// const textValue = useSelector(state =>
	// 	state.answers.find(answer => answer.id === question.ID)?.value ?? '')
	const page = useSelector(state => state.answers.find(page => page.page === question.page))

	return (
		<>
			{question.fields.map((field) => {
				const textValue = page ? page.answers[question.ID[field.ID]] : ''
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={question.ID[field.ID].toString()}
							value={textValue ?? ''}
							onChange={(event) => inputValidation(event.target.name, event.target.value)}
							multiline
							rows="4"
							variant="outlined"
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
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default Text