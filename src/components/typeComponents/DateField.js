import React from 'react'
import PropTypes from 'prop-types'

const DateField = ({ question }) => {
	// console.log(question)
	return (
		<div>
			<h3>{question.title}</h3>
			{ question.description && <small>{question.description}</small> }
			<input type='date' name={question.ID} />
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField