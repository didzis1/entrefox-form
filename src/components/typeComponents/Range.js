import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Range = ({ question }) => {
	const dispatch = useDispatch()
	//console.log(question)
	const rangeValue = useSelector(state => state.answers[question.ID])
	return (
		<div className="p-2 sm:p-3 md:p-5 text-center">
			<input
				type='range'
				name={question.ID}
				min={question.choices.min}
				max={question.choices.max}
				value={rangeValue ?? (question.choices.max / 2)}
				onChange={(event) => dispatch(updateAnswers(question.ID, event.target.value))}
				className="w-full"
			/>
			{/* <span>{rangeValue ?? ''}</span> */}
			<span className="">{rangeValue ?? (question.choices.max / 2)}</span>
		</div>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range