import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateAnswers } from '../../reducers/answersReducer'

const Text = ({ question }) => {
	const dispatch = useDispatch()

	const textValue = useSelector(state =>
		state.answers.find(answer => answer.id === question.ID)?.value ?? '')
	// const textValue = useSelector(state => state.answers[question.ID]) objektilla

	const handleChange = (event) => {
		dispatch(updateAnswers(event.target.name, event.target.value))
		console.log(textValue)
	}

	if (question.fields) {
		return (
			<>
				{question.fields.map((field) => (
					<div key={field.ID}>
						<label>{field.text}</label>
						<input
							onChange={(event) => handleChange(event)}
							type="text"
							name={question.ID[field.ID]}
							value={textValue}
						/>
					</div>
				))}
			</>
		)
	}

	return (
		<div>
			<input
				onChange={(event) => handleChange(event)}
				type="text" name={question.ID}
				value={textValue}
			/>
		</div>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text
