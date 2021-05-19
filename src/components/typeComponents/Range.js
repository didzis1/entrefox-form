import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

const Range = ({ question, inputValidation }) => {

	//console.log(question)
	const page = useSelector(state => state.answers.find(page => page.page === question.page))

	return (
		<div className="p-2 sm:p-3 md:p-5">
			<input
				type='range'
				name={question.ID}
				min={question.choices.min}
				max={question.choices.max}
				value={page ? page.answers[question.ID] : ''}
				onChange={(event) => inputValidation(question.ID, event.target.value)}
				className="w-full bg-red-700 overflow-hidden"
			/>
			{/* <span>{rangeValue ?? ''}</span> */}
		</div>
	)
}

Range.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default Range