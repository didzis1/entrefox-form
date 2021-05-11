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
					<div key={field.ID}>
						{field.text && <label>{field.text}</label>}
						<input
							type="text"
							name={question.ID[field.ID]}
							value={textValue ?? ''}
							onChange={(event) => dispatch(updateAnswers(event.target.name, event.target.value))}
						/>
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