import React from 'react'
import PropTypes from 'prop-types'

const DateField = ({ question }) => {
	// console.log(question)
	return (
		<div>
			<input type='date' name={question.ID} />
		</div>
	)
}

DateField.propTypes = {
	question: PropTypes.object
}

export default DateField