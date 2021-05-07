import React from 'react'
import PropTypes from 'prop-types'

const Range = ({ question }) => {
	//console.log(question)
	return (
		<div>
			<input type='range' name={question.ID} min={question.choices.min} max={question.choices.max}/>
		</div>
	)
}

Range.propTypes = {
	question: PropTypes.object
}

export default Range