import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../contexts/FormContext'
import { getAnswerByID } from '../../utils'

// Material UI
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
	const { handleInputChange } = useForm()
	const handleCheckBox = () => {
		setChecked(!checked)
		handleInputChange(question.ID, checked ? null : true)
	}
	return (
		<Box my={2}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					format='dd/MM/yyyy'
					variant='inline'
					inputVariant='outlined'
					label='Päivämäärä'
					InputAdornmentProps={{ position: 'start' }}
					disabled={checked}
					name={question.ID.toString()}
					value={getAnswerByID(question.page, question.ID)}
					onChange={(event) => handleInputChange(question.ID, event)}
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
