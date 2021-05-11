import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Range = ({ question }) => {
	const dispatch = useDispatch()
	//console.log(question)
	const rangeValue = useSelector(state => state.answers[question.ID])
	return (
		<div>
			<input
				type='range'
				name={question.ID}
				min={question.choices.min}
				max={question.choices.max}
				value={rangeValue === undefined ? 5 : rangeValue}
				onChange={(event) => dispatch(updateAnswers(question.ID, event.target.value))}
			/>
			<span>{rangeValue ?? ''}</span>
		</div>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range