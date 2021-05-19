import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

import { updateAnswers } from '../../reducers/answersReducer'
import { getAnswerByID } from '../../utils'

const Text = ({ question }) => {

	const dispatch = useDispatch()
	const answers = useSelector(state => state.answers)
	const currentPage = useSelector(state => state.currentPage)

	return (
		<>
			{question.fields.map((field) => {
				return (
					<Box key={field.ID} my={2}>
						<TextField
							name={question.ID[field.ID].toString()}
							value={getAnswerByID(answers, question.page, question.ID[field.ID]) ?? ''}
							onChange={(event) => dispatch(updateAnswers(currentPage, event.target.name, event.target.value))}
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
	question: PropTypes.object
}

export default Text