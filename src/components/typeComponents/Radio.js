import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

const Radio = ({ question, inputValidation }) => {

	const page = useSelector(state => state.answers.find(page => page.page === question.page))

	return (
		<div className="p-2 sm:p-3 md:p-5">
			{
				question.choices.map((choice) => (
					<div key={choice.ID} className="py-1 space-x-2 flex items-center">
						<input
							type='radio'
							name={question.ID}
							value={page ? page.answers[question.ID] : ''}
							onChange={(event) => inputValidation(event.target.name, choice.text)}
							className="text-red-600 focus:text-red-700 focus:ring-red-600"
						/>
						<label>{choice.text}</label>
					</div>
				))
			}
		</div>
	)
}

Radio.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default Radio