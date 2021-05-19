import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Box from '@material-ui/core/Box'

import { getAnswerByID } from '../../utils'
import { updateAnswers } from '../../reducers/answersReducer'

const RadioButton = ({ question }) => {

	const dispatch = useDispatch()
	const answers = useSelector(state => state.answers)
	const currentPage = useSelector(state => state.currentPage)

	return (
		<Box mt={2}>
			<RadioGroup
				value={getAnswerByID(answers, question.page, question.ID) ?? null}
				name={question.ID.toString()}
				onChange={(event) => dispatch(updateAnswers(currentPage, event.target.name, event.target.value))}>

				{
					question.choices.map((choice) => (
						<Box key={choice.ID}>
							<FormControlLabel
								value={choice.text}
								control={
									<Radio
										name={question.ID.toString()}
										color='primary'
									/>
								}
								label={choice.text}
							/>
							<hr style={{ opacity: 0.25 }} />
						</Box>
					))
				}
			</RadioGroup>
		</Box>
	)
}

RadioButton.propTypes = {
	question: PropTypes.object
}

export default RadioButton