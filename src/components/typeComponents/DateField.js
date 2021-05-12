import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const DateField = ({ question }) => {
	const [checked, setChecked] = useState(false)
	const dispatch = useDispatch()
	const dateAnswer = useSelector(state => state.answers[question.ID])
	// console.log(dateAnswer)

	const handleCheckBox = () => {
		setChecked(!checked)
		dispatch((updateAnswers(question.ID, '')))
	}

	return (
		<div>
			<input
				type='date'
				name={question.ID}
				value={dateAnswer ?? ''}
				disabled={checked}
				onChange={(event) => dispatch(updateAnswers(question.ID, event.target.value))}
			/>

			<label>En tiedä tarkkaa päivämäärää</label>
			<input
				type='checkbox'
				name='Remove date field'
				onChange={() => handleCheckBox()}
			/>
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField