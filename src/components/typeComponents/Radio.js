import React from 'react'
import PropTypes from 'prop-types'

// import { useSelector, useDispatch } from 'react-redux'
// import { updateAnswers } from '../../reducers/answersReducer'

const Radio = ({ question }) => {

	return (
		<>
			{
				question.choices.map((choice) => (
					<div key={choice.ID}>
						<label>{choice.text}</label>
						<input type='radio' name={question.ID} />
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