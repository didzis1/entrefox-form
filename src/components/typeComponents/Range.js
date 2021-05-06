import React from 'react'
import PropTypes from 'prop-types'

const Range = ({ question }) => {
	//console.log(question)
	return (
		<>
			<h3>{question.title}</h3>
			{ question.description && <small>{question.description}</small> }
			<input type='range' name={question.ID} min={question.choices.min} max={question.choices.max}/>

		</>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range