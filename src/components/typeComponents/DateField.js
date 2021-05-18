import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'

import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const DateField = ({ question }) => {
	const [checked, setChecked] = useState(false)
	const dispatch = useDispatch()
	const dateAnswer = useSelector(state => state.answers[question.ID])
	const handleCheckBox = () => {
		setChecked(!checked)
		dispatch((updateAnswers(question.ID, null)))
	}

	return (
		<Box my={2} >
			{/* <input
				type='date'
				name={question.ID}
				value={dateAnswer ?? ''}
				disabled={checked}
			/> */}
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					format="dd/MM/yyyy"
					variant="inline"
					inputVariant="outlined"
					disabled={checked}
					name={question.ID.toString()}
					value={dateAnswer ?? null}
					onChange={(event) => dispatch(updateAnswers(question.ID, event))}
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
						/>
					}
					label="En tiedä tarkkaa päivämäärää"
				/>
			</Box>
		</Box>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField