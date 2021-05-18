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
		<div className="p-2 sm:p-3 md:p-5">
			<input
				type='date'
				name={question.ID}
				value={dateAnswer ?? ''}
				disabled={checked}
				onChange={(event) => dispatch(updateAnswers(question.ID, event.target.value))}
				className="rounded"
			/>
			<div className="space-x-2 py-3 flex items-center">
				<label className="cursor-pointer inline-flex items-center">
					<input
						type='checkbox'
						name='Disable date field'
						onChange={() => handleCheckBox()}
						className="rounded border-gray-400 text-lime-500 focus:ring-lime-600 mr-2"
					/>
				En tiedä tarkkaa päivämäärää
				</label>
			</div>
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField