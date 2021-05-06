import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ question }) => {
	// console.log(question)
	return (
		<>
			<h3>{question.title}</h3>
			{ question.description && <small>{question.description}</small> }
			<input type="text" name={question.ID} />
		</>
	)
}

Text.propTypes = {
	question: PropTypes.object
}

export default Text