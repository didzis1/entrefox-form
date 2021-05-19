import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'

import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { useSelector } from 'react-redux'

const DateField = ({ question, inputValidation }) => {

	const [checked, setChecked] = useState(false)
	const page = useSelector(state => state.answers.find(page => page.page === question.page))
	// console.log(dateAnswer)

	const handleCheckBox = () => {
		setChecked(!checked)
		inputValidation(question.ID, null)
	}

	return (
		<Box my={2} >
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					format="dd/MM/yyyy"
					variant="inline"
					inputVariant="outlined"
					disabled={checked}
					name={question.ID.toString()}
					value={page ? page.answers[question.ID] : null}
					onChange={(event) => inputValidation(question.ID, event)}
				/>
			</MuiPickersUtilsProvider>

			<Box>
				<FormControlLabel
					control={
						<Checkbox
							checked={checked}
							name='Datefield disabler'
							onChange={() => handleCheckBox()}
							inputProps={{
								'aria-label': 'datefield disabler'
							}}
							color='primary'
						/>
					}
					label="En tiedä tarkkaa päivämäärää"
				/>
			</Box>
		</Box>
	)
}

DateField.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default DateField