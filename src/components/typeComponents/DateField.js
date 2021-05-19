import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

const DateField = ({ question, inputValidation }) => {
	const [checked, setChecked] = useState(false)

	const page = useSelector(state => state.answers.find(page => page.page === question.page))
	// console.log(dateAnswer)

	const handleCheckBox = () => {
		setChecked(!checked)
		inputValidation(question.ID, '')
	}

	return (
		<div className="p-2 sm:p-3 md:p-5">
			<input
				type='date'
				name={question.ID}
				value={page ? page.answers[question.ID] : ''}
				disabled={checked}
				onChange={(event) => inputValidation(question.ID, event.target.value)}
			/>
			<div className="space-x-2 py-3 flex items-center">
				<input
					type='checkbox'
					name='Disable date field'
					onChange={() => handleCheckBox()}
					className="rounded border-gray-300"
				/>
				<label>En tiedä tarkkaa päivämäärää</label>
			</div>
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default DateField