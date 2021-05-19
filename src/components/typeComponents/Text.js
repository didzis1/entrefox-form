import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Text = ({ question, inputValidation }) => {

	// const textValue = useSelector(state =>
	// 	state.answers.find(answer => answer.id === question.ID)?.value ?? '')
	const page = useSelector(state => state.answers.find(page => page.page === question.page))

	return (
		<>
			{question.fields.map((field) => {
				const textValue = page ? page.answers[question.ID[field.ID]] : ''
				return (
					<div key={field.ID} className="p-2 sm:p-3 md:p-5">
						{field.text && <label>{field.text}</label>}
						<textarea
							name={question.ID[field.ID]}
							value={textValue ?? ''}
							onChange={(event) => inputValidation(event.target.name, event.target.value)}
							className="rounded-md w-full"
							rows="4"
						></textarea>
					</div>
				)
			})}
		</>
	)
}

Text.propTypes = {
	question: PropTypes.object,
	inputValidation: PropTypes.func
}

export default Text