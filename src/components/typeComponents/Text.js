import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Text = ({ question }) => {
	const dispatch = useDispatch()
	// const textValue = useSelector(state =>
	// 	state.answers.find(answer => answer.id === question.ID)?.value ?? '')

	return (
		<>
			{question.fields.map((field) => {
				const textValue = useSelector(state => state.answers[question.ID[field.ID]])
				return (
					<div key={field.ID} className="p-2 sm:p-3 md:p-5">
						{field.text && <label>{field.text}</label>}
						<textarea
							name={question.ID[field.ID]}
							value={textValue ?? ''}
							onChange={(event) => dispatch(updateAnswers(event.target.name, event.target.value))}
							className="rounded-md w-full focus:ring-indigo-"
							rows="4"
						></textarea>
					</div>
				)
			})}
		</>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text