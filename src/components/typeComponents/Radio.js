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
					<div key={choice.ID} className="py-1">
						<label className="cursor-pointer inline-flex items-center">
							<input
								type='radio'
								name={question.ID}
								value={radioValue}
								onChange={(event) => dispatch(updateAnswers(event.target.name, choice.text))}
								className="text-lime-500 focus:ring-lime-600 mr-2"
							/>
							{choice.text}
						</label>
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