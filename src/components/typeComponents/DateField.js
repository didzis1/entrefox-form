import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { getAnswerByID } from '../../utils'
import { updateAnswers } from '../../reducers/answersReducer'

const DateField = ({ question }) => {
	const [checked, setChecked] = useState(false)
	const dispatch = useDispatch()
	const answers = useSelector((state) => state.answers)
	const currentPage = useSelector((state) => state.currentPage)
	const handleCheckBox = () => {
		setChecked(!checked)
		dispatch(
			updateAnswers(currentPage, question.ID, !checked ? null : undefined)
		)
	}

	return (
		<Box my={2}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					format='dd/MM/yyyy'
					variant='inline'
					inputVariant='outlined'
					disabled={checked}
					name={question.ID.toString()}
					value={
						getAnswerByID(answers, question.page, question.ID) ??
						null
					}
					onChange={(event) =>
						dispatch(updateAnswers(currentPage, question.ID, event))
					}
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
					label='En tiedä tarkkaa päivämäärää'
				/>
			</Box>
		</Box>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField
