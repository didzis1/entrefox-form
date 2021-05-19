import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Box from '@material-ui/core/Box'

const RadioButton = ({ question, inputValidation }) => {

	const page = useSelector(state => state.answers.find(page => page.page === question.page))

	return (
		<Box mt={2}>
			<RadioGroup value={(page ? page.answers[question.ID] : undefined) ?? null} name={question.ID.toString()} onChange={(event) => inputValidation(event.target.name, event.target.value)}>
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
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default RadioButton