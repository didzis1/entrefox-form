import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const DateField = ({ question }) => {

	const dispatch = useDispatch()
	//const dateAnswer = useSelector(state => state.answers[question.ID])
	// console.log(dateAnswer)
	// console.log(question)
	// Jos klikkaa "En tiedä tarkkaa päivämäärää", kalenterin täytyy tyhjentää arvot
	return (
		<div>
			<input
				type='date'
				name={question.ID}
			/>

			<label>En tiedä tarkkaa päivämäärää</label>
			<input
				type='checkbox'
				name={question.ID}
				onChange={(event) => dispatch(updateAnswers(question.ID, event.target.checked))}
			/>
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField