import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Radio = ({ question }) => {

	const dispatch = useDispatch()
	const radioValue = useSelector(state => state.answers[question.ID])

	return (
		<div className="p-2 sm:p-3 md:p-5">
			{
				question.choices.map((choice) => (
					<div key={choice.ID} className="py-1 space-x-2 flex items-center">
						<input
							type='radio'
							name={question.ID}
							value={radioValue}
							onChange={(event) => dispatch(updateAnswers(event.target.name, choice.text))}
							className="text-indigo-500 focus:text-indigo-600 focus:ring-indigo-600"
						/>
						<label>{choice.text}</label>
					</div>
				))
			}
		</div>
	)
}

Radio.propTypes = {
	question: PropTypes.object
}

export default Radio