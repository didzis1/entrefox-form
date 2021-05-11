import React from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Radio = ({ question }) => {

	const dispatch = useDispatch()
	const radioValue = useSelector(state => state.answers[question.ID])

	return (
		<>
			{
				question.choices.map((choice) => (
					<div key={choice.ID}>
						<label>{choice.text}</label>
						<input
							type='radio'
							name={question.ID}
							value={radioValue}
							onChange={(event) => dispatch(updateAnswers(event.target.name, choice.text))}
						/>
					</div>
				))
			}
		</>
	)
}

Radio.propTypes = {
	question: PropTypes.object
}

export default Radio