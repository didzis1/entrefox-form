import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const Text = ({ question }) => {
	const dispatch = useDispatch()
	// const textValue = useSelector(state =>
	// 	state.answers.find(answer => answer.id === question.ID)?.value ?? '')

	return (
		<>
			{question.fields.map((field) => {
				const textValue = useSelector(state => state.answers[question.ID[field.ID]])
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={question.ID[field.ID].toString()}
							value={textValue ?? ''}
							onChange={(event) => dispatch(updateAnswers(event.target.name, event.target.value))}
							multiline
							rows="4"
							variant="outlined"
							fullWidth
							label={field.text && field.text}
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